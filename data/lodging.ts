export interface Hotel {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  hasGroupRate: boolean;
  groupRateInfo?: string;
  bookingDeadline?: string;
}

export interface BulkLodging {
  title: string;
  description: string;
  googleFormUrl: string;
}

export const hotels: Hotel[] = [
  {
    id: '5',
    name: 'Hyatt Vivid Playa del Carmen',
    address: 'Carretera Federal Chetumal-Puerto Juárez Km 298, Playa del Carmen, Q.R. 77710, Mexico',
    phone: '+52 984 877 4400',
    website: 'https://www.resortsbyhyatt.com/Vivid/Vivid-playa-del-carmen',
    hasGroupRate: false,
  },
  {
    id: '2',
    name: 'Hilton Playa del Carmen',
    address: '10th Ave, Centro, Playa del Carmen, Q.R. 77710, Mexico',
    phone: '+52 984 688 0000',
    website: 'https://www.hilton.com/en/hotels/cunpchh-hilton-playa-del-carmen/',
    hasGroupRate: false,
  },
  {
    id: '7',
    name: 'Hyatt Centric Playa del Carmen',
    address: '10th Ave, Centro, Playa del Carmen, Q.R. 77710, Mexico',
    phone: '+52 984 206 4800',
    website: 'https://www.google.com/travel/hotels/s/oLA87cWeXUfj6UZs6',
    hasGroupRate: false,
  },
  {
    id: '3',
    name: 'Secrets Maroma Beach Riviera Cancun',
    address: 'Carretera Federal Chetumal-Puerto Juárez Km 306.3, Playa del Carmen, Q.R. 77710, Mexico',
    phone: '+52 998 872 8400',
    website: 'https://www.secrets-resorts.com/maroma-beach/',
    hasGroupRate: false,
  },
  {
    id: '4',
    name: 'Hotel Riu Palace Mexico',
    address: 'Playacar, Playa del Carmen, Q.R. 77710, Mexico',
    phone: '+52 984 877 2000',
    website: 'https://www.riu.com/en/hotel/mexico/playa-del-carmen/hotel-riu-palace-mexico/',
    hasGroupRate: false,
  },
  {
    id: '1',
    name: 'Hotel Xcaret Mexico',
    address: 'Carretera Chetumal-Puerto Juárez Km 282, Playa del Carmen, Q.R. 77710, Mexico',
    phone: '+52 998 881 0000',
    website: 'https://www.hotelxcaret.com/',
    hasGroupRate: true,
    groupRateInfo: 'All-Fun Inclusive with access to Xcaret parks included',
  },
  {
    id: '6',
    name: 'The Fives Beach Hotel & Residences',
    address: 'Av. Xaman-Ha, Playa del Carmen, Q.R. 77717, Mexico',
    phone: '+52 984 877 2700',
    website: 'https://www.thefiveshotels.com/',
    hasGroupRate: false,
  },
];

export const bulkLodging: BulkLodging = {
  title: 'Group Accommodation Sign-Up',
  description:
    'Interested in coordinating accommodations with other guests in Playa del Carmen? Sign up below and we will help arrange group bookings at our partner resorts.',
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeXfEiD_H5QCLpYJnNo_86r5GAZrETDKT4TFCm_s-MUONJmIw/viewform',
};
