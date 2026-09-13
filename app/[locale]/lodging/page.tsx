import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import type { Hotel, TransportationInfo } from '@/data/types';
import PageHeader from '@/components/PageHeader';
import HotelCard from '@/components/HotelCard';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function LodgingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('lodging');
  const { hotels, transportationInfo } = (await import(`@/data/${locale}/lodging`)) as {
    hotels: Hotel[];
    transportationInfo: TransportationInfo;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {hotels
            .toSorted((a, b) => Number(a.id) - Number(b.id))
            .map((hotel) => (
              <HotelCard
                key={hotel.id}
                name={hotel.name}
                address={hotel.address}
                phone={hotel.phone}
                website={hotel.website}
                logoUrl={hotel.logoUrl}
                brandColor={hotel.brandColor}
              />
            ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-heading font-semibold text-primary">
          {t('transportation')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-body font-semibold text-primary">
              {t('shuttleTitle')}
            </h3>
            <p className="text-body text-foreground">{transportationInfo.shuttleNote}</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-body font-semibold text-primary">
              {t('rentalCarTitle')}
            </h3>
            <p className="text-body text-foreground">{transportationInfo.rentalCarNote}</p>
            {transportationInfo.rentalCarWebsite && (
              <a
                href={transportationInfo.rentalCarWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-body text-foreground hover:text-primary"
              >
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
              </a>
            )}
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-body font-semibold text-primary">
              {t('taxiTitle')}
            </h3>
            <p className="text-body text-foreground">{transportationInfo.taxiAirportRate}</p>
            <p className="mt-2 text-body text-foreground">{transportationInfo.taxiVenueRate}</p>
            <p className="mt-2 text-body italic text-vibrant-coral">
              {transportationInfo.taxiNegotiationTip}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
