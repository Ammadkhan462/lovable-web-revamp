import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-primary)] text-primary-foreground font-display font-bold shadow-[var(--shadow-glow)]">
        TR
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold animate-pulse" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Tech<span className="text-gold-gradient">Rankers</span>
      </span>
    </Link>
  );
}
