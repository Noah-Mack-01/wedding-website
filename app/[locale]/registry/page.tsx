import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import type { Locale } from '@/i18n/config';
import PageHeader from '@/components/PageHeader';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function RegistryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('registry');

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} />

      <div className="space-y-6">
        {/* House Fund */}
        <a
          href="https://withjoy.com/noah-and-isabella-mar-2027/registry?pid=d023397f-9645-4fea-8310-af3037c5d375"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-6 rounded-lg bg-white p-6 shadow-lg transition-opacity hover:opacity-90"
        >
          <Image
            src="/withjoy-logo.webp"
            alt="WithJoy"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '40px' }}
            className="flex-shrink-0"
          />
          <div className="flex-1">
            <p className="text-heading font-semibold text-foreground">House Fund</p>
          </div>
          <svg
            className="h-5 w-5 flex-shrink-0 text-foreground/40 transition-colors group-hover:text-foreground"
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

        {/* Bloomingdale's Registry */}
        <a
          href="https://www.bloomingdales.com/registry/Isabella-Patino-Fuentes-Noah-Mack/1291279"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-6 rounded-lg bg-black p-6 shadow-lg transition-opacity hover:opacity-90"
        >
          <Image
            src="/bloomingdales-favicon.png"
            alt="Bloomingdale's"
            width={56}
            height={56}
            className="flex-shrink-0 rounded-md"
          />
          <div className="flex-1">
            <p className="text-heading font-semibold text-white">Bloomingdale's</p>
          </div>
          <svg
            className="h-5 w-5 flex-shrink-0 text-white/50 transition-colors group-hover:text-white"
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
    </div>
  );
}
