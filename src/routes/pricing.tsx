import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight, Zap, Rocket, Crown } from "lucide-react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Motion";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — TechRankers" },
      { name: "description", content: "Transparent monthly engagements. Pick the plan that fits your stage of growth." },
      { property: "og:title", content: "Pricing — TechRankers" },
      { property: "og:description", content: "Transparent monthly engagements." },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Launch",
    icon: Zap,
    price: "$3,900",
    cadence: "/mo",
    desc: "For early-stage teams ready to take growth seriously.",
    features: [
      "One core discipline (SEO, paid, or content)",
      "Bi-weekly strategy sync",
      "Monthly performance report",
      "Shared Slack channel",
    ],
  },
  {
    name: "Scale",
    icon: Rocket,
    price: "$8,400",
    cadence: "/mo",
    desc: "Our most popular plan — full-funnel growth with senior support.",
    features: [
      "Two disciplines combined",
      "Weekly strategy + creative reviews",
      "Custom dashboards & attribution",
      "Dedicated growth lead",
      "Quarterly roadmap reviews",
    ],
    featured: true,
  },
  {
    name: "Studio",
    icon: Crown,
    price: "Custom",
    cadence: "",
    desc: "End-to-end studio engagement — design, engineering, and growth.",
    features: [
      "Unlimited disciplines",
      "Embedded squad (PM + design + eng + growth)",
      "On-site workshops",
      "Priority response < 4h",
      "Executive monthly readout",
    ],
  },
];

function Pricing() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Pricing</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-6xl">
              Senior work, <span className="text-gold-gradient">honest pricing</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Monthly engagements that flex with your stage. No hidden fees, no junior swaps, no surprise scope creep.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16">
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.name}>
                <div
                  className={`group card-elevated price-3d relative h-full overflow-hidden rounded-3xl p-8 ${
                    p.featured ? "price-3d-featured border-accent/70 ring-2 ring-accent/40" : ""
                  }`}
                >
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-gold/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {p.featured && (
                    <motion.span
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gradient-cyan)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)]"
                    >
                      ★ Most popular
                    </motion.span>
                  )}

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.span
                        whileHover={{ rotate: 12, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`grid h-11 w-11 place-items-center rounded-xl ring-1 transition-colors ${
                          p.featured
                            ? "bg-[var(--gradient-cyan)] text-primary-foreground ring-accent/40"
                            : "bg-primary/10 text-primary ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold">{p.name}</span>
                    </div>
                    <Sparkles className="h-4 w-4 text-gold/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-pulse" />
                  </div>

                  <div className="relative mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-semibold tracking-tight transition-colors group-hover:text-gold-gradient">
                      {p.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{p.cadence}</span>
                  </div>
                  <p className="relative mt-3 text-sm text-muted-foreground">{p.desc}</p>

                  <ul className="relative mt-6 space-y-3">
                    {p.features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent transition-transform group-hover:scale-110">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`group/btn relative mt-8 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
                      p.featured
                        ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-accent hover:text-accent-foreground"
                        : "border-2 border-primary bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    <span className="relative">Start a project</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            All plans include a 30-day satisfaction guarantee. Not happy in month one? Walk away — no questions asked.
          </p>
        </Reveal>
      </section>

      <CTABanner
        eyebrow="Not sure which plan?"
        title="Let's match a plan to your goals."
        subtitle="A 20-minute call — we'll recommend a plan, scope, and timeline. No pressure, no sales theatre."
        primaryLabel="Talk to a strategist"
      />
    </SiteLayout>
  );
}
