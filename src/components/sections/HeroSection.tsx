import Link from "next/link";
import { HERO } from "@/lib/content";
import { Button } from "@/components/ui/Button";

// Floating cards use animate-wave with staggered delays — mirroring
// the animateWave pattern from the reference design system.
// Each card: opacity 0 → 1 → 1 → 0 over 8s, staggered by 0.5/2/4/6s.

const cardColorMap = {
  purple: {
    dot: "bg-purple-brand",
    border: "border-purple-brand",
    label: "text-purple-brand",
  },
  green: {
    dot: "bg-green-success",
    border: "border-green-success",
    label: "text-green-success",
  },
  orange: {
    dot: "bg-orange-cta",
    border: "border-orange-cta",
    label: "text-orange-cta",
  },
};

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="bg-dashed-grid relative pt-[9.6rem] pb-[12.8rem] overflow-hidden"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem] relative">
        {/* Main content — single column, max 72rem */}
        {/* White blur orb behind text — reads over dashed grid and floating cards */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[2.4rem] -translate-y-1/2 pointer-events-none"
          style={{
            width: "72rem",
            height: "100%",
            maxHeight: "60rem",
            borderRadius: "50%",
            filter: "blur(5rem)",
            backgroundColor: "rgba(255,255,255,0.92)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-[72rem]">
          <h1
            className="text-[clamp(3.6rem,5vw,6.4rem)] font-semibold leading-[1.05] text-near-black"
            style={{ letterSpacing: "clamp(-0.1rem, -0.02em, -0.25rem)" }}
          >
            {HERO.h1}
          </h1>

          <p className="mt-[2.4rem] text-[1.8rem] leading-[1.7] text-muted max-w-[56rem]">
            {HERO.subhead}
          </p>

          {/* CTAs */}
          <div className="mt-[4rem] flex flex-wrap items-center gap-[1.6rem]">
            <Link href={HERO.ctaPrimary.href}>
              <Button variant="primary" size="lg">
                {HERO.ctaPrimary.label}
              </Button>
            </Link>
            <Link href={HERO.ctaSecondary.href}>
              <Button variant="outline" size="lg">
                {HERO.ctaSecondary.label}
              </Button>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-[4rem] flex flex-wrap items-center gap-x-[2.4rem] gap-y-[1.2rem]">
            {HERO.trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-[0.8rem]">
                <span
                  className="w-[0.6rem] h-[0.6rem] rounded-full bg-green-success shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[1.4rem] text-muted font-semibold">
                  {signal}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Decorative right column (sm+) ───────────────────────── */}
        {/* Contains code block + 4 animated floating skill cards     */}
        <div
          className="hidden sm:block absolute right-0 top-0 bottom-0 w-[45rem] lg:w-[52rem]"
          aria-hidden="true"
        >
          {/* Animated floating cards — wave animation, staggered delays */}
          {/* Card 1: top-left of right column — delay 0.5s */}
          <div
            className={`animate-wave-card animate-delay-1 absolute top-[8%] left-0 flex items-center gap-[1.2rem] bg-white border ${cardColorMap.purple.border} rounded-[1rem] px-[1.6rem] py-[1rem] shadow-sm`}
          >
            <span className={`w-[0.8rem] h-[0.8rem] rounded-full ${cardColorMap.purple.dot} shrink-0`} />
            <div>
              <p className={`text-[1.3rem] font-semibold ${cardColorMap.purple.label}`}>
                {HERO.floatingCards[0]!.label}
              </p>
              <p className="text-[1.1rem] text-muted">
                {HERO.floatingCards[0]!.sub}
              </p>
            </div>
          </div>

          {/* Card 2: bottom-left — delay 2s */}
          <div
            className={`animate-wave-card animate-delay-2 absolute bottom-[15%] left-[5%] flex items-center gap-[1.2rem] bg-white border ${cardColorMap.green.border} rounded-[1rem] px-[1.6rem] py-[1rem] shadow-sm`}
          >
            <span className={`w-[0.8rem] h-[0.8rem] rounded-full ${cardColorMap.green.dot} shrink-0`} />
            <div>
              <p className={`text-[1.3rem] font-semibold ${cardColorMap.green.label}`}>
                {HERO.floatingCards[1]!.label}
              </p>
              <p className="text-[1.1rem] text-muted">
                {HERO.floatingCards[1]!.sub}
              </p>
            </div>
          </div>

          {/* Card 3: bottom-right — delay 4s */}
          <div
            className={`animate-wave-card animate-delay-3 absolute bottom-[25%] right-[5%] flex items-center gap-[1.2rem] bg-white border ${cardColorMap.orange.border} rounded-[1rem] px-[1.6rem] py-[1rem] shadow-sm`}
          >
            <span className={`w-[0.8rem] h-[0.8rem] rounded-full ${cardColorMap.orange.dot} shrink-0`} />
            <div>
              <p className={`text-[1.3rem] font-semibold ${cardColorMap.orange.label}`}>
                {HERO.floatingCards[2]!.label}
              </p>
              <p className="text-[1.1rem] text-muted">
                {HERO.floatingCards[2]!.sub}
              </p>
            </div>
          </div>

          {/* Card 4: top-right — delay 6s */}
          <div
            className={`animate-wave-card animate-delay-4 absolute top-[10%] right-0 flex items-center gap-[1.2rem] bg-white border ${cardColorMap.purple.border} rounded-[1rem] px-[1.6rem] py-[1rem] shadow-sm`}
          >
            <span className={`w-[0.8rem] h-[0.8rem] rounded-full ${cardColorMap.purple.dot} shrink-0`} />
            <div>
              <p className={`text-[1.3rem] font-semibold ${cardColorMap.purple.label}`}>
                {HERO.floatingCards[3]!.label}
              </p>
              <p className="text-[1.1rem] text-muted">
                {HERO.floatingCards[3]!.sub}
              </p>
            </div>
          </div>

          {/* Static code block in center of right column */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] border border-navy rounded-[1.2rem] p-[2.4rem] bg-white/90 backdrop-blur-sm">
            <div className="flex items-center gap-[0.8rem] mb-[2rem]">
              <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-danger opacity-70" />
              <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-orange-cta opacity-70" />
              <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-green-success opacity-70" />
            </div>
            <pre className="text-[1.2rem] leading-[1.9] text-muted overflow-x-auto">
              <code>
                <span className="text-purple-brand">const</span>{" "}
                <span className="text-near-black">project</span>{" "}
                <span className="text-muted">= {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-near-black">stack</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-green-success">
                  &apos;Next.js + TypeScript&apos;
                </span>
                {"\n"}
                {"  "}
                <span className="text-near-black">engineers</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-orange-cta">&apos;senior-only&apos;</span>
                {"\n"}
                {"  "}
                <span className="text-near-black">typeSafe</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-purple-brand">true</span>
                {"\n"}
                {"  "}
                <span className="text-near-black">lighthouse</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-green-success">95</span>
                {"\n"}
                <span className="text-muted">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
