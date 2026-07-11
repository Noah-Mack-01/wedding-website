import 'server-only';
import { getSupabase } from './supabase';
import type { Attendee, AttendeeResponse, Invite } from '@/data/types';

/** Normalize a raw code: trim whitespace, uppercase. Codes are stored uppercase. */
export function normalizeCode(raw: string): string {
  return raw.trim().toUpperCase();
}

export interface InviteWithAttendees {
  invite: Invite;
  attendees: Attendee[];
}

/**
 * Look up an invitation and its attendees by code.
 * Returns null when no invite matches (caller renders the invalid-code state).
 */
export async function getInviteByCode(
  raw: string,
): Promise<InviteWithAttendees | null> {
  const code = normalizeCode(raw);
  if (!code) return null;

  const supabase = getSupabase();
  const { data: invite, error: inviteError } = await supabase
    .from('invites')
    .select('code, name, completed, last_updated')
    .eq('code', code)
    .maybeSingle();

  if (inviteError) throw inviteError;
  if (!invite) return null;

  const { data: attendees, error: attendeesError } = await supabase
    .from('attendees')
    .select('id, invite_id, name, going, attending_cocktail')
    .eq('invite_id', code)
    .order('name', { ascending: true });

  if (attendeesError) throw attendeesError;

  return { invite: invite as Invite, attendees: (attendees ?? []) as Attendee[] };
}

/**
 * Persist RSVP responses for an invitation.
 *
 * Every write is scoped by BOTH the attendee id AND `invite_id = code`, so a
 * request can never modify rows belonging to a different invitation. Throws if
 * the code is invalid so the route handler can return an error.
 */
export async function submitRsvp(
  raw: string,
  responses: AttendeeResponse[],
): Promise<void> {
  const code = normalizeCode(raw);
  if (!code) throw new Error('Missing invite code');

  const supabase = getSupabase();
  // Verify the invite exists before mutating anything.
  const { data: invite, error: inviteError } = await supabase
    .from('invites')
    .select('code')
    .eq('code', code)
    .maybeSingle();

  if (inviteError) throw inviteError;
  if (!invite) throw new Error('Invalid invite code');

  for (const r of responses) {
    const { error } = await supabase
      .from('attendees')
      .update({ going: r.going, attending_cocktail: r.attending_cocktail })
      .eq('id', r.id)
      .eq('invite_id', code); // scope: never touch another invite's rows

    if (error) throw error;
  }

  const { error: completeError } = await supabase
    .from('invites')
    .update({ completed: true, last_updated: new Date().toISOString() })
    .eq('code', code);

  if (completeError) throw completeError;
}
