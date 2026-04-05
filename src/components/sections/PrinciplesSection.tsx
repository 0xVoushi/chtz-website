import { PRINCIPLES } from '@/lib/content'

// Extract typed subsets
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
      className="py-12 md:py-20 border-t border-[--color-border-light]"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* Section heading */}
        <div className="mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-[3.2rem] font-medium leading-tight md:text-[4rem]">
            How We Build
          </h2>
          <p className="text-[1.6rem] text-muted-foreground">
            The standards we hold to on every project, not just the ones we like.
          </p>
        </div>

        {/* Testimonial grid layout — 2 cols mobile, 4 cols desktop, 2 rows desktop */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {/* Large featured card — spans 2 cols and 2 rows (navy) */}
          <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-xl bg-[--color-navy] p-[3.2rem] min-h-[24rem]">
            <span
              className="text-[1.2rem] uppercase tracking-[0.1rem] text-[--color-orange-cta]"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {outcomesCard.label}
            </span>
            <div>
              <p className="text-[2rem] md:text-[2.4rem] font-medium leading-snug text-white mt-[2rem]">
                {outcomesCard.content}
              </p>
              <span
                className="text-[1.2rem] text-white/40 mt-[3.2rem] block"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                // engineering first
              </span>
            </div>
          </div>

          {/* 4 metric cards */}
          {metricCards.map((principle) => (
            <div
              key={principle.id}
              className="col-span-1 flex flex-col justify-between rounded-xl border border-[--color-border-light] bg-[--color-surface-frame] p-[2.4rem]"
            >
              <div>
                <h3 className="text-[1.6rem] font-semibold text-[--color-near-black] mb-[0.8rem]">
                  {principle.title}
                </h3>
                <p className="text-[1.4rem] leading-[1.7] text-muted-foreground">
                  {principle.body}
                </p>
              </div>
              <span
                className="text-[1.2rem] text-[--color-muted] mt-[1.6rem]"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {principle.tag}
              </span>
            </div>
          ))}

          {/* Wide ownership card — spans 2 cols on the left */}
          <div className="col-span-2 flex flex-col justify-between rounded-xl border border-[--color-border-light] bg-[--color-surface-light] p-[3.2rem]">
            <span
              className="text-[1.2rem] uppercase tracking-[0.1rem] text-[--color-orange-cta] mb-[1.6rem] block"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {ownershipCard.label}
            </span>
            <h3 className="text-[1.8rem] md:text-[2rem] font-medium leading-[1.4] text-[--color-near-black]">
              {ownershipCard.content}
            </h3>
          </div>

          {/* Two spacer cells to fill row 3 on md+ */}
          <div className="hidden md:block" aria-hidden="true" />
          <div className="hidden md:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
