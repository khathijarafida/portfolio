import { profile, socials } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="relative px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl glass px-6 py-8 text-center md:px-10">
          <a href="#home" className="inline-flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-gradient font-mono text-base font-bold text-white shadow-glow-sm">
              K
            </span>
            <span className="text-lg font-bold tracking-tight text-ink">{profile.name}</span>
          </a>

          <p className="mt-3 text-sm font-medium text-ink-soft">{profile.role}</p>

          <div className="mt-5 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-purple-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:text-purple-light"
              >
                <s.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>

          <div className="mt-7 border-t border-purple-soft/15 pt-5">
            <p className="text-xs text-ink-soft">
              © 2026 {profile.name}. Built with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
