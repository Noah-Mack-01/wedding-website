export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQEntry[] = [
  {
    id: '1',
    question: 'What is the dress code?',
    answer:
      'The dress code is formal attire. We encourage guests to wear elegant evening wear.',
  },
  {
    id: '2',
    question: 'Can I bring a plus one?',
    answer:
      'Please refer to your invitation for details on plus ones. If your invitation includes a guest, their name will be listed.',
  },
  {
    id: '3',
    question: 'Is the venue wheelchair accessible?',
    answer:
      'Yes, the venue is fully wheelchair accessible. Please contact us if you have any specific accessibility needs.',
  },
  {
    id: '4',
    question: 'Will there be parking available?',
    answer:
      'Yes, complimentary valet parking will be available for all guests at the venue.',
  },
  {
    id: '5',
    question: 'Are children welcome?',
    answer:
      'While we love your little ones, this will be an adults-only celebration. We hope you understand.',
  },
  {
    id: '6',
    question: 'What time should I arrive?',
    answer:
      'We recommend arriving 15-30 minutes before the ceremony start time to find your seat.',
  },
];
