import { RefreshCw } from "lucide-react"
import type { AppsSummary } from "@/lib/play-store"
import { cn } from "@/lib/utils"

export function StatsCard({
  summary,
  label = "Live from Play Store",
  className,
}: {
  summary: AppsSummary
  label?: string
  className?: string
}) {
  const stats = [
    { value: String(summary.appCount), label: "Apps live" },
    { value: summary.totalInstalls, label: "Installs" },
    { value: `${summary.yearsActive}yr`, label: "Years active" },
  ]

  return (
    <div
      className={cn("glass rounded-2xl p-5", className)}
    >
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="relative flex h-1.5 w-1.5" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        {label}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-brand font-serif text-3xl leading-none tracking-tight sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        <RefreshCw className="h-3 w-3" />
        Updates every hour
      </div>
    </div>
  )
}
