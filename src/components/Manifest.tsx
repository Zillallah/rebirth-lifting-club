"use client";

import { motion, useReducedMotion } from "framer-motion";

const ITEMS = [
  "Open 24 hours. Staffed 24 hours.",
  "Two stations. One membership.",
  "Real equipment. Real platforms. Not a circuit gym.",
  "4.7 stars across 260 reviews.",
  "Veteran-owned. Family-operated.",
];

const ITEM_CLASS =
  "grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-8 md:gap-12 items-baseline border-t border-[var(--color-steel)]/30 pt-8 md:pt-10";

export function Manifest() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[var(--color-carbon)] py-32 md:py-44 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <ul className="space-y-12 md:space-y-16">
          {ITEMS.map((line, i) => {
            const num = (
              <span className="font-extrabold text-[48px] md:text-[80px] leading-[0.9] text-[var(--color-coral)] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            );
            const body = (
              <span className="font-light text-[20px] md:text-[28px] lg:text-[32px] leading-[1.3] tracking-[-0.01em] text-[var(--color-off-white)]">
                {line}
              </span>
            );

            if (reduce) {
              return (
                <li key={i} className={ITEM_CLASS}>
                  {num}
                  {body}
                </li>
              );
            }

            return (
              <motion.li
                key={i}
                className={ITEM_CLASS}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.0, delay: 0.05 * (i % 3), ease: [0.22, 1, 0.36, 1] }}
              >
                {num}
                {body}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
