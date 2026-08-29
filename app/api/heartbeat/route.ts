import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { pingHeartbeat } from '@/lib/heartbeat';

function isAuthorized(request: Request): boolean {
  const expected = process.env.HEARTBEAT_SECRET;
  if (!expected) {
    console.error('HEARTBEAT_SECRET is not set');
    return false;
  }

  const header = request.headers.get('authorization') ?? '';
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) return false;

  const provided = Buffer.from(token);
  const secret = Buffer.from(expected);
  if (provided.length !== secret.length) return false;

  return timingSafeEqual(provided, secret);
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return new NextResponse(null, { status: 401 });
  }

  try {
    await pingHeartbeat();
  } catch (err) {
    console.error('Heartbeat update failed:', err);
    return new NextResponse(null, { status: 500 });
  }

  return new NextResponse(null, { status: 200 });
}
