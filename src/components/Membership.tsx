"use client";

import { Reveal, RevealGroup, RevealItem, TiltCard, SlideIn } from "./motion";

type TierProps = {
  badge?: string;
  label: string;
  price: string;
  cadence: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

function Tier({ badge, label, price, cadence, description, ctaLabel, ctaHref, featured }: TierProps) {
  return (
    <TiltCard
      maxTilt={5}
      className={`relative bg-[var(--color-carbon)] border ${featured ? "border-[var(--color-amber)]/50" : "border-[var(--color-steel)]/40"} p-10 md:p-12 hover:border-[var(--color-amber)]/80 hover:shadow-[0_0_60px_-12px_rgba(244,160,36,0.4)] transition-all duration-500 flex flex-col h-full`}
    >
      {badge && (
        <div className="absolute -top-3 right-7 bg-[var(--color-amber)] text-[var(--color-canvas)] px-3 py-1 font-bold text-[10px] tracking-[0.22em]">
          {badge}
        </div>
      )}
      <div className="text-[var(--color-off-white)]/55 font-medium text-[11px] tracking-[0.32em] mb-8">
        {label}
      </div>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-extrabold text-[64px] md:text-[72px] leading-[1] text-[var(--color-off-white)]">{price}</span>
      </div>
      <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.22em] mb-8">
        {cadence}
      </div>
      <p className="font-light text-[15px] leading-[1.6] text-[var(--color-off-white)]/70 mb-12 flex-1">
        {description}
      </p>
      <a
        href={ctaHref}
        className="inline-flex items-center justify-between gap-3 px-7 py-4 border-[1.5px] border-[var(--color-amber)] text-[var(--color-amber)] font-bold text-[12px] tracking-[0.22em] hover:bg-[var(--color-amber)] hover:text-[var(--color-canvas)] transition-all duration-300"
      >
        {ctaLabel} <span className="text-[16px]">→</span>
      </a>
    </TiltCard>
  );
}

export function Membership() {
  return (
    <section id="membership" className="relative bg-[var(--color-canvas)] z-40 overflow-hidden py-20 md:py-28">
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <SlideIn direction="left" distance={80} duration={0.9}>
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-8">
            004 / MEMBERSHIP
          </div>
        </SlideIn>
        <SlideIn direction="left" distance={120} delay={0.1} duration={1.0}>
          <h2 className="font-extrabold text-[44px] md:text-[72px] lg:text-[88px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)] mb-8">
            Two ways in. <span className="text-[var(--color-amber)]">Both stations included.</span>
          </h2>
        </SlideIn>
        <Reveal delay={0.3}>
          <p className="font-light text-[16px] md:text-[18px] text-[var(--color-off-white)]/65 max-w-[640px] mb-20 md:mb-28 leading-[1.6]">
            One membership covers both Hesperia and La Verne. 24-hour access. Staffed every hour.
          </p>
        </Reveal>

        <RevealGroup stagger={0.18} className="grid md:grid-cols-3 gap-8 md:gap-10">
          <RevealItem y={60}>
            <Tier
              label="STANDARD"
              price="$30.99"
              cadence="PER MONTH · 1-YEAR CONTRACT"
              description="Full 24/7 access at both stations. Best monthly rate. Annual commitment."
              ctaLabel="JOIN STANDARD"
              ctaHref="#the-pass"
            />
          </RevealItem>
          <RevealItem y={60}>
            <Tier
              badge="MOST FLEXIBLE"
              label="MONTH-TO-MONTH"
              price="$35.99"
              cadence="PER MONTH · NO CONTRACT"
              description="Same 24/7 access at both stations. Cancel any time. No commitment."
              ctaLabel="JOIN FLEXIBLE"
              ctaHref="#the-pass"
              featured
            />
          </RevealItem>
          <RevealItem y={60}>
            <Tier
              label="PERSONAL TRAINING"
              price="Custom"
              cadence="1-ON-1 · BY SESSION"
              description="Programmed for your goal. Coached by certified trainers. Call for rates."
              ctaLabel="INQUIRE"
              ctaHref="tel:+17609953137"
            />
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.8}>
          <p className="text-center text-[var(--color-off-white)]/50 font-light text-[13px] mt-16">
            Day, week, and month drop-in passes available — call{" "}
            <a href="tel:+17609953137" className="text-[var(--color-amber)] hover:underline">(760) 995-3137</a>{" "}
            for rates.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
