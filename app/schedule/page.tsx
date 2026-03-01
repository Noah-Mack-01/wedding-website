import PageHeader from '@/components/PageHeader';
import EventCard from '@/components/EventCard';
import { scheduleEvents } from '@/data/schedule';

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Schedule"
        subtitle="Timeline of events for the big day"
      />

      <div className="rounded-lg bg-white p-6 shadow-sm">
        {scheduleEvents.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            time={event.time}
            endTime={event.endTime}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}
