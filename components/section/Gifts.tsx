'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Gift } from 'lucide-react';
import {GIFT_RECEIVERS, WEDDING_GIFTS_TEXT} from "@/components/data/wedding";


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
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative bg-[#fffaf5] w-full max-w-3xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 z-10 p-2 bg-white/50 hover:bg-white rounded-full"
                        >
                            <X size={24} className="text-gray-500" />
                        </button>

                        <div className="p-8 md:p-12">
                            <h3 className="text-center font-[var(--font-great-vibes)] text-4xl text-gray-700 mb-10">
                                {WEDDING_GIFTS_TEXT.modalTitle}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {GIFT_RECEIVERS.map((receiver) => (
                                    <div
                                        key={receiver.id}
                                        className="flex flex-col items-center space-y-4"
                                    >
                                        <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100 w-full max-w-[240px]">
                                            <div className="relative aspect-square w-full">
                                                <Image
                                                    src={receiver.qrImage}
                                                    alt={`QR ${receiver.label}`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-rose-500 font-bold uppercase tracking-widest text-xs mb-1">
                                                {receiver.label}
                                            </p>
                                            <p className="text-gray-700 font-semibold">
                                                {receiver.name}
                                            </p>
                                            <p className="text-gray-400 text-sm">
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
