import { Hero } from "@/components/Hero";
import { Marine } from "@/components/Marine";
import { Manifest } from "@/components/Manifest";
import { Stations } from "@/components/Stations";
import { ThePass } from "@/components/ThePass";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="bg-[var(--color-canvas)]">
      <Hero />
      <Marine />
      <Manifest />
      <Stations />
      <ThePass />
      <SiteFooter />
    </main>
  );
}
