/**
 * Batch 0 — Foundation placeholder.
 * Confirms typography + colors + Nav + Footer wire correctly.
 * Hero (Batch 1) replaces this section.
 */
export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="relative z-0 flex min-h-screen items-center justify-center overflow-hidden bg-canvas px-6 pt-24 md:px-12"
      >
        <div className="space-y-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-tactical">
            000 / FOUNDATION
          </p>
          <h1
            className="display-italic text-off-white"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            Ready.
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-tactical">
            Sections load in <span className="text-accent">Batch 1 →</span>
          </p>
        </div>
      </section>
    </main>
  );
}
