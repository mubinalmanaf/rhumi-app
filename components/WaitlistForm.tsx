"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WAITLIST, isWaitlistConfigured } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const prefersReduced = useReducedMotion();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    // Honeypot tripped — silently no-op with a success face.
    if (company.trim() !== "") {
      setStatus("success");
      return;
    }

    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      if (isWaitlistConfigured()) {
        // FormSubmit AJAX endpoint — JSON in, JSON out, CORS-enabled.
        const res = await fetch(WAITLIST.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: value,
            _subject: WAITLIST.subject,
            _template: "table",
            _captcha: "false",
            _honey: company, // honeypot; FormSubmit drops the submission if filled
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || (data.success && data.success !== "true")) {
          throw new Error("submit failed");
        }
      }
      // Unconfigured = stub mode: validate + acknowledge, send nowhere.
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Couldn't send that just now. Please try again.");
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-dawn-amber/30 bg-dawn-amber/10 px-6 py-8 text-center"
          >
            <p className="font-serif text-2xl font-light text-bone">
              You&apos;re on the list.
            </p>
            <p className="mt-3 text-sm text-bone-dim">
              We&apos;ll be in touch when the beta opens. Until then — be gentle
              with your days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={false}
            className="flex flex-col gap-3"
            noValidate
          >
            {/* Honeypot — visually hidden, off the tab order */}
            <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                className="w-full flex-1 rounded-full border border-bone/20 bg-white/[0.04] px-5 py-3.5 text-bone placeholder:text-bone-faint focus:border-dawn-amber/60 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-bone px-6 py-3.5 text-sm font-medium text-ink transition-transform duration-300 ease-calm hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Request access"}
              </button>
            </div>

            <p
              className={`min-h-[1.25rem] text-center text-sm ${
                status === "error" ? "text-dawn-ember" : "text-bone-faint"
              }`}
              role={status === "error" ? "alert" : undefined}
            >
              {status === "error"
                ? message
                : "Early access. No noise, no spam — that would rather defeat the point."}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
