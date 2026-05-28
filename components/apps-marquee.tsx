import Image from "next/image"
import type { PlayStoreApp } from "@/lib/play-store"

export function AppsMarquee({ apps }: { apps: PlayStoreApp[] }) {
  if (apps.length === 0) return null

  // Duplicate the set so the -50% translate loops seamlessly.
  const track = [...apps, ...apps]

  return (
    <div className="marquee-mask group relative w-full overflow-hidden py-2">
      <ul className="animate-marquee-x flex w-max items-center gap-12 group-hover:[animation-play-state:paused] sm:gap-16">
        {track.map((app, i) => (
          <li key={`${app.appId}-${i}`} className="flex shrink-0 items-center gap-3.5">
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.title} on Google Play`}
              className="flex items-center gap-3.5 opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src={app.icon}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl border border-border object-cover"
              />
              <span className="whitespace-nowrap text-lg font-medium tracking-tight text-foreground">
                {app.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
