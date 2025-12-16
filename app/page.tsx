import Hero from '@/components/section/Hero';
import Story from '@/components/section/Story';
import Events from '@/components/section/Events';
import Gallery from "@/components/section/Gallery";
import Countdown from "@/components/section/Countdown";
import Gifts from "@/components/section/Gifts";
import Wishes from "@/components/section/Wishes";
import Footer from "@/components/section/Footer";
import Location from "@/components/section/Location";

export default function Home() {
  return (
    <main>
      <Hero />           {/* Phần mở đầu + tên cô dâu chú rể + ngày cưới*/}
      <Story />          {/* Câu chuyện tình yêu*/}
      <Events />         {/* Lịch trình ngày cưới*/}
      <Gallery />        {/* Album ảnh cưới*/}
      <Countdown />      {/* Đếm ngược ngày cưới*/}
      <Location />       {/* Google Map + địa chỉ*/}
      <Wishes />         {/* Gửi lời chúc*/}
      <Gifts />          {/* Mừng cưới (QR / STK)*/}
      <Footer />         {/* Lời cảm ơn*/}
    </main>
  );
}
