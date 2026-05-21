# Rebirth Lifting Club — Project Agent Rules

> Loaded into every Claude Code / Codex session in this repo.
> CLAUDE.md re-exports via `@AGENTS.md`. Read fully before generating code.

---

## Project

Single-page conversion website for **Rebirth Lifting Club** — USMC veteran-owned, family-operated lifting club with two locations: Hesperia and La Verne, CA. Open and **staffed 24/7** at both locations. Built by Ashe Systems Consulting (operator: SGreene / Zillallah) as a spec build.

Sibling projects on the same operator account (do NOT replicate their design language here):
- `alpha-omega-fitness` — boot camp gym, editorial-industrial w/ HYROX yellow
- `athlos-training-grounds` — premium boutique studio

Rebirth is heavier than both. Military-adjacent without being cringe.

---

## Voice (committed)

Confident, plain-spoken, slightly hard. Sentences are short. Words are concrete.

**No fitness-marketing fluff** — no "transform your life," no "unlock your potential," no "your fitness journey."

What earns space: facts, hours, equipment, locations, the people. What doesn't: aspirational language.

The veteran angle does the work. It doesn't need to be reinforced with drill-sergeant copy.

---

## Architecture — non-negotiable

### Section structure
- **Linear sections only.** Each sits sequentially in document flow.
- **NO** `-mt-[Xvh]`. **NO** negative margins. **NO** section overlap.
- **Sticky pin allowed:** `min-h-[175vh]` wrapper with `sticky top-0 min-h-screen` inner.
- **NO section-level entry animations.** No `whileInView` on section elements. Sections appear via natural document flow.
- **Inner content fade-ups allowed** on headlines / paragraphs / stats. Duration ≤ 0.4s. `once: true`. First viewport entry only.

### Required class strings

Every section element:
```
relative bg-canvas z-{N} min-h-[175vh] overflow-hidden
```

Every sticky inner:
```
sticky top-0 min-h-screen flex items-center px-6 md:px-12 py-12 md:py-16 bg-canvas pointer-events-auto
```

### Z-index sequence (LOCKED)

| z | Section |
|---|---|
| 0 | Hero |
| 10 | Manifesto |
| 20 | The Marine |
| 30 | Membership |
| 40 | Inside the Club |
| 50 | Two Clubs |
| 60 | Trial |
| 70 | Reviews |
| 80 | FAQ |
| 90 | Footer |

Nav is `z-[100]`, above everything.

---

## Design tokens (LOCKED)

Encoded in `src/app/globals.css` via `@theme`. Use Tailwind utilities like `bg-canvas`, `text-off-white`, `text-accent`, `bg-accent`, `text-tactical`, `text-steel`. DO NOT introduce new colors.

| Token | Value | Role |
|---|---|---|
| `canvas` | `#0A0A0A` | Page background |
| `off-white` | `#F5F5F0` | Primary text |
| `accent` | `#B91C1C` | Deep red — military-adjacent, heavier than Alpha's yellow |
| `steel` | `#52525B` | Secondary — equipment/industrial |
| `tactical` | `#666666` | Mono labels, metadata, section numbers |
| `accent-glow` | `rgba(185,28,28,0.12)` | 12% accent for subtle washes |

---

## Typography (LOCKED)

- **Display** — `Fraunces Italic` weight 900. Editorial italic for all headlines. Loaded with `weight: "variable"` + `style: "italic"` + `axes: ["opsz","SOFT","WONK"]`. Select weight per-element via CSS `font-weight: 900`. Utility class: `.display-italic`.
- **Tactical** — `JetBrains Mono`. Section numbers, timestamps, metadata, form labels, section eyebrows. Utility class: `.tactical`.
- **Body** — `Geist` (variable). Sans-serif body copy.

---

## Stack (LOCKED)

- Next.js 16 (App Router only, no Pages Router)
- React 19, TypeScript strict
- Tailwind v4 (`@theme` in `globals.css`, NOT `tailwind.config.ts` color extensions)
- Framer Motion (inner content fade-ups only)
- Supabase (form submissions for Trial section)
- Resend (email notifications for Trial section)
- Vercel deployment

No new motion libraries. No GSAP, Three.js, Anime.js.

---

## Build discipline — BATCHED, NOT FREELANCED

| Batch | Scope | Section z | Status |
|---|---|---|---|
| 0 | Foundation (scaffold, tokens, fonts, nav, footer) | — | ✅ |
| 1 | Hero + IG proof strip | z-0 | Pending |
| 2 | Manifesto | z-10 | Pending |
| 3 | The Marine | z-20 | Pending |
| 4 | Membership | z-30 | Pending |
| 5 | Inside the Club | z-40 | Pending |
| 6 | Two Clubs | z-50 | Pending |
| 7 | Trial / Issue Pass | z-60 | Pending |
| 8 | Reviews | z-70 | Pending |
| 9 | FAQ | z-80 | Pending |
| 10 | Footer | z-90 | Pending |

Never build sections outside the current batch.

---

## Creative DNA (the WOW layer)

The 8 moves in §6 of the master brief are non-optional. Most-load-bearing for downstream batches:

1. **Live STAFFED NOW timestamp** in nav — already built in `Nav.tsx`.
2. **X mark as architecture** — section dividers, section numbering (`001`, `002`...), loading pulse animation `.x-mark-pulse` defined in globals.css.
3. **Type-led hero** — Fraunces 900 italic, ragged three-line composition, photo at 40% opacity BEHIND the type, headline bleeds `-2vw` off the left edge.
4. **Two Clubs as a real-time league** — split-screen, live timestamps both panels, Open-Meteo weather pills with graceful fallback.
5. **The Marine as editorial feature** — magazine spread, not a coach card.
6. **21K IG proof strip** — directly under hero, 4 IG tiles, mono caption "21,000 LIFTERS FOLLOW US. NONE OF THEM ARE INFLUENCERS."
7. **One full-bleed cinematic section** — Inside the Club, full-viewport image/video with corner overlay text.
8. **Trial as stamped permit** — "ISSUE PASS" not "Sign up." Pass numbers stored in Supabase as a real ledger, displayed in success state.

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
| Pricing | $30.99/mo (1-yr contract) · $35.99/mo (no contract) · Day/Week/Month passes · Personal Training (call) |
| Affiliation | Official lifting club of Rebirth Athletics |
| Tagline | "First we run. Then we lift." |

Hardcode these. If a batch prompt contradicts, flag before proceeding.

---

## Performance budget

- Lighthouse 90+ across Performance / Accessibility / Best Practices / SEO
- `next/image` with `sizes` on every image
- No unused Tailwind classes
- `'use client'` only when interactivity demands it
- Preload only Fraunces weight actually used (900)

---

## SEO

- Meta description on every page (already set in `layout.tsx`)
- OG image at `/og-image.jpg` (1200×630) — TBD
- `schema.org` LocalBusiness with BOTH addresses, phone, hours, geo coords — add in Batch 10 footer
- `robots.txt` and `sitemap.xml`
- Page title: `Rebirth Lifting Club — Hesperia + La Verne, CA · Veteran-Owned · Staffed 24/7` (set)

---

## Things to NEVER do

1. Build sections outside the current batch.
2. Use stock photos or AI-generated imagery.
3. Introduce additional motion libraries.
4. Add `-mt-[Xvh]` negative margins between sections.
5. Add section-level entry animations (whileInView on `<section>`).
6. Soften the voice into fitness-marketing language.
7. Introduce new colors outside the §5 tokens.
8. Replace Fraunces with another italic display.
9. Commit `.env.local` or any file with real API keys.
10. Skip the §9 pre-flight gate for operator-supplied assets.

---

## Build context

- **Operator:** Shimira "Zillallah" Greene (Ashe Systems Consulting)
- **Client:** Rebirth Lifting Club — Armando S., USMC 0331
- **Pitch model:** Spec build → present to Armando in person → tiered pricing after close (booking automation, membership flow integrations, email sequences, etc.)
- **Bar to beat:** Athlos Training Grounds + Alpha Omega Fitness (both ended at "competent"). The DNA layer in §6 is the difference.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
