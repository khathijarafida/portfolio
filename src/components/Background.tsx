import { motion } from 'framer-motion';

// Decorative blurred gradient orbs over a deep midnight base.
// Each orb drifts slowly via Framer Motion for a living, depth-filled backdrop.
// Purely visual — pointer-events disabled so they never block interaction.

interface OrbProps {
  className: string;
  delay?: number;
  drift?: { x: number; y: number };
  duration?: number;
}

function Orb({ className, delay = 0, drift = { x: 40, y: 30 }, duration = 18 }: OrbProps) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-[130px] ${className}`}
      animate={{
        x: [0, drift.x, 0],
        y: [0, drift.y, 0],
        scale: [1, 1.08, 1],
        opacity: [0.55, 0.75, 0.55],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base — deep midnight navy with a subtle radial lift */}
      <div className="absolute inset-0 bg-midnight" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(139,92,246,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 30%, rgba(167,139,250,0.08), transparent 55%)',
        }}
      />

      {/* drifting orbs */}
      <Orb className="-right-32 -top-32 h-[34rem] w-[34rem] bg-purple/20" duration={20} drift={{ x: -60, y: 40 }} />
      <Orb className="left-[-10%] top-[20%] h-[30rem] w-[30rem] bg-purple-soft/15" delay={2} duration={24} drift={{ x: 50, y: -40 }} />
      <Orb className="right-[10%] top-[90%] h-[22rem] w-[22rem] bg-cyan-accent/10" delay={4} duration={22} drift={{ x: -40, y: -50 }} />
      <Orb className="bottom-[5%] left-[-12%] h-[32rem] w-[32rem] bg-purple/15" delay={1} duration={26} drift={{ x: 60, y: 30 }} />

      {/* faint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#A78BFA 1px, transparent 1px), linear-gradient(90deg, #A78BFA 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
