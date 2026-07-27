import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ink base + bone paper. One dawn gradient family. Nothing else.
        ink: {
          DEFAULT: "#0B0B10", // warm near-black
          soft: "#14141B",
          muted: "#22222C",
        },
        bone: {
          DEFAULT: "#F4EFE6", // warm off-white
          dim: "#D8D2C6",
          faint: "#A69F92",
        },
        dawn: {
          night: "#1B1B3A", // deep indigo
          twilight: "#3A2A4D",
          rose: "#B06A7A", // twilight rose
          ember: "#D98C6A",
          amber: "#E8B27D", // sunrise amber
        },
      },
      fontFamily: {
        // Wired to next/font CSS variables in app/layout.tsx
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Calm, generous display scale (clamped for fluid responsiveness)
        "display-xl": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5.5vw, 4.5rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "verse": ["clamp(1.5rem, 3.2vw, 2.5rem)", { lineHeight: "1.4", letterSpacing: "-0.005em" }],
        "lead": ["clamp(1.05rem, 1.8vw, 1.35rem)", { lineHeight: "1.6" }],
      },
      letterSpacing: {
        wordmark: "0.02em",
        eyebrow: "0.28em",
      },
      maxWidth: {
        reading: "40rem",
        content: "72rem",
      },
      transitionTimingFunction: {
        // Slow, intentional. Never bouncy.
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
        gentle: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        shimmer: {
          "0%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
          "100%": { opacity: "0.35" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
