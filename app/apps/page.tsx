import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppCard } from "@/components/app-card"
import { StatsCard } from "@/components/stats-card"
import { SectionLabel } from "@/components/section-label"
import { EmptyApps } from "@/components/empty-apps"
import { Reveal } from "@/components/reveal"
import { getPlayStoreApps, summarizeApps } from "@/lib/play-store"

export const revalidate = 3600

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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-grain relative overflow-hidden pb-12 pt-32 sm:pt-40">
          <div className="aurora opacity-70" aria-hidden />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:px-8">
            <div>
              <Reveal immediate>
                <SectionLabel>Apps</SectionLabel>
              </Reveal>
              <Reveal immediate delay={0.08}>
                <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Every app we&apos;ve shipped on{" "}
                  <span className="text-brand italic">Google Play.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.16}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  A live look at our full catalog, pulled straight from the Play Store
                  and refreshed every six hours. Tap any app to install.
                </p>
              </Reveal>
            </div>
            <Reveal immediate delay={0.24}>
              <StatsCard summary={summary} label="Live snapshot" />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">
          {apps.length === 0 ? (
            <EmptyApps />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app, i) => (
                <Reveal key={app.appId} delay={(i % 3) * 0.06}>
                  <AppCard app={app} />
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
