import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${outfit.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-canvas">
        {children}
        <Footer />
      </body>
    </html>
  );
}
