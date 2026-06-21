'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function RsvpForm() {
  const t = useTranslations('rsvp');
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      attending: '',
      guests: '1',
      dietary: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t('nameRequired')),
      attending: Yup.string().required(t('attendingRequired')),
      guests: Yup.number().min(1).max(10),
      dietary: Yup.string(),
    }),
    onSubmit: async (values) => {
      // Submission handler — wire to backend or form service here
      console.log('RSVP submitted:', values);
      setSubmitted(true);
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
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-body font-medium text-primary">
          {t('nameLabel')}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t('namePlaceholder')}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`mt-1 w-full rounded-md border px-4 py-2 text-body text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
            formik.touched.name && formik.errors.name
              ? 'border-vibrant-coral'
              : 'border-soft-apricot'
          }`}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="mt-1 text-body text-vibrant-coral">{formik.errors.name}</p>
        )}
      </div>

      {/* Attending */}
      <div>
        <label className="block text-body font-medium text-primary">
          {t('attendingLabel')}
        </label>
        <div className="mt-2 flex gap-4">
          {(['yes', 'no'] as const).map((val) => (
            <label
              key={val}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-2 text-body transition-colors ${
                formik.values.attending === val
                  ? 'border-primary bg-muted text-primary'
                  : 'border-soft-apricot text-foreground hover:border-primary'
              }`}
            >
              <input
                type="radio"
                name="attending"
                value={val}
                checked={formik.values.attending === val}
                onChange={formik.handleChange}
                className="sr-only"
              />
              {t(val === 'yes' ? 'attendingYes' : 'attendingNo')}
            </label>
          ))}
        </div>
        {formik.touched.attending && formik.errors.attending && (
          <p className="mt-1 text-body text-vibrant-coral">{formik.errors.attending}</p>
        )}
      </div>

      {/* Number of guests — only shown if attending */}
      {formik.values.attending === 'yes' && (
        <div>
          <label htmlFor="guests" className="block text-body font-medium text-primary">
            {t('guestsLabel')}
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={10}
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-24 rounded-md border border-soft-apricot px-4 py-2 text-body text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      )}

      {/* Dietary restrictions */}
      {formik.values.attending === 'yes' && (
        <div>
          <label htmlFor="dietary" className="block text-body font-medium text-primary">
            {t('dietaryLabel')}
          </label>
          <input
            id="dietary"
            name="dietary"
            type="text"
            placeholder={t('dietaryPlaceholder')}
            value={formik.values.dietary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-full rounded-md border border-soft-apricot px-4 py-2 text-body text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
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
