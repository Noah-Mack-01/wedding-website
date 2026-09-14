import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import CountdownTimer from '@/components/CountdownTimer';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <div
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-cover bg-center px-4 py-16"
      style={{ backgroundImage: "url('/images/home/cenote-river.jpg')" }}
    >
      <div className="mx-auto max-w-xs rounded-2xl bg-background/90 px-6 py-8 text-center shadow-lg backdrop-blur-sm sm:max-w-sm">
        <h1 className="text-display font-light tracking-wide text-primary">
          {t('coupleName')}
        </h1>

        <div className="mx-auto my-8 h-px w-24 bg-soft-apricot" />

        <p className="text-heading font-semibold text-foreground">{t('date')}</p>
        <CountdownTimer
          labels={{
            days: t('countdownDays'),
            hours: t('countdownHours'),
            minutes: t('countdownMinutes'),
            seconds: t('countdownSeconds'),
          }}
        />

        <div className="mt-8 text-foreground">
          <p className="text-heading font-medium">{t('venueName')}</p>
          <p className="mt-1 text-body">
            {t('venueCity')}, {t('venueState')}
          </p>
        </div>
      </div>
    </div>
  );
}
