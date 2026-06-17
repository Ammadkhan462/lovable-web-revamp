import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Star, ShieldCheck, Zap, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { services } from "@/data/services";
import heroImg from "@/assets/hero.jpg";

const iconMap = { Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechRankers — A Modern Digital Studio for Growth" },
      { name: "description", content: "We engineer SEO, web, mobile, and brand systems that move metrics. Premium studio work for ambitious teams." },
      { property: "og:title", content: "TechRankers — A Modern Digital Studio" },
      { property: "og:description", content: "SEO, web, mobile, brand — engineered for measurable growth." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 opacity-[0.35] grid-noise" />
        <img src={heroImg} alt="" width={1600} height={1100} className="pointer-events-none absolute right-[-10%] top-[-10%] hidden h-[120%] w-[70%] object-cover opacity-50 mix-blend-screen lg:block" />
        <div className="container-x relative grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Trusted by 120+ growing teams worldwide
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              We engineer <span className="text-gold-gradient">measurable</span><br />
              digital <span className="text-gradient">growth</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              TechRankers is a modern studio crafting SEO, websites, mobile apps, and brand systems for teams that refuse to be average. Strategy, design, and engineering — under one roof.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-95">
                Start a project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-surface-elevated">
                See our work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="ml-1.5">4.9 / 5 client rating</span>
              </div>
              <div className="hidden h-4 w-px bg-border md:block" />
              <div className="hidden items-center gap-2 md:flex">
                <ShieldCheck className="h-4 w-4 text-gold" /> Vetted senior team
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card-elevated relative rounded-2xl p-6 animate-float">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Performance snapshot</span>
                <Zap className="h-4 w-4 text-gold" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { k: "+312%", v: "organic traffic" },
                  { k: "2.4×", v: "conversion lift" },
                  { k: "<1.2s", v: "load time (LCP)" },
                  { k: "98", v: "Lighthouse score" },
                ].map((m) => (
                  <div key={m.v} className="rounded-xl border border-border bg-surface p-4">
                    <div className="font-display text-2xl font-semibold text-foreground">{m.k}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-border bg-surface/60 p-4 text-sm">
                <p className="text-muted-foreground">"TechRankers rebuilt our funnel end-to-end. We doubled qualified leads in one quarter."</p>
                <p className="mt-3 text-xs font-semibold text-foreground">— Maya R., VP Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-12 gap-y-4 py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Trusted by teams at</span>
          {["Northwind", "Lumen", "Halcyon", "Atlas Co.", "Vertex", "Orbit Labs"].map((n) => (
            <span key={n} className="font-display text-base font-semibold text-foreground/70">{n}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">What we do</span>
            <h2 className="mt-2 text-4xl font-semibold md:text-5xl">
              Six disciplines. <span className="text-gradient">One studio.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hover the Services menu above for a quick view — or explore each discipline in depth below.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
            Talk to a strategist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group card-elevated relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 opacity-0 blur-3xl transition group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-[var(--gradient-primary)] group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                <ul className="relative mt-5 flex flex-wrap gap-1.5">
                  {s.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">{h}</li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden border-y border-border bg-surface/40">
        <div className="container-x py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">How we work</span>
              <h2 className="mt-2 text-4xl font-semibold md:text-5xl">A proven path<br /> from idea to <span className="text-gradient">impact</span>.</h2>
              <p className="mt-4 text-muted-foreground">Every engagement follows a disciplined framework — so you know exactly what's happening, when, and why.</p>
            </div>
            <ol className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {[
                { n: "01", t: "Discover", d: "Stakeholder interviews, audits, and a clear north-star metric." },
                { n: "02", t: "Design", d: "Strategy, brand, and prototypes that pressure-test the idea." },
                { n: "03", t: "Build", d: "Production engineering with weekly demos and tight feedback loops." },
                { n: "04", t: "Scale", d: "Measure, iterate, and compound wins across every channel." },
              ].map((s) => (
                <li key={s.n} className="card-elevated rounded-2xl p-6">
                  <div className="font-display text-gold text-sm font-semibold tracking-widest">{s.n}</div>
                  <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="container-x py-24">
        <div className="card-elevated relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="absolute inset-0 hero-bg opacity-60" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold md:text-5xl">
                Ready to <span className="text-gold-gradient">outrank</span> your category?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us about your goals. We'll come back with a sharp, no-fluff plan within two business days.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur">
                  Browse case studies
                </Link>
              </div>
            </div>
            <blockquote className="rounded-2xl border border-border bg-surface/70 p-8 backdrop-blur">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="mt-4 text-lg leading-relaxed">
                "They don't behave like an agency — they behave like a senior in-house team. Strategic, fast, and obsessive about quality."
              </p>
              <footer className="mt-6 flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-gold)] font-semibold text-gold-foreground">DK</span>
                <span>
                  <span className="block font-semibold">Daniel Khan</span>
                  <span className="text-muted-foreground">Founder, Halcyon Labs</span>
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
