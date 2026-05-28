import { ArrowUpRight, PackageOpen } from "lucide-react"
import { SITE } from "@/lib/site"

export function EmptyApps() {
  return (
    <div className="glass mx-auto flex max-w-lg flex-col items-center rounded-2xl px-8 py-14 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-primary">
        <PackageOpen className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
        Catalog is loading
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        We could not reach Google Play just now. Browse everything we have shipped
        directly on the Play Store.
      </p>
      <a
        href={SITE.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand group mt-6 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
      >
        Open Play Store
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  )
}
