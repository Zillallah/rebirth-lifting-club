import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { StickyCTA } from "@/components/StickyCTA";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rebirth Lifting Club — Hesperia + La Verne, CA · Veteran-Owned · Staffed 24/7",
  description:
    "Real gym. Real work. Open 24/7. Two stations in Hesperia and La Verne. Veteran-owned, family-operated.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <main>{children}</main>
        <StickyCTA />
      </body>
    </html>
  );
}
