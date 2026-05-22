"use client";

import { Marquee } from "./motion/Marquee";

type MarqueeStripProps = {
  variant?: "proof" | "standard" | "bothStations";
};

const VARIANTS = {
  proof: ["FIRST WE RUN", "THEN WE LIFT", "OPEN 24/7", "STAFFED 24/7", "VETERAN-OWNED", "FAMILY-OPERATED", "260+ REVIEWS", "21K STRONG"],
  standard: ["NO CONTRACT", "NO COMMERCIAL FEEL", "REAL PEOPLE AT THE DESK", "HESPERIA · LA VERNE", "TWO STATIONS · ONE STANDARD"],
  bothStations: ["HESPERIA", "LA VERNE", "ONE MEMBERSHIP COVERS BOTH", "24 HOURS", "7 DAYS", "EVERY HOUR STAFFED"],
};

export function MarqueeStrip({ variant = "proof" }: MarqueeStripProps) {
  const items = VARIANTS[variant];
  return (
    <div className="relative bg-[var(--color-canvas)] border-y border-[var(--color-steel)]/30 py-6 md:py-8 overflow-hidden">
      <Marquee speed={45} direction="left">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-14 px-4 md:px-7">
            <span className="text-[var(--color-off-white)] font-extrabold text-[28px] md:text-[44px] tracking-[-0.01em] leading-none whitespace-nowrap">
              {item}
            </span>
            <svg width="28" height="28" viewBox="0 0 28 28" className="text-[var(--color-amber)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <line x1="6" y1="6" x2="22" y2="22" />
              <line x1="22" y1="6" x2="6" y2="22" />
            </svg>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
