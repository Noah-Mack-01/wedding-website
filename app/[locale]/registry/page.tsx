'use client';

import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

const presetAmounts = [50, 100, 150, 200, 250, 500];

export default function RegistryPage() {
  const router = useRouter();
  const t = useTranslations('registry');

  const [amount, setAmount] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  const handlePresetClick = (value: number) => {
    setAmount(value.toString());
    setSelectedPreset(value);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setSelectedPreset(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cents = Math.round(parseFloat(amount) * 100);
    if (cents > 0) {
      router.push(`/registry/checkout?amount=${cents}`);
    }
  };

  const isValidAmount = parseFloat(amount) > 0;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      {/* Bloomingdale's Registry Link */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm text-center">
        <p className="mb-3 text-body text-foreground">{t('bloomingdalesText')}</p>
        <a
          href="https://www.bloomingdales.com/registry/wedding/guest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border-2 border-primary px-6 py-2 text-body font-medium text-primary transition-colors hover:bg-primary hover:text-white"
        >
          {t('viewBloomingdales')}
        </a>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-sm">
        <p className="mb-8 text-center text-body italic text-foreground">
          {t('giftMessage')}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="mb-3 block text-body font-medium text-foreground">
              {t('selectAmount')}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  className={`rounded-lg border-2 px-4 py-3 text-heading font-medium transition-colors ${
                    selectedPreset === preset
                      ? 'border-primary bg-primary text-white'
                      : 'border-soft-apricot bg-white text-foreground hover:border-primary hover:bg-muted'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label
              htmlFor="custom-amount"
              className="mb-2 block text-body font-medium text-foreground"
            >
              {t('customAmount')}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-heading text-cerulean">
                $
              </span>
              <input
                id="custom-amount"
                type="number"
                min="1"
                step="1"
                value={amount}
                onChange={handleCustomAmountChange}
                placeholder={t('enterAmount')}
                className="w-full rounded-lg border-2 border-soft-apricot bg-white py-3 pl-8 pr-4 text-heading text-foreground placeholder:text-cerulean/50 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValidAmount}
            className={`w-full rounded-full py-4 text-heading font-medium transition-colors ${
              isValidAmount
                ? 'bg-primary text-white hover:bg-vibrant-coral/80'
                : 'cursor-not-allowed bg-soft-apricot/50 text-cerulean/50'
            }`}
          >
            {t('continueCheckout')}
            {isValidAmount && ` - $${parseFloat(amount).toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  );
}
