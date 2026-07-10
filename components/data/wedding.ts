import { Users, Heart, Camera, Utensils } from 'lucide-react';
import { AnnouncementSide } from '@/types/apiTypes';

// NGÀY CƯỚI - CHỈ CẦN ĐỔI Ở ĐÂY
export const WEDDING_DATE = '2027-12-25'; // format: YYYY-MM-DD
export const WEDDING_DATE_TIME = '20.12.2027';


// CÂU CHUYỆN TÌNH YÊU
export const weddingStory = [
  {
    title: 'GẶP GỠ VÀ DUYÊN PHẬN',
    date: 'The First Day',
    description:
      'Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng điệu, là sự hòa nhịp của hai trái tim, làm người ta nhìn thấy mọi vật tươi đẹp hơn. Khoảng cách giữa chúng ta nếu là một ngàn bước thì chỉ cần em đi bước đầu tiên, anh sẽ là người đi về phía em chín trăm chín chín bước còn lại.',
  },
  {
    title: 'NĂM THÁNG YÊU NHAU',
    date: 'The Love Day',
    description:
      'Hạnh phúc là khi gặp được người tuyệt nhất ở những giai đoạn đẹp nhất của tuổi thanh xuân và cùng nhìn nhau già đi, vì nhau mà cố gắng xây dựng một tương lai sung túc, tốt đẹp.',
  },
  {
    title: 'NGÀY MÌNH CHUNG ĐÔI',
    date: 'The Wedding Day',
    description:
      "Duyên phận là một điều vô cùng thú vị. Đến một lúc nào đó, tất cả những bối rối trong cuộc đời sẽ có câu trả lời. Đó sẽ là lúc mọi chuyện lại về đúng chỗ của nó. Những người sinh ra dành cho nhau, rồi sẽ nhìn thấy nhau và nắm lấy nhau trong cuộc đời này.'",
  },
];

// SỰ KIỆN NGÀY CƯỚI
export const weddingEvents = [
  {
    type: 'groom',
    side: 'TIỆC THÂN MẬT NHÀ TRAI',
    image: '/image/event/event-nha-trai.webp',
    title1: 'TIỆC THÂN MẬT NHÀ TRAI',
    title2: 'LỄ THÀNH HÔN',
    time: '15 giờ 30 phút',
    date: 'Thứ 7, ngày 25 tháng 12 năm 2027',
    lunar: '(Tức ngày 28 tháng 11 năm Đinh Mùi)',
    address: 'Xã Bình Mỹ, Huyện Bình Lục, Tỉnh Hà Nam',
  },
  {
    type: 'bride',
    side: 'TIỆC THÂN MẬT NHÀ GÁI',
    image: '/image/event/event-nha-gai.webp',
    title1: 'TIỆC THÂN MẬT NHÀ GÁI',
    title2: 'LỄ VU QUY',
    time: '15 giờ 30 phút',
    date: 'Thứ 7, ngày 25 tháng 12 năm 2027',
    lunar: '(Tức ngày 28 tháng 11 năm Đinh Mùi)',
    address: 'Ngõ 193, Phố Nam Dư, Phường Vĩnh Hưng, Hà Nội',
  },
];

// DÒNG THỜI GIAN NGÀY CƯỚI
export const weddingTimeline = [
  {
    time: '09:00',
    date: WEDDING_DATE_TIME,
    title: 'Đón khách',
    side: 'Nhà Trai',
    icon: Users,
  },
  {
    time: '09:30',
    date: WEDDING_DATE_TIME,
    title: 'Lễ Thành Hôn',
    side: 'Nhà Trai',
    icon: Heart,
  },
  {
    time: '10:00',
    date: '25.12.2027',
    title: 'Chụp ảnh kỷ niệm',
    side: 'Cô Dâu & Chú Rể',
    icon: Camera, // Đưa camera vào đúng mục chụp ảnh
  },
  {
    time: '10:30',
    date: WEDDING_DATE_TIME,
    title: 'Khai tiệc',
    side: 'Nhà Trai',
    icon: Utensils, // Dùng icon bộ đồ ăn cho khai tiệc
  },
];

// XÁC NHẬN THAM DỰ ĐÁM CƯỚI
export const weddingAttendingContent = {
  title: 'Wedding Attending',
  description:
    'Đám cưới sẽ trọn vẹn và ý nghĩa hơn khi có sự hiện diện và lời chúc phúc của bạn. Hãy xác nhận tham dự để chúng mình chuẩn bị đón tiếp bạn chu đáo nhất nhé ♥️',

  guestOfOptions: [
    'Bạn của cô dâu',
    'Bạn của chú rể',
    'Khách nhà trai',
    'Khách nhà gái',
  ],

  attendanceOptions: [
    {
      value: 'yes',
      label: 'Tôi sẽ tham dự',
    },
    {
      value: 'no',
      label: 'Xin lỗi, tôi bận mất rồi',
    },
  ],

  eventOptions: ['Tiệc nhà trai', 'Tiệc nhà gái', 'Lễ vu quy', 'Lễ thành hôn'],
};

// THÔNG TIN GIA ĐÌNH CÔ DÂU CHÚ RỂ
export const weddingFamilyData = {
  background: '/image/information/information1.webp',

  groom: {
    name: 'Minh Tiến',
    image: '/image/information/information2.webp',
    quote:
      'Đối với chúng mình, hôn nhân không phải là đích đến cuối của tình yêu mà là khởi đầu của hạnh phúc.',
    family: {
      title: 'Gia đình nhà trai',
      father: 'Lương Văn Tâng',
      mother: 'Nguyễn Thị Xuyến',
    },
  },

  bride: {
    name: 'Ngọc Linh',
    image: '/image/information/information3.webp',
    quote:
      'Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất, gả cho người đáng tin cậy nhất, là anh.',
    family: {
      title: 'Gia đình nhà gái',
      father: 'Nguyễn Thị Lan',
      mother: 'Trương Văn Ngọc',
    },
  },
};

// TẤT CẢ ẢNH ALBUM (20 ảnh)
export const weddingAlbumAllImages: string[] = [
  '/image/album/1.webp',
  '/image/album/2.webp',
  '/image/album/3.webp',
  '/image/album/4.webp',
  '/image/album/5.webp',
  '/image/album/6.webp',
  '/image/album/7.webp',
  '/image/album/8.webp',
  '/image/album/9.webp',
  '/image/album/10.webp',
];

// PREVIEW NGOÀI TRANG (10 ảnh)
export const weddingAlbumPreviewImages = weddingAlbumAllImages.slice(0, 10);

// Ảnh nền cho nút "Xem thêm"
export const weddingAlbumButtonBg = '/image/information/information1.webp';

// LỜI CHÚC ĐÁM CƯỚI
export const WISH_PRESETS = [
  'Chúc hai bạn mãi hạnh phúc bên nhau 💕',
  'Chúc gia đình nhỏ luôn ngập tràn yêu thương 🌸',
  'Chúc tình yêu nở hoa theo năm tháng 💍',
];

export const UI_TEXT = {
  title: '💌 Gửi lời chúc yêu thương',
  namePlaceholder: 'Tên của bạn',
  messagePlaceholder: 'Viết lời chúc chân thành tại đây...',
  aiButton: 'AI gợi ý lời chúc',
  sendButton: 'Gửi lời chúc',
  footerNote: 'Lời chúc của bạn sẽ được lưu lại như một kỷ niệm',
};

export const AI_CONFIG = {
  defaultTone: 'ngọt ngào',
  fakeDelay: 1200, // dùng cho mock UI
};

// MỪNG CƯỚI (QR / STK)
export const WEDDING_GIFTS_TEXT = {
  title: 'Gửi Lời Chúc Phúc',
  description: `Sự hiện diện của bạn là niềm hạnh phúc lớn nhất đối với chúng tôi.
Nếu bạn muốn gửi tặng một món quà nhỏ, chúng tôi xin chân thành cảm ơn.`,
  openHint: 'Bấm vào hộp quà',
  modalTitle: 'Mừng cưới đến hai nhà',
};

export const GIFT_RECEIVERS = [
  {
    id: 'groom',
    label: 'Chú rể',
    name: 'LƯƠNG MINH TIẾN',
    bank: 'Techcombank',
    accountNumber: '1903 6922 0560 19',
    qrImage: '/image/qr/qr-boy.jpeg',
  },
  {
    id: 'bride',
    label: 'Cô dâu',
    name: 'TRƯƠNG NGỌC LINH',
    bank: 'Techcombank',
    accountNumber: '1903 6922 0560 19',
    qrImage: '/image/qr/qr-boy.jpeg',
  },
];

// LỜI CẢM ƠN
export const FOOTER_CONTENT = {
  backgroundImage: '/image/information/information1.webp',
  backgroundAlt: 'Thank You Background',

  title: 'Thank You',

  message: `Chân thành cảm ơn gia đình, bạn bè và tất cả những ai đã
cùng tụi mình viết nên một ngày đáng nhớ. Sự hiện diện và
yêu thương của mọi người là món quà quý giá nhất.`,

  closing: 'Trân trọng kính mời & Hẹn gặp lại',

  hearts: {
    count: 15,
    minSize: 10,
    maxSize: 30,
    minDuration: 2,
    maxDuration: 5,
    maxDelay: 5,
  },
};

// DỮ LIỆU THÔNG BÁO MỜI DỰ ĐÁM CƯỚI
export const ANNOUNCEMENT_DATA: Record<'trai' | 'gai', AnnouncementSide> = {
  trai: {
    couple: {
      groom: 'MINH TIẾN',
      bride: 'NGỌC LINH',
    },
    inviteText: 'Trân Trọng Kính Mời',
    inviteTarget: 'Bạn và Người thương',
    locationTitle: 'Tư Gia',
    address: 'Xã Bình Mỹ, Huyện Bình Lục, Tỉnh Hà Nam',
    time: '09:30 - Chủ Nhật',
    date: {
      day: '25',
      month: '12',
      year: '2027',
      lunar: '(Tức ngày 28 tháng 11 năm Đinh Mùi)',
    },
    footerNote:
      'Sự hiện diện của quý khách\nlà niềm vinh hạnh cho gia đình chúng tôi',
  },

  gai: {
    couple: {
      groom: 'MINH TIẾN',
      bride: 'NGỌC LINH',
    },
    inviteText: 'Trân Trọng Kính Mời',
    inviteTarget: 'Bạn và Gia đình',
    locationTitle: 'Tư Gia',
    address: 'Ngõ 193, Phố Nam Dư, Phường Vĩnh Hưng, Hà Nội',
    time: '09:30 - Chủ Nhật',
    date: {
      day: '25',
      month: '12',
      year: '2027',
      lunar: '(Tức ngày 28 tháng 11 năm Đinh Mùi)',
    },
    footerNote:
      'Sự hiện diện của quý khách\nlà niềm vinh hạnh cho gia đình chúng tôi',
  },
};
