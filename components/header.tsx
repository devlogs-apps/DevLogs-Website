"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Logo } from "./logo"
import { NAV_LINKS, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

const EASE = [0.32, 0.72, 0, 1] as const

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3 w-5" aria-hidden>
      <span
        className={cn(
          "absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-500 ease-heavy",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-500 ease-heavy",
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
        )}
      />
    </span>
  )
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <header className="relative z-40">
      <div className="mx-auto grid h-24 w-full max-w-[1200px] grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:h-32">
        <Link href="/" aria-label="DevLogs home" className="justify-self-start">
          <Logo />
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1 rounded-[48px] bg-paper p-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "relative inline-flex rounded-[48px] px-5 py-2 text-[15px] font-medium transition-colors duration-300",
                    isActive(link.href) ? "text-paper" : "text-slate hover:text-ink",
                  )}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-[48px] bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-ink px-5 py-3 text-[15px] font-medium text-paper transition-transform duration-300 ease-heavy active:scale-[0.98] sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink md:hidden"
          >
            <MenuIcon open={false} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col bg-canvas px-4 pb-8 sm:px-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-24 items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} aria-label="DevLogs home">
                <Logo />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper"
              >
                <MenuIcon open />
              </button>
            </div>

            <nav className="mt-10 flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <span key={link.href} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className="display block py-2 text-[4.5rem]"
                    >
                      {link.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>

            <div className="mt-auto space-y-1 text-base font-medium">
              <a href={SITE.emailHref} className="block w-fit bg-voltage px-1">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="block w-fit px-1 text-slate">
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
