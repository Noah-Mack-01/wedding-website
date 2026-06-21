import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import type { Hotel } from '@/data/types';
import PageHeader from '@/components/PageHeader';
import HotelCard from '@/components/HotelCard';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function LodgingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('lodging');
  const { hotels } = (await import(`@/data/${locale}/lodging`)) as {
    hotels: Hotel[];
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <section>
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

    </div>
  );
}
