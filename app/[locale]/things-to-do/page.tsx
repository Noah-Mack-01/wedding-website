import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import type { Activity, DestinationInfo, ActivityCategory } from '@/data/types';
import PageHeader from '@/components/PageHeader';
import DestinationSection from '@/components/DestinationSection';
import ActivityCard from '@/components/ActivityCard';

interface Props {
  params: Promise<{ locale: Locale }>;
}

// Define preferred category order for consistent display
const categoryOrder: ActivityCategory[] = [
  'water',
  'beach',
  'nature',
  'parks',
  'ruins',
  'cenotes',
  'culture',
  'adventure',
  'wellness',
  'nightlife',
  'shopping',
];

function getActivitiesByDestination(
  activities: Activity[],
  dest: DestinationInfo['id']
): Activity[] {
  return activities.filter((a) => a.destination === dest);
}

function groupByCategory(
  acts: Activity[]
): Partial<Record<ActivityCategory, Activity[]>> {
  return acts.reduce(
    (acc, activity) => {
      if (!acc[activity.category]) {
        acc[activity.category] = [];
      }
      acc[activity.category]!.push(activity);
      return acc;
    },
    {} as Partial<Record<ActivityCategory, Activity[]>>
  );
}

export default async function ThingsToDoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('thingsToDo');
  const tCategories = await getTranslations('categories');

  const { activities, destinations, categoryLabels } = (await import(
    `@/data/${locale}/things-to-do`
  )) as {
    activities: Activity[];
    destinations: DestinationInfo[];
    categoryLabels: Record<ActivityCategory, string>;
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      {destinations.map((dest) => {
        const destActivities = getActivitiesByDestination(activities, dest.id);
        const grouped = groupByCategory(destActivities);

        // Sort categories by preferred order
        const sortedCategories = categoryOrder.filter(
          (cat) => grouped[cat] && grouped[cat]!.length > 0
        );

        return (
          <DestinationSection
            key={dest.id}
            id={dest.id}
            title={dest.title}
            subtitle={dest.subtitle}
            travelInfo={dest.travelInfo}
          >
            {sortedCategories.map((category) => {
              const categoryActivities = grouped[category]!;
              return (
                <div key={category}>
                  <h3 className="mb-4 text-heading font-semibold text-primary">
                    {categoryLabels[category]}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryActivities.map((activity) => (
                      <ActivityCard
                        key={activity.id}
                        name={activity.name}
                        description={activity.description}
                        category={activity.category}
                        address={activity.address}
                        website={activity.website}
                        badge={activity.badge}
                        travelTime={activity.travelTime}
                        note={activity.note}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </DestinationSection>
        );
      })}
    </div>
  );
}
