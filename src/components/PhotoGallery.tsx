"use client";

import { FadeUp } from "./motion/FadeUp";

const CELLS = [
  { src: "/photo-squat-lifter.jpg", alt: "Member squatting at ROGUE rack", motion: "photo-zoom" },
  { src: "/photo-cardio-floor.jpg", alt: "Members on the cardio floor", motion: "photo-drift" },
  { src: "/photo-coaching.jpg", alt: "Coach working with a client", motion: "photo-zoom" },
  { src: "/photo-member-lifting.jpg", alt: "Member training at a machine", motion: "photo-drift" },
  { src: "/photo-storefront.jpg", alt: "Rebirth Lifting Club storefront", motion: "photo-zoom" },
  { src: "/photo-machines.jpg", alt: "Machine equipment floor", motion: "photo-drift" },
];

export function PhotoGallery() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-24 md:py-32 overflow-hidden border-t border-[var(--color-steel)]/30">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-4">
              21K STRONG · @REBIRTHLIFTINGCLUB
            </div>
            <h2 className="font-extrabold text-[40px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.035em] text-[var(--color-off-white)] max-w-[700px]">
              The floor.<br />Right now.
            </h2>
          </div>
          <a
            href="https://instagram.com/rebirthliftingclub"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[var(--color-amber)] font-bold text-[12px] tracking-[0.22em] border-b border-[var(--color-amber)] pb-2 self-start md:self-end"
          >
            FOLLOW ON INSTAGRAM
            <span className="text-[16px] transition-transform group-hover:translate-x-1">→</span>
          </a>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CELLS.map((cell, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden border border-[var(--color-steel)]/30 hover:border-[var(--color-amber)]/50 transition-colors duration-500 group"
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${cell.motion}`}
                style={{ backgroundImage: `url('${cell.src}')`, filter: "brightness(0.85)" }}
                aria-label={cell.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85 pointer-events-none" />
              <div className="absolute inset-0 bg-[var(--color-canvas)]/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
