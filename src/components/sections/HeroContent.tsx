"use client";

import { motion } from "framer-motion";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, delay, ease: REVEAL_EASE },
  };
}

/**
 * Hero type composition + CTA stack — client-side fade-up stagger only.
 * All asset detection happens in the parent server component (Hero.tsx).
 */
export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[1400px]">
      {/* Ragged three-line composition, Fraunces 900 italic, slight left bleed on desktop */}
      <h1 className="display-italic text-off-white text-[clamp(56px,16vw,96px)] md:-ml-[2vw] md:text-[clamp(72px,14vw,220px)]">
        <motion.span {...fadeUp(0)} className="block">
          BUILT
        </motion.span>
        <motion.span
          {...fadeUp(0.08)}
          className="block pl-[0.5em] md:pl-[1.5em]"
        >
          BY A
        </motion.span>
        <motion.span {...fadeUp(0.16)} className="block">
          MARINE.
        </motion.span>
      </h1>

      {/* Subhead */}
      <motion.p
        {...fadeUp(0.28)}
        className="mt-6 max-w-[540px] text-base leading-relaxed text-off-white/80 md:mt-8 md:text-lg"
      >
        Veteran-owned lifting club in Hesperia and La Verne. Open and staffed
        24 hours, every day. Commercial equipment without the commercial feel.
      </motion.p>

      {/* Primary CTA */}
      <motion.div {...fadeUp(0.36)} className="mt-6">
        <a
          href="#trial"
          className="inline-block bg-accent px-6 py-3 font-mono text-sm uppercase tracking-[0.18em] text-off-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-accent/90"
        >
          CLAIM YOUR FREE 3-DAY PASS →
        </a>
      </motion.div>

      {/* Secondary text */}
      <motion.p
        {...fadeUp(0.44)}
        className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-tactical"
      >
        $30.99/MO · NO CONTRACT AVAILABLE
      </motion.p>
    </div>
  );
}
