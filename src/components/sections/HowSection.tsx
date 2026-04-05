import { HOW } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

// The How section mirrors the original _mad-assembly "How" component:
// Two side-by-side flex cards comparing the old way vs the CHTZ-Tech way.
// Title highlights use repeating-linear-gradient (title-highlight-orange / green).

type CardVariant = "sad" | "happy";

type HowCardProps = {
  title: string;
  variant: CardVariant;
  points: readonly string[];
};

function HowCard({ title, variant, points }: HowCardProps) {
  const isSad = variant === "sad";
  const accentColor = isSad ? "text-orange-cta" : "text-green-success";
  const highlightClass = isSad ? "title-highlight-orange" : "title-highlight-green";
  const dotColor = isSad ? "bg-orange-cta" : "bg-green-success";

  return (
    <div className="border border-border-light bg-surface-frame p-[2.4rem] md:p-[3.2rem] flex flex-col gap-[2.4rem]">
      {/* Row 1: icon + title */}
      <div className="flex items-start gap-[1.6rem]">
        <div
          className={`shrink-0 w-[4rem] h-[4rem] flex items-center justify-center border ${
            isSad ? "border-orange-cta" : "border-green-success"
          } rounded-[0.6rem]`}
        >
          <span className={`text-[2rem] font-bold ${accentColor}`}>
            {isSad ? "✗" : "✓"}
          </span>
        </div>
        <h3
          className={`text-[1.8rem] md:text-[2rem] font-semibold leading-[1.3] ${accentColor} ${highlightClass} py-[0.2rem] px-[0.4rem]`}
        >
          {title}
        </h3>
      </div>

      {/* Row 2: points list spanning full width */}
      <ul className="flex flex-col gap-[1.2rem]">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-[1.2rem]">
            <span
              className={`mt-[0.6rem] w-[0.5rem] h-[0.5rem] rounded-full ${dotColor} shrink-0`}
            />
            <span className="text-[1.5rem] leading-[1.7] text-muted">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HowSection() {
  return (
    <section
      aria-label="How it works — the CHTZ-Tech way"
      className="bg-bg border-t border-b border-border-light py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={HOW.heading}
          label={HOW.label}
          description="Senior-only execution changes every phase of a project."
        />

        {/* Two-column comparison grid */}
        <div className="mt-[6.4rem] grid grid-cols-1 sm:grid-cols-2 gap-[2.4rem]">
          <HowCard
            title={HOW.old.title}
            variant={HOW.old.variant}
            points={HOW.old.points}
          />
          <HowCard
            title={HOW.new.title}
            variant={HOW.new.variant}
            points={HOW.new.points}
          />
        </div>
      </div>
    </section>
  );
}
