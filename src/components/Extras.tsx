import { motion } from 'framer-motion';

import { certifications, achievements, languages } from '@/data/portfolio';
import { SectionHeading, containerVariants, itemVariants } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Certifications() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Credentials" title="Certifi" highlight="cations" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {certifications.map((c) => (
            <motion.div
              key={c.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex items-center gap-5 overflow-hidden rounded-2xl glass-strong p-7 transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple/15 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-gradient text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110">
                <c.icon className="h-7 w-7" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-purple-soft">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Beyond the classroom" title="Activities &amp;" highlight="Achievements" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-7 transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35"
            >
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-purple/15 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-gradient text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110">
                <a.icon className="h-7 w-7" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-ink">{a.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}

export function Languages() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl font-bold text-ink"
        >
          Languages
        </motion.h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {languages.map((l) => (
            <motion.span
              key={l.name}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.04 }}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-ink/85 transition-colors hover:text-purple-light hover:shadow-glow-sm"
            >
              <l.icon className="h-4 w-4 text-purple-soft" />
              {l.name}
            </motion.span>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}
