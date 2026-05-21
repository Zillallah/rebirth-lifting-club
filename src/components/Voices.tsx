type ReviewProps = {
  quote: string;
  name: string;
};

function Review({ quote, name }: ReviewProps) {
  return (
    <div className="bg-[var(--color-canvas)] border border-[var(--color-steel)]/40 p-8 md:p-10 hover:border-[var(--color-amber)]/60 transition-all duration-300 flex flex-col h-full">
      <div className="flex gap-1.5 mb-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="w-2 h-2 bg-[var(--color-amber)]" />
        ))}
      </div>
      <p className="font-light italic text-[17px] md:text-[18px] leading-[1.55] text-[var(--color-off-white)]/90 flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] pt-4 border-t border-[var(--color-steel)]/40">
        {name}
      </div>
    </div>
  );
}

export function Voices() {
  return (
    <section id="voices" className="relative bg-[var(--color-carbon)] z-70 overflow-hidden py-24 md:py-32">
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-6">
          007 / VOICES
        </div>
        <h2 className="font-extrabold text-[40px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.025em] text-[var(--color-off-white)] mb-6">
          What <span className="text-[var(--color-amber)]">members say.</span>
        </h2>
        <p className="font-light text-[16px] md:text-[18px] text-[var(--color-off-white)]/65 max-w-[640px] mb-16 md:mb-20 leading-[1.55]">
          4.7 stars across 260 Google reviews. Below: a sample.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          <Review
            quote="The staff at this gym truly set it apart. Especially Jewel — they are attentive, knowledgeable, and always ready to assist whether you're a beginner or experienced. The facility is very clean, organized, and members feel comfortable."
            name="GOOGLE REVIEWER"
          />
          <Review
            quote="Been coming since November of last year and my experience has been nothing but positive all around. Staff is very friendly, always willing to lend a helping hand when needing help with a machine."
            name="YELP REVIEWER"
          />
          <Review
            quote="Brand new equipment that is really nice, great facility and environment. Clean facilities, friendly staff, good variety on weights and machines."
            name="GOOGLE REVIEWER"
          />
          <Review
            quote="I really appreciate that she actually talks to members and makes you feel comfortable instead of just checking you in. It's rare to find someone who's both professional and incredibly kind."
            name="GOOGLE REVIEWER"
          />
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/search?q=rebirth+lifting+club+hesperia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[var(--color-amber)] hover:text-[var(--color-amber-deep)] font-semibold text-[13px] tracking-[0.22em] transition-colors duration-200"
          >
            SEE ALL 260 REVIEWS ON GOOGLE <span className="text-[18px]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
