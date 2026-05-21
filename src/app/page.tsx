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
import { XDivider } from "@/components/XDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <XDivider />
      <Doctrine />
      <XDivider />
      <Founder />
      <XDivider />
      <InsideTheClub />
      <XDivider />
      <Membership />
      <XDivider />
      <Stations />
      <XDivider />
      <ThePass />
      <XDivider />
      <Voices />
      <XDivider />
      <Protocols />
      <SiteFooter />
    </main>
  );
}
