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
            <div className="relative z-10 flex items-center justify-center px-6 md:px-16 py-10">
              <div className="w-full max-w-lg space-y-12 text-white">
                {weddingTimeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="relative pl-20 text-left">

                      {/* ĐƯỜNG KẺ (LINE) - Màu Trắng/Độ mờ */}
                      {index !== weddingTimeline.length - 1 && (
                        <span
                            className="absolute left-[23px] top-12 h-[calc(100%+24px)] w-px bg-white/40"
                        />
                      )}

                      {/* ICON CONTAINER - Màu Trắng/Độ mờ */}
                      {/* Giữ viền và nền mờ để tạo hiệu ứng 3D nhẹ */}
                      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                        <IconComponent size={22} strokeWidth={1.5} className="text-white" />
                      </div>

                      {/* NỘI DUNG VĂN BẢN */}
                      <div className="flex flex-col">
                        {/* THỜI GIAN & NGÀY */}
                        <p className="text-xs md:text-sm tracking-[0.2em] font-medium uppercase opacity-90">
                          {item.time} — {item.date}
                        </p>

                        {/* TIÊU ĐỀ CHÍNH */}
                        <h3 className="mt-1 text-xl md:text-2xl font-semibold leading-tight tracking-wide">
                          {item.title}
                        </h3>

                        {/* PHỤ ĐỀ / VỊ TRÍ */}
                        <p className="mt-1 text-sm md:text-base italic opacity-70 font-light">
                          {item.side}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
