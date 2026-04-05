"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

export default function PricingCards() {
  const [starterFast, setStarterFast] = useState(false)
  const [proFast, setProFast] = useState(false)

  const LightCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#1e2d3d" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const OrangeCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#fea55f" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="#1e2d3d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const DarkCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7.5" className="stroke-neutral-500" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const ToggleSwitch = ({
    enabled,
    onChange,
    isDark = false,
  }: {
    enabled: boolean
    onChange: (v: boolean) => void
    isDark?: boolean
  }) => (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={[
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none",
          "ring-1 ring-inset",
          enabled
            ? isDark
              ? "bg-neutral-100 ring-neutral-300"
              : "bg-neutral-900 ring-neutral-900"
            : isDark
            ? "bg-neutral-800 ring-neutral-700"
            : "bg-neutral-200 ring-neutral-300",
        ].join(" ")}
        aria-pressed={enabled}
        aria-label="Toggle fast delivery"
      >
        <span
          className={[
            "inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ease-in-out",
            enabled ? "translate-x-6" : "translate-x-1",
            isDark ? (enabled ? "bg-neutral-900" : "bg-neutral-500") : "bg-white",
            "shadow-sm",
          ].join(" ")}
        />
      </button>
      <span className={["text-[14px]", isDark ? "text-neutral-400" : "text-neutral-600"].join(" ")}>
        Fast delivery (5 days)
      </span>
    </div>
  )

  const starterFeatures = ["1 design concept", "Custom code", "On-time delivery", "Email support"]
  const proFeatures = ["3 design concepts", "Custom code", "On-time delivery", "Priority support", "Micro-interactions"]

  return (
    <div className="w-full">
      <div data-no-trail className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[900px] mx-auto">
        <div
          className={[
            "rounded-3xl p-2 flex flex-col",
            "bg-white/65 backdrop-blur-md",
            "border border-neutral-200/70",
            "shadow-[0_12px_40px_-15px_rgba(0,0,0,0.15)]",
            "ring-1 ring-inset ring-white/40",
          ].join(" ")}
        >
          <div
            className={[
              "relative rounded-2xl p-8 mb-2",
              "bg-white/80 backdrop-blur-sm",
              "border border-neutral-200/80",
              "ring-1 ring-inset ring-neutral-900/5",
            ].join(" ")}
          >
            <span className="absolute top-4 right-4 inline-flex shrink-0 items-center rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-[12px] font-medium text-neutral-700 backdrop-blur whitespace-nowrap" style={{ fontFamily: 'var(--font-family-mono)' }}>
              Most Friendly
            </span>
            <div className="mb-12">
              <h2 className="text-[32px] font-bold tracking-tight text-[#1e2d3d]">Starter</h2>
              <p className="text-neutral-600 text-[18px] leading-relaxed mt-1">
                Launch quickly with a solid landing page.
              </p>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold tracking-tighter text-[#1e2d3d]">$1299</span>
              <span className="text-neutral-400 text-lg ml-1">/fixed</span>
            </div>

            <button
              className="w-full rounded-xl font-semibold text-[20px] py-5 cursor-pointer text-white hover:opacity-95 transition-opacity duration-200 flex items-center justify-center gap-2.5"
              style={{ background: '#1e2d3d', boxShadow: '0 4px 18px -6px rgba(30,45,61,0.4)' }}
            >
              Book a call
              <Calendar className="w-8 h-8" style={{ color: '#607b96' }} />
            </button>
          </div>

          <div
            className={[
              "px-6 pb-6 pt-4 flex-1 flex flex-col",
              "bg-white/50 backdrop-blur-sm rounded-2xl",
              "border border-neutral-200/70",
              "ring-1 ring-inset ring-white/30",
            ].join(" ")}
          >
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              {starterFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <LightCheckIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-[16px] font-medium" style={{ color: '#1e2d3d' }}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <ToggleSwitch enabled={starterFast} onChange={setStarterFast} />
            </div>
          </div>
        </div>

        {/* Dark (Pro) Card — brand navy + orange */}
        <div
          className="rounded-3xl p-2 flex flex-col shadow-[0_12px_50px_-15px_rgba(30,45,61,0.6)]"
          style={{
            background: 'linear-gradient(145deg, #1e2d3d 0%, #162536 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div
            className="relative rounded-2xl p-8 mb-2"
            style={{
              background: 'linear-gradient(160deg, rgba(254,165,95,0.08) 0%, rgba(30,45,61,0.6) 60%)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(4px)',
            }}
          >

            <span
              className="absolute top-4 right-4 inline-flex shrink-0 items-center rounded-full px-4 py-1.5 text-[12px] font-medium whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-family-mono)',
                background: 'rgba(254,165,95,0.12)',
                border: '1px solid rgba(254,165,95,0.4)',
                color: '#fea55f',
              }}
            >
              Best Value
            </span>

            <div className="mb-12">
              <h2 className="text-[32px] font-bold tracking-tight text-white">Pro</h2>
              <p className="text-[18px] leading-relaxed mt-1" style={{ color: '#607b96' }}>
                Go further with more concepts and polish.
              </p>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold tracking-tighter text-white">$2299</span>
              <span className="text-lg ml-1" style={{ color: '#607b96' }}>/fixed</span>
            </div>

            <button
              className="w-full rounded-xl font-semibold text-[20px] py-5 cursor-pointer flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity duration-200"
              style={{
                background: '#fea55f',
                color: '#141414',
                boxShadow: '0 4px 24px -6px rgba(254,165,95,0.5)',
              }}
            >
              Book a call
              <Calendar className="w-8 h-8" style={{ color: '#1e2d3d' }} />
            </button>
          </div>

          <div
            className="px-6 pb-6 pt-4 flex-1 flex flex-col rounded-2xl"
            style={{
              background: 'rgba(30,45,61,0.5)',
              border: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <OrangeCheckIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-[16px] font-medium" style={{ color: '#a8b9c8' }}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <ToggleSwitch enabled={proFast} onChange={setProFast} isDark />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
