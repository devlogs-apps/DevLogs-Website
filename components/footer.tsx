import Link from "next/link"
import { Logo } from "./logo"
import { NAV_LINKS, SITE } from "@/lib/site"

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms" },
]

const linkClass = "text-paper/80 transition-colors hover:text-paper"

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-[1.3] text-smoke">
              An independent Android studio turning ideas into installs.
            </p>
            <a
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-[64px] bg-mint px-4 py-1.5 text-sm font-medium text-ink"
            >
              View on Google Play
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="col-span-2 space-y-2.5 sm:col-span-1">
              <li>
                <a href={SITE.emailHref} className={linkClass}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className={linkClass}>
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mono-label mt-12 flex flex-col justify-between gap-2 border-t border-graphite pt-5 text-smoke sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}, Bhakkar, Pakistan
          </p>
          <p>Build. Ship. Repeat.</p>
        </div>
      </div>
    </footer>
  )
}
