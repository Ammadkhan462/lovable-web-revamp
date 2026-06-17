import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } from "lucide-react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Motion";
import { ParticleField } from "@/components/site/ParticleField";
import { services } from "@/data/services";

const iconMap = { Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } as const;

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — TechRankers" },
      { name: "description", content: "Six disciplines, one studio. Explore our SEO, web, mobile, marketing, brand, and content services." },
      { property: "og:title", content: "Services — TechRankers" },
      { property: "og:description", content: "Six disciplines, one studio." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <ParticleField />
        <div className="container-x relative py-24 md:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-6xl">
              Everything you need to <span className="text-gradient">compound growth</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Pick a single discipline or hire us end-to-end. Every engagement is led by senior practitioners and tied to measurable outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20">
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={s.slug}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 240, damping: 22 }}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="group card-elevated relative block overflow-hidden rounded-2xl p-7 transition hover:border-primary/60">
                    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/20 opacity-0 blur-3xl transition group-hover:opacity-100" />
                    <div className="relative flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-[var(--gradient-primary)] group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                    </div>
                    <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
                    <p className="relative mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                    <ul className="relative mt-5 flex flex-wrap gap-1.5">
                      {s.highlights.slice(0, 3).map((h: string) => (
                        <li key={h} className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">{h}</li>
                      ))}
                    </ul>
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>
    </SiteLayout>
  );
}
