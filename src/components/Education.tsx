import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

import { education } from '@/data/portfolio';
import { SectionHeading, sectionVariants } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Education() {
  return (
    <section id="education" className="relative px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Academics" title="Edu" highlight="cation" />

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-2xl glass-strong p-8 transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35 md:p-10"
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple/15 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-gradient text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="h-8 w-8" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-ink md:text-2xl">{education.degree}</h3>
              <p className="mt-1 text-base font-semibold text-purple-soft">{education.field}</p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-purple-soft/20 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-purple-light">
                <Calendar className="h-3.5 w-3.5" />
                {education.period}
              </div>

              <ul className="mt-6 space-y-3">
                {education.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-gradient" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
