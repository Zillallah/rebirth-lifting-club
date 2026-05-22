"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SlideIn, ZoomReveal, Reveal } from "./motion";
import { XMark } from "./XMark";

export function Doctrine() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xMarkY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const xMarkRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const xMarkScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);

  return (
    <section
      ref={ref}
      id="doctrine"
      className="relative bg-[var(--color-canvas)] z-10 overflow-hidden min-h-screen flex items-center py-40 md:py-56"
    >
      <motion.div
        className="absolute -right-20 md:-right-32 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ y: xMarkY, rotate: xMarkRotate, scale: xMarkScale }}
      >
        <XMark size={780} opacity={0.06} />
      </motion.div>

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-16 md:mb-24">
            001 / DOCTRINE
          </div>
        </Reveal>

        <div className="space-y-4 md:space-y-6">
          <SlideIn direction="left" distance={140} duration={1.1}>
            <p className="font-extrabold text-[44px] sm:text-[60px] md:text-[96px] lg:text-[128px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)]">
              This isn&apos;t a <span className="text-[var(--color-amber)]">chain gym.</span>
            </p>
          </SlideIn>
          <ZoomReveal from="in" startScale={1.18} duration={1.1}>
            <p className="font-extrabold text-[44px] sm:text-[60px] md:text-[96px] lg:text-[128px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)]">
              It&apos;s a <span className="text-[var(--color-amber)]">lifting club.</span>
            </p>
          </ZoomReveal>
          <SlideIn direction="right" distance={140} duration={1.1}>
            <p className="font-extrabold text-[44px] sm:text-[60px] md:text-[96px] lg:text-[128px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)]">
              Built for <span className="text-[var(--color-amber)]">the lift.</span>
            </p>
          </SlideIn>
        </div>

        <Reveal delay={0.6}>
          <p className="mt-20 md:mt-28 text-[var(--color-off-white)]/55 font-light text-[16px] md:text-[18px] tracking-wide max-w-[640px] leading-[1.6]">
            Veteran-owned. Family-operated. Open and staffed every hour, every day, at both stations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
