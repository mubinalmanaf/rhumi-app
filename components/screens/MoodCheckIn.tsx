/**
 * Faithful mockup of Rhumi's mood check-in — the gentle, human "how are you
 * carrying today?" moment that shapes the day's reflection.
 */
const MOODS = [
  { label: "Tired", active: true },
  { label: "Grateful", active: false },
  { label: "Anxious", active: false },
  { label: "Hopeful", active: false },
  { label: "Heavy", active: false },
  { label: "Still", active: false },
];

export default function MoodCheckIn() {
  return (
    <div className="flex h-full flex-col bg-[#14121C] px-6 pb-8 pt-14 text-bone">
      <span className="text-[11px] uppercase tracking-[0.22em] text-bone-faint">
        Before we begin
      </span>

      <p className="mt-6 font-serif text-[24px] font-light leading-[1.3] text-bone">
        How are you carrying today?
      </p>
      <p className="mt-3 text-[13px] leading-[1.6] text-bone-faint">
        No wrong answer. Whatever you name, that&apos;s where we&apos;ll begin.
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {MOODS.map((m) => (
          <span
            key={m.label}
            className={`rounded-full border px-4 py-2 text-[13px] ${
              m.active
                ? "border-dawn-amber/70 bg-dawn-amber/15 text-bone"
                : "border-bone/15 text-bone-dim"
            }`}
          >
            {m.label}
          </span>
        ))}
      </div>

      <div className="mt-auto rounded-2xl bg-white/[0.04] p-4">
        <p className="text-[13px] leading-[1.6] text-bone-dim">
          <span className="text-bone">Tired is honest.</span> Which kind — the
          body&apos;s tired, the mind&apos;s, or the heart&apos;s?
        </p>
      </div>
    </div>
  );
}
