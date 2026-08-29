import { NextResponse } from 'next/server';
import { searchInvites } from '@/lib/rsvp';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';

  if (!q.trim()) {
    return NextResponse.json({ ok: true, matches: [] });
  }

  try {
    const matches = await searchInvites(q);
    return NextResponse.json({ ok: true, matches });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Search failed';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
