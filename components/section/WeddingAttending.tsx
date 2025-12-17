'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { weddingAttendingContent } from '@/components/data/wedding';

export default function WeddingAttending() {
  const {
    title,
    description,
    guestOfOptions,
    attendanceOptions,
    eventOptions,
  } = weddingAttendingContent;

  const [loading, setLoading] = useState(false);
  const [attending, setAttending] = useState<string>('Tôi sẽ tham dự'); // mặc định chọn
  const [people, setPeople] = useState<number>(1); // mặc định 1
  const [peopleDisabled, setPeopleDisabled] = useState<boolean>(false);

  // Cập nhật people khi user chọn attending
  function handleAttendingChange(value: string) {
    setAttending(value);
    if (value === 'Tôi sẽ tham dự') {
      setPeopleDisabled(false); // mở input
      if (people === 0) setPeople(1); // nếu trước đó là 0 thì reset về 1
    } else if (value === 'Không tham dự') {
      setPeople(0); // tự động 0
      setPeopleDisabled(true); // khóa input
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      guestOf: formData.get('guestOf'),
      people, // lấy từ state
      attending,
      events: formData.getAll('events'),
      note: formData.get('note'),
    };

    await fetch(
      'https://script.google.com/macros/s/AKfycbyj2ec4OG9Oaas4xWIPcwFLgKc9rBR48ZInUWywiqHUZjfCA462AJCnrJ13OxmhokLw/exec',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    );

    setLoading(false);
    form.reset();
    setAttending('Tôi sẽ tham dự');
    setPeople(1);
    setPeopleDisabled(false);
    alert('💌 Cảm ơn bạn đã xác nhận tham dự!');
  }

  return (
    <section className="py-28 bg-[#fff7f0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-great-vibes)] text-5xl text-gray-700">
            {title}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* FORM */}
          <div className="p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Họ và tên"
                required
                className="w-full border px-4 py-2 rounded-lg"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border px-4 py-2 rounded-lg"
              />

              <select
                name="guestOf"
                className="w-full border px-4 py-2 rounded-lg"
              >
                {guestOfOptions.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>

              {/* Input số người có thể chỉnh */}
              <input
                name="people"
                type="number"
                min={0}
                placeholder="Số người tham dự"
                className="w-full border px-4 py-2 rounded-lg bg-white"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                disabled={peopleDisabled}
              />

              <div className="flex gap-6">
                {attendanceOptions.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="attending"
                      value={opt.label}
                      checked={attending === opt.label}
                      onChange={() => handleAttendingChange(opt.label)}
                      required
                    />
                    {opt.label}
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {eventOptions.map((event, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="checkbox" name="events" value={event} />
                    {event}
                  </label>
                ))}
              </div>

              <button
                disabled={loading}
                className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                {loading ? 'Đang gửi...' : 'Gửi xác nhận'}
              </button>
            </form>
          </div>

          {/* IMAGE */}
          <div className="relative min-h-[600px]">
            <Image
              src="/image/attending/attending.webp"
              alt="Wedding"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
