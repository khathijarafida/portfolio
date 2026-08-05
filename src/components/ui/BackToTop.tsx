import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Floating "Back to Top" button — appears after scrolling, smoothly returns to top.
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Subtle mouse-follow tilt for a premium feel.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ rotateX, rotateY, transformPerspective: 400 }}
          className="group fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-gradient text-white shadow-glow transition-shadow duration-300 hover:shadow-glow-lg sm:bottom-8"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
