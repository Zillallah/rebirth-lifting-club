"use client";

export function AmberDivider() {
  return (
    <div className="relative bg-[var(--color-coral)] min-h-[55vh] md:min-h-[65vh] flex items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-baseline">
          <span className="font-extrabold text-[120px] sm:text-[180px] md:text-[260px] lg:text-[320px] leading-[0.82] tracking-[-0.04em] text-[var(--color-canvas)]">
            24/7
          </span>
          <div className="md:self-end md:pb-10">
            <div className="font-bold text-[14px] md:text-[16px] tracking-[0.28em] text-[var(--color-canvas)] uppercase mb-6">
              Real gym. Real work. Open 24/7.
            </div>
            <p className="font-medium text-[14px] md:text-[15px] leading-[1.65] text-[var(--color-canvas)]/85 max-w-[460px]">
              Walk in at 2 AM. A real person is at the front desk. Not a key fob and an empty room.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
