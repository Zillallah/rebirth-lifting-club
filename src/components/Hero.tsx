import { LiveStatus } from "./LiveStatus";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-canvas)] z-0">
      {/* Background video — full-bleed, autoplay, muted, looping */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay layers — sit above the video, below the UI */}
      <div className="absolute inset-x-0 top-0 h-[18vh] bg-gradient-to-b from-black/[0.72] to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-[38vh] bg-gradient-to-t from-black/[0.92] via-black/60 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.45)_100%)] pointer-events-none z-[1]" />

      {/* Nav — top */}
      <nav className="absolute top-8 left-6 right-6 md:left-12 md:right-12 flex items-center justify-between z-10">
        <div className="flex items-center gap-12">
          <span className="font-extrabold text-[14px] tracking-[0.28em] text-[var(--color-off-white)]">
            REBIRTH LIFTING CLUB
          </span>
          <div className="hidden md:flex gap-8 text-[12px] tracking-[0.18em] font-medium text-[var(--color-off-white-2)]">
            <a href="#founder" className="hover:text-[var(--color-amber)] transition-colors duration-200">
              FOUNDER
            </a>
            <a href="#stations" className="hover:text-[var(--color-amber)] transition-colors duration-200">
              STATIONS
            </a>
            <a href="#membership" className="hover:text-[var(--color-amber)] transition-colors duration-200">
              MEMBERSHIP
            </a>
            <a href="#contact" className="hover:text-[var(--color-amber)] transition-colors duration-200">
              CONTACT
            </a>
          </div>
        </div>
        <LiveStatus />
      </nav>

      {/* Footer block — bottom-left tagline + CTA, bottom-right station/membership stack */}
      <div className="absolute bottom-16 md:bottom-20 left-6 right-6 md:left-12 md:right-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 z-10">
        <div className="flex-1 max-w-[540px]">
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-[18px]">
            VETERAN-OWNED · FAMILY-OPERATED
          </div>
          <p className="font-extralight text-[18px] md:text-[22px] leading-[1.35] text-[var(--color-off-white)]/[0.92] mb-8 max-w-[520px]">
            A lifting club, not a chain gym.{" "}
            <strong className="font-bold text-[var(--color-off-white)]">
              Two stations. Open and staffed every hour of every day.
            </strong>
          </p>
          <a
            href="#the-pass"
            className="inline-flex items-center gap-3.5 px-7 py-4 border-[1.5px] border-[var(--color-amber)] text-[var(--color-amber)] font-bold text-[13px] tracking-[0.22em] hover:bg-[var(--color-amber)] hover:text-[var(--color-canvas)] hover:shadow-[0_0_30px_-6px_rgba(244,160,36,0.5)] transition-all duration-[250ms]"
          >
            CLAIM YOUR FREE 3-DAY PASS <span className="text-[18px]">→</span>
          </a>
        </div>

        <div className="text-right">
          <div className="mb-[18px]">
            <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] mb-1">
              STATION ONE
            </div>
            <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">
              HESPERIA · CA
            </div>
          </div>
          <div className="mb-[18px]">
            <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] mb-1">
              STATION TWO
            </div>
            <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">
              LA VERNE · CA
            </div>
          </div>
          <div>
            <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] mb-1">
              MEMBERSHIP
            </div>
            <div className="text-[var(--color-amber)] font-bold text-[14px] tracking-[0.18em]">
              FROM $30.99 · NO CONTRACT
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — scroll cue + USMC anchor */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-3.5 border-t border-[var(--color-off-white)]/[0.08] bg-black/70 backdrop-blur-md flex items-center justify-between text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] z-10">
        <span>SCROLL FOR DOCTRINE ↓</span>
        <span>
          <span className="text-[var(--color-amber)] font-bold">USMC 0331</span> · EST 2018 · HD CALIFORNIA
        </span>
      </div>
    </section>
  );
}
