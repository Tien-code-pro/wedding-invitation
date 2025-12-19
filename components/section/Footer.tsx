'use client';

import Image from 'next/image';
import { FOOTER_CONTENT } from '@/components/data/wedding';

export default function Footer() {
  const { backgroundImage, backgroundAlt, title, message, closing, hearts } =
    FOOTER_CONTENT;

  return (
    <footer className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ================= HEART EFFECT ================= */}
      {/*<div className="absolute inset-0 z-10 pointer-events-none">*/}
      {/*  {[...Array(hearts.count)].map((_, i) => {*/}
      {/*    const size =*/}
      {/*      Math.random() * (hearts.maxSize - hearts.minSize) + hearts.minSize;*/}

      {/*    const duration =*/}
      {/*      Math.random() * (hearts.maxDuration - hearts.minDuration) +*/}
      {/*      hearts.minDuration;*/}

      {/*    return (*/}
      {/*      <span*/}
      {/*        key={i}*/}
      {/*        className="absolute text-rose-400/70 animate-pulse"*/}
      {/*        style={{*/}
      {/*          top: `${Math.random() * 100}%`,*/}
      {/*          left: `${Math.random() * 100}%`,*/}
      {/*          fontSize: `${size}px`,*/}
      {/*          transform: `rotate(${Math.random() * 360}deg)`,*/}
      {/*          animationDelay: `${Math.random() * hearts.maxDelay}s`,*/}
      {/*          animationDuration: `${duration}s`,*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        ❤*/}
      {/*      </span>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        {/* Title */}
        <h2
          className="
            font-[var(--font-great-vibes)]
            text-7xl md:text-8xl
            text-white
            mb-6
            drop-shadow-lg
          "
        >
          {title}
        </h2>

        {/* Message */}
        <p
          className="
            font-[var(--font-great-vibes)]
            text-white/95
            text-lg md:text-xl
            mx-auto
            leading-relaxed
            drop-shadow-md
            whitespace-pre-line
          "
        >
          {message}
        </p>

        {/* Closing */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <p
            className="
              font-[var(--font-great-vibes)]
              text-white/80
              tracking-[0.3em]
              uppercase
              text-sm
            "
          >
            {closing}
          </p>
        </div>
      </div>
    </footer>
  );
}
