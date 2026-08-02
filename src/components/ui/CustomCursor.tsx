import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Custom dual-layer cursor: a precise dot that tracks instantly and a soft
// gradient ring that trails with spring physics. Hides the native cursor and
// enlarges over interactive elements. Disabled on touch devices.

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 350, damping: 28, restDelta: 0.001 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, restDelta: 0.001 });
  const ringScale = useSpring(1, { stiffness: 300, damping: 22 });

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const interactive = (e.target as HTMLElement)?.closest('a, button, input, textarea, [role="button"]');
      ringScale.set(interactive ? 1.8 : 1);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y, ringScale]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden h-full w-full md:block">
      <motion.div
        style={{ x: ringX, y: ringY, scale: ringScale }}
        className="absolute -left-4 -top-4 h-8 w-8 rounded-full border border-purple-soft/50 bg-purple/10 mix-blend-screen backdrop-blur-[1px]"
      />
      <motion.div
        style={{ x, y }}
        className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-purple-cyan shadow-[0_0_10px_rgba(139,92,246,0.8)]"
      />
    </div>
  );
}
