import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"
import { formatCount, type PlayStoreApp } from "@/lib/play-store"
import { cn } from "@/lib/utils"

export function AppCard({ app, className }: { app: PlayStoreApp; className?: string }) {
  return (
    <article className={cn("group flex flex-col rounded-[32px] bg-paper p-2 transition-transform duration-500 ease-heavy hover:-translate-y-1.5", className)}>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] bg-mist">
        {app.featureGraphic ? (
          <Image
            src={app.featureGraphic}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover transition-transform duration-700 ease-heavy group-hover:scale-[1.04]"
          />
        ) : (
          <Image
            src={app.icon}
            alt=""
            width={96}
            height={96}
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[24px]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
        <div className="flex items-center gap-3.5">
          <Image
            src={app.icon}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-[16px] object-cover"
          />
          <h3 className="heading text-xl">{app.title}</h3>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-[1.3] text-slate">
          {app.summary || "Available now on Google Play."}
        </p>

        <div className="mb-5 mt-4 flex flex-wrap gap-2 text-sm font-medium">
          <span className="inline-flex items-center gap-1.5 rounded-[64px] bg-mint px-3 py-1">
            <Star className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} aria-hidden />
            {app.scoreText ?? "New"}
            <span className="sr-only">rating</span>
          </span>
          {app.installs != null && (
            <span className="rounded-[64px] bg-mist px-3 py-1">
              {formatCount(app.installs)} {app.installs === 1 ? "download" : "downloads"}
            </span>
          )}
        </div>

        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Install ${app.title} on Google Play`}
          className="group/btn mt-auto flex items-center justify-between rounded-lg bg-ink py-2 pl-5 pr-2 text-[15px] font-medium text-paper transition-transform duration-300 ease-heavy active:scale-[0.98]"
        >
          Install on Google Play
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-graphite transition-transform duration-500 ease-heavy group-hover/btn:-translate-y-px group-hover/btn:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </span>
        </a>
      </div>
    </article>
  )
}
