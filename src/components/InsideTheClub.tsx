"use client";

import { Reveal, RevealGroup, RevealItem, ZoomParallax, SplitText, CountUp } from "./motion";

export function InsideTheClub() {
  return (
    <section id="inside" className="relative bg-[var(--color-canvas)] z-30 overflow-hidden">
      {/* Cinematic block — image fills generous space, zooms slowly as you scroll past */}
      <div className="relative w-full h-[75vh] min-h-[520px] overflow-hidden">
        <ZoomParallax fromScale={1.0} toScale={1.3} className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(\'/inside-club-bg.jpg\')" }}
          />
        </ZoomParallax>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--color-canvas)]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)] pointer-events-none" />

        <Reveal className="absolute top-10 md:top-16 left-6 md:left-12 z-10">
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em]">
            003 / INSIDE THE CLUB
          </div>
        </Reveal>

        <div className="absolute bottom-16 md:bottom-24 left-6 right-6 md:left-12 md:right-12 z-10">
          <SplitText
            by="word"
            stagger={0.08}
            as="h2"
            className="font-extrabold text-[44px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)] max-w-[900px]"
          >
            {"Premium equipment. No commercial feel."}
          </SplitText>
        </div>

        <Reveal delay={0.6} className="absolute bottom-16 right-6 md:right-12 text-right z-10">
          <div className="text-[var(--color-off-white)]/60 font-medium text-[10px] tracking-[0.32em] mb-1">CAPTURED</div>
          <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">HESPERIA STATION</div>
        </Reveal>
      </div>

      {/* Stats — generous breathing room */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <RevealGroup stagger={0.18} className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <RevealItem y={50}>
            <div className="font-extrabold text-[56px] md:text-[80px] leading-[1] text-[var(--color-amber)] mb-4">24/7</div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">ACCESS · BOTH STATIONS</div>
          </RevealItem>
          <RevealItem y={50}>
            <div className="font-extrabold text-[56px] md:text-[80px] leading-[1] text-[var(--color-amber)] mb-4">
              <CountUp end={2} />
            </div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">LOCATIONS · HESPERIA + LA VERNE</div>
          </RevealItem>
          <RevealItem y={50}>
            <div className="font-extrabold text-[56px] md:text-[80px] leading-[1] text-[var(--color-amber)] mb-4">
              <CountUp end={0} />
            </div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">CONTRACTS REQUIRED</div>
          </RevealItem>
          <RevealItem y={50}>
            <div className="font-extrabold text-[56px] md:text-[80px] leading-[1] text-[var(--color-amber)] mb-4">
              <CountUp end={21000} />
            </div>
            <div className="text-[var(--color-off-white)]/60 font-medium text-[11px] tracking-[0.22em]">COMMUNITY · INSTAGRAM</div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
