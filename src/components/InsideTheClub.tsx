"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";

export function InsideTheClub() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  // Background moves UP slower than scroll (parallax effect)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // Headline floats up slightly faster
  const headlineY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="inside" className="relative bg-[var(--color-canvas)] z-30 overflow-hidden">
      {/* Top: full-bleed cinematic image with parallax */}
      <div ref={heroRef} className="relative w-full h-[85vh] min-h-[560px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-[130%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/inside-club-bg.jpg')",
            y: bgY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--color-canvas)]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)] pointer-events-none" />

        <Reveal className="absolute top-8 md:top-12 left-6 md:left-12 z-10">
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em]">
            003 / INSIDE THE CLUB
          </div>
        </Reveal>

        <motion.div
          className="absolute bottom-12 md:bottom-16 left-6 right-6 md:left-12 md:right-12 z-10"
          style={{ y: headlineY }}
        >
          <Reveal y={40} duration={1.0}>
            <h2 className="font-extrabold text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)] max-w-[820px]">
              Premium equipment.<br />
              <span className="text-[var(--color-amber)]">No commercial feel.</span>
            </h2>
          </Reveal>
        </motion.div>

        <Reveal delay={0.3} className="absolute bottom-12 right-6 md:right-12 text-right z-10">
          <div className="text-[var(--color-off-white)]/60 font-medium text-[10px] tracking-[0.32em] mb-1">CAPTURED</div>
          <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">HESPERIA STATION</div>
        </Reveal>
      </div>

      {/* Below: stat callouts with count-up */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <RevealGroup stagger={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <RevealItem>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">
              24/7
            </div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">
              ACCESS · BOTH STATIONS
            </div>
          </RevealItem>
          <RevealItem>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">
              <CountUp end={2} />
            </div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">
              LOCATIONS · HESPERIA + LA VERNE
            </div>
          </RevealItem>
          <RevealItem>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">
              <CountUp end={0} />
            </div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">
              CONTRACTS REQUIRED
            </div>
          </RevealItem>
          <RevealItem>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">
              <CountUp end={21000} suffix="" />
            </div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">
              COMMUNITY · INSTAGRAM
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
