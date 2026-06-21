'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Props {
  images: string[];
  alt: string;
}

type SlideDir = 'left' | 'right' | null;

export default function ImageCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState<SlideDir>(null);

  if (!images || images.length === 0) return null;

  const n = images.length;

  if (n === 1) {
    return (
      <div className="relative overflow-hidden" style={{ height: '550px' }}>
        <Image src={images[0]} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  const prevIdx = (index - 1 + n) % n;
  const nextIdx = (index + 1) % n;

  const navigate = (dir: 'prev' | 'next', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (sliding !== null) return;

    setSliding(dir === 'next' ? 'left' : 'right');
    setTimeout(() => {
      setIndex(dir === 'next' ? nextIdx : prevIdx);
      setSliding(null);
    }, 420);
  };

  const positions =
    sliding === 'left'
      ? { prev: '-170%', current: '-85%', next: '0%' }
      : sliding === 'right'
        ? { prev: '0%', current: '85%', next: '170%' }
        : { prev: '-85%', current: '0%', next: '85%' };

  const transition =
    sliding !== null
      ? 'transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      : 'none';

  const slot = (src: string, tx: string, dark: boolean) => (
    <div
      className="absolute inset-0"
      style={{ transform: `translateX(${tx})`, transition }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      {dark && <div className="absolute inset-0 bg-black/55" />}
    </div>
  );

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: '550px' }}
    >
      {/* z-order: current below, sides on top so they crop the edges */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
        {slot(images[index], positions.current, false)}
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 20 }}>
        {slot(images[prevIdx], positions.prev, true)}
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 20 }}>
        {slot(images[nextIdx], positions.next, true)}
      </div>

      {/* Prev button — sits in the left peek zone */}
      <button
        onClick={(e) => navigate('prev', e)}
        className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
        aria-label="Previous image"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next button — sits in the right peek zone */}
      <button
        onClick={(e) => navigate('next', e)}
        className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
        aria-label="Next image"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (sliding === null) setIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
