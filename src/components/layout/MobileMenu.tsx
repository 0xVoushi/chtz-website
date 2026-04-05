"use client";

import { useState, useEffect } from "react";
import { NAV } from "@/lib/content";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex flex-col justify-center items-center w-[4.4rem] h-[4.4rem] rounded-[0.8rem] bg-[#607b96] hover:bg-orange-cta transition-std cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`block w-[2rem] h-[0.2rem] bg-white transition-std origin-center ${
            isOpen ? "translate-y-[0.55rem] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-[2rem] h-[0.2rem] bg-white mt-[0.4rem] transition-std ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-[2rem] h-[0.2rem] bg-white mt-[0.4rem] transition-std origin-center ${
            isOpen ? "-translate-y-[0.95rem] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy"
          onClick={() => setIsOpen(false)}
          style={{ top: "6.4rem" }}
        >
          <nav
            className="flex flex-col px-[2.4rem] pt-[4rem] gap-[0.8rem]"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[2rem] font-semibold text-white py-[1.6rem] border-b border-[#607b96] hover:text-orange-cta transition-std"
              >
                {link.label}
              </a>
            ))}
            <a
              href={NAV.cta.href}
              onClick={() => setIsOpen(false)}
              className="mt-[3.2rem] inline-flex items-center justify-center bg-orange-cta text-near-black font-semibold py-[1.4rem] px-[2.8rem] rounded-[0.8rem] text-[1.6rem] transition-std glow-orange"
            >
              {NAV.cta.label}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
