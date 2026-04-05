import { PROCESS } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Our development process"
      className="bg-[--color-bg] border-t border-b border-[--color-border-light] py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={PROCESS.heading}
          label="How We Work"
          description="A structured, repeatable process that ships on time without surprises."
        />

        <div className="mt-[6.4rem]">
          <div className="grid grid-cols-1 md:grid-cols-4 relative">
            {/* Dashed connector line (desktop only, behind step content) */}
            <div
              className="hidden md:block absolute top-[2.4rem] left-[12.5%] right-[12.5%] h-px border-t border-dashed border-[--color-border-light]"
              aria-hidden="true"
            />
            {PROCESS.steps.map((step) => (
              <div
                key={step.number}
                className="relative px-[2.4rem] pt-[2.4rem] pb-[2rem] md:pb-0 border-t-[2px] border-[--color-orange-cta]"
              >
                <span
                  className="block text-[3rem] font-semibold leading-none mb-[1.6rem] text-[--color-orange-cta]"
                  style={{ fontFamily: 'var(--font-family-mono)' }}
                >
                  {step.number}
                </span>
                <h3 className="text-[1.6rem] font-semibold text-[--color-near-black] mb-[0.8rem]">
                  {step.title}
                </h3>
                <p className="text-[1.4rem] leading-[1.7] text-[--color-muted]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
