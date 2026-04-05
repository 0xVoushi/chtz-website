import { WHY_US } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function WhyUsSection() {
  return (
    <section
      aria-label="Why teams choose us"
      className="bg-dot-pattern py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={WHY_US.heading}
          label="Our Standards"
          theme="dark"
        />

        <div className="mt-[6.4rem] grid grid-cols-1 md:grid-cols-3 gap-[2.4rem]">
          {WHY_US.items.map((item) => (
            <ServiceCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              theme="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
