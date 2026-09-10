-- Reconcile invites.id to a text code.
--
-- The 20260829010000 migration was applied to the live database in an earlier
-- form that added a fresh `uuid` primary key (gen_random_uuid()) and dropped
-- the original text `code` column. That migration file was later rewritten to
-- a plain `code` -> `id` rename, but the recorded migration was never re-run,
-- so the live database still has `invites.id` as `uuid` while the app
-- (lib/rsvp.ts) and every later migration expect a text id.
--
-- This migration brings the live database in line with the intended text-id
-- shape. Existing id values are preserved verbatim (the uuid text form), so
-- referential integrity and current RSVP links keep working; issuing shorter
-- human-friendly codes is a separate re-seed, not a schema concern.
--
-- On a database built fresh from these migrations `invites.id` is already
-- `text`, so the type changes below are harmless no-ops and the FK is simply
-- dropped and recreated unchanged.

-- 1. Drop the attendees -> invites FK so both columns can be retyped.
alter table attendees drop constraint attendees_invite_id_fkey;

-- 2. uuid -> text on both sides of the relationship (no-op if already text).
alter table invites   alter column id        type text using id::text;
alter table attendees alter column invite_id type text using invite_id::text;

-- 3. Recreate the FK.
alter table attendees
  add constraint attendees_invite_id_fkey
  foreign key (invite_id) references invites(id) on delete cascade;
