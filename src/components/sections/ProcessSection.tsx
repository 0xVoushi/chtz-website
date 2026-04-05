import { PROCESS } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProcessStep } from "@/components/ui/ProcessStep";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Our development process"
      className="bg-dashed-grid border-t border-navy py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={PROCESS.heading}
          label="How We Work"
          description="A structured, repeatable process that ships on time without surprises."
        />

        <div className="mt-[6.4rem] grid grid-cols-1 md:grid-cols-2 gap-x-[6.4rem] gap-y-[4.8rem]">
          {PROCESS.steps.map((step) => (
            <div
              key={step.number}
              className="border-l-[0.3rem] border-purple-brand pl-[2.4rem]"
            >
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
