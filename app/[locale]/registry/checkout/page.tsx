'use client';

import {
  PaymentElement,
  StripeUseCheckoutResult,
  useCheckout,
} from '@stripe/react-stripe-js/checkout';
import { StripeCheckoutConfirmResult } from '@stripe/stripe-js';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { SubmitEvent, useState } from 'react';
import { toast } from 'sonner';

export default function RegistryCheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const t = useTranslations('registry');
  const checkoutState: StripeUseCheckoutResult = useCheckout();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    if ('checkout' in checkoutState && !isSubmitting) {
      const { checkout } = checkoutState;
      setIsSubmitting(true);
      checkout.confirm().then((eventResult: StripeCheckoutConfirmResult) => {
        if (eventResult.type === 'error') {
          toast.error(eventResult.error.message);
        } else {
          router.push('/registry/complete');
        }
        setIsSubmitting(false);
      });
    } else {
      return;
    }
  };

  switch (checkoutState.type) {
    case 'loading':
      return (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-body italic text-vibrant-coral">{t('processing')}</p>
        </div>
      );
    case 'error':
      toast.error(checkoutState.error.message);
      return (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-body text-tropical-teal">{t('unableToLoad')}</p>
        </div>
      );
    case 'success':
      return (
        <div className="mx-auto max-w-md px-4 py-12">
          <h1 className="mb-6 text-center text-display font-semibold text-primary">
            {t('completePayment')}
          </h1>
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-sm">
            <PaymentElement id="payment-element" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-body font-medium text-white transition-colors hover:bg-vibrant-coral/80 disabled:opacity-50"
            >
              {isSubmitting ? t('processing') : t('submitPayment')}
            </button>
          </form>
        </div>
      );
  }
}
