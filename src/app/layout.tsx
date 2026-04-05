import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GuideLines } from "@/components/layout/GuideLines";
import { SitePixelTrail } from "@/components/layout/SitePixelTrail";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Software Development Studio — Web, AI & Web3 | CHTZ-Tech",
  description:
    "Senior engineers building production-grade web apps, AI integrations, and Web3 infrastructure. Type-safe code, proven process. Start your project today.",
  keywords: [
    "custom software development",
    "software development studio",
    "AI development services",
    "Web3 development company",
    "fullstack development agency",
    "Next.js development",
    "enterprise software development",
  ],
  openGraph: {
    title: "CHTZ-Tech — Custom Software Development Studio",
    description:
      "Senior engineers building production-grade web, AI, and Web3 applications for startups and enterprises.",
    type: "website",
    url: "https://chtz-tech.dev",
    siteName: "CHTZ-Tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHTZ-Tech — Custom Software Development Studio",
    description:
      "Senior engineers building production-grade web, AI, and Web3 applications.",
  },
  alternates: {
    canonical: "https://chtz-tech.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-[var(--font-geist-sans)]">
        <GuideLines />
        <SitePixelTrail />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
