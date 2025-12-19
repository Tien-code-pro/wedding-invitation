'use client';

import { useEffect, useRef, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa6';

export default function MusicPlayer() {
  // Sửa lỗi Type bằng cách dùng null!
  const audioRef = useRef<HTMLAudioElement>(null!);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleAutoPlay = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.3;

        // Cố gắng phát nhạc
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log('Trình duyệt chặn tự phát hoặc lỗi:', error);
              // Nếu bị chặn, trạng thái vẫn là false để người dùng tự bấm
              setIsPlaying(false);
            });
        }
      }
    };

    // Lắng nghe sự kiện từ OpeningScreen
    window.addEventListener('playWeddingMusic', handleAutoPlay);

    return () => {
      window.removeEventListener('playWeddingMusic', handleAutoPlay);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  return (
    <>
      {/* Ref ở đây sẽ không còn báo lỗi đỏ nữa */}
      <audio ref={audioRef} src="/music/wedding.mp3" loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[110] bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-4 hover:scale-110 transition-all text-[#8b0000]"
      >
        {isPlaying ? (
          <FaPause className="animate-pulse text-xl" />
        ) : (
          <FaMusic className="animate-bounce text-xl" />
        )}
      </button>
    </>
  );
}
