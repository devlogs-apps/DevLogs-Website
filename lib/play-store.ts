import "server-only"
import { unstable_cache } from "next/cache"
import gplay from "google-play-scraper"

/**
 * Numeric Google Play developer account id for the studio.
 * The whole site is a live portfolio of every app published under this account.
 */
export const PLAY_STORE_DEV_ID = "5002728502658358241"

export const PLAY_STORE_DEV_URL = `https://play.google.com/store/apps/dev?id=${PLAY_STORE_DEV_ID}`

/**
 * Locale matters: the studio is Pakistan-based and some titles are region-gated,
 * so this is the storefront that surfaces the complete catalogue. Without lang +
 * country the scraper's developer() call throws instead of returning a list.
 */
const STORE_LANG = "en"
const STORE_COUNTRY = "pk"

/** Normalized model the UI renders. Decoupled from the scraper's raw shape. */
export type PlayStoreApp = {
  appId: string
  title: string
  summary: string
  icon: string
  featureGraphic: string | null
  scoreText: string | null
  installs: string | null
  url: string
  releasedAt: string | null
}

export type AppsSummary = {
  appCount: number
  totalInstalls: string
  yearsActive: number
}

/**
 * Two-step fetch: developer() returns the catalogue (no feature graphics),
 * then app() per appId fills in headerImage / installs / score. Per-app calls
 * run through Promise.allSettled so one failed lookup never sinks the page.
 * Any failure at all collapses to [] — a broken scraper must never crash the site.
 */
async function fetchAppsUncached(): Promise<PlayStoreApp[]> {
  try {
    const list = await gplay.developer({
      devId: PLAY_STORE_DEV_ID,
      lang: STORE_LANG,
      country: STORE_COUNTRY,
      num: 60,
    })

    const detailed = await Promise.allSettled(
      list.map((item) =>
        gplay.app({ appId: item.appId, lang: STORE_LANG, country: STORE_COUNTRY }),
      ),
    )

    return list.map((item, i) => {
      const result = detailed[i]
      const detail = result.status === "fulfilled" ? result.value : null

      return {
        appId: item.appId,
        title: item.title,
        summary: detail?.summary ?? item.summary ?? "",
        icon: detail?.icon ?? item.icon,
        featureGraphic: detail?.headerImage ?? null,
        scoreText: detail?.scoreText ?? item.scoreText ?? null,
        installs: detail?.installs ?? null,
        url: item.url,
        releasedAt: detail?.released ?? null,
      }
    })
  } catch {
    return []
  }
}

export const getPlayStoreApps = unstable_cache(fetchAppsUncached, ["play-store-apps"], {
  revalidate: 60 * 60,
  tags: ["play-store"],
})

/** "1,234,567+" / "12,000+" -> "1.2M+" / "12K+". Falls back to "0". */
function formatInstalls(total: number): string {
  if (total <= 0) return "0"
  if (total >= 1_000_000_000) return `${trim(total / 1_000_000_000)}B+`
  if (total >= 1_000_000) return `${trim(total / 1_000_000)}M+`
  if (total >= 1_000) return `${trim(total / 1_000)}K+`
  return `${total}+`
}

function trim(n: number): string {
  // one decimal, but drop a trailing ".0"
  return n.toFixed(1).replace(/\.0$/, "")
}

function parseInstalls(value: string | null): number {
  if (!value) return 0
  const digits = value.replace(/[^0-9]/g, "")
  return digits ? Number.parseInt(digits, 10) : 0
}

export function summarizeApps(apps: PlayStoreApp[]): AppsSummary {
  const totalInstalls = apps.reduce((sum, app) => sum + parseInstalls(app.installs), 0)

  const years = apps
    .map((app) => (app.releasedAt ? new Date(app.releasedAt).getFullYear() : null))
    .filter((year): year is number => !!year && !Number.isNaN(year))

  const earliest = years.length ? Math.min(...years) : new Date().getFullYear()
  const yearsActive = Math.max(1, new Date().getFullYear() - earliest)

  return {
    appCount: apps.length,
    totalInstalls: formatInstalls(totalInstalls),
    yearsActive,
  }
}
