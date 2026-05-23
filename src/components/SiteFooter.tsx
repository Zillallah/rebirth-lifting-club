"use client";

import { LiveClock } from "./LiveClock";
import { XMark } from "./XMark";

export function SiteFooter() {
  return (
    <footer className="relative bg-[var(--color-canvas)] pt-20 md:pt-28 pb-10 overflow-hidden border-t border-[var(--color-steel)]/30">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-24">
          <div className="flex items-center gap-8">
            <XMark size={88} color="var(--color-coral)" showCaption />
            <div className="font-extrabold text-[60px] sm:text-[96px] md:text-[140px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-[var(--color-off-white)]">
              REBIRTH<span className="text-[var(--color-coral)]">.</span>
            </div>
          </div>
          <LiveClock variant="footer" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 pb-14 border-b border-[var(--color-steel)]/30">
          <div>
            <div className="text-[var(--color-coral)] font-semibold text-[10px] tracking-[0.32em] mb-4">
              HESPERIA
            </div>
            <div className="font-light text-[15px] leading-[1.7] text-[var(--color-off-white)]/80">
              15555 Main St, Ste C1-2<br />
              Hesperia, CA 92345
            </div>
          </div>
          <div>
            <div className="text-[var(--color-coral)] font-semibold text-[10px] tracking-[0.32em] mb-4">
              LA VERNE
            </div>
            <div className="font-light text-[15px] leading-[1.7] text-[var(--color-off-white)]/80">
              1473 Foothill Boulevard<br />
              La Verne, CA 91750
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 text-[10px] tracking-[0.28em] font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+17609953137" className="text-[var(--color-off-white)]/55 hover:text-[var(--color-coral)] transition-colors">
              (760) 995-3137
            </a>
            <a href="https://instagram.com/rebirthliftingclub" target="_blank" rel="noopener noreferrer" className="text-[var(--color-off-white)]/55 hover:text-[var(--color-coral)] transition-colors">
              IG · @REBIRTHLIFTINGCLUB
            </a>
          </div>
          <div className="text-[var(--color-off-white)]/55">
            © 2026 REBIRTH LIFTING CLUB · USMC VETERAN-OWNED · SITE BY{" "}
            <a href="https://ashesystems.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--color-coral)] underline underline-offset-2">
              ASHE SYSTEMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
