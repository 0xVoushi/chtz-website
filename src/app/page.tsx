// Page section order follows the _mad-assembly breakdown structure,
// adapted for the CHTZ-Tech studio context:
//
// Hero (animated) → How (comparison) → Services →
// FastStart (dark CTA #1) → Benefits (6-card hatched grid) →
// Process → TechStack (inverted dots) → WhyUs (dark CTA #2) →
// Capabilities → FAQ → CTA/Start (dark CTA #3)
//
// Three dark CTA sections: FastStart, WhyUs, CTASection
// Two inverted/textured light sections: TechStack (inverted dots), How

import { HomepageSchema } from "@/components/structured-data/HomepageSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowSection } from "@/components/sections/HowSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FastStartSection } from "@/components/sections/FastStartSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HomepageSchema />

      {/* ── Light sections ─────────────────────────── */}
      <HeroSection />        {/* dashed grid, animated floating cards */}
      <HowSection />         {/* comparison: old way vs CHTZ-Tech */}
      <ServicesSection />    {/* 5 service cards */}

      {/* ── Dark CTA #1 ────────────────────────────── */}
      <FastStartSection />   {/* dot pattern, white body block */}

      {/* ── Light sections ─────────────────────────── */}
      <BenefitsSection />    {/* 6 cards + CTA card, hatched icons */}
      <ProcessSection />     {/* 4 steps */}
      <TechStackSection />   {/* inverted dot pattern, tech groups */}

      {/* ── Dark CTA #2 ────────────────────────────── */}
      <WhyUsSection />       {/* dot pattern, 3 standards cards */}

      {/* ── Light sections ─────────────────────────── */}
      <CapabilitiesSection /> {/* 6-block border grid */}

      {/* ── Dark CTA #2.5 ──────────────────────────── */}
      <PartnershipSection /> {/* dot pattern, long-term partner */}

      {/* ── Light section ──────────────────────────── */}
      <FAQSection />         {/* sticky orange sidebar + accordion */}

      {/* ── Dark CTA #3 ────────────────────────────── */}
      <CTASection />         {/* dot pattern, contact form */}
    </>
  );
}
