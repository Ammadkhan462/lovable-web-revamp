import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CTABanner({
  eyebrow = "Ready when you are",
  title = "Let's build something remarkable.",
  subtitle = "Tell us about your project — we respond within two business days with a clear plan.",
  primaryLabel = "Start a project",
  secondaryLabel = "Browse pricing",
}: Props) {
  return (
    <section className="container-x py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-border bg-[var(--gradient-primary)] p-10 md:p-16"
      >
        {/* Animated orbs */}
        <motion.div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/30 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="grid-noise pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/90 backdrop-blur">
              <Sparkles className="h-3 w-3 text-accent animate-pulse" /> {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-primary-foreground md:text-5xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/75">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">{primaryLabel}</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/15 hover:scale-105"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
