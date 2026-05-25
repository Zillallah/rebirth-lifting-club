"use client";

import { useState } from "react";

type Half = {
  name: string;
  videoSrc: string;
  videoFallback: string;
  poster: string;
  addressLine: string;
  phone: string;
  directionsUrl: string;
  align: "right" | "left";
};

const halves: Half[] = [
  {
    name: "Hesperia",
    videoSrc: "/gym-pano-long.mp4",
    videoFallback: "/media-3.mp4",
    poster: "/hesperia-station.jpg",
    addressLine: "15555 MAIN ST STE C1-2 · HESPERIA, CA 92345",
    phone: "(760) 995-3137",
    directionsUrl: "https://maps.google.com/?q=15555+Main+St+Hesperia+CA+92345",
    align: "right",
  },
  {
    name: "La Verne",
    videoSrc: "/gym-laverne-vertical.mp4",
    videoFallback: "/media-1.mp4",
    poster: "/laverne-station.jpg",
    addressLine: "1473 FOOTHILL BLVD · LA VERNE, CA 91750",
    phone: "(909) 593-3372",
    directionsUrl: "https://maps.google.com/?q=1473+Foothill+Boulevard+La+Verne+CA+91750",
    align: "left",
  },
];

function StationHalf({ half, hovered }: { half: Half; hovered: boolean }) {
  const seamPad =
    half.align === "right"
      ? "items-end text-right pr-2 md:pr-4"
      : "items-start text-left pl-2 md:pl-4";

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={half.poster}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={half.videoSrc} type="video/mp4" />
        <source src={half.videoFallback} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[1] transition-[background-color] duration-[240ms]"
        style={{
          backgroundColor: hovered
            ? "rgba(5,5,5,0.45)"
            : "rgba(5,5,5,0.65)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
        <div className={`flex flex-col ${seamPad}`}>
          <h3 className="display station-name text-[var(--color-off)]">
            {half.name.toUpperCase()}
          </h3>
          <p className="mt-6 text-[var(--color-off)] text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
            {half.addressLine}
          </p>
          <p className="mt-2 text-[var(--color-off)] text-xs md:text-sm font-semibold tracking-[0.18em]">
            {half.phone}
          </p>
          <a
            href={half.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex items-center gap-2 text-[var(--color-off)] text-xs tracking-[0.22em] uppercase font-semibold transition-opacity duration-200 ${
              hovered ? "opacity-100" : "opacity-0"
            } ${half.align === "right" ? "self-end" : "self-start"}`}
          >
            Choose this station <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Stations() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="stations"
      className="relative bg-[var(--color-canvas)] overflow-hidden"
    >
      {/* Desktop / tablet: split-screen collision */}
      <div className="hidden md:grid md:grid-cols-2 h-[100svh] relative">
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[var(--color-coral)] z-20 pointer-events-none"
          aria-hidden
        />
        {halves.map((half, i) => (
          <button
            key={half.name}
            type="button"
            className="relative block w-full h-full text-left cursor-default"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
            aria-label={`${half.name} station`}
          >
            <StationHalf half={half} hovered={hovered === i} />
          </button>
        ))}
      </div>

      {/* Mobile: stacked vertical mini-sections */}
      <div className="md:hidden flex flex-col">
        {halves.map((half) => (
          <div key={half.name} className="relative w-full h-[60svh]">
            <StationHalf half={{ ...half, align: "left" }} hovered={true} />
          </div>
        ))}
      </div>
    </section>
  );
}
