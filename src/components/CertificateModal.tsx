// Модальное окно генерации сертификата
import { useRef, useEffect, useState } from 'react';
import { Creature } from '../data/creatures';

interface CertificateModalProps {
  visible: boolean;
  onClose: () => void;
  checkedCreatures: Creature[];
  total: number;
  childName: string;
  onNameChange: (name: string) => void;
}

export default function CertificateModal({
  visible,
  onClose,
  checkedCreatures,
  total,
  childName,
  onNameChange,
}: CertificateModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawn, setDrawn] = useState(false);

  const drawCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 800;
    const H = 600;
    canvas.width = W;
    canvas.height = H;

    // Фон — градиент океана
    const gradient = ctx.createLinearGradient(0, 0, 0, H);
    gradient.addColorStop(0, '#0FB3C4');
    gradient.addColorStop(1, '#0B3B5C');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);

    // Рамка
    ctx.strokeStyle = '#FFD93D';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.roundRect(20, 20, W - 40, H - 40, 30);
    ctx.stroke();

    // Пузырики на фоне
    for (let i = 0; i < 25; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * W,
        Math.random() * H,
        3 + Math.random() * 10,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fill();
    }

    // Заголовок
    ctx.fillStyle = '#FFD93D';
    ctx.font = 'bold 36px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏆 СЕРТИФИКАТ 🏆', W / 2, 80);

    ctx.fillStyle = '#FFF7E6';
    ctx.font = 'bold 20px Fredoka, sans-serif';
    ctx.fillText('Морской исследователь бухты Макади', W / 2, 120);

    // Имя
    ctx.fillStyle = '#FFD93D';
    ctx.font = 'bold 42px Fredoka, sans-serif';
    ctx.fillText(childName || 'Юный исследователь', W / 2, 200);

    // Прогресс
    ctx.fillStyle = '#FFF7E6';
    ctx.font = '18px Fredoka, sans-serif';
    ctx.fillText(`Нашёл ${checkedCreatures.length} из ${total} морских обитателей!`, W / 2, 260);

    // Найденные обитатели (до 5)
    const toShow = checkedCreatures.slice(0, 5);
    const startX = W / 2 - (toShow.length * 90) / 2;
    toShow.forEach((c, i) => {
      const x = startX + i * 90 + 45;
      ctx.font = '48px serif';
      ctx.fillText(c.emoji, x, 350);
      ctx.font = '11px Fredoka, sans-serif';
      ctx.fillStyle = '#FFF7E6';
      ctx.fillText(c.name, x, 380);
      ctx.fillStyle = '#FFF7E6';
    });

    // Дата
    ctx.fillStyle = '#FFF7E6';
    ctx.font = '14px Fredoka, sans-serif';
    const date = new Date().toLocaleDateString('ru-RU');
    ctx.fillText(`Дата: ${date}`, W / 2, H - 50);

    setDrawn(true);
  };

  useEffect(() => {
    if (visible) {
      // Небольшая задержка чтобы canvas успел отрендериться
      setTimeout(drawCertificate, 100);
    }
  }, [visible, childName, checkedCreatures, total]);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `сертификат-макади-${childName || 'исследователь'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const shareCertificate = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], 'certificate.png', { type: 'image/png' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'Мой сертификат — Макади',
            text: `Я нашёл ${checkedCreatures.length} морских обитателей в Макади! 🐠`,
          });
        } catch {
          downloadCertificate();
        }
      } else {
        downloadCertificate();
      }
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-[#FFF7E6] rounded-3xl p-4 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-[#0B3B5C] text-center mb-3">🎓 Сертификат</h2>

        {/* Ввод имени */}
        <div className="mb-3">
          <label className="text-sm font-bold text-[#0B3B5C]">Имя исследователя:</label>
          <input
            type="text"
            value={childName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Введи своё имя"
            className="w-full mt-1 px-4 py-2 rounded-2xl border-2 border-[#0FB3C4] text-[#0B3B5C] font-bold text-lg focus:outline-none focus:border-[#FFD93D]"
          />
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`w-full rounded-2xl shadow-md border-2 border-[#0FB3C4] ${!drawn ? 'opacity-0' : ''}`}
        />

        {/* Кнопки */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={downloadCertificate}
            className="flex-1 py-3 rounded-2xl bg-[#0FB3C4] text-white font-bold text-lg shadow-md active:scale-95"
          >
            📥 Скачать
          </button>
          <button
            onClick={shareCertificate}
            className="flex-1 py-3 rounded-2xl bg-[#FF6B6B] text-white font-bold text-lg shadow-md active:scale-95"
          >
            📤 Поделиться
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-2 py-2 rounded-2xl bg-gray-200 text-[#0B3B5C] font-bold active:scale-95"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
