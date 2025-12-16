'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          <button>
            <FaTimes />
          </button>
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          className="absolute left-6 text-white text-3xl"
        >
          <button>
            <FaChevronLeft />
          </button>
        </button>

        {/* Image */}
        <motion.img
          key={images[index]}
          src={images[index]}
          className="max-h-[80vh] rounded-xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        />

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-6 text-white text-3xl"
        >
          <button>
            <FaChevronRight />
          </button>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
