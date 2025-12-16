'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background image */}
            <Image
                src="https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/users/1927/3a638fbf-5f9e-49f0-b30e-a4ca7833291e-full.webp"
                alt="Wedding"
                fill
                priority
                className="object-cover"
            />

            {/* Content wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="relative z-10 flex items-center justify-center min-h-screen px-4"
            >
                {/* Overlay rectangle 2/3 màn */}
                <div className="bg-black/85 w-[90vw] md:w-[66vw] py-24 px-12 md:px-16 text-center rounded-xl shadow-2xl">
                    {/* Names */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1.2 }}
                        className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-wide drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                    >
                        Tiến Dũng <span className="mx-4">&</span> Thùy Linh
                    </motion.h1>

                    {/* Divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 160 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="h-px bg-white/80 mx-auto mb-6"
                    />

                    {/* Quote */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 1.3 }}
                        className="text-white text-base md:text-lg lg:text-xl leading-relaxed italic max-w-3xl mx-auto"
                    >
                        Ở thời điểm phù hợp nhất, mặc lên người bộ váy cưới đẹp nhất,
                        <br />
                        gả cho người đáng tin cậy nhất.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
