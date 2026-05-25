import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { StickyCTA } from "@/components/StickyCTA";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Rebirth Lifting Club — Hesperia + La Verne, CA · Veteran-Owned · Staffed 24/7",
  description:
    "Real gym. Real work. Open 24/7. USMC veteran-owned. Family-operated. Two stations across the High Desert and Inland Empire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <main>{children}</main>
        <StickyCTA />
      </body>
    </html>
  );
}
