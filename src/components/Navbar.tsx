import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';

import { profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'glass-strong shadow-glass-lg'
            : 'border border-white/[0.06] bg-white/[0.03] backdrop-blur-md'
        }`}
      >
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-2.5" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-gradient font-mono text-base font-bold text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110">
            K
          </span>
          <span className="hidden text-base font-bold tracking-tight text-ink sm:block">
            Khathija Rafida
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-purple-soft' : 'text-ink-soft hover:text-purple-soft'
                  }`
                }
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-purple-gradient transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            className="group hidden items-center gap-2 rounded-full bg-purple-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:flex"
          >
            <FileDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-soft/15 bg-white/[0.05] text-purple-soft backdrop-blur-md transition-colors hover:bg-white/[0.1] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl glass-strong p-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={close}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-white/[0.06] text-purple-soft'
                          : 'text-ink-soft hover:bg-white/[0.06] hover:text-purple-soft'
                      }`
                    }
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="resume.pdf.pdf"
                  onClick={close}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-purple-gradient px-4 py-3 text-sm font-semibold text-white shadow-glow-sm"
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
