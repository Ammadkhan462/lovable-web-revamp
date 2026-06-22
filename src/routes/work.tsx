import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — TechRankers" },
      { name: "description", content: "Selected case studies from our work in SEO, web, brand, and mobile." },
      { property: "og:title", content: "Work — TechRankers" },
      { property: "og:description", content: "Selected case studies and outcomes." },
    ],
  }),
  component: Work,
});

const cases = [
  { t: "Halcyon Labs", c: "SaaS · SEO + Web", r: "+312% organic / 2.4× signups", hue: "from-indigo-500/40 to-violet-500/40" },
  { t: "Northwind Co.", c: "DTC · Brand + Shopify", r: "Rebrand + 1.8× AOV", hue: "from-amber-400/40 to-orange-500/40" },
  { t: "Orbit Health", c: "Healthtech · Mobile", r: "Launched iOS + Android in 14 weeks", hue: "from-sky-400/40 to-cyan-500/40" },
  { t: "Vertex Finance", c: "Fintech · Marketing", r: "CAC -38%, MQLs +220%", hue: "from-emerald-400/40 to-teal-500/40" },
  { t: "Atlas Studio", c: "Agency · Web Platform", r: "Headless rebuild, 99 Lighthouse", hue: "from-fuchsia-500/40 to-pink-500/40" },
  { t: "Lumen Media", c: "Publisher · SEO", r: "1.2M monthly organic sessions", hue: "from-rose-400/40 to-red-500/40" },
];

function Work() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative py-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Selected work</span>
          <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">
            Outcomes we're <span className="text-gradient">proud</span> of.
          </h1>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.t} className="group card-elevated relative overflow-hidden rounded-2xl">
              <div className={`relative h-44 bg-gradient-to-br ${c.hue}`}>
                <div className="absolute inset-0 grid-noise opacity-40" />
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/60 backdrop-blur transition group-hover:bg-gold group-hover:text-gold-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">{c.c}</span>
                <h3 className="mt-2 text-xl font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.r}</p>
              </div>
            </article>
          ))}
        </div>

      </section>

      <CTABanner
        eyebrow="Your story, next"
        title="Want results like these?"
        subtitle="Let's talk about the outcome you're chasing — and the shortest path to get there."
      />
    </SiteLayout>
  );
}
