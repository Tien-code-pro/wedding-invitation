"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen relative flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-center text-white px-6"
            >
                <h2 className="text-xl tracking-widest uppercase">
                    We are getting married
                </h2>

                <h1 className="font-[var(--font-great-vibes)] text-5xl md:text-7xl my-6">
                    Minh & Lan
                </h1>

                <p className="text-lg tracking-wider">
                    20 • 03 • 2025
                </p>
            </motion.div>
        </section>
    );
}
