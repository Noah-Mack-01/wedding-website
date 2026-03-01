export type SocialPlatform = 'instagram' | 'facebook' | 'twitter' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export type BridalPartyRole =
  | 'Bride'
  | 'Groom'
  | 'Maid of Honor'
  | 'Best Man'
  | 'Bridesmaid'
  | 'Groomsman'
  | 'Flower Girl'
  | 'Ring Bearer';

export interface BridalPartyMember {
  id: string;
  name: string;
  role: BridalPartyRole;
  imageUrl: string;
  socialLinks?: SocialLink[];
}

export const bridalParty: BridalPartyMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Bride',
    imageUrl: '/images/bridal-party/sarah.jpg',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/sarah' },
    ],
  },
  {
    id: '2',
    name: 'Michael Smith',
    role: 'Groom',
    imageUrl: '/images/bridal-party/michael.jpg',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/michael' },
    ],
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Maid of Honor',
    imageUrl: '/images/bridal-party/emily.jpg',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/emily' },
    ],
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Best Man',
    imageUrl: '/images/bridal-party/james.jpg',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/james' },
    ],
  },
  {
    id: '5',
    name: 'Jessica Brown',
    role: 'Bridesmaid',
    imageUrl: '/images/bridal-party/jessica.jpg',
  },
  {
    id: '6',
    name: 'David Lee',
    role: 'Groomsman',
    imageUrl: '/images/bridal-party/david.jpg',
  },
];
