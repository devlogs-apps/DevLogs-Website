import Image from "next/image"
import type { PlayStoreApp } from "@/lib/play-store"
import { cn } from "@/lib/utils"

type CarrierStyle = React.CSSProperties & {
  "--size"?: string
  "--dur"?: string
  "--delay"?: string
}

// Each logo rides its own carrier circle. Logos on the same ring share a
// duration and differ only by negative delay, so they keep formation while
// orbiting. Inner rings spin a touch faster for a parallax feel.
const ORBITS: { ring: string; dur: number; delay: number; icon: number }[] = [
  { ring: "100%", dur: 72, delay: -3, icon: 58 },
  { ring: "100%", dur: 72, delay: -41, icon: 50 },
  { ring: "72%", dur: 54, delay: -9, icon: 64 },
  { ring: "72%", dur: 54, delay: -33, icon: 52 },
  { ring: "44%", dur: 40, delay: -5, icon: 54 },
  { ring: "44%", dur: 40, delay: -23, icon: 48 },
  { ring: "86%", dur: 64, delay: -50, icon: 56 },
]

// Design reference width (34rem). Icon sizes are expressed relative to the
// container width via cqw so logos scale down on phones and up on desktop.
const REF = 544
const cqw = (px: number) => `${((px / REF) * 100).toFixed(2)}cqw`

export function AppOrbit({
  apps,
  stat,
  className,
}: {
  apps: PlayStoreApp[]
  stat: { value: string; label: string }
  className?: string
}) {
  const nodes = apps.slice(0, ORBITS.length)

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-[26rem] lg:max-w-[34rem]",
        className,
      )}
      style={{ containerType: "inline-size" }}
    >
      <div className="orbit-glow" aria-hidden />

      {/* visible rings */}
      <div className="orbit-ring" style={{ "--size": "100%" } as CarrierStyle} aria-hidden />
      <div className="orbit-ring" style={{ "--size": "72%" } as CarrierStyle} aria-hidden />
      <div className="orbit-ring" style={{ "--size": "44%" } as CarrierStyle} aria-hidden />

      {/* center stat */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <div
          className="font-serif leading-none tracking-tight text-foreground"
          style={{ fontSize: "clamp(1.75rem, 11cqw, 3.75rem)" }}
        >
          {stat.value}
        </div>
        <div
          className="mt-2 font-mono uppercase tracking-[0.2em] text-muted-foreground"
          style={{ fontSize: "clamp(0.5rem, 2.1cqw, 0.6875rem)" }}
        >
          {stat.label}
        </div>
      </div>

      {/* orbiting app logos */}
      {nodes.map((app, i) => {
        const o = ORBITS[i]
        const size = cqw(o.icon)
        return (
          <div
            key={app.appId}
            className="orbit-carrier"
            style={
              { "--size": o.ring, "--dur": `${o.dur}s`, "--delay": `${o.delay}s` } as CarrierStyle
            }
          >
            <div className="orbit-planet">
              <div
                className="orbit-face"
                style={{ "--dur": `${o.dur}s`, "--delay": `${o.delay}s` } as CarrierStyle}
              >
                <span className="bg-brand block rounded-full p-px shadow-xl shadow-primary/30">
                  <span className="block overflow-hidden rounded-full bg-card p-0.5">
                    <Image
                      src={app.icon}
                      alt={app.title}
                      width={o.icon}
                      height={o.icon}
                      className="rounded-full object-cover"
                      style={{ width: size, height: size }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
