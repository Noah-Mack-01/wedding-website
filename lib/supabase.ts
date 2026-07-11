import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client using the service-role key.
 *
 * This key bypasses Row-Level Security, so it must NEVER reach the browser.
 * The `server-only` import above makes the build fail if this module is ever
 * pulled into a client bundle. All RSVP reads/writes go through here.
 *
 * The client is created lazily so that `next build` (which imports this module
 * even for dynamic routes) does not require the env vars to be present at build
 * time — they are only needed when a request actually hits the data layer.
 */
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.',
    );
  }

  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
  return client;
}
