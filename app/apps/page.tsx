import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppCard } from "@/components/app-card"
import { RiseLines } from "@/components/rise-lines"
import { EmptyApps } from "@/components/empty-apps"
import { getPlayStoreApps, summarizeApps } from "@/lib/play-store"

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Every app DevLogs has shipped on Google Play. Clean, fast Android apps for real users, pulled live from the Play Store.",
  openGraph: {
    title: "Apps · DevLogs",
    description: "Every app we've shipped on Google Play, live from the Play Store.",
  },
}

export default async function AppsPage() {
  const apps = await getPlayStoreApps()
  const summary = summarizeApps(apps)

  const stats = [
    { value: String(summary.appCount), label: "Apps live" },
    { value: summary.totalInstalls, label: "Downloads" },
    { value: `${summary.yearsActive}+`, label: "Years active" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 pb-12 pt-6 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:pt-10">
          <div>
            <RiseLines
              lines={["Every app", "we've shipped."]}
              className="display display-xl"
            />
            <p className="mt-7 max-w-lg text-lg leading-[1.33] text-slate">
              Our full catalogue, pulled straight from the Google Play store in your
              country and refreshed every hour. Tap any app to install.
            </p>
          </div>

          {apps.length > 0 && (
            <dl className="flex flex-wrap gap-x-10 gap-y-6 rounded-[32px] bg-ink p-6 text-paper sm:p-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-2">
                  <dt className="mono-label text-smoke">{stat.label}</dt>
                  <dd className="display text-5xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-6 sm:px-6">
          {apps.length === 0 ? (
            <EmptyApps />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {apps.map((app) => (
                <AppCard key={app.appId} app={app} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
