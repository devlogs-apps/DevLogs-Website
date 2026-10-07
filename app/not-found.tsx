import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RiseLines } from "@/components/rise-lines"
import { NAV_LINKS, SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto grid w-full max-w-[1200px] flex-1 gap-6 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-10 lg:pb-24 lg:pt-10">
        <div className="flex flex-col">
          <p className="mono-label text-slate">Error 404</p>
          <RiseLines lines={["This page", "isn't here."]} className="display display-xl mt-5" />
          <p className="mt-8 max-w-md text-lg leading-[1.33] text-slate">
            The link may be old, or the page may have moved. If you were looking for an
            app&apos;s privacy policy, open it from the app&apos;s Google Play listing.
          </p>

          <nav aria-label="Go somewhere else" className="mt-10 border-t border-ash">
            <ul>
              {[{ href: "/", label: "Home" }, ...NAV_LINKS].map((link) => (
                <li key={link.href} className="border-b border-ash">
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between py-4"
                  >
                    <span className="heading text-[28px]">{link.label}</span>
                    <span
                      aria-hidden
                      className="h-2.5 w-2.5 rounded-full bg-ink transition-transform duration-500 ease-heavy group-hover:scale-[2.2]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[40px] bg-ink p-6 text-paper sm:p-10 lg:rounded-[64px]">
          <p className="mono-label text-smoke">Not found on devlogs.pro</p>
          <p
            aria-hidden
            className="display -mb-[0.12em] select-none leading-[0.8] text-[clamp(9rem,30vw,22rem)]"
          >
            404
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/apps"
              className="rounded-lg bg-paper px-6 py-4 font-medium text-ink transition-transform duration-300 ease-heavy active:scale-[0.98]"
            >
              Browse all apps
            </Link>
            <a href={SITE.emailHref} className="rounded-[64px] bg-mint px-4 py-2 text-sm font-medium text-ink">
              Report a broken link
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
