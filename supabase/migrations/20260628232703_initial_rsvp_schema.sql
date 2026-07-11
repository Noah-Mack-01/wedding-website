-- Initial RSVP schema: invites + attendees.
-- RLS is enabled with no policies, so only the service-role key (used
-- server-side) can read or write. The public/anon role is denied.

create table if not exists invites (
  code         text primary key,           -- store UPPERCASE; app normalizes input
  name         text not null,
  completed    boolean not null default false,
  last_updated timestamptz not null default now()
);

create table if not exists attendees (
  id                 uuid primary key default gen_random_uuid(),
  invite_id          text not null references invites(code) on delete cascade,
  name               text not null,
  going              boolean,              -- null = unanswered
  attending_cocktail boolean               -- null = unanswered
);

create index if not exists attendees_invite_id_idx on attendees(invite_id);

alter table invites   enable row level security;
alter table attendees enable row level security;
