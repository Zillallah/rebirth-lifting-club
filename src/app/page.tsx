import { Hero } from "@/components/Hero";
import { AmberDivider } from "@/components/AmberDivider";
import { Marine } from "@/components/Marine";
import { CtaBreak } from "@/components/CtaBreak";
import { Manifest } from "@/components/Manifest";
import { InsideTheClub } from "@/components/InsideTheClub";
import { PhotoDivider } from "@/components/PhotoDivider";
import { Stations } from "@/components/Stations";
import { Membership } from "@/components/Membership";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Doctrine } from "@/components/Doctrine";
import { ThePass } from "@/components/ThePass";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="bg-[var(--color-canvas)]">
      <Hero />
      <AmberDivider />
      <Marine />
      <CtaBreak />
      <Manifest />
      <InsideTheClub />
      <PhotoDivider />
      <Stations />
      <Membership />
      <Reviews />
      <FAQ />
      <Doctrine />
      <ThePass />
      <SiteFooter />
    </div>
  );
}
