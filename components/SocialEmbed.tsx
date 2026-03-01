'use client';

import { useEffect, useRef, useState } from 'react';

type SocialPlatform = 'instagram' | 'tiktok';

interface SocialEmbedProps {
  platform: SocialPlatform;
  embedHtml: string;
  fallbackUrl: string;
  title?: string;
}

const platformScripts: Record<SocialPlatform, string> = {
  instagram: 'https://www.instagram.com/embed.js',
  tiktok: 'https://www.tiktok.com/embed.js',
};

const platformNames: Record<SocialPlatform, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
};

export default function SocialEmbed({
  platform,
  embedHtml,
  fallbackUrl,
  title,
}: SocialEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!embedHtml || hasError) return;

    const scriptSrc = platformScripts[platform];
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    const processEmbed = () => {
      if (platform === 'instagram' && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    if (existingScript) {
      processEmbed();
    } else {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.onload = processEmbed;
      script.onerror = () => setHasError(true);
      document.body.appendChild(script);
    }
  }, [embedHtml, platform, hasError]);

  if (hasError || !embedHtml) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-soft-apricot bg-muted p-6 text-center">
        <p className="mb-2 text-foreground">
          {title || `View on ${platformNames[platform]}`}
        </p>
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline hover:text-vibrant-coral"
        >
          Open in {platformNames[platform]}
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
    <div
      ref={containerRef}
      className="flex justify-center"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
