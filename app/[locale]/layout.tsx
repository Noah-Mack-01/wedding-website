import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Isabella & Noah - Wedding',
  description: 'Join us in celebrating our special day',
  icons: { icon: [] },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-4rem)] w-full max-w-7xl border-x border-soft-apricot/40 bg-background shadow-[0_0_40px_-12px_rgba(22,105,122,0.08)]">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
