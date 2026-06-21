'use client';

import { useTranslations, useLocale } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import VenueCard from '@/components/VenueCard';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import SocialEmbed from '@/components/SocialEmbed';
import ImageCarousel from '@/components/ImageCarousel';
import type { VenueData } from '@/data/types';

import { venueData as enVenueData } from '@/data/en/venue';
import { venueData as esVenueData } from '@/data/es/venue';

export default function VenuePage() {
  const locale = useLocale();
  const t = useTranslations('venue');

  const venueData: VenueData = locale === 'es' ? esVenueData : enVenueData;
  const { venue, welcomeEvent, ceremonyLocation, receptionLocation, map, socialPosts } = venueData;

  const eventCardBase =
    'rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md overflow-hidden flex flex-col';

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} />

      {/* Venue Information */}
      <section className="mb-12">
        <VenueCard
          name={venue.name}
          address={venue.address}
          city={venue.city}
          state={venue.state}
          zipCode={venue.zipCode}
          description={venue.description}
          phone={venue.phone}
          email={venue.email}
          website={venue.website}
        />
        <div className="mt-6">
          <GoogleMapsEmbed
            embedUrl={map.embedUrl}
            venueName={venue.name}
            fallbackUrl={map.fallbackUrl}
            height={400}
          />
        </div>
      </section>

      {/* Events */}
      <section className="mb-12">
        <div className="flex flex-col gap-6">

          {/* Welcome Event */}
          {welcomeEvent && (
            <div className={eventCardBase}>
              <p className="mb-3 text-body italic text-vibrant-coral">
                {welcomeEvent.date} · {welcomeEvent.time}
              </p>
              <h3 className="mb-2 text-heading font-semibold text-primary">
                {welcomeEvent.name}
              </h3>
            </div>
          )}

          {/* Ceremony */}
          <a
            href={ceremonyLocation.website}
            target="_blank"
            rel="noopener noreferrer"
            className={eventCardBase}
          >
            {ceremonyLocation.images && ceremonyLocation.images.length > 0 && (
              <ImageCarousel images={ceremonyLocation.images} alt={ceremonyLocation.name} />
            )}
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-soft-apricot px-3 py-1 text-body font-semibold text-primary">
                  {t('ceremony')}
                </span>
                {ceremonyLocation.date && ceremonyLocation.time && (
                  <span className="text-body italic text-vibrant-coral">
                    {ceremonyLocation.date} · {ceremonyLocation.time}
                  </span>
                )}
              </div>
              <h3 className="mb-2 text-heading font-semibold text-primary">
                {ceremonyLocation.name}
              </h3>
              <p className="mb-4 text-body text-foreground">
                {ceremonyLocation.description}
              </p>
              <span className="inline-flex items-center gap-1 text-body text-cerulean">
                {t('learnMore')}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>
          </a>

          {/* Reception */}
          <a
            href={receptionLocation.website}
            target="_blank"
            rel="noopener noreferrer"
            className={eventCardBase}
          >
            {receptionLocation.images && receptionLocation.images.length > 0 && (
              <ImageCarousel images={receptionLocation.images} alt={receptionLocation.name} />
            )}
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-muted px-3 py-1 text-body font-semibold text-primary">
                  {t('reception')}
                </span>
                {receptionLocation.date && receptionLocation.time && (
                  <span className="text-body italic text-vibrant-coral">
                    {receptionLocation.date} · {receptionLocation.time}
                  </span>
                )}
              </div>
              <h3 className="mb-2 text-heading font-semibold text-primary">
                {receptionLocation.name}
              </h3>
              <p className="mb-4 text-body text-foreground">
                {receptionLocation.description}
              </p>
              <span className="inline-flex items-center gap-1 text-body text-cerulean">
                {t('learnMore')}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>

{/* Social Media Content */}
      {socialPosts.length > 0 && (
        <section>
          <p className="mb-6 text-body text-foreground">{t('venueGlimpse')}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {socialPosts.map((post) => (
              <SocialEmbed
                key={post.id}
                platform={post.platform}
                embedHtml={post.embedHtml}
                fallbackUrl={post.fallbackUrl}
                title={post.title}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
