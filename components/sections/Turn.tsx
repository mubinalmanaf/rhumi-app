import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

/** The pivot. Sky begins to lighten. The essence, stated once, plainly. */
export default function Turn() {
  return (
    <Section id="turn" size="tall" width="reading" className="text-center">
      <ScrollReveal>
        <p className="eyebrow mb-10">The turn</p>
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <p className="mx-auto max-w-3xl font-serif text-display-md font-light leading-[1.25] text-bone">
          Rhumi is that quiet —{" "}
          <span className="italic text-dawn-amber">returned to you</span> each
          day.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.14}>
        <p className="mx-auto mt-8 max-w-md text-lead text-bone-dim">
          Not another feed. A single, unhurried moment that asks nothing of you
          but your attention.
        </p>
      </ScrollReveal>
    </Section>
  );
}
