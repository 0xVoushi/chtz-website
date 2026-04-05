import Link from "next/link";
import { PARTNERSHIP } from "@/lib/content";
import { Button } from "@/components/ui/Button";

// Partnership — second dark CTA section (mirrors _mad-assembly Partnership).
// Identical structure to FastStart but different copy and CTA.
// Same dot-pattern bg, body text on white block, primary orange CTA.

export function PartnershipSection() {
  return (
    <section
      aria-label="Partner with CHTZ-Tech"
      className="bg-dot-pattern py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <div className="max-w-[72rem]">
          <h2 className="text-[2.8rem] md:text-[4rem] font-semibold leading-[1.1] text-white tracking-[-0.1rem]">
            {PARTNERSHIP.heading}
          </h2>

          {/* Body on white block — same pattern as FastStart */}
          <p className="mt-[3.2rem] bg-white text-near-black text-[1.6rem] leading-[1.8] p-[2.4rem] md:p-[3rem] max-w-[56rem]">
            {PARTNERSHIP.body}
          </p>

          <div className="mt-[3.2rem]">
            <Link href={PARTNERSHIP.cta.href}>
              <Button variant="primary" size="lg">
                {PARTNERSHIP.cta.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
