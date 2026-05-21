import LiveStatus from "@/components/LiveStatus";
import XMark from "@/components/XMark";

/**
 * V2 Batch 0 — Foundation verification page.
 * Confirms tokens + Outfit/Geist Mono + LiveStatus + XMark render correctly.
 * Replaced by the Hero (V2 §7.1) in Batch 1.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-canvas">
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="mb-12">
          <XMark size="lg" variant="glow" />
        </div>

        <div className="space-y-6 text-center">
          <div className="font-display text-xs font-semibold tracking-[0.32em] text-amber">
            000 / FOUNDATION
          </div>

          <h1
            className="font-display font-black text-off-white"
            style={{
              fontSize: "clamp(48px, 10vw, 96px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
            }}
          >
            Ready<span className="text-amber">.</span>
          </h1>

          <p className="font-body text-xs font-medium uppercase tracking-[0.32em] text-off-white-3">
            REBUILD V2 · OUTFIT + AMBER · LINEAR SECTIONS · BATCH 1 NEXT
          </p>

          <div className="flex justify-center pt-8">
            <LiveStatus />
          </div>
        </div>
      </div>
    </main>
  );
}
