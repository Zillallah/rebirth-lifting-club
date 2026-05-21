"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const STAMP_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Manifesto — section 002, z-10.
 * Left-anchored editorial. Three mono-numbered display lines, each with a
 * tactical metadata footer. Motion is a "stamp reveal" (scale + de-blur),
 * deliberately divergent from the Hero's fade-up grammar.
 *
 * X watermark anchored to the right edge at 6% accent — the graphic system
 * carries through the site (per master brief §6.2).
 */
export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative z-10 min-h-[175vh] overflow-hidden bg-canvas"
    >
      <div className="pointer-events-auto sticky top-0 flex min-h-screen items-center bg-canvas px-6 py-12 md:px-12 md:py-16">
        {/* Background X watermark — anchored right, bleeds off edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-15vw] top-1/2 -translate-y-1/2 md:right-[-10vw]"
        >
          <svg
            viewBox="0 0 400 400"
            className="h-[60vh] w-auto text-accent opacity-[0.06] md:h-[80vh]"
            fill="none"
            stroke="currentColor"
            strokeWidth={8}
          >
            <line x1={50} y1={50} x2={350} y2={350} />
            <line x1={350} y1={50} x2={50} y2={350} />
          </svg>
        </div>

        {/* Foreground content */}
        <div className="relative w-full max-w-[1200px]">
          {/* Section label */}
          <div className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-tactical md:mb-20 md:text-sm">
            002 / MANIFESTO
          </div>

          <ManifestoBlock
            number="01."
            headline="This isn't a chain gym."
            metadata="─── HESPERIA · EST. 2018"
            delay={0}
          />
          <ManifestoBlock
            number="02."
            headline={
              <>
                This is a <span className="text-accent">lifting club</span>.
              </>
            }
            metadata="─── BUILT FOR THE LIFT"
            delay={0.2}
          />
          <ManifestoBlock
            number="03."
            headline={
              <>
                Open every hour. <span className="text-accent">Staffed</span>{" "}
                every hour.
              </>
            }
            metadata="─── 0000–2359 · DAILY · TWO CLUBS"
            delay={0.4}
            last
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ManifestoBlock — mono number + display line + metadata footer.    */
/* ------------------------------------------------------------------ */

function ManifestoBlock({
  number,
  headline,
  metadata,
  delay,
  last,
}: {
  number: string;
  headline: ReactNode;
  metadata: string;
  delay: number;
  last?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: STAMP_EASE }}
      className={last ? "" : "mb-16 md:mb-24"}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-base text-tactical md:text-xl">
          {number}
        </span>
        <h2
          className="display-italic text-off-white"
          style={{
            fontSize: "clamp(48px, 9vw, 140px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          {headline}
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.6, ease: "easeOut" }}
        className="mt-3 pl-8 font-mono text-xs uppercase tracking-[0.15em] text-tactical md:mt-4 md:pl-16"
      >
        {metadata}
      </motion.div>
    </motion.div>
  );
}
