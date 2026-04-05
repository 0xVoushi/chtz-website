import { CTA_SECTION } from "@/lib/content";
import { ContactForm } from "@/components/ui/ContactForm";

export function CTASection() {
  return (
    <section
      id="contact"
      aria-label="Start your software project"
      className="bg-navy py-[12.8rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6.4rem] items-start">
          {/* Left: heading + body */}
          <div>
            <p className="text-[1.2rem] font-semibold text-orange-cta uppercase tracking-[0.12rem] mb-[1.6rem]">
              Let&apos;s Build Together
            </p>
            <h2 className="text-[2.8rem] md:text-[3.6rem] font-semibold tracking-[-0.08rem] leading-[1.1] text-white">
              {CTA_SECTION.heading}
            </h2>
            <p className="mt-[2rem] text-[1.6rem] leading-[1.7] text-white/70 max-w-[48rem]">
              {CTA_SECTION.body}
            </p>

            {/* Quick facts */}
            <div className="mt-[4rem] flex flex-col gap-[1.6rem]">
              {[
                "Free discovery call — no obligations",
                "Response within 24 hours",
                "Detailed estimate after first call",
              ].map((fact) => (
                <div key={fact} className="flex items-center gap-[1.2rem]">
                  <span className="w-[0.6rem] h-[0.6rem] rounded-full bg-green-success shrink-0" />
                  <span className="text-[1.5rem] text-white/70">{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
