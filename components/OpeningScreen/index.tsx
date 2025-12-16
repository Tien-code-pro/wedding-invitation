'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import HeartRain from '@/components/section/HeartRain';

interface Props {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: Props) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    onOpen();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 w-screen min-h-screen h-[100dvh] z-[100] bg-[#f8f5f0] flex items-center justify-center"
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.15 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        {/* Nội dung chính */}
        <div className="text-center px-6">
          <motion.span
            className="text-lg font-great-vibes text-[#8b0000] tracking-wide block mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
              delay: 0.1,
            }}
          >
            Trân trọng kính mời
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              className="font-great-vibes text-5xl md:text-6xl leading-relaxed text-center pb-4"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.35 }}
            >
              <span className="block">Bạn đến dự</span>
              <span className="block text-[#8b0000]">
                lễ cưới của chúng tôi
              </span>
            </motion.h1>
          </div>

          {/* Nút mở thiệp */}
          <motion.div
            className="relative flex items-center justify-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {/* Halo ánh sáng phía sau */}
            <div className="halo" />

            {/* Nút mở thiệp */}
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 md:px-16 md:py-5 rounded-full bg-gradient-to-r from-[#ffecd2] via-[#fcb69f] to-[#ffecd2] text-[#5b2c2c] text-lg md:text-xl uppercase tracking-widest font-bold shadow-[0_12px_30px_rgba(252,182,159,0.35)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(252,182,159,0.45)]"
            >
              {/* Outer border */}
              <span className="pointer-events-none absolute inset-0 rounded-full border border-[#fcb69f] opacity-70 group-hover:opacity-100 transition" />

              {/* Shimmer effect */}
              <span className="pointer-events-none absolute top-0 left-[-160%] h-full w-[160%] bg-gradient-to-r from-transparent via-white/70 to-transparent rotate-12 group-hover:left-[160%] transition-all duration-[1200ms]" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 md:gap-4 open-card-btn">
                <span className="text-xl md:text-2xl hand-hover">💌</span>
                MỞ THIỆP
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* ❤️ Trái tim rơi */}
      {/*{opened && <HeartRain />}*/}
    </AnimatePresence>
  );
}
