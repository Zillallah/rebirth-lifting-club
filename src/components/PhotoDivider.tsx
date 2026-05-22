"use client";

export function PhotoDivider() {
  return (
    <div className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-black">
      {/* Continuous slow zoom — CSS keyframe, always animating */}
      <div
        className="absolute inset-0 bg-cover bg-center photo-zoom"
        style={{
          backgroundImage: "url('/inside-club-bg.jpg')",
          filter: "brightness(0.55) contrast(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-canvas)] via-transparent to-[var(--color-canvas)]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.7)_100%)] pointer-events-none" />

      {/* Overlay caption — bottom-left */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-10">
        <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-2">
          INSIDE THE CLUB
        </div>
        <div className="font-extrabold text-[28px] md:text-[40px] leading-[1] tracking-[-0.02em] text-[var(--color-off-white)] max-w-[600px]">
          Power racks. Platforms. Real iron.
        </div>
      </div>
    </div>
  );
}
