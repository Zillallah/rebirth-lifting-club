# Rebirth Lifting Club — Project Agent Rules (V2)

> Loaded into every Claude Code / Codex session in this repo.
> CLAUDE.md re-exports via `@AGENTS.md`. Read fully before generating code.
>
> **V2 supersedes V1.** All prior visual decisions (Fraunces Italic, JetBrains Mono dominant, deep red #B91C1C, sticky `min-h-[175vh]` pin pattern, X watermark in Manifesto) are DISCARDED. The architectural discipline below is preserved; everything else is new.

---

## Project

Single-page conversion website for **Rebirth Lifting Club** — USMC veteran-owned, family-operated lifting club with two locations: Hesperia and La Verne, CA. Open and **staffed 24/7** at both. Operator: Shimira "Zillallah" Greene (Ashe Systems Consulting).

Sibling projects (do NOT mimic):
- `alpha-omega-fitness` — boot camp gym, editorial-industrial w/ HYROX yellow
- `athlos-training-grounds` — premium boutique studio

Rebirth V2 is **premium architectural industrial** — carbon-fiber + amber neon. Closer to a Porsche launch page than a fitness blog.

---

## Voice

Confident, premium-industrial, slightly hard. Sentences are short. Words are concrete. **No fitness-marketing fluff** — no "transform your life," "unlock your potential," "your fitness journey."

What earns space: facts, hours, equipment, locations, the founder. What doesn't: aspirational language.

---

## Architecture — non-negotiable (V2 §5)

### Section structure
- **Linear sections only.** Each sits sequentially in document flow.
- **NO** negative margins. **NO** section overlap.
- **NO sticky-pinned section wrappers.** Each section is `min-h-screen` (hero) or `min-h-[80vh]` (everything else).
- **NO section-level entry animations.** No `whileInView` on `<section>`.
- **Inner content reveals allowed** on headlines / paragraphs / cards.
  - Duration: **600–800ms** (slower than typical — cinematic)
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (custom expo-out)
  - `once: true` — never re-trigger
  - First viewport entry only

### Required class strings

Every section element:
```
relative bg-canvas z-{N} overflow-hidden
```
(Some sections use `bg-carbon` instead — see the z-stack below.)

Section inner wrapper (NO sticky):
```
relative min-h-screen flex items-center px-6 md:px-12 lg:px-16 py-16 md:py-24
```
(Hero uses `min-h-screen`. All other sections use `min-h-[80vh]` to vary the cadence.)

### Z-index sequence (LOCKED)

| z | Section | Background |
|---|---|---|
| 0 | Hero (video + UI overlay) | video, `bg-canvas` below |
| 10 | Doctrine (was "Manifesto") | `bg-canvas` + carbon-texture |
| 20 | The Founder | `bg-carbon` |
| 30 | Inside the Club | `bg-canvas` |
| 40 | Membership | `bg-canvas` |
| 50 | Stations (was "Two Clubs") | `bg-carbon` |
| 60 | The Pass (Trial) | `bg-canvas` |
| 70 | Voices (Reviews) | `bg-carbon` |
| 80 | Protocols (FAQ) | `bg-canvas` |
| 90 | Footer | `bg-canvas` + carbon-texture |

---

## Design tokens (V2 — LOCKED in `globals.css` @theme)

DO NOT introduce colors outside this list.

| Token | Value | Role |
|---|---|---|
| `canvas` | `#050505` | Page background (slightly warmer than pure black) |
| `carbon` | `#0E0E10` | Section surface — cards, secondary panels |
| `carbon-2` | `#1A1A1C` | Tertiary surface — elevated cards |
| `off-white` | `#F4EFE6` | Primary text (warm) |
| `off-white-2` | `#C9C4BC` | Secondary text |
| `off-white-3` | `#7A7771` | Tertiary text — muted |
| `amber` | `#F4A024` | Primary accent — matches hero video neon |
| `amber-deep` | `#C77F12` | Amber hover/active |
| `amber-glow` | `rgba(244,160,36,0.25)` | 25% amber wash / glow |
| `steel` | `#3A3A3D` | Secondary structural — hairlines, dividers |

Amber is the **only** accent color. No second accent anywhere.

Use Tailwind utilities: `bg-canvas`, `bg-carbon`, `text-off-white`, `text-off-white-2`, `text-off-white-3`, `text-amber`, `bg-amber`, `border-amber`, `border-steel`, etc.

---

## Typography (V2 — LOCKED)

```css
--font-display: var(--font-outfit), system-ui, sans-serif;
--font-body:    var(--font-outfit), system-ui, sans-serif;
--font-mono:    var(--font-geist-mono), ui-monospace, monospace;
--font-data:    var(--font-geist-mono), ui-monospace, monospace;
```

**Outfit is the entire type system** — display, body, labels, buttons. Geist Mono is used only for live-data callouts (the nav `LiveStatus` timestamp and one or two stat-style data displays).

NO Fraunces Italic. NO JetBrains Mono. NO stencil display. Hierarchy via weight + size + letter-spacing, not font swaps.

Weights available on Outfit (variable): 200, 300, 400, 500, 600, 700, 800, 900.

### Section number label

Always rendered as `font-display font-semibold text-xs tracking-[0.32em] text-amber`. Example: `001 / DOCTRINE`. Amber color is what makes it read as a system element.

---

## Texture & graphic system (V2 §6.3, §6.5)

### Carbon-fiber texture (CSS-generated, no image)
Applied via the `carbon-texture` utility class defined in `globals.css`. Use on Doctrine and Footer backgrounds.

### XMark component (`src/components/XMark.tsx`)
The Rebirth X mark — two crossing diagonals. Three variants:
- `outline` — thin amber lines, no letters; section accents / watermarks
- `glow` — thin amber lines + drop-glow + L/R/B/C quadrant letters; the brand mark
- `architectural` — thicker rounded lines matching the hero video's neon; used only once or twice at large scale

Use with `size` (`sm` | `md` | `lg` | `xl`).

---

## Motion grammar (V2 §6.4)

Slower and more cinematic than the V1 fade-ups.

- **Inner content reveals**: `opacity 0→1`, `scale 0.97→1`, 8px upward translate. Duration 700ms, custom expo-out (`[0.16, 1, 0.3, 1]`).
- **Amber hover effects**: `box-shadow: 0 0 24px var(--color-amber-glow)`. 250ms ease-out.
- **Pulse indicator**: amber dot in `LiveStatus`. Soft scale + opacity loop (1 → 0.85 → 1), 2.2s ease-in-out, infinite. Defined as `.animate-pulse-soft` in globals.css.
- **NO section-level transitions.**

---

## Component patterns (V2 §6.6)

### Premium dark card
```
bg-carbon border border-steel/40 p-8 md:p-10
hover:border-amber/60 hover:shadow-[0_0_40px_-12px_rgba(244,160,36,0.3)]
transition-all duration-300
```

### Amber outlined CTA (primary)
```
inline-flex items-center gap-3 px-7 py-4
border-[1.5px] border-amber text-amber font-bold text-sm tracking-[0.22em]
hover:bg-amber hover:text-canvas hover:shadow-[0_0_30px_-6px_var(--color-amber-glow)]
transition-all duration-250
```

### Amber filled CTA (secondary, rare)
```
inline-flex items-center gap-3 px-7 py-4
bg-amber text-canvas font-bold text-sm tracking-[0.22em]
hover:bg-amber-deep transition-all duration-250
```

---

## Stack (LOCKED)

- Next.js 16 (App Router only)
- React 19, TypeScript strict
- Tailwind v4 (`@theme` in `globals.css`)
- Framer Motion (inner content reveals only — never on section elements)
- Supabase (Trial form submissions, pass-number ledger)
- Resend (operator + visitor confirmation emails)
- Vercel deployment

No new motion libraries. No GSAP, Three.js, Anime.js.

---

## Build discipline — BATCHED

| Batch | Section | z | Background | Status |
|---|---|---|---|---|
| 0 | Foundation | — | — | ✅ V2 |
| 1 | Hero | 0 | video + canvas | Pending |
| 2 | Doctrine | 10 | canvas + carbon-texture | Pending |
| 3 | The Founder | 20 | carbon | Pending |
| 4 | Inside the Club | 30 | canvas | Pending |
| 5 | Membership | 40 | canvas | Pending |
| 6 | Stations | 50 | carbon | Pending |
| 7 | The Pass | 60 | canvas | Pending |
| 8 | Voices | 70 | carbon | Pending |
| 9 | Protocols | 80 | canvas | Pending |
| 10 | Footer | 90 | canvas + carbon-texture | Pending |

Never build sections outside the current batch.

---

## Business details — canonical

| Field | Value |
|---|---|
| Business name | Rebirth Lifting Club |
| Owner | Armando S. — USMC 0331 (Machine Gunner) |
| Hesperia | 15555 Main St, Ste C1-2, Hesperia, CA 92345 |
| La Verne | 1473 Foothill Boulevard, La Verne, CA 91750 |
| Hours | 24/7 — **staffed** at both locations |
| Phone | (760) 995-3137 |
| Email | admin@rebirthclubmanagement.com |
| Instagram | @rebirthliftingclub (21K followers) |
| Facebook | facebook.com/rebirthliftingclub |
| Reviews | 260 Google · 4.7★ · 24 Yelp · 5 Facebook 100% recommend |
| Pricing | $30.99/mo (1-yr contract) · $35.99/mo (no contract) · Day/Week/Month passes (call) · Personal Training (call) |
| Affiliation | Official lifting club of Rebirth Athletics |
| Tagline | "First we run. Then we lift." |

Hardcode these. Flag any batch prompt that contradicts before proceeding.

---

## Performance & SEO (V2 §5)

- Lighthouse 90+ on all four categories
- Hero video must be re-encoded to ≤1.2MB (`.mp4` + `.webm` sources) via `ffmpeg -c:v libx264 -crf 26 -preset slow -vf scale=1280:720 -an -movflags +faststart`
- `next/image` with `sizes` on every image
- `'use client'` only when truly required (LiveStatus, Trial form)
- Meta description, OG image (1200×630), schema.org LocalBusiness with both addresses + phone + hours + geo, `robots.txt`, `sitemap.xml`
- Page title: `Rebirth Lifting Club — Hesperia + La Verne, CA · Veteran-Owned · Staffed 24/7`

---

## Things to NEVER do

1. Build sections outside the current batch.
2. Bring back any V1 visual decision (Fraunces, deep red, sticky pin, X watermark in Manifesto, JetBrains Mono dominant).
3. Use stock photos or AI-generated imagery.
4. Add `-mt-[Xvh]` or any negative section margin.
5. Add section-level entry animations (whileInView on `<section>`).
6. Use sticky-pinned section wrappers.
7. Soften the voice into fitness-marketing language.
8. Introduce a second accent color (amber is the only accent).
9. Replace Outfit with another display font.
10. Commit `.env.local` or any file with real API keys.

---

## Build context

- **Operator:** Shimira "Zillallah" Greene (Ashe Systems Consulting)
- **Client:** Rebirth Lifting Club — Armando S., USMC 0331
- **Pitch model:** Spec build → present in person → tiered pricing post-close
- **Bar to beat:** V1 of this same build (visually too close to Alpha Omega — operator rejected). V2 establishes a distinct premium-architectural-industrial identity that can't be confused with sibling projects.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
