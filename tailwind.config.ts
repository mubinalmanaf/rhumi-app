import type { Config } from "tailwindcss";

/**
 * Palette mirrors the Rhumi app's "Dawn" design system (src/theme/tokens.ts):
 * a warm meadow world — cream + soft plum + amber-gold — with a night-sky mode.
 * Token group names are kept (ink / bone / dawn) so existing classes recolour,
 * plus an `app` group holding the light-theme values used in the phone mockups.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Night-sky chrome (app dark theme)
        ink: {
          DEFAULT: "#1B1826", // night indigo — bgBase (dark)
          soft: "#262233", // bgCard
          muted: "#302B3F", // bgSubtle
        },
        // Light text on the night sky (app dark text tones)
        bone: {
          DEFAULT: "#ECE6DD", // textPrimary (dark)
          dim: "#BCB2C6", // eased secondary for body legibility
          faint: "#A79DB0", // textSecondary (dark)
        },
        // Accents + scene tones (repurposed to the app's real hues)
        dawn: {
          amber: "#E9B65E", // gold accent (dark)
          ember: "#D99A6A", // clay (dark)
          rose: "#C58156", // clay
          night: "#141225",
          twilight: "#3A2036",
        },
        // The app's LIGHT meadow theme — used inside the device mockups
        app: {
          cream: "#F4EEE2", // bgBase
          card: "#FCF8EF", // bgCard
          subtle: "#EAE0CF", // bgSubtle
          plum: "#43384E", // textPrimary
          plumsoft: "#6E6478", // textSecondary
          gold: "#C68A3C", // accent
          goldsoft: "#EFDFC2", // accentSoft
          sage: "#7FA88E", // positive
          clay: "#C58156", // attention
          hair: "#E6DBC8", // hairline
        },
      },
      fontFamily: {
        // Wired to next/font CSS variables in app/layout.tsx (Lora + Figtree)
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 6.6vw, 5.4rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.1rem, 5.2vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.005em" }],
        "display-md": ["clamp(1.7rem, 3.8vw, 2.8rem)", { lineHeight: "1.16" }],
        verse: ["clamp(1.5rem, 3.2vw, 2.4rem)", { lineHeight: "1.46" }],
        lead: ["clamp(1.05rem, 1.8vw, 1.3rem)", { lineHeight: "1.62" }],
      },
      letterSpacing: {
        wordmark: "0.24em",
        eyebrow: "0.22em",
      },
      maxWidth: {
        reading: "40rem",
        content: "72rem",
      },
      transitionTimingFunction: {
        // App motion feel — "breath-like"
        calm: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        gentle: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
