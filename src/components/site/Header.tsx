import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap = { Search, Code2, TrendingUp, Palette, Smartphone, Megaphone } as const;

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            Home
          </Link>

          {/* Services hover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm transition",
                servicesOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[min(880px,90vw)] -translate-x-1/2 pt-3 animate-fade-in">
                <div className="card-elevated overflow-hidden rounded-2xl p-2">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => {
                      const Icon = iconMap[s.icon as keyof typeof iconMap];
                      return (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-surface-elevated"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                              {s.title}
                              <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                            </span>
                            <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">{s.tagline}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 flex items-center justify-between rounded-xl bg-surface p-3 text-xs">
                    <span className="text-muted-foreground">Not sure what you need?</span>
                    <Link to="/contact" onClick={() => setServicesOpen(false)} className="font-semibold text-gold hover:underline">
                      Book a free consult →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link key={l.to} to={l.to} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-[var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-95 lg:inline-flex"
          >
            Start a project
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-sm text-foreground">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between rounded-md px-2 py-3 text-sm text-foreground"
            >
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-2 border-l border-border pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2 text-sm text-muted-foreground"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-[var(--gradient-primary)] px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
