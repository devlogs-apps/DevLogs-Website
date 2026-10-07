import Image from "next/image"
import type { CSSProperties } from "react"

type Tile = { appId: string; title: string; icon: string; url: string }

/**
 * The studio's products, shown as physical objects on the canvas: up to nine
 * app icons in three columns, the middle one dropped by half a tile.
 */
export function IconWall({ apps }: { apps: Tile[] }) {
  const tiles = apps.slice(0, 9)
  const columns = [0, 1, 2].map((c) => tiles.filter((_, i) => i % 3 === c))

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {columns.map((col, c) => (
        <div key={c} className={c === 1 ? "flex flex-col gap-3 pt-[16%] sm:gap-4" : "flex flex-col gap-3 sm:gap-4"}>
          {col.map((app, r) => (
            <a
              key={app.appId}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.title} on Google Play`}
              title={app.title}
              className="pop block"
              style={{ "--i": r * 3 + c } as CSSProperties}
            >
              <Image
                src={app.icon}
                alt=""
                width={192}
                height={192}
                priority={r === 0}
                className={`aspect-square w-full rounded-[28%] bg-paper object-cover transition-transform duration-500 ease-heavy ${c === 1 ? "hover:rotate-3" : "hover:-rotate-3"} hover:scale-[1.03]`}
              />
            </a>
          ))}
        </div>
      ))}
    </div>
  )
}
