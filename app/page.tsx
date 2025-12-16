import Hero from '@/components/section/Hero';
import Story from '@/components/section/Story';
import Events from '@/components/section/Events';
import Countdown from '@/components/section/Countdown';
import Gifts from '@/components/section/Gifts';
import Wishes from '@/components/section/Wishes';
import Footer from '@/components/section/Footer';
import Location from '@/components/section/Location';
import Gallery from '@/components/Gallery';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <main>
      <MusicPlayer /> {/* Nhạc nền */}
      <Hero /> {/* Phần mở đầu + tên cô dâu chú rể + ngày cưới*/}
      <Story /> {/* Câu chuyện tình yêu*/}
      <Events /> {/* Lịch trình ngày cưới*/}
      <Gallery /> {/* Album ảnh cưới*/}
      <Countdown /> {/* Đếm ngược ngày cưới*/}
      <Location /> {/* Google Map + địa chỉ*/}
      <Wishes /> {/* Gửi lời chúc*/}
      <Gifts /> {/* Mừng cưới (QR / STK)*/}
      <Footer /> {/* Lời cảm ơn*/}
    </main>
  );
}
