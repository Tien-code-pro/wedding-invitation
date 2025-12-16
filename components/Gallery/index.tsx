'use client';

import { useState } from 'react';
import { galleryImages } from './images';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex(
      (i) => (i! - 1 + galleryImages.length) % galleryImages.length,
    );

  const next = () => setActiveIndex((i) => (i! + 1) % galleryImages.length);

  return (
    <section id="gallery" className="py-20 text-center">
      <h2 className="text-3xl font-semibold mb-10">Khoảnh khắc yêu thương</h2>

      <GalleryGrid images={galleryImages} onSelect={setActiveIndex} />

      {activeIndex !== null && (
        <GalleryModal
          images={galleryImages}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
