"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Half = {
  name: string;
  videoSrc: string;
  videoFallback: string;
  poster: string;
  addressLine: string;
  phone: string;
  directionsUrl: string;
  slideFrom: -80 | 80;
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
    slideFrom: -80,
  },
  {
    name: "La Verne",
    videoSrc: "/gym-laverne-vertical.mp4",
    videoFallback: "/media-1.mp4",
    poster: "/laverne-station.jpg",
    addressLine: "1473 FOOTHILL BLVD · LA VERNE, CA 91750",
    phone: "(909) 593-3372",
    directionsUrl: "https://maps.google.com/?q=1473+Foothill+Boulevard+La+Verne+CA+91750",
    slideFrom: 80,
  },
];

function StationHalf({ half }: { half: Half }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });
  const reduce = useReducedMotion();

  const nameInitial = reduce ? { x: 0, opacity: 1 } : { x: half.slideFrom, opacity: 0 };
  const nameAnimate = (reduce || inView) ? { x: 0, opacity: 1 } : {};

  const bandInitial = reduce ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 };
  const bandAnimate = (reduce || inView) ? { y: 0, opacity: 1 } : {};

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={half.poster}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      >
        <source src={half.videoSrc} type="video/mp4" />
        <source src={half.videoFallback} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-canvas/65 group-hover:bg-canvas/35 transition-colors duration-500" />

      {/* Station name + underline — upper third */}
      <div className="relative z-10 h-full flex flex-col items-center pt-[18vh] px-6 md:px-12">
        <motion.span
          initial={nameInitial}
          animate={nameAnimate}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="display station-name text-[var(--color-off)] text-center"
        >
          {half.name.toUpperCase()}
        </motion.span>
        <span
          aria-hidden="true"
          className="block h-[3px] bg-coral mt-4 mx-auto transition-all duration-500 ease-out w-0 group-hover:w-24"
        />
      </div>

      {/* Address backdrop band — bottom */}
      <motion.div
        initial={bandInitial}
        animate={bandAnimate}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 w-[88%] max-w-md bg-canvas/85 backdrop-blur-sm rounded-lg px-6 py-5 text-center border border-transparent group-hover:border-coral/70 group-hover:shadow-[0_12px_40px_rgba(229,90,64,0.35)] transition-all duration-400 z-10"
      >
        <p className="text-[var(--color-off)] text-base md:text-lg font-semibold tracking-[0.18em] uppercase">
          {half.addressLine}
        </p>
        <p className="mt-2 text-[var(--color-off)] text-base md:text-lg font-semibold tracking-[0.18em]">
          {half.phone}
        </p>
        <a
          href={half.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-coral text-off font-semibold uppercase tracking-wider rounded-full transition-all duration-200 group-hover:scale-[1.04] group-hover:shadow-[0_8px_28px_rgba(229,90,64,0.55)]"
        >
          Choose this station
        </a>
      </motion.div>
    </div>
  );
}

export function Stations() {
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
        {halves.map((half) => (
          <div
            key={half.name}
            className="group relative w-full h-full overflow-hidden cursor-pointer"
          >
            <StationHalf half={half} />
          </div>
        ))}
      </div>

      {/* Mobile: stacked vertical mini-sections */}
      <div className="md:hidden flex flex-col">
        {halves.map((half) => (
          <div
            key={half.name}
            className="group relative w-full h-[70svh] overflow-hidden cursor-pointer"
          >
            <StationHalf half={half} />
          </div>
        ))}
      </div>
    </section>
  );
}
