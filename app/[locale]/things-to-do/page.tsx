import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import type { Activity, DestinationInfo } from '@/data/types';
import PageHeader from '@/components/PageHeader';
import DestinationSection from '@/components/DestinationSection';
import ActivityCard from '@/components/ActivityCard';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function ThingsToDoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('thingsToDo');

  const { activities, destinations } = (await import(
    `@/data/${locale}/things-to-do`
  )) as {
    activities: Activity[];
    destinations: DestinationInfo[];
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

      {destinations.map((dest) => {
        const destActivities = activities.filter((a) => a.destination === dest.id);

        return (
          <DestinationSection
            key={dest.id}
            id={dest.id}
            title={dest.title}
            subtitle={dest.subtitle}
            travelInfo={dest.travelInfo}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destActivities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  name={activity.name}
                  description={activity.description}
                  address={activity.address}
                  website={activity.website}
                  badge={activity.badge}
                  travelTime={activity.travelTime}
                  note={activity.note}
                />
              ))}
            </div>
          </DestinationSection>
        );
      })}
    </div>
  );
}
