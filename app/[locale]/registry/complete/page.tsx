import Stripe from 'stripe';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface PageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ session_id?: string }>;
}

export default async function RegistryCompletePage({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('registryComplete');
  const tCommon = await getTranslations('common');

  const { session_id } = await searchParams;

  let amount: number | null = null;

  if (session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      amount = session.amount_total;
    } catch {
      // Session retrieval failed, continue without amount
    }
  }

  const formattedAmount = amount ? `$${(amount / 100).toFixed(2)}` : null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 text-center shadow-sm sm:p-12">
        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <h1 className="mb-4 text-display font-semibold text-primary">
          {t('thankYou')}
        </h1>

        {formattedAmount ? (
          <p className="mb-4 text-body text-foreground">
            {t('contributionWithAmount', { amount: formattedAmount })}
          </p>
        ) : (
          <p className="mb-4 text-body text-foreground">
            {t('contributionGeneric')}
          </p>
        )}

        <p className="mb-8 text-body italic text-foreground">{t('grateful')}</p>

        {/* Decorative Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-soft-apricot" />

        {/* Heart Icon */}
        <div className="mb-8 text-tropical-teal">
          <svg
            className="mx-auto h-12 w-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/home"
            className="inline-block rounded-full bg-primary px-8 py-3 text-body font-medium text-white transition-colors hover:bg-vibrant-coral/80"
          >
            {tCommon('returnHome')}
          </Link>
          <Link
            href="/schedule"
            className="inline-block rounded-full border-2 border-soft-apricot px-8 py-3 text-body font-medium text-foreground transition-colors hover:border-primary hover:bg-muted"
          >
            {tCommon('viewSchedule')}
          </Link>
        </div>
      </div>
    </div>
  );
}
