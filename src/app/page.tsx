import { Hero } from "@/components/Hero";
import { Doctrine } from "@/components/Doctrine";
import { Founder } from "@/components/Founder";
import { InsideTheClub } from "@/components/InsideTheClub";
import { Membership } from "@/components/Membership";
import { Stations } from "@/components/Stations";
import { ThePass } from "@/components/ThePass";
import { Voices } from "@/components/Voices";
import { Protocols } from "@/components/Protocols";
import { SiteFooter } from "@/components/SiteFooter";
import { MarqueeStrip } from "@/components/MarqueeStrip";

export default function Home() {
  return (
    <main className="bg-[var(--color-canvas)]">
      <Hero />
      <MarqueeStrip variant="proof" />
      <Doctrine />
      <Founder />
      <MarqueeStrip variant="standard" />
      <InsideTheClub />
      <Membership />
      <MarqueeStrip variant="bothStations" />
      <Stations />
      <ThePass />
      <Voices />
      <Protocols />
      <SiteFooter />
    </main>
  );
}
