import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { Service } from "@/data/services";

const iconMap = { Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } as const;

export function ServiceFlipCard({ s }: { s: Service }) {
  const Icon = iconMap[s.icon as keyof typeof iconMap];

  return (
    <div className="flip-card group relative h-[340px] w-full [perspective:1600px]">
      {/* Glow halo */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
        {/* FRONT */}
        <div className="card-elevated absolute inset-0 overflow-hidden rounded-2xl p-7 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          {/* shine sweep */}
          <div className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />

          <div className="relative flex items-center justify-between">
            <motion.span
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 280, damping: 14 }}
              className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-[var(--gradient-primary)] group-hover:text-primary-foreground"
            >
              <Icon className="h-6 w-6" />
            </motion.span>
            <Sparkles className="h-4 w-4 text-gold/70 animate-pulse" />
          </div>
          <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
          <p className="relative mt-2 text-sm text-muted-foreground">{s.tagline}</p>
          <ul className="relative mt-5 flex flex-wrap gap-1.5">
            {s.highlights.slice(0, 3).map((h: string) => (
              <li
                key={h}
                className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground transition group-hover:border-primary/50 group-hover:text-foreground"
              >
                {h}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-6 left-7 right-7 flex items-center gap-2 text-[11px] uppercase tracking-widest text-gold/80">
            <span className="inline-block h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
            Hover to flip
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-foreground/10 p-7 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ background: "linear-gradient(135deg, oklch(0.16 0.01 240), oklch(0.22 0.03 215))" }}
        >
          <div className="grid-noise absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/30 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-white/10 blur-3xl animate-blob [animation-delay:-6s]" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-primary-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> What you get
            </div>
            <h3 className="mt-2 text-xl font-semibold text-primary-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/85 line-clamp-2">{s.description}</p>
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
              className="group/btn mt-auto inline-flex items-center gap-2 self-start rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-gold hover:text-gold-foreground"
            >
              Explore {s.title.split(" ")[0]}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
