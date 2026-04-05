import { TECH_STACK } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

// TechStackSection mirrors the _mad-assembly Products component:
// - Inverted dot pattern background (dark dots on white)
// - Code-comment style labels: /* web + fullstack */
// - "/* proven */" badge (like Products "/* soon */")
// - Two tech groups in a grid, each with a list of tech badges

export function TechStackSection() {
  return (
    <section
      aria-label="Our technology stack"
      className="bg-dot-inverted border-t border-navy py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={TECH_STACK.heading}
          label={TECH_STACK.label}
          description={TECH_STACK.description}
        />

        {/* Two tech group cards — border-grid pattern with inverted dot bg */}
        <div className="mt-[6.4rem] border-l border-t border-navy">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {TECH_STACK.groups.map((group, index) => (
              <div
                key={group.name}
                className={`border-r border-b border-navy p-[3.2rem] relative ${
                  index === TECH_STACK.groups.length - 1 ? "md:border-b-0" : ""
                }`}
              >
                {/* Code-comment label */}
                <p className="text-[1.3rem] text-muted mb-[2rem] font-mono">
                  {group.comment}
                </p>

                <h3 className="text-[2rem] font-semibold text-near-black tracking-[-0.04rem] mb-[2.4rem]">
                  {group.name}
                </h3>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-[1rem]">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-[1.2rem] py-[0.6rem] border border-navy text-[1.3rem] text-near-black font-semibold rounded-[0.6rem] bg-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* proven badge — top-right corner */}
                <span className="absolute top-[2rem] right-[2.4rem] text-[1.2rem] text-muted font-mono">
                  {"/* proven */"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
