'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import PhotoGrid from '@/components/PhotoGrid';
import Lightbox from '@/components/Lightbox';
import { galleryPhotos } from '@/data/gallery';

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Gallery"
        subtitle="Moments from our journey together"
      />

      <PhotoGrid photos={galleryPhotos} onPhotoClick={openLightbox} />

      <Lightbox
        photos={galleryPhotos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </div>
  );
}
