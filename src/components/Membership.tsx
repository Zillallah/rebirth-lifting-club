type TierProps = {
  badge?: string;
  label: string;
  price: string;
  cadence: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

function Tier({ badge, label, price, cadence, description, ctaLabel, ctaHref }: TierProps) {
  return (
    <div className="relative bg-[var(--color-carbon)] border border-[var(--color-steel)]/40 p-8 md:p-10 hover:border-[var(--color-amber)]/60 hover:shadow-[0_0_40px_-12px_rgba(244,160,36,0.3)] transition-all duration-300 flex flex-col">
      {badge && (
        <div className="absolute -top-3 right-6 bg-[var(--color-amber)] text-[var(--color-canvas)] px-3 py-1 font-bold text-[10px] tracking-[0.22em]">
          {badge}
        </div>
      )}
      <div className="text-[var(--color-off-white)]/55 font-medium text-[11px] tracking-[0.32em] mb-6">
        {label}
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-extrabold text-[56px] md:text-[64px] leading-[1] text-[var(--color-off-white)]">{price}</span>
      </div>
      <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.22em] mb-6">
        {cadence}
      </div>
      <p className="font-light text-[15px] leading-[1.55] text-[var(--color-off-white)]/70 mb-10 flex-1">
        {description}
      </p>
      <a
        href={ctaHref}
        className="inline-flex items-center justify-between gap-3 px-6 py-3.5 border-[1.5px] border-[var(--color-amber)] text-[var(--color-amber)] font-bold text-[12px] tracking-[0.22em] hover:bg-[var(--color-amber)] hover:text-[var(--color-canvas)] transition-all duration-250"
      >
        {ctaLabel} <span className="text-[16px]">→</span>
      </a>
    </div>
  );
}

export function Membership() {
  return (
    <section id="membership" className="relative bg-[var(--color-canvas)] z-40 overflow-hidden min-h-[80vh] py-24 md:py-32">
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-6">
          004 / MEMBERSHIP
        </div>
        <h2 className="font-extrabold text-[40px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.025em] text-[var(--color-off-white)] mb-6">
          Two ways in. <span className="text-[var(--color-amber)]">Both stations included.</span>
        </h2>
        <p className="font-light text-[16px] md:text-[18px] text-[var(--color-off-white)]/65 max-w-[640px] mb-16 md:mb-20 leading-[1.55]">
          One membership covers both Hesperia and La Verne. 24-hour access. Staffed every hour.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Tier
            label="STANDARD"
            price="$30.99"
            cadence="PER MONTH · 1-YEAR CONTRACT"
            description="Full 24/7 access at both stations. Best monthly rate. Annual commitment."
            ctaLabel="JOIN STANDARD"
            ctaHref="#the-pass"
          />
          <Tier
            badge="MOST FLEXIBLE"
            label="MONTH-TO-MONTH"
            price="$35.99"
            cadence="PER MONTH · NO CONTRACT"
            description="Same 24/7 access at both stations. Cancel any time. No commitment."
            ctaLabel="JOIN FLEXIBLE"
            ctaHref="#the-pass"
          />
          <Tier
            label="PERSONAL TRAINING"
            price="Custom"
            cadence="1-ON-1 · BY SESSION"
            description="Programmed for your goal. Coached by certified trainers. Call for rates."
            ctaLabel="INQUIRE"
            ctaHref="tel:+17609953137"
          />
        </div>

        <p className="text-center text-[var(--color-off-white)]/50 font-light text-[13px] mt-12">
          Day, week, and month drop-in passes available — call{" "}
          <a href="tel:+17609953137" className="text-[var(--color-amber)] hover:underline">
            (760) 995-3137
          </a>{" "}
          for rates.
        </p>
      </div>
    </section>
  );
}
