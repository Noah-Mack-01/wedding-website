import PageHeader from '@/components/PageHeader';
import HotelCard from '@/components/HotelCard';
import { hotels, bulkLodging } from '@/data/lodging';

export default function LodgingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Lodging"
        subtitle="Where to stay during your visit"
      />

      <section className="mb-12">
        <h2 className="mb-6 text-heading font-semibold text-primary">
          Nearby Hotels
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {hotels.toSorted((a,b) => Number(a.id) - Number(b.id)).map((hotel) => (
            <HotelCard
              key={hotel.id}
              name={hotel.name}
              address={hotel.address}
              phone={hotel.phone}
              website={hotel.website}
              hasGroupRate={hotel.hasGroupRate}
              groupRateInfo={hotel.groupRateInfo}
              bookingDeadline={hotel.bookingDeadline}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-heading font-semibold text-primary">
          {bulkLodging.title}
        </h2>
        <p className="mb-6 text-body text-foreground">{bulkLodging.description}</p>

        <div className="overflow-hidden rounded-lg border border-soft-apricot bg-white">
          <iframe
            src={bulkLodging.googleFormUrl}
            width="100%"
            height="600"
            className="border-0"
            title="Group Accommodation Sign-Up Form"
          >
            Loading form...
          </iframe>
        </div>
      </section>
    </div>
  );
}
