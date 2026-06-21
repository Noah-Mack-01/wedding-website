import type { VenueData } from '../types';

export const venueData: VenueData = {
  venue: {
    name: 'Xcaret Park',
    address: 'Carretera Chetumal, Puerto Juarez km 282-Int B',
    city: 'Playa del Carmen',
    state: 'Quintana Roo',
    zipCode: '77580',
    description:
      'Un impresionante parque eco-arqueologico en la Riviera Maya, Xcaret ofrece una belleza natural asombrosa con rios subterraneos, playas pristinas y exuberantes paisajes selvaticos - el escenario perfecto para nuestro dia especial.',
    phone: '+52 998 883 3143',
    website: 'https://www.xcaret.com',
  },
  welcomeEvent: {
    name: 'Evento de Bienvenida',
    date: '12 de marzo de 2027',
    time: '5:00 PM',
  },
  ceremonyLocation: {
    name: 'Capilla de Guadalupe',
    date: '13 de marzo de 2027',
    time: '7:00 PM',
    description:
      'Construida alrededor de un cenote sagrado como ofrenda a Nuestra Senora de Guadalupe, esta impresionante capilla presenta un altar al borde del agua y una Virgen tallada en un tronco de arbol de 12 metros de altura. Reconocida oficialmente por la Iglesia Catolica Romana.',
    images: [
      '/images/venue/chapel-1.jpg',
      '/images/venue/chapel-2.jpg',
      '/images/venue/chapel-3.jpg',
      '/images/venue/chapel-4.jpg',
      '/images/venue/chapel-5.jpg',
    ],
    website: 'https://www.xcaret.com/en/attractions/guadalupe-chapel/',
  },
  receptionLocation: {
    name: 'La Isla',
    date: '13 de marzo de 2027',
    time: '8:00 PM',
    description:
      'Un lugar magico con un sendero de descenso en espiral que lleva a un cruce de rio subterraneo. Un puente de cristal conecta con una palapa elegantemente equipada, creando un escenario inolvidable para nuestra celebracion.',
    images: [
      '/images/venue/la-isla-1.jpg',
      '/images/venue/la-isla-2.jpg',
      '/images/venue/la-isla-3.jpeg',
    ],
    website: 'https://www.bodasxcaret.com/en/xcaret-locations/',
  },
  map: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.123456789!2d-87.119698!3d20.5809134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e446dadd87053%3A0x8042e81e921809a5!2sXcaret%20Park!5e0!3m2!1sen!2sus!4v1709318400000!5m2!1sen!2sus',
    fallbackUrl:
      'https://www.google.com/maps/place/Xcaret+Park/@20.5809134,-87.119698,17z',
  },
  airports: [
    {
      id: 'cun',
      name: 'Aeropuerto Internacional de Cancun',
      code: 'CUN',
      distance: '75 km (47 millas)',
      driveTime: '1 hora 15 minutos',
      rideshareEstimate: '$45-60 USD (Uber/Taxi)',
      shuttleInfo:
        'Xcaret ofrece servicio de transporte directo desde el Aeropuerto de Cancun. Recomendamos reservar con anticipacion a traves de su sitio web.',
      routeMapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d238686.8105688908!2d-87.1557564028311!3d20.812257725807193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8f4e81bb49b57809%3A0xe7f7d44da1f07a06!2sCancun%20International%20Airport%2C%20Carr.%20a%20Aeropuerto%20Canc%C3%BAn%2C%2077500%20Canc%C3%BAn%2C%20Q.R.%2C%20Mexico!3m2!1d21.0419232!2d-86.8743844!4m5!1s0x8f4e446dadd87053%3A0x8042e81e921809a5!2sXcaret%20Park%2C%20Carretera%20Chetumal%2C%20Puerto%20Juarez%20km%20282-Int%20B%2C%20Colonia%20Rancho%20Xcaret%2C%20Ju%C3%A1rez%2C%2077580%20Playa%20del%20Carmen%2C%20Q.R.%2C%20Mexico!3m2!1d20.5809134!2d-87.119698!5e0!3m2!1sen!2sus!4v1772397158253!5m2!1sen!2sus',
    },
    {
      id: 'tqo',
      name: 'Aeropuerto Internacional de Tulum',
      code: 'TQO',
      distance: '45 km (28 millas)',
      driveTime: '45 minutos',
      rideshareEstimate: '$30-45 USD (Uber/Taxi)',
      shuttleInfo:
        'El nuevo Aeropuerto de Tulum esta mas cerca de Xcaret. Servicios de taxi y transporte estan disponibles en la terminal.',
      routeMapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d239451.85394509792!2d-87.55487310054282!3d20.323631648200966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8f4e2b7a20cafeb1%3A0x3442c47b0b54e8bf!2sAeropuerto%20Internacional%20de%20Tulum%20Felipe%20Carrillo%20Puerto%2C%209F7C%2B72%2C%2077796%20Macario%20G%C3%B3mez%2C%20Q.R.%2C%20Mexico!3m2!1d20.1661543!2d-87.6592156!4m5!1s0x8f4e446dadd87053%3A0x8042e81e921809a5!2sXcaret%20Park%2C%20Carretera%20Chetumal%2C%20Puerto%20Juarez%20km%20282-Int%20B%2C%20Colonia%20Rancho%20Xcaret%2C%20Ju%C3%A1rez%2C%2077580%20Playa%20del%20Carmen%2C%20Q.R.%2C%20Mexico!3m2!1d20.5809134!2d-87.119698!5e0!3m2!1sen!2sus!4v1772397242195!5m2!1sen!2sus',
    },
  ],
  socialPosts: [],
};
