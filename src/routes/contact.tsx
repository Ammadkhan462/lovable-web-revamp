import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Send, Sparkles, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/site/Motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TechRankers" },
      { name: "description", content: "Tell us about your project. We respond within two business days with a clear plan." },
      { property: "og:title", content: "Contact — TechRankers" },
      { property: "og:description", content: "Start a project with TechRankers." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <motion.div
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-x relative py-24 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
              <Sparkles className="h-3 w-3 animate-pulse" /> Contact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-7xl">
              Let's build something <span className="text-gold-gradient">remarkable</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Share a few details — we'll respond within two business days with a custom plan and timeline.
            </p>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={0.3}>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                { k: "< 48h", v: "Response time" },
                { k: "30 days", v: "First results" },
                { k: "4.9★", v: "Client rating" },
              ].map((s) => (
                <motion.div
                  key={s.v}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur transition hover:border-accent/50"
                >
                  <div className="font-display text-2xl font-semibold text-gold-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="container-x grid gap-10 py-16 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="lg:col-span-5 space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-elevated rounded-2xl p-7"
          >
            <h3 className="text-lg font-semibold">Reach us directly</h3>
            <ul className="mt-5 space-y-4 text-sm">
              {[
                { i: Mail, t: "hello@techrankers.com", href: "mailto:hello@techrankers.com" },
                { i: Phone, t: "+1 (555) 010-2024", href: "tel:+15550102024" },
                { i: MapPin, t: "Remote · Global · HQ in NYC" },
              ].map((c) => (
                <li key={c.t}>
                  <a
                    href={c.href ?? "#"}
                    className="group flex items-start gap-3 rounded-lg p-2 -m-2 transition hover:bg-surface"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                      <c.i className="h-4 w-4" />
                    </span>
                    <span className="pt-1.5">{c.t}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated rounded-2xl p-7"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              <h3 className="text-lg font-semibold">What happens next?</h3>
            </div>
            <ol className="mt-5 space-y-4">
              {[
                "A 20-minute intro call to understand your goals.",
                "A written proposal with scope, timeline, and pricing.",
                "Kickoff within two weeks — first results inside 30 days.",
              ].map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--gradient-primary)] font-display text-[11px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 card-elevated relative overflow-hidden rounded-2xl p-7 md:p-9"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative grid place-items-center py-16 text-center"
            >
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="grid h-16 w-16 place-items-center rounded-full bg-[var(--gradient-cyan)] text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                <CheckCircle2 className="h-8 w-8" />
              </motion.span>
              <h3 className="mt-5 font-display text-3xl font-semibold">Thanks — message received.</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                A strategist will reply within two business days. Check your inbox for a confirmation.
              </p>
            </motion.div>
          ) : (
            <div className="relative grid gap-5">
              <div>
                <h3 className="font-display text-2xl font-semibold">Start a project</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tell us what you're building — we'll take it from there.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
              </div>
              <Field label="Company" name="company" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Interested in</label>
                <select className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30">
                  <option>Not sure yet — recommend something</option>
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Tell us about your project</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Goals, timeline, budget range..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:bg-accent hover:text-accent-foreground"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Send message</span>
                <Send className="relative h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </motion.button>
              <p className="text-center text-[11px] text-muted-foreground">
                Prefer email?{" "}
                <a href="mailto:hello@techrankers.com" className="text-accent underline-offset-4 hover:underline">
                  hello@techrankers.com <ArrowRight className="inline h-3 w-3" />
                </a>
              </p>
            </div>
          )}
        </motion.form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-gold" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
