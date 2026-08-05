import { motion, type Variants } from 'framer-motion';

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
}

export function SectionHeading({ eyebrow, title, highlight }: SectionHeadingProps) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-12 text-center md:mb-16"
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-purple-soft/20 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-purple-gradient shadow-glow-sm" />
    </motion.div>
  );
}
