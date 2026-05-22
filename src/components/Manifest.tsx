"use client";

import { SlideInItem } from "./motion/SlideInItem";

const ITEMS = [
  "Open 24 hours. Staffed 24 hours.",
  "Two stations. One membership.",
  "Real equipment. Real platforms. Not a circuit gym.",
  "4.7 stars across 260 reviews.",
  "$30.99 a month. Or $35.99 with no contract.",
];

export function Manifest() {
  return (
    <section className="relative bg-[var(--color-carbon)] py-32 md:py-44 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <ul className="space-y-12 md:space-y-16">
          {ITEMS.map((line, i) => (
            <SlideInItem
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.05 * (i % 3)}
              duration={1.0}
              distance={100}
            >
              <li className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-8 md:gap-12 items-baseline border-t border-[var(--color-steel)]/30 pt-8 md:pt-10">
                <span className="font-extrabold text-[48px] md:text-[80px] leading-[0.9] text-[var(--color-amber)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-light text-[20px] md:text-[28px] lg:text-[32px] leading-[1.3] tracking-[-0.01em] text-[var(--color-off-white)]">
                  {line}
                </span>
              </li>
            </SlideInItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
