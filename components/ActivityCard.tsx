'use client';

import { useTranslations } from 'next-intl';
import type { ActivityCategory } from '@/data/types';

// Category colors need to be defined here since they don't need translation
const categoryColors: Record<ActivityCategory, string> = {
  water: 'bg-blue-100 text-blue-800',
  nature: 'bg-green-100 text-green-800',
  parks: 'bg-purple-100 text-purple-800',
  culture: 'bg-amber-100 text-amber-800',
  wellness: 'bg-pink-100 text-pink-800',
  beach: 'bg-cyan-100 text-cyan-800',
  ruins: 'bg-stone-100 text-stone-800',
  cenotes: 'bg-teal-100 text-teal-800',
  adventure: 'bg-orange-100 text-orange-800',
  nightlife: 'bg-indigo-100 text-indigo-800',
  shopping: 'bg-rose-100 text-rose-800',
};

interface ActivityCardProps {
  name: string;
  description: string;
  category: ActivityCategory;
  address?: string;
  website?: string;
  badge?: 'includedWithStay' | 'mustReserve';
  travelTime?: string;
  note?: string;
}

function getBadgeStyles(badge: string): string {
  if (badge === 'includedWithStay') {
    return 'bg-green-100 text-green-800';
  }
  if (badge === 'mustReserve') {
    return 'bg-amber-100 text-amber-800';
  }
  return 'bg-gray-100 text-gray-800';
}

export default function ActivityCard({
  name,
  description,
  category,
  address,
  website,
  badge,
  travelTime,
  note,
}: ActivityCardProps) {
  const t = useTranslations('badges');
  const tCategories = useTranslations('categories');

  const CardWrapper = website ? 'a' : 'div';
  const cardProps = website
    ? {
        href: website,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className={`flex h-full flex-col rounded-lg bg-white p-5 shadow-sm ${website ? 'cursor-pointer transition-shadow hover:shadow-md' : ''}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-heading font-medium text-primary">{name}</h3>
        <span
          className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[category]}`}
        >
          {tCategories(category)}
        </span>
      </div>

      {badge && (
        <span
          className={`mt-2 inline-flex w-fit rounded-full px-2 py-0.5 text-xs font-medium ${getBadgeStyles(badge)}`}
        >
          {t(badge)}
        </span>
      )}

      <p className="mt-2 flex-grow text-body text-foreground">{description}</p>

      {note && (
        <p className="mt-2 text-sm italic text-vibrant-coral">{note}</p>
      )}

      <div className="mt-3 flex flex-wrap gap-3">
        {travelTime && (
          <span className="inline-flex items-center gap-1.5 text-sm text-cerulean">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {travelTime}
          </span>
        )}

        {address && (
          <span className="inline-flex items-center gap-1.5 text-sm text-vibrant-coral">
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
            {address}
          </span>
        )}

        {website && (
          <span className="inline-flex items-center gap-1.5 text-sm text-foreground">
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
            Website
          </span>
        )}
      </div>
    </CardWrapper>
  );
}
