import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone, Sparkles } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Motion";
import { ParticleField } from "@/components/site/ParticleField";
import { services, type Service } from "@/data/services";

const iconMap = { Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } as const;

function FlipCard({ s }: { s: Service }) {
  const Icon = iconMap[s.icon as keyof typeof iconMap];
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });
  const gx = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="flip-card group relative h-[340px] [perspective:1600px]"
    >
      {/* Glow halo */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70" style={{ background: "var(--gradient-primary)" }} />

      <motion.div
        className="relative h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="card-elevated absolute inset-0 overflow-hidden rounded-2xl p-7 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          {/* spotlight */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [gx, gy] as never,
                ([x, y]: string[]) => `radial-gradient(420px circle at ${x} ${y}, oklch(0.62 0.22 268 / 0.28), transparent 55%)`
              ) as unknown as string,
            }}
          />
          {/* shine sweep */}
          <div className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />

          <div className="relative flex items-center justify-between" style={{ transform: "translateZ(40px)" }}>
            <motion.span
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 280, damping: 14 }}
              className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-[var(--gradient-primary)] group-hover:text-primary-foreground"
            >
              <Icon className="h-6 w-6" />
            </motion.span>
            <Sparkles className="h-4 w-4 text-gold/70 animate-pulse" />
          </div>
          <h3 className="relative mt-6 text-xl font-semibold" style={{ transform: "translateZ(30px)" }}>{s.title}</h3>
          <p className="relative mt-2 text-sm text-muted-foreground" style={{ transform: "translateZ(20px)" }}>{s.tagline}</p>
          <ul className="relative mt-5 flex flex-wrap gap-1.5">
            {s.highlights.slice(0, 3).map((h: string) => (
              <li key={h} className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground transition group-hover:border-primary/50 group-hover:text-foreground">{h}</li>
            ))}
          </ul>
          <div className="absolute bottom-6 left-7 right-7 flex items-center gap-2 text-[11px] uppercase tracking-widest text-gold/80">
            <span className="inline-block h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
            Hover to flip
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-primary/40 p-7 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="grid-noise absolute inset-0 opacity-30" />
          {/* drifting blobs */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/30 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-white/10 blur-3xl animate-blob [animation-delay:-6s]" />

          <div className="relative flex h-full flex-col" style={{ transform: "translateZ(50px)" }}>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-primary-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> What you get
            </div>
            <h3 className="mt-2 text-xl font-semibold text-primary-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/85 line-clamp-2">{s.description}</p>
            <ul className="mt-4 space-y-1.5">
              {s.deliverables.slice(0, 4).map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.35 }}
                  className="flex items-start gap-2 text-xs text-primary-foreground/90"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {d}
                </motion.li>
              ))}
            </ul>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group/btn mt-auto inline-flex items-center gap-2 self-start rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-gold hover:text-gold-foreground"
            >
              Explore {s.title.split(" ")[0]}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <FlipCard s={s} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>


    </SiteLayout>
  );
}
