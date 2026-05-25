import { Hero } from "@/components/Hero";
import { FromTheAshes } from "@/components/FromTheAshes";
import { InsideTheClub } from "@/components/InsideTheClub";
import { Stations } from "@/components/Stations";
import { Membership } from "@/components/Membership";
import { CustomTraining } from "@/components/CustomTraining";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { Doctrine } from "@/components/Doctrine";
import { Footer } from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <FromTheAshes />
      <SectionDivider />
      <InsideTheClub />
      <SectionDivider />
      <Stations />
      <SectionDivider />
      <Membership />
      <CustomTraining />
      <Reviews />
      <FAQ />
      <LeadForm />
      <Doctrine />
      <Footer />
    </>
  );
}
