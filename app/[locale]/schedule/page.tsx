import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import PageHeader from '@/components/PageHeader';
import EventCard from '@/components/EventCard';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function SchedulePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('schedule');
  const { scheduleEvents } = await import(`@/data/${locale}/schedule`);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="rounded-lg bg-white p-6 shadow-sm">
        {scheduleEvents.map(
          (event: {
            id: string;
            name: string;
            time: string;
            endTime?: string;
            location?: string;
            description?: string;
          }) => (
            <EventCard
              key={event.id}
              name={event.name}
              time={event.time}
              endTime={event.endTime}
              location={event.location}
              description={event.description}
            />
          )
        )}
      </div>
    </div>
  );
}
