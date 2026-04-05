import { CAPABILITIES } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CapabilitiesSection() {
  return (
    <section
      aria-label="Capabilities"
      className="bg-white border-t border-navy py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={CAPABILITIES.heading}
          label="Full Engineering Surface"
          description={CAPABILITIES.description}
        />

        {/* Border-grid layout */}
        <div className="mt-[6.4rem] border border-navy rounded-[1.2rem] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {CAPABILITIES.items.map((item, index) => {
              const isLastRow = index >= CAPABILITIES.items.length - 2;
              const isLastRowMd = index >= CAPABILITIES.items.length - 3;
              const isRightColSm = (index + 1) % 2 === 0;
              const isRightColMd = (index + 1) % 3 === 0;

              return (
                <div
                  key={item.title}
                  className={[
                    "p-[2.8rem] md:p-[3.2rem]",
                    "border-navy",
                    !isRightColSm ? "border-r md:border-r-0" : "",
                    !isRightColMd ? "md:border-r" : "",
                    !isLastRow ? "border-b md:border-b-0" : "",
                    !isLastRowMd ? "md:border-b" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="w-[3.2rem] h-[0.3rem] bg-orange-cta mb-[2rem] rounded-full" />
                  <h3 className="text-[1.6rem] font-semibold text-near-black tracking-[-0.03rem] mb-[1rem]">
                    {item.title}
                  </h3>
                  <p className="text-[1.4rem] leading-[1.7] text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
