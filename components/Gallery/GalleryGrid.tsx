'use client';

import { motion } from 'framer-motion';

interface Props {
  images: string[];
  onSelect: (index: number) => void;
}

export default function GalleryGrid({ images, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
      {images.map((src, index) => (
        <motion.div
          key={src}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden rounded-xl cursor-pointer"
          onClick={() => onSelect(index)}
        >
          <img
            src={src}
            alt="Wedding"
            className="w-full h-[220px] md:h-[260px] object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
