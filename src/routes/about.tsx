import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Award, Users, Globe2, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TechRankers Studio" },
      { name: "description", content: "We're a senior team of strategists, designers, and engineers building digital products that earn trust and drive growth." },
      { property: "og:title", content: "About — TechRankers Studio" },
      { property: "og:description", content: "Senior team. Real outcomes. Premium craft." },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { i: Award, t: "Craft over volume", d: "We take fewer projects, do deeper work, and ship things we're proud to sign." },
    { i: Users, t: "Senior only", d: "No juniors learning on your dime. Every person on your team has scars and stories." },
    { i: Globe2, t: "Remote, intentional", d: "A globally distributed studio with deep async muscle and tight feedback loops." },
    { i: Heart, t: "Outcomes obsessed", d: "We're hired to move metrics — and we report against them every single week." },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative py-24 md:py-32">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">About TechRankers</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-6xl">
            A studio built for teams who refuse <span className="text-gradient">average</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We're strategists, designers, and engineers who got tired of agency theatre. So we built the studio we always wanted to hire — small, senior, and accountable to outcomes.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="card-elevated rounded-2xl p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <v.i className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="container-x grid gap-10 py-20 md:grid-cols-4">
          {[
            { k: "120+", v: "projects shipped" },
            { k: "9 yrs", v: "studio experience" },
            { k: "18", v: "countries served" },
            { k: "4.9★", v: "average client rating" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl font-semibold text-gold-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
