'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import type { InviteMatch } from '@/data/types';

interface InviteSearchProps {
  /** Show the not-found state (set when a URL `invite` param matched no invite). */
  invalid?: boolean;
}

// Placeholder contact details — replace with the couple's real text/email.
const CONTACT_PHONE = '+1 (555) 123-4567';
const CONTACT_EMAIL = 'hello@example.com';

const DEBOUNCE_MS = 300;
const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS = 8;

type Status = 'idle' | 'loading' | 'results' | 'empty' | 'error';

export default function InviteSearch({ invalid = false }: InviteSearchProps) {
  const t = useTranslations('rsvp');
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [matches, setMatches] = useState<InviteMatch[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [navigating, setNavigating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  // Monotonic id so out-of-order responses can be discarded.
  const requestSeq = useRef(0);

  const listboxId = useId();
  const optionId = (index: number) => `${listboxId}-opt-${index}`;

  const trimmed = query.trim();
  const shown = matches.slice(0, MAX_RESULTS);
  const truncated = matches.length > MAX_RESULTS;

  // Debounced search. Re-runs whenever the query changes; the cleanup cancels a
  // still-pending timer (including on unmount), and `requestSeq` guards against a
  // slow response landing after a newer one.
  useEffect(() => {
    if (trimmed.length < MIN_QUERY_LENGTH) {
      requestSeq.current += 1; // invalidate anything in flight
      setStatus('idle');
      setMatches([]);
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    const handle = setTimeout(async () => {
      const seq = ++requestSeq.current;
      setStatus('loading');
      setOpen(true);
      setActiveIndex(-1);
      try {
        const res = await fetch(`/api/rsvp/search?q=${encodeURIComponent(trimmed)}`);
        const data = (await res.json()) as { ok: boolean; matches?: InviteMatch[] };
        if (seq !== requestSeq.current) return; // superseded
        if (!res.ok || !data.ok) throw new Error('search failed');
        const results = data.matches ?? [];
        setMatches(results);
        setStatus(results.length === 0 ? 'empty' : 'results');
      } catch {
        if (seq !== requestSeq.current) return;
        setMatches([]);
        setStatus('error');
      }
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(handle);
      requestSeq.current += 1; // drop any response from this query on unmount/change
    };
  }, [trimmed]);

  // Close the drop-down on an outside click / tap.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const selectMatch = (match: InviteMatch | undefined) => {
    if (!match || navigating) return;
    setNavigating(true);
    setOpen(false);
    router.push(`/rsvp?invite=${encodeURIComponent(match.id)}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (shown.length === 0) return;
      e.preventDefault();
      setOpen(true);
      setActiveIndex((prev) => {
        const next =
          e.key === 'ArrowDown'
            ? (prev + 1) % shown.length
            : (prev - 1 + shown.length) % shown.length;
        return next;
      });
      return;
    }
    if (e.key === 'Enter' && open && activeIndex >= 0) {
      e.preventDefault();
      selectMatch(shown[activeIndex]);
    }
  };

  const showInvalidBanner = invalid && query === '' && status === 'idle';

  const statusMessage =
    status === 'loading'
      ? t('searching')
      : status === 'error'
        ? t('searchError')
        : status === 'empty'
          ? t('notFoundHeading')
          : status === 'results'
            ? t('resultsFound', { count: matches.length })
            : '';

  return (
    <div className="mx-auto max-w-md">
      <div ref={containerRef} className="rounded-lg bg-white p-8 shadow-sm">
        <label htmlFor="invite-query" className="block text-body font-medium text-primary">
          {t('searchLabel')}
        </label>
        <p className="mt-1 text-body text-foreground/70">{t('searchHelp')}</p>

        <div className="relative mt-3">
          <input
            id="invite-query"
            type="text"
            role="combobox"
            autoComplete="off"
            aria-autocomplete="list"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-activedescendant={
              open && activeIndex >= 0 ? optionId(activeIndex) : undefined
            }
            placeholder={t('searchPlaceholder')}
            value={query}
            disabled={navigating}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onFocus={() => {
              if (status === 'results' || status === 'empty' || status === 'error') {
                setOpen(true);
              }
            }}
            onKeyDown={onKeyDown}
            className={`w-full rounded-md border px-4 py-2 text-body text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
              showInvalidBanner || status === 'empty'
                ? 'border-vibrant-coral'
                : 'border-soft-apricot'
            }`}
          />

          {open && (
            <ul
              id={listboxId}
              role="listbox"
              aria-label={t('searchLabel')}
              className="absolute z-10 mt-1 w-full overflow-hidden rounded-md border border-soft-apricot bg-white shadow-md"
            >
              {status === 'loading' && (
                <li className="px-4 py-3 text-body text-foreground/70">{t('searching')}</li>
              )}

              {status === 'results' &&
                shown.map((m, i) => (
                  <li
                    key={m.id}
                    id={optionId(i)}
                    role="option"
                    aria-selected={i === activeIndex}
                    onPointerEnter={() => setActiveIndex(i)}
                    onClick={() => selectMatch(m)}
                    className={`cursor-pointer px-4 py-3 text-body transition-colors ${
                      i === activeIndex
                        ? 'bg-muted text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {m.names.join(', ')}
                  </li>
                ))}

              {status === 'results' && truncated && (
                <li className="px-4 py-2 text-body text-foreground/60">
                  {t('resultsTruncated')}
                </li>
              )}

              {status === 'empty' && (
                <li className="px-4 py-4 text-body">
                  <p className="font-semibold text-vibrant-coral">{t('notFoundHeading')}</p>
                  <p className="mt-1 text-foreground">{t('notFoundHelp')}</p>
                  <p className="mt-3 text-foreground/80">{t('needHelp')}</p>
                  <p className="mt-1 text-foreground">
                    <a href={`sms:${CONTACT_PHONE}`} className="text-primary underline">
                      {CONTACT_PHONE}
                    </a>
                    {' · '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </li>
              )}

              {status === 'error' && (
                <li className="px-4 py-3 text-body text-vibrant-coral">{t('searchError')}</li>
              )}
            </ul>
          )}
        </div>

        {showInvalidBanner && (
          <p className="mt-3 text-body text-vibrant-coral">{t('notFoundHelp')}</p>
        )}

        <p className="sr-only" role="status" aria-live="polite">
          {statusMessage}
        </p>
      </div>
    </div>
  );
}
