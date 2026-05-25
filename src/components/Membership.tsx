'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Station = 'hesperia' | 'la-verne';

interface Tier {
  type: 'single' | 'flex' | 'buddy';
  recommended: boolean;
  title: string;
  badge?: string;
  prices: Array<{ amount: string; label: string }>;
  highlight?: string;
  features: string[];
}

const HESPERIA_TIERS: Tier[] = [
  {
    type: 'single',
    recommended: true,
    title: 'Single Membership',
    badge: 'MOST POPULAR',
    prices: [
      { amount: '$40.99', label: '12 MONTH COMMITMENT' },
      { amount: '$45.99', label: 'NO CONTRACT' },
    ],
    features: [
      'Staffed 24/7',
      'Premium equipment',
      'Clean environment',
      'Serious training atmosphere',
      'No long-term contracts required',
    ],
  },
  {
    type: 'flex',
    recommended: false,
    title: 'Flex Pass Membership',
    prices: [{ amount: '$29.99', label: 'NO CONTRACT' }],
    highlight: 'LIMITED ACCESS · 10 AM TO 3 PM · 7 DAYS A WEEK',
    features: [
      'Staffed 24/7',
      'Premium equipment',
      'Clean environment',
      'Serious training atmosphere',
      'No long-term contracts required',
    ],
  },
  {
    type: 'buddy',
    recommended: false,
    title: 'Buddy Pass Membership',
    prices: [
      { amount: 'Talk to us', label: '12 MONTH COMMITMENT' },
      { amount: 'Talk to us', label: 'NO CONTRACT' },
    ],
    highlight: '24/7 ACCESS · 8 GUEST VISITS PER MONTH',
    features: [
      "Bring a friend up to 8 times a month",
      "Unused visits don't roll over",
      'All access, both stations',
      'Staffed 24/7',
      'Same premium equipment',
    ],
  },
];

const LAVERNE_TIERS: Tier[] = [
  {
    type: 'single',
    recommended: true,
    title: 'Single Membership',
    badge: 'ALL ACCESS',
    prices: [
      { amount: '$45.99', label: '12 MONTH COMMITMENT' },
      { amount: '$50.99', label: 'NO CONTRACT' },
    ],
    features: [
      'Staffed 24/7',
      'Premium equipment',
      'Clean environment',
      'Serious training atmosphere',
      'No long-term contracts required',
    ],
  },
];

export function Membership() {
  const [station, setStation] = useState<Station>('hesperia');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-canvas py-32 md:py-40 overflow-hidden"
    >
      {/* Parallax gym-02 still at 5% opacity */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 opacity-[0.05]"
      >
        <Image src="/stills/gym-02.jpg" fill alt="" className="object-cover" priority={false} />
      </motion.div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Eyebrow + heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow">Membership · 05</span>
          <h2 className="display section-opener text-off mt-4">Two ways in.</h2>
        </div>

        {/* Station toggle */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative inline-flex items-center mx-auto rounded-full border border-steel/40 p-1.5 bg-canvas/40 backdrop-blur-sm">
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="absolute top-1.5 bottom-1.5 rounded-full bg-coral shadow-[0_0_24px_rgba(229,90,64,0.45)]"
              style={{
                left: station === 'hesperia' ? '6px' : 'calc(50% + 3px)',
                width: 'calc(50% - 9px)',
              }}
            />
            <button
              onClick={() => setStation('hesperia')}
              className={cn(
                'relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors duration-200',
                station === 'hesperia' ? 'text-off' : 'text-coral hover:text-off/80',
              )}
            >
              Hesperia
            </button>
            <button
              onClick={() => setStation('la-verne')}
              className={cn(
                'relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors duration-200',
                station === 'la-verne' ? 'text-off' : 'text-coral hover:text-off/80',
              )}
            >
              La Verne
            </button>
          </div>
        </div>

        {/* Tier cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={station}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'grid gap-6 md:gap-8',
              station === 'hesperia'
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 max-w-md mx-auto',
            )}
          >
            {(station === 'hesperia' ? HESPERIA_TIERS : LAVERNE_TIERS).map((tier, i) => (
              <TierCard key={tier.type} tier={tier} station={station} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Checkout footer */}
        <p className="text-center text-steel text-sm tracking-wide max-w-md mx-auto mt-16 md:mt-20">
          Tier details and payment open on the next page.
          Promo codes accepted at checkout.
        </p>
      </div>
    </section>
  );
}

function TierCard({ tier, station, index }: { tier: Tier; station: Station; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative flex flex-col rounded-2xl border-2 border-coral p-8 md:p-10 transition-shadow duration-300',
        'bg-gradient-to-b from-canvas/40 to-canvas/0',
        tier.recommended
          ? 'shadow-[0_0_48px_rgba(229,90,64,0.18)] hover:shadow-[0_0_64px_rgba(229,90,64,0.32)]'
          : 'shadow-none hover:shadow-[0_0_32px_rgba(229,90,64,0.18)]',
      )}
    >
      {/* Pulsing glow ring — only on recommended cards */}
      {tier.recommended && (
        <motion.div
          aria-hidden
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ boxShadow: '0 0 32px rgba(229,90,64,0.35) inset, 0 0 32px rgba(229,90,64,0.25)' }}
        />
      )}

      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-coral text-canvas text-xs font-semibold tracking-widest uppercase shadow-[0_0_16px_rgba(229,90,64,0.4)]">
          {tier.badge}
        </div>
      )}

      {/* Title — first word coral italic, rest off-white italic, Fraunces */}
      <h3 className="font-display italic text-3xl md:text-4xl text-center leading-tight">
        <span className="text-coral">{tier.title.split(' ')[0]}</span>{' '}
        <span className="text-off">{tier.title.split(' ').slice(1).join(' ')}</span>
      </h3>

      {/* Price stack */}
      <div className="mt-6 md:mt-8 space-y-3 text-center">
        {tier.prices.map((p, i) => (
          <PriceLine key={i} amount={p.amount} label={p.label} index={i} inView={inView} />
        ))}
      </div>

      {/* Highlight band (Flex / Buddy) */}
      {tier.highlight && (
        <div className="mt-6 md:mt-8 text-center text-coral text-sm font-semibold tracking-widest uppercase leading-relaxed">
          {tier.highlight}
        </div>
      )}

      {/* Feature list — drawing-in dividers */}
      <ul className="mt-8 md:mt-10 flex-1 space-y-0">
        {tier.features.map((feat, i) => (
          <FeatureLine key={i} text={feat} index={i} inView={inView} />
        ))}
      </ul>

      {/* CTA */}
      <a
        href="/contact" /* TODO [operator-verify]: ABC URL per station */
        className={cn(
          'mt-10 md:mt-12 inline-flex items-center justify-center h-14 rounded-full font-semibold tracking-widest uppercase transition-all duration-200',
          tier.recommended
            ? 'bg-coral text-off shadow-[0_0_24px_rgba(229,90,64,0.35)] hover:shadow-[0_0_32px_rgba(229,90,64,0.55)]'
            : 'border-2 border-coral text-coral hover:bg-coral hover:text-off',
        )}
      >
        Join at {station === 'hesperia' ? 'Hesperia' : 'La Verne'} →
      </a>
    </motion.div>
  );
}

function PriceLine({
  amount,
  label,
  index,
  inView,
}: {
  amount: string;
  label: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="flex items-baseline justify-center gap-2 flex-wrap"
    >
      <span className="font-display italic text-coral text-5xl md:text-6xl leading-none tracking-tight">
        {amount}
      </span>
      <span className="font-body text-off text-base md:text-lg">a month,</span>
      <span className="font-body text-coral text-xs md:text-sm tracking-widest uppercase font-semibold">
        {label}
      </span>
    </motion.div>
  );
}

function FeatureLine({
  text,
  index,
  inView,
}: {
  text: string;
  index: number;
  inView: boolean;
}) {
  return (
    <li className="relative py-4 text-center text-off/80 text-sm md:text-base">
      {text}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.6 + index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-0 left-1/4 right-1/4 h-px bg-steel/30 origin-left"
      />
    </li>
  );
}
