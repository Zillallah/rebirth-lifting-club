"use client";

import LiveStatus from "@/components/LiveStatus";

/**
 * Hero — section 001, z-0 (V2 §7.1).
 *
 * Full-bleed background video (WebM preferred, MP4 fallback, poster image
 * for first paint). Three overlay layers above the video and below the
 * UI ensure readable contrast. Nav lives at top, footer block + bottom
 * strip live at bottom. No section-level entry animation — the video
 * carries the entrance.
 *
 * Asset workflow:
 *   /public/hero-source.mp4 → ffmpeg encode → hero.mp4 + hero.webm + hero-poster.jpg
 *   hero-source.mp4 is gitignored. The three encoded files are committed.
 */
export default function Hero() {
  return (
    <section className="relative z-0 min-h-screen overflow-hidden bg-canvas">
      {/* Background video — full bleed */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay layers — top gradient, bottom gradient, vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[18vh] bg-gradient-to-b from-black/[0.72] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[38vh] bg-gradient-to-t from-black/[0.92] via-black/[0.6] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.45)_100%)]"
      />

      {/* Nav — top */}
      <nav className="absolute left-12 right-12 top-8 z-10 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <span className="font-body text-[14px] font-extrabold tracking-[0.28em] text-off-white">
            REBIRTH LIFTING CLUB
          </span>
          <div className="hidden gap-8 text-[12px] font-medium tracking-[0.18em] text-off-white-2 md:flex">
            <a
              href="#founder"
              className="transition-colors hover:text-amber"
            >
              FOUNDER
            </a>
            <a
              href="#stations"
              className="transition-colors hover:text-amber"
            >
              STATIONS
            </a>
            <a
              href="#membership"
              className="transition-colors hover:text-amber"
            >
              MEMBERSHIP
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-amber"
            >
              CONTACT
            </a>
          </div>
        </div>
        <LiveStatus />
      </nav>

      {/* Footer block — above bottom strip */}
      <div className="absolute bottom-12 left-12 right-12 z-10 flex items-end justify-between gap-12">
        {/* Left — eyebrow, tagline, CTA */}
        <div className="max-w-[540px] flex-1">
          <div className="mb-[18px] text-[12px] font-semibold tracking-[0.32em] text-amber">
            VETERAN-OWNED · FAMILY-OPERATED
          </div>
          <p className="mb-8 max-w-[520px] text-[22px] font-extralight leading-[1.35] text-off-white/[0.92]">
            A lifting club, not a chain gym.{" "}
            <strong className="font-bold text-off-white">
              Two stations. Open and staffed every hour of every day.
            </strong>
          </p>
          <a
            href="#the-pass"
            className="duration-250 inline-flex items-center gap-3.5 border-[1.5px] border-amber px-7 py-4 text-[13px] font-bold tracking-[0.22em] text-amber transition-all hover:bg-amber hover:text-canvas hover:shadow-[0_0_30px_-6px_rgba(244,160,36,0.5)]"
          >
            CLAIM YOUR FREE 3-DAY PASS <span className="text-[18px]">→</span>
          </a>
        </div>

        {/* Right — station + membership readout */}
        <div className="text-right">
          <div className="mb-[18px]">
            <div className="mb-1 text-[10px] font-medium tracking-[0.32em] text-off-white/55">
              STATION ONE
            </div>
            <div className="text-[14px] font-bold tracking-[0.18em] text-off-white">
              HESPERIA · CA
            </div>
          </div>
          <div className="mb-[18px]">
            <div className="mb-1 text-[10px] font-medium tracking-[0.32em] text-off-white/55">
              STATION TWO
            </div>
            <div className="text-[14px] font-bold tracking-[0.18em] text-off-white">
              LA VERNE · CA
            </div>
          </div>
          <div>
            <div className="mb-1 text-[10px] font-medium tracking-[0.32em] text-off-white/55">
              MEMBERSHIP
            </div>
            <div className="text-[14px] font-bold tracking-[0.18em] text-amber">
              FROM $30.99 · NO CONTRACT
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — scroll cue + classification line */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-off-white/[0.08] bg-black/70 px-12 py-3.5 text-[10px] font-medium tracking-[0.32em] text-off-white/55 backdrop-blur-md">
        <span>SCROLL FOR DOCTRINE ↓</span>
        <span>
          <span className="font-bold text-amber">USMC 0331</span> · EST 2018 ·
          HD CALIFORNIA
        </span>
      </div>
    </section>
  );
}
