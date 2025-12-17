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
    <section className="py-20 bg-[#faf7f2] text-center">
      <h2 className="text-3xl font-semibold mb-10">Đếm ngược ngày cưới</h2>

      <div className="flex justify-center gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="bg-white px-6 py-4 rounded-xl shadow">
            <p className="text-3xl font-bold">{value}</p>
            <span className="uppercase text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
