import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

import { experience } from '@/data/portfolio';
import { SectionHeading, itemVariants, containerVariants } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Career" title="Experi" highlight="ence" />

        <div className="relative">
          {/* glowing timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-purple via-purple-soft to-transparent md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative pl-14 md:pl-0"
          >
            {/* node */}
            <motion.div variants={itemVariants} className="relative md:grid md:grid-cols-2 md:gap-8">
              <div className="absolute left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-purple-gradient shadow-glow ring-4 ring-midnight md:left-1/2 md:-translate-x-1/2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              {/* card spans full width on md via offset */}
              <div className="md:col-start-1 md:col-end-3">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl glass-strong p-7 transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35 md:p-9"
                >
                  <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-purple-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15" />

                  <div className="relative flex flex-wrap items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-gradient text-white shadow-glow-sm">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink md:text-xl">{experience.role}</h3>
                      <p className="text-sm font-medium text-purple-soft">{experience.company}</p>
                    </div>
                  </div>

                  <div className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-purple-soft/20 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-purple-light">
                    <Calendar className="h-3.5 w-3.5" />
                    {experience.period}
                  </div>

                  <ul className="relative mt-6 space-y-3">
                    {experience.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-gradient" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
