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
        {/* Hero */}
        <section className="bg-grain relative overflow-hidden pb-12 pt-32 sm:pt-40">
          <div className="aurora opacity-70" aria-hidden />
          <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>{kind}</SectionLabel>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="glass rounded-full px-3 py-1">Updated {lastUpdated}</span>
              <span className="glass rounded-full px-3 py-1">{badge}</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-28 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <LegalToc toc={toc} />
            </aside>

            <div className="min-w-0 space-y-14">{children}</div>
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
      <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-[2rem]">
        {number != null ? (
          <span className="mr-3 text-brand tabular-nums">{number}.</span>
        ) : null}
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-medium [&_strong]:text-foreground">
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
      className={cn("glass rounded-2xl p-5", className)}
    >
      {title ? (
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
          {title}
        </p>
      ) : null}
      <div className="text-sm leading-relaxed text-foreground/90">{children}</div>
    </div>
  )
}

export function InfoGrid({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="glass glass-hover rounded-2xl p-4"
        >
          <p className="font-medium text-foreground">{item.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
          <span className="shrink-0 pt-px font-mono text-sm tabular-nums text-primary">
            {section}.{i + 1}
          </span>
          <span className="text-[15px] leading-relaxed text-muted-foreground">
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
          <span className="bg-brand mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden />
          <span className="text-[15px] leading-relaxed text-muted-foreground">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
