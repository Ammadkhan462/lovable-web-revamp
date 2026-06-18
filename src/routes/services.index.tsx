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
                <div className="flip-card group h-[340px] [perspective:1500px]">
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="card-elevated absolute inset-0 rounded-2xl p-7 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                          <Icon className="h-6 w-6" />
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {s.highlights.slice(0, 3).map((h: string) => (
                          <li key={h} className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">{h}</li>
                        ))}
                      </ul>
                      <div className="absolute bottom-6 left-7 right-7 text-[11px] uppercase tracking-widest text-gold/80">Hover to reveal →</div>
                    </div>
                    {/* Back */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-2xl border border-primary/40 p-7 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <div className="grid-noise absolute inset-0 opacity-30" />
                      <div className="relative flex h-full flex-col">
                        <h3 className="text-xl font-semibold text-primary-foreground">{s.title}</h3>
                        <p className="mt-2 text-sm text-primary-foreground/85 line-clamp-3">{s.description}</p>
                        <ul className="mt-4 space-y-1.5">
                          {s.deliverables.slice(0, 4).map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs text-primary-foreground/90">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-gold hover:text-gold-foreground"
                        >
                          Explore {s.title.split(" ")[0]} <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

    </SiteLayout>
  );
}
