import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * A restrained iPhone frame in pure CSS. Holds any of the app screen mockups
 * (or, later, a real screenshot). Fixed phone aspect ratio; scales to its
 * container width.
 */
export default function DeviceMockup({ children, className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[300px] ${className}`}
      style={{ aspectRatio: "300 / 620" }}
    >
      {/* Soft dawn glow behind the device */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[60px] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 40%, rgba(233,182,94,0.30), transparent 70%)",
        }}
      />

      {/* Frame */}
      <div className="relative h-full w-full rounded-[44px] bg-[#050509] p-[10px] shadow-2xl ring-1 ring-white/10">
        <div className="relative h-full w-full overflow-hidden rounded-[36px] ring-1 ring-black/60">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-3 z-20 h-6 w-[86px] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}
