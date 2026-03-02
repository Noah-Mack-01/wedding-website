import type { Activity, DestinationInfo, ActivityCategory } from '../types';

export const destinations: DestinationInfo[] = [
  {
    id: 'xcaret',
    title: 'Xcaret + Playa Del Carmen',
    subtitle: 'Tu resort y area circundante',
    travelInfo: 'En el resort',
  },
  {
    id: 'cancun',
    title: 'Cancun',
    subtitle: 'La famosa ciudad turistica al norte',
    travelInfo: '~1 hora desde el resort',
  },
  {
    id: 'tulum',
    title: 'Tulum',
    subtitle: 'Ruinas antiguas y cenotes pristinos',
    travelInfo: '~30 minutos desde el resort',
  },
];

export const categoryLabels: Record<ActivityCategory, string> = {
  water: 'Aventuras Acuaticas',
  nature: 'Naturaleza y Vida Silvestre',
  parks: 'Parques y Excursiones',
  culture: 'Experiencias Culturales',
  wellness: 'Bienestar y Relajacion',
  beach: 'Playas',
  ruins: 'Sitios Arqueologicos',
  cenotes: 'Cenotes',
  adventure: 'Aventuras',
  nightlife: 'Vida Nocturna',
  shopping: 'Compras y Mercados',
};

export const activities: Activity[] = [
  // XCARET + PLAYA DEL CARMEN - Aventuras Acuaticas
  {
    id: 'xcaret-underground-rivers',
    name: 'Rios Subterraneos',
    description:
      'Flota por tres impresionantes rios subterraneos con agua cristalina, tuneles y cuevas.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/underground-rivers/',
  },
  {
    id: 'xcaret-snorkeling',
    name: 'Snorkel',
    description:
      'Explora exuberantes arrecifes de coral en aguas cristalinas del Caribe llenas de peces tropicales.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/snorkel-tour/',
  },
  {
    id: 'xcaret-beach-coves',
    name: 'Playas y Caletas',
    description:
      'Relajate en areas de playa privadas y caletas naturales distribuidas por toda la propiedad del resort.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/aquatic-paradise-xcaret/',
  },
  {
    id: 'xcaret-kayaking',
    name: 'Kayak y Paddleboard',
    description:
      'Navega por el rio que atraviesa el resort con aguas claras y pequenos arrecifes.',
    category: 'water',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/xavage-activities/kayak/',
  },
  // Naturaleza y Vida Silvestre
  {
    id: 'xcaret-aquarium',
    name: 'Acuario de Arrecife de Coral',
    description:
      'Observa diversa vida marina de cerca en este impresionante acuario que muestra especies locales.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions-nature-lovers/',
  },
  {
    id: 'xcaret-butterfly',
    name: 'Mariposario',
    description:
      'Camina entre cientos de especies de mariposas en un exuberante jardin tropical.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions-nature-lovers/',
  },
  {
    id: 'xcaret-aviary',
    name: 'Aviario',
    description:
      'Observa aves tropicales incluyendo guacamayas, tucanes y flamencos en habitats naturales.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/aviary-xcaret/',
  },
  {
    id: 'xcaret-turtles',
    name: 'Encuentros con Tortugas Marinas',
    description:
      'Aprende sobre esfuerzos de conservacion y observa tortugas marinas en el santuario.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/marine-turtle-xcaret/',
  },
  {
    id: 'xcaret-stingrays',
    name: 'Santuario de Mantarrayas',
    description:
      'Interactua con gentiles mantarrayas en un ambiente seguro y poco profundo.',
    category: 'nature',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/stingrays-encounter-xcaret/',
  },
  // Parques y Excursiones
  {
    id: 'xcaret-park',
    name: 'Parque Xcaret',
    description:
      'El eco-parque insignia con mas de 50 atracciones naturales y culturales, rios subterraneos y vida silvestre.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/',
  },
  {
    id: 'xcaret-xelha',
    name: 'Xel-Ha',
    description:
      'Parque acuatico natural perfecto para snorkel en una enorme ensenada natural con diversa vida marina.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xelha.com/en/',
    note: 'Cuota de entrada gubernamental requerida (~$26)',
  },
  {
    id: 'xcaret-xplor',
    name: 'Xplor',
    description:
      '13 emocionantes tirolesas a traves del dosel de la selva, mas rafting en rio subterraneo y vehiculos anfibios.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xplor.travel/en/',
  },
  {
    id: 'xcaret-xenotes',
    name: 'Xenotes',
    description:
      'Nada en cuatro cenotes sagrados con rapel, tirolesas y kayak a traves de cuevas antiguas.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xenotes.com/en/',
  },
  {
    id: 'xcaret-xoximilco',
    name: 'Xoximilco',
    description:
      'Fiesta mexicana en coloridas trajineras con musica en vivo, baile y comida tradicional.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xoximilco.com/en/',
    note: 'Experiencia nocturna - excelente para grupos',
  },
  {
    id: 'xcaret-xailing',
    name: 'Xcaret Xailing',
    description:
      'Excursiones de un dia a Isla Mujeres y Cozumel con navegacion en catamaran y exploracion de islas.',
    category: 'parks',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xailing.com/en/',
  },
  // Experiencias Culturales
  {
    id: 'xcaret-espectacular',
    name: 'Xcaret Mexico Espectacular',
    description:
      'Espectaculo nocturno con mas de 300 artistas mostrando 500 anos de historia mexicana a traves de musica y danza.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/xcaret-mexico-espectacular/',
    note: 'Funciones a las 7pm - llega temprano para mejores asientos',
  },
  {
    id: 'xcaret-workshops',
    name: 'Talleres Creativos',
    description:
      'Clases de ceramica, pintura, tejido y textiles guiadas por instructores expertos.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions-optional-activities/',
  },
  {
    id: 'xcaret-wine',
    name: 'Catas en la Cava de Vinos',
    description:
      'Sesiones de maridaje de vinos curadas con selecciones mexicanas e internacionales.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/wine-pairing-xcaret-cellar/',
  },
  {
    id: 'xcaret-chocolate',
    name: 'Experiencia de Chocolate',
    description:
      'Aprende sobre las tradiciones mexicanas del cacao en la boutique de chocolate.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://blog.xcaret.com/en/chocolate-workshop-xcaret/',
  },
  {
    id: 'xcaret-torre',
    name: 'Torre Escenica',
    description:
      'Torre giratoria que ofrece vistas panoramicas de la selva, parques y costa del Caribe.',
    category: 'culture',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.xcaret.com/en/attractions/scenic-tower/',
  },
  // Bienestar y Relajacion
  {
    id: 'xcaret-spa',
    name: 'Muluk Spa',
    description:
      'Tratamientos en cabinas de roca natural con circuito de hidroterapia y rituales ancestrales.',
    category: 'wellness',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.hotelxcaretarte.com/en/spa-wellness/',
    note: 'Algunos tratamientos premium tienen costo adicional',
  },
  {
    id: 'xcaret-yoga',
    name: 'Clases de Yoga',
    description:
      'Sesiones diarias de yoga en entornos serenos con vista a la selva o el oceano.',
    category: 'wellness',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.hotelxcaretarte.com/en/spa-wellness/',
  },
  {
    id: 'xcaret-fitness',
    name: 'Centro de Fitness',
    description:
      'Equipo moderno de gimnasio y clases grupales de fitness disponibles durante tu estancia.',
    category: 'wellness',
    destination: 'xcaret',
    badge: 'includedWithStay',
    website: 'https://www.hotelxcaretarte.com/en/spa-wellness/',
  },
  // CANCUN - Playas
  {
    id: 'cancun-playa-delfines',
    name: 'Playa Delfines',
    description:
      'La playa publica mas grande y querida de Cancun con vistas de postal y el iconico letrero de Cancun.',
    category: 'beach',
    destination: 'cancun',
    travelTime: '~1 hora',
    address: 'Zona Hotelera, Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d152700-Reviews-Playa_Delfines-Cancun_Yucatan_Peninsula.html',
  },
  {
    id: 'cancun-playa-tortugas',
    name: 'Playa Tortugas',
    description:
      'Playa familiar con olas mas tranquilas, perfecta para nadar y actividades acuaticas.',
    category: 'beach',
    destination: 'cancun',
    travelTime: '~1 hora',
    address: 'Zona Hotelera, Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d152698-Reviews-Playa_Tortugas-Cancun_Yucatan_Peninsula.html',
  },
  // Aventuras Acuaticas
  {
    id: 'cancun-musa',
    name: 'Museo Subacuatico MUSA',
    description:
      'Haz snorkel o buceo entre 500 esculturas subacuaticas disenadas para fomentar el crecimiento del arrecife de coral.',
    category: 'water',
    destination: 'cancun',
    travelTime: '~1 hora',
    website: 'https://musamexico.org/',
    badge: 'mustReserve',
  },
  {
    id: 'cancun-reef-snorkeling',
    name: 'Snorkel en Arrecife Mesoamericano',
    description:
      'Explora la segunda barrera de arrecife mas grande del mundo con vibrante vida marina.',
    category: 'water',
    destination: 'cancun',
    travelTime: '~1 hora',
    website: 'https://www.cancunsnorkeling.com/',
  },
  {
    id: 'cancun-whale-sharks',
    name: 'Nado con Tiburones Ballena',
    description:
      'Nada junto a gentiles tiburones ballena en su habitat natural.',
    category: 'water',
    destination: 'cancun',
    travelTime: '~1.5 horas',
    badge: 'mustReserve',
    website: 'https://www.mexicowhaleshark.com/',
    note: 'Temporada: Solo junio - septiembre',
  },
  // Sitios Arqueologicos / Excursiones
  {
    id: 'cancun-chichen-itza',
    name: 'Chichen Itza',
    description:
      'Sitio del Patrimonio Mundial de la UNESCO y una de las Nuevas Siete Maravillas del Mundo. Las ruinas mayas mas famosas.',
    category: 'ruins',
    destination: 'cancun',
    travelTime: '~2.5 horas',
    badge: 'mustReserve',
    website: 'https://www.chichenitza.com/',
    note: 'Reserva tour con recogida en hotel por conveniencia',
  },
  {
    id: 'cancun-isla-mujeres',
    name: 'Isla Mujeres',
    description:
      'Encantadora isla con la impresionante Playa Norte, renta de carritos de golf y ambiente relajado.',
    category: 'adventure',
    destination: 'cancun',
    travelTime: '~1.5 horas (incluye ferry)',
    website: 'https://mexicancaribbean.travel/destination/isla-mujeres/',
    note: 'Toma ferry desde Puerto Juarez, renta carrito de golf en la isla',
  },
  // Compras y Mercados
  {
    id: 'cancun-mercado-28',
    name: 'Mercado 28',
    description:
      'Vibrante y colorido mercado con artesanias, recuerdos y puestos de comida mexicana autentica.',
    category: 'shopping',
    destination: 'cancun',
    travelTime: '~1 hora',
    address: 'Centro de Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d504536-Reviews-Mercado_28-Cancun_Yucatan_Peninsula.html',
    note: 'Se espera regateo - comienza al 50% del precio pedido',
  },
  // Vida Nocturna
  {
    id: 'cancun-coco-bongo',
    name: 'Coco Bongo',
    description:
      'Legendario club nocturno con actuaciones acrobaticas, bandas en vivo e imitadores musicales.',
    category: 'nightlife',
    destination: 'cancun',
    travelTime: '~1 hora',
    website: 'https://www.cocobongo.com/',
    address: 'Zona Hotelera, Cancun',
    badge: 'mustReserve',
  },
  {
    id: 'cancun-palapas',
    name: 'Parque de las Palapas',
    description:
      'Plaza del centro con vendedores de comida callejera, churros, marquesitas y entretenimiento en vivo.',
    category: 'culture',
    destination: 'cancun',
    travelTime: '~1 hora',
    address: 'Centro de Cancun',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150807-d7715234-Reviews-El_Parque_de_las_Palapas-Cancun_Yucatan_Peninsula.html',
    note: 'Mejor por las noches - excelente para experiencia local autentica',
  },
  // TULUM - Sitios Arqueologicos
  {
    id: 'tulum-ruins',
    name: 'Ruinas de Tulum',
    description:
      'Ruinas mayas en acantilado con vista al Mar Caribe. Las unicas ruinas mayas en la costa.',
    category: 'ruins',
    destination: 'tulum',
    travelTime: '~30 min',
    website: 'https://www.inah.gob.mx/',
    note: 'Llega a las 8am para evitar multitudes',
  },
  {
    id: 'tulum-coba',
    name: 'Coba',
    description:
      'Antigua ciudad maya con la piramide Nohoch Mul - una de las mas altas que aun puedes escalar en Mexico.',
    category: 'ruins',
    destination: 'tulum',
    travelTime: '~45 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g499447-d152763-Reviews-Coba_Ruins-Coba_Yucatan_Peninsula.html',
    note: 'Renta una bicicleta para explorar el extenso sitio',
  },
  // Cenotes
  {
    id: 'tulum-gran-cenote',
    name: 'Gran Cenote',
    description:
      'Poza de agua cristalina con cuevas subacuaticas. Nada y haz snorkel con tortugas.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~35 min',
    website: 'https://www.visittulum.travel/en/locations/gran_cenote_',
    note: 'Usa solo protector solar biodegradable - llega temprano',
  },
  {
    id: 'tulum-dos-ojos',
    name: 'Cenote Dos Ojos',
    description:
      'Famoso por cuevas subacuaticas y excelente snorkel. Dos sumideros conectados para explorar.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~20 min',
    website: 'http://cenotedosojos.mx/en/',
    note: 'Usa solo protector solar biodegradable',
  },
  {
    id: 'tulum-calavera',
    name: 'Cenote Calavera',
    description:
      'Tres aberturas que asemejan una calavera - salta o baja a la poza subterranea.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~35 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150813-d10750550-Reviews-Cenote_Calavera-Tulum_Yucatan_Peninsula.html',
    note: 'Usa solo protector solar biodegradable - para nadadores aventureros',
  },
  {
    id: 'tulum-tankach-ha',
    name: 'Cenote Tankach-Ha',
    description:
      'Cenote subterraneo tipo catedral cerca de Coba con impresionantes formaciones rocosas.',
    category: 'cenotes',
    destination: 'tulum',
    travelTime: '~50 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g499447-d3784125-Reviews-Cenotes_Tamcach_Ha_Choo_Ha-Coba_Yucatan_Peninsula.html',
    note: 'Usa solo protector solar biodegradable - combina con visita a Coba',
  },
  // Playas
  {
    id: 'tulum-playa-paraiso',
    name: 'Playa Paraiso',
    description:
      'Playa de postal con arena blanca como polvo, palmeras mecidas y aguas turquesas.',
    category: 'beach',
    destination: 'tulum',
    travelTime: '~30 min',
    address: 'Zona de Playa de Tulum',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150813-d3321137-Reviews-Playa_Paraiso-Tulum_Yucatan_Peninsula.html',
  },
  {
    id: 'tulum-playa-pescadores',
    name: 'Playa Pescadores',
    description:
      'Autentica playa de pescadores donde locales traen su pesca fresca. Pintorescos botes de madera.',
    category: 'beach',
    destination: 'tulum',
    travelTime: '~30 min',
    website: 'https://playapescadorestulum.com/',
    note: 'Visita temprano en la manana para ver a los pescadores',
  },
  // Naturaleza y Reservas
  {
    id: 'tulum-sian-kaan',
    name: 'Reserva de la Biosfera Sian Kaan',
    description:
      'Sitio del Patrimonio Mundial de la UNESCO con belleza natural salvaje, vida silvestre y ruinas mayas.',
    category: 'nature',
    destination: 'tulum',
    travelTime: '~45 min',
    badge: 'mustReserve',
    website: 'https://whc.unesco.org/en/list/410/',
    note: 'Reserva tour guiado para mejor experiencia',
  },
  {
    id: 'tulum-kaan-luum',
    name: 'Laguna Kaan Luum',
    description:
      'Impresionante laguna turquesa con muelle de madera, perfecta para nadar y relajarse.',
    category: 'nature',
    destination: 'tulum',
    travelTime: '~40 min',
    website:
      'https://www.tripadvisor.com/Attraction_Review-g150813-d8288993-Reviews-Laguna_Kaan_Luum-Tulum_Yucatan_Peninsula.html',
    note: 'No se permite nadar en el centro azul profundo (cenote debajo)',
  },
  // Aventuras
  {
    id: 'tulum-atv',
    name: 'Tours en Cuatrimoto',
    description:
      'Aventuras todoterreno a traves de bosques tropicales, cenotes ocultos y pueblos mayas tradicionales.',
    category: 'adventure',
    destination: 'tulum',
    travelTime: '~35 min',
    badge: 'mustReserve',
    website:
      'https://www.viator.com/Tulum-tours/4WD-ATV-and-Off-Road-Tours/d23012-g9-c32',
  },
  {
    id: 'tulum-reef-snorkeling',
    name: 'Snorkel en Arrecife de Tulum',
    description:
      'Haz snorkel directamente frente a las ruinas con tortugas marinas, peces tropicales y tiburones nodriza.',
    category: 'adventure',
    destination: 'tulum',
    travelTime: '~30 min',
    website: 'https://snorkelintulum.com/',
  },
];
