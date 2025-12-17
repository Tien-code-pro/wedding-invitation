'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingStory } from '@/components/data/wedding';

export default function LoveStoryHero() {
  const [first, second, third] = weddingStory;

  return (
      <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center">
        {/* Background */}
        <Image
            src="/image/gallery/love-story.webp"
            alt="Love story"
            fill
            priority
            className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content wrapper 2/3 màn */}
        <div className="relative z-10 w-full max-w-6xl px-6 py-24">
          {/* Title */}
          <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center font-[var(--font-great-vibes)] text-5xl md:text-6xl mb-20"
          >
            Love Story
          </motion.h2>

          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
            {/* Left */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center"
            >
              <h3 className="font-[var(--font-great-vibes)] text-5xl mb-6">
                {first.date}
              </h3>

              <h4 className="uppercase tracking-widest text-sm mb-6">
                {first.title}
              </h4>

              <p className="mx-auto text-sm md:text-base leading-relaxed text-white/90 max-w-md">
                {first.description}
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center"
            >
              <h3 className="font-[var(--font-great-vibes)] text-5xl mb-6">
                {second.date}
              </h3>

              <h4 className="uppercase tracking-widest text-sm mb-6">
                {second.title}
              </h4>

              <p className="mx-auto text-sm md:text-base leading-relaxed text-white/90 max-w-md">
                {second.description}
              </p>
            </motion.div>
          </div>

          {/* Bottom center */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-center mt-28"
          >
            <h3 className="font-[var(--font-great-vibes)] text-5xl mb-6">
              {third.date}
            </h3>

            <h4 className="uppercase tracking-widest text-sm mb-6">
              {third.title}
            </h4>

            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-white/90">
              {third.description}
            </p>
          </motion.div>
        </div>
      </section>
  );
}
