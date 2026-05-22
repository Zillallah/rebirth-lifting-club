"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type DividerProps =
  | { variant: "x-tight" }
  | { variant: "video-strip" }
  | { variant: "number"; number: string; caption: string };

export function Divider(props: DividerProps) {
  if (props.variant === "x-tight") return <XTightStrip />;
  if (props.variant === "video-strip") return <VideoStrip />;
  return <NumberStrip number={props.number} caption={props.caption} />;
}

/* Carbon-fiber X close-up, narrow horizontal sliver */
function XTightStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-15%", "5%"]);

  return (
    <div ref={ref} className="relative h-[28vh] md:h-[34vh] overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 w-[130%] h-full"
        style={{
          x,
          backgroundImage: "url('/inside-club-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45) contrast(1.15)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-canvas)] via-transparent to-[var(--color-canvas)]/30 pointer-events-none" />
    </div>
  );
}

/* Hero video, narrow sliver — connects the visual through the page */
function VideoStrip() {
  return (
    <div className="relative h-[32vh] md:h-[40vh] overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55) saturate(0.85)" }}
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-canvas)] via-transparent to-[var(--color-canvas)]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.6)_100%)] pointer-events-none" />
    </div>
  );
}

/* Single huge number + small caption, color-block band */
function NumberStrip({ number, caption }: { number: string; caption: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);

  return (
    <div ref={ref} className="relative bg-[var(--color-amber)] py-16 md:py-24 overflow-hidden">
      <motion.div style={{ scale }} className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-12">
        <span className="font-extrabold text-[100px] sm:text-[140px] md:text-[200px] lg:text-[240px] leading-[0.85] tracking-[-0.04em] text-[var(--color-canvas)]">
          {number}
        </span>
        <span className="font-bold text-[12px] md:text-[13px] tracking-[0.32em] text-[var(--color-canvas)]/85 self-end pb-3 md:pb-6">
          {caption}
        </span>
      </motion.div>
    </div>
  );
}
