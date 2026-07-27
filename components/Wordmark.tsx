type Props = {
  className?: string;
  /** Show the small sun glyph before the word. */
  glyph?: boolean;
};

/** The Rhumi wordmark — literary serif, quiet tracking, with an optional dawn glyph. */
export default function Wordmark({ className = "", glyph = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {glyph && (
        <span aria-hidden className="relative inline-block h-[0.62em] w-[0.62em]">
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #E8B27D 0%, #B06A7A 100%)",
              boxShadow: "0 0 14px rgba(232,178,125,0.55)",
            }}
          />
        </span>
      )}
      <span className="font-serif font-light tracking-wordmark">Rhumi</span>
    </span>
  );
}
