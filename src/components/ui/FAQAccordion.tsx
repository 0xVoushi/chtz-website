"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: readonly FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-navy">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-start justify-between gap-[2.4rem] py-[2.4rem] text-left transition-std cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-[1.6rem] font-semibold text-near-black leading-[1.4]">
                {item.question}
              </span>
              <span
                className={`text-purple-brand text-[2.4rem] font-light leading-none shrink-0 transition-std ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-[320ms] ease-in-out ${
                isOpen ? "max-h-[50rem] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-[2.4rem] text-[1.5rem] leading-[1.8] text-muted">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
