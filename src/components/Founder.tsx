"use client";

import { Reveal, SlideIn, ZoomReveal, SplitText } from "./motion";
import { XMark } from "./XMark";

export function Founder() {
  return (
    <section id="founder" className="relative bg-[var(--color-carbon)] z-20 overflow-hidden min-h-[90vh] flex items-center py-32 md:py-48">
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[440px_1fr] gap-12 md:gap-24 items-center">

          <ZoomReveal from="in" startScale={1.15} duration={1.2}>
            <div className="relative mx-auto md:mx-0 w-full max-w-[440px]">
              <div className="relative aspect-[4/5] bg-[var(--color-canvas)] border-[1.5px] border-[var(--color-amber)]/60 p-2 hover:border-[var(--color-amber)] transition-colors duration-500">
                <div className="relative w-full h-full bg-gradient-to-b from-[#1A1A1C] to-[#0A0A0C] overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <radialGradient id="warmlight-founder-v2" cx="50%" cy="35%" r="50%">
                        <stop offset="0%" stopColor="var(--color-amber)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="var(--color-amber)" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="400" height="500" fill="url(#warmlight-founder-v2)" />
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
          </ZoomReveal>

          <div>
            <Reveal>
              <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-8">
                002 / THE FOUNDER
              </div>
            </Reveal>

            <SplitText
              by="letter"
              stagger={0.035}
              as="h2"
              className="font-extrabold text-[80px] md:text-[120px] leading-[0.9] tracking-[-0.03em] text-[var(--color-off-white)] mb-5"
            >
              {"Armando."}
            </SplitText>

            <SlideIn direction="right" distance={80} delay={0.3} duration={0.9}>
              <div className="font-semibold text-[14px] tracking-[0.22em] text-[var(--color-off-white)]/80 mb-10 md:mb-12">
                USMC 0331 · MACHINE GUNNER · FOUNDER
              </div>
            </SlideIn>

            <SlideIn direction="right" distance={80} delay={0.45} duration={0.9}>
              <blockquote className="relative pl-7 border-l-2 border-[var(--color-amber)] my-10 md:my-12">
                <p className="font-light italic text-[22px] md:text-[26px] leading-[1.4] text-[var(--color-off-white)] max-w-[540px]">
                  &ldquo;If it&apos;s open, it&apos;s staffed. That&apos;s the standard.&rdquo;
                </p>
              </blockquote>
            </SlideIn>

            <Reveal delay={0.55}>
              <p className="font-light text-[16px] md:text-[17px] leading-[1.65] text-[var(--color-off-white)]/75 max-w-[560px]">
                Armando served as a USMC 0331 Machine Gunner. After his time in service, he opened Rebirth to build the kind of gym he wanted to train in — open every hour, staffed every hour, run by a family that actually shows up. Two stations later, that standard hasn&apos;t moved.
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="flex flex-wrap gap-x-10 gap-y-5 mt-12 pt-10 border-t border-[var(--color-steel)]/40">
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
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
