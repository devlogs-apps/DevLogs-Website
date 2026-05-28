import Image from "next/image"
import { ArrowUpRight, Download, Star } from "lucide-react"
import type { PlayStoreApp } from "@/lib/play-store"
import { cn } from "@/lib/utils"

export function AppCard({ app, className }: { app: PlayStoreApp; className?: string }) {
  return (
    <article
      className={cn(
        "group glass glass-hover relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {/* Feature graphic (16:9) with a fade into the card */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
        {app.featureGraphic ? (
          <Image
            src={app.featureGraphic}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="bg-brand absolute inset-0 opacity-25" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
      </div>

      {/* Icon (gradient ring) overlapping upward into the graphic */}
      <div className="relative z-10 -mt-10 flex items-end justify-between px-5">
        <span className="bg-brand rounded-2xl p-px shadow-xl shadow-primary/20">
          <span className="block overflow-hidden rounded-[15px] bg-card p-1">
            <Image
              src={app.icon}
              alt={`${app.title} icon`}
              width={64}
              height={64}
              className="h-14 w-14 rounded-xl object-cover"
            />
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-serif text-[1.7rem] leading-none tracking-tight text-foreground">
          {app.title}
        </h3>
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {app.summary || "Available now on Google Play."}
        </p>

        {/* Meta row */}
        <div className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1">
            <Star className="h-3 w-3 fill-accent-warm text-accent-warm" />
            {app.scoreText ?? "New"}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1">
            <Download className="h-3 w-3 text-primary" />
            {app.installs ?? "New"}
          </span>
        </div>

        {/* Install CTA */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-transparent hover:[background-image:linear-gradient(104deg,var(--primary),var(--accent-warm))] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`Install ${app.title} on Google Play`}
        >
          Install on Play Store
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </article>
  )
}
