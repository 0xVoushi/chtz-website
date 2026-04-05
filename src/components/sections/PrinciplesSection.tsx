import { PRINCIPLES } from '@/lib/content'

type StatementPrinciple = Extract<typeof PRINCIPLES[number], { type: 'statement' }>
type MetricPrinciple = Extract<typeof PRINCIPLES[number], { type: 'metric' }>

const outcomesCard = PRINCIPLES.filter((p): p is StatementPrinciple => p.type === 'statement').find(p => p.id === 'outcomes')!
const ownershipCard = PRINCIPLES.filter((p): p is StatementPrinciple => p.type === 'statement').find(p => p.id === 'ownership')!
const metricCards = PRINCIPLES.filter((p): p is MetricPrinciple => p.type === 'metric')

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      aria-label="Our engineering principles"
      className="py-[9.6rem] border-t border-border-light"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">

        {/* Heading */}
        <div className="mb-[6.4rem] text-center">
          <h2
            className="font-semibold text-near-black leading-[1.1]"
            style={{ fontSize: 'clamp(3.2rem, 4vw, 4.8rem)' }}
          >
            How We Build
          </h2>
          <p className="mt-[1.6rem] text-[1.8rem] text-muted leading-[1.7]">
            The standards we hold to on every project, not just the ones we like.
          </p>
        </div>

        {/* Grid — 4 cols */}
        <div data-no-trail className="grid gap-[1.6rem] grid-cols-1 md:grid-cols-4">

          {/* Large navy card — col-span-2, row-span-2 */}
          <div className="md:col-span-2 md:row-span-2 flex flex-col justify-between rounded-2xl bg-navy p-[4rem] min-h-[32rem]">
            <span
              className="text-[1.3rem] uppercase tracking-[0.12rem] text-orange-cta"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {outcomesCard.label}
            </span>
            <div>
              <p className="text-[2.4rem] md:text-[2.8rem] font-medium leading-[1.35] text-white mt-[2.4rem]">
                {outcomesCard.content}
              </p>
              <span
                className="text-[1.3rem] text-white/40 mt-[3.2rem] block"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                // engineering first
              </span>
            </div>
          </div>

          {/* 4 metric cards — col-span-1 each */}
          {metricCards.map((principle) => (
            <div
              key={principle.id}
              className="col-span-1 flex flex-col justify-between rounded-2xl border border-border-light bg-surface-frame p-[3.2rem]"
            >
              <div>
                <h3 className="text-[1.9rem] font-semibold text-near-black mb-[1rem]">
                  {principle.title}
                </h3>
                <p className="text-[1.6rem] leading-[1.7] text-muted">
                  {principle.body}
                </p>
              </div>
              <span
                className="text-[1.3rem] text-muted mt-[2.4rem] block"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {principle.tag}
              </span>
            </div>
          ))}

          {/* Wide ownership card — col-span-4 */}
          <div className="md:col-span-4 flex flex-col justify-between rounded-2xl border border-border-light bg-surface-light p-[4rem]">
            <span
              className="text-[1.3rem] uppercase tracking-[0.12rem] text-orange-cta mb-[2rem] block"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {ownershipCard.label}
            </span>
            <h3 className="text-[2.2rem] md:text-[2.6rem] font-medium leading-[1.4] text-near-black">
              {ownershipCard.content}
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}
