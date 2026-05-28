import Link from "next/link"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { Logo } from "./logo"
import { SITE } from "@/lib/site"

const explore = [
  { href: "/apps", label: "Apps" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
]

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/30">
      <div className="dotted-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An independent Android studio turning ideas into installs.
            </p>
            <a
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass mt-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-primary/50"
            >
              <span className="text-brand">View on Google Play</span>
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Link + contact columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Explore
              </p>
              <ul className="mt-3 space-y-2">
                {explore.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Legal
              </p>
              <ul className="mt-3 space-y-2">
                {legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={SITE.emailHref}
                    className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {SITE.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-border pt-5 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} · Bhakkar, Pakistan
          </p>
          <p className="tracking-[0.18em] text-foreground/70">BUILD. SHIP. REPEAT.</p>
        </div>
      </div>
    </footer>
  )
}
