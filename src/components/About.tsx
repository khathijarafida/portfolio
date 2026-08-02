import { motion } from 'framer-motion';

import { aboutCards, profile } from '@/data/portfolio';
import { SectionHeading, sectionVariants, containerVariants, itemVariants } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get to know me" title="About" highlight="Me" />

        {/* Intro card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="group relative overflow-hidden rounded-3xl glass-strong p-8 text-center transition-all duration-300 hover:shadow-glass-lg md:p-12"
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple/20 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
          <p className="relative mx-auto max-w-3xl text-lg leading-relaxed text-ink/90 md:text-xl">
            {profile.intro}
          </p>
        </motion.div>

        {/* Three focus cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6 md:grid-cols-3"
        >
          {aboutCards.map((card) => (
            <motion.div
              key={card.num}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />

              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-gradient text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-2xl font-bold text-purple/40">{card.num}</span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}
