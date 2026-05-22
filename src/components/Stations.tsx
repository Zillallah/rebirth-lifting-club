"use client";

import { Reveal, SlideIn } from "./motion";
import { LiveStatus } from "./LiveStatus";

type StationCardProps = {
  label: string;
  city: string;
  address: string;
  zipline: string;
  phone: string;
  mapsQuery: string;
  directionsUrl: string;
};

function StationCard({ label, city, address, zipline, phone, mapsQuery, directionsUrl }: StationCardProps) {
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed&z=15`;
  return (
    <div className="bg-[var(--color-canvas)] border border-[var(--color-steel)]/40 p-10 md:p-12 hover:border-[var(--color-amber)]/60 hover:-translate-y-1 transition-all duration-500">
      <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-5">
        {label}
      </div>
      <h3 className="font-extrabold text-[48px] md:text-[64px] leading-[1] tracking-[-0.025em] text-[var(--color-off-white)] mb-8">
        {city}
      </h3>

      <div className="space-y-4 mb-10">
        <div className="text-[var(--color-off-white)]/90 font-light text-[15px] leading-[1.55]">
          {address}<br />
          {zipline}
        </div>
        <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="block text-[var(--color-amber)] font-bold text-[15px] tracking-[0.04em] hover:underline">
          {phone}
        </a>
        <div className="pt-3"><LiveStatus /></div>
      </div>

      <div className="relative aspect-[16/10] border border-[var(--color-steel)]/30 overflow-hidden mb-8">
        <iframe
          src={embedUrl}
          width="100%" height="100%"
          style={{ border: 0, filter: "grayscale(0.4) brightness(0.85)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${city} location map`}
        />
      </div>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-3.5 border-[1.5px] border-[var(--color-amber)] text-[var(--color-amber)] font-bold text-[12px] tracking-[0.22em] hover:bg-[var(--color-amber)] hover:text-[var(--color-canvas)] transition-all duration-300"
      >
        GET DIRECTIONS <span className="text-[16px]">→</span>
      </a>
    </div>
  );
}

export function Stations() {
  return (
    <section id="stations" className="relative bg-[var(--color-carbon)] z-50 overflow-hidden py-20 md:py-28">
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-8">
            005 / STATIONS
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-extrabold text-[44px] md:text-[72px] lg:text-[88px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)] mb-8">
            Two stations. <span className="text-[var(--color-amber)]">One standard.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-light text-[16px] md:text-[18px] text-[var(--color-off-white)]/65 max-w-[640px] mb-20 md:mb-28 leading-[1.6]">
            Both clubs open 24 hours. Both staffed 24 hours. One membership covers both.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <SlideIn direction="left" distance={150} duration={1.1}>
            <StationCard
              label="STATION ONE"
              city="HESPERIA"
              address="15555 Main St, Ste C1-2"
              zipline="Hesperia, CA 92345"
              phone="(760) 995-3137"
              mapsQuery="15555 Main St, Hesperia, CA 92345"
              directionsUrl="https://maps.google.com/?q=15555+Main+St+Hesperia+CA+92345"
            />
          </SlideIn>
          <SlideIn direction="right" distance={150} delay={0.15} duration={1.1}>
            <StationCard
              label="STATION TWO"
              city="LA VERNE"
              address="1473 Foothill Boulevard"
              zipline="La Verne, CA 91750"
              phone="(760) 995-3137"
              mapsQuery="1473 Foothill Boulevard, La Verne, CA 91750"
              directionsUrl="https://maps.google.com/?q=1473+Foothill+Boulevard+La+Verne+CA+91750"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
