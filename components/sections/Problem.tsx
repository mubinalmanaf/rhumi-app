"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

// The static of modern life — scattered, overlapping, insistent.
const NOISE = [
  { t: "breaking", x: "8%", y: "12%", s: 1.1 },
  { t: "unread (47)", x: "62%", y: "8%", s: 0.9 },
  { t: "now trending", x: "30%", y: "24%", s: 1 },
  { t: "urgent", x: "78%", y: "30%", s: 1.2 },
  { t: "just for you", x: "12%", y: "40%", s: 0.85 },
  { t: "don't miss", x: "68%", y: "52%", s: 1.05 },
  { t: "reply now", x: "40%", y: "62%", s: 0.9 },
  { t: "keep scrolling", x: "18%", y: "72%", s: 1 },
  { t: "more", x: "80%", y: "70%", s: 1.3 },
  { t: "notifications on", x: "48%", y: "84%", s: 0.85 },
];

export default function Problem() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Noise thins out and drifts up as you arrive on the still line.
  const noiseOpacity = useTransform(scrollYProgress, [0, 0.85], [0.5, 0]);
  const noiseBlur = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const noiseFilter = useTransform(noiseBlur, (b) => `blur(${b}px)`);

  return (
    <Section id="problem" size="tall" width="reading">
      <div ref={ref} className="relative">
        {/* Noise cloud */}
        {!prefersReduced && (
          <motion.div
            aria-hidden
            style={{ opacity: noiseOpacity, filter: noiseFilter }}
            className="pointer-events-none absolute inset-x-[-8%] -top-24 bottom-0 select-none"
          >
            {NOISE.map((n) => (
              <span
                key={n.t}
                className="absolute whitespace-nowrap font-sans text-bone-faint"
                style={{
                  left: n.x,
                  top: n.y,
                  fontSize: `${n.s}rem`,
                  opacity: 0.55,
                }}
              >
                {n.t}
              </span>
            ))}
          </motion.div>
        )}

        {/* The still line emerges */}
        <div className="relative z-10 py-16">
          <ScrollReveal>
            <p className="eyebrow mb-8">The problem</p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-serif text-display-lg font-light leading-[1.1] text-bone">
              The world got louder.
              <br />
              <span className="text-bone-dim">Stillness got harder to find.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-8 max-w-reading text-lead text-bone-dim">
              We reach for our phones to feel calm and find more noise. Somewhere
              in the scroll, the quiet part of us stops being heard.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
