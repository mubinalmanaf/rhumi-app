/**
 * Faithful mockup of Rhumi's companion (light theme) — the Reflect / Ask
 * chat. User messages are bubbled in accentSoft; the companion's replies flow
 * as content (not bubbled). Matches app/assistant.tsx.
 */
export default function CompanionChat() {
  return (
    <div className="flex h-full flex-col bg-app-cream px-4 pb-5 pt-14 text-app-plum">
      <div className="flex items-center justify-between px-1">
        <span className="font-sans text-[14px] font-semibold text-app-plum">
          Reflect together
        </span>
        <div className="flex items-center gap-3 text-[13px] text-app-gold">
          <span>☰</span>
          <span>Close</span>
        </div>
      </div>

      <div className="mt-4 flex-1 space-y-4 overflow-hidden">
        {/* framing card */}
        <div className="rounded-[18px] bg-app-subtle px-3.5 py-3">
          <p className="text-[11.5px] leading-[1.55] text-app-plumsoft">
            I&apos;m a reflection companion — not a scholar or a therapist. I
            share wisdom from the Qur&apos;an, gently.
          </p>
        </div>

        {/* user bubble */}
        <div className="ml-auto max-w-[84%] rounded-[20px] bg-app-goldsoft px-4 py-2.5">
          <p className="text-[12.5px] leading-[1.5] text-app-plum">
            Why does it ask me to be patient? I&apos;m struggling with that right
            now.
          </p>
        </div>

        {/* companion reply — flowing, not bubbled */}
        <div className="max-w-[94%] space-y-2.5">
          <p className="text-[12.5px] leading-[1.6] text-app-plumsoft">
            Patience here isn&apos;t gritting your teeth until it passes. The
            word carries the sense of{" "}
            <span className="text-app-plum">staying</span> — remaining with
            what&apos;s hard without abandoning yourself in it.
          </p>
          <p className="text-[12.5px] leading-[1.6] text-app-plumsoft">
            Would it help to sit with the verse this comes from?
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-[20px] bg-app-card px-4 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        <span className="text-[12.5px] text-app-plumsoft">What&apos;s on your mind?</span>
        <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg bg-app-gold text-app-card">
          ↑
        </span>
      </div>
    </div>
  );
}
