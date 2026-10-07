import Image from "next/image"
import { cn } from "@/lib/utils"

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={64}
      height={64}
      priority
      className={cn("object-contain", className)}
    />
  )
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoIcon className="h-8 w-8" />
      <span className="text-lg font-semibold tracking-[-0.03em]">DevLogs</span>
    </span>
  )
}
