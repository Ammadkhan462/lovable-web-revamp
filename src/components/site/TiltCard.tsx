import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt degrees
};

export function TiltCard({ children, className, max = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 220, damping: 18, mass: 0.6 };
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), springConfig);
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), springConfig);
  const shadowX = useTransform(ry, [-max, max], [20, -20]);
  const shadowY = useTransform(rx, [-max, max], [-20, 20]);
  const boxShadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]: number[]) =>
      `${sx}px ${sy + 24}px 60px -20px oklch(0.55 0.22 215 / 0.45), 0 8px 20px -10px oklch(0.12 0.02 240 / 0.25)`,
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    // disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        boxShadow,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
