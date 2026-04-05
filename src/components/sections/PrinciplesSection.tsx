'use client'

import { motion } from 'framer-motion'
import { PRINCIPLES } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'

// Framer Motion variants for stagger animation
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

// Extract typed subsets — PRINCIPLES is as const with narrowed union types
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
      className="bg-[--color-bg] border-t border-b border-[--color-border-light] py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          heading="How We Build"
          label="Our Principles"
          description="The standards we hold to on every project, not just the ones we like."
        />

        {/* Masonry grid — 2 cols mobile, 4 cols md+, explicit row structure */}
        <motion.div
          className="mt-[6.4rem] grid grid-cols-2 md:grid-cols-4 gap-[2.4rem]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Row 1 & 2: Large "outcomes" card (col-span-2, row-span-2) + 4 metric cards */}
          <motion.div
            variants={item}
            className="col-span-2 row-span-2 bg-[--color-near-black] p-[3.2rem] flex flex-col justify-between rounded-xl min-h-[24rem]"
          >
            <div>
              <p
                className="text-[1.2rem] uppercase tracking-[0.1rem] text-[--color-orange-cta] mb-[2rem]"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {outcomesCard.label}
              </p>
              <h3 className="text-[2rem] md:text-[2.4rem] font-semibold leading-[1.4] text-white">
                {outcomesCard.content}
              </h3>
            </div>
            <span
              className="text-[1.2rem] text-white/40 mt-[3.2rem]"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              // engineering first
            </span>
          </motion.div>

          {/* 4 metric cards */}
          {metricCards.map((principle) => (
            <motion.div
              key={principle.id}
              variants={item}
              className="col-span-1 bg-[--color-surface-frame] border border-[--color-border-light] p-[2.4rem] flex flex-col justify-between rounded-xl"
            >
              <div>
                <h3 className="text-[1.6rem] font-semibold text-[--color-near-black] mb-[0.8rem]">
                  {principle.title}
                </h3>
                <p className="text-[1.4rem] leading-[1.7] text-[--color-muted]">
                  {principle.body}
                </p>
              </div>
              <span
                className="text-[1.2rem] text-[--color-muted] mt-[1.6rem]"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {principle.tag}
              </span>
            </motion.div>
          ))}

          {/* Row 3: Ownership statement spanning left 2 cols */}
          <motion.div
            variants={item}
            className="col-span-2 bg-[--color-surface-frame] border border-[--color-border-light] p-[3.2rem] flex flex-col justify-between rounded-xl"
          >
            <p
              className="text-[1.2rem] uppercase tracking-[0.1rem] text-[--color-orange-cta] mb-[1.6rem]"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {ownershipCard.label}
            </p>
            <h3 className="text-[1.8rem] md:text-[2rem] font-semibold leading-[1.4] text-[--color-near-black]">
              {ownershipCard.content}
            </h3>
          </motion.div>

          {/* Two empty cells to complete row 3 on md+ — hidden on mobile */}
          <div className="hidden md:block" aria-hidden="true" />
          <div className="hidden md:block" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
