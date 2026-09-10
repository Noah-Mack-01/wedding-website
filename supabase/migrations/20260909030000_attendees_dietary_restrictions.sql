-- Add a free-text dietary restrictions note per attendee. Captured on the RSVP
-- form only for guests who are attending; null / empty means "none given".
-- The app caps the stored value at 500 characters (see app/api/rsvp/route.ts).

alter table attendees add column if not exists dietary_restrictions text;
