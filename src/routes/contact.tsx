import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TechRankers" },
      { name: "description", content: "Tell us about your project. We respond within two business days with a clear plan." },
      { property: "og:title", content: "Contact — TechRankers" },
      { property: "og:description", content: "Start a project with TechRankers." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Contact</span>
          <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">
            Let's build something <span className="text-gold-gradient">remarkable</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Share a few details — we'll respond within two business days with a custom plan and timeline.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="card-elevated rounded-2xl p-7">
            <h3 className="text-lg font-semibold">Reach us directly</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-gold" /> hello@techrankers.com</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-gold" /> +1 (555) 010-2024</li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold" /> Remote · Global · HQ in NYC</li>
            </ul>
          </div>
          <div className="card-elevated mt-5 rounded-2xl p-7">
            <h3 className="text-lg font-semibold">What happens next?</h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><span className="font-semibold text-foreground">1.</span> A 20-minute intro call to understand your goals.</li>
              <li><span className="font-semibold text-foreground">2.</span> A written proposal with scope, timeline, and pricing.</li>
              <li><span className="font-semibold text-foreground">3.</span> Kickoff within two weeks — first results inside 30 days.</li>
            </ol>
          </div>
        </div>

        <form
          className="lg:col-span-7 card-elevated rounded-2xl p-7"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div className="grid place-items-center py-16 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--gradient-gold)] text-gold-foreground">
                <Send className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-2xl font-semibold">Thanks — message received.</h3>
              <p className="mt-2 max-w-md text-muted-foreground">A strategist will reply within two business days. In the meantime, you'll get a confirmation at the email you provided.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
              </div>
              <Field label="Company" name="company" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Interested in</label>
                <select className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:border-primary focus:outline-none">
                  <option>Not sure yet — recommend something</option>
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold">Tell us about your project</label>
                <textarea rows={5} className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:border-primary focus:outline-none" placeholder="Goals, timeline, budget range..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-95">
                Send message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-gold" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
