"use client";

import { LiveClock } from "./LiveClock";
import { FadeUp } from "./motion/FadeUp";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--color-canvas)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.6)_100%)] z-[1] pointer-events-none" />

      <header className="absolute top-0 left-0 right-0 px-6 md:px-12 py-7 flex items-center justify-between z-10">
        <span className="font-extrabold text-[12px] md:text-[13px] tracking-[0.32em] text-[var(--color-off-white)]">
          REBIRTH
        </span>
        <LiveClock variant="nav" />
      </header>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-6">
        <h1 className="font-extrabold text-[var(--color-off-white)] leading-[0.82] tracking-[-0.06em] text-center select-none">
          <span className="block text-[clamp(90px,18vw,280px)]">REBIRTH</span>
        </h1>
      </div>

      <FadeUp delay={0.4} duration={1.4} className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 md:pb-14 z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em]">
            HESPERIA · LA VERNE · CA
          </div>
          <a
            href="#the-pass"
            className="group inline-flex items-center gap-4 text-[var(--color-off-white)] font-bold text-[13px] md:text-[14px] tracking-[0.22em] border-b border-[var(--color-amber)] pb-2 hover:text-[var(--color-amber)] transition-colors duration-300"
          >
            BOOK A 3-DAY PASS
            <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
