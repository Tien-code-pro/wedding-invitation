'use client';

import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaClock } from 'react-icons/fa';
import {weddingEvents} from "@/components/data/wedding";

export default function Events() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-great-vibes)] text-5xl text-pink-500"
        >
          Thông tin lễ cưới
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {weddingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>

              <p className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                <FaClock className="text-pink-500" />
                {event.time}
              </p>

              <p className="text-gray-600 mb-6">{event.address}</p>

              <a
                href={event.mapUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                <FaMapMarkedAlt />
                Xem bản đồ
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
