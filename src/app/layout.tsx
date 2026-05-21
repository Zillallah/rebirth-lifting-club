import type { Metadata } from "next";
import { Geist, Fraunces, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  // Variable italic — axes mode requires weight:"variable"; 900 selected per-element via CSS font-weight.
  weight: "variable",
  style: ["italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Rebirth Lifting Club — Hesperia + La Verne, CA · Veteran-Owned · Staffed 24/7",
  description:
    "USMC veteran-owned lifting club. Two locations in Hesperia and La Verne, California. Open and staffed 24 hours every day. From $30.99/mo. Claim your free 3-day pass.",
  metadataBase: new URL("https://rebirth-lifting-club.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-canvas">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
