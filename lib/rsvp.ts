import 'server-only';
import { getSupabase } from './supabase';
import type { Attendee, AttendeeResponse, Invite, InviteMatch } from '@/data/types';

// Invite ids are the pre-generated text codes (see the invites table). Accept
// a permissive but bounded shape so a malformed URL param is rejected before
// it reaches the database, without assuming a specific code scheme.
const INVITE_ID_RE = /^[A-Za-z0-9_-]{1,64}$/;

function isValidInviteId(value: string): boolean {
  return INVITE_ID_RE.test(value.trim());
}

/** Escape ILIKE wildcard/escape characters so user input is matched literally. */
function escapeLikePattern(value: string): string {
  return value.replace(/[\\%_]/g, (ch) => `\\${ch}`);
}

/**
 * Mirror the SQL `attendees.normalized_name` generated column: strip
 * diacritics, lowercase, trim, and collapse internal whitespace runs. The
 * search term must be normalized the same way to match stored values.
 */
function normalizeName(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}

export interface InviteWithAttendees {
  invite: Invite;
  attendees: Attendee[];
}

/**
 * Look up an invitation and its attendees by id.
 * Returns null when the id is malformed or matches no invite (caller
 * renders the not-found state).
 */
export async function getInviteById(rawId: string): Promise<InviteWithAttendees | null> {
  const id = rawId.trim();
  if (!isValidInviteId(id)) return null;

  const supabase = getSupabase();
  const { data: invite, error: inviteError } = await supabase
    .from('invites')
    .select('id, completed, last_updated')
    .eq('id', id)
    .maybeSingle();

  if (inviteError) throw inviteError;
  if (!invite) return null;

  const { data: attendees, error: attendeesError } = await supabase
    .from('attendees')
    .select(
      'id, invite_id, name, normalized_name, email, going, attending_cocktail, dietary_restrictions',
    )
    .eq('invite_id', id)
    .order('name', { ascending: true });

  if (attendeesError) throw attendeesError;

  return { invite: invite as Invite, attendees: (attendees ?? []) as Attendee[] };
}

/**
 * Fuzzy-search invites by attendee name or email. Returns a lightweight
 * summary per matched invite (id + attendee names) — full RSVP state is
 * only fetched later, via getInviteById, once the guest picks one.
 *
 * Intentionally avoids `.or()`: building a raw PostgREST filter string from
 * user input would let characters like `,` or `)` inject extra filter
 * clauses. Two independently-parameterized `.ilike()` calls avoid that.
 *
 * Name matching goes against `normalized_name` (accent/case-folded) with a
 * likewise-normalized term; email stays a plain case-insensitive `.ilike()`.
 */
export async function searchInvites(rawQuery: string): Promise<InviteMatch[]> {
  const term = rawQuery.trim();
  if (!term) return [];

  const emailPattern = `%${escapeLikePattern(term)}%`;
  const namePattern = `%${escapeLikePattern(normalizeName(term))}%`;
  const supabase = getSupabase();

  const [nameResult, emailResult] = await Promise.all([
    supabase.from('attendees').select('invite_id').ilike('normalized_name', namePattern),
    supabase.from('attendees').select('invite_id').ilike('email', emailPattern),
  ]);

  if (nameResult.error) throw nameResult.error;
  if (emailResult.error) throw emailResult.error;

  const matchedInviteIds = new Set<string>();
  for (const row of [...(nameResult.data ?? []), ...(emailResult.data ?? [])]) {
    matchedInviteIds.add(row.invite_id as string);
  }
  if (matchedInviteIds.size === 0) return [];

  // Pull every attendee on each matched invite, not just the ones that
  // matched directly, so a search for "Jane" surfaces "John & Jane".
  const { data: attendees, error: attendeesError } = await supabase
    .from('attendees')
    .select('invite_id, name')
    .in('invite_id', Array.from(matchedInviteIds))
    .order('name', { ascending: true });

  if (attendeesError) throw attendeesError;

  const grouped = new Map<string, string[]>();
  for (const a of attendees ?? []) {
    const key = a.invite_id as string;
    const list = grouped.get(key) ?? [];
    list.push(a.name as string);
    grouped.set(key, list);
  }

  return Array.from(grouped.entries()).map(([id, names]) => ({ id, names }));
}

/**
 * Persist RSVP responses for an invitation.
 *
 * Every write is scoped by BOTH the attendee id AND `invite_id = id`, so a
 * request can never modify rows belonging to a different invitation. Throws
 * if the id is invalid so the route handler can return a 404.
 */
export async function submitRsvp(rawId: string, responses: AttendeeResponse[]): Promise<void> {
  const id = rawId.trim();
  if (!isValidInviteId(id)) throw new Error('Invalid invite id');

  const supabase = getSupabase();
  const { data: invite, error: inviteError } = await supabase
    .from('invites')
    .select('id')
    .eq('id', id)
    .maybeSingle();

  if (inviteError) throw inviteError;
  if (!invite) throw new Error('Invalid invite id');

  for (const r of responses) {
    const { error } = await supabase
      .from('attendees')
      .update({
        going: r.going,
        attending_cocktail: r.attending_cocktail,
        dietary_restrictions: r.dietary_restrictions,
      })
      .eq('id', r.id)
      .eq('invite_id', id); // scope: never touch another invite's rows

    if (error) throw error;
  }

  const { error: completeError } = await supabase
    .from('invites')
    .update({ completed: true, last_updated: new Date().toISOString() })
    .eq('id', id);

  if (completeError) throw completeError;
}
