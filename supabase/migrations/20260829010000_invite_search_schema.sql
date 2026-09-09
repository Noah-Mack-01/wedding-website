-- Replace invite-code entry with name/email search: invites gets a UUID
-- primary key, attendees gains a searchable email column, and the FK from
-- attendees -> invites is repointed from the text `code` to the new `id`.

-- 1. Add a UUID identity column to invites. Because the default is volatile
--    (gen_random_uuid()), Postgres backfills a distinct id for every
--    existing row, not just new ones.
alter table invites add column id uuid not null default gen_random_uuid();

-- 2. Give it a uniqueness guarantee so it can be an FK target before the
--    primary key itself is swapped over.
alter table invites add constraint invites_id_key unique (id);

-- 3. Add a new UUID column on attendees, backfill it from the existing
--    text invite_id -> invites.code join, then swap it in for the old column.
alter table attendees add column invite_id_new uuid;

update attendees a
set invite_id_new = i.id
from invites i
where i.code = a.invite_id;

alter table attendees alter column invite_id_new set not null;

alter table attendees drop constraint attendees_invite_id_fkey;
drop index if exists attendees_invite_id_idx;
alter table attendees drop column invite_id;
alter table attendees rename column invite_id_new to invite_id;

-- 4. Swap invites' primary key from code -> id. This must happen BEFORE the
--    attendees -> invites FK is (re)created: a FK created against invites(id)
--    while `invites_id_key` is the only unique index on `id` gets pinned to
--    that index, which then can't be dropped ("other objects depend on it").
--    Doing the PK swap first means the FK below binds to invites_pkey.
alter table invites drop constraint invites_pkey;
alter table invites drop constraint invites_id_key; -- superseded by the PK below
alter table invites add constraint invites_pkey primary key (id);

-- 5. Point the attendees FK at the new invites primary key and reindex.
alter table attendees
  add constraint attendees_invite_id_fkey
  foreign key (invite_id) references invites(id) on delete cascade;

create index if not exists attendees_invite_id_idx on attendees(invite_id);

-- 6. Drop the columns the search-based flow no longer needs.
alter table invites drop column code;
alter table invites drop column name;

-- 7. Add attendee email + case-insensitive lookup indexes to support search.
alter table attendees add column email text;

create index if not exists attendees_name_lower_idx on attendees (lower(name));
create index if not exists attendees_email_lower_idx on attendees (lower(email));
