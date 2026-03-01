import { weddingDetails } from '@/data/home';

export default function HomePage() {
  const { coupleName, tagline, date, time, venue } = weddingDetails;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-display font-light tracking-wide text-primary">
          {coupleName}
        </h1>

        {tagline && (
          <p className="mt-4 text-body italic text-tropical-teal">{tagline}</p>
        )}

        <div className="mx-auto my-8 h-px w-24 bg-soft-apricot" />

        <p className="text-heading font-semibold text-foreground">{date}</p>
        <p className="mt-2 text-body text-vibrant-coral">{time}</p>

        <div className="mt-8 text-foreground">
          <p className="text-heading font-medium">{venue.name}</p>
          <p className="mt-1 text-body">{venue.address}</p>
          <p className="text-body">
            {venue.city}, {venue.state}
          </p>
        </div>

        <div className="mt-12">
          <a
            href="/schedule"
            className="inline-block rounded-full bg-primary px-8 py-3 text-body font-medium text-white transition-colors hover:bg-vibrant-coral/80"
          >
            View Schedule
          </a>
        </div>
      </div>
    </div>
  );
}
