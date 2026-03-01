'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import VenueCard from '@/components/VenueCard';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import AirportCard from '@/components/AirportCard';
import SocialEmbed from '@/components/SocialEmbed';
import { venueData } from '@/data/venue';

export default function VenuePage() {
  const { venue, map, airports, socialPosts } = venueData;
  const [selectedAirportId, setSelectedAirportId] = useState(airports[0]?.id);

  const selectedAirport = airports.find((a) => a.id === selectedAirportId);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Venue & Travel"
        subtitle="Everything you need to know about getting there"
      />

      {/* Venue Information */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-primary">The Venue</h2>
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

      {/* Venue Location Map */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-primary">Location</h2>
        <GoogleMapsEmbed
          embedUrl={map.embedUrl}
          venueName={venue.name}
          fallbackUrl={map.fallbackUrl}
          height={350}
        />
        <p className="mt-3 text-center text-body text-foreground">
          <a
            href={map.fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            Open in Google Maps
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
        </p>
      </section>

      {/* Travel Directions */}
      {airports.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-primary">
            Getting There
          </h2>

          {/* Airport Selector */}
          {airports.length > 1 && (
            <div className="mb-6">
              <p className="mb-3 text-body text-foreground">
                Select your arrival airport to see directions:
              </p>
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
                Route from {selectedAirport.code}
              </h3>
              <GoogleMapsEmbed
                embedUrl={selectedAirport.routeMapEmbedUrl}
                venueName={`Route from ${selectedAirport.name} to ${venue.name}`}
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
            See the Venue
          </h2>
          <p className="mb-6 text-body text-foreground">
            Get a glimpse of the beautiful venue through these posts.
          </p>
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
