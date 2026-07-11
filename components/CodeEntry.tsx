'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

interface CodeEntryProps {
  /** Show the invalid-code state (set when a URL/entered code matched no invite). */
  invalid?: boolean;
}

// Placeholder contact details — replace with the couple's real text/email.
const CONTACT_PHONE = '+1 (555) 123-4567';
const CONTACT_EMAIL = 'hello@example.com';

export default function CodeEntry({ invalid = false }: CodeEntryProps) {
  const t = useTranslations('rsvp');
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const showInvalid = invalid && code.trim() === '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = code.trim();
    if (!trimmed) {
      setError(true);
      return;
    }
    router.push(`/rsvp?invite=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-sm">
        <label htmlFor="code" className="block text-body font-medium text-primary">
          {t('codeLabel')}
        </label>
        <p className="mt-1 text-body text-foreground/70">{t('codeHelp')}</p>
        <input
          id="code"
          name="code"
          type="text"
          autoComplete="off"
          placeholder={t('codePlaceholder')}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError(false);
          }}
          className={`mt-3 w-full rounded-md border px-4 py-2 text-body uppercase tracking-wide text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
            error || showInvalid ? 'border-vibrant-coral' : 'border-soft-apricot'
          }`}
        />
        {error && (
          <p className="mt-1 text-body text-vibrant-coral">{t('codeRequired')}</p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-primary px-8 py-3 text-body font-medium text-white transition-colors hover:bg-primary/80"
        >
          {t('codeSubmit')}
        </button>
      </form>

      {showInvalid && (
        <div className="mt-6 rounded-lg border border-vibrant-coral bg-white p-6 text-center shadow-sm">
          <p className="text-body font-semibold text-vibrant-coral">
            {t('invalidCode')}
          </p>
          <p className="mt-2 text-body text-foreground">{t('codeOnInvitation')}</p>
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
