import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground",
        className,
      )}
    >
      <span className="bg-brand h-1.5 w-1.5 rounded-full" aria-hidden />
      {children}
    </span>
  )
}
