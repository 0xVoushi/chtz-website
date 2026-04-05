import { FAST_START } from "@/lib/content";
import { Button } from "@/components/ui/Button";

// FastStart — first dark CTA section (mirrors FastStart from _mad-assembly).
// Dot pattern background, body text on white "paper" block, CTA button.
// Purple button (not orange) — this is an intermediate, softer CTA.

export function FastStartSection() {
  return (
    <section
      aria-label="Ship your first feature fast"
      className="bg-dot-pattern py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <div className="max-w-[72rem]">
          <h2 className="text-[2.8rem] md:text-[4rem] font-semibold leading-[1.1] text-white tracking-[-0.1rem]">
            {FAST_START.heading}
          </h2>

          {/* Body text on white "paper" block — signature FastStart pattern */}
          <p className="mt-[3.2rem] bg-white text-near-black text-[1.6rem] leading-[1.8] p-[2.4rem] md:p-[3rem] max-w-[56rem]">
            {FAST_START.body}
          </p>

          <div className="mt-[3.2rem]">
            <Button
              href={FAST_START.cta.href}
              variant="secondary"
              size="lg"
              className="!bg-purple-brand !border-purple-brand !text-white glow-purple"
            >
              {FAST_START.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
