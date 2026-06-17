import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — TechRankers" },
      { name: "description", content: "Common questions about working with TechRankers — engagement, pricing, timelines, and team." },
      { property: "og:title", content: "FAQ — TechRankers" },
      { property: "og:description", content: "Common questions answered." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most engagements kick off within two weeks of signing. Smaller scopes can begin in 3–5 business days when capacity allows.",
  },
  {
    q: "Do you offer one-off projects, or only retainers?",
    a: "Both. Brand, web builds, and audits run as fixed-scope projects. SEO, content, and marketing work best as monthly engagements where compounding is the point.",
  },
  {
    q: "Who actually does the work?",
    a: "Senior practitioners — minimum 7+ years experience. No bait-and-switch. The people on your kickoff call are the people doing the work.",
  },
  {
    q: "How do you measure success?",
    a: "We agree on a single north-star metric upfront (qualified leads, revenue, organic sessions, retention — whichever matters most) and report against it weekly.",
  },
  {
    q: "What does the onboarding look like?",
    a: "A 90-minute kickoff workshop, full audit within 7 days, and a written 30/60/90-day plan you'll see before any work ships.",
  },
  {
    q: "Can you work with our existing in-house team?",
    a: "Absolutely — about 60% of our clients have internal teams. We embed where it adds value, hand off where it doesn't.",
  },
  {
    q: "What if I'm not happy?",
    a: "Every engagement carries a 30-day satisfaction guarantee. If month one doesn't meet the bar, walk away. No fees, no awkwardness.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">FAQ</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-6xl">
              Answers, before you <span className="text-gradient">ask</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-border overflow-hidden rounded-2xl card-elevated">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-surface-elevated"
                  >
                    <span className="font-display text-lg font-semibold">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="h-5 w-5 text-gold" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-6 text-center">
              <p className="text-sm text-muted-foreground">Still have questions?</p>
              <Link to="/contact" className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
