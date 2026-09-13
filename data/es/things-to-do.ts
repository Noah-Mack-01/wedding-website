import type { Activity, DestinationInfo } from '../types';

export const destinations: DestinationInfo[] = [
  {
    id: 'xcaret',
    title: 'Parques Xcaret',
    travelInfo: 'En el resort',
  },
  {
    id: 'nightlife',
    title: 'Vida Nocturna',
    travelInfo: '',
  },
  {
    id: 'beach',
    title: 'Playas',
    travelInfo: '',
  },
  {
    id: 'ruins',
    title: 'Sitios Arqueológicos',
    travelInfo: '30 min – 3 horas desde el resort',
  },
  {
    id: 'cenotes',
    title: 'Cenotes',
    travelInfo: '10–45 min desde el resort',
  },
];

export const activities: Activity[] = [
  // PARQUES XCARET
  {
    id: 'xcaret-park',
    name: 'Parque Xcaret',
    description:
      'El eco-parque insignia con más de 50 atracciones naturales y culturales, ríos subterráneos, vida silvestre y el espectáculo nocturno México Espectacular.',
    destination: 'xcaret',
        website: 'https://www.xcaret.com/en/',
  },
  {
    id: 'xcaret-xplor',
    name: 'Xplor',
    description:
      '13 emocionantes tirolesas a través de la selva, más rafting en río subterráneo y vehículos anfibios a través de cuevas antiguas.',
    destination: 'xcaret',
        website: 'https://www.xplor.travel/en/',
  },
  {
    id: 'xcaret-xelha',
    name: 'Xel-Ha',
    description:
      'Parque acuático natural perfecto para snorkel en una enorme ensenada natural llena de diversa vida marina.',
    destination: 'xcaret',
        website: 'https://www.xelha.com/en/',
  },

  // VIDA NOCTURNA
  {
    id: 'playa-coco-bongo',
    name: 'Coco Bongo',
    description:
      'Club nocturno de alta energía con actuaciones acrobáticas, imitadores de celebridades, shows en vivo y cañones de confeti.',
    destination: 'nightlife',
    travelTime: '~10 min',
    website: 'https://www.cocobongo.com/show/playa-del-carmen/',
    address: 'Calle 12, Playa del Carmen',
  },
  {
    id: 'playa-la-vaquita',
    name: 'La Vaquita',
    description:
      'Uno de los lugares de fiesta más populares de la Calle 12 — animado club de baile con hip-hop, ritmos latinos y pop. Ambiente eléctrico y mucha energía.',
    destination: 'nightlife',
    travelTime: '~10 min',
    address: 'Calle 12, Playa del Carmen',
    website: 'https://mandalatickets.com/en/playa/disco/la-vaquita',
  },
  {
    id: 'playa-quinta',
    name: 'Quinta Avenida',
    description:
      'El icónico paseo peatonal de Playa del Carmen, rodeado de restaurantes, bares, música en vivo y boutiques. Lo mejor es vivirlo de noche.',
    destination: 'nightlife',
    travelTime: '~10 min',
    address: 'Quinta Avenida, Playa del Carmen',
    website:
      'https://mexicancaribbean.travel/nightlife-guide-to-playa-del-carmen-the-best-places-to-enjoy-the-night/',
  },

  // PLAYAS
  {
    id: 'playa-beach',
    name: 'Playa de Playa del Carmen',
    description:
      'La famosa playa principal con aguas turquesas cristalinas y suave arena blanca, bordeada de beach clubs, restaurantes y alquiler de deportes acuáticos.',
    destination: 'beach',
    travelTime: '~10 min',
    address: 'Frente de Playa, Playa del Carmen',
    website: 'https://mexicancaribbean.travel/destination/playa-del-carmen/',
  },
  {
    id: 'playa-coralina',
    name: 'Coralina Daylight Club',
    description:
      'Uno de los beach clubs más animados de Playa del Carmen — impresionante piscina, DJs residentes y ambiente festivo justo frente al Caribe.',
    destination: 'beach',
    travelTime: '~10 min',
    address: 'Playa del Carmen',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150812-d8628350-Reviews-Coralina_Daylight_Club-Playa_del_Carmen_Yucatan_Peninsula.html',
  },
  {
    id: 'playa-martina',
    name: 'Martina Beach Club',
    description:
      'Un beach club boutique más íntimo, con piscina refrescante y ambiente relajado.',
    destination: 'beach',
    travelTime: '~10 min',
    address: 'Calle 44, Playa del Carmen',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150812-d19094882-Reviews-Martina_Beach_Club-Playa_del_Carmen_Yucatan_Peninsula.html',
  },

  // CENOTES
  {
    id: 'cenote-azul',
    name: 'Cenote Azul',
    description:
      'Uno de los cenotes más cercanos y accesibles al resort — una amplia poza al aire libre con agua de brillante azul, zonas poco profundas y saltos desde el acantilado para los más aventureros.',
    destination: 'cenotes',
    travelTime: '~10 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150805-d153418-Reviews-Cenote_Azul-Yucatan_Peninsula.html',
  },
  {
    id: 'cenote-cristalino',
    name: 'Cenote Cristalino',
    description:
      'Un impresionante cenote semi-abierto con agua cristalina, formaciones de cuevas sumergidas y plataformas para saltar. Ideal para nadar y hacer snorkel.',
    destination: 'cenotes',
    travelTime: '~15 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150812-d6953037-Reviews-Cenote_Cristalino-Playa_del_Carmen_Yucatan_Peninsula.html',
  },
  {
    id: 'cenote-dos-ojos',
    name: 'Cenote Dos Ojos',
    description:
      'Dos sumideros conectados con forma de ojos. Famoso por el snorkel y buceo en cuevas a través de uno de los sistemas de cuevas submarinas más largos del mundo.',
    destination: 'cenotes',
    travelTime: '~20 min',
    website: 'http://cenotedosojos.mx/en/',
  },
  // SITIOS ARQUEOLÓGICOS
  {
    id: 'ruins-tulum',
    name: 'Ruinas de Tulum',
    description:
      'La única ciudad maya amurallada construida en la costa, sobre acantilados con vista al Mar Caribe. Uno de los sitios más fotografiados de México.',
    destination: 'ruins',
    travelTime: '~30 min',
    website: 'https://tulumruins.info/',
  },
  {
    id: 'ruins-muyil',
    name: 'Ruinas de Muyil',
    description:
      'Un sitio maya tranquilo y poco visitado en el borde de la Reserva de la Biosfera Sian Ka\'an, con senderos forestales y un antiguo canal navegable.',
    destination: 'ruins',
    travelTime: '~35 min',
    website:
      'https://absolute-adventure-mexico.com/maya-ruins/muyil-ruins-a-peaceful-mayan-site-on-the-edge-of-sian-kaan/',
  },
  {
    id: 'ruins-coba',
    name: 'Cobá',
    description:
      'Antigua ciudad maya con la pirámide Nohoch Mul — una de las más altas de México a 42 metros, recientemente reabierta para escalar con una nueva escalera de madera.',
    destination: 'ruins',
    travelTime: '~45 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g499447-d152763-Reviews-Coba_Ruins-Coba_Yucatan_Peninsula.html',
  },
];
