import { SERVICES } from "@/lib/content";
import { Globe, Bot, Layers, Code2, Building2, type LucideIcon } from "lucide-react";

const LUCIDE_ICONS: LucideIcon[] = [Globe, Bot, Layers, Code2, Building2];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our software development services"
      className="py-12 md:py-20 border-t border-[--color-border-light]"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* Section heading */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-[3.2rem] font-medium leading-tight md:text-[4rem]">
            {SERVICES.heading}
          </h2>
          <p className="text-[1.6rem] text-muted-foreground">
            Senior engineers building production-grade software — not outsourced, not junior.
          </p>
        </div>

        {/* Features 4 grid — divide-x divide-y with shared cell borders */}
        <div className="relative mx-auto grid max-w-2xl divide-x divide-y border border-[--color-border-light] lg:max-w-4xl sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map((service, index) => {
            const Icon = LUCIDE_ICONS[index] ?? Globe;
            return (
              <div key={service.title} className="space-y-3 p-12">
                <div className="flex items-center gap-2">
                  <Icon className="size-[1.6rem] text-[--color-muted]" strokeWidth={1.5} />
                  <h3 className="text-[1.4rem] font-medium text-[--color-near-black]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[1.4rem] text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
