/**
 * Faithful mockup of Rhumi's companion (Ask / Reflect). A guiding, warm voice
 * that explains the "why" — never a search engine, never claiming authority it
 * doesn't have.
 */
export default function CompanionChat() {
  return (
    <div className="flex h-full flex-col bg-[#100E18] px-5 pb-6 pt-14 text-bone">
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.22em] text-bone-faint">
          Reflect
        </span>
        <span className="text-[11px] text-bone-faint">Anxiety ·</span>
      </div>

      <div className="mt-6 flex-1 space-y-4 overflow-hidden">
        {/* user */}
        <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-dawn-rose/20 px-4 py-3">
          <p className="text-[13px] leading-[1.55] text-bone">
            Why does it say to be patient? I&apos;m struggling with that right
            now.
          </p>
        </div>

        {/* companion */}
        <div className="mr-auto max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.05] px-4 py-3">
          <p className="text-[13px] leading-[1.6] text-bone-dim">
            Patience here isn&apos;t gritting your teeth until it passes. The
            word carries the sense of{" "}
            <span className="text-bone">staying</span> — remaining with what&apos;s
            hard without abandoning yourself in it.
          </p>
          <p className="mt-2.5 text-[13px] leading-[1.6] text-bone-dim">
            Would it help to sit with the verse this comes from, or talk through
            what feels heaviest today?
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-bone/12 px-4 py-2.5">
        <span className="text-[13px] text-bone-faint">Say what&apos;s on your heart…</span>
        <span className="ml-auto text-dawn-amber">↑</span>
      </div>
    </div>
  );
}
