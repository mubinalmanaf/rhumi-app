import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Vertical rhythm. Movements get generous breathing room. */
  size?: "default" | "tall" | "hero";
  /** Constrain inner content width. */
  width?: "content" | "reading" | "full";
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  default: "py-28 md:py-40",
  tall: "py-36 md:py-56",
  hero: "min-h-[100svh] py-24",
};

const widthClasses: Record<NonNullable<Props["width"]>, string> = {
  content: "max-w-content",
  reading: "max-w-reading",
  full: "max-w-none",
};

/**
 * A movement in the scroll narrative. Consistent rhythm + horizontal padding.
 * Positioned above the fixed sky (z-10).
 */
export default function Section({
  children,
  id,
  className = "",
  size = "default",
  width = "content",
}: Props) {
  return (
    <section
      id={id}
      className={`relative z-10 px-6 md:px-10 ${sizeClasses[size]} ${className}`}
    >
      <div className={`mx-auto w-full ${widthClasses[width]}`}>{children}</div>
    </section>
  );
}
