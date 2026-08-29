-- Heartbeat table: a single row whose timestamp is updated by periodic
-- pings (see /api/heartbeat) to keep the Supabase free-tier project from
-- auto-pausing due to inactivity. RLS is enabled with no policies, so only
-- the service-role key (used server-side) can read or write.

create table if not exists heartbeat (
  -- `id` is fixed to `true` and constrained to only ever equal `true`, so
  -- the primary key + check constraint guarantee at most one row can ever
  -- exist (the Postgres "singleton table" pattern).
  id        boolean primary key default true,
  pinged_at timestamptz not null default now(),
  constraint heartbeat_singleton check (id)
);

insert into heartbeat (id) values (true)
  on conflict (id) do nothing;

alter table heartbeat enable row level security;
