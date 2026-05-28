"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import { NAV_LINKS, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="DevLogs home" className="shrink-0">
          <Logo />
        </Link>

        {/* Center pill nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="glass flex items-center gap-0.5 rounded-full p-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative inline-flex rounded-full px-4 py-1.5 font-mono text-[13px] uppercase tracking-[0.08em] transition-colors",
                    isActive(link.href)
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="bg-brand absolute inset-0 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-brand hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-foreground backdrop-blur-md md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="bg-grain relative ml-auto flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-border bg-background px-6 pb-10 pt-5"
            >
              <div className="aurora opacity-60" aria-hidden />
              <div className="relative z-10 flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="relative z-10 mt-12 flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block border-b border-border py-4 font-serif text-4xl tracking-tight transition-colors",
                        isActive(link.href) ? "text-primary" : "text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="relative z-10 mt-auto flex flex-col gap-3">
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {SITE.email}
                </a>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {SITE.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
