import { CAPABILITIES } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BentoGridWithFeatures, BentoFeature } from '@/components/ui/bento-grid'

const monoTag = (tag: string) => (
  <span
    className="text-[1.2rem] text-muted mt-[1.2rem] block"
    style={{ fontFamily: 'var(--font-family-mono)' }}
  >
    {tag}
  </span>
)

const features: BentoFeature[] = [
  {
    id: 'backend-systems',
    title: CAPABILITIES.items[0].title,
    description: CAPABILITIES.items[0].description,
    content: monoTag('// backend'),
    className: 'md:col-span-3 border-r border-b border-border-light',
  },
  {
    id: 'ai-agents',
    title: CAPABILITIES.items[2].title,
    description: CAPABILITIES.items[2].description,
    content: monoTag('// ai'),
    className: 'md:col-span-2 border-r border-b border-border-light',
  },
  {
    id: 'product-ui',
    title: CAPABILITIES.items[1].title,
    description: CAPABILITIES.items[1].description,
    content: monoTag('// frontend'),
    className: 'md:col-span-1 border-b border-border-light',
  },
  {
    id: 'sdk-integrations',
    title: CAPABILITIES.items[3].title,
    description: CAPABILITIES.items[3].description,
    content: monoTag('// integrations'),
    className: 'md:col-span-2 border-r border-border-light',
  },
  {
    id: 'blockchain',
    title: CAPABILITIES.items[4].title,
    description: CAPABILITIES.items[4].description,
    content: monoTag('// web3'),
    className: 'md:col-span-2 border-r border-border-light',
  },
  {
    id: 'infra-reliability',
    title: CAPABILITIES.items[5].title,
    description: CAPABILITIES.items[5].description,
    content: monoTag('// devops'),
    className: 'md:col-span-2',
  },
]

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      className="bg-bg border-t border-b border-border-light py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading={CAPABILITIES.heading}
          label="Full Engineering Surface"
          description={CAPABILITIES.description}
        />
        <div className="mt-[6.4rem]">
          <BentoGridWithFeatures features={features} />
        </div>
      </div>
    </section>
  )
}
