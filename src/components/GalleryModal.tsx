// Модальное окно галереи с поддержкой свайпа
import { useState, useRef, useEffect } from 'react';
import { Creature } from '../data/creatures';

interface GalleryModalProps {
  creature: Creature | null;
  onClose: () => void;
  onMarkSeen: () => void;
  isChecked: boolean;
}

export default function GalleryModal({ creature, onClose, onMarkSeen, isChecked }: GalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Минимальное расстояние для свайпа
  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [creature]);

  if (!creature) return null;

  const images = creature.images;

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Обработчики свайпа
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex flex-col"
      onClick={onClose}
    >
      {/* Заголовок */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{creature.emoji}</span>
          <h2 className="text-white font-bold text-lg">{creature.name}</h2>
          {creature.rare && (
            <span className="bg-[#FFD93D] text-[#0B3B5C] text-xs font-bold px-2 py-0.5 rounded-full">
              💎 Редкий
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-xl active:scale-95"
        >
          ✕
        </button>
      </div>

      {/* Галерея */}
      <div 
        ref={containerRef}
        className="flex-1 flex items-center justify-center relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка назад */}
        {images.length > 1 && (
          <button
            onClick={goToPrev}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center text-2xl active:scale-95 hover:bg-white/30"
          >
            ‹
          </button>
        )}

        {/* Изображение */}
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${creature.name} - фото ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-pop-in"
          />
        </div>

        {/* Кнопка вперёд */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center text-2xl active:scale-95 hover:bg-white/30"
          >
            ›
          </button>
        )}

        {/* Индикаторы */}
        {images.length > 1 && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentImageIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Подсказка свайпа */}
        {images.length > 1 && (
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white/60 text-sm font-bold">
            ← Свайпни для переключения →
          </div>
        )}
      </div>

      {/* Нижняя панель */}
      <div className="p-4 bg-gradient-to-t from-black/80 to-transparent">
        {/* Факт */}
        <p className="text-white/90 text-center text-sm mb-3 font-medium">
          💡 {creature.fact}
        </p>

        {/* Кнопка отметки */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMarkSeen();
            if (!isChecked) {
              setTimeout(onClose, 500);
            }
          }}
          className={`
            w-full py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all
            ${isChecked 
              ? 'bg-green-500 text-white' 
              : 'bg-[#FFD93D] text-[#0B3B5C] hover:bg-[#FFE066]'
            }
          `}
        >
          {isChecked ? '✓ Уже отмечено!' : '👀 Я видел эту рыбу!'}
        </button>
      </div>
    </div>
  );
}
