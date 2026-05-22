"use client";

type StationProps = {
  label: string;
  city: string;
  address1: string;
  address2: string;
  bgImage: string;
  directionsUrl: string;
};

function StationHalf({ label, city, address1, address2, bgImage, directionsUrl }: StationProps) {
  return (
    <a
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/5] md:aspect-auto md:min-h-[680px] overflow-hidden"
    >
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.04]"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      {/* Dark fallback if image missing */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/40 via-transparent to-[#050505]/95" />
      <div className="absolute inset-0 bg-[var(--color-canvas)]/30 group-hover:bg-[var(--color-canvas)]/10 transition-colors duration-500" />

      {/* Top-left label */}
      <div className="absolute top-8 left-8 md:top-10 md:left-10">
        <div className="text-[var(--color-amber)] font-semibold text-[10px] md:text-[11px] tracking-[0.32em]">
          {label}
        </div>
      </div>

      {/* Bottom — city + address */}
      <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
        <h3 className="font-extrabold text-[56px] sm:text-[72px] md:text-[96px] lg:text-[112px] leading-[0.9] tracking-[-0.035em] text-[var(--color-off-white)] mb-5">
          {city}
        </h3>
        <div className="font-light text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-off-white)]/80">
          {address1}<br />{address2}
        </div>
        <div className="mt-6 inline-flex items-center gap-3 text-[var(--color-amber)] font-bold text-[11px] md:text-[12px] tracking-[0.22em] border-b border-[var(--color-amber)]/0 group-hover:border-[var(--color-amber)] pb-1 transition-all duration-300">
          GET DIRECTIONS
          <span className="text-[16px] transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
}

export function Stations() {
  return (
    <section id="stations" className="relative bg-[var(--color-canvas)] overflow-hidden">
      {/* Phone whisper, centered, above the two halves */}
      <div className="text-center py-10 md:py-14">
        <a
          href="tel:+17609953137"
          className="inline-flex items-baseline gap-4 font-mono text-[var(--color-off-white)]/55 hover:text-[var(--color-amber)] transition-colors"
        >
          <span className="text-[10px] tracking-[0.32em] font-semibold">CALL</span>
          <span className="text-[18px] md:text-[20px] tracking-[0.04em] tabular-nums">
            (760) 995-3137
          </span>
        </a>
      </div>

      <div className="grid md:grid-cols-2">
        <StationHalf
          label="STATION ONE"
          city="HESPERIA"
          address1="15555 Main St, Ste C1-2"
          address2="Hesperia, CA 92345"
          bgImage="/inside-club-bg.jpg"
          directionsUrl="https://maps.google.com/?q=15555+Main+St+Hesperia+CA+92345"
        />
        <StationHalf
          label="STATION TWO"
          city="LA VERNE"
          address1="1473 Foothill Boulevard"
          address2="La Verne, CA 91750"
          bgImage="/inside-club-bg.jpg"
          directionsUrl="https://maps.google.com/?q=1473+Foothill+Boulevard+La+Verne+CA+91750"
        />
      </div>
    </section>
  );
}
