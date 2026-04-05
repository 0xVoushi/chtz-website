"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CTA_SECTION } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  message: string;
  budget: string;
};

const inputClasses =
  "w-full border border-grey-light bg-[rgba(255,255,255,0.06)] text-white placeholder:text-[#607b96] py-[1.2rem] px-[1.6rem] rounded-[0.8rem] text-[1.5rem] focus:outline-none focus:border-orange-cta transition-std";

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-[6.4rem]">
        <p className="text-[3.2rem] text-orange-cta font-semibold mb-[1.6rem]">
          Message sent.
        </p>
        <p className="text-[1.6rem] text-[#a0b4c8]">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[1.6rem]"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.6rem]">
        <div>
          <label
            htmlFor="name"
            className="block text-[1.3rem] font-semibold text-[#a0b4c8] uppercase tracking-[0.08rem] mb-[0.8rem]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[1.3rem] font-semibold text-[#a0b4c8] uppercase tracking-[0.08rem] mb-[0.8rem]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-[1.3rem] font-semibold text-[#a0b4c8] uppercase tracking-[0.08rem] mb-[0.8rem]"
        >
          Project Description
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're building..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
        />
      </div>
      <div>
        <label
          htmlFor="budget"
          className="block text-[1.3rem] font-semibold text-[#a0b4c8] uppercase tracking-[0.08rem] mb-[0.8rem]"
        >
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={`${inputClasses} appearance-none`}
        >
          {CTA_SECTION.budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="pt-[0.8rem]">
        <Button type="submit" variant="primary" size="lg">
          Send Message
        </Button>
      </div>
    </form>
  );
}
