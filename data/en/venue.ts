import type { VenueData } from '../types';

export const venueData: VenueData = {
  welcomeEvent: {
    name: 'Fragata Beach Club',
    date: 'March 12, 2027',
    time: '7:00 PM - 10:00 PM',
    hostedBy: "Hosted by the groom's family",
    address: 'Calle Albatros Esquina Con Calle Flamingos Sin Número, Manzana 7 Lote 1',
    city: 'Playa del Carmen',
    state: 'Quintana Roo',
    zipCode: '77710',
    description:
      'A laid-back beachfront club at The Reef Playacar, offering ocean breezes and a relaxed seaside atmosphere - the perfect place to kick off our wedding weekend.',
    phone: '+52 984 144 2318',
    website: 'https://www.thereefresorts.com/fragata',
    map: {
      embedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.820890406221!2d-87.0601298!3d20.636156199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e5d1273d8023f%3A0xbf3ec59ed48523c!2sFragata%20Beach%20Club%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1789335608085!5m2!1sen!2sus',
      fallbackUrl:
        'https://www.google.com/maps/place/Fragata+Beach+Club+%26+Restaurant/@20.6361562,-87.0601298,17z',
    },
  },
  ceremonyLocation: {
    name: 'Chapel of Our Lady of Guadalupe',
    date: 'March 13, 2027',
    time: '7:00 PM',
    description:
      "Located within Xcaret Park - a breathtaking eco-archaeological park on the Riviera Maya with underground rivers, pristine beaches, and lush jungle landscapes - the Chapel of Our Lady of Guadalupe is built around a sacred cenote as an offering to Our Lady of Guadalupe. This stunning chapel features an altar at the water's edge and a Virgin carved into a tree trunk standing 39 feet high, and is officially recognized by the Roman Catholic Church.",
    images: ['/images/venue/chapel-2.jpg'],
    website: 'https://www.xcaret.com/en/attractions/guadalupe-chapel/',
    address: 'Carretera Chetumal, Puerto Juarez km 282-Int B',
    city: 'Playa del Carmen',
    state: 'Quintana Roo',
    zipCode: '77580',
    phone: '+52 998 883 3143',
    map: {
      embedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.123456789!2d-87.119698!3d20.5809134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e446dadd87053%3A0x8042e81e921809a5!2sXcaret%20Park!5e0!3m2!1sen!2sus!4v1709318400000!5m2!1sen!2sus',
      fallbackUrl:
        'https://www.google.com/maps/place/Xcaret+Park/@20.5809134,-87.119698,17z',
    },
  },
  receptionLocation: {
    name: 'La Isla, Xcaret Park',
    date: 'March 13, 2027',
    time: '8:00 PM - 2:00 AM',
    description:
      'A magical venue featuring a spiral descent path that leads to an underground river crossing. A glass bridge connects to an elegantly equipped palapa, creating an unforgettable setting for our celebration.',
    images: ['/images/venue/la-isla-4.jpg'],
    website: 'https://www.bodasxcaret.com/en/xcaret-locations/',
  },
  airports: [
    {
      id: 'cun',
      name: 'Cancun International Airport',
      code: 'CUN',
      distance: '75 km (47 miles)',
      driveTime: '1 hour 15 minutes',
      rideshareEstimate: '$45-60 USD (Uber/Taxi)',
      shuttleInfo:
        'Xcaret offers direct shuttle service from Cancun Airport. We recommend booking in advance through their website.',
      routeMapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d238686.8105688908!2d-87.1557564028311!3d20.812257725807193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8f4e81bb49b57809%3A0xe7f7d44da1f07a06!2sCancun%20International%20Airport%2C%20Carr.%20a%20Aeropuerto%20Canc%C3%BAn%2C%2077500%20Canc%C3%BAn%2C%20Q.R.%2C%20Mexico!3m2!1d21.0419232!2d-86.8743844!4m5!1s0x8f4e446dadd87053%3A0x8042e81e921809a5!2sXcaret%20Park%2C%20Carretera%20Chetumal%2C%20Puerto%20Juarez%20km%20282-Int%20B%2C%20Colonia%20Rancho%20Xcaret%2C%20Ju%C3%A1rez%2C%2077580%20Playa%20del%20Carmen%2C%20Q.R.%2C%20Mexico!3m2!1d20.5809134!2d-87.119698!5e0!3m2!1sen!2sus!4v1772397158253!5m2!1sen!2sus',
    },
    {
      id: 'tqo',
      name: 'Tulum International Airport',
      code: 'TQO',
      distance: '45 km (28 miles)',
      driveTime: '45 minutes',
      rideshareEstimate: '$30-45 USD (Uber/Taxi)',
      shuttleInfo:
        'The new Tulum Airport is closer to Xcaret. Taxi and rideshare services are available at the terminal.',
      routeMapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d239451.85394509792!2d-87.55487310054282!3d20.323631648200966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8f4e2b7a20cafeb1%3A0x3442c47b0b54e8bf!2sAeropuerto%20Internacional%20de%20Tulum%20Felipe%20Carrillo%20Puerto%2C%209F7C%2B72%2C%2077796%20Macario%20G%C3%B3mez%2C%20Q.R.%2C%20Mexico!3m2!1d20.1661543!2d-87.6592156!4m5!1s0x8f4e446dadd87053%3A0x8042e81e921809a5!2sXcaret%20Park%2C%20Carretera%20Chetumal%2C%20Puerto%20Juarez%20km%20282-Int%20B%2C%20Colonia%20Rancho%20Xcaret%2C%20Ju%C3%A1rez%2C%2077580%20Playa%20del%20Carmen%2C%20Q.R.%2C%20Mexico!3m2!1d20.5809134!2d-87.119698!5e0!3m2!1sen!2sus!4v1772397242195!5m2!1sen!2sus',
    },
  ],
  socialPosts: [],
};
