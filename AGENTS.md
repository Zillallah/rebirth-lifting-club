# Rebirth Lifting Club — Project Agent Rules (V3)

> Loaded into every Claude Code / Codex session in this repo.
> CLAUDE.md re-exports via `@AGENTS.md`. Read fully before generating code.
>
> **V3 supersedes V2 (amber-primary / Outfit-only).** V2's "premium
> architectural industrial / carbon-fiber + amber neon" direction is
> DISCARDED. V3 is **editorial-cinematic** — coral primary, Fraunces
> italic display, the X mark as monogram, split-screen Stations, an
> editorial Membership pair, sticky CTA. Canonical spec lives in
> `~/Downloads/Rebirth Lifting Club Build/prompt-A-full-rebuild.md` (v2
> prompt). When this file and the prompt disagree, the prompt wins —
> update this file.

---

## Project

Single-page conversion website for **Rebirth Lifting Club** — USMC
veteran-owned, family-operated lifting club with two locations:
Hesperia and La Verne, CA. Open and **staffed 24/7** at both. Operator:
Shimira "Zillallah" Greene (Ashe Systems Consulting).

Sibling projects (do NOT mimic):
- `alpha-omega-fitness` — boot camp gym, editorial-industrial w/ HYROX yellow
- `athlos-training-grounds` — premium boutique studio

Rebirth V3 is **editorial-cinematic** — Fraunces italic display
dominating viewports, full-bleed video sequences, asymmetric parallax
collage, a split-screen station collision. Closer to a Locomotive
agency case study than a SaaS landing page. Kraken Training is the bar.

---

## Voice

Confident, premium-industrial, slightly hard. Sentences are short.
Words are concrete. **No fitness-marketing fluff** — no "transform
your life," "unlock your potential," "your fitness journey."

What earns space: facts, hours, equipment, locations, the founder, the
iron. What doesn't: aspirational language, vanity stats as stat cards,
testimonials as carousels.

Verbatim brand phrases (do not paraphrase):
- *"Real gym. Real work. Open 24/7."*
- *"First we run. Then we lift."*
- *"From the ashes."*
- *"Built for the lift."*
- *"USMC Veteran / Family Owned and Operated"*

---

## Architecture — non-negotiable

### Section structure
- **Linear sections only.** Each sits sequentially in document flow.
- **NO** negative margins. **NO** section overlap. **NO** z-index
  stacking tricks. **NO** sticky-pinned section wrappers that break
  document flow.
- **NO section-level entry animations.** No `whileInView` on `<section>`.
- **Inner content reveals allowed** on headlines / paragraphs / cards.
  - Duration: **600ms**, easing `[0.22, 1, 0.36, 1]`
  - `once: true` — never re-trigger
  - First viewport entry only
  - Respects `prefers-reduced-motion`
- **Parallax = Framer Motion `useScroll` + `useTransform` only.**
  No `requestAnimationFrame` scroll listeners.
- **Framer Motion never wraps the root.** Always scoped inside section
  components.
- **Mobile-first.** Every section correct at 375px before desktop is
  touched.

### Videos
`autoplay muted loop playsInline preload="metadata"` with a `poster`
attribute. IntersectionObserver pauses offscreen videos to save mobile
battery.

### Section order (locked — matches v2 prompt §U)

| # | Component | File | Notes |
|---|---|---|---|
| 1 | Hero | `Hero.tsx` | Forge video full-bleed + Fraunces italic |
| 2 | FromTheAshes | `FromTheAshes.tsx` | Manifesto + numbers as italic prose + 3-photo parallax collage |
| 3 | InsideTheClub | `InsideTheClub.tsx` | Full-bleed gym video 80svh |
| 4 | Stations | `Stations.tsx` | **Split-screen collision** desktop; stacked mobile |
| 5 | Membership | `Membership.tsx` | **Editorial pair**, NOT 3-card pricing grid; Custom Training as separate block below |
| 6 | Reviews | `Reviews.tsx` | 3-card grid with real Google quotes |
| 7 | FAQ | `FAQ.tsx` | Native `<details>`/`<summary>` accordion, 6 items |
| 8 | LeadForm | `LeadForm.tsx` | Split-screen + 3-step progress indicator; `id="lead-form"` anchor |
| 9 | Doctrine | `Doctrine.tsx` | "First we run. Then we lift." full-bleed |
| 10 | Footer | `Footer.tsx` | XMark + addresses + IG/FB + USMC badge |

Plus floating: `StickyCTA.tsx` — appears at `scrollY > 0.5 * vh`, hides
when `#lead-form` enters viewport (IntersectionObserver).

There is no "Counters" section. The numbers (21K, 260, two stations,
24/7) appear as static italic prose inside FromTheAshes — never as
animated count-up on display copy.

---

## Design tokens (LOCKED in `globals.css` @theme)

DO NOT introduce colors outside this list.

| Token | Value | Role |
|---|---|---|
| `canvas` | `#050505` | Page background |
| `carbon` | `#0E0E10` | Section surface — cards, form panels |
| `off` | `#F4EFE6` | Primary text (warm) |
| `coral` | `#E55A40` | **PRIMARY** — matches actual logo; CTAs, eyebrows, accents |
| `amber` | `#F4A024` | **SECONDARY** — glow / highlight only (hero video neon glints, optional hover shadow) |
| `steel` | `#3A3A3D` | Hairlines, dividers, muted text |

Coral is the primary accent. Amber is a glow accent ONLY — never on
buttons, never on body text, never as a section background or border.

Use Tailwind utilities: `bg-canvas`, `bg-carbon`, `text-off`,
`text-coral`, `bg-coral`, `border-coral`, `border-steel`, etc.

```css
@theme {
  --color-canvas: #050505;
  --color-carbon: #0E0E10;
  --color-off:    #F4EFE6;
  --color-coral:  #E55A40;
  --color-amber:  #F4A024;
  --color-steel:  #3A3A3D;

  /* next/font sets --font-fraunces / --font-outfit on <html> via
     layout.tsx; @theme aliases them to semantic tokens. No recursion. */
  --font-display: var(--font-fraunces);
  --font-body:    var(--font-outfit);

  --shadow-glow: 0 0 32px rgba(244,160,36,0.18);
}
```

---

## Typography (LOCKED)

- **Display** = Fraunces, **italic axis** (real italic, NOT
  `font-style: italic` on a roman face), weight 600 or 700. Use for
  hero headline, manifesto headline, section openers, station names
  (Stations split-screen), doctrine close.
- **Body** = Outfit, weight 400/500/600. Everything else.
- Load via `next/font/google`. Variables: `--font-fraunces` and
  `--font-outfit`. Aliased in `@theme` to `--font-display` /
  `--font-body`. Do **not** name next/font variables `--font-display` /
  `--font-body` directly — that creates a circular `var()` reference.

### Display sizes (clamp)
- Hero headline: `clamp(3.25rem, 12vw, 11rem)`
- Section opener: `clamp(2.25rem, 7vw, 6rem)`
- Station name (Stations split-screen): `clamp(3.5rem, 14vw, 12rem)`
- Doctrine close: `clamp(3rem, 10vw, 9rem)`

### Section eyebrow label
`text-coral font-medium text-xs tracking-[0.32em] uppercase font-body`.
Format: `MANIFESTO · 01`, `MEMBERSHIP · 05`, etc.

---

## XMark — the brand monogram

`src/components/XMark.tsx`. The X mark is a **monogram** (four letters
in the X's quadrants), not a wordmark. The wordmark "REBIRTH LIFTING
CLUB" appears beneath the mark only when `showCaption === true`.

Letter positions (verified from official logo):
- **L** — top-left quadrant
- **R** — top-right quadrant, **mirrored / horizontally flipped**
  (intentional brand styling)
- **C** — bottom-left quadrant
- **B** — bottom-right quadrant

Props: `size` (default 48), `color` (default `currentColor`),
`showCaption` (default false), `className`.

Used in: Hero (size 48, no caption), Footer (size 240, with caption),
LeadForm success state (size 96, no caption), section eyebrows (size 32,
no caption).

---

## Motion grammar

- **FadeUp** (`components/motion/FadeUp.tsx`): opacity 0→1, y 24→0,
  duration 600ms, easing `[0.22, 1, 0.36, 1]`, stagger via `delay` prop,
  respects `prefers-reduced-motion`.
- **ParallaxImage** (`components/motion/ParallaxImage.tsx`): takes a
  Next/Image, wraps in motion.div with `useScroll` + `useTransform`,
  drifts `y` from `-40px` to `40px` across the section viewport range.
  `depth` prop (0–1) for collage layering at different velocities.
- **No 3D tilt, no SVG distortion, no hover-tilt, no cursor-follow,
  no magnetic buttons, no scramble-text effects.**
- **No animated count-up on display copy.** Numbers in FromTheAshes
  are static italic prose.

---

## Component patterns

### Primary CTA (coral filled pill)
Used for "Claim Free Session" everywhere.
```
inline-flex items-center justify-center h-14 px-8
bg-coral text-off font-body font-semibold text-sm tracking-wider uppercase
rounded-full
hover:bg-coral hover:brightness-110
transition-[filter] duration-200
```

### Card surface (LeadForm card, Reviews cards)
```
bg-carbon border border-steel/60 rounded-2xl p-8
```
Optional subtle hover: border shifts `steel → coral` over 200ms.

### Eyebrow tag
```
text-coral font-body font-medium text-xs tracking-[0.32em] uppercase
```

### Display headline class
```css
.display {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  letter-spacing: -0.01em;
}
```

---

## Stack (LOCKED)

- Next.js 16 (App Router only)
- React 19, TypeScript strict
- Tailwind v4 (`@theme` in `globals.css`, no `tailwind.config.ts`)
- Framer Motion 11 (inner content reveals only — never on section elements)
- Supabase (Trial form submissions)
- Resend (operator notification emails)
- Vercel deployment — `/api/lead` **explicitly pinned to Node runtime**
  (`export const runtime = 'nodejs'`); Supabase service-role + Resend
  on Edge is a 3am bug.

No new motion libraries. No GSAP, Three.js, Anime.js.

---

## Build discipline

Build all 10 sections in a single pass per the v2 prompt. The previous
batched-by-z-index discipline is retired — v3 is a coherent editorial
narrative and ships whole, not section-by-section.

When working from a drop-in zip: re-apply prior a11y patches
(ThePass + Manifest fixes have a known regression pattern) before
committing.

---

## Business details — canonical

| Field | Value |
|---|---|
| Business name | Rebirth Lifting Club |
| Owner | Armando S. — USMC 0331 (Machine Gunner) |
| Hesperia | 15555 Main St, Ste C1-2, Hesperia, CA 92345 · (760) 995-3137 |
| La Verne | 1473 Foothill Boulevard, La Verne, CA 91750 · (909) 593-3372 |
| Hours | 24/7 — **staffed** at both locations |
| Email | admin@rebirthclubmanagement.com |
| Instagram | @rebirthliftingclub (21K followers, 113 posts) |
| Facebook | Rebirth Lifting Club (481 followers) |
| Reviews | Google **4.7★ · 260** · Yelp Hesperia **4.1★ · 28** · Yelp La Verne **2.5★ · 16** (newer, less feedback yet) |
| Pricing | **Contract $45.99/mo** (12-month) · **Month-to-Month $50.99/mo** (cancel anytime) · Custom Training (talk to us) |
| Affiliations | Rebirth Athletics · Rebirth Run Club · Boneyard Run Club · BodyGoods |
| Taglines | "Real gym. Real work. Open 24/7." / "First we run. Then we lift." |

Hardcode these. Flag any prompt that contradicts before proceeding.

`[OPERATOR VERIFY]` items still open:
- Second membership tier ($64.99 contract / $74.99 month-to-month) —
  what does this tier unlock? Render as TODO in `Membership.tsx`.
- Reviewer initials "M." / "J." — verify against live Google attribution.
- XMark monogram meaning (do L/R/C/B stand for anything specific?).

---

## Media assets

The v2 prompt assumes these v2-named files exist in `public/`:

| File | Purpose |
|---|---|
| `hero-forge.mp4` | Hero loop (forge/sparks) |
| `hero-architectural.mp4` | Footer signature loop |
| `gym-pano-long.mp4` | InsideTheClub bg + Hesperia station bg |
| `gym-pano-short.mp4` | FromTheAshes collage source (extract 3 stills) |
| `gym-laverne-vertical.mp4` | La Verne station bg |
| `poster-forge.jpg` + posters for each video | `<video poster>` fallback |

If any are missing, render the component with the v2-spec path and
fall back to an existing v4.1 poster for the `poster` attribute. Log a
`[OPERATOR VERIFY]` TODO and continue — don't block the build.

---

## Performance & SEO

- Lighthouse Performance ≥ 85 mobile, ≥ 92 desktop
- Lighthouse Accessibility ≥ 95
- LCP < 2.5s on 4G simulation
- Hero video re-encoded to ≤1.2MB (`.mp4` + `.webm`):
  `ffmpeg -c:v libx264 -crf 26 -preset slow -vf scale=1280:720 -an -movflags +faststart`
- `next/image` with `sizes` on every image
- `'use client'` only when truly required (StickyCTA, LeadForm, anything
  using Framer Motion `useScroll`)
- Meta description, OG image (1200×630), schema.org LocalBusiness with
  both addresses + phone + hours + geo, `robots.txt`, `sitemap.xml`
- Page title: `Rebirth Lifting Club — Hesperia + La Verne, CA · Veteran-Owned · Staffed 24/7`
- Form inputs: visible labels (not placeholder-only)
- Interactive elements: 44×44px minimum hit area on mobile
- All animations respect `prefers-reduced-motion`

---

## Things to NEVER do

1. Use **amber as the primary accent.** Amber is a glow accent only.
   Primary is coral `#E55A40`.
2. Use `font-style: italic` on a roman Fraunces face. Load the real
   italic axis via `next/font` `style: ['italic']`.
3. Name next/font CSS variables `--font-display` / `--font-body`
   directly — that collides with the `@theme` aliases and creates a
   circular `var()` reference. Use `--font-fraunces` / `--font-outfit`.
4. Ship Counters as a separate section or a stat-card row. Numbers go
   inside FromTheAshes as static italic prose.
5. Ship Membership as a 3-card SaaS pricing grid. It's an editorial
   pair (Contract + Month-to-Month) with Custom Training as a separate
   follow-up block.
6. Ship Stations as side-by-side address cards. Desktop is the
   split-screen collision moment; mobile stacks vertically.
7. Animate count-up on display copy. Counters on prose are an
   anti-pattern in this build.
8. Use 3D tilt, SVG distortion, hover-tilt, cursor-follow, magnetic
   buttons, or scramble-text. Composition over tricks.
9. Use stock photography or AI-generated imagery.
10. Add `-mt-[Xvh]` or any negative section margin. No z-index stacking.
11. Add section-level entry animations (whileInView on `<section>`).
    Inner content reveals only.
12. Default `/api/lead` to Edge runtime. Always `export const runtime = 'nodejs'`.
13. Soften the voice into fitness-marketing language.
14. Commit `.env.local` or any file with real API keys.

---

## Build context

- **Operator:** Shimira "Zillallah" Greene (Ashe Systems Consulting)
- **Client:** Rebirth Lifting Club — Armando S., USMC 0331
- **Pitch model:** Spec build → present in person → tiered pricing post-close
- **Bar to beat:** Locomotive-tier editorial sites and Kraken Training.
  V3 replaces V2 (amber/Outfit-only, batched build) — that direction
  was rejected as fighting the brand voice. The current direction is
  editorial-cinematic: Fraunces italic dominating viewports, full-bleed
  video sequences, split-screen Stations, editorial Membership pair.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file
structure may all differ from your training data. Read the relevant
guide in `node_modules/next/dist/docs/` before writing any code. Heed
deprecation notices.
<!-- END:nextjs-agent-rules -->
