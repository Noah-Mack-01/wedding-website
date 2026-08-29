import { NextResponse } from 'next/server';
import { submitRsvp } from '@/lib/rsvp';
import type { AttendeeResponse } from '@/data/types';

interface RsvpRequestBody {
  inviteId?: unknown;
  responses?: unknown;
}

function parseResponses(input: unknown): AttendeeResponse[] | null {
  if (!Array.isArray(input)) return null;
  const result: AttendeeResponse[] = [];
  for (const item of input) {
    if (!item || typeof item !== 'object') return null;
    const r = item as Record<string, unknown>;
    if (typeof r.id !== 'string') return null;
    const going = r.going;
    const cocktail = r.attending_cocktail;
    if (going !== null && typeof going !== 'boolean') return null;
    if (cocktail !== null && typeof cocktail !== 'boolean') return null;
    result.push({
      id: r.id,
      going: going as boolean | null,
      attending_cocktail: cocktail as boolean | null,
    });
  }
  return result;
}

export async function POST(request: Request) {
  let body: RsvpRequestBody;
  try {
    body = (await request.json()) as RsvpRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON' },
      { status: 400 },
    );
  }

  if (typeof body.inviteId !== 'string' || !body.inviteId.trim()) {
    return NextResponse.json(
      { ok: false, error: 'Missing invite id' },
      { status: 400 },
    );
  }

  const responses = parseResponses(body.responses);
  if (!responses) {
    return NextResponse.json(
      { ok: false, error: 'Invalid responses' },
      { status: 400 },
    );
  }

  try {
    await submitRsvp(body.inviteId, responses);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Submission failed';
    const status = message === 'Invalid invite id' ? 404 : 500;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
