import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import WaitlistForm from "@/components/WaitlistForm";

export default function Invitation() {
  return (
    <Section id="invitation" size="tall" width="reading">
      <ScrollReveal>
        <div className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-ink/55 p-8 text-center shadow-2xl backdrop-blur-xl md:p-14">
          <p className="eyebrow mb-8">The invitation</p>

          <h2 className="font-serif text-display-md font-light leading-[1.1] text-bone">
            The beta opens soon.
            <br />
            Be among the first to begin.
          </h2>

          <p className="mx-auto mb-11 mt-7 max-w-md text-lead text-bone-dim">
            Leave your email and we&apos;ll open the door quietly, when it&apos;s
            ready.
          </p>

          <WaitlistForm />
        </div>
      </ScrollReveal>
    </Section>
  );
}
