'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dancing-script',
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/image/gallery/banner.webp"
        alt="Wedding"
        fill
        priority
        className="object-cover"
      />

      {/* Content wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
      >
        {/* Overlay rectangle: rộng 3/4 màn hình desktop */}
        <div className="bg-black/50 w-[95vw] md:w-[75vw] py-24 md:py-32 px-6 md:px-16 text-center rounded-xl shadow-2xl">
          {/* Names on one line */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] leading-relaxed ${dancingScript.variable}`}
          >
            Tiến Dũng & Thùy Linh
          </motion.h1>

          {/* Quote below */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.3 }}
            className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto italic"
          >
            Ở thời điểm phù hợp nhất, mặc lên người bộ váy cưới đẹp nhất,
            <br />
            gả cho người đáng tin cậy nhất.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
