import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { getService, services } from "@/data/services";

const iconMap = { Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } as const;

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — TechRankers` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.title} — TechRankers` },
          { property: "og:description", content: loaderData.service.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-semibold">Service not found</h1>
        <Link to="/" className="mt-6 inline-flex text-gold">Back home</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 opacity-30 grid-noise" />
        <div className="container-x relative py-20 md:py-28">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">TechRankers Service</span>
              </div>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-tight md:text-6xl">{service.title}</h1>
              <p className="mt-4 text-xl text-gold-gradient">{service.tagline}</p>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                  Get a custom proposal <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur">
                  See related work
                </Link>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="card-elevated rounded-2xl p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">What's included</span>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((d: string) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Capabilities</h2>
          <Sparkles className="h-5 w-5 text-gold" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {service.highlights.map((h: string, i: number) => (
            <div key={h} className="card-elevated rounded-2xl p-6">
              <div className="font-display text-sm font-semibold tracking-widest text-gold">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold">{h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Engineered with senior craft. Measured against real outcomes.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-x py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">Our process</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">A predictable rhythm — so you always know what's next.</p>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p: { step: string; detail: string }, i: number) => (
              <li key={p.step} className="relative card-elevated rounded-2xl p-6">
                <span className="font-display text-3xl font-semibold text-gold-gradient">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other services */}
      <section className="container-x py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Explore other services</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {others.map((o) => {
            const OI = iconMap[o.icon as keyof typeof iconMap];
            return (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group card-elevated rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-[var(--gradient-primary)] group-hover:text-primary-foreground transition">
                  <OI className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.tagline}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="card-elevated relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="absolute inset-0 hero-bg opacity-60" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Let's build something that ranks.</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your goals — we'll respond within two business days with a clear, custom plan.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
