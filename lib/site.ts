// NOTE: keep this module free of server-only imports (e.g. lib/play-store.ts).
// It's consumed by client components like the header, so importing the scraper
// here would pull a Node-only package into the browser bundle.
const PLAY_STORE_DEV_ID = "5002728502658358241"
const PLAY_STORE_DEV_URL = `https://play.google.com/store/apps/dev?id=${PLAY_STORE_DEV_ID}`

export const SITE = {
  name: "DevLogs",
  legalName: "DEVLOGS (SMC-PRIVATE) LIMITED",
  tagline: "Indie Android Studio",
  email: "support@devlogs.pro",
  phone: "+92 349 4263738",
  phoneHref: "tel:+923494263738",
  emailHref: "mailto:support@devlogs.pro",
  address: "Shop No 21, New Ghalla Mandi, Bhakkar 30000, Pakistan",
  playStoreUrl: PLAY_STORE_DEV_URL,
} as const

export const NAV_LINKS = [
  { href: "/apps", label: "Apps" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const
