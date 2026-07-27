# Rhumi — Higgsfield media manifest

The site ships with **hand-crafted CSS/SVG/Canvas motion and placeholders**, so it looks
finished today. This file is the turnkey plan for dropping in cinematic Higgsfield assets
once credits are topped up (the Higgsfield account is currently on the free plan with 0
credits, so generation is blocked until it's funded).

**Workflow when credits exist:**
1. Generate each asset below with the given tool + prompt + spec.
2. Save the download into `public/media/` with the exact **filename**.
3. Wire it in at the noted **mount point** (each is a small, isolated swap — no redesign).
4. Keep the art direction: dawn light, ink-on-paper restraint, quiet luxury.
   **Never**: mosque photography, green-and-gold ornament, faces/people, stock imagery,
   text baked into the image, religious iconography.

Global style suffix to append to every image/video prompt:

> cinematic, natural dawn light, extremely minimal, abstract, no people, no text, no logos,
> no religious symbols, soft grain, muted warm palette (deep indigo → twilight rose →
> sunrise amber), shallow depth of field, calm and unhurried, premium editorial

---

## 1. Hero ambient loop — `hero-dawn.mp4` (+ `hero-dawn.jpg` poster)
- **Tool:** `generate_video` (image→video: first make a still with `generate_image`, then animate)
- **Spec:** 1920×1080, 6–10s, seamless loop, silent. Poster JPG same frame.
- **Mount:** `components/sections/Hero.tsx` — add a `<video autoPlay muted loop playsInline poster=…>`
  as an absolutely-positioned layer *behind* the copy (below `z-10`, above the sky), at low
  opacity (~0.5) so the copy stays legible. Gate off under `useReducedMotion` (show poster only).
- **Prompt:** "Abstract dawn breaking over a still, glassy horizon of water; the first warm
  light bleeding into deep indigo night; slow, almost imperceptible drift of light; a single
  soft sunrise glow low on the frame."

## 2. Problem texture — `noise-static.jpg` (optional)
- **Tool:** `generate_image`
- **Spec:** 1600×1200, dark, very low contrast — used at ~8% opacity as a texture behind the
  noise cloud.
- **Mount:** `components/sections/Problem.tsx` — optional background layer behind the NOISE map.
- **Prompt:** "Abstract visualization of overwhelming digital static and fragmentation, cold
  blue-grey interference, tangled faint lines, claustrophobic, dark."

## 3. Turn / transition still — `turn-firstlight.jpg`
- **Tool:** `generate_image`
- **Spec:** 2000×1200, the moment night tips into dawn.
- **Mount:** `components/sections/Turn.tsx` — optional soft full-bleed still behind the line,
  low opacity, masked top/bottom.
- **Prompt:** "The exact moment darkness yields to first light on a calm empty landscape,
  rose-gold horizon line, vast quiet sky."

## 4. Ritual device screens — REAL SCREENSHOTS preferred
- These are currently faithful **CSS mockups** (`components/screens/*`). Prefer dropping in
  **real app screenshots** (PNG, 1170×2532 or similar) rather than generating them.
- **Mount:** replace the mockup component inside `DeviceMockup` with
  `<img src="/media/screen-mood.png" … />` etc. Filenames: `screen-mood.png`,
  `screen-verse.png`, `screen-companion.png`.
- Do **not** generate fake UI with Higgsfield — use the actual app.

## 5. Open Graph / social share — `og.jpg`
- **Tool:** `generate_image`
- **Spec:** 1200×630. Leave generous negative space; the wordmark is overlaid in code/exported
  separately (don't bake text into the generation).
- **Mount:** `app/layout.tsx` metadata — add `openGraph.images` + `twitter.images` pointing at
  `/media/og.jpg`.
- **Prompt:** "Serene abstract dawn gradient, deep indigo to sunrise amber, a single soft
  rising glow, vast calm negative space, minimal, premium."

---

### Generation notes
- Use `models_explore(action:'recommend')` first if unsure which model fits (video vs image).
- After generating, consider `upscale_image` / `upscale_video` to 2K before shipping.
- `remove_background` is available if any asset needs a cutout.
