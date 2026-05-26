"use client";

import { FadeUp } from "./motion/FadeUp";

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[var(--color-canvas)]">
      {/* Forge video bg — fallback to v4.1 hero.mp4 if /hero-forge.mp4 missing.
          TODO [operator-verify]: Drop actual forge loop into /public/hero-forge.mp4. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-forge.mp4" type="video/mp4" />
        <source src="/hero-architectural.mp4" type="video/mp4" />
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-[var(--color-canvas)]/55 z-[1] pointer-events-none" />
      <div className="absolute inset-0 vignette z-[1] pointer-events-none" />

      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/rebirth-logo.png"
          alt="Rebirth Lifting Club"
          className="h-12 w-auto md:h-14"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="w-full max-w-[1200px]">
          <FadeUp delay={120} as="h1" className="display hero-headline text-[var(--color-off)]">
            Real gym.
          </FadeUp>
          <FadeUp
            delay={280}
            as="div"
            className="display hero-headline text-[var(--color-off)] pl-[1.2em]"
          >
            Real work.
          </FadeUp>

          <FadeUp delay={440} className="mt-8">
            <p className="eyebrow text-[var(--color-coral)]">
              Open &amp; Staffed 24/7
            </p>
          </FadeUp>

          <FadeUp delay={600} className="mt-8">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center h-14 px-8 bg-[var(--color-coral)] text-[var(--color-off)] font-semibold text-sm tracking-[0.18em] uppercase rounded-full transition-[filter] duration-200 hover:brightness-110"
            >
              Claim Free Session
            </a>
          </FadeUp>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 z-10 text-[var(--color-coral)] text-[10px] tracking-[0.32em] uppercase">
        <span className="block w-px h-8 bg-[var(--color-coral)]" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
