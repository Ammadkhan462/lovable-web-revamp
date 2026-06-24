import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/**
 * Pure-CSS 3D rotating wireframe sphere built from stacked rings.
 * - Slowly auto-rotates on Y axis.
 * - Subtly reacts to vertical scroll position.
 * - Cyan/teal palette to match brand.
 * - Disabled on devices without hover (mobile/tablet) to save battery.
 */
export function Hero3DSphere() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollY } = useScroll();
  const yRaw = useTransform(scrollY, [0, 800], [0, 120]);
  const rotRaw = useTransform(scrollY, [0, 800], [0, 40]);
  const y = useSpring(yRaw, { stiffness: 60, damping: 20 });
  const tilt = useSpring(rotRaw, { stiffness: 60, damping: 20 });

  if (!enabled) return null;

  const rings = 14;

  return (
    <motion.div
      aria-hidden
      style={{ y, willChange: "transform" }}
      className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-end pr-4 lg:pr-24"
    >
      <motion.div
        style={{ rotateX: tilt, transformStyle: "preserve-3d", perspective: 1200 }}
        className="relative h-[560px] w-[560px] opacity-70"
      >
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-0"
        >
          {Array.from({ length: rings }).map((_, i) => {
            const angle = (180 / rings) * i;
            return (
              <div
                key={i}
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: `oklch(0.72 0.18 210 / ${0.18 + (i % 3) * 0.08})`,
                  transform: `rotateY(${angle}deg)`,
                }}
              />
            );
          })}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (180 / 8) * i;
            return (
              <div
                key={`h-${i}`}
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: `oklch(0.66 0.19 215 / ${0.1 + (i % 2) * 0.08})`,
                  transform: `rotateX(${angle}deg)`,
                }}
              />
            );
          })}
        </motion.div>
        {/* core glow */}
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.18 210 / 0.55), transparent 70%)" }}
        />
      </motion.div>
    </motion.div>
  );
}
