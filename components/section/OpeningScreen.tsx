'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Props {
    onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: Props) {
    const [opened, setOpened] = useState(false);

    const handleClick = () => {
        if (opened) return;
        setOpened(true);

        // Đợi animation xong rồi vào trang
        setTimeout(() => {
            onOpen();
        }, 900);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] bg-[#f8f5f0] flex items-center justify-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center">
                    {/* PHONG BÌ */}
                    <motion.div
                        onClick={handleClick}
                        className="relative cursor-pointer w-[320px] h-[210px] md:w-[420px] md:h-[280px] group"
                        // Hiệu ứng lắc nhẹ khi hover
                        whileHover={!opened ? {
                            rotate: [0, -1, 1, -1, 1, 0],
                            x: [0, -2, 2, -2, 2, 0],
                        } : {}}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        animate={opened ? { scale: 1.05 } : { scale: 1 }}
                    >
                        {/* HALO */}
                        <div className="absolute inset-0 -z-10 bg-amber-100/40 blur-[120px] rounded-full group-hover:bg-amber-200/50 transition-colors" />

                        {/* THÂN PHONG BÌ */}
                        <div className="absolute inset-0 bg-[#faf7f2] border border-stone-200 rounded-lg shadow-xl" />

                        {/* NẮP PHONG BÌ */}
                        <motion.div
                            className="absolute inset-0 bg-[#f4ece0] border border-stone-300 origin-top z-20 shadow-sm"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 60%)' }}
                            animate={opened ? { rotateX: -165 } : { rotateX: 0 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                        >
                            {/* DẤU SÁP */}
                            <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white font-serif shadow-lg border border-yellow-200/20">
                                T
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* GỢI Ý */}
                    {!opened && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-16 text-sm tracking-[0.3em] text-[#8b0000]/60 uppercase animate-pulse font-medium"
                        >
                            Chạm để mở lời mời
                        </motion.p>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}