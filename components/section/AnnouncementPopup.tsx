'use client';

import { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANNOUNCEMENT_DATA } from '@/components/data/wedding';

export default function AnnouncementPopup({
                                              onClose,
                                          }: {
    onClose: () => void;
}) {
    const [activeTab, setActiveTab] = useState<'trai' | 'gai'>('trai');
    const data = ANNOUNCEMENT_DATA[activeTab];

    const handleClose = () => {
        localStorage.setItem(
            'wedding_popup_seen',
            new Date().toDateString()
        );
        onClose();
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.85, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.85, opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-rose-100"
                >
                    {/* Close */}
                    <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-6 md:p-8">
                        {/* Tabs */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <button
                                onClick={() => setActiveTab('trai')}
                                className={`px-8 py-2 rounded-lg font-medium transition-all ${
                                    activeTab === 'trai'
                                        ? 'bg-rose-400 text-white'
                                        : 'border border-rose-400 text-rose-400'
                                }`}
                            >
                                Nhà Trai
                            </button>

                            <Heart size={22} className="text-rose-400 fill-rose-400" />

                            <button
                                onClick={() => setActiveTab('gai')}
                                className={`px-8 py-2 rounded-lg font-medium transition-all ${
                                    activeTab === 'gai'
                                        ? 'bg-rose-400 text-white'
                                        : 'border border-rose-400 text-rose-400'
                                }`}
                            >
                                Nhà Gái
                            </button>
                        </div>

                        {/* Content */}
                        <div className="border-2 border-rose-200 rounded-xl p-6 text-center space-y-4">
                            <div className="font-[var(--font-great-vibes)] text-4xl text-rose-500">
                                {data.couple.groom}
                                <Heart size={18} className="inline mx-2 fill-rose-400" />
                                {data.couple.bride}
                            </div>

                            <p className="text-gray-600 font-medium">
                                {data.inviteText}
                            </p>

                            <p className="text-gray-500 italic">
                                {data.inviteTarget}
                            </p>

                            <div className="py-2">
                                <p className="font-[var(--font-great-vibes)] text-4xl text-rose-800">
                                    {data.locationTitle}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {data.address}
                                </p>
                            </div>

                            <div className="border-t border-rose-100 pt-4">
                                <p className="text-xs text-gray-500 font-bold uppercase mb-2">
                                    Vào lúc {data.time}
                                </p>

                                <div className="flex justify-center gap-4 text-2xl font-serif font-bold">
                                    <span>{data.date.day}</span>
                                    <span>{data.date.month}</span>
                                    <span>{data.date.year}</span>
                                </div>

                                <p className="text-[10px] text-gray-400 italic mt-2">
                                    {data.date.lunar}
                                </p>
                            </div>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 whitespace-pre-line pt-4">
                                {data.footerNote}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
