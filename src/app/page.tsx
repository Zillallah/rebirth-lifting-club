import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Marine } from "@/components/Marine";
import { Manifest } from "@/components/Manifest";
import { Stations } from "@/components/Stations";
import { ThePass } from "@/components/ThePass";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="bg-[var(--color-canvas)]">
      <Hero />
      <Divider variant="x-tight" />
      <Marine />
      <Divider variant="number" number="24/7" caption="OPEN · STAFFED · EVERY HOUR" />
      <Manifest />
      <Divider variant="video-strip" />
      <Stations />
      <Divider variant="number" number="3" caption="DAYS FREE · NO CARD ON FILE" />
      <ThePass />
      <SiteFooter />
    </main>
  );
}
