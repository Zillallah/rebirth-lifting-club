"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "./motion/FadeUp";

type StationHalfProps = {
  label: string;
  city: string;
  address1: string;
  address2: string;
  bgImage: string;
  directionsUrl: string;
  side: "left" | "right";
};

function StationHalf({ label, city, address1, address2, bgImage, directionsUrl, side }: StationHalfProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Image zooms slowly as section scrolls past
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.22]);
  // City name parallaxes opposite direction
  const cityY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <a
      ref={ref}
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/5] md:aspect-auto md:min-h-[720px] overflow-hidden"
    >
      {/* Scrolling-zoom image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')`, scale }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/30 via-transparent to-[#050505]/95" />
      <div className="absolute inset-0 bg-[var(--color-canvas)]/20 group-hover:bg-[var(--color-canvas)]/5 transition-colors duration-700" />

      {/* Top label */}
      <div className="absolute top-8 left-8 md:top-10 md:left-10 z-10">
        <div className="text-[var(--color-amber)] font-semibold text-[10px] md:text-[11px] tracking-[0.32em]">
          {label}
        </div>
      </div>

      {/* City name floats with parallax */}
      <motion.div
        style={{ y: cityY }}
        className="absolute bottom-32 md:bottom-44 left-8 right-8 md:left-10 md:right-10 z-10"
      >
        <h3 className="font-extrabold text-[64px] sm:text-[88px] md:text-[112px] lg:text-[140px] leading-[0.88] tracking-[-0.04em] text-[var(--color-off-white)]">
          {city}
        </h3>
      </motion.div>

      {/* Address pinned at bottom */}
      <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 z-10">
        <div className="font-light text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-off-white)]/85 mb-5">
          {address1}<br />{address2}
        </div>
        <div className="inline-flex items-center gap-3 text-[var(--color-amber)] font-bold text-[11px] md:text-[12px] tracking-[0.22em] border-b border-[var(--color-amber)]/0 group-hover:border-[var(--color-amber)] pb-1 transition-all duration-300">
          GET DIRECTIONS
          <span className="text-[16px] transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
}

export function Stations() {
  return (
    <section id="stations" className="relative bg-[var(--color-canvas)] overflow-hidden">
      <FadeUp className="text-center py-12 md:py-16">
        <a
          href="tel:+17609953137"
          className="inline-flex items-baseline gap-4 font-mono text-[var(--color-off-white)]/55 hover:text-[var(--color-amber)] transition-colors"
        >
          <span className="text-[10px] tracking-[0.32em] font-semibold">CALL</span>
          <span className="text-[18px] md:text-[20px] tracking-[0.04em] tabular-nums">
            (760) 995-3137
          </span>
        </a>
      </FadeUp>

      <div className="grid md:grid-cols-2">
        <StationHalf
          side="left"
          label="STATION ONE"
          city="HESPERIA"
          address1="15555 Main St, Ste C1-2"
          address2="Hesperia, CA 92345"
          bgImage="/inside-club-bg.jpg"
          directionsUrl="https://maps.google.com/?q=15555+Main+St+Hesperia+CA+92345"
        />
        <StationHalf
          side="right"
          label="STATION TWO"
          city="LA VERNE"
          address1="1473 Foothill Boulevard"
          address2="La Verne, CA 91750"
          bgImage="/inside-club-bg.jpg"
          directionsUrl="https://maps.google.com/?q=1473+Foothill+Boulevard+La+Verne+CA+91750"
        />
      </div>
    </section>
  );
}
