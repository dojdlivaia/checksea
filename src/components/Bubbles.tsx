// Анимированные пузыри на фоне
import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const arr: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 30,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 5,
    }));
    setBubbles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-white/20 animate-bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            bottom: -b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
