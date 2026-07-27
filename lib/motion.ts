import type { Variants } from "framer-motion";

/**
 * Shared motion language for Rhumi.
 * Slow, eased, intentional — never bouncy. Every consumer must degrade
 * gracefully under prefers-reduced-motion (see useReveal below).
 */

export const EASE_CALM = [0.22, 1, 0.36, 1] as const;
export const EASE_GENTLE = [0.4, 0, 0.2, 1] as const;

/** A quiet "settle in" — content rises a touch and fades in. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_CALM },
  },
};

/** Stagger container for grouped reveals (lines of copy, principle cards). */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

/** Individual child of a stagger group. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_CALM },
  },
};

/** Reduced-motion equivalents — no travel, minimal/instant fade. */
export const revealReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const staggerChildReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};
