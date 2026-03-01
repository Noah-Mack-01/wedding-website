interface DestinationSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  travelInfo?: string;
  children: React.ReactNode;
}

export default function DestinationSection({
  id,
  title,
  subtitle,
  travelInfo,
  children,
}: DestinationSectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      {/* Decorative divider */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-vibrant-coral to-transparent" />
        <div className="h-2 w-2 rotate-45 bg-vibrant-coral" />
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-vibrant-coral to-transparent" />
      </div>

      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="text-display font-semibold tracking-tight text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-body italic text-vibrant-coral">{subtitle}</p>
        )}
        {travelInfo && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-cerulean">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {travelInfo}
          </p>
        )}
      </div>

      {/* Section content */}
      <div className="space-y-8">{children}</div>
    </section>
  );
}
