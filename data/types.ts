// Shared type definitions for localized data

export interface WeddingDetails {
  coupleName: string;
  tagline?: string;
  date: string;
  time?: string;
  venue: {
    name: string;
    address: string;
    city: string;
    state: string;
  };
  heroImageUrl?: string;
}

export interface ScheduleEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  endTime?: string;
  location?: string;
  description?: string;
}

export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
}

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
  | 'Ring Bearer'
  // Spanish roles
  | 'Novia'
  | 'Novio'
  | 'Dama de Honor'
  | 'Padrino'
  | 'Dama'
  | 'Padrino de Boda'
  | 'Nina de las Flores'
  | 'Paje de Anillos';

export interface BridalPartyMember {
  id: string;
  name: string;
  role: BridalPartyRole;
  imageUrl: string;
  socialLinks?: SocialLink[];
}

export interface VenueInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  phone?: string;
  email?: string;
  website?: string;
}

export interface MapConfig {
  embedUrl: string;
  fallbackUrl: string;
}

export interface Airport {
  id: string;
  name: string;
  code: string;
  distance: string;
  driveTime: string;
  rideshareEstimate?: string;
  shuttleInfo?: string;
  routeMapEmbedUrl: string;
}

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'tiktok';
  embedHtml: string;
  fallbackUrl: string;
  title?: string;
}

export interface CeremonyLocation {
  name: string;
  description: string;
  images?: string[];
  website?: string;
  date?: string;
  time?: string;
}

export interface WelcomeEvent {
  name: string;
  date: string;
  time: string;
}

export interface VenueData {
  venue: VenueInfo;
  welcomeEvent?: WelcomeEvent;
  ceremonyLocation: CeremonyLocation;
  receptionLocation: CeremonyLocation;
  map: MapConfig;
  airports: Airport[];
  socialPosts: SocialPost[];
}

export interface Hotel {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  logoUrl?: string;
  brandColor?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Things to do types
export type Destination = 'xcaret' | 'nightlife' | 'beach' | 'ruins' | 'cenotes';

export interface Activity {
  id: string;
  name: string;
  description: string;
  destination: Destination;
  address?: string;
  website?: string;
  badge?: 'includedWithStay' | 'mustReserve';
  travelTime?: string;
  note?: string;
}

export interface DestinationInfo {
  id: Destination;
  title: string;
  subtitle?: string;
  travelInfo?: string;
}
