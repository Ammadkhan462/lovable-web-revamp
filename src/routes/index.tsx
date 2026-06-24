import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles, Star, ShieldCheck, Zap, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Motion";
import { ParticleField } from "@/components/site/ParticleField";
import { services } from "@/data/services";
import { ServiceFlipCard } from "@/components/site/ServiceFlipCard";
import { CountUp } from "@/components/site/CountUp";
import { Hero3DSphere } from "@/components/site/Hero3DSphere";
import { TiltCard } from "@/components/site/TiltCard";
import heroImg from "@/assets/hero.jpg";
import marketing1 from "@/assets/marketing-1.jpg";
import marketing2 from "@/assets/marketing-2.jpg";

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

const marqueeBrands = ["Northwind", "Lumen", "Halcyon", "Atlas Co.", "Vertex", "Orbit Labs", "Aether", "Praxis"];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Full landscape hero image */}
        <motion.img
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          src={heroImg}
          alt="TechRankers creative team collaborating in studio"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        {/* Tint + gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
        <ParticleField />
        <div className="absolute inset-0 opacity-[0.18] grid-noise" />
        <Hero3DSphere />
        {/* drifting blobs */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />


        <div className="container-x relative grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Trusted by 120+ growing teams worldwide
            </motion.span>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="block">
                We engineer <span className="text-gold-gradient">measurable</span>
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="block">
                digital <span className="shimmer-text">growth</span>.
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              TechRankers is a modern studio crafting SEO, websites, mobile apps, and brand systems for teams that refuse to be average. Strategy, design, and engineering — under one roof.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] ring-2 ring-transparent transition-all duration-300 hover:scale-[1.04] hover:bg-accent hover:text-accent-foreground hover:ring-accent/40 hover:shadow-[0_0_0_6px_oklch(0.66_0.19_215/0.18),var(--shadow-glow)]">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Start a project <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/work" className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-background px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                See our work <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.75 }} className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <TiltCard
              max={10}
              className="card-elevated relative rounded-2xl p-6 cursor-default transition-shadow duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Performance snapshot</span>
                <motion.div whileHover={{ rotate: 12, scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Zap className="h-4 w-4 text-gold" />
                </motion.div>
              </div>
              <StaggerGroup className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { node: <><CountUp value={312} prefix="+" suffix="%" /></>, v: "organic traffic" },
                  { node: <><CountUp value={2.4} decimals={1} suffix="×" /></>, v: "conversion lift" },
                  { node: <><span className="text-muted-foreground">&lt;</span><CountUp value={1.2} decimals={1} suffix="s" /></>, v: "load time (LCP)" },
                  { node: <CountUp value={98} />, v: "Lighthouse score" },
                ].map((m) => (
                  <StaggerItem key={m.v}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="rounded-xl border border-border bg-surface p-4 cursor-default hover:border-accent/50 hover:bg-surface/80 transition-colors duration-300"
                    >
                      <div className="font-display text-2xl font-semibold text-foreground">{m.node}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-6 rounded-xl border border-border bg-surface/60 p-4 text-sm hover:border-accent/30 transition-colors duration-300"
              >
                <p className="text-muted-foreground">"TechRankers rebuilt our funnel end-to-end. We doubled qualified leads in one quarter."</p>
                <p className="mt-3 text-xs font-semibold text-foreground">— Maya R., VP Growth</p>
              </motion.div>
              {/* spinning ring decoration */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full border border-dashed border-gold/40 animate-spin-slow" />
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE LOGO BAR */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-x py-6">
          <div className="flex items-center gap-6">
            <span className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">Trusted by</span>
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max gap-12 animate-marquee">
                {[...marqueeBrands, ...marqueeBrands].map((n, i) => (
                  <span key={i} className="font-display text-base font-semibold text-foreground/60 whitespace-nowrap">{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">What we do</span>
            <h2 className="mt-2 text-4xl font-semibold md:text-5xl">
              Six disciplines. <span className="text-gradient">One studio.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hover the Services menu above for a quick view — or explore each discipline in depth below.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <ServiceFlipCard s={s} />
            </StaggerItem>
          ))}
        </StaggerGroup>

      </section>

      {/* RESULTS BAND with marketing imagery */}
      <section className="container-x pb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 200 }} className="group relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-border">
              <img src={marketing1} alt="Marketing analytics dashboard" loading="lazy" width={1280} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Data-driven</span>
                <h3 className="mt-2 font-display text-3xl font-semibold">Dashboards that turn signal into strategy.</h3>
              </div>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 200 }} className="group relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-border">
              <img src={marketing2} alt="Creative team strategy session" loading="lazy" width={1280} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Senior team</span>
                <h3 className="mt-2 font-display text-3xl font-semibold">Strategists, designers, and engineers — together.</h3>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>



      {/* PROCESS */}
      <section className="relative overflow-hidden border-y border-border bg-surface/40">
        <div className="container-x py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">How we work</span>
              <h2 className="mt-2 text-4xl font-semibold md:text-5xl">A proven path<br /> from idea to <span className="text-gradient">impact</span>.</h2>
              <p className="mt-4 text-muted-foreground">Every engagement follows a disciplined framework — so you know exactly what's happening, when, and why.</p>
            </Reveal>
            <StaggerGroup className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {[
                { n: "01", t: "Discover", d: "Stakeholder interviews, audits, and a clear north-star metric.", b: ["Goals & KPI alignment", "Tech & content audits", "Competitor benchmarks", "Roadmap proposal"] },
                { n: "02", t: "Design", d: "Strategy, brand, and prototypes that pressure-test the idea.", b: ["Information architecture", "Brand & UI system", "Interactive prototypes", "Stakeholder reviews"] },
                { n: "03", t: "Build", d: "Production engineering with weekly demos and tight feedback loops.", b: ["Modern tech stack", "Weekly demo cadence", "QA & accessibility", "CI/CD pipelines"] },
                { n: "04", t: "Scale", d: "Measure, iterate, and compound wins across every channel.", b: ["Analytics dashboards", "A/B experimentation", "Channel expansion", "Quarterly reviews"] },
              ].map((s) => (
                <StaggerItem key={s.n}>
                  <div className="group relative h-[210px] [perspective:1400px]">
                    <div className="relative h-full w-full transition-transform duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
                      <div className="card-elevated absolute inset-0 rounded-2xl p-6 [backface-visibility:hidden]">
                        <div className="font-display text-accent text-sm font-semibold tracking-widest">{s.n}</div>
                        <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                        <div className="absolute bottom-4 right-5 text-[10px] uppercase tracking-widest text-accent/70">Hover →</div>
                      </div>
                      <div className="absolute inset-0 overflow-hidden rounded-2xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]" style={{ background: "linear-gradient(135deg, oklch(0.16 0.01 240), oklch(0.30 0.06 215))" }}>
                        <div className="font-display text-accent text-sm font-semibold tracking-widest">{s.n} · {s.t}</div>
                        <ul className="mt-3 space-y-1.5">
                          {s.b.map((x) => (
                            <li key={x} className="flex items-start gap-2 text-xs text-primary-foreground/90">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {x}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="container-x py-24">
        <Reveal>
          <div className="card-elevated relative overflow-hidden rounded-3xl p-10 md:p-16">
            <div className="absolute inset-0 hero-bg opacity-60" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-4xl font-semibold md:text-5xl">
                  Ready to <span className="text-gold-gradient">outrank</span> your category?
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Tell us about your goals. We'll come back with a sharp, no-fluff plan within two business days.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.04] hover:bg-accent hover:text-accent-foreground">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Start a project</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/work" className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                    Browse case studies
                  </Link>
                </div>
              </div>
              <motion.blockquote
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl border border-border bg-surface/70 p-8 backdrop-blur"
              >
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
              </motion.blockquote>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
