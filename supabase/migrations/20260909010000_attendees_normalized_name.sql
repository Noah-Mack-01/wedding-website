-- Add a normalized_name column to attendees for accent- and case-insensitive
-- name search. The column is GENERATED ALWAYS (stored), so it stays in sync
-- with `name` automatically with no application involvement.
--
-- Normalization: strip diacritics (José -> jose), lowercase, trim, and
-- collapse internal whitespace runs to a single space. The app mirrors this
-- exactly when normalizing the search term (see lib/rsvp.ts).

-- unaccent() ships with Postgres but is only STABLE (its result depends on
-- the `unaccent` text-search dictionary, which is theoretically mutable).
-- A generated column requires an IMMUTABLE expression, so wrap it: pinning
-- the dictionary argument makes the wrapper safe to declare IMMUTABLE.
create extension if not exists unaccent;

create or replace function immutable_unaccent(text)
  returns text
  language sql
  immutable
  parallel safe
  strict
as $$ select unaccent('unaccent', $1) $$;

alter table attendees
  add column normalized_name text
  generated always as (
    lower(immutable_unaccent(regexp_replace(trim(name), '\s+', ' ', 'g')))
  ) stored;

create index if not exists attendees_normalized_name_idx
  on attendees (normalized_name);

-- Superseded by the generated column + its plain btree index above.
drop index if exists attendees_name_lower_idx;
