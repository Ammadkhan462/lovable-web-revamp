import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Motion";
import { ParticleField } from "@/components/site/ParticleField";
import { ServiceFlipCard } from "@/components/site/ServiceFlipCard";
import { services } from "@/data/services";



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
