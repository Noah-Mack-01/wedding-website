export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: '1',
    src: '/images/gallery/photo-1.jpg',
    alt: 'Engagement photo 1',
    width: 800,
    height: 600,
  },
  {
    id: '2',
    src: '/images/gallery/photo-2.jpg',
    alt: 'Engagement photo 2',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    src: '/images/gallery/photo-3.jpg',
    alt: 'Engagement photo 3',
    width: 600,
    height: 800,
  },
  {
    id: '4',
    src: '/images/gallery/photo-4.jpg',
    alt: 'Engagement photo 4',
    width: 800,
    height: 600,
  },
  {
    id: '5',
    src: '/images/gallery/photo-5.jpg',
    alt: 'Engagement photo 5',
    width: 800,
    height: 600,
  },
  {
    id: '6',
    src: '/images/gallery/photo-6.jpg',
    alt: 'Engagement photo 6',
    width: 600,
    height: 800,
  },
];
