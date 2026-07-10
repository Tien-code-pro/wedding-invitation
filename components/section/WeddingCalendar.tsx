'use client';

export default function WeddingCalendar({ weddingDate }) {
  const date = new Date(weddingDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const weddingDay = date.getDate();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const firstDayOffset = (firstDayOfWeek + 6) % 7;

  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  return (
    <div className="w-72 rounded-2xl bg-white/95 shadow-2xl p-5 text-center">
      <p className="text-sm tracking-widest text-gray-500 uppercase">
        {monthNames[month]} {year}
      </p>

      <div className="grid grid-cols-7 gap-2 mt-4 text-xs font-medium text-gray-400">
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2 text-sm text-gray-600">
        {Array.from({ length: firstDayOffset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isWeddingDay = day === weddingDay;

          return (
            <div
              key={day}
              className={`relative flex items-center justify-center h-8 rounded-full
                ${isWeddingDay ? 'bg-red-500 text-white font-semibold shadow-md' : ''}`}
            >
              {day}
              {isWeddingDay && (
                <span className="absolute -top-3 text-red-500 text-lg">❤️</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
