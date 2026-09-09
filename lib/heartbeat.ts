import 'server-only';
import { getSupabase } from './supabase';

/**
 * Insert a new heartbeat row. Called by the /api/heartbeat route on each
 * authenticated ping, to keep the Supabase free-tier project from
 * auto-pausing due to inactivity.
 */
export async function pingHeartbeat(): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase
    .from('heartbeat')
    .insert({ pinged_at: new Date().toISOString() });

  if (error) throw error;
}
