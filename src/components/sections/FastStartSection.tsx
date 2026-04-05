import Link from "next/link";
import { FAST_START } from "@/lib/content";
import { Button } from "@/components/ui/Button";

// FastStart — dark CTA section with dot pattern background.
// 2-column layout on desktop: heading + body on left, CTA on right.

export function FastStartSection() {
  return (
    <section
      aria-label="Ship your first feature fast"
      className="bg-dot-pattern py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <div className="md:flex md:items-center md:justify-between md:gap-[4.8rem]">
          {/* Left: heading + body */}
          <div className="max-w-[64rem]">
            <h2 className="text-[2.8rem] md:text-[4rem] font-semibold leading-[1.1] text-white tracking-[-0.1rem]">
              {FAST_START.heading}
            </h2>

            <p className="mt-[2.4rem] text-[1.6rem] leading-[1.8] text-white/80">
              {FAST_START.body}
            </p>
          </div>

          {/* Right: CTA button */}
          <div className="mt-[3.2rem] md:mt-0 shrink-0">
            <Link href={FAST_START.cta.href}>
              <Button variant="default" size="lg">
                {FAST_START.cta.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
