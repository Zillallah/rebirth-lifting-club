"use client";

type AmberDividerProps = {
  headline: string;
  tagline: string;
};

export function AmberDivider({ headline, tagline }: AmberDividerProps) {
  return (
    <div className="relative bg-[var(--color-amber)] min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-baseline">
          <span className="font-extrabold text-[120px] sm:text-[180px] md:text-[260px] lg:text-[340px] leading-[0.82] tracking-[-0.04em] text-[var(--color-canvas)]">
            {headline}
          </span>
          <span className="font-bold text-[14px] md:text-[16px] tracking-[0.28em] text-[var(--color-canvas)]/85 md:self-end md:pb-8">
            {tagline}
          </span>
        </div>
      </div>
    </div>
  );
}
