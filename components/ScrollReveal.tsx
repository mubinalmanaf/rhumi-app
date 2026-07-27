"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { reveal, revealReduced } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before this element settles in. */
  delay?: number;
  as?: "div" | "section" | "li" | "p" | "span";
};

/**
 * A single element that settles into view once, when scrolled near.
 * Fully reduced-motion aware: no travel, quick fade.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: Props) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? revealReduced : reveal;
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
