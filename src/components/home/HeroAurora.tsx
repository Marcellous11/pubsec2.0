"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Ambient hero motion: cursor-tracked amber spotlight + aurora drift +
 * scrolling hairline grid + crossing scan lines. All transform/opacity —
 * compositor only.
 */
export function HeroAurora() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Raw mouse position (0..1 within the hero), seeded center-ish.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.35);

  // Springs smooth the cursor — feels alive, not jittery.
  const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });

  // Convert 0..1 → percentage strings for the spotlight position
  const spotX = useTransform(sx, (v) => `${v * 100}%`);
  const spotY = useTransform(sy, (v) => `${v * 100}%`);

  // Inverse parallax for the graphite haze — drifts opposite the cursor
  const hazeX = useTransform(sx, (v) => `${(0.5 - v) * 60}px`);
  const hazeY = useTransform(sy, (v) => `${(0.5 - v) * 60}px`);

  // Grid parallax — small shift so lines feel like they're being pushed
  const gridX = useTransform(sx, (v) => `${(v - 0.5) * 24}px`);
  const gridY = useTransform(sy, (v) => `${(v - 0.5) * 24}px`);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    let pendingX = 0.5;
    let pendingY = 0.35;
    let pending = false;
    const flush = () => {
      mx.set(pendingX);
      my.set(pendingY);
      pending = false;
    };
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      // Outside the hero? Drift back toward center but keep tracking softly.
      if (ny < -0.2 || ny > 1.2) return;
      pendingX = Math.max(-0.05, Math.min(1.05, nx));
      pendingY = Math.max(-0.05, Math.min(1.05, ny));
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(flush);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mx, my]);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Continuously scrolling hairline grid + cursor parallax */}
      <motion.div
        className="absolute inset-0 hair-grid"
        style={{ x: gridX, y: gridY }}
        animate={{ backgroundPosition: ["0px 0px", "96px 96px"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />

      {/* Slow rotating conic sweep */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[1500px] w-[1500px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(235,169,65,0) 0deg, rgba(235,169,65,0.10) 50deg, rgba(235,169,65,0) 110deg, rgba(235,169,65,0) 360deg)",
          maskImage:
            "radial-gradient(circle at center, black 10%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 10%, transparent 65%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      />

      {/* Cursor-tracked amber spotlight — the headline reactive layer */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          background: useTransform(
            [spotX, spotY] as never,
            ([x, y]: string[]) =>
              `radial-gradient(circle 520px at ${x} ${y}, rgba(235,169,65,0.42) 0%, rgba(235,169,65,0.16) 28%, rgba(235,169,65,0) 60%)`,
          ),
        }}
      />

      {/* Cursor-tracked tight core glow */}
      <motion.div
        className="absolute inset-0 mix-blend-screen will-change-transform"
        style={{
          background: useTransform(
            [spotX, spotY] as never,
            ([x, y]: string[]) =>
              `radial-gradient(circle 180px at ${x} ${y}, rgba(255,200,110,0.55) 0%, rgba(255,200,110,0) 70%)`,
          ),
        }}
      />

      {/* Counter-drifting graphite haze — pulls away from cursor */}
      <motion.div
        className="absolute top-12 left-1/2 h-[920px] w-[920px] -translate-x-1/2 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(28,30,33,0.75) 0%, rgba(28,30,33,0.30) 40%, rgba(14,16,18,0) 70%)",
          x: hazeX,
          y: hazeY,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, ease: [0.42, 0, 0.58, 1], repeat: Infinity }}
      />

      {/* Primary amber scan line */}
      <motion.div
        className="absolute inset-x-0 h-px will-change-transform"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(235,169,65,0) 4%, rgba(235,169,65,0.95) 50%, rgba(235,169,65,0) 96%, transparent 100%)",
          boxShadow: "0 0 18px rgba(235,169,65,0.5)",
          mixBlendMode: "screen",
        }}
        animate={{
          y: ["-2%", "102%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          times: [0, 0.08, 0.92, 1],
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      {/* Secondary scan — opposite direction */}
      <motion.div
        className="absolute inset-x-0 h-px will-change-transform"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(235,169,65,0) 6%, rgba(235,169,65,0.4) 50%, rgba(235,169,65,0) 94%, transparent 100%)",
          mixBlendMode: "screen",
        }}
        animate={{
          y: ["104%", "-4%"],
          opacity: [0, 0.85, 0.85, 0],
        }}
        transition={{
          duration: 9,
          times: [0, 0.1, 0.9, 1],
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 2,
          delay: 2,
        }}
      />
    </div>
  );
}
