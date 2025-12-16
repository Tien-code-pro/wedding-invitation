'use client';

import { motion } from 'framer-motion';

const HEART_COUNT = 450; // 🔥 tăng số lượng

export default function HeartRain() {
  return (
    <>
      {Array.from({ length: HEART_COUNT }).map((_, i) => {
        const size = Math.random() * 12 + 14; // size vừa
        const duration = Math.random() * 3 + 4; // ⏳ chậm hơn (4–7s)
        const delay = Math.random() * 1.5; // rơi lệch nhịp
        const sway = Math.random() * 80 - 40; // lắc trái phải

        return (
          <motion.div
            key={i}
            className="fixed text-pink-400 z-[200] pointer-events-none"
            style={{
              left: `${Math.random() * 100}vw`,
              fontSize: size,
            }}
            initial={{
              top: -60,
              opacity: 0,
            }}
            animate={{
              top: '110vh',
              opacity: [0, 1, 1, 0],
              x: [0, sway, -sway, 0], // 🌬 lắc nhẹ
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration,
              delay,
              ease: 'easeInOut',
            }}
          >
            💖
          </motion.div>
        );
      })}
    </>
  );
}
