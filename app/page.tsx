'use client';

import { useRef, useState } from 'react';
import Hero from '@/components/section/Hero';
import Story from '@/components/section/Story';
import Events from '@/components/section/Events';
import Countdown from '@/components/section/Countdown';
import Gifts from '@/components/section/Gifts';
import Footer from '@/components/section/Footer';
import MusicPlayer, { MusicPlayerRef } from '@/components/MusicPlayer';
import WeddingTimeline from '@/components/section/WeddingTimeline';
import WeddingAttending from '@/components/section/WeddingAttending';
import WeddingFamilySection from '@/components/section/WeddingFamilySection';
import WeddingAlbum from '@/components/section/WeddingAlbum';
import AnnouncementPopup from '@/components/section/AnnouncementPopup';
import OpeningScreen from "@/components/section/OpeningScreen";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const musicRef = useRef<MusicPlayerRef | null>(null);

  const handleOpen = () => {
    setOpened(true);

    // bật nhạc
    setTimeout(() => {
      musicRef.current?.play();
    }, 300);

    // xử lý popup tại đây
    const seen = localStorage.getItem('wedding_popup_seen');
    // const today = new Date().toDateString();
    const now = Date.now();
    const SIXTY_MINUTES = 60 * 60 * 1000;

    if (!seen || now - Number(seen) > SIXTY_MINUTES) {
      setTimeout(() => {
        setShowAnnouncement(true);
      }, 1500);
    }
  };

  return (
    <main>
      {!opened && <OpeningScreen onOpen={handleOpen} />}

      {opened && (
        <>
          {showAnnouncement && (
            <AnnouncementPopup onClose={() => setShowAnnouncement(false)} />
          )}

          <MusicPlayer ref={musicRef} />
          <Hero />
          <Events />
          <WeddingTimeline />
          <WeddingAttending />
          <Countdown />
          <WeddingFamilySection />
          <WeddingAlbum />
          <Story />
          <Gifts />
          <Footer />
        </>
      )}
    </main>
  );
}
