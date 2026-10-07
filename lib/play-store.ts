import "server-only"
import { unstable_cache } from "next/cache"
import { headers } from "next/headers"
import gplay from "google-play-scraper"

/**
 * Numeric Google Play developer account id for the studio.
 * The whole site is a live portfolio of every app published under this account.
 */
export const PLAY_STORE_DEV_ID = "5002728502658358241"

export const PLAY_STORE_DEV_URL = `https://play.google.com/store/apps/dev?id=${PLAY_STORE_DEV_ID}`

/**
 * The catalogue is fetched from the visitor's own Play storefront (Vercel's
 * geo header), so they see the apps and listings available where they are.
 * Pakistan is the studio's home storefront and surfaces the complete
 * catalogue, so it's the default (local dev, unknown country) and the fallback
 * when a storefront returns nothing. Without lang + country the scraper's
 * developer() call throws instead of returning a list.
 */
const STORE_LANG = "en"
const DEFAULT_COUNTRY = "pk"

/** Normalized model the UI renders. Decoupled from the scraper's raw shape. */
export type PlayStoreApp = {
  appId: string
  title: string
  summary: string
  icon: string
  featureGraphic: string | null
  scoreText: string | null
  /** Real install count (Play's maxInstalls), not the "1,000+" bucket. */
  installs: number | null
  url: string
  releasedAt: string | null
}

export type AppsSummary = {
  appCount: number
  totalInstalls: string
  yearsActive: number
}

const PLAY = "https://play.google.com"

/** Play returns summaries/titles with HTML entities ("&amp;", "&#39;"). */
function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
}

/**
 * Every app id on the developer page, across all pages.
 *
 * google-play-scraper's developer() stops after the first page (10 apps):
 * Play changed the shape of the "next page" response, so the library finds no
 * apps in it. We page through it ourselves and only collect ids; full details
 * still come from gplay.app(). These array paths mirror Play's internal data
 * and are as fragile as the library's own.
 */
async function fetchDeveloperAppIds(country: string): Promise<string[]> {
  const html = await fetch(
    `${PLAY}/store/apps/dev?id=${PLAY_STORE_DEV_ID}&hl=${STORE_LANG}&gl=${country}`,
  ).then((r) => r.text())

  const raw = html.match(/key: 'ds:3', hash: '\d+', data:([\s\S]*?), sideChannel: \{\}\}\);/)?.[1]
  if (!raw) return []

  const cluster = JSON.parse(raw)[0][1][0][21]
  const ids: string[] = cluster[0].map((app: any) => app[0][0])
  const token: string | undefined = cluster[1]?.[3]?.[1]
  if (!token) return ids

  try {
    const req = JSON.stringify([[null, [[10, [10, 100]], true, null, [96, 27, 4, 8, 57, 30, 110, 79, 11, 16, 49, 1, 3, 9, 12, 104, 55, 56, 51, 10, 34, 77]], null, token]])
    const body = new URLSearchParams({ "f.req": JSON.stringify([[["qnKhOb", req, null, "generic"]]]) })
    const res = await fetch(
      `${PLAY}/_/PlayStoreUi/data/batchexecute?rpcids=qnKhOb&hl=${STORE_LANG}&gl=${country}&soc-app=121&soc-platform=1&soc-device=1`,
      { method: "POST", body },
    ).then((r) => r.text())

    const data = JSON.parse(JSON.parse(res.substring(5))[0][2])
    const more: string[] = (data?.[0]?.[6]?.[0] ?? []).map((app: any) => app?.[12]?.[0])
    return [...new Set([...ids, ...more.filter(Boolean)])]
  } catch {
    return ids
  }
}

/**
 * Collect every app id, then app() per id for title / headerImage / installs /
 * score. Per-app calls run through Promise.allSettled so one failed lookup
 * never sinks the page. Any failure at all collapses to [] — a broken scraper
 * must never crash the site.
 */
async function fetchAppsUncached(country: string): Promise<PlayStoreApp[]> {
  try {
    const ids = await fetchDeveloperAppIds(country)

    const detailed = await Promise.allSettled(
      ids.map((appId) => gplay.app({ appId, lang: STORE_LANG, country })),
    )

    return detailed.flatMap((result) => {
      if (result.status !== "fulfilled") return []
      const d = result.value
      return {
        appId: d.appId,
        title: decodeEntities(d.title),
        summary: decodeEntities(d.summary ?? ""),
        icon: d.icon,
        featureGraphic: d.headerImage ?? null,
        scoreText: d.scoreText ?? null,
        installs: d.maxInstalls ?? d.minInstalls ?? null,
        url: d.url,
        releasedAt: d.released ?? null,
      }
    })
  } catch {
    return []
  }
}

// Arguments are part of the cache key, so each storefront is cached separately.
const fetchApps = unstable_cache(fetchAppsUncached, ["play-store-apps-v3"], {
  revalidate: 60 * 60,
  tags: ["play-store"],
})

export async function getPlayStoreApps(): Promise<PlayStoreApp[]> {
  const geo = (await headers()).get("x-vercel-ip-country") ?? ""
  const country = /^[a-z]{2}$/i.test(geo) ? geo.toLowerCase() : DEFAULT_COUNTRY

  const apps = await fetchApps(country)
  if (apps.length > 0 || country === DEFAULT_COUNTRY) return apps
  return fetchApps(DEFAULT_COUNTRY)
}

const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
  roundingMode: "trunc",
})

/** 4557 -> "4.5K", 1234567 -> "1.2M". Truncates so a count never rounds up. */
export function formatCount(n: number): string {
  return compact.format(n)
}

export function summarizeApps(apps: PlayStoreApp[]): AppsSummary {
  const totalInstalls = apps.reduce((sum, app) => sum + (app.installs ?? 0), 0)

  const years = apps
    .map((app) => (app.releasedAt ? new Date(app.releasedAt).getFullYear() : null))
    .filter((year): year is number => !!year && !Number.isNaN(year))

  const earliest = years.length ? Math.min(...years) : new Date().getFullYear()
  const yearsActive = Math.max(1, new Date().getFullYear() - earliest)

  return {
    appCount: apps.length,
    totalInstalls: formatCount(totalInstalls),
    yearsActive,
  }
}
