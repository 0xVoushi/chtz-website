import Link from 'next/link'
import { X } from 'lucide-react'
import { SITE, FOOTER, FOOTER_LINKS } from '@/lib/content'

// Inline SVGs for GitHub and LinkedIn (not in lucide-react v1.x)
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[--color-bg] border-t border-[--color-border-light]">
      {/* Main grid */}
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem] py-[6.4rem]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[4.8rem]">

          {/* Brand column — spans 2 cols on md */}
          <div className="md:col-span-2">
            <p
              className="text-[1.8rem] font-semibold text-[--color-near-black] tracking-[-0.04rem]"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {SITE.name}
            </p>
            <p className="text-[1.4rem] text-[--color-muted] mt-[0.8rem] max-w-[28rem] leading-[1.6]">
              {FOOTER.tagline}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-[1.6rem] mt-[2.4rem]">
              <a
                href="https://twitter.com/chtz_tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow CHTZ-Tech on X"
                className="text-[--color-muted] hover:text-[--color-near-black] transition-std"
              >
                <X size={18} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/company/chtz-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow CHTZ-Tech on LinkedIn"
                className="text-[--color-muted] hover:text-[--color-near-black] transition-std"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://github.com/chtz-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CHTZ-Tech on GitHub"
                className="text-[--color-muted] hover:text-[--color-near-black] transition-std"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          {/* Link columns — 3 groups from FOOTER_LINKS */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="text-[1.2rem] font-semibold text-[--color-near-black] uppercase tracking-[0.1rem] mb-[2rem]">
                {group.title}
              </p>
              <ul className="flex flex-col gap-[1.2rem]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[1.4rem] text-[--color-muted] hover:text-[--color-near-black] transition-std"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[--color-border-light]">
        <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem] py-[2.4rem] flex items-center justify-between">
          <p className="text-[1.3rem] text-[--color-muted]">
            {FOOTER.copyright}
          </p>
          <a
            href="https://github.com/chtz-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] text-[--color-muted] hover:text-[--color-near-black] transition-std flex items-center gap-[0.8rem]"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
