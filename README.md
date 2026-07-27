# Rhumi — Website

The marketing site for **Rhumi**, a calm daily-reflection companion. Standalone and fully
separate from the app.

The page is designed as an experience: a fixed **sky** passes from deep night through dawn
into warm morning as you scroll — mirroring Rhumi's daily turning. The narrative moves
through the emotional problem, the turn, how the app works, the companion, an inclusive
welcome, craft & integrity, and a beta email invitation.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — design tokens (palette, type scale, easings) in `tailwind.config.ts`
- **Framer Motion** — scroll choreography + reveals, all `prefers-reduced-motion` aware
- **next/font** — Fraunces (literary serif) + Inter (UI), self-hosted, no layout shift

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm run start   # production
npm run typecheck                # tsc --noEmit
```

## Project structure

```
app/
  layout.tsx              fonts, metadata/OG, mounts <SkyBackground/>
  page.tsx                composes the narrative sections in order
  api/waitlist/route.ts   validates + forwards signups (see below)
  globals.css             tokens, grain, focus, selection
components/
  SkyBackground.tsx       fixed scroll-interpolated night→morning sky (+ stars, sun glow)
  SiteHeader.tsx  Wordmark.tsx  Section.tsx  ScrollReveal.tsx
  DeviceMockup.tsx        CSS iPhone frame
  screens/                faithful CSS app mockups (VerseCard, MoodCheckIn, CompanionChat)
  WaitlistForm.tsx        email capture — validation, honeypot, inline states
  sections/               Hero, Problem, Turn, Ritual, Companion, ComeAsYouAre,
                          Integrity, Invitation, SiteFooter
lib/motion.ts             shared easings + reveal variants
public/media/             Higgsfield assets + real screenshots go here (see MEDIA.md)
```

## Email signups → FormSubmit.co

The site is a **static export**, so there's no server. `WaitlistForm` posts the email to
[FormSubmit.co](https://formsubmit.co) (free, unlimited, no account); each signup is
forwarded to the address in [`lib/waitlist.ts`](lib/waitlist.ts). The AJAX endpoint returns
JSON with CORS, so success/failure is detectable (a `_honey` honeypot drops bots).

- **Activation:** the first submission triggers a one-time "Activate" email to that address
  — click it once and delivery begins.
- **Configure:** the destination is `endpoint` in `lib/waitlist.ts`. To keep the raw email
  out of the client bundle, swap in the random alias endpoint from the activation email.
- **Stub mode:** clear `endpoint` and the form validates + shows success but sends nowhere.

## Media

The site is complete with hand-crafted motion + placeholders. To add cinematic Higgsfield
assets or real app screenshots later, follow **`MEDIA.md`** — each asset lists its filename,
spec, prompt, and exact mount point. No redesign required.

## Deploy → https://rhumi.app (GitHub Pages, dedicated repo)

The site is served at the **root** of its own domain, so `next.config.mjs` has **no**
`basePath`. It lives in its **own** GitHub Pages repo (not the personal-site repo — a Pages
repo can only carry one custom domain).

```bash
npm run build         # emits ./out (fully static, root-served)
```

`out/` is the publishable site and already includes everything Pages needs:
- `CNAME` → `rhumi.app` (from `public/CNAME`) — sets the repo's custom domain.
- `.nojekyll` — so Pages serves Next's `_next/` folder (Jekyll ignores `_`-prefixed dirs).
- `privacy.html` and `.well-known/apple-app-site-association` (from `public/`).

Publish the **contents of `out/`** to the root of the dedicated repo's Pages branch. Then
point `rhumi.app` DNS at GitHub Pages and enable Enforce HTTPS (see the migration
checklist). Live URL: `https://rhumi.app/`.

> Do **not** copy this build into `mubinalmanaf.github.io/rhumi/` anymore — without the
> base path it would break the old `mubinn.com/rhumi` URLs. That path should become a
> redirect to `rhumi.app`.

## Design notes

- **Palette:** warm ink `#0B0B10`, bone `#F4EFE6`, one dawn gradient (indigo → rose →
  amber). Mostly monochrome + the one gradient.
- **Integrity guardrail:** copy frames Rhumi's content as *editorial companionship, never
  scholarship*, and never claims authority or review that doesn't exist.
- **Accessibility:** semantic HTML, visible focus, AA-minded contrast, full reduced-motion
  fallbacks (the sky snaps to a static dawn; reveals become quick fades).
```
