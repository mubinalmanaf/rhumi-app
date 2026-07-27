/**
 * Faithful mockup of Rhumi's daily verse + reflection card.
 * Verse in literary serif; reflection in the app's editorial "companion" voice
 * (never scholarship). Slot-ready to swap for a real screenshot later.
 */
export default function VerseCard() {
  return (
    <div className="flex h-full flex-col bg-[#12101A] px-6 pb-8 pt-14 text-bone">
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.22em] text-bone-faint">
          This morning
        </span>
        <span className="text-[11px] text-bone-faint">Sūrah 94 · 5–6</span>
      </div>

      <div className="mt-10 flex-1">
        <p className="font-serif text-[26px] font-light leading-[1.42] text-bone">
          “For indeed, with hardship will come ease. Indeed, with hardship will
          come ease.”
        </p>

        <div className="mt-7 h-px w-10 bg-bone/25" />

        <p className="mt-7 text-[14px] leading-[1.7] text-bone-dim">
          Notice it is said twice. Not to convince you — but because on the
          hardest days, once is easy to miss. The ease is not somewhere else.
          It is folded into the same hour as the weight.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-6 text-bone-faint">
        <span className="text-[13px]">♡ Save</span>
        <span className="text-[13px]">✎ Journal</span>
        <span className="text-[13px]">↻ Flip for Arabic</span>
      </div>
    </div>
  );
}
