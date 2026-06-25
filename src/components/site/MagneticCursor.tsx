import { useEffect, useRef } from "react";

/**
 * Premium magnetic cursor + fading cyan particle trail.
 * - Hidden on touch devices.
 * - Cursor dot warps toward interactive elements (a, button, [data-magnetic]).
 * - Trail particles fade and shrink for a glowing comet feel.
 */
export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let w = (canvas.width = window.innerWidth * devicePixelRatio);
    let h = (canvas.height = window.innerHeight * devicePixelRatio);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    const onResize = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    window.addEventListener("resize", onResize);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let targetEl: Element | null = null;

    const particles: { x: number; y: number; life: number; max: number; vx: number; vy: number }[] = [];

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // hovered interactive el
      const el = document.elementFromPoint(mouseX, mouseY);
      targetEl = el?.closest("a, button, [data-magnetic], input, textarea, select, label") ?? null;

      // spawn particles
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          life: 0,
          max: 40 + Math.random() * 30,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
        });
      }
      if (particles.length > 220) particles.splice(0, particles.length - 220);
    };

    const onDown = () => ring.classList.add("cursor-ring--down");
    const onUp = () => ring.classList.remove("cursor-ring--down");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf = 0;
    const tick = () => {
      // magnetic warp toward target center
      let tx = mouseX;
      let ty = mouseY;
      let scale = 1;
      if (targetEl) {
        const r = targetEl.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        tx = mouseX + (cx - mouseX) * 0.35;
        ty = mouseY + (cy - mouseY) * 0.35;
        scale = 2.4;
        ring.classList.add("cursor-ring--hover");
      } else {
        ring.classList.remove("cursor-ring--hover");
      }

      dotX += (tx - dotX) * 0.32;
      dotY += (ty - dotY) * 0.32;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${dotX - 5}px, ${dotY - 5}px, 0) scale(${scale})`;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;

      // particles
      ctx.clearRect(0, 0, w, h);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        const t = 1 - p.life / p.max;
        if (t <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const radius = 3 * t * devicePixelRatio;
        const grad = ctx.createRadialGradient(
          p.x * devicePixelRatio,
          p.y * devicePixelRatio,
          0,
          p.x * devicePixelRatio,
          p.y * devicePixelRatio,
          radius * 4,
        );
        grad.addColorStop(0, `rgba(94, 234, 232, ${0.55 * t})`);
        grad.addColorStop(1, "rgba(94, 234, 232, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x * devicePixelRatio, p.y * devicePixelRatio, radius * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9998] hidden md:block" aria-hidden />
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border border-cyan-300/70 mix-blend-difference transition-[border-color,background-color] duration-200 md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_4px_rgba(94,234,232,0.7)] md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
