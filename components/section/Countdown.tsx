'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react'; // Import icon để làm nút đóng

const WEDDING_DATE = new Date('2026-12-20T10:00:00');
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = WEDDING_DATE.getTime() - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  // Danh sách ảnh (string path)
  const images = [
    '/image/gallery/photo1.webp',
    '/image/gallery/photo2.webp',
    '/image/gallery/photo3.webp',
  ];

  return (
    <section className="py-24 bg-[#fffaf5] text-center">
      {/* Tiêu đề dùng font Serif để tạo cảm giác sang trọng */}
      <h2 className="font-[var(--font-great-vibes)] text-5xl text-gray-700 mb-12 leading-normal">
        Wedding Countdown
      </h2>

      <div className="flex justify-center gap-4 md:gap-8 px-4">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            {/* Box số: Bo góc nhẹ hơn, đổ bóng cực mịn, viền mờ */}
            <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#f3e9df] flex items-center justify-center mb-4">
              <p className="font-serif text-3xl md:text-5xl text-[#333] tabular-nums">
                {String(value).padStart(2, '0')}
              </p>
            </div>

            {/* Label: Chữ nhỏ, giãn cách rộng ra (tracking-widest) */}
            <span className="uppercase text-[10px] md:text-xs tracking-[0.2em] text-[#999] font-light">
              {label}
            </span>
          </div>
        ))}
      </div>
      {/* Trang trí thêm một câu quote nhỏ phía dưới */}
      <p className="mt-12 font-serif italic text-[#999] text-sm">
        "Love is the greatest adventure"
      </p>

      {/* Container bao ngoài */}
      <div className="relative w-full max-w-4xl mx-auto px-4 mb-20 mt-20">
        {/* Khu vực Gallery: 3 ảnh chồng lớp */}
        <div className="relative h-[450px] md:h-[550px] w-full flex justify-center items-end">
          {/* 2 ẢNH PHÍA SAU */}
          <div
            className="absolute top-0 left-[5%] w-[40%] aspect-[3/4] z-0 transition-all duration-500 ease-in-out hover:z-20 hover:scale-110 group"
            onClick={() => setSelectedImg(images[1])}
          >
            <div className="relative w-full h-full border-[6px] border-white shadow-md rounded-sm overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <Image
                src={images[1]}
                alt="Wedding Photo 2"
                fill
                className="object-cover cursor-pointer"
              />
            </div>
          </div>

          <div
            className="absolute top-0 right-[5%] w-[40%] aspect-[3/4] z-0 transition-all duration-500 ease-in-out hover:z-20 hover:scale-110 group"
            onClick={() => setSelectedImg(images[2])}
          >
            <div className="relative w-full h-full border-[6px] border-white shadow-md rounded-sm overflow-hidden transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <Image
                src={images[2]}
                alt="Wedding Photo 3"
                fill
                className="object-cover cursor-pointer"
              />
            </div>
          </div>

          {/* ẢNH CHÍNH GIỮA: Lùi sâu xuống chân */}
          <div
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[45%] aspect-[3/4] z-10 transition-all duration-500 ease-in-out hover:z-20 hover:scale-110 hover:bottom-0"
            onClick={() => setSelectedImg(images[0])}
          >
            <div className="relative w-full h-full border-[8px] border-white shadow-2xl rounded-sm overflow-hidden">
              <Image
                src={images[0]}
                alt="Wedding Photo 1"
                fill
                className="object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Chữ ký nghệ thuật */}
        <div className="mt-20 flex flex-col items-end pr-4 md:pr-12">
          <div className="text-right">
            <p className="font-serif italic text-xl md:text-3xl text-gray-400 opacity-80 leading-none">
              Happy Wedding
            </p>
            <h3
              className="text-3xl md:text-5xl text-gray-800 mt-2"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Tiến Dũng & Thùy Linh
            </h3>
          </div>
        </div>
      </div>
      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)} // Click ra ngoài để đóng
        >
          {/* Nút đóng */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          {/* Container chứa ảnh phóng to */}
          <div className="relative w-[90vw] h-[80vh] md:w-[70vw] md:h-[90vh] animate-in zoom-in-95 duration-300">
            <Image
              src={selectedImg}
              alt="Full view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
