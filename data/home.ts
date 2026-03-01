export interface WeddingDetails {
  coupleName: string;
  tagline?: string;
  date: string;
  time: string;
  venue: {
    name: string;
    address: string;
    city: string;
    state: string;
  };
  heroImageUrl?: string;
}

export const weddingDetails: WeddingDetails = {
  coupleName: 'Sarah & Michael',
  tagline: 'Together Forever',
  date: 'September 15, 2025',
  time: '4:00 PM',
  venue: {
    name: 'The Grand Estate',
    address: '123 Wedding Lane',
    city: 'Charleston',
    state: 'SC',
  },
  heroImageUrl: '/images/hero.jpg',
};
