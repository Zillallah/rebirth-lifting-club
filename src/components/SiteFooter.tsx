export function SiteFooter() {
  return (
    <footer id="contact" className="relative bg-[var(--color-carbon)] z-90 overflow-hidden pt-20 md:pt-32">
      <div className="relative w-full max-w-[1480px] mx-auto px-6 md:px-12">
        {/* Massive headline */}
        <h2 className="font-extrabold text-[96px] sm:text-[140px] md:text-[200px] lg:text-[240px] leading-[0.85] tracking-[-0.035em] text-[var(--color-off-white)] mb-16 md:mb-24">
          REBIRTH<span className="text-[var(--color-amber)]">.</span>
        </h2>

        {/* Two-location block */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 pb-16 md:pb-20 border-b border-[var(--color-steel)]/40">
          <div>
            <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-4">
              STATION ONE
            </div>
            <div className="font-bold text-[24px] md:text-[28px] tracking-[-0.01em] text-[var(--color-off-white)] mb-3">
              Hesperia, CA
            </div>
            <div className="font-light text-[15px] leading-[1.6] text-[var(--color-off-white)]/75 mb-2">
              15555 Main St, Ste C1-2<br />
              Hesperia, CA 92345
            </div>
            <a href="tel:+17609953137" className="block text-[var(--color-amber)] font-bold text-[15px] tracking-[0.04em] hover:underline">
              (760) 995-3137
            </a>
          </div>

          <div>
            <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-4">
              STATION TWO
            </div>
            <div className="font-bold text-[24px] md:text-[28px] tracking-[-0.01em] text-[var(--color-off-white)] mb-3">
              La Verne, CA
            </div>
            <div className="font-light text-[15px] leading-[1.6] text-[var(--color-off-white)]/75 mb-2">
              1473 Foothill Boulevard<br />
              La Verne, CA 91750
            </div>
            <a href="tel:+17609953137" className="block text-[var(--color-amber)] font-bold text-[15px] tracking-[0.04em] hover:underline">
              (760) 995-3137
            </a>
          </div>
        </div>

        {/* Social + hours */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-12 md:py-16 border-b border-[var(--color-steel)]/40">
          <div>
            <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] mb-2">HOURS</div>
            <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">
              MON—SUN · 24 HRS · STAFFED 24/7
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/rebirthliftingclub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-[var(--color-steel)]/60 text-[var(--color-off-white)]/70 hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] transition-all duration-200"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://facebook.com/rebirthliftingclub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-[var(--color-steel)]/60 text-[var(--color-off-white)]/70 hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] transition-all duration-200"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 text-[var(--color-off-white)]/45 font-medium text-[10px] tracking-[0.28em]">
          <div>
            © 2026 REBIRTH LIFTING CLUB · USMC VETERAN-OWNED · STAFFED 24/7
          </div>
          <div>
            SITE BY{" "}
            <a href="https://ashesystems.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--color-amber)] hover:underline">
              ASHE SYSTEMS CONSULTING
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
