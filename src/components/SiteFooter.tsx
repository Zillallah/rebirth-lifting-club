"use client";

import { Reveal, RevealGroup, RevealItem, ZoomReveal } from "./motion";

export function SiteFooter() {
  return (
    <footer id="contact" className="relative bg-[var(--color-carbon)] z-90 overflow-hidden pt-32 md:pt-52">
      <div className="relative w-full max-w-[1480px] mx-auto px-6 md:px-12">
        <ZoomReveal from="in" startScale={1.3} duration={1.4}>
          <h2 className="font-extrabold text-[112px] sm:text-[160px] md:text-[240px] lg:text-[280px] leading-[0.85] tracking-[-0.04em] text-[var(--color-off-white)] mb-20 md:mb-32">
            REBIRTH<span className="text-[var(--color-amber)]">.</span>
          </h2>
        </ZoomReveal>

        <RevealGroup stagger={0.18} className="grid md:grid-cols-2 gap-12 md:gap-20 pb-20 md:pb-28 border-b border-[var(--color-steel)]/40">
          <RevealItem>
            <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-5">STATION ONE</div>
            <div className="font-bold text-[28px] md:text-[32px] tracking-[-0.01em] text-[var(--color-off-white)] mb-4">Hesperia, CA</div>
            <div className="font-light text-[15px] leading-[1.65] text-[var(--color-off-white)]/75 mb-3">
              15555 Main St, Ste C1-2<br />
              Hesperia, CA 92345
            </div>
            <a href="tel:+17609953137" className="block text-[var(--color-amber)] font-bold text-[15px] tracking-[0.04em] hover:underline">(760) 995-3137</a>
          </RevealItem>
          <RevealItem>
            <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-5">STATION TWO</div>
            <div className="font-bold text-[28px] md:text-[32px] tracking-[-0.01em] text-[var(--color-off-white)] mb-4">La Verne, CA</div>
            <div className="font-light text-[15px] leading-[1.65] text-[var(--color-off-white)]/75 mb-3">
              1473 Foothill Boulevard<br />
              La Verne, CA 91750
            </div>
            <a href="tel:+17609953137" className="block text-[var(--color-amber)] font-bold text-[15px] tracking-[0.04em] hover:underline">(760) 995-3137</a>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.3}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 py-16 md:py-20 border-b border-[var(--color-steel)]/40">
            <div>
              <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] mb-2">HOURS</div>
              <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">MON—SUN · 24 HRS · STAFFED 24/7</div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/rebirthliftingclub" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-[var(--color-steel)]/60 text-[var(--color-off-white)]/70 hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] hover:-translate-y-0.5 transition-all duration-300" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com/rebirthliftingclub" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-[var(--color-steel)]/60 text-[var(--color-off-white)]/70 hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] hover:-translate-y-0.5 transition-all duration-300" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-10 text-[var(--color-off-white)]/45 font-medium text-[10px] tracking-[0.28em]">
          <div>© 2026 REBIRTH LIFTING CLUB · USMC VETERAN-OWNED · STAFFED 24/7</div>
          <div>SITE BY <a href="https://ashesystems.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--color-amber)] hover:underline">ASHE SYSTEMS CONSULTING</a></div>
        </div>
      </div>
    </footer>
  );
}
