import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileDown, Sparkles } from 'lucide-react';

import { profile, socials } from '@/data/portfolio';

const textV = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Subtle parallax — background glows drift and content fades as you scroll past the hero.
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yGlow2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center px-4 pb-16 pt-28 sm:px-6 md:pt-32"
    >
      {/* parallax glow behind the name */}
      <motion.div
        style={{ y: yGlow, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/20 blur-[120px]"
      />
      <motion.div
        style={{ y: yGlow2, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-accent/10 blur-[100px]"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          custom={0}
          variants={textV}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-purple-soft"
        >
          <Sparkles className="h-4 w-4" />
          {profile.tagline}
        </motion.span>

        <motion.h1
          custom={1}
          variants={textV}
          initial="hidden"
          animate="visible"
          className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]">Khathija Rafida</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={textV}
          initial="hidden"
          animate="visible"
          className="mt-5 text-lg font-semibold text-purple-light sm:text-xl"
        >
          Computer Science Engineering Student &amp; Full Stack Developer
        </motion.p>

        <motion.p
          custom={3}
          variants={textV}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft"
        >
          {profile.intro}
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={4}
          variants={textV}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg sm:w-auto"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="resume.pdf"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold text-purple-light transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-soft/40 hover:shadow-glow sm:w-auto"
          >
            <FileDown className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          custom={5}
          variants={textV}
          initial="hidden"
          animate="visible"
          className="mt-8 flex items-center justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-purple-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:text-purple-light"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
