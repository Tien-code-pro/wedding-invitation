'use client';

import { useState } from 'react';

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="py-20 bg-[#faf7f2] text-center">
      <h2 className="text-3xl font-semibold mb-8">Gửi lời chúc</h2>

      <div className="max-w-xl mx-auto space-y-4 px-6">
        <input
          placeholder="Tên của bạn"
          className="w-full p-3 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Lời chúc..."
          className="w-full p-3 border rounded-lg"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Gửi lời chúc
        </button>
      </div>
    </section>
  );
}
