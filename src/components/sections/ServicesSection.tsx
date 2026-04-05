import { SERVICES } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Globe, Bot, Layers, Code2, Building2, type LucideIcon } from "lucide-react";

const LUCIDE_ICONS: LucideIcon[] = [Globe, Bot, Layers, Code2, Building2];

const TECH_TAGS: string[] = [
  "// Next.js · TypeScript · React",
  "// LangChain · OpenAI · Python",
  "// Solidity · Hardhat · Wagmi",
  "// Node.js · PostgreSQL · Prisma",
  "// Architecture · Migration · CI/CD",
];

type ServiceCardV2Props = {
  Icon: LucideIcon;
  title: string;
  description: string;
  techTag: string;
};

function ServiceCardV2({ Icon, title, description, techTag }: ServiceCardV2Props) {
  return (
    <div className="border border-[--color-border-light] bg-[--color-surface-frame] hover:bg-white transition-std p-[2.4rem] md:p-[3.2rem] flex flex-col gap-[1.6rem] h-full">
      <div className="flex items-center justify-center w-[4.8rem] h-[4.8rem] border border-[--color-border-light] rounded-[0.8rem] bg-[--color-surface-frame] shrink-0">
        <Icon size={24} className="text-navy" strokeWidth={1.5} />
      </div>

      <h3 className="text-[1.8rem] font-semibold leading-[1.3] text-near-black">
        {title}
      </h3>

      <p className="text-[1.5rem] leading-[1.7] text-muted flex-1">
        {description}
      </p>

      <p
        className="text-muted"
        style={{
          fontSize: "1.2rem",
          fontFamily: "var(--font-family-mono)",
        }}
      >
        {techTag}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our software development services"
      className="bg-[--color-bg] border-t border-b border-[--color-border-light] py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader heading={SERVICES.heading} label="What We Build" />

        <div className="mt-[6.4rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.4rem]">
          {SERVICES.items.map((service, index) => {
            const Icon = LUCIDE_ICONS[index] ?? Globe;
            const techTag = TECH_TAGS[index] ?? "";
            return (
              <div
                key={service.title}
                className={
                  index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }
              >
                <ServiceCardV2
                  Icon={Icon}
                  title={service.title}
                  description={service.description}
                  techTag={techTag}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
