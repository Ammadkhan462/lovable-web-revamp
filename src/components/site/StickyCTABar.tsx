import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X, Users } from "lucide-react";

const DISMISS_KEY = "tr-sticky-cta-dismissed";

export function StickyCTABar() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [teamsCount] = useState(() => 3 + Math.floor(Math.random() * 3)); // 3-5

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") {
        setDismissed(true);
        return;
      }
    } catch {}

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY / Math.max(1, doc.scrollHeight - window.innerHeight);
      setShow(scrolled > 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed inset-x-0 bottom-4 z-[9990] mx-auto flex w-[min(680px,calc(100%-1.5rem))] items-center gap-3 rounded-full border border-primary/30 bg-background/80 px-3 py-2 pl-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl md:gap-4 md:py-2.5"
          style={{
            backgroundImage:
              "linear-gradient(120deg, oklch(0.16 0.03 240 / 0.85), oklch(0.18 0.04 215 / 0.85))",
          }}
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <div className="flex min-w-0 flex-1 items-center gap-2 text-xs text-primary-foreground/95 md:text-sm">
            <Users className="hidden h-4 w-4 shrink-0 text-cyan-300 sm:block" />
            <p className="truncate">
              <strong className="font-semibold text-cyan-300">{teamsCount} teams</strong>{" "}
              started projects this week
              <span className="mx-2 hidden text-primary-foreground/40 sm:inline">·</span>
              <span className="hidden text-gold sm:inline">Spots limited</span>
            </p>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-[0_0_20px_-2px_rgba(94,234,232,0.6)] transition hover:scale-[1.04] md:text-sm"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Claim a spot</span>
            <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-primary-foreground/60 transition hover:bg-white/10 hover:text-primary-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
