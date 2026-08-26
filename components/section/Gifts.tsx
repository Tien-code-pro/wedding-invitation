'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Gift } from 'lucide-react';
import { GIFT_RECEIVERS, WEDDING_GIFTS_TEXT } from '@/components/data/wedding';

export default function WeddingGifts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-white flex flex-col items-center">
      {/* 1. TIÊU ĐỀ & LỜI NGỎ */}
      <div className="text-center mb-10 px-6">
        <h2 className="font-[var(--font-great-vibes)] text-5xl text-gray-700 mb-4">
          {WEDDING_GIFTS_TEXT.title}
        </h2>

        <p className="text-gray-500 italic font-light max-w-md mx-auto leading-relaxed whitespace-pre-line">
          {WEDDING_GIFTS_TEXT.description}
        </p>
      </div>

      {/* 2. HỘP QUÀ */}
      <div
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer flex flex-col items-center"
      >
        <div className="absolute inset-0 bg-rose-100 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity" />

        <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
          <div className="bg-rose-50 p-10 rounded-full border-2 border-rose-100 shadow-inner">
            <Gift
              size={80}
              strokeWidth={1}
              className="text-rose-400 group-hover:animate-bounce"
            />
          </div>
        </div>

        <p className="mt-6 text-sm tracking-[0.3em] uppercase text-rose-500 font-semibold animate-pulse">
          {WEDDING_GIFTS_TEXT.openHint}
        </p>
      </div>

      {/* 3. MODAL */}
      {/* 3. MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* MODAL */}
          <div className="relative z-10 w-full max-w-3xl max-h-[92dvh] overflow-hidden rounded-[28px] sm:rounded-[40px] bg-[#fffaf5] shadow-2xl animate-in zoom-in-95 duration-300">
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Đóng"
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm transition hover:bg-white"
            >
              <X size={22} className="text-gray-500" />
            </button>

            {/* CONTENT */}
            <div className="max-h-[92dvh] overflow-y-auto overscroll-contain p-5 sm:p-8 md:p-12">
              <h3 className="pr-10 text-center font-[var(--font-great-vibes)] text-3xl sm:text-4xl text-gray-700 mb-7 sm:mb-10">
                {WEDDING_GIFTS_TEXT.modalTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {GIFT_RECEIVERS.map((receiver) => (
                  <div
                    key={receiver.id}
                    className="flex flex-col items-center space-y-3 sm:space-y-4"
                  >
                    {/* QR */}
                    <div className="w-full max-w-[190px] sm:max-w-[240px] rounded-3xl border border-gray-100 bg-white p-3 sm:p-4 shadow-lg">
                      <div className="relative aspect-square w-full">
                        <Image
                          src={receiver.qrImage}
                          alt={`QR ${receiver.label}`}
                          fill
                          sizes="(max-width: 640px) 190px, 240px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* INFO */}
                    <div className="text-center">
                      <p className="mb-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-widest text-rose-500">
                        {receiver.label}
                      </p>

                      <p className="text-sm sm:text-base font-semibold text-gray-700">
                        {receiver.name}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-400">
                        {receiver.bank} - {receiver.accountNumber}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
