-- Replace invite-code entry with name/email search. The invite identifier
-- stays a text code -- the existing `invites.code` is simply renamed to
-- `invites.id`, so codes generated ahead of time can be seeded directly as
-- primary keys. Attendees gain a searchable email column plus a
-- case-insensitive email lookup index. Invites no longer need a display
-- name; the RSVP flow builds greetings from attendee names.

-- 1. The pre-generated text code becomes the canonical id. Renaming the
--    column automatically carries the primary key and the
--    attendees.invite_id -> invites FK along with it.
alter table invites rename column code to id;

-- 2. Drop the invite display name; greetings come from attendee names now.
alter table invites drop column name;

-- 3. Add attendee email + a case-insensitive email lookup index for search.
--    (Name search uses attendees.normalized_name, added in a later migration.)
alter table attendees add column email text;

create index if not exists attendees_email_lower_idx on attendees (lower(email));
