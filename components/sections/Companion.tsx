import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

export default function Companion() {
  return (
    <Section id="companion" width="content">
      <div className="mx-auto max-w-reading text-center">
        <ScrollReveal>
          <p className="eyebrow mb-8">The companion</p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-display-md font-light text-bone">
            Not a search engine.
            <br />A companion.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-lg text-lead text-bone-dim">
            Ask what&apos;s on your heart. Rhumi listens, reflects, and explains —
            and never pretends to know more than it does.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2">
        {/* The old way */}
        <ScrollReveal>
          <div className="h-full rounded-3xl border border-white/8 bg-white/[0.02] p-7">
            <p className="text-xs uppercase tracking-eyebrow text-bone-faint">
              A search engine
            </p>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-bone-faint">
              <span>why be patient</span>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "10 tips to be more patient",
                "Patience — definition & synonyms",
                "Sponsored · The patience masterclass",
              ].map((r) => (
                <li key={r} className="text-sm text-bone-faint/80">
                  <span className="text-[#8aa0d6]">{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-bone-faint/70">
              A wall of answers. None of them yours.
            </p>
          </div>
        </ScrollReveal>

        {/* Rhumi */}
        <ScrollReveal delay={0.08}>
          <div
            className="h-full rounded-3xl border border-dawn-amber/25 p-7"
            style={{
              background:
                "linear-gradient(180deg, rgba(233,182,94,0.12), rgba(127,168,142,0.06))",
            }}
          >
            <p className="text-xs uppercase tracking-eyebrow text-dawn-amber">
              Rhumi
            </p>
            <div className="mt-5 rounded-lg border border-bone/12 px-3 py-2 text-sm text-bone-dim">
              Why does it ask me to be patient? I&apos;m struggling.
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-bone-dim">
              Patience here isn&apos;t gritting your teeth until it passes. It
              carries the sense of{" "}
              <span className="text-bone">staying</span> — remaining with what&apos;s
              hard without abandoning yourself in it.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-bone-dim">
              Shall we sit with the verse this comes from?
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
