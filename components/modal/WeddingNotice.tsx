'use client';

import { X, Heart, PartyPopper } from 'lucide-react';
import { useEffect } from 'react';

interface WeddingNoticeProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  type?: 'success' | 'info';
}

export default function WeddingNotice({
  isOpen,
  onClose,
  message = 'Cảm ơn bạn đã gửi xác nhận tham dự đám cưới của chúng mình!',
  type = 'success',
}: WeddingNoticeProps) {
  // Khóa cuộn trang khi popup mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* 1. Nhấn ra ngoài để tắt (Backdrop) */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* 2. Nội dung Popup */}
      <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-8 text-center shadow-2xl animate-in zoom-in duration-300">
        {/* Nút X để tắt */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Icon trang trí */}
        <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
          {type === 'success' ? (
            <PartyPopper size={40} className="text-rose-500" />
          ) : (
            <Heart size={40} className="text-rose-500 fill-rose-500" />
          )}
        </div>

        {/* Tiêu đề & Nội dung */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {type === 'success' ? 'Gửi thành công!' : 'Thông báo'}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8">{message}</p>

        {/* Nút xác nhận tắt */}
        {/* Nút xác nhận mới: Sang trọng và tình cảm hơn */}
        <button
          onClick={onClose}
          className="w-full py-4 bg-gradient-to-r from-rose-400 to-rose-500
               text-white rounded-2xl font-bold shadow-lg shadow-rose-200
               hover:from-rose-500 hover:to-rose-600
               hover:shadow-rose-300 transition-all duration-300
               active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Cảm ơn bạn rất nhiều</span>
          <Heart size={18} className="fill-white" />
        </button>
      </div>
    </div>
  );
}
