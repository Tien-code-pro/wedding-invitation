import { Users, Heart, Camera, Utensils } from 'lucide-react';
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

export const weddingEvents = [
  {
    type: 'groom',
    side: 'TIỆC THÂN MẬT NHÀ TRAI',
    image: '/image/event/event-nha-trai.webp',
    title1: 'TIỆC THÂN MẬT NHÀ TRAI',
    title2: 'LỄ THÀNH HÔN',
    time: '15 giờ 30 phút',
    date: 'Thứ 7, ngày 20 tháng 12 năm 2025',
    lunar: '(Tức ngày 05 tháng 08 năm Giáp Thìn)',
    address: 'Thôn Thủ Độ, An Tường, Vĩnh Tường, Vĩnh Phúc',
  },
  {
    type: 'bride',
    side: 'TIỆC THÂN MẬT NHÀ GÁI',
    image: '/image/event/event-nha-gai.webp',
    title1: 'TIỆC THÂN MẬT NHÀ GÁI',
    title2: 'LỄ VU QUY',
    time: '15 giờ 30 phút',
    date: 'Thứ 7, ngày 20 tháng 12 năm 2025',
    lunar: '(Tức ngày 05 tháng 08 năm Giáp Thìn)',
    address: 'Thôn Thủ Độ, An Tường, Vĩnh Tường, Vĩnh Phúc',
  },
];

export const weddingTimeline = [
  {
    time: '09:00',
    date: '20.12.2025',
    title: 'Đón khách',
    side: 'Nhà Trai',
    icon: Users,
  },
  {
    time: '09:30',
    date: '20.12.2025',
    title: 'Lễ Thành Hôn',
    side: 'Nhà Trai',
    icon: Heart,
  },
  {
    time: '10:00',
    date: '20.12.2025',
    title: 'Chụp ảnh kỷ niệm',
    side: 'Cô Dâu & Chú Rể',
    icon: Camera, // Đưa camera vào đúng mục chụp ảnh
  },
  {
    time: '10:30',
    date: '20.12.2025',
    title: 'Khai tiệc',
    side: 'Nhà Trai',
    icon: Utensils, // Dùng icon bộ đồ ăn cho khai tiệc
  },
];

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

export const weddingFamilyData = {
  background: '/image/information/information1.webp',

  groom: {
    name: 'Tiến Dũng',
    image: '/image/information/information2.webp',
    quote:
      'Đối với chúng mình, hôn nhân không phải là đích đến cuối của tình yêu mà là khởi đầu của hạnh phúc.',
    family: {
      title: 'Gia đình nhà trai',
      father: 'Nguyễn Văn A',
      mother: 'Trần Thị B',
    },
  },

  bride: {
    name: 'Thùy Linh',
    image: '/image/information/information3.webp',
    quote:
      'Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất, gả cho người đáng tin cậy nhất, là anh.',
    family: {
      title: 'Gia đình nhà gái',
      father: 'Lê Văn C',
      mother: 'Phạm Thị D',
    },
  },
};
