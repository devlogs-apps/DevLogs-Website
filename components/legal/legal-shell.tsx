import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/section-label"
import { cn } from "@/lib/utils"
import { LegalToc } from "./legal-toc"

export type TocItem = { id: string; label: string }

/** Single source of truth for the effective date shown on every legal page. */
export const LEGAL_LAST_UPDATED = "May 28, 2026"

export function LegalShell({
  kind,
  headline,
  intro,
  lastUpdated,
  badge,
  toc,
  children,
}: {
  kind: string
  headline: ReactNode
  intro: string
  lastUpdated: string
  badge: string
  toc: TocItem[]
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1200px] px-4 pb-12 pt-6 sm:px-6 lg:pt-10">
          <SectionLabel>{kind}</SectionLabel>
          <h1 className="display display-lg mt-5 max-w-4xl">{headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.33] text-slate">{intro}</p>
          <div className="mt-7 flex flex-wrap items-center gap-2 text-sm font-medium">
            <span className="rounded-[64px] bg-paper px-3 py-1">Updated {lastUpdated}</span>
            <span className="rounded-[64px] bg-mint px-3 py-1">{badge}</span>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-24 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
            <aside className="hidden lg:block">
              <LegalToc toc={toc} />
            </aside>

            <div className="min-w-0 space-y-14 rounded-[32px] bg-paper p-6 sm:p-10 lg:p-14">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

/* ---------------------------------- blocks --------------------------------- */

export function LegalSection({
  id,
  title,
  number,
  children,
}: {
  id: string
  title: string
  number?: number
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="heading text-[28px]">
        {number != null ? (
          <span className="mr-3 font-mono text-base font-normal tabular-nums text-slate">
            {String(number).padStart(2, "0")}
          </span>
        ) : null}
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-[1.5] text-slate [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:bg-mint [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </section>
  )
}

export function Callout({
  title,
  children,
  className,
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn("rounded-[24px] bg-mist p-5 sm:p-6", className)}
    >
      {title ? (
        <p className="mono-label mb-2 text-slate">
          {title}
        </p>
      ) : null}
      <div className="leading-[1.5] text-ink">{children}</div>
    </div>
  )
}

export function InfoGrid({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[24px] bg-mist p-5"
        >
          <p className="font-medium text-ink">{item.title}</p>
          <p className="mt-1.5 text-sm leading-[1.4] text-slate">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  )
}

export function Clauses({ section, items }: { section: number; items: ReactNode[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="shrink-0 pt-0.5 font-mono text-sm tabular-nums text-ink">
            {section}.{i + 1}
          </span>
          <span className="leading-[1.5] text-slate">
            {item}
          </span>
        </li>
      ))}
    </ol>
  )
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 bg-ink" aria-hidden />
          <span className="leading-[1.5] text-slate">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
