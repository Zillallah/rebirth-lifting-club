/**
 * Footer placeholder. Real footer ships in Batch 10 (§7 Batch 10).
 * Keeps a z-90 hook + bg-canvas in place so page bottom doesn't bleed.
 */
export default function Footer() {
  return (
    <footer className="relative z-[90] border-t border-off-white/5 bg-canvas px-6 py-12 md:px-12">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-tactical">
        © 2025 REBIRTH LIFTING CLUB · USMC VETERAN-OWNED · STAFFED 24/7
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-tactical">
        FOOTER SHIPS IN BATCH 10 · SITE BY ASHE SYSTEMS
      </div>
    </footer>
  );
}
