import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import PageHeader from '@/components/PageHeader';
import FAQItem from '@/components/FAQItem';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('faq');
  const { faqs } = await import(`@/data/${locale}/faq`);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="rounded-lg bg-white p-6 shadow-sm">
        {faqs.map((faq: { id: string; question: string; answer: string }) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
