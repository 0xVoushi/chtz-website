import Link from "next/link";
import { HERO } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GooeyFilter } from "@/components/ui/gooey-filter";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="bg-bg relative pt-[9.6rem] pb-[12.8rem] overflow-hidden"
    >
      {/* GooeyFilter SVG definition */}
      <GooeyFilter id="goo-filter" strength={10} />

      {/* Gooey blob background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ filter: "url(#goo-filter)" }}
      >
        <div className="blob-1 absolute -top-[10rem] -left-[8rem] w-[50rem] h-[50rem] rounded-full bg-purple-brand opacity-[0.12]" />
        <div className="blob-2 absolute top-[15rem] left-[30rem] w-[40rem] h-[40rem] rounded-full bg-orange-cta opacity-[0.10]" />
      </div>

      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem] relative z-10">
        {/* Mono label */}
        <p
          className="text-orange-cta mb-[2.4rem]"
          style={{ fontSize: "1.4rem", fontFamily: "var(--font-family-mono)" }}
        >
          // SOFTWARE STUDIO
        </p>

        {/* Display headline */}
        <h1
          className="font-semibold tracking-tight text-near-black max-w-[90rem]"
          style={{
            fontSize: "clamp(4.8rem, 6vw, 8rem)",
            letterSpacing: "clamp(-0.1rem, -0.02em, -0.25rem)",
            lineHeight: 1.05,
          }}
        >
          {HERO.h1}
        </h1>

        {/* Subheadline */}
        <p
          className="mt-[2.4rem] text-muted max-w-[52rem]"
          style={{ fontSize: "1.8rem", lineHeight: 1.7 }}
        >
          {HERO.subhead}
        </p>

        {/* CTAs */}
        <div className="mt-[4rem] flex flex-wrap items-center gap-[1.6rem]">
          <Link href={HERO.ctaPrimary.href}>
            <Button variant="default" size="lg">
              {HERO.ctaPrimary.label}
            </Button>
          </Link>
          <Link href={HERO.ctaSecondary.href}>
            <Button variant="outline" size="lg">
              {HERO.ctaSecondary.label}
            </Button>
          </Link>
        </div>

        {/* Trust bar */}
        <div
          className="mt-[4rem] pt-[3.2rem] border-t border-border-light flex flex-wrap items-center gap-x-[3.2rem] gap-y-[1.2rem]"
        >
          {HERO.trustSignals.map((signal) => (
            <span
              key={signal}
              className="text-muted"
              style={{
                fontSize: "1.4rem",
                fontFamily: "var(--font-family-mono)",
              }}
            >
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
