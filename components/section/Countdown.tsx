'use client';

import { useEffect, useState } from 'react';

const WEDDING_DATE = new Date('2026-12-20T10:00:00');
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

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

  return (
      <section className="py-24 bg-[#fffaf5] text-center">
        {/* Tiêu đề dùng font Serif để tạo cảm giác sang trọng */}
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-12 tracking-wide">
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
      </section>
  );
}
