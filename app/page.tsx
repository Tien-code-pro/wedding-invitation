'use client';

import Hero from '@/components/section/Hero';
import Story from '@/components/section/Story';
import Events from '@/components/section/Events';
import Countdown from '@/components/section/Countdown';
import Gifts from '@/components/section/Gifts';
import Wishes from '@/components/section/Wishes';
import Footer from '@/components/section/Footer';
import Gallery from '@/components/Gallery';
import MusicPlayer, { MusicPlayerRef } from '@/components/MusicPlayer';
import { useRef, useState } from 'react';
import OpeningScreen from '@/components/OpeningScreen';
import WeddingTimeline from '@/components/section/WeddingTimeline';
import WeddingAttending from '@/components/section/WeddingAttending';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const musicRef = useRef<MusicPlayerRef | null>(null);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      musicRef.current?.play(); // 🎵 BẬT NHẠC NGAY
    }, 300);
  };

  return (
    <main>
      {!opened && <OpeningScreen onOpen={handleOpen} />}
      {opened && (
        <>
          <MusicPlayer ref={musicRef} />
          {/*<HeartRain />*/}
          <Hero /> {/* Phần mở đầu + tên cô dâu chú rể + ngày cưới*/}
          <Events /> {/* Lịch trình ngày cưới*/}
          <WeddingTimeline /> {/* Timeline ngày cưới*/}
          <WeddingAttending /> {/* Xác nhận tham dự*/}
          <Countdown /> {/* Đếm ngược ngày cưới*/}
          <Story /> {/* Câu chuyện tình yêu*/}
          <Gallery /> {/* Album ảnh cưới*/}
          {/*<Location /> /!* Google Map + địa chỉ*!/*/}
          <Wishes /> {/* Gửi lời chúc*/}
          <Gifts /> {/* Mừng cưới (QR / STK)*/}
          <Footer /> {/* Lời cảm ơn*/}
        </>
      )}
    </main>
  );
}
