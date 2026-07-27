"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import type { MotionValue } from "framer-motion";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import DeviceMockup from "@/components/DeviceMockup";
import MoodCheckIn from "@/components/screens/MoodCheckIn";
import VerseCard from "@/components/screens/VerseCard";
import CompanionChat from "@/components/screens/CompanionChat";

type Beat = {
  step: string;
  title: string;
  body: string;
  screen: ReactNode;
};

const BEATS: Beat[] = [
  {
    step: "01",
    title: "Arrive as you are.",
    body: "It begins with a gentle check-in: how are you carrying today? Rhumi meets the mood you name — not the one you think you should have.",
    screen: <MoodCheckIn />,
  },
  {
    step: "02",
    title: "Receive something for this moment.",
    body: "A verse and a reflection, chosen for how you feel — written as a companion beside you, never a lecture over you.",
    screen: <VerseCard />,
  },
  {
    step: "03",
    title: "Sit with it.",
    body: "Journal a thought, or ask what's on your heart. Rhumi helps you understand the why, gently — and leaves the rest to you.",
    screen: <CompanionChat />,
  },
];

function Screen({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: ReactNode;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const scale = useTransform(progress, range, [0.97, 1, 1, 0.97]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      {children}
    </motion.div>
  );
}

export default function Ritual() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <Section id="ritual" width="content">
      <div className="mx-auto max-w-reading text-center">
        <ScrollReveal>
          <p className="eyebrow mb-8">The ritual</p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-display-md font-light text-bone">
            Three quiet steps, once a day.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-md text-lead text-bone-dim">
            No streaks to protect. No feed to finish. Just a moment that&apos;s
            yours.
          </p>
        </ScrollReveal>
      </div>

      {/* Desktop: sticky device choreographed against scrolling copy */}
      <div ref={ref} className="relative mt-20 hidden md:block">
        <div className="grid grid-cols-2 gap-12">
          {/* Sticky device column */}
          <div className="relative">
            <div className="sticky top-0 flex h-screen items-center justify-center">
              <div className="relative w-full max-w-[300px]">
                <DeviceMockup>
                  {prefersReduced ? (
                    <VerseCard />
                  ) : (
                    <>
                      <Screen progress={scrollYProgress} range={[0, 0.08, 0.3, 0.38]}>
                        <MoodCheckIn />
                      </Screen>
                      <Screen progress={scrollYProgress} range={[0.34, 0.42, 0.64, 0.72]}>
                        <VerseCard />
                      </Screen>
                      <Screen progress={scrollYProgress} range={[0.68, 0.76, 0.98, 1]}>
                        <CompanionChat />
                      </Screen>
                    </>
                  )}
                </DeviceMockup>
              </div>
            </div>
          </div>

          {/* Scrolling copy column */}
          <div>
            {BEATS.map((b) => (
              <div
                key={b.step}
                className="flex h-screen flex-col justify-center"
              >
                <span className="font-serif text-5xl font-light text-dawn-amber/70">
                  {b.step}
                </span>
                <h3 className="mt-6 font-serif text-display-md font-light text-bone">
                  {b.title}
                </h3>
                <p className="mt-6 max-w-md text-lead text-bone-dim">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: simple stacked beats */}
      <div className="mt-16 space-y-24 md:hidden">
        {BEATS.map((b) => (
          <div key={b.step}>
            <DeviceMockup className="max-w-[240px]">{b.screen}</DeviceMockup>
            <div className="mt-10 text-center">
              <span className="font-serif text-4xl font-light text-dawn-amber/70">
                {b.step}
              </span>
              <h3 className="mt-4 font-serif text-3xl font-light text-bone">
                {b.title}
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-lead text-bone-dim">
                {b.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
