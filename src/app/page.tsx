import { Hero } from "@/components/Hero";
import { AmberDivider } from "@/components/AmberDivider";
import { Marine } from "@/components/Marine";
import { CtaBreak } from "@/components/CtaBreak";
import { Manifest } from "@/components/Manifest";
import { PhotoDivider } from "@/components/PhotoDivider";
import { Stations } from "@/components/Stations";
import { InstagramGallery } from "@/components/InstagramGallery";
import { ThePass } from "@/components/ThePass";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="bg-[var(--color-canvas)]">
      <Hero />
      <AmberDivider headline="24/7" tagline="OPEN · STAFFED · EVERY HOUR · EVERY DAY" />
      <Marine />
      <CtaBreak />
      <Manifest />
      <PhotoDivider />
      <Stations />
      <InstagramGallery />
      <ThePass />
      <SiteFooter />
    </main>
  );
}
