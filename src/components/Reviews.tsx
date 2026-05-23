"use client";

import { FadeUp } from "./motion/FadeUp";

// TODO [operator-verify]: Reviewer initials "M." and "J." were captured
// from Google Maps avatars at audit time. Verify current attribution or
// replace with "Verified Google Reviewer" before publish.

type Review = {
  rating: number;
  author: string;
  source: string;
  quote: string;
};

const REVIEWS: Review[] = [
  {
    rating: 5,
    author: "M.",
    source: "Google",
    quote: "Clean facilities, friendly staff, good variety on weights/machines.",
  },
  {
    rating: 5,
    author: "J.",
    source: "Google",
    quote: "Brand new equipment that is really nice, great facility and environment.",
  },
  {
    rating: 5,
    author: "Yelp",
    source: "Yelp",
    quote:
      "This hidden gem of a gym has everything you need to motivate you into a healthier life. Great owner & amazing trainers. Open 24/7, there are no excuses.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-[14px] ${i < count ? "text-[var(--color-coral)]" : "text-[var(--color-steel)]/50"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-[var(--color-canvas)] py-32 md:py-40 overflow-hidden border-t border-[var(--color-steel)]/30">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <FadeUp duration={1.1} className="mb-16 md:mb-20 text-center">
          <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-5">
            PROOF · 02
          </div>
          <h2 className="display text-[44px] sm:text-[64px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-[var(--color-off-white)]">
            4.7 stars. 260 reviews.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {REVIEWS.map((r, i) => (
            <FadeUp key={i} delay={0.05 * i} duration={1.0}>
              <article className="flex flex-col h-full bg-[var(--color-carbon)] border border-[var(--color-steel)]/40 hover:border-[var(--color-coral)]/60 transition-colors duration-300 p-8 md:p-10">
                <Stars count={r.rating} />
                <blockquote className="font-light text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-off-white)]/90 mt-6 mb-8 flex-grow">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-[10px] md:text-[11px] tracking-[0.28em] font-semibold mt-auto pt-6 border-t border-[var(--color-steel)]/30">
                  <span className="text-[var(--color-off-white)]/75">{r.author}</span>
                  <span className="text-[var(--color-off-white)]/55">{r.source}</span>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} duration={1.0} className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Rebirth+Lifting+Club"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[var(--color-coral)] font-bold text-[12px] tracking-[0.22em] border-b border-[var(--color-coral)]/40 hover:border-[var(--color-coral)] pb-1 transition-colors duration-200"
          >
            READ ALL REVIEWS ON GOOGLE
            <span className="text-[16px]">→</span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
