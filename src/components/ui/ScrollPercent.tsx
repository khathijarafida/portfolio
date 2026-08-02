import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Small scroll-percentage indicator in the bottom-right corner with a radial dial.
export function ScrollPercent() {
  const [visible, setVisible] = useState(false);
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const dashOffset = useTransform(smooth, [0, 1], [88, 0]); // ~28 * pi ≈ 88
  const display = useTransform(smooth, (v) => `${Math.round(v * 100)}`);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      progress.set(p);
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [progress]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-6 z-40 hidden sm:block"
      aria-hidden="true"
    >
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full glass-strong">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(167,139,250,0.12)" strokeWidth="2" />
          <motion.circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="url(#scrollDial)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="88"
            style={{ strokeDashoffset: dashOffset }}
          />
          <defs>
            <linearGradient id="scrollDial" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
        <motion.span className="font-mono text-xs font-semibold text-ink">{display}</motion.span>
      </div>
    </motion.div>
  );
}
