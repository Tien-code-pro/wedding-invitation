'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import {
    weddingAlbumAllImages,
    weddingAlbumPreviewImages,
    weddingAlbumButtonBg,
} from '@/components/data/wedding';

export default function WeddingAlbum() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () =>
        setActiveIndex((prev) =>
            (prev + 1) % weddingAlbumAllImages.length
        );

    const prevImage = () =>
        setActiveIndex((prev) =>
            (prev - 1 + weddingAlbumAllImages.length) %
            weddingAlbumAllImages.length
        );

    return (
        <section className="py-24 bg-[#fffaf5] flex flex-col items-center">
            {/* ===== TITLE ===== */}
            <div className="text-center mb-12">
                <h2 className="font-[var(--font-great-vibes)] text-6xl text-gray-700">
                    Wedding Moments
                </h2>

                <div className="flex items-center justify-center gap-4 mt-3">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-rose-200" />
                    <Heart
                        size={18}
                        className="text-rose-500 fill-rose-400 animate-pulse"
                    />
                    <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-rose-200" />
                </div>
            </div>

            {/* ===== PREVIEW GRID ===== */}
            <div className="max-w-7xl w-full px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {weddingAlbumPreviewImages.map((src, index) => (
                    <div
                        key={src}
                        onClick={() => {
                            setIsOpen(true);
                            setActiveIndex(index);
                        }}
                        className="relative aspect-[3/4] overflow-hidden rounded-lg
              cursor-zoom-in group transition-all duration-500
              hover:-translate-y-1 hover:shadow-xl"
                    >
                        <Image
                            src={src}
                            alt={`Wedding moment ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700
                group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t
              from-black/30 via-black/10 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>

            {/* ===== VIEW MORE BUTTON ===== */}
            <div className="mt-16">
                <button
                    onClick={() => {
                        setIsOpen(true);
                        setActiveIndex(0);
                    }}
                    className="relative px-14 py-4 rounded-xl overflow-hidden
            shadow-xl text-white tracking-[0.2em] uppercase
            active:scale-95 group"
                >
                    <div className="absolute inset-0">
                        <Image
                            src={weddingAlbumButtonBg}
                            alt="Button bg"
                            fill
                            className="object-cover brightness-[0.45]
                group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="absolute inset-0 bg-zinc-900/60
            translate-y-full group-hover:translate-y-0
            transition-transform duration-500" />
                    <span className="relative z-10">Xem thêm album</span>
                </button>
            </div>

            {/* ===== POPUP ALBUM ===== */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    {/* BACKDROP */}
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* CONTENT */}
                    <div
                        className="relative z-10 w-full h-full flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* CLOSE */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white/60 hover:text-white z-20"
                        >
                            <X size={40} />
                        </button>

                        {/* MAIN IMAGE */}
                        <div className="relative w-full flex-1 flex items-center justify-center px-6">
                            <button
                                onClick={prevImage}
                                className="absolute left-6 text-white/70 hover:text-white z-10"
                            >
                                <ChevronLeft size={56} />
                            </button>

                            <div className="relative w-full max-w-6xl h-[80vh]">
                                <Image
                                    src={weddingAlbumAllImages[activeIndex]}
                                    alt="Wedding full"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <button
                                onClick={nextImage}
                                className="absolute right-6 text-white/70 hover:text-white z-10"
                            >
                                <ChevronRight size={56} />
                            </button>
                        </div>

                        {/* THUMBNAILS */}
                        <div className="w-full py-6 px-6 overflow-x-auto">
                            <div className="flex gap-4 justify-center">
                                {weddingAlbumAllImages.map((src, index) => (
                                    <button
                                        key={src}
                                        onClick={() => setActiveIndex(index)}
                                        className={`relative w-24 h-32 shrink-0 overflow-hidden transition-all
              ${
                                            index === activeIndex
                                                ? 'ring-2 ring-rose-400 scale-105'
                                                : 'opacity-60 hover:opacity-100'
                                        }`}
                                    >
                                        <Image src={src} alt="thumb" fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
}
