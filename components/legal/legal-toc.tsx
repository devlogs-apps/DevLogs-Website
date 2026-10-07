"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { TocItem } from "./legal-shell"

export function LegalToc({ toc }: { toc: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "")
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const sections = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    // Highlights the topmost section whose start has scrolled past the offset,
    // i.e. the section the reader is currently inside.
    const offset = 140

    const update = () => {
      frame.current = null
      let current = sections[0].id
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section.id
        } else {
          break
        }
      }
      // Pin the last section once the page is scrolled to the bottom, so short
      // trailing sections can still become active.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) current = sections[sections.length - 1].id

      setActiveId((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      if (frame.current !== null) return
      frame.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame.current !== null) window.cancelAnimationFrame(frame.current)
    }
  }, [toc])

  return (
    <nav className="sticky top-8" aria-label="On this page">
      <p className="mono-label mb-3 px-3 text-slate">
        Contents
      </p>
      <ul className="space-y-0.5">
        {toc.map((t) => {
          const isActive = t.id === activeId
          return (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                  isActive
                    ? "bg-ink font-medium text-paper"
                    : "text-slate hover:bg-paper hover:text-ink"
                )}
              >
                {t.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
