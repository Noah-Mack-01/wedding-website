interface AirportCardProps {
  name: string;
  code: string;
  distance: string;
  driveTime: string;
  rideshareEstimate?: string;
  shuttleInfo?: string;
}

export default function AirportCard({
  name,
  code,
  distance,
  driveTime,
  rideshareEstimate,
  shuttleInfo,
}: AirportCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-heading font-semibold text-primary">{name}</h3>
          <p className="text-body text-foreground">Airport Code: {code}</p>
        </div>
        <span className="flex-shrink-0 rounded-full bg-muted px-3 py-1 text-body font-semibold text-primary">
          {code}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 text-body">
          <svg
            className="h-5 w-5 text-vibrant-coral"
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
          <span className="text-foreground">{distance} to venue</span>
        </div>
        <div className="flex items-center gap-2 text-body">
          <svg
            className="h-5 w-5 text-vibrant-coral"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-foreground">{driveTime} drive</span>
        </div>
      </div>

      {(rideshareEstimate || shuttleInfo) && (
        <div className="mt-6 border-t border-soft-apricot pt-4">
          <h4 className="mb-3 font-medium text-primary">Transportation Options</h4>
          <div className="space-y-2 text-body">
            {rideshareEstimate && (
              <div className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-vibrant-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <span className="text-foreground">
                  <strong>Rideshare:</strong> {rideshareEstimate}
                </span>
              </div>
            )}
            {shuttleInfo && (
              <div className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-vibrant-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0V6.75m0 0h2.25m-2.25 0H9m3-3h4.5M9 6.75L6.75 3H3.75m0 0L2.25 6.75M3.75 3v3.75"
                  />
                </svg>
                <span className="text-foreground">
                  <strong>Shuttle:</strong> {shuttleInfo}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
