import { SERVICES } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our software development services"
      className="bg-dashed-grid border-t border-navy py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader heading={SERVICES.heading} label="What We Build" />

        <div className="mt-[6.4rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.4rem]">
          {SERVICES.items.map((service, index) => (
            <div
              key={service.title}
              className={
                // Center 5th card on lg: skip to col 2
                index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                theme="light"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
