"use client";

export default function FooterBrand() {
  return (
    <section
      aria-label="Rebirth Lifting Club brand"
      className="relative bg-canvas py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle radial coral glow behind the logo — premium signature feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="h-[40rem] w-[40rem] rounded-full bg-coral/[0.08] blur-3xl" />
      </div>

      {/* Centered logo */}
      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/rebirth-logo.png"
          alt="Rebirth Lifting Club"
          className="h-32 md:h-44 lg:h-52 w-auto object-contain opacity-95 select-none"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
    </section>
  );
}
