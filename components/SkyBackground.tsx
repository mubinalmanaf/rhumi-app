"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

/**
 * The spine of the page: a fixed full-viewport sky that passes from deep night
 * through dawn into warm morning as the visitor scrolls — mirroring Rhumi's
 * daily turning. Built as cross-fading gradient layers (GPU-friendly) rather
 * than one animated multi-stop gradient.
 *
 * Under prefers-reduced-motion the sky snaps to a single calm dawn state.
 */

const NIGHT =
  "linear-gradient(180deg, #08080F 0%, #101024 55%, #1B1B3A 100%)";
const DAWN =
  "linear-gradient(180deg, #201838 0%, #3A2A4D 38%, #7C4A5E 72%, #B06A7A 100%)";
const MORNING =
  "linear-gradient(180deg, #4B4270 0%, #9A6274 34%, #D98C6A 68%, #E8B27D 100%)";

// A scattering of stars for the night layer. Deterministic (no Math.random at
// module scope) so SSR and client markup match.
const STARS = Array.from({ length: 46 }, (_, i) => {
  const x = (i * 97.13) % 100;
  const y = (i * 53.77) % 62; // keep stars in the upper sky
  const size = 1 + ((i * 7) % 3) * 0.5;
  const delay = (i % 9) * 0.7;
  return { x, y, size, delay, key: i };
});

export default function SkyBackground() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Cross-fade the three sky states across the scroll.
  const nightOpacity = useTransform(scrollYProgress, [0, 0.42], [1, 0]);
  const dawnOpacity = useTransform(
    scrollYProgress,
    [0, 0.32, 0.72, 1],
    [0.18, 1, 1, 0.25]
  );
  const morningOpacity = useTransform(scrollYProgress, [0.55, 1], [0, 1]);

  // The sun/glow rises and warms as morning arrives.
  const sunY = useTransform(scrollYProgress, [0, 1], ["18%", "-8%"]);
  const sunOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0, 0.25, 0.65, 0.9]
  );
  const sunScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.25]);
  const starsOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const stars = useMemo(() => STARS, []);

  if (prefersReduced) {
    // Calm static mid-dawn; no scroll coupling, no drift.
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: DAWN }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 82%, rgba(232,178,125,0.5), transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Night — with fading stars */}
      <motion.div
        className="absolute inset-0"
        style={{ background: NIGHT, opacity: nightOpacity }}
      >
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
                opacity: 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Dawn */}
      <motion.div
        className="absolute inset-0"
        style={{ background: DAWN, opacity: dawnOpacity }}
      />

      {/* Morning */}
      <motion.div
        className="absolute inset-0"
        style={{ background: MORNING, opacity: morningOpacity }}
      />

      {/* Rising sun glow */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[80vh]"
        style={{ y: sunY, opacity: sunOpacity, scale: sunScale }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 90%, rgba(232,178,125,0.7), rgba(217,140,106,0.25) 45%, transparent 72%)",
          }}
        />
      </motion.div>

      {/* Subtle top vignette keeps light copy legible over the brightening sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,15,0.55) 0%, transparent 22%, transparent 78%, rgba(8,8,15,0.35) 100%)",
        }}
      />
    </div>
  );
}
