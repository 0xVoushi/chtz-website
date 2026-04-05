import { FAQ } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-bg border-t border-b border-border-light py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader heading={FAQ.heading} label="Questions" />

        <div className="mt-[6.4rem]">
          <FAQAccordion items={FAQ.items} />
        </div>
      </div>
    </section>
  );
}
