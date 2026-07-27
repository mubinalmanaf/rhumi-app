"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

/**
 * The spine of the page: a fixed full-viewport scene borrowed directly from the
 * Rhumi app (src/components/SceneBackdrop.tsx) — a crescent moon and stars over
 * layered pastel hills. It passes from the app's night palette into its warm
 * dawn-meadow as the visitor scrolls, mirroring the daily turning.
 *
 * Under prefers-reduced-motion the scene snaps to a single calm dawn state.
 */

const NIGHT_SKY =
  "linear-gradient(180deg, #141225 0%, #191527 52%, #1B1826 100%)";
// Dawn breaking: the upper sky stays deep indigo (so light copy reads), while
// a warm gold sunrise glows along the horizon. The bright cream meadow lives
// inside the app screens, not here.
const DAWN_SKY =
  "linear-gradient(180deg, #1B1826 0%, #2E2740 32%, #614056 60%, #B4703F 85%, #EAB667 100%)";

// Deterministic stars (upper sky), no Math.random at module scope.
const STARS = Array.from({ length: 40 }, (_, i) => {
  const x = (i * 71.3) % 96;
  const y = (i * 43.7) % 52;
  const size = 1 + ((i * 5) % 3) * 0.5;
  const delay = (i % 8) * 0.8;
  return { x, y, size, delay, key: i };
});

// Four layered hill domes (back → front), anchored to the viewport bottom.
const HILL_PATHS = [
  "M0,210 C240,150 480,180 720,160 C960,140 1200,196 1440,150 L1440,480 L0,480 Z",
  "M0,280 C260,222 520,252 760,232 C1000,216 1240,262 1440,226 L1440,480 L0,480 Z",
  "M0,344 C280,302 540,322 780,306 C1020,293 1260,332 1440,302 L1440,480 L0,480 Z",
  "M0,404 C300,372 560,388 800,376 C1040,367 1280,398 1440,374 L1440,480 L0,480 Z",
];
const NIGHT_HILLS = ["#2C2740", "#243A34", "#20332E", "#1C2B28"];
// Warm-dark silhouettes lit from below by the gold horizon.
const DAWN_HILLS = ["#2E2A44", "#40323E", "#4E3A34", "#5C402C"];

function Hills({ colors }: { colors: string[] }) {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[46vh] w-full"
      viewBox="0 0 1440 480"
      preserveAspectRatio="none"
    >
      {HILL_PATHS.map((d, i) => (
        <path key={i} d={d} fill={colors[i]} />
      ))}
    </svg>
  );
}

function Moon({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="moon-face" x1="30" y1="12" x2="72" y2="90">
          <stop offset="0" stopColor="#FFF4D6" />
          <stop offset="1" stopColor={fill} />
        </linearGradient>
        <mask id="moon-crescent">
          <rect width="100" height="100" fill="black" />
          <circle cx="52" cy="50" r="30" fill="white" />
          <circle cx="38" cy="40" r="30" fill="black" />
        </mask>
      </defs>
      <circle cx="52" cy="50" r="30" fill="url(#moon-face)" mask="url(#moon-crescent)" />
    </svg>
  );
}

export default function SkyBackground() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const nightOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dawnOpacity = useTransform(scrollYProgress, [0.32, 0.95], [0, 1]);
  const starsOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const nightHillsOpacity = useTransform(scrollYProgress, [0.1, 0.55], [1, 0]);
  const dawnHillsOpacity = useTransform(scrollYProgress, [0.35, 0.85], [0, 1]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const moonOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.72]);

  const stars = useMemo(() => STARS, []);

  if (prefersReduced) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{ background: DAWN_SKY }}>
        <div className="absolute right-[12%] top-[12%] h-[13vw] max-h-32 w-[13vw] max-w-32">
          <Moon fill="#EFE0C0" />
        </div>
        <Hills colors={DAWN_HILLS} />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Night sky */}
      <motion.div className="absolute inset-0" style={{ background: NIGHT_SKY, opacity: nightOpacity }} />
      {/* Dawn-meadow sky */}
      <motion.div className="absolute inset-0" style={{ background: DAWN_SKY, opacity: dawnOpacity }} />

      {/* Stars */}
      <motion.div className="absolute inset-0" style={{ opacity: starsOpacity }}>
        {stars.map((s) => (
          <span
            key={s.key}
            className="absolute rounded-full bg-white animate-shimmer"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              opacity: 0.55,
            }}
          />
        ))}
      </motion.div>

      {/* Crescent moon (upper-right) with a soft glow */}
      <motion.div
        className="absolute right-[10%] top-[11%] h-[15vw] max-h-40 w-[15vw] max-w-40"
        style={{ y: moonY, opacity: moonOpacity }}
      >
        <div
          className="absolute inset-[-40%] rounded-full blur-2xl"
          style={{ background: "radial-gradient(closest-side, rgba(241,227,184,0.4), transparent)" }}
        />
        <div className="relative h-full w-full">
          <Moon fill="#E9B65E" />
        </div>
      </motion.div>

      {/* Hills — night silhouette crossfading into pastel meadow */}
      <motion.div className="absolute inset-0" style={{ opacity: nightHillsOpacity }}>
        <Hills colors={NIGHT_HILLS} />
      </motion.div>
      <motion.div className="absolute inset-0" style={{ opacity: dawnHillsOpacity }}>
        <Hills colors={DAWN_HILLS} />
      </motion.div>

      {/* Legibility vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,37,0.5) 0%, transparent 20%, transparent 74%, rgba(20,18,37,0.28) 100%)",
        }}
      />
    </div>
  );
}
