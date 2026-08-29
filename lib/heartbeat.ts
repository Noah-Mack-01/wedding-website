import 'server-only';
import { getSupabase } from './supabase';

/**
 * Update the single heartbeat row's timestamp. Called by the /api/heartbeat
 * route on each authenticated ping, to keep the Supabase free-tier project
 * from auto-pausing due to inactivity.
 */
export async function pingHeartbeat(): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase
    .from('heartbeat')
    .update({ pinged_at: new Date().toISOString() })
    .eq('id', true);

  if (error) throw error;
}
