type Props = {
  className?: string;
  /** Show the crescent-moon glyph before the word. */
  glyph?: boolean;
};

/**
 * The Rhumi wordmark — a gold crescent moon + "RHUMI" in caps (Figtree
 * SemiBold, wide tracking), matching the app's brand mark.
 */
export default function Wordmark({ className = "", glyph = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {glyph && (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-[0.9em] w-[0.9em]"
          style={{ filter: "drop-shadow(0 0 6px rgba(233,178,125,0.45))" }}
        >
          <defs>
            <linearGradient id="rhumi-moon" x1="6" y1="3" x2="18" y2="21">
              <stop offset="0" stopColor="#F1E3B8" />
              <stop offset="1" stopColor="#E9B65E" />
            </linearGradient>
            <mask id="rhumi-moon-mask">
              <rect width="24" height="24" fill="black" />
              <circle cx="12" cy="12" r="9" fill="white" />
              <circle cx="8" cy="9.5" r="8" fill="black" />
            </mask>
          </defs>
          <circle cx="12" cy="12" r="9" fill="url(#rhumi-moon)" mask="url(#rhumi-moon-mask)" />
        </svg>
      )}
      <span className="font-sans text-[0.82em] font-semibold uppercase tracking-wordmark text-dawn-amber">
        Rhumi
      </span>
    </span>
  );
}
