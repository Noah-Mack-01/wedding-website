interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-soft-apricot py-6 last:border-b-0">
      <h3 className="text-heading font-medium text-primary">{question}</h3>
      <p className="mt-2 text-body text-foreground">{answer}</p>
    </div>
  );
}
