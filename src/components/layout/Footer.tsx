import { SITE, FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-navy py-[4.8rem]">
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[3.2rem]">
          {/* Brand */}
          <div>
            <p className="text-[1.8rem] font-semibold text-navy tracking-[-0.04rem]">
              {SITE.name}
            </p>
            <p className="text-[1.3rem] text-muted mt-[0.4rem]">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-[2.4rem] gap-y-[1.2rem]">
            {FOOTER.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-[1.4rem] text-muted hover:text-purple-brand transition-std"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <p className="mt-[3.2rem] text-[1.3rem] text-grey-light">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
