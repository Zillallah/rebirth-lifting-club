export function InsideTheClub() {
  return (
    <section id="inside" className="relative bg-[var(--color-canvas)] z-30 overflow-hidden">
      {/* Top: full-bleed cinematic image */}
      <div
        className="relative w-full h-[70vh] min-h-[480px] bg-cover bg-center"
        style={{ backgroundImage: "url('/inside-club-bg.jpg')" }}
      >
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--color-canvas)]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)] pointer-events-none" />

        {/* Top-left overlay */}
        <div className="absolute top-8 md:top-12 left-6 md:left-12 z-10">
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em]">
            003 / INSIDE THE CLUB
          </div>
        </div>

        {/* Bottom-left overlay headline */}
        <div className="absolute bottom-12 md:bottom-16 left-6 right-6 md:left-12 md:right-12 z-10">
          <h2 className="font-extrabold text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)] max-w-[820px]">
            Premium equipment.<br />
            <span className="text-[var(--color-amber)]">No commercial feel.</span>
          </h2>
        </div>

        {/* Bottom-right tactical metadata */}
        <div className="absolute bottom-12 right-6 md:right-12 text-right z-10">
          <div className="text-[var(--color-off-white)]/60 font-medium text-[10px] tracking-[0.32em] mb-1">CAPTURED</div>
          <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">HESPERIA STATION</div>
        </div>
      </div>

      {/* Below: stat callouts */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">24/7</div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">ACCESS · BOTH STATIONS</div>
          </div>
          <div>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">2</div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">LOCATIONS · HESPERIA + LA VERNE</div>
          </div>
          <div>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">0</div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">CONTRACTS REQUIRED</div>
          </div>
          <div>
            <div className="font-extrabold text-[48px] md:text-[64px] leading-[1] text-[var(--color-amber)] mb-3">21K</div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">COMMUNITY · INSTAGRAM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
