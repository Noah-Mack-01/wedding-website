import PageHeader from '@/components/PageHeader';
import DestinationSection from '@/components/DestinationSection';
import ActivityCard from '@/components/ActivityCard';
import {
  activities,
  destinations,
  categoryLabels,
  type Activity,
  type Destination,
  type ActivityCategory,
} from '@/data/things-to-do';

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

function getActivitiesByDestination(dest: Destination): Activity[] {
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

export default function ThingsToDoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Things To Do"
        subtitle="Explore the Riviera Maya during your stay"
      />

      {destinations.map((dest) => {
        const destActivities = getActivitiesByDestination(dest.id);
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
