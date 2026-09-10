'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  DIETARY_RESTRICTIONS_MAX_LENGTH,
  type Attendee,
  type AttendeeResponse,
  type Invite,
} from '@/data/types';

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
  dietary_restrictions: string;
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
        dietary_restrictions: a.dietary_restrictions ?? '',
      })),
    },
    validationSchema: Yup.object({
      responses: Yup.array().of(
        Yup.object({
          going: Yup.string().oneOf(['yes', 'no']).required(t('attendingRequired')),
          attending_cocktail: Yup.string().when('going', {
            is: 'yes',
            then: (schema) =>
              schema.oneOf(['yes', 'no']).required(t('cocktailRequired')),
            otherwise: (schema) => schema.notRequired(),
          }),
          dietary_restrictions: Yup.string().max(
            DIETARY_RESTRICTIONS_MAX_LENGTH,
            t('dietaryTooLong', { max: DIETARY_RESTRICTIONS_MAX_LENGTH }),
          ),
        }),
      ),
    }),
    onSubmit: async (values) => {
      setSubmitError(false);
      const responses: AttendeeResponse[] = values.responses.map((r) => {
        const attending = r.going === 'yes';
        return {
          id: r.id,
          going: toBoolean(r.going),
          attending_cocktail: attending ? toBoolean(r.attending_cocktail) : null,
          dietary_restrictions: attending
            ? r.dietary_restrictions.trim() || null
            : null,
        };
      });
      try {
        const res = await fetch('/api/rsvp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inviteId: invite.id, responses }),
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

  const greetingName = attendees.map((a) => a.name).join(' & ');

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-6 rounded-lg bg-white p-8 shadow-sm"
    >
      <p className="text-body text-foreground">{t('inviteGreeting', { name: greetingName })}</p>

      {formik.values.responses.map((r, i) => {
        const fieldErrors = formik.errors.responses?.[i] as
          | { going?: string; attending_cocktail?: string; dietary_restrictions?: string }
          | undefined;
        const fieldTouched = formik.touched.responses?.[i] as
          | { going?: boolean; attending_cocktail?: boolean; dietary_restrictions?: boolean }
          | undefined;

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
              {fieldTouched?.going && fieldErrors?.going && (
                <p className="mt-1 text-body text-vibrant-coral">{fieldErrors.going}</p>
              )}
            </div>

            {/* Shown only when attending */}
            {r.going === 'yes' && (
              <>
                {/* Cocktail hour (required when attending) */}
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
                  {fieldTouched?.attending_cocktail && fieldErrors?.attending_cocktail && (
                    <p className="mt-1 text-body text-vibrant-coral">
                      {fieldErrors.attending_cocktail}
                    </p>
                  )}
                </div>

                {/* Dietary restrictions (optional) */}
                <div className="mt-3">
                  <label
                    htmlFor={`responses[${i}].dietary_restrictions`}
                    className="block text-body font-medium text-foreground"
                  >
                    {t('dietaryLabel')}
                  </label>
                  <textarea
                    id={`responses[${i}].dietary_restrictions`}
                    name={`responses[${i}].dietary_restrictions`}
                    rows={2}
                    maxLength={DIETARY_RESTRICTIONS_MAX_LENGTH}
                    placeholder={t('dietaryPlaceholder')}
                    value={r.dietary_restrictions}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-2 w-full rounded-md border border-soft-apricot px-4 py-2 text-body text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {fieldTouched?.dietary_restrictions && fieldErrors?.dietary_restrictions && (
                    <p className="mt-1 text-body text-vibrant-coral">
                      {fieldErrors.dietary_restrictions}
                    </p>
                  )}
                </div>
              </>
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
