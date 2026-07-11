'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import type { Attendee, AttendeeResponse, Invite } from '@/data/types';

interface RsvpFormProps {
  invite: Invite;
  attendees: Attendee[];
}

type Choice = 'yes' | 'no' | '';

interface ResponseValue {
  id: string;
  name: string;
  going: Choice;
  attending_cocktail: Choice;
}

function toChoice(value: boolean | null): Choice {
  if (value === true) return 'yes';
  if (value === false) return 'no';
  return '';
}

function toBoolean(choice: Choice): boolean | null {
  if (choice === 'yes') return true;
  if (choice === 'no') return false;
  return null;
}

export default function RsvpForm({ invite, attendees }: RsvpFormProps) {
  const t = useTranslations('rsvp');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const formik = useFormik<{ responses: ResponseValue[] }>({
    initialValues: {
      responses: attendees.map((a) => ({
        id: a.id,
        name: a.name,
        going: toChoice(a.going),
        attending_cocktail: toChoice(a.attending_cocktail),
      })),
    },
    validationSchema: Yup.object({
      responses: Yup.array().of(
        Yup.object({
          going: Yup.string().oneOf(['yes', 'no']).required(t('attendingRequired')),
        }),
      ),
    }),
    onSubmit: async (values) => {
      setSubmitError(false);
      const responses: AttendeeResponse[] = values.responses.map((r) => ({
        id: r.id,
        going: toBoolean(r.going),
        attending_cocktail: toBoolean(r.attending_cocktail),
      }));
      try {
        const res = await fetch('/api/rsvp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: invite.code, responses }),
        });
        const data = (await res.json()) as { ok: boolean };
        if (!res.ok || !data.ok) throw new Error('submit failed');
        setSubmitted(true);
      } catch {
        setSubmitError(true);
      }
    },
  });

  if (submitted) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <p className="text-heading font-semibold text-primary">{t('thankYou')}</p>
        <p className="mt-2 text-body text-foreground">{t('confirmationMessage')}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-6 rounded-lg bg-white p-8 shadow-sm"
    >
      <p className="text-body text-foreground">{t('inviteGreeting', { name: invite.name })}</p>

      {formik.values.responses.map((r, i) => {
        const error = (
          formik.errors.responses?.[i] as { going?: string } | undefined
        )?.going;
        const touched = (
          formik.touched.responses?.[i] as { going?: boolean } | undefined
        )?.going;

        return (
          <div key={r.id} className="border-t border-soft-apricot pt-6 first:border-t-0 first:pt-0">
            <p className="text-body font-semibold text-primary">{r.name}</p>

            {/* Attending the wedding (required) */}
            <div className="mt-3">
              <label className="block text-body font-medium text-foreground">
                {t('attendingLabel')}
              </label>
              <div className="mt-2 flex gap-3">
                {(['yes', 'no'] as const).map((val) => (
                  <label
                    key={val}
                    className={`flex flex-1 cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-body transition-colors ${
                      r.going === val
                        ? 'border-primary bg-muted text-primary'
                        : 'border-soft-apricot text-foreground hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`responses[${i}].going`}
                      value={val}
                      checked={r.going === val}
                      onChange={formik.handleChange}
                      className="sr-only"
                    />
                    {t(val === 'yes' ? 'attendingYes' : 'attendingNo')}
                  </label>
                ))}
              </div>
              {touched && error && (
                <p className="mt-1 text-body text-vibrant-coral">{error}</p>
              )}
            </div>

            {/* Cocktail hour (optional, shown when attending) */}
            {r.going === 'yes' && (
              <div className="mt-3">
                <label className="block text-body font-medium text-foreground">
                  {t('cocktailLabel')}
                </label>
                <div className="mt-2 flex gap-3">
                  {(['yes', 'no'] as const).map((val) => (
                    <label
                      key={val}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-body transition-colors ${
                        r.attending_cocktail === val
                          ? 'border-primary bg-muted text-primary'
                          : 'border-soft-apricot text-foreground hover:border-primary'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`responses[${i}].attending_cocktail`}
                        value={val}
                        checked={r.attending_cocktail === val}
                        onChange={formik.handleChange}
                        className="sr-only"
                      />
                      {t(val === 'yes' ? 'cocktailYes' : 'cocktailNo')}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {submitError && (
        <p className="text-body text-vibrant-coral">{t('submitError')}</p>
      )}

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full rounded-full bg-primary px-8 py-3 text-body font-medium text-white transition-colors hover:bg-primary/80 disabled:opacity-50"
      >
        {formik.isSubmitting ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}
