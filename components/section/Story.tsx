'use client';

import { motion } from 'framer-motion';
import { weddingStory } from '@/components/data/wedding';

export default function Story() {
  return (
    <section className="py-20 bg-[#fff7f0]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-great-vibes)] text-5xl text-pink-500"
        >
          Love Story
        </motion.h2>

        <div className="mt-16 space-y-12">
          {weddingStory.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <span className="text-pink-400 text-sm tracking-widest">
                {item.date}
              </span>

              <h3 className="text-2xl font-semibold mt-2">{item.title}</h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
