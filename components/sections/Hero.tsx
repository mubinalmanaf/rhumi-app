"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_CALM } from "@/lib/motion";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.14, delayChildren: 0.1 },
    },
  };
  const line = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0.3 : 1, ease: EASE_CALM },
    },
  };

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex max-w-3xl flex-col items-center"
      >
        <motion.p variants={line} className="eyebrow mb-8">
          A daily companion
        </motion.p>

        <motion.h1
          variants={line}
          className="font-serif text-display-xl font-light text-bone"
        >
          Begin again, quietly.
        </motion.h1>

        <motion.p
          variants={line}
          className="mt-7 max-w-xl text-lead text-bone-dim"
        >
          One verse. One reflection. A companion for the quiet moments of your
          day.
        </motion.p>

        <motion.div
          variants={line}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#invitation"
            className="rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 ease-calm hover:scale-[1.03]"
          >
            Request early access
          </a>
          <a
            href="#ritual"
            className="rounded-full px-5 py-3.5 text-sm text-bone-dim underline-offset-4 transition-colors duration-300 hover:text-bone hover:underline"
          >
            See how it works
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      {!prefersReduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-bone-faint"
          >
            <span className="text-[10px] uppercase tracking-eyebrow">Scroll</span>
            <span className="h-8 w-px bg-gradient-to-b from-bone-faint to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
