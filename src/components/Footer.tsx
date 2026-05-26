export function Footer() {
  return (
    <footer className="bg-[var(--color-canvas)] py-24 border-t border-[var(--color-steel)]/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-[var(--color-off)]">
          <div className="space-y-3">
            <p className="eyebrow">Hesperia</p>
            <p className="text-base leading-relaxed">
              15555 Main St Ste C1-2
              <br />
              Hesperia, CA 92345
            </p>
            <p>
              <a
                href="tel:+17609953137"
                className="text-base hover:text-[var(--color-coral)] transition-colors"
              >
                (760) 995-3137
              </a>
            </p>
            <p className="text-[var(--color-coral)] text-xs tracking-[0.32em] uppercase font-medium pt-2">
              Open &amp; Staffed 24/7
            </p>
          </div>

          <div className="space-y-3">
            <p className="eyebrow">La Verne</p>
            <p className="text-base leading-relaxed">
              1473 Foothill Boulevard
              <br />
              La Verne, CA 91750
            </p>
            <p>
              <a
                href="tel:+19095933372"
                className="text-base hover:text-[var(--color-coral)] transition-colors"
              >
                (909) 593-3372
              </a>
            </p>
            <p className="text-[var(--color-coral)] text-xs tracking-[0.32em] uppercase font-medium pt-2">
              Open &amp; Staffed 24/7
            </p>
          </div>

          <div className="space-y-3">
            <p className="eyebrow">Connect</p>
            <ul className="space-y-2 text-base">
              <li>
                <a
                  href="https://www.instagram.com/rebirthliftingclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-coral)] transition-colors"
                >
                  @rebirthliftingclub
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/rebirthliftingclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-coral)] transition-colors"
                >
                  Rebirth Lifting Club
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@rebirthclubmanagement.com"
                  className="hover:text-[var(--color-coral)] transition-colors break-words"
                >
                  admin@rebirthclubmanagement.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-steel)]/40 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[var(--color-steel)] text-sm">
          <p>USMC Veteran / Family Owned and Operated</p>
          <p>© {new Date().getFullYear()} Rebirth Lifting Club</p>
        </div>
      </div>
    </footer>
  );
}
