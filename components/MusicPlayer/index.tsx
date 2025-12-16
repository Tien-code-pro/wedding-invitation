'use client';

import { useEffect, useRef, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

export default function MusicPlayer() {
  // const audioRef = useRef<HTMLAudioElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audio = audioRef.current;

  // Enable audio after first user interaction
  useEffect(() => {
    const enableAndPlay = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = 0.3;
      audio.play();
      setIsPlaying(true);
      setIsReady(true);

      document.removeEventListener('click', enableAndPlay);
    };

    document.addEventListener('click', enableAndPlay);

    return () => {
      document.removeEventListener('click', enableAndPlay);
    };
  }, []);

  useEffect(() => {
    if (audio) {
      audio.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  }; // ✅ ĐÃ ĐÓNG HÀM Ở ĐÂY

  return (
    <>
      <audio
        ref={(el) => (audioRef.current = el)}
        src="/music/wedding.mp3"
        loop
      />

      {isReady && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-4 hover:scale-110 transition"
        >
          {isPlaying ? (
            <FaPause className="text-xl" />
          ) : (
            <FaMusic className="text-xl" />
          )}
        </button>
      )}
    </>
  );
}
