'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingEvents } from '@/components/data/wedding';

export default function Events() {
  const [active, setActive] = useState(0);
  const event = weddingEvents[active];

  return (
    <section className="py-28 bg-[#fff7f0]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
          <div className="text-center px-4">
              {/* Đồng bộ font, kích thước 5xl và màu sắc */}
              <h2 className="font-[var(--font-great-vibes)] text-5xl text-gray-700 leading-normal">
                  Wedding Day
              </h2>

              {/* Chỉnh lại độ mờ và font chữ cho phần hướng dẫn để trông tinh tế hơn */}
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed font-light italic">
                  Click vào sự kiện <span className="font-semibold text-gray-600">Nhà Gái – Nhà Trai</span> để xem chi tiết lịch trình
              </p>

              {/* Đường kẻ phân cách nhẹ nhàng để bố cục bớt bị "lệch" mắt */}
              <div className="w-12 h-px bg-gray-200 mx-auto mt-6"></div>
          </div>

        {/* Switch */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex rounded-full border overflow-hidden">
            {weddingEvents.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-8 py-2 transition text-sm font-medium
                  ${
                    active === i
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-700'
                  }`}
              >
                {e.side}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[750px]"
        >
          {/* LEFT IMAGE */}
          <div className="relative h-full min-h-[700px]">
            <Image
              src={event.image}
              alt="Wedding"
              fill
              className="w-full h-full object-cover"
            />

            {/* Overlay chữ */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center select-none">
              <p
                className="font-[var(--font-great-vibes)] text-4xl md:text-5xl text-white"
                style={{
                  textShadow: `
        0 2px 6px rgba(0,0,0,0.45),
        0 6px 18px rgba(0,0,0,0.35)
      `,
                }}
              >
                Save The Date
              </p>

              <div className="w-24 h-px bg-white/80 mx-auto my-3" />

              <p
                className="text-lg tracking-[0.35em] text-white"
                style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.45)',
                }}
              >
                20.12.2025
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-12 flex flex-col justify-center text-center">
            <p className="uppercase tracking-widest text-sm">
              Trân trọng kính mời
            </p>

            <p className="mt-2 text-red-500 font-semibold text-lg">Quý Khách</p>

            <p className="mt-6 leading-relaxed text-gray-700">
              Tới dự bữa Tiệc Thân Mật & Lễ Thành Hôn
              <br />
              chung vui cùng gia đình chúng tôi
            </p>

            <p className="mt-8 font-[var(--font-great-vibes)] text-4xl">
              Tiến Dũng
              <p className="my-4 text-xl">&</p>
              Thùy Linh
            </p>

            {/* EVENT 1 */}
            <div className="mt-6">
              <h3 className="text-red-600 font-bold text-lg">{event.title1}</h3>
              <p className="mt-2">Tổ chức vào lúc {event.time}</p>
              <p className="mt-1 font-semibold">{event.date}</p>
              <p className="text-sm italic">{event.lunar}</p>
              <p className="mt-2">Tại : {event.address}</p>
            </div>

            {/* EVENT 2 */}
            <div className="mt-10">
              <h3 className="text-red-600 font-bold text-lg">{event.title2}</h3>
              <p className="mt-2">Tổ chức vào lúc {event.time}</p>
              <p className="mt-1 font-semibold">{event.date}</p>
              <p className="text-sm italic">{event.lunar}</p>
              <p className="mt-2">Tại : {event.address}</p>
            </div>

            <p className="mt-10 italic text-gray-600">
              Sự hiện diện của quý khách là niềm vinh dự
              <br />
              cho gia đình chúng tôi !
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
