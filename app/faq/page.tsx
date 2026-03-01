import PageHeader from '@/components/PageHeader';
import FAQItem from '@/components/FAQItem';
import { faqs } from '@/data/faq';

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our big day"
      />

      <div className="rounded-lg bg-white p-6 shadow-sm">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
