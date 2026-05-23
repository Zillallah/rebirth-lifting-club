"use client";

import { FadeUp } from "./motion/FadeUp";

export function Doctrine() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-40 md:py-56 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/photo-dumbbell-racks.jpg')",
          opacity: 0.08,
          filter: "grayscale(1) contrast(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-canvas)] via-transparent to-[var(--color-canvas)] pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeUp duration={1.2}>
          <h2 className="display text-[var(--color-off-white)] leading-[0.95] tracking-[-0.02em]">
            <span className="block text-[64px] sm:text-[96px] md:text-[140px] lg:text-[180px]">
              First we run.
            </span>
            <span className="block text-[64px] sm:text-[96px] md:text-[140px] lg:text-[180px] pl-[1.4em]">
              Then we lift.
            </span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.35} duration={1.0}>
          <div className="text-[var(--color-coral)] font-semibold text-[11px] md:text-[12px] tracking-[0.36em] mt-12 md:mt-16">
            REBIRTH ATHLETICS · REBIRTH RUN CLUB · BONEYARD RUN CLUB · BODYGOODS
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
