import { motion } from 'framer-motion';
import { Code2, Sparkles, Clock } from 'lucide-react';

import { SectionHeading, containerVariants, itemVariants } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const comingSoon = [
  {
    icon: Code2,
    title: 'Project One',
    stack: ['Java', 'JavaScript'],
  },
  {
    icon: Sparkles,
    title: 'Project Two',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Code2,
    title: 'Project Three',
    stack: ['Full Stack', 'SQL'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="My work" title="Projects" />

        {/* Journey banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto mb-10 max-w-2xl rounded-2xl glass-strong px-6 py-5 text-center"
        >
          <h3 className="text-lg font-bold text-gradient">Building my development journey.</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Projects will be added here as I continue developing real-world applications and expanding
            my technical skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {comingSoon.map((p) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35"
            >
              {/* gradient top section */}
              <div className="relative h-28 overflow-hidden bg-purple-gradient">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #fff 0, transparent 40%), radial-gradient(circle at 70% 70%, #fff 0, transparent 35%)' }} />
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Clock className="h-3 w-3" />
                  Coming Soon
                </span>
              </div>

              {/* body */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-ink">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  A real-world application in development. Check back soon for details.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-purple-soft/15 bg-white/[0.04] px-3 py-1 font-mono text-xs font-medium text-purple-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}
