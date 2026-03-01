interface EventCardProps {
  name: string;
  time: string;
  endTime?: string;
  location?: string;
  description?: string;
}

export default function EventCard({
  name,
  time,
  endTime,
  location,
  description,
}: EventCardProps) {
  return (
    <div className="relative flex gap-6 pb-8 last:pb-0">
      <div className="absolute left-[11px] top-3 h-full w-px bg-soft-apricot last:hidden" />
      <div className="relative z-10 mt-1.5 h-6 w-6 flex-shrink-0 rounded-full border-2 border-vibrant-coral bg-white" />

      <div className="flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <h3 className="text-heading font-medium text-primary">{name}</h3>
          <span className="text-body italic text-tropical-teal">
            {time}
            {endTime && ` - ${endTime}`}
          </span>
        </div>

        {location && (
          <p className="mt-1 text-body text-foreground">
            <span className="font-medium">Location:</span> {location}
          </p>
        )}

        {description && (
          <p className="mt-2 text-body text-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
