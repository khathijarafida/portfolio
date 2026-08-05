import { motion, type Variants } from 'framer-motion';

// Scroll-reveal wrapper — fades and lifts content into view on scroll.
// Use `delay` to stagger children, and `once` to replay vs. single reveal.

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'li' | 'span';
}

export function Reveal({ children, className, delay = 0, once = true, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
