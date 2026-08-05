import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';

import { profile, socials } from '@/data/portfolio';
import { Mail, LinkedIn } from '@/components/icons';
import { SectionHeading, sectionVariants, itemVariants, containerVariants } from '@/components/ui/Section';

type Status = 'idle' | 'sending' | 'sent';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated submit — opens the visitor's email client with the message prefilled.
    window.setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      window.setTimeout(() => {
        setStatus('idle');
        setForm({ name: '', email: '', message: '' });
      }, 4000);
    }, 900);
  };

  const contactCards = [
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'khathija-rafida', href: profile.linkedin, icon: LinkedIn },
  ];

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get in touch" title="Let's" highlight="Connect" />

        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-ink-soft"
        >
          Interested in connecting, discussing opportunities, or working together? Feel free to reach
          out.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT — contact info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {contactCards.map((c) => (
              <motion.a
                key={c.label}
                variants={itemVariants}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:shadow-glow hover:border-purple-soft/35"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-gradient text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-soft/70">
                    {c.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-ink/90">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl glass-strong p-7 md:p-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field
                label="Name"
                type="text"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder="Your name"
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="you@example.com"
                required
              />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink/85">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about the opportunity or project…"
                  className="w-full resize-none rounded-xl border border-purple-soft/15 bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition-all duration-200 focus:border-purple-soft/40 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-purple/15"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-purple-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg disabled:opacity-80"
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    Sending…
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                )}
                {status === 'sent' && (
                  <>
                    Opening your email…
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}

function Field({ label, type, value, onChange, placeholder, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={label} className="mb-1.5 block text-sm font-semibold text-ink/85">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-purple-soft/15 bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition-all duration-200 focus:border-purple-soft/40 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-purple/15"
      />
    </div>
  );
}
