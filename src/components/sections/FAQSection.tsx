import { FAQ, SITE } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-white border-t border-navy py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader heading={FAQ.heading} label="Questions" />

        <div className="mt-[6.4rem] grid grid-cols-1 lg:grid-cols-[30rem_1fr] gap-[6.4rem]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[8rem] h-fit">
            <div className="bg-orange-cta rounded-[1.2rem] p-[3.2rem]">
              <p className="text-[1.4rem] font-semibold text-near-black uppercase tracking-[0.1rem] mb-[1.6rem]">
                Still have questions?
              </p>
              <p className="text-[1.5rem] leading-[1.7] text-near-black mb-[2.4rem]">
                Book a free 30-minute discovery call. No sales pitch — just
                answers.
              </p>
              <Button href={`mailto:${SITE.email}`} variant="secondary" size="sm">
                Book a Call
              </Button>
            </div>
          </aside>

          {/* Accordion */}
          <div>
            <FAQAccordion items={FAQ.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
