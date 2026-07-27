/**
 * Faithful mockup of Rhumi's daily ReflectionCard (light "meadow" theme).
 * Real seeded content: verse 65:3 + its reflection/prompt from the app's
 * content library. Glyphs + type match src/components/ReflectionCard.tsx.
 */
export default function VerseCard() {
  return (
    <div className="flex h-full flex-col bg-app-cream px-5 pb-6 pt-14 text-app-plum">
      <div className="flex-1 rounded-[22px] bg-app-card px-5 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-app-plumsoft">
          Today&apos;s reflection
        </span>

        <p className="mt-4 font-serif text-[19px] leading-[1.5] text-app-plum">
          &ldquo;And whoever relies upon Allah - then He is sufficient for
          him.&rdquo;
        </p>

        <div className="mt-3 flex items-center gap-2 text-[11px]">
          <span className="text-app-plumsoft">Qur&apos;an 65:3</span>
          <span className="text-app-gold">ⓘ Sources</span>
        </div>

        <div className="mt-4 h-px bg-app-hair" />

        <p className="mt-4 text-[12.5px] leading-[1.6] text-app-plumsoft">
          Uncertainty about the future — work, money, a decision — can be
          exhausting. There is relief in doing your part and letting go of what
          was never yours to control.
        </p>

        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-app-plumsoft">
          Carry this today
        </p>
        <p className="mt-1.5 font-serif text-[14px] italic leading-[1.55] text-app-plum">
          What is one outcome you can do your best on, then release?
        </p>

        <div className="mt-5 flex items-center gap-6 border-t border-app-hair pt-4 text-[12px] text-app-plumsoft">
          <span>♡ Save</span>
          <span>↗ Share</span>
          <span>✎ Journal</span>
        </div>
      </div>
    </div>
  );
}
