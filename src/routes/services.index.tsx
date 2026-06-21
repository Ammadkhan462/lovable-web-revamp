import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, LayoutGrid, Layers, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Motion";
import { ParticleField } from "@/components/site/ParticleField";
import { ServiceFlipCard } from "@/components/site/ServiceFlipCard";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

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
  const [view, setView] = useState<"flip" | "expanded">("flip");

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <ParticleField />
        <div className="container-x relative py-24 md:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our services</span>
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

      <section className="container-x py-16">
        {/* View switcher */}
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">All disciplines</h2>
              <p className="mt-1 text-sm text-muted-foreground">Switch to expanded view to see every detail at once.</p>
            </div>
            <div className="inline-flex rounded-full border border-border bg-surface p-1">
              <button
                onClick={() => setView("flip")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition",
                  view === "flip" ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Layers className="h-3.5 w-3.5" /> Flip cards
              </button>
              <button
                onClick={() => setView("expanded")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition",
                  view === "expanded" ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <LayoutGrid className="h-3.5 w-3.5" /> Expanded view
              </button>
            </div>
          </div>
        </Reveal>

        {view === "flip" ? (
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceFlipCard s={s} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : (
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={s.slug}>
                  <div className="card-elevated group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </span>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground transition hover:border-accent hover:text-accent"
                      >
                        Open <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <h3 className="relative mt-5 text-xl font-semibold">{s.title}</h3>
                    <p className="relative mt-1 text-sm text-accent/90">{s.tagline}</p>
                    <p className="relative mt-3 text-sm text-muted-foreground">{s.description}</p>
                    <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Highlights</div>
                        <ul className="mt-2 space-y-1.5">
                          {s.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-xs">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Deliverables</div>
                        <ul className="mt-2 space-y-1.5">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        )}
      </section>
    </SiteLayout>
  );
}
