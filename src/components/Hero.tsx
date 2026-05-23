"use client";

import { LiveClock } from "./LiveClock";
import { FadeUp } from "./motion/FadeUp";
import { XMark } from "./XMark";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--color-canvas)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/poster-hero-forge.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-forge.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.65)_100%)] z-[1] pointer-events-none" />

      <header className="absolute top-0 left-0 right-0 px-6 md:px-12 py-7 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <XMark size={28} color="var(--color-coral)" />
          <span className="font-extrabold text-[12px] md:text-[13px] tracking-[0.32em] text-[var(--color-off-white)]">
            REBIRTH
          </span>
        </div>
        <LiveClock variant="nav" />
      </header>

      <div className="absolute inset-0 flex items-center z-10 px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <h1 className="display text-[var(--color-off-white)] leading-[0.88] tracking-[-0.02em] select-none">
            <span className="block" style={{ fontSize: "clamp(3.25rem, 12vw, 11rem)" }}>
              Real gym.
            </span>
            <span className="block pl-[1.2em]" style={{ fontSize: "clamp(3.25rem, 12vw, 11rem)" }}>
              Real work.
            </span>
          </h1>
          <FadeUp delay={0.45} duration={1.2} className="mt-10 md:mt-14">
            <div className="text-[var(--color-coral)] font-semibold text-[11px] md:text-[12px] tracking-[0.36em] mb-8">
              OPEN &amp; STAFFED 24/7
            </div>
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-3 h-14 px-8 bg-[var(--color-coral)] text-[var(--color-canvas)] font-bold text-[13px] tracking-[0.22em] hover:bg-[var(--color-coral-deep)] transition-colors duration-200"
            >
              CLAIM FREE SESSION
              <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
            </a>
          </FadeUp>
        </div>
      </div>

      <FadeUp delay={0.7} duration={1.4} className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8 md:pb-10 z-10">
        <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em]">
          HESPERIA · LA VERNE · CA
        </div>
      </FadeUp>
    </section>
  );
}
