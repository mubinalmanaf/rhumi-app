/**
 * Faithful mockup of Rhumi's mood check-in (light theme) — the mandatory,
 * warm "How are you arriving?" flow. Copy + moods from
 * src/features/moods/{MoodCheckInModal,moodPrompts}.ts and content/taxonomy.yaml.
 */
const MOODS = [
  { label: "Anxious", active: true },
  { label: "Tired", active: false },
  { label: "Lonely", active: false },
  { label: "Stressed", active: false },
  { label: "Hopeful", active: false },
  { label: "Grateful", active: false },
  { label: "Motivated", active: false },
];

export default function MoodCheckIn() {
  return (
    <div className="flex h-full flex-col bg-app-cream px-5 pb-6 pt-14 text-app-plum">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-app-plumsoft">
        Check in
      </span>

      <p className="mt-4 font-sans text-[19px] font-semibold leading-[1.25] text-app-plum">
        How are you arriving this morning?
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {MOODS.map((m) => (
          <span
            key={m.label}
            className={`rounded-full px-3.5 py-2 text-[12px] ${
              m.active
                ? "border border-app-gold bg-app-goldsoft font-semibold text-app-gold"
                : "border border-transparent bg-app-subtle text-app-plum"
            }`}
          >
            {m.label}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-[18px] bg-app-subtle p-4">
        <p className="text-[12.5px] leading-[1.6] text-app-plum">
          Anxiety is often the heart trying to hold tomorrow before it arrives.
          Just naming it, like you did, is already a kind of relief. 🌙
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-2.5 pt-5">
        <span className="rounded-xl bg-app-gold py-3 text-center text-[13px] font-semibold text-app-card">
          See my reflection
        </span>
        <span className="rounded-xl bg-app-subtle py-3 text-center text-[13px] font-medium text-app-plum">
          Write about it
        </span>
      </div>
    </div>
  );
}
