'use client';

import { useState } from 'react';
import { Sparkles, Send, Heart } from 'lucide-react';
import { AI_CONFIG, UI_TEXT, WISH_PRESETS } from '@/components/data/wedding';

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAIWish = () => {
    if (!name) return;
    setLoading(true);

    setTimeout(() => {
      setMessage(
        `Chúc ${name} gửi đến hai bạn thật nhiều yêu thương, hạnh phúc viên mãn và một hành trình đầy ắp kỷ niệm đẹp 💖`,
      );
      setLoading(false);
    }, AI_CONFIG.fakeDelay);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#fff7f2] to-[#fafafa]">
      <h2 className="text-4xl font-serif text-center mb-12 text-[#6b4f4f]">
        {UI_TEXT.title}
      </h2>

      <div className="max-w-xl mx-auto bg-white/80 backdrop-blur rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 space-y-6">
        <input
          placeholder={UI_TEXT.namePlaceholder}
          className="w-full p-4 rounded-xl border border-[#f0dede]
          focus:ring-2 focus:ring-[#f3c6c6] outline-none bg-[#fffafa]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder={UI_TEXT.messagePlaceholder}
          className="w-full p-4 rounded-xl border border-[#f0dede]
          focus:ring-2 focus:ring-[#f3c6c6] outline-none bg-[#fffafa]"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Preset */}
        <div className="flex flex-wrap gap-2">
          {WISH_PRESETS.map((text, i) => (
            <button
              key={i}
              onClick={() => setMessage(text)}
              className="text-sm px-4 py-1.5 rounded-full
              bg-[#fceeee] text-[#8a5c5c]
              hover:bg-[#f8dcdc] transition"
            >
              {text}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={generateAIWish}
            className="flex items-center justify-center gap-2
            bg-gradient-to-r from-[#f8caca] to-[#f3b7b7]
            text-[#6b3f3f] py-3 rounded-xl hover:opacity-90 transition"
          >
            <Sparkles size={18} />
            {loading ? 'AI đang viết...' : UI_TEXT.aiButton}
          </button>

          <button
            className="flex items-center justify-center gap-2
            bg-[#fdf1f1] text-[#8a5c5c]
            py-3 rounded-xl hover:bg-[#f9dede] transition"
          >
            <Send size={18} />
            {UI_TEXT.sendButton}
          </button>
        </div>

        <p className="text-center text-sm text-[#b08c8c] flex items-center justify-center gap-1">
          <Heart size={14} />
          {UI_TEXT.footerNote}
        </p>
      </div>
    </section>
  );
}
