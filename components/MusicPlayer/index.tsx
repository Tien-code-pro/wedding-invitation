'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa6';

export interface MusicPlayerRef {
  play: () => void;
  pause: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerRef, {}>(function MusicPlayer(
  _props: {},
  ref: React.ForwardedRef<MusicPlayerRef>,
) {
  const audioRef = useRef<HTMLAudioElement>(null!);
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play() {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
      setIsPlaying(true);
    },
    pause() {
      audioRef.current.pause();
      setIsPlaying(false);
    },
  }));

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/wedding.mp3" loop />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-4 hover:scale-110 transition"
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
});

export default MusicPlayer;
