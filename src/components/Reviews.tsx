import { FadeUp } from "./motion/FadeUp";

// TODO [operator-verify]: Reviewer initials "M." and "J." captured from
// Google Maps avatars at audit time. Verify current attribution or
// replace with "Verified Google Reviewer" generic before publish.

type Quote = {
  stars: number;
  attribution: string;
  source: string;
  body: string;
};

const quotes: Quote[] = [
  {
    stars: 5,
    attribution: "M.",
    source: "Google",
    body: "Clean facilities, friendly staff, good variety on weights/machines.",
  },
  {
    stars: 5,
    attribution: "J.",
    source: "Google",
    body: "Brand new equipment that is really nice, great facility and environment.",
  },
  {
    stars: 5,
    attribution: "Verified",
    source: "Yelp",
    body: "This hidden gem of a gym has everything you need to motivate you into a healthier life. Great owner & amazing trainers. Open 24/7, there are no excuses.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span
      className="text-[var(--color-coral)] text-sm tracking-[0.18em]"
      aria-label={`${count} out of 5 stars`}
    >
      {"★".repeat(count)}
    </span>
  );
}

export function Reviews() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <FadeUp className="text-center mb-16 md:mb-20">
          <span className="eyebrow">Proof · 07</span>
          <h2 className="display section-opener text-[var(--color-off)] mt-4">
            4.7 stars. 260 reviews.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((q, i) => (
            <FadeUp key={q.body} delay={i * 100}>
              <article className="h-full bg-[var(--color-carbon)] border border-[var(--color-steel)]/60 rounded-2xl p-8 transition-[border-color] duration-200 hover:border-[var(--color-coral)]/60">
                <Stars count={q.stars} />
                <blockquote className="mt-5 text-[var(--color-off)] text-base md:text-lg leading-relaxed">
                  &ldquo;{q.body}&rdquo;
                </blockquote>
                <p className="mt-6 text-[var(--color-off)]/60 text-xs tracking-[0.32em] uppercase font-medium">
                  {q.attribution} · {q.source}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={400} className="text-center mt-12">
          <a
            href="https://www.google.com/maps?q=Rebirth+Lifting+Club"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-coral)] text-sm tracking-[0.18em] uppercase font-semibold hover:underline"
          >
            Read all reviews on Google →
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
