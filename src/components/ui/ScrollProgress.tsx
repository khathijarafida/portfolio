import { motion, useScroll, useSpring } from 'framer-motion';

// Thin top scroll-progress bar with a glowing purple-to-cyan gradient.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px]">
      {/* base track */}
      <div className="absolute inset-0 bg-white/[0.04]" />
      <motion.div
        style={{ scaleX }}
        className="absolute inset-0 origin-left bg-purple-cyan shadow-[0_0_12px_rgba(139,92,246,0.6),0_0_24px_rgba(34,211,238,0.35)]"
      />
    </div>
  );
}
