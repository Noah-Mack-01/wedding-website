import type { ScheduleEvent } from '../types';

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: '1',
    name: 'Ceremonia',
    date: '15 de septiembre de 2025',
    time: '4:00 PM',
    endTime: '4:30 PM',
    location: 'Jardin de The Grand Estate',
    description:
      'Acompananos mientras intercambiamos votos en el hermoso jardin.',
  },
  {
    id: '2',
    name: 'Hora del Coctel',
    date: '15 de septiembre de 2025',
    time: '4:30 PM',
    endTime: '5:30 PM',
    location: 'La Terraza',
    description:
      'Disfruta de bebidas y aperitivos mientras tomamos fotos.',
  },
  {
    id: '3',
    name: 'Recepcion',
    date: '15 de septiembre de 2025',
    time: '5:30 PM',
    endTime: '10:00 PM',
    location: 'El Gran Salon',
    description: 'Cena, baile y celebracion!',
  },
  {
    id: '4',
    name: 'Ultimo Baile',
    date: '15 de septiembre de 2025',
    time: '9:45 PM',
    location: 'El Gran Salon',
    description: 'Acompananos para el ultimo baile de la noche.',
  },
];
