// Тост-уведомления для ачивок
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  emoji: string;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, emoji, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3500);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-toast-in">
      <div className="bg-[#0B3B5C] text-white px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-3 max-w-[90vw]">
        <span className="text-3xl animate-bounce">{emoji}</span>
        <div>
          <p className="text-xs text-[#FFD93D] font-bold uppercase tracking-wide">Ачивка!</p>
          <p className="text-base font-bold">{message}</p>
        </div>
      </div>
    </div>
  );
}
