import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Motion";

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
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`card-elevated relative h-full rounded-3xl p-8 ${p.featured ? "border-primary/70 ring-1 ring-primary/40" : ""}`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gradient-gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
                    Most popular
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">{p.name}</span>
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.cadence}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]"
                      : "border border-border bg-surface hover:bg-surface-elevated"
                  }`}
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            All plans include a 30-day satisfaction guarantee. Not happy in month one? Walk away — no questions asked.
          </p>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
