import Image from 'next/image';

interface HotelCardProps {
  name: string;
  address: string;
  phone?: string;
  website?: string;
  logoUrl?: string;
  brandColor?: string;
}

export default function HotelCard({
  name,
  address,
  phone,
  website,
  logoUrl,
  brandColor,
}: HotelCardProps) {
  const isBranded = !!logoUrl && !!brandColor;

  return (
    <div
      className="overflow-hidden rounded-lg bg-white shadow-sm"
      style={isBranded ? { borderTop: `4px solid ${brandColor}` } : undefined}
    >
      {isBranded && (
        <div className="flex items-center gap-3 px-6 pt-5">
          <Image
            src={logoUrl}
            alt={`${name} logo`}
            width={24}
            height={24}
            className="rounded-sm"
            unoptimized
          />
          <h3
            className="text-heading font-medium"
            style={{ color: brandColor }}
          >
            {name}
          </h3>
        </div>
      )}

      <div className="p-6" style={isBranded ? { paddingTop: '0.75rem' } : undefined}>
        {!isBranded && (
          <h3 className="text-heading font-medium text-primary">{name}</h3>
        )}
        <p className={`text-body text-foreground ${!isBranded ? 'mt-1' : ''}`}>{address}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1.5 text-body text-foreground hover:text-primary"
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              {phone}
            </a>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-body text-foreground hover:text-primary"
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
      </div>
    </div>
  );
}
