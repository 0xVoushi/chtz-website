import { CAPABILITIES } from '@/lib/content'
import { Server, Bot, Monitor, Plug, Layers, Gauge } from 'lucide-react'

const [backend, productUI, aiAgents, sdkApi, blockchain, infra] = CAPABILITIES.items

const TAGS = {
  backend: ['REST', 'GraphQL', 'PostgreSQL', 'Redis', 'Auth', 'Microservices'],
  ai:      ['GPT-4o', 'Claude', 'RAG', 'Agents', 'LangChain', 'Embeddings'],
  ui:      ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Radix', 'a11y'],
  sdk:     ['Stripe', 'Twilio', 'Supabase', 'Clerk', 'Resend', 'Webhooks'],
  web3:    ['Solidity', 'EVM', 'ERC-20', 'DeFi', 'Hardhat', 'Wagmi'],
  infra:   ['CI/CD', 'Docker', 'Vercel', 'AWS', 'Sentry', 'Uptime'],
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-[0.8rem] mt-auto">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border-light px-[1.4rem] py-[0.5rem] text-[1.4rem] text-muted"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function CardLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-[1rem] mb-[2rem]">
      <span>{icon}</span>
      <p className="text-[1.3rem] text-muted" style={{ fontFamily: 'var(--font-family-mono)' }}>
        {label}
      </p>
    </div>
  )
}

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      className="bg-bg border-t border-b border-border-light py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">

        {/* Heading */}
        <div className="mb-[6.4rem] max-w-[56rem]">
          <p
            className="text-orange-cta mb-[1.6rem]"
            style={{ fontSize: '1.4rem', fontFamily: 'var(--font-family-mono)' }}
          >
            // FULL ENGINEERING SURFACE
          </p>
          <h2
            className="font-semibold text-near-black leading-[1.1]"
            style={{ fontSize: 'clamp(3.2rem, 4vw, 4.8rem)' }}
          >
            {CAPABILITIES.heading}
          </h2>
          <p className="mt-[1.6rem] text-[1.8rem] text-muted leading-[1.7]">
            {CAPABILITIES.description}
          </p>
        </div>

        {/* 6-col grid */}
        <div className="grid gap-[2rem] grid-cols-1 md:grid-cols-6">

          {/* Row 1 — Blockchain 50% + AI 50% */}
          <div className="md:col-span-3 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <CardLabel icon={<Layers size={20} strokeWidth={1.5} className="text-orange-cta" />} label="// web3" />
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{blockchain.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{blockchain.description}</p>
            <TagList tags={TAGS.web3} />
          </div>

          <div className="md:col-span-3 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <CardLabel icon={<Bot size={20} strokeWidth={1.5} className="text-orange-cta" />} label="// ai" />
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{aiAgents.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{aiAgents.description}</p>
            <TagList tags={TAGS.ai} />
          </div>

          {/* Row 2 — Product UI 1/3 + Backend 2/3 */}
          <div className="md:col-span-2 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <CardLabel icon={<Monitor size={20} strokeWidth={1.5} className="text-green-success" />} label="// frontend" />
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{productUI.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{productUI.description}</p>
            <TagList tags={TAGS.ui} />
          </div>

          <div className="md:col-span-4 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <CardLabel icon={<Server size={20} strokeWidth={1.5} className="text-purple-brand" />} label="// backend" />
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{backend.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{backend.description}</p>
            <div className="mt-auto rounded-xl bg-surface-frame border border-border-light p-[2rem] font-mono text-[1.4rem]">
              <div className="text-muted mb-[0.8rem]">
                <span className="text-orange-cta">GET</span>
                <span className="text-muted"> /api/v1/</span>
                <span className="text-purple-brand">users</span>
              </div>
              <div>
                <span className="text-green-success">200</span>
                <span className="text-muted"> OK · 42ms · </span>
                <span className="text-near-black">cached</span>
              </div>
            </div>
          </div>

          {/* Row 3 — Infra 2/3 + SDK 1/3 */}
          <div className="md:col-span-4 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <CardLabel icon={<Gauge size={20} strokeWidth={1.5} className="text-green-success" />} label="// devops" />
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{infra.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{infra.description}</p>
            <div className="mt-auto grid grid-cols-3 gap-[1.2rem]">
              {[
                { label: 'Deploy freq.', value: 'Daily' },
                { label: 'Uptime SLA', value: '99.9%' },
                { label: 'Lighthouse', value: '95+' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-surface-frame border border-border-light p-[2rem] text-center">
                  <p className="text-[2.2rem] font-semibold text-near-black">{value}</p>
                  <p className="text-[1.3rem] text-muted mt-[0.4rem]" style={{ fontFamily: 'var(--font-family-mono)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <CardLabel icon={<Plug size={20} strokeWidth={1.5} className="text-purple-brand" />} label="// integrations" />
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{sdkApi.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{sdkApi.description}</p>
            <TagList tags={TAGS.sdk} />
          </div>

        </div>
      </div>
    </section>
  )
}
