import Link from "next/link";
import { NAV, SITE } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border-light">
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem] flex items-center justify-between h-[6.4rem]">
        {/* Logo */}
        <Link
          href="/"
          className="text-[1.8rem] font-semibold text-near-black tracking-[-0.04rem] hover:text-orange-cta transition-std"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          {SITE.name}
        </Link>

        {/* Desktop nav — anchor links (not pages, so <a> is fine here) */}
        <nav className="hidden md:flex items-center gap-[3.2rem]">
          {NAV.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[1.4rem] text-muted-foreground hover:text-near-black transition-std relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[0.2rem] after:bg-transparent hover:after:bg-orange-cta after:transition-std"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href={NAV.cta.href}>
            <Button variant="primary" size="sm">
              {NAV.cta.label}
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
