'use client';

import { useState } from 'react';

interface GoogleMapsEmbedProps {
  embedUrl: string;
  venueName: string;
  fallbackUrl: string;
  height?: number;
}

export default function GoogleMapsEmbed({
  embedUrl,
  venueName,
  fallbackUrl,
  height = 400,
}: GoogleMapsEmbedProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-soft-apricot bg-muted p-8 text-center">
        <svg
          className="mb-3 h-10 w-10 text-vibrant-coral"
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
        <p className="mb-2 text-foreground">Unable to load the map.</p>
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline hover:text-vibrant-coral"
        >
          View on Google Maps
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
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-soft-apricot">
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${venueName}`}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
