import { SectionHeader } from '@/components/ui/SectionHeader'
import PricingCards from '@/components/ui/pricing-component'

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-label="Project-based pricing"
      className="bg-bg border-t border-b border-border-light py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          align="center"
          heading="Transparent Project-Based Pricing"
          label="Pricing"
          description="Every engagement starts with a discovery call and a detailed estimate."
        />

        <div className="mt-[6.4rem]">
          <PricingCards />
        </div>

        <p
          className="mt-[2.4rem] text-center text-[1.2rem] text-muted"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          // All projects start with a free discovery call. No obligations.
        </p>
      </div>
    </section>
  )
}
