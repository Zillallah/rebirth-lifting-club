"use client";

import Script from "next/script";
import { FadeUp } from "./motion/FadeUp";

/**
 * Instagram Embed Gallery.
 *
 * To use real Instagram posts: replace each `permalink` below with a real
 * post URL from @rebirthliftingclub, e.g. "https://www.instagram.com/p/Cabc123/"
 *
 * If permalinks are not set, each cell falls back to a placeholder card
 * that links to the IG profile.
 */
const POSTS: Array<{ permalink: string | null; alt: string }> = [
  { permalink: null, alt: "Member lift · Hesperia" },
  { permalink: null, alt: "Platform work · La Verne" },
  { permalink: null, alt: "3 AM training" },
  { permalink: null, alt: "USMC veteran-owned" },
  { permalink: null, alt: "Power rack zone" },
  { permalink: null, alt: "Members on the floor" },
];

function InstagramCell({ permalink, alt, index }: { permalink: string | null; alt: string; index: number }) {
  // Different background fallbacks so cells look distinct before real posts land
  const fallbackBg = ["/hesperia-station.jpg", "/laverne-station.jpg", "/inside-club-bg.jpg"][index % 3];
  const motionClass = index % 2 === 0 ? "photo-zoom" : "photo-drift";

  if (permalink) {
    return (
      <div className="relative aspect-square overflow-hidden border border-[var(--color-steel)]/30 bg-[var(--color-carbon)]">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
          style={{
            background: "#000",
            border: 0,
            margin: 0,
            padding: 0,
            width: "100%",
            minWidth: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <a
      href="https://instagram.com/rebirthliftingclub"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square overflow-hidden border border-[var(--color-steel)]/30 hover:border-[var(--color-amber)]/60 transition-colors duration-500"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center ${motionClass}`}
        style={{ backgroundImage: `url('${fallbackBg}')`, filter: "brightness(0.65)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85 pointer-events-none" />
      <div className="absolute bottom-5 left-5 right-5 z-10">
        <div className="text-[var(--color-amber)] font-semibold text-[9px] tracking-[0.32em] mb-1">
          @REBIRTHLIFTINGCLUB
        </div>
        <div className="text-[var(--color-off-white)] font-bold text-[14px] md:text-[15px] tracking-[-0.005em] leading-tight">
          {alt}
        </div>
      </div>
    </a>
  );
}

export function InstagramGallery() {
  const hasRealPosts = POSTS.some((p) => p.permalink);

  return (
    <section className="relative bg-[var(--color-canvas)] py-24 md:py-32 overflow-hidden border-t border-[var(--color-steel)]/30">
      {hasRealPosts && (
        <Script src="//www.instagram.com/embed.js" strategy="afterInteractive" />
      )}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-4">
              21K STRONG · @REBIRTHLIFTINGCLUB
            </div>
            <h2 className="font-extrabold text-[40px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.035em] text-[var(--color-off-white)] max-w-[700px]">
              The floor.<br />Right now.
            </h2>
          </div>
          <a
            href="https://instagram.com/rebirthliftingclub"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[var(--color-amber)] font-bold text-[12px] tracking-[0.22em] border-b border-[var(--color-amber)] pb-2 self-start md:self-end"
          >
            FOLLOW ON INSTAGRAM
            <span className="text-[16px] transition-transform group-hover:translate-x-1">→</span>
          </a>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {POSTS.map((post, i) => (
            <InstagramCell key={i} permalink={post.permalink} alt={post.alt} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
