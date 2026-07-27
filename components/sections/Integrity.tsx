import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

const PRINCIPLES = [
  {
    title: "Yours alone",
    body: "Your reflections and journals are private by design — a quiet space, not a profile to be mined.",
  },
  {
    title: "Honest by design",
    body: "Rhumi writes as a companion to each verse, never as a scholar. It won't invent authority it doesn't have.",
  },
  {
    title: "Made with care",
    body: "Every word, pause, and transition is considered. Calm isn't a theme here — it's the whole point.",
  },
];

export default function Integrity() {
  return (
    <Section id="craft" width="content">
      <div className="mx-auto max-w-reading text-center">
        <ScrollReveal>
          <p className="eyebrow mb-8">Craft &amp; integrity</p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-display-md font-light text-bone">
            Built to be trusted with quiet moments.
          </h2>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.08}>
            <div className="h-full">
              <div className="hairline mb-6" />
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
