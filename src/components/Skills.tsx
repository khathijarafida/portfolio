import { motion } from 'framer-motion';

import { skillGroups } from '@/data/portfolio';
import { SectionHeading, containerVariants, itemVariants } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="What I work with" title="Technical" highlight="Skills" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group rounded-2xl glass p-6 transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-purple-soft">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="group/tag inline-flex items-center gap-2 rounded-full border border-purple-soft/15 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-ink/85 transition-all duration-300 hover:scale-105 hover:border-purple-soft/40 hover:bg-white/[0.08] hover:text-purple-light hover:shadow-glow-sm"
                  >
                    <skill.icon className="h-4 w-4 text-purple-soft transition-transform duration-300 group-hover/tag:scale-110" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}
