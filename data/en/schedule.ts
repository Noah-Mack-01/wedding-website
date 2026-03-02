import type { ScheduleEvent } from '../types';

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: '1',
    name: 'Ceremony',
    date: 'September 15, 2025',
    time: '4:00 PM',
    endTime: '4:30 PM',
    location: 'The Grand Estate Garden',
    description: 'Join us as we exchange vows in the beautiful garden setting.',
  },
  {
    id: '2',
    name: 'Cocktail Hour',
    date: 'September 15, 2025',
    time: '4:30 PM',
    endTime: '5:30 PM',
    location: 'The Terrace',
    description: "Enjoy drinks and hors d'oeuvres while we take photos.",
  },
  {
    id: '3',
    name: 'Reception',
    date: 'September 15, 2025',
    time: '5:30 PM',
    endTime: '10:00 PM',
    location: 'The Grand Ballroom',
    description: 'Dinner, dancing, and celebration!',
  },
  {
    id: '4',
    name: 'Last Dance',
    date: 'September 15, 2025',
    time: '9:45 PM',
    location: 'The Grand Ballroom',
    description: 'Join us for the final dance of the evening.',
  },
];
