'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import type { InviteMatch } from '@/data/types';

interface InviteSearchProps {
  /** Show the not-found state (set when a URL/entered search matched no invite). */
  invalid?: boolean;
}

// Placeholder contact details — replace with the couple's real text/email.
const CONTACT_PHONE = '+1 (555) 123-4567';
const CONTACT_EMAIL = 'hello@example.com';

export default function InviteSearch({ invalid = false }: InviteSearchProps) {
  const t = useTranslations('rsvp');
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [matches, setMatches] = useState<InviteMatch[] | null>(null);

  const showInvalid = invalid && query.trim() === '' && matches === null;
  const noResults = matches !== null && matches.length === 0;
  const multipleMatches = matches !== null && matches.length > 1;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setError(true);
      return;
    }
    setError(false);
    setSearchError(false);
    setLoading(true);
    try {
      const res = await fetch(`/api/rsvp/search?q=${encodeURIComponent(trimmed)}`);
      const data = (await res.json()) as { ok: boolean; matches?: InviteMatch[] };
      if (!res.ok || !data.ok) throw new Error('search failed');
      const results = data.matches ?? [];
      if (results.length === 1) {
        router.push(`/rsvp?invite=${encodeURIComponent(results[0].id)}`);
        return; // keep loading state true through the navigation
      }
      setMatches(results);
      setLoading(false);
    } catch {
      setSearchError(true);
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-sm">
        <label htmlFor="query" className="block text-body font-medium text-primary">
          {t('searchLabel')}
        </label>
        <p className="mt-1 text-body text-foreground/70">{t('searchHelp')}</p>
        <input
          id="query"
          name="query"
          type="text"
          autoComplete="off"
          placeholder={t('searchPlaceholder')}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setError(false);
            setMatches(null);
          }}
          className={`mt-3 w-full rounded-md border px-4 py-2 text-body text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
            error || showInvalid || noResults ? 'border-vibrant-coral' : 'border-soft-apricot'
          }`}
        />
        {error && (
          <p className="mt-1 text-body text-vibrant-coral">{t('searchRequired')}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-primary px-8 py-3 text-body font-medium text-white transition-colors hover:bg-primary/80 disabled:opacity-50"
        >
          {loading ? t('searching') : t('searchSubmit')}
        </button>
      </form>

      {multipleMatches && (
        <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
          <p className="text-body font-semibold text-primary">{t('multipleMatchesHeading')}</p>
          <ul className="mt-4 space-y-2">
            {matches!.map((m) => (
              <li key={m.id}>
                <Link
                  href={`/rsvp?invite=${encodeURIComponent(m.id)}`}
                  className="block rounded-md border border-soft-apricot px-4 py-3 text-body text-foreground transition-colors hover:border-primary"
                >
                  {m.names.join(' & ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(showInvalid || noResults || searchError) && (
        <div className="mt-6 rounded-lg border border-vibrant-coral bg-white p-6 text-center shadow-sm">
          <p className="text-body font-semibold text-vibrant-coral">
            {t('notFoundHeading')}
          </p>
          <p className="mt-2 text-body text-foreground">{t('notFoundHelp')}</p>
          <p className="mt-4 text-body text-foreground/80">{t('needHelp')}</p>
          <p className="mt-2 text-body text-foreground">
            <a href={`sms:${CONTACT_PHONE}`} className="text-primary underline">
              {CONTACT_PHONE}
            </a>
            {' · '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
