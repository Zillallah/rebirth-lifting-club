"use client";

import { FadeUp } from "./motion/FadeUp";

export function Marine() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-32 md:py-44 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 md:gap-20 items-center">

          <div className="relative w-full aspect-[4/5] bg-[var(--color-carbon)] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center photo-zoom"
              style={{ backgroundImage: "url('/armando-portrait.jpg')" }}
            />
            <svg
              className="absolute inset-0 w-full h-full opacity-90 -z-0"
              viewBox="0 0 400 500"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="marine-light" cx="50%" cy="30%" r="55%">
                  <stop offset="0%" stopColor="#1A1A1C" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1" />
                </radialGradient>
              </defs>
              <rect width="400" height="500" fill="url(#marine-light)" />
              <circle cx="200" cy="190" r="68" fill="#050505" />
              <path d="M 60 500 L 60 380 Q 60 290 200 290 Q 340 290 340 380 L 340 500 Z" fill="#050505" />
            </svg>
            <div
              className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.4'/></svg>\")",
              }}
            />
          </div>

          <div>
            <FadeUp duration={1.1}>
              <h2 className="display text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.95] tracking-[-0.02em] text-[var(--color-off-white)] mb-10">
                Built by a Marine.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2} duration={1.0}>
              <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-12">
                ARMANDO · USMC 0331 · MACHINE GUNNER
              </div>
            </FadeUp>

            <FadeUp delay={0.35} duration={1.0}>
              <p className="font-light text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-off-white)]/75 max-w-[460px]">
                He served. He came home. He built the gym he wanted to train in. Two stations later, the standard hasn&apos;t moved.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
