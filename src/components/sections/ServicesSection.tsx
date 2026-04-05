import { SERVICES } from "@/lib/content";
import { Globe, Bot, Layers, Code2, Building2 } from "lucide-react";

const ICONS = [Globe, Bot, Layers, Code2, Building2];
const ACCENTS = [
  "text-purple-brand",
  "text-orange-cta",
  "text-green-success",
  "text-purple-brand",
  "text-orange-cta",
];
const TAGS = [
  ["Next.js", "TypeScript", "PostgreSQL", "React", "Node.js"],
  ["GPT-4o", "Claude", "RAG", "Agents", "LangChain"],
  ["Solidity", "EVM", "DeFi", "Hardhat", "Wagmi"],
  ["Design", "Build", "Test", "Ship"],
  ["SOC 2", "GDPR", "SSO", "Audit logs", "99.9% SLA"],
];

export function ServicesSection() {
  const [web, ai, web3, fullstack, enterprise] = SERVICES.items;

  return (
    <section
      id="services"
      aria-label="Our software development services"
      className="py-[9.6rem] border-t border-border-light"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">

        {/* Heading */}
        <div className="mb-[6.4rem] max-w-[56rem]">
          <p
            className="text-orange-cta mb-[1.6rem]"
            style={{ fontSize: "1.4rem", fontFamily: "var(--font-family-mono)" }}
          >
            // WHAT WE BUILD
          </p>
          <h2
            className="font-semibold text-near-black leading-[1.1]"
            style={{ fontSize: "clamp(3.2rem, 4vw, 4.8rem)" }}
          >
            {SERVICES.heading}
          </h2>
        </div>

        {/* 6-col grid */}
        <div data-no-trail className="grid gap-[2rem] grid-cols-1 md:grid-cols-6">

          {/* Web App — 4/6 */}
          <div className="md:col-span-4 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <div className="flex items-center gap-[1.2rem] mb-[2rem]">
              <Globe size={20} strokeWidth={1.5} className={ACCENTS[0]} />
              <p className="text-[1.3rem] text-muted" style={{ fontFamily: "var(--font-family-mono)" }}>// web</p>
            </div>
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{web.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{web.description}</p>
            <div className="mt-auto rounded-xl bg-surface-frame border border-border-light p-[2rem] font-mono text-[1.4rem]">
              <div className="mb-[0.8rem]">
                <span className="text-orange-cta">const</span>{" "}
                <span className="text-purple-brand">stack</span>{" "}
                <span className="text-near-black">=</span>{" "}
                <span className="text-green-success">["Next.js", "TypeScript", "Postgres"]</span>
              </div>
              <div>
                <span className="text-green-success">✓</span>
                <span className="text-muted"> Production-ready · CI/CD · 95+ Lighthouse</span>
              </div>
            </div>
          </div>

          {/* AI — 2/6 */}
          <div className="md:col-span-2 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <div className="flex items-center gap-[1.2rem] mb-[2rem]">
              <Bot size={20} strokeWidth={1.5} className={ACCENTS[1]} />
              <p className="text-[1.3rem] text-muted" style={{ fontFamily: "var(--font-family-mono)" }}>// ai</p>
            </div>
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{ai.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{ai.description}</p>
            <div className="mt-auto flex flex-wrap gap-[0.8rem]">
              {TAGS[1].map((tag) => (
                <span key={tag} className="rounded-full border border-border-light px-[1.4rem] py-[0.5rem] text-[1.4rem] text-muted" style={{ fontFamily: "var(--font-family-mono)" }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Web3 — 3/6 */}
          <div className="md:col-span-3 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <div className="flex items-center gap-[1.2rem] mb-[2rem]">
              <Layers size={20} strokeWidth={1.5} className={ACCENTS[2]} />
              <p className="text-[1.3rem] text-muted" style={{ fontFamily: "var(--font-family-mono)" }}>// web3</p>
            </div>
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{web3.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{web3.description}</p>
            <div className="mt-auto flex flex-wrap gap-[0.8rem]">
              {TAGS[2].map((tag) => (
                <span key={tag} className="rounded-full border border-border-light px-[1.4rem] py-[0.5rem] text-[1.4rem] text-muted" style={{ fontFamily: "var(--font-family-mono)" }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Fullstack — 3/6 */}
          <div className="md:col-span-3 flex flex-col rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <div className="flex items-center gap-[1.2rem] mb-[2rem]">
              <Code2 size={20} strokeWidth={1.5} className={ACCENTS[3]} />
              <p className="text-[1.3rem] text-muted" style={{ fontFamily: "var(--font-family-mono)" }}>// fullstack</p>
            </div>
            <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{fullstack.title}</h3>
            <p className="text-[1.6rem] text-muted leading-[1.7] mb-[2.4rem]">{fullstack.description}</p>
            <div className="mt-auto grid grid-cols-4 gap-[1.2rem]">
              {["Design", "Build", "Test", "Ship"].map((step, i) => (
                <div key={step} className="rounded-xl bg-surface-frame border border-border-light p-[1.6rem] text-center">
                  <p
                    className="text-[1.3rem] font-semibold mb-[0.4rem]"
                    style={{ fontFamily: "var(--font-family-mono)", color: i === 3 ? "var(--color-orange-cta)" : undefined }}
                  >
                    0{i + 1}
                  </p>
                  <p className="text-[1.5rem] text-near-black font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise — full width */}
          <div className="md:col-span-6 flex flex-col md:flex-row md:items-center md:justify-between gap-[2.4rem] rounded-2xl border border-border-light bg-white p-[3.2rem]">
            <div className="flex items-start gap-[1.6rem]">
              <Building2 size={20} strokeWidth={1.5} className={`mt-[0.3rem] ${ACCENTS[4]}`} />
              <div>
                <h3 className="text-[2rem] font-semibold text-near-black mb-[1rem]">{enterprise.title}</h3>
                <p className="text-[1.6rem] text-muted leading-[1.7] max-w-[60rem]">{enterprise.description}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-[1.6rem]">
              {TAGS[4].map((badge) => (
                <span key={badge} className="text-[1.3rem] font-medium text-muted" style={{ fontFamily: "var(--font-family-mono)" }}>{badge}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
