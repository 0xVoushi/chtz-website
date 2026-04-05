"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="divide-y divide-border-light">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={isOpen ? "bg-surface-frame rounded-lg px-[1.6rem]" : ""}>
            <button
              id={`faq-btn-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-start justify-between gap-[2.4rem] py-[2.4rem] text-left transition-std cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="text-[1.6rem] font-semibold text-near-black leading-[1.4]">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={cn(
                  "shrink-0 transition-std",
                  isOpen ? "rotate-180 text-orange-cta" : "rotate-0 text-muted-foreground"
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
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
