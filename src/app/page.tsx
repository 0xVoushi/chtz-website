import { HomepageSchema } from "@/components/structured-data/HomepageSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowSection } from "@/components/sections/HowSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FastStartSection } from "@/components/sections/FastStartSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HomepageSchema />

      {/* ── Light sections ─────────────────────────── */}
      <HeroSection />
      <HowSection />
      <ServicesSection />

      {/* ── Dark section #1 ────────────────────────── */}
      <FastStartSection />

      {/* ── Light sections ─────────────────────────── */}
      <CapabilitiesSection />
      <ProcessSection />
      <TechStackSection />
      <PrinciplesSection />
      <PricingSection />
      <FAQSection />

      {/* ── Dark section #2 ────────────────────────── */}
      <CTASection />
    </>
  );
}
