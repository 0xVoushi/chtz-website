import { BENEFITS, SITE } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

// BenefitsSection mirrors the _mad-assembly Benefits component:
// - 6 benefit cards in a border-grid layout
// - Hatched green icon containers (signature pattern)
// - 7th special CTA card: studio name + hover orange overlay reveal
// - Border grid via border on wrapper + border-right/bottom on cells

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-[2rem] p-[2.8rem] md:p-[3.2rem]">
      {/* Hatched icon container — signature green diagonal stripes */}
      <div
        className="bg-hatch-green w-[4.4rem] h-[4.4rem] flex items-center justify-center rounded-[0.6rem] shrink-0"
        aria-hidden="true"
      >
        <span className="text-[1.6rem] font-bold text-green-success font-mono">
          {icon}
        </span>
      </div>

      <div>
        <h3 className="text-[1.7rem] font-semibold text-near-black tracking-[-0.03rem] mb-[0.8rem]">
          {title}
        </h3>
        <p className="text-[1.4rem] leading-[1.75] text-muted">{description}</p>
      </div>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section
      aria-label="What you get with every project"
      className="bg-white border-t border-navy py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={BENEFITS.heading}
          label={BENEFITS.label}
          description="Every project, every time — not just when it&apos;s convenient."
        />

        {/* Border-grid: wrapper has border-left + border-top,
            each cell has border-right + border-bottom.
            This creates a seamless grid without double lines. */}
        <div
          className="mt-[6.4rem] border-l border-t border-navy"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* 6 benefit cards */}
            {BENEFITS.items.map((item, index) => (
              <div
                key={item.title}
                className={`border-r border-b border-navy transition-std hover:bg-[rgba(85,101,232,0.03)] ${
                  // Last row on lg (items 4,5,6 = indices 3,4,5): no bottom border on lg
                  index >= 3 ? "lg:border-b-0" : ""
                } ${
                  // Last row on sm (items 5,6 = indices 4,5): no bottom border on sm
                  index >= 4 ? "sm:border-b-0 sm:border-b sm:last:border-b-0" : ""
                }`}
              >
                <BenefitCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}

            {/* 7th card — special CTA card (Benefits.six pattern) */}
            {/* Studio name centred; on hover, orange overlay with CTA reveals */}
            <div className="border-r border-b border-navy lg:border-b-0 relative overflow-hidden group">
              <div className="flex flex-col items-center justify-center h-full min-h-[20rem] p-[3.2rem] gap-[1.6rem]">
                {/* Studio mark */}
                <div className="text-center">
                  <p className="text-[2.4rem] font-semibold text-navy tracking-[-0.06rem]">
                    {SITE.name}
                  </p>
                  <p className="text-[1.2rem] text-muted mt-[0.4rem]">
                    {SITE.tagline}
                  </p>
                </div>
              </div>

              {/* Orange hover overlay — opacity 0 → 1 on hover (Benefits.six pattern) */}
              <a
                href="#contact"
                className="absolute inset-0 flex flex-col items-center justify-center gap-[1.2rem] bg-orange-cta opacity-0 group-hover:opacity-100 transition-std p-[3.2rem]"
              >
                <span className="text-[2.8rem] font-light text-near-black rotate-[-45deg]">
                  →
                </span>
                <span className="text-[1.6rem] font-semibold text-near-black text-center">
                  Start your project
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
