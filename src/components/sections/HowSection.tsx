import { HOW } from "@/lib/content";

export function HowSection() {
  return (
    <section
      aria-label="How it works — the CHTZ-Tech way"
      className="bg-bg border-t border-b border-border-light py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">

        {/* Heading */}
        <div className="mb-[6.4rem]">
          <p
            className="text-orange-cta mb-[1.6rem]"
            style={{ fontSize: "1.4rem", fontFamily: "var(--font-family-mono)" }}
          >
            // HOW IT WORKS
          </p>
          <h2
            className="font-semibold text-near-black leading-[1.1]"
            style={{ fontSize: "clamp(3.2rem, 4vw, 4.8rem)" }}
          >
            {HOW.heading}
          </h2>
          <p className="mt-[1.6rem] text-[1.8rem] text-muted leading-[1.7]">
            Senior-only execution changes every phase of a project.
          </p>
        </div>

        {/* Two-column comparison */}
        <div data-no-trail className="grid grid-cols-1 md:grid-cols-2 gap-[2.4rem]">

          {/* Old Way */}
          <div className="rounded-2xl border border-border-light bg-white flex flex-col overflow-hidden">
            <div className="flex items-center gap-[1.6rem] p-[3.2rem] pb-[2.4rem]">
              <div className="shrink-0 w-[4.8rem] h-[4.8rem] flex items-center justify-center border border-orange-cta rounded-[0.8rem]">
                <span className="text-[2rem] font-bold text-orange-cta">✗</span>
              </div>
              <div>
                <p
                  className="text-[1.3rem] font-medium text-orange-cta uppercase tracking-[0.12rem] mb-[0.4rem]"
                  style={{ fontFamily: "var(--font-family-mono)" }}
                >
                  Typical agencies
                </p>
                <h3 className="text-[2.2rem] font-semibold text-near-black leading-[1.2]">
                  {HOW.old.title}
                </h3>
              </div>
            </div>

            <div className="mx-[3.2rem] h-px bg-border-light" />

            <ul className="flex flex-col p-[3.2rem] pt-[2.8rem] gap-[2rem]">
              {HOW.old.points.map((point) => (
                <li key={point} className="flex items-start gap-[1.6rem]">
                  <span className="mt-[1rem] w-[0.6rem] h-[0.6rem] rounded-full bg-orange-cta shrink-0" />
                  <span className="text-[1.7rem] leading-[1.7] text-muted line-through decoration-orange-cta/40">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CHTZ-Tech Way */}
          <div className="rounded-2xl border border-green-success/25 bg-white flex flex-col overflow-hidden">
            <div className="flex items-center gap-[1.6rem] p-[3.2rem] pb-[2.4rem]">
              <div className="shrink-0 w-[4.8rem] h-[4.8rem] flex items-center justify-center border border-green-success rounded-[0.8rem] bg-green-success/5">
                <span className="text-[2rem] font-bold text-green-success">✓</span>
              </div>
              <div>
                <p
                  className="text-[1.3rem] font-medium text-green-success uppercase tracking-[0.12rem] mb-[0.4rem]"
                  style={{ fontFamily: "var(--font-family-mono)" }}
                >
                  CHTZ-Tech
                </p>
                <h3 className="text-[2.2rem] font-semibold text-near-black leading-[1.2]">
                  {HOW.new.title}
                </h3>
              </div>
            </div>

            <div className="mx-[3.2rem] h-px bg-green-success/20" />

            <ul className="flex flex-col p-[3.2rem] pt-[2.8rem] gap-[2rem]">
              {HOW.new.points.map((point) => (
                <li key={point} className="flex items-start gap-[1.6rem]">
                  <span className="mt-[1rem] w-[0.6rem] h-[0.6rem] rounded-full bg-green-success shrink-0" />
                  <span className="text-[1.7rem] leading-[1.7] text-near-black font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bottom stat bar */}
            <div className="mt-auto mx-[3.2rem] mb-[3.2rem] rounded-xl bg-surface-frame border border-border-light p-[2.4rem] flex flex-wrap gap-x-[3.2rem] gap-y-[1.2rem]">
              {["40+ products shipped", "Senior engineers only", "95+ Lighthouse scores"].map((stat) => (
                <span
                  key={stat}
                  className="text-[1.4rem] font-medium text-muted"
                  style={{ fontFamily: "var(--font-family-mono)" }}
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
