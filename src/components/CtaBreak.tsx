"use client";

import { FadeUp } from "./motion/FadeUp";

export function CtaBreak() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-24 md:py-32 overflow-hidden border-t border-[var(--color-steel)]/30">
      <FadeUp className="w-full max-w-[900px] mx-auto px-6 md:px-12 text-center">
        <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-6">
          NO CARD ON FILE · BRING AN ID
        </div>
        <h3 className="display text-[36px] sm:text-[52px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-[var(--color-off-white)] mb-10">
          See if it&apos;s a fit. <span className="text-[var(--color-coral)]">For free.</span>
        </h3>
        <a
          href="#lead-form"
          className="group inline-flex items-center gap-4 px-10 py-5 bg-[var(--color-coral)] text-[var(--color-canvas)] font-bold text-[13px] md:text-[14px] tracking-[0.22em] hover:bg-[var(--color-coral-deep)] transition-colors duration-300"
        >
          CLAIM FREE SESSION
          <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
        </a>
      </FadeUp>
    </section>
  );
}
