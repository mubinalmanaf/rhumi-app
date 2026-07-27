"use client";

import { useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";

/** Minimal fixed header. Transparent at rest; a whisper of backdrop once scrolled. */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-ink/40 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="text-lg text-bone" aria-label="Rhumi, home">
          <Wordmark />
        </a>
        <a
          href="#invitation"
          className="rounded-full border border-bone/20 px-4 py-1.5 text-sm text-bone transition-colors duration-300 hover:border-bone/50 hover:bg-white/5"
        >
          Request access
        </a>
      </div>
    </header>
  );
}
