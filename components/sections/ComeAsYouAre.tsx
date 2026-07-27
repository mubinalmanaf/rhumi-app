import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

const POINTS = [
  {
    title: "English-first",
    body: "Written plainly, for the curious and the returning alike. Nothing assumes you already believe.",
  },
  {
    title: "The original, if you wish",
    body: "The Arabic of every verse is a single tap away — there when you want it, never in the way.",
  },
  {
    title: "No pressure to arrive",
    body: "Wherever you are on the path — asking, wondering, or simply tired — you're welcome here.",
  },
];

export default function ComeAsYouAre() {
  return (
    <Section id="welcome" width="content">
      <div className="mx-auto max-w-reading text-center">
        <ScrollReveal>
          <p className="eyebrow mb-8">For the curious</p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-display-md font-light text-bone">
            No prerequisites.
            <br />
            No assumptions.
          </h2>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/5 md:grid-cols-3">
        {POINTS.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.08}>
            <div className="h-full bg-ink/40 p-8">
              <h3 className="font-serif text-xl font-normal text-bone">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-bone-dim">
                {p.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
