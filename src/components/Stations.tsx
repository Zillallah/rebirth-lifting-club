"use client";

import { FadeUp } from "./motion/FadeUp";

type StationCardProps = {
  label: string;
  city: string;
  address1: string;
  address2: string;
  bgImage: string;
  bgMotion: "zoom" | "drift";
  directionsUrl: string;
};

function StationCard({ label, city, address1, address2, bgImage, bgMotion, directionsUrl }: StationCardProps) {
  const motionClass = bgMotion === "zoom" ? "photo-zoom" : "photo-drift";

  return (
    <a
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden border border-[var(--color-steel)]/30 hover:border-[var(--color-amber)]/60 transition-colors duration-500"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center ${motionClass}`}
        style={{
          backgroundImage: `url('${bgImage}')`,
          filter: "brightness(0.65) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[var(--color-canvas)]/15 group-hover:bg-[var(--color-canvas)]/0 transition-colors duration-700 pointer-events-none" />

      <div className="absolute top-8 left-8 md:top-10 md:left-10 z-10">
        <div className="text-[var(--color-amber)] font-semibold text-[10px] md:text-[11px] tracking-[0.32em]">
          {label}
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 z-10">
        <h3 className="font-extrabold text-[56px] sm:text-[72px] md:text-[88px] lg:text-[112px] leading-[0.88] tracking-[-0.04em] text-[var(--color-off-white)] mb-5">
          {city}
        </h3>
        <div className="font-light text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-off-white)]/85 mb-5">
          {address1}<br />{address2}
        </div>
        <div className="inline-flex items-center gap-3 text-[var(--color-amber)] font-bold text-[11px] md:text-[12px] tracking-[0.22em] border-b border-[var(--color-amber)]/0 group-hover:border-[var(--color-amber)] pb-1 transition-all duration-300">
          GET DIRECTIONS
          <span className="text-[16px] transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
}

export function Stations() {
  return (
    <section id="stations" className="relative bg-[var(--color-canvas)] py-24 md:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <FadeUp className="text-center mb-16 md:mb-20">
          <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-4">
            CALL · (760) 995-3137
          </div>
          <div className="text-[var(--color-off-white)]/55 font-light text-[13px] tracking-[0.18em]">
            ONE MEMBERSHIP · BOTH STATIONS
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <StationCard
            label="STATION ONE"
            city="HESPERIA"
            address1="15555 Main St, Ste C1-2"
            address2="Hesperia, CA 92345"
            bgImage="/photo-from-the-ashes.jpg"
            bgMotion="zoom"
            directionsUrl="https://maps.google.com/?q=15555+Main+St+Hesperia+CA+92345"
          />
          <StationCard
            label="STATION TWO"
            city="LA VERNE"
            address1="1473 Foothill Boulevard"
            address2="La Verne, CA 91750"
            bgImage="/photo-red-beam.jpg"
            bgMotion="drift"
            directionsUrl="https://maps.google.com/?q=1473+Foothill+Boulevard+La+Verne+CA+91750"
          />
        </div>
      </div>
    </section>
  );
}
