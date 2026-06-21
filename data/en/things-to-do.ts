import type { Activity, DestinationInfo } from '../types';

export const destinations: DestinationInfo[] = [
  {
    id: 'xcaret',
    title: 'Xcaret Parks',
  },
  {
    id: 'nightlife',
    title: 'Night life',
  },
  {
    id: 'beach',
    title: 'Beaches',
  },
  {
    id: 'ruins',
    title: 'Mayan Ruins',
  },
  {
    id: 'cenotes',
    title: 'Cenotes',
  },
];

export const activities: Activity[] = [
  // XCARET PARKS
  {
    id: 'xcaret-park',
    name: 'Xcaret Park',
    description:
      'The flagship eco-park with 50+ natural and cultural attractions, underground rivers, wildlife, and the nightly Mexico Espectacular show.',
        destination: 'xcaret',
        website: 'https://www.xcaret.com/en/',
  },
  {
    id: 'xcaret-xplor',
    name: 'Xplor',
    description:
      '13 thrilling ziplines through jungle canopy, plus underground river rafting and amphibious vehicles through ancient caves.',
    destination: 'xcaret',
        website: 'https://www.xplor.travel/en/',
  },
  {
    id: 'xcaret-xelha',
    name: 'Xel-Ha',
    description:
      'Natural aquatic park perfect for snorkeling in a massive natural inlet teeming with diverse marine life and sea turtles.',
        destination: 'xcaret',
        website: 'https://www.xelha.com/en/',
  },

  // PLAYA DEL CARMEN - Nightlife
  {
    id: 'playa-coco-bongo',
    name: 'Coco Bongo',
    description:
      'High-energy nightclub with acrobatic performances, celebrity impersonators, live shows, and confetti cannons. Open bar package included.',
        destination: 'nightlife',
    travelTime: '~10 min',
    website: 'https://www.cocobongo.com/show/playa-del-carmen/',
      },
  {
    id: 'playa-la-vaquita',
    name: 'La Vaquita',
    description:
      'One of the most popular party spots on 12th Street — high-energy dance club playing hip-hop, Latin beats, and pop. Lively crowd and a great atmosphere.',
    destination: 'nightlife',
    travelTime: '~10 min',
    website: 'https://www.tripadvisor.com/Attraction_Review-g150812-d6554851-Reviews-La_Vaquita-Playa_del_Carmen_Yucatan_Peninsula.html',
  },
  {
    id: 'playa-quinta',
    name: 'Quinta Avenida (5th Ave)',
    description:
      'The iconic pedestrian strip of Playa del Carmen, lined with restaurants, bars, live music, and boutique shops. Best experienced at night.',
        destination: 'nightlife',
    travelTime: '~10 min',
    website:
      'https://mexicancaribbean.travel/nightlife-guide-to-playa-del-carmen-the-best-places-to-enjoy-the-night/',
  },

  // PLAYA DEL CARMEN - Beaches
  {
    id: 'playa-coralina',
    name: 'Coralina Daylight Club',
    description:
      'One of the liveliest beach clubs in Playa del Carmen — stunning pool, resident DJs, and a festive atmosphere right on the Caribbean.',
    destination: 'beach',
    travelTime: '~10 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150812-d8628350-Reviews-Coralina_Daylight_Club-Playa_del_Carmen_Yucatan_Peninsula.html',
  },
  {
    id: 'playa-martina',
    name: 'Martina Beach Club',
    description:
      'A boutique, more intimate beach club with comfortable loungers, a refreshing pool, and a relaxed vibe — a great escape from the busier spots.',
    destination: 'beach',
    travelTime: '~10 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150812-d19094882-Reviews-Martina_Beach_Club-Playa_del_Carmen_Yucatan_Peninsula.html',
  },
  {
    id: 'playa-beach',
    name: 'Playa del Carmen Beach',
    description:
      'The famous main beach with crystal-clear turquoise waters and soft white sand, lined with beach clubs, restaurants, and water sport rentals.',
        destination: 'beach',
    travelTime: '~10 min',
    website: 'https://mexicancaribbean.travel/destination/playa-del-carmen/',
  },

  // CENOTES
  {
    id: 'cenote-azul',
    name: 'Cenote Azul',
    description:
      'One of the closest and most accessible cenotes to the resort — a wide open-air pool with brilliant blue water, shallow areas, and cliff jumps for the adventurous.',
        destination: 'cenotes',
    travelTime: '~10 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150812-d2400026-Reviews-Cenote_Azul-Playa_del_Carmen_Yucatan_Peninsula.html',
      },
  {
    id: 'cenote-cristalino',
    name: 'Cenote Cristalino',
    description:
      'A stunning semi-open cenote with crystal-clear water, submerged cave formations, and cliff jumping platforms. Great for swimming and snorkeling.',
        destination: 'cenotes',
    travelTime: '~15 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150812-d2214563-Reviews-Cenote_Cristalino-Playa_del_Carmen_Yucatan_Peninsula.html',
      },
  {
    id: 'cenote-dos-ojos',
    name: 'Cenote Dos Ojos',
    description:
      'Two connected sinkholes named for their eye-like shape. Famous for cave snorkeling and diving through one of the world\'s longest underwater cave systems.',
        destination: 'cenotes',
    travelTime: '~20 min',
    website: 'http://cenotedosojos.mx/en/',
      },
  // ARCHAEOLOGICAL SITES
  {
    id: 'ruins-tulum',
    name: 'Tulum',
    description:
      'The only walled Mayan city built on the coast, perched on cliffs overlooking the Caribbean Sea. One of the most photographed sites in Mexico.',
        destination: 'ruins',
    travelTime: '~30 min',
    website: 'https://tulumruins.info/',
      },
  {
    id: 'ruins-muyil',
    name: 'Muyil',
    description:
      'A peaceful, lesser-visited Mayan site on the edge of the Sian Ka\'an Biosphere Reserve with forest trails and an ancient navigable canal.',
        destination: 'ruins',
    travelTime: '~35 min',
    website:
      'https://absolute-adventure-mexico.com/maya-ruins/muyil-ruins-a-peaceful-mayan-site-on-the-edge-of-sian-kaan/',
  },
  {
    id: 'ruins-coba',
    name: 'Coba',
    description:
      'Ancient Mayan city with the Nohoch Mul pyramid — one of the tallest in Mexico at 138 ft, recently reopened for climbing with a new wooden staircase.',
        destination: 'ruins',
    travelTime: '~45 min',
    website:
    `https://www.tripadvisor.com/Attraction_Review-g499447-d152724-Reviews-Zona_Arqueologica_De_Coba-Coba_Yucatan_Peninsula.html`
      },
];
