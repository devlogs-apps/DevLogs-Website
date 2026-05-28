import Image from "next/image"
import { cn } from "@/lib/utils"

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="DevLogs"
      width={64}
      height={64}
      priority
      className={cn("object-contain", className)}
    />
  )
}

export function Logo({
  className = "",
  size = "default",
}: {
  className?: string
  size?: "default" | "large"
}) {
  const glyph = size === "large" ? "h-9 w-9" : "h-7 w-7"
  const text = size === "large" ? "text-2xl" : "text-xl"

  return (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <LogoIcon
        className={cn(
          glyph,
          "transition-transform duration-500 group-hover:scale-110",
        )}
      />
      <span className="flex flex-col leading-none">
        <span className={cn("font-serif tracking-tight text-foreground", text)}>
          DevLogs
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
          Android Studio
        </span>
      </span>
    </span>
  )
}
