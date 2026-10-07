import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={cn("mono-label inline-flex items-center gap-2 text-slate", className)}>
      <span className="h-1.5 w-1.5 bg-current" aria-hidden />
      {children}
    </span>
  )
}
