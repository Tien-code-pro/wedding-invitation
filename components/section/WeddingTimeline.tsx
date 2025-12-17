'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingTimeline } from '@/components/data/wedding';
import { FaHeart } from 'react-icons/fa';

export default function WeddingTimeline() {
  return (
    <section className="py-28 bg-[#fff7f0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* BACKGROUND IMAGE – PHỦ CẢ KHỐI */}
          <Image
            src="/image/gallery/love-story.webp"
            alt="Wedding background"
            fill
            priority
            className="object-cover brightness-95"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* TITLE – NẰM TRONG KHỐI */}
          <div className="relative z-10 pt-14 pb-6 text-center">
            <h2 className="font-[var(--font-great-vibes)] text-5xl text-white drop-shadow-lg">
              Wedding Timeline
            </h2>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 grid md:grid-cols-2 min-h-[720px]">
            {/* LEFT – TIMELINE */}
            {/* LEFT – TIMELINE */}
            <div className="relative z-10 flex items-center justify-center px-16">
              <div className="w-full max-w-md space-y-12 text-white">
                {weddingTimeline.map((item, index) => (
                  <div key={index} className="relative pl-14 text-left">
                    {/* DOT */}
                    <span className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-white shadow-md" />

                    {/* LINE */}
                    {index !== weddingTimeline.length - 1 && (
                      <span className="absolute left-[18px] top-6 h-full w-px bg-white/40" />
                    )}

                    {/* TIME */}
                    <p className="text-sm md:text-base tracking-widest opacity-90">
                      {item.time} · {item.date}
                    </p>

                    {/* TITLE */}
                    <h3 className="mt-2 text-2xl font-semibold leading-snug">
                      {item.title}
                    </h3>

                    {/* SIDE */}
                    <p className="mt-1 text-base italic opacity-90">
                      {item.side}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – VISUAL */}
            <div className="relative z-10 p-12 flex flex-col items-center justify-center gap-10">
              {/* CALENDAR */}
              <div className="w-72 rounded-2xl bg-white/95 shadow-2xl p-5 text-center">
                <p className="text-sm tracking-widest text-gray-500 uppercase">
                  December 2025
                </p>

                <div className="grid grid-cols-7 gap-2 mt-4 text-sm text-gray-600">
                  {Array.from({ length: 31 }).map((_, i) => {
                    const day = i + 1;
                    const isWeddingDay = day === 20;

                    return (
                      <div
                        key={day}
                        className={`relative flex items-center justify-center h-8 rounded-full
              ${
                isWeddingDay
                  ? 'bg-red-500 text-white font-semibold shadow-md'
                  : ''
              }`}
                      >
                        {day}

                        {isWeddingDay && (
                          <span className="absolute -top-3 text-red-500 text-lg">
                            ❤️
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image/event/event-nha-trai.webp"
                  alt="Wedding couple"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
