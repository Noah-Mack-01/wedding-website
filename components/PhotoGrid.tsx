'use client';

import Image from 'next/image';
import type { GalleryPhoto } from '@/data/gallery';

interface PhotoGridProps {
  photos: GalleryPhoto[];
  onPhotoClick: (index: number) => void;
}

export default function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => (
        <button
          key={photo.id}
          onClick={() => onPhotoClick(index)}
          className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        </button>
      ))}
    </div>
  );
}
