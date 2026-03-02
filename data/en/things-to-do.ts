import type { Activity, DestinationInfo, ActivityCategory } from '../types';

export const destinations: DestinationInfo[] = [
  {
    id: 'xcaret',
    title: 'Xcaret + Playa Del Carmen',
    subtitle: 'Your resort and surrounding area',
    travelInfo: 'At the resort',
  },
  {
    id: 'cancun',
    title: 'Cancun',
    subtitle: 'The famous resort city to the north',
    travelInfo: '~1 hour from resort',
  },
  {
    id: 'tulum',
    title: 'Tulum',
    subtitle: 'Ancient ruins and pristine cenotes',
    travelInfo: '~30 minutes from resort',
  },
];

export const categoryLabels: Record<ActivityCategory, string> = {
  water: 'Water Adventures',
  nature: 'Nature & Wildlife',
  parks: 'Parks & Excursions',
  culture: 'Cultural Experiences',
  wellness: 'Wellness & Relaxation',
  beach: 'Beaches',
  ruins: 'Archaeological Sites',
  cenotes: 'Cenotes',
  adventure: 'Adventures',
  nightlife: 'Nightlife',
  shopping: 'Shopping & Markets',
};

export const activities: Activity[] = [
  // XCARET + PLAYA DEL CARMEN - Water Adventures
  {
    id: 'xcaret-underground-rivers',
    name: 'Underground Rivers',
    description:
      'Float through three stunning underground rivers with crystal-clear water, tunnels, and caves.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/underground-rivers/',
  },
  {
    id: 'xcaret-snorkeling',
    name: 'Snorkeling',
    description:
      'Explore lush coral reefs in crystal-clear Caribbean waters teeming with tropical fish.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/snorkel-tour/',
  },
  {
    id: 'xcaret-beach-coves',
    name: 'Beach & Coves',
    description:
      'Relax at private beach areas and natural coves scattered throughout the resort property.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/aquatic-paradise-xcaret/',
  },
  {
    id: 'xcaret-kayaking',
    name: 'Kayaking & Paddleboarding',
    description:
      'Paddle along the river that winds through the resort with clear waters and small reefs.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/xavage-activities/kayak/',
  },
  // Nature & Wildlife
  {
    id: 'xcaret-aquarium',
    name: 'Coral Reef Aquarium',
    description:
      'View diverse marine life up close in this impressive aquarium showcasing local species.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions-nature-lovers/',
  },
  {
    id: 'xcaret-butterfly',
    name: 'Butterfly Pavilion',
    description:
      'Walk among hundreds of butterfly species in a lush tropical garden enclosure.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions-nature-lovers/',
  },
  {
    id: 'xcaret-aviary',
    name: 'Aviary',
    description:
      'Observe tropical birds including macaws, toucans, and flamingos in natural habitats.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/aviary-xcaret/',
  },
  {
    id: 'xcaret-turtles',
    name: 'Sea Turtle Encounters',
    description:
      'Learn about conservation efforts and observe sea turtles at the turtle sanctuary.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/marine-turtle-xcaret/',
  },
  {
    id: 'xcaret-stingrays',
    name: 'Stingray Sanctuary',
    description:
      'Interact with gentle stingrays in a safe, shallow environment.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/stingrays-encounter-xcaret/',
  },
  // Parks & Excursions
  {
    id: 'xcaret-park',
    name: 'Xcaret Park',
    description:
      'The flagship eco-park with 50+ natural and cultural attractions, underground rivers, and wildlife.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/',
  },
  {
    id: 'xcaret-xelha',
    name: 'Xel-Ha',
    description:
      'Natural aquatic park perfect for snorkeling in a massive natural inlet with diverse marine life.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xelha.com/en/',
    note: 'Government entrance fee required (~$26)',
  },
  {
    id: 'xcaret-xplor',
    name: 'Xplor',
    description:
      '13 thrilling ziplines through jungle canopy, plus underground river rafting and amphibious vehicles.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xplor.travel/en/',
  },
  {
    id: 'xcaret-xenotes',
    name: 'Xenotes',
    description:
      'Swim in four sacred cenotes with rappelling, ziplines, and kayaking through ancient caves.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xenotes.com/en/',
  },
  {
    id: 'xcaret-xoximilco',
    name: 'Xoximilco',
    description:
      'Mexican fiesta on colorful trajinera boats with live music, dancing, and traditional food.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xoximilco.com/en/',
    note: 'Evening experience - great for groups',
  },
  {
    id: 'xcaret-xailing',
    name: 'Xcaret Xailing',
    description:
      'Day trips to Isla Mujeres and Cozumel with catamaran sailing and island exploration.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xailing.com/en/',
  },
  // Cultural Experiences
  {
    id: 'xcaret-espectacular',
    name: 'Xcaret Mexico Espectacular',
    description:
      'Nightly show with 300+ performers showcasing 500 years of Mexican history through music and dance.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/xcaret-mexico-espectacular/',
    note: 'Shows at 7pm - arrive early for best seats',
  },
  {
    id: 'xcaret-workshops',
    name: 'Creative Workshops',
    description:
      'Pottery, painting, weaving, and textile classes guided by expert instructors.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions-optional-activities/',
  },
  {
    id: 'xcaret-wine',
    name: 'Wine Cellar Tastings',
    description:
      'Curated wine pairing sessions featuring Mexican and international selections.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/wine-pairing-xcaret-cellar/',
  },
  {
    id: 'xcaret-chocolate',
    name: 'Chocolate Experience',
    description:
      'Learn about Mexican cacao traditions at the chocolate boutique.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://blog.xcaret.com/en/chocolate-workshop-xcaret/',
  },
  {
    id: 'xcaret-torre',
    name: 'Torre Escenica',
    description:
      'Rotating tower offering panoramic views of the jungle, parks, and Caribbean coastline.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/scenic-tower/',
  },
  // Wellness & Relaxation
  {
    id: 'xcaret-spa',
    name: 'Muluk Spa',
    description:
      'Treatments in natural rock cabins with hydrotherapy circuit and ancestral-inspired rituals.',
    category: 'wellness',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.hotelxcaretarte.com/en/spa-wellness/',
    note: 'Some premium treatments have additional cost',
  },
  {
    id: 'xcaret-yoga',
    name: 'Yoga Classes',
    description:
      'Daily yoga sessions in serene settings overlooking the jungle or ocean.',
    category: 'wellness',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.hotelxcaretarte.com/en/spa-wellness/',
  },
  {
    id: 'xcaret-fitness',
    name: 'Fitness Center',
    description:
      'Modern gym equipment and group fitness classes available throughout your stay.',
    category: 'wellness',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.hotelxcaretarte.com/en/spa-wellness/',
  },
  // CANCUN - Beaches
  {
    id: 'cancun-playa-delfines',
    name: 'Playa Delfines',
    description:
      'The largest and most beloved public beach in Cancun with postcard views and the iconic Cancun sign.',
    category: 'beach',
    destination: 'cancun',
    travelTime: '~1 hour',
    address: 'Zona Hotelera, Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d152700-Reviews-Playa_Delfines-Cancun_Yucatan_Peninsula.html',
  },
  {
    id: 'cancun-playa-tortugas',
    name: 'Playa Tortugas',
    description:
      'Family-friendly beach with calmer waves, perfect for swimming and water activities.',
    category: 'beach',
    destination: 'cancun',
    travelTime: '~1 hour',
    address: 'Zona Hotelera, Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d152698-Reviews-Playa_Tortugas-Cancun_Yucatan_Peninsula.html',
  },
  // Water Adventures
  {
    id: 'cancun-musa',
    name: 'MUSA Underwater Museum',
    description:
      'Snorkel or dive among 500 underwater sculptures designed to encourage coral reef growth.',
    category: 'water',
    destination: 'cancun',
    travelTime: '~1 hour',
    website: 'https://musamexico.org/',
    badge: 'mustReserve',
  },
  {
    id: 'cancun-reef-snorkeling',
    name: 'Mesoamerican Reef Snorkeling',
    description:
      'Explore the second-largest barrier reef in the world with vibrant marine life.',
    category: 'water',
    destination: 'cancun',
    travelTime: '~1 hour',
    website: 'https://www.cancunsnorkeling.com/',
  },
  {
    id: 'cancun-whale-sharks',
    name: 'Whale Shark Swimming',
    description: 'Swim alongside gentle whale sharks in their natural habitat.',
    category: 'water',
    destination: 'cancun',
    travelTime: '~1.5 hours',
    badge: 'mustReserve',
    website: 'https://www.mexicowhaleshark.com/',
    note: 'Seasonal: June - September only',
  },
  // Archaeological Sites / Day Trips
  {
    id: 'cancun-chichen-itza',
    name: 'Chichen Itza',
    description:
      'UNESCO World Heritage Site and one of the New Seven Wonders of the World. The most famous Mayan ruins.',
    category: 'ruins',
    destination: 'cancun',
    travelTime: '~2.5 hours',
    badge: 'mustReserve',
    website: 'https://www.chichenitza.com/',
    note: 'Book tour with hotel pickup for convenience',
  },
  {
    id: 'cancun-isla-mujeres',
    name: 'Isla Mujeres',
    description:
      'Charming island with stunning Playa Norte beach, golf cart rentals, and laid-back vibes.',
    category: 'adventure',
    destination: 'cancun',
    travelTime: '~1.5 hours (includes ferry)',
    website: 'https://mexicancaribbean.travel/destination/isla-mujeres/',
    note: 'Take ferry from Puerto Juarez, rent golf cart on island',
  },
  // Shopping & Markets
  {
    id: 'cancun-mercado-28',
    name: 'Mercado 28',
    description:
      'Vibrant, colorful market with handicrafts, souvenirs, and authentic Mexican food stalls.',
    category: 'shopping',
    destination: 'cancun',
    travelTime: '~1 hour',
    address: 'Downtown Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d504536-Reviews-Mercado_28-Cancun_Yucatan_Peninsula.html',
    note: 'Bargaining expected - start at 50% of asking price',
  },
  // Nightlife
  {
    id: 'cancun-coco-bongo',
    name: 'Coco Bongo',
    description:
      'Legendary nightclub with acrobatic performances, live bands, and musical impersonators.',
    category: 'nightlife',
    destination: 'cancun',
    travelTime: '~1 hour',
    website: 'https://www.cocobongo.com/',
    address: 'Zona Hotelera, Cancun',
    badge: 'mustReserve',
  },
  {
    id: 'cancun-palapas',
    name: 'Parque de las Palapas',
    description:
      'Local downtown plaza with street food vendors, churros, marquesitas, and live entertainment.',
    category: 'culture',
    destination: 'cancun',
    travelTime: '~1 hour',
    address: 'Downtown Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d7715234-Reviews-El_Parque_de_las_Palapas-Cancun_Yucatan_Peninsula.html',
    note: 'Best in evenings - great for authentic local experience',
  },
  // TULUM - Archaeological Sites
  {
    id: 'tulum-ruins',
    name: 'Tulum Ruins',
    description:
      'Clifftop Mayan ruins overlooking the Caribbean Sea. The only Mayan ruins on the coastline.',
    category: 'ruins',
    destination: 'tulum',
    travelTime: '~30 min',
    website: 'https://www.inah.gob.mx/',
    note: 'Arrive by 8am to avoid crowds',
  },
  {
    id: 'tulum-coba',
    name: 'Coba',
    description:
      'Ancient Mayan city with the Nohoch Mul pyramid - one of the tallest you can still climb in Mexico.',
    category: 'ruins',
    destination: 'tulum',
    travelTime: '~45 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g499447-d152763-Reviews-Coba_Ruins-Coba_Yucatan_Peninsula.html',
    note: 'Rent a bike to explore the sprawling site',
  },
  // Cenotes
  {
    id: 'tulum-gran-cenote',
    name: 'Gran Cenote',
    description:
      'Crystal-clear swimming hole with underwater caves. Swim and snorkel with turtles.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~35 min',
    website: 'https://www.visittulum.travel/en/locations/gran_cenote_',
    note: 'Use reef-safe sunscreen only - arrive early',
  },
  {
    id: 'tulum-dos-ojos',
    name: 'Cenote Dos Ojos',
    description:
      'Famous for underwater caves and excellent snorkeling. Two connected sinkholes to explore.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~20 min',
    website: 'http://cenotedosojos.mx/en/',
    note: 'Use reef-safe sunscreen only',
  },
  {
    id: 'tulum-calavera',
    name: 'Cenote Calavera',
    description:
      'Three openings resembling a skull - jump or climb down into the underground pool.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~35 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150813-d10750550-Reviews-Cenote_Calavera-Tulum_Yucatan_Peninsula.html',
    note: 'Use reef-safe sunscreen only - for adventurous swimmers',
  },
  {
    id: 'tulum-tankach-ha',
    name: 'Cenote Tankach-Ha',
    description:
      'Underground cathedral-like cenote near Coba with stunning rock formations.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~50 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g499447-d3784125-Reviews-Cenotes_Tamcach_Ha_Choo_Ha-Coba_Yucatan_Peninsula.html',
    note: 'Use reef-safe sunscreen only - combine with Coba visit',
  },
  // Beaches
  {
    id: 'tulum-playa-paraiso',
    name: 'Playa Paraiso',
    description:
      'Postcard-perfect beach with powdery white sand, swaying palms, and turquoise waters.',
    category: 'beach',
    destination: 'tulum',
    travelTime: '~30 min',
    address: 'Tulum Beach Zone',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150813-d3321137-Reviews-Playa_Paraiso-Tulum_Yucatan_Peninsula.html',
  },
  {
    id: 'tulum-playa-pescadores',
    name: 'Playa Pescadores',
    description:
      'Authentic fishing beach where locals bring in fresh catch. Picturesque wooden boats.',
    category: 'beach',
    destination: 'tulum',
    travelTime: '~30 min',
    website: 'https://playapescadorestulum.com/',
    note: 'Visit early morning to see fishermen',
  },
  // Nature & Reserves
  {
    id: 'tulum-sian-kaan',
    name: "Sian Ka'an Biosphere Reserve",
    description:
      'UNESCO World Heritage Site with untamed natural beauty, wildlife, and Mayan ruins.',
    category: 'nature',
    destination: 'tulum',
    travelTime: '~45 min',
    badge: 'mustReserve',
    website: 'https://whc.unesco.org/en/list/410/',
    note: 'Book guided tour for best experience',
  },
  {
    id: 'tulum-kaan-luum',
    name: 'Laguna Kaan Luum',
    description:
      'Stunning turquoise lagoon with wooden deck, perfect for swimming and relaxation.',
    category: 'nature',
    destination: 'tulum',
    travelTime: '~40 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150813-d8288993-Reviews-Laguna_Kaan_Luum-Tulum_Yucatan_Peninsula.html',
    note: 'No swimming in the deep blue center (cenote below)',
  },
  // Adventures
  {
    id: 'tulum-atv',
    name: 'ATV Jungle Tours',
    description:
      'Off-road adventures through tropical forests, hidden cenotes, and traditional Mayan villages.',
    category: 'adventure',
    destination: 'tulum',
    travelTime: '~35 min',
    badge: 'mustReserve',
    website:
      'https://www.viator.com/Tulum-tours/4WD-ATV-and-Off-Road-Tours/d23012-g9-c32',
  },
  {
    id: 'tulum-reef-snorkeling',
    name: 'Tulum Reef Snorkeling',
    description:
      'Snorkel directly offshore from the ruins with sea turtles, tropical fish, and nurse sharks.',
    category: 'adventure',
    destination: 'tulum',
    travelTime: '~30 min',
    website: 'https://snorkelintulum.com/',
  },
];
