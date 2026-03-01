'use client';

import { CheckoutProvider } from '@stripe/react-stripe-js/checkout';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get('amount')) || 5000;
  const formattedAmount = `$${(amount / 100).toFixed(2)}`;

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    fetch('/registry/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ unit_amount: amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(decodeURIComponent(data.clientSecret)));
  }, [amount]);

  if (!clientSecret) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHeader title="Checkout" subtitle={`Gift amount: ${formattedAmount}`} />
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-soft-apricot border-t-primary" />
            <p className="mt-4 text-foreground">Preparing checkout...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title="Checkout" subtitle={`Gift amount: ${formattedAmount}`} />
      <CheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
        {children}
      </CheckoutProvider>
    </div>
  );
}
