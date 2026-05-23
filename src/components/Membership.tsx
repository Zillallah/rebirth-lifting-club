"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "./motion/FadeUp";

type Tier = {
  eyebrow: string;
  badge?: string;
  price: string;
  unit: string;
  term: string;
  perks: string[];
  cta: string;
  ctaHref: string;
};

// TODO [operator-verify]: Live site shows a second tier at
//   $64.99 contract / $74.99 month-to-month with identical feature copy.
//   Confirm what this tier unlocks and add as a 4th card or replace
//   the Personal Training tier accordingly.
//   Source: rebirthliftingclub.com/la-verne--ca
const TIERS: Tier[] = [
  {
    eyebrow: "STANDARD",
    price: "$45.99",
    unit: "/ MONTH",
    term: "12-month commitment",
    perks: ["24/7 access · both stations", "Bring a guest anytime", "No enrollment fee"],
    cta: "JOIN STANDARD",
    ctaHref: "#lead-form",
  },
  {
    eyebrow: "MONTH-TO-MONTH",
    badge: "MOST FLEXIBLE",
    price: "$50.99",
    unit: "/ MONTH",
    term: "Cancel anytime",
    perks: ["24/7 access · both stations", "No commitment", "Same equipment, zero contract"],
    cta: "JOIN MONTH-TO-MONTH",
    ctaHref: "#lead-form",
  },
  {
    eyebrow: "PERSONAL TRAINING",
    price: "Custom",
    unit: "",
    term: "Built around your goal",
    perks: ["1:1 coaching with Armando's team", "Programming + accountability", "Start with a free session"],
    cta: "CLAIM FREE SESSION",
    ctaHref: "#lead-form",
  },
];

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const offsets = [40, 0, -40];
  const y = useTransform(scrollYProgress, [0, 1], [offsets[index] || 0, -(offsets[index] || 0)]);

  const inner = (
    <div className="relative flex flex-col h-full bg-[var(--color-carbon)] border border-[var(--color-steel)]/40 hover:border-[var(--color-coral)]/60 transition-colors duration-300 p-8 md:p-10">
      {tier.badge && (
        <div className="absolute -top-3 left-8 px-3 py-1 bg-[var(--color-coral)] text-[var(--color-canvas)] font-bold text-[10px] tracking-[0.28em]">
          {tier.badge}
        </div>
      )}
      <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-6">
        {tier.eyebrow}
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-extrabold text-[48px] md:text-[64px] leading-[0.9] tracking-[-0.03em] text-[var(--color-off-white)]">
          {tier.price}
        </span>
        {tier.unit && (
          <span className="font-medium text-[12px] tracking-[0.22em] text-[var(--color-off-white)]/65">
            {tier.unit}
          </span>
        )}
      </div>
      <div className="text-[var(--color-off-white)]/55 font-light text-[13px] tracking-[0.04em] mb-8">
        {tier.term}
      </div>
      <ul className="space-y-3 mb-10 flex-grow">
        {tier.perks.map((p, i) => (
          <li key={i} className="flex gap-3 text-[var(--color-off-white)]/80 font-light text-[14px] leading-[1.55]">
            <span className="text-[var(--color-coral)] mt-[6px]">·</span>
            {p}
          </li>
        ))}
      </ul>
      <a
        href={tier.ctaHref}
        className="group inline-flex items-center justify-between mt-auto px-5 py-4 border-[1.5px] border-[var(--color-coral)]/70 text-[var(--color-coral)] font-bold text-[11px] md:text-[12px] tracking-[0.22em] hover:bg-[var(--color-coral)] hover:text-[var(--color-canvas)] transition-colors duration-250"
      >
        {tier.cta}
        <span className="text-[16px] transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );

  return (
    <div ref={ref} className="h-full">
      {reduce ? inner : <motion.div style={{ y }} className="h-full">{inner}</motion.div>}
    </div>
  );
}

export function Membership() {
  return (
    <section id="membership" className="relative bg-[var(--color-canvas)] py-32 md:py-44 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <FadeUp duration={1.1} className="mb-16 md:mb-24">
          <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-5">
            MEMBERSHIP · 04
          </div>
          <h2 className="display text-[44px] sm:text-[64px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-[var(--color-off-white)] max-w-[14ch]">
            One price. Both stations. Open at 3am.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {TIERS.map((tier, i) => (
            <TierCard key={i} tier={tier} index={i} />
          ))}
        </div>

        <FadeUp delay={0.2} duration={1.0} className="mt-12 text-center">
          <div className="text-[var(--color-off-white)]/55 font-light text-[13px] tracking-[0.08em]">
            Day, week, and month passes also available — call <a href="tel:+17609953137" className="text-[var(--color-coral)] underline underline-offset-4">(760) 995-3137</a> (Hesperia) or <a href="tel:+19095933372" className="text-[var(--color-coral)] underline underline-offset-4">(909) 593-3372</a> (La Verne).
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
