'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import VenueCard from '@/components/VenueCard';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import AirportCard from '@/components/AirportCard';
import SocialEmbed from '@/components/SocialEmbed';
import type { VenueData } from '@/data/types';

// Import locale-specific data
import { venueData as enVenueData } from '@/data/en/venue';
import { venueData as esVenueData } from '@/data/es/venue';

export default function VenuePage() {
  const locale = useLocale();
  const t = useTranslations('venue');

  const venueData: VenueData = locale === 'es' ? esVenueData : enVenueData;
  const { venue, ceremonyLocation, receptionLocation, map, airports, socialPosts } =
    venueData;

  const [selectedAirportId, setSelectedAirportId] = useState(airports[0]?.id);
  const selectedAirport = airports.find((a) => a.id === selectedAirportId);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      {/* Venue Information */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-primary">{t('theVenue')}</h2>
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
      </section>

      {/* Ceremony & Reception Locations */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-primary">
          {t('ceremonyAndReception')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Ceremony Location */}
          <a
            href={ceremonyLocation.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-soft-apricot px-3 py-1 text-xs font-semibold text-primary">
                {t('ceremony')}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-primary">
              {ceremonyLocation.name}
            </h3>
            <p className="mb-4 text-body text-foreground">
              {ceremonyLocation.description}
            </p>
            <ul className="space-y-2">
              {ceremonyLocation.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-vibrant-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-cerulean">
              {t('learnMore')}
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
            </span>
          </a>

          {/* Reception Location */}
          <a
            href={receptionLocation.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary">
                {t('reception')}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-primary">
              {receptionLocation.name}
            </h3>
            <p className="mb-4 text-body text-foreground">
              {receptionLocation.description}
            </p>
            <ul className="space-y-2">
              {receptionLocation.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-vibrant-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-cerulean">
              {t('learnMore')}
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
            </span>
          </a>
        </div>
      </section>

      {/* Travel Directions */}
      {airports.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-primary">
            {t('gettingThere')}
          </h2>

          {/* Airport Selector */}
          {airports.length > 1 && (
            <div className="mb-6">
              <p className="mb-3 text-body text-foreground">{t('selectAirport')}</p>
              <div className="flex flex-wrap gap-3">
                {airports.map((airport) => (
                  <label
                    key={airport.id}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 transition-colors ${
                      selectedAirportId === airport.id
                        ? 'border-primary bg-muted text-primary'
                        : 'border-soft-apricot bg-white text-foreground hover:border-vibrant-coral'
                    }`}
                  >
                    <input
                      type="radio"
                      name="airport"
                      value={airport.id}
                      checked={selectedAirportId === airport.id}
                      onChange={() => setSelectedAirportId(airport.id)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="font-medium">{airport.code}</span>
                    <span className="hidden sm:inline">- {airport.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Route Map for Selected Airport */}
          {selectedAirport && (
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-medium text-primary">
                {t('routeFrom')} {selectedAirport.code}
              </h3>
              <GoogleMapsEmbed
                embedUrl={selectedAirport.routeMapEmbedUrl}
                venueName={`${t('routeFrom')} ${selectedAirport.name}`}
                fallbackUrl={map.fallbackUrl}
                height={400}
              />
            </div>
          )}

          {/* Airport Details */}
          {selectedAirport && (
            <AirportCard
              name={selectedAirport.name}
              code={selectedAirport.code}
              distance={selectedAirport.distance}
              driveTime={selectedAirport.driveTime}
              directions={selectedAirport.directions}
              rideshareEstimate={selectedAirport.rideshareEstimate}
              shuttleInfo={selectedAirport.shuttleInfo}
            />
          )}
        </section>
      )}

      {/* Social Media Content */}
      {socialPosts.length > 0 && (
        <section>
          <h2 className="mb-6 text-xl font-semibold text-primary">
            {t('seeTheVenue')}
          </h2>
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
