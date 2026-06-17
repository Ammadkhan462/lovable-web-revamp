import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A modern digital studio engineering search, brand, and product growth for ambitious teams.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground transition hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/work" className="text-muted-foreground hover:text-foreground">Work</Link></li>
            <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@techrankers.com</li>
            <li>+1 (555) 010-2024</li>
            <li>Remote · Global</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} TechRankers Studio. All rights reserved.</p>
          <p>Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
