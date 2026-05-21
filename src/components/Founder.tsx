"use client";

import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { Parallax } from "./motion/Parallax";
import { XMark } from "./XMark";

export function Founder() {
  return (
    <section id="founder" className="relative bg-[var(--color-carbon)] z-20 overflow-hidden min-h-screen flex items-center py-32 md:py-48">
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[420px_1fr] gap-12 md:gap-20 items-center">
          {/* Left — portrait with subtle parallax */}
          <Reveal y={48} duration={1.0}>
            <Parallax speed={0.15}>
              <div className="relative mx-auto md:mx-0 w-full max-w-[420px]">
                <div className="relative aspect-[4/5] bg-[var(--color-canvas)] border-[1.5px] border-[var(--color-amber)]/60 p-2 hover:border-[var(--color-amber)] transition-colors duration-500 group">
                  <div className="relative w-full h-full bg-gradient-to-b from-[#1A1A1C] to-[#0A0A0C] overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <radialGradient id="warmlight-founder" cx="50%" cy="35%" r="50%">
                          <stop offset="0%" stopColor="var(--color-amber)" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="var(--color-amber)" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <rect width="400" height="500" fill="url(#warmlight-founder)" />
                      <circle cx="200" cy="180" r="62" fill="#0A0A0A" />
                      <path d="M 70 500 L 70 380 Q 70 300 200 300 Q 330 300 330 380 L 330 500 Z" fill="#0A0A0A" />
                    </svg>
                    <div className="absolute bottom-3 right-3 opacity-50">
                      <XMark size={56} opacity={0.5} />
                    </div>
                  </div>
                </div>
                <div className="text-[var(--color-off-white)]/40 font-medium text-[10px] tracking-[0.32em] mt-4 text-center md:text-left">
                  EXHIBIT A · FOUNDER
                </div>
              </div>
            </Parallax>
          </Reveal>

          {/* Right — content */}
          <RevealGroup stagger={0.12}>
            <RevealItem className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-6">
              002 / THE FOUNDER
            </RevealItem>

            <RevealItem as="h2" className="font-extrabold text-[72px] md:text-[112px] leading-[0.92] tracking-[-0.03em] text-[var(--color-off-white)] mb-4">
              Armando<span className="text-[var(--color-amber)]">.</span>
            </RevealItem>

            <RevealItem className="font-semibold text-[14px] tracking-[0.22em] text-[var(--color-off-white)]/80 mb-8 md:mb-10">
              USMC 0331 · MACHINE GUNNER · FOUNDER
            </RevealItem>

            <RevealItem className="relative pl-6 border-l-2 border-[var(--color-amber)] my-8 md:my-10">
              <p className="font-light italic text-[20px] md:text-[24px] leading-[1.4] text-[var(--color-off-white)] max-w-[520px]">
                &ldquo;If it&apos;s open, it&apos;s staffed. That&apos;s the standard.&rdquo;
              </p>
            </RevealItem>

            <RevealItem as="p" className="font-light text-[16px] md:text-[17px] leading-[1.65] text-[var(--color-off-white)]/75 max-w-[560px]">
              Armando served as a USMC 0331 Machine Gunner. After his time in service, he opened Rebirth to build the kind of gym he wanted to train in — open every hour, staffed every hour, run by a family that actually shows up. Two stations later, that standard hasn&apos;t moved.
            </RevealItem>

            <RevealItem className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-8 border-t border-[var(--color-steel)]/40">
              <div>
                <div className="text-[var(--color-off-white)]/40 font-medium text-[10px] tracking-[0.32em] mb-1">FOUNDED</div>
                <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">2018</div>
              </div>
              <div>
                <div className="text-[var(--color-off-white)]/40 font-medium text-[10px] tracking-[0.32em] mb-1">STATIONS</div>
                <div className="text-[var(--color-off-white)] font-bold text-[14px] tracking-[0.18em]">2</div>
              </div>
              <div>
                <div className="text-[var(--color-off-white)]/40 font-medium text-[10px] tracking-[0.32em] mb-1">STATUS</div>
                <div className="text-[var(--color-amber)] font-bold text-[14px] tracking-[0.18em]">ACTIVE OPERATOR</div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
