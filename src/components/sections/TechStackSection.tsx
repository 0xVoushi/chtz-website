import { TECH_LOGOS } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LogoCloud } from '@/components/ui/logo-cloud'

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      aria-label="Our technology stack"
      className="relative overflow-hidden bg-[--color-bg] py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading="Technologies We Ship In Production"
          label="Tech Stack"
          description="Not just listed on a CV — proven in production across 40+ projects."
        />
        <div className="mt-[6.4rem]">
          <LogoCloud logos={TECH_LOGOS} />
        </div>
      </div>
    </section>
  )
}
