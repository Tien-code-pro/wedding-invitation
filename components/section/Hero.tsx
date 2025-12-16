'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl font-serif mb-4">Tú ❤️ Mai</h1>
      <p className="text-lg tracking-wide">20 · 10 · 2025</p>
    </motion.section>
  );
}
