import { XMark } from "./XMark";

export function Doctrine() {
  return (
    <section id="doctrine" className="relative bg-[var(--color-canvas)] z-10 overflow-hidden min-h-[80vh] flex items-center py-24 md:py-32">
      {/* Massive X watermark, right-anchored */}
      <div className="absolute -right-12 md:-right-24 top-1/2 -translate-y-1/2 pointer-events-none">
        <XMark size={680} opacity={0.04} />
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section marker */}
        <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-12 md:mb-16">
          001 / DOCTRINE
        </div>

        {/* Three declarative lines */}
        <div className="space-y-2 md:space-y-3">
          <p className="font-extrabold text-[40px] sm:text-[56px] md:text-[88px] lg:text-[112px] leading-[1.02] tracking-[-0.025em] text-[var(--color-off-white)]">
            This isn&apos;t a <span className="text-[var(--color-amber)]">chain gym.</span>
          </p>
          <p className="font-extrabold text-[40px] sm:text-[56px] md:text-[88px] lg:text-[112px] leading-[1.02] tracking-[-0.025em] text-[var(--color-off-white)]">
            It&apos;s a <span className="text-[var(--color-amber)]">lifting club.</span>
          </p>
          <p className="font-extrabold text-[40px] sm:text-[56px] md:text-[88px] lg:text-[112px] leading-[1.02] tracking-[-0.025em] text-[var(--color-off-white)]">
            Built for <span className="text-[var(--color-amber)]">the lift.</span>
          </p>
        </div>

        {/* Sub-line below */}
        <p className="mt-12 md:mt-16 text-[var(--color-off-white)]/60 font-light text-[16px] md:text-[18px] tracking-wide max-w-[640px] leading-[1.55]">
          Veteran-owned. Family-operated. Open and staffed every hour, every day, at both stations.
        </p>
      </div>
    </section>
  );
}
