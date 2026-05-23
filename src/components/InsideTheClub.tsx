"use client";

import { FadeUp } from "./motion/FadeUp";

const STATS: { value: string; label: string }[] = [
  { value: "24/7", label: "OPEN & STAFFED" },
  { value: "2", label: "STATIONS" },
  { value: "0", label: "CONTRACTS REQUIRED" },
  { value: "21K", label: "ON INSTAGRAM" },
];

export function InsideTheClub() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-32 md:py-44 overflow-hidden">
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden mb-16 md:mb-20 bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/inside-club-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover photo-zoom"
          >
            <source src="/media-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-canvas)]/95 via-[var(--color-canvas)]/30 to-[var(--color-canvas)]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)] pointer-events-none" />

          <div className="absolute bottom-8 left-8 right-8 md:bottom-14 md:left-14 md:right-14 z-10">
            <FadeUp duration={1.1}>
              <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-3">
                INSIDE THE CLUB · 01
              </div>
              <h2 className="display text-[var(--color-off-white)] leading-[0.95] tracking-[-0.02em] text-[44px] sm:text-[64px] md:text-[88px] lg:text-[112px] max-w-[12ch]">
                Premium equipment. No commercial feel.
              </h2>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.1} duration={1.0}>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[var(--color-steel)]/30">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`py-8 md:py-10 px-4 md:px-6 ${
                  i < STATS.length - 1 ? "md:border-r" : ""
                } ${i === 1 ? "border-l md:border-l-0" : ""} ${
                  i >= 2 ? "border-t md:border-t-0" : ""
                } border-[var(--color-steel)]/30`}
              >
                <div className="font-extrabold text-[40px] md:text-[64px] leading-[0.9] text-[var(--color-coral)] tabular-nums mb-3">
                  {s.value}
                </div>
                <div className="text-[var(--color-off-white)]/65 font-medium text-[10px] md:text-[11px] tracking-[0.28em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.25} duration={1.0} className="mt-12 md:mt-16 text-center">
          <a
            href="#lead-form"
            className="group inline-flex items-center justify-between w-full md:w-auto md:min-w-[480px] px-8 py-6 border-[1.5px] border-[var(--color-coral)] text-[var(--color-coral)] font-bold text-[13px] md:text-[14px] tracking-[0.22em] hover:bg-[var(--color-coral)] hover:text-[var(--color-canvas)] transition-colors duration-300"
          >
            SEE THE CLUB · CLAIM FREE SESSION
            <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
