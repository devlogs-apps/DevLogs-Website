import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppCard } from "@/components/app-card"
import { IconWall } from "@/components/icon-wall"
import { RiseLines } from "@/components/rise-lines"
import { ContactCta } from "@/components/contact-cta"
import { EmptyApps } from "@/components/empty-apps"
import { ArcSection, CountUp, FadeIn } from "@/components/motion"
import { getPlayStoreApps, summarizeApps } from "@/lib/play-store"

export default async function HomePage() {
  const apps = await getPlayStoreApps()
  const summary = summarizeApps(apps)
  const featured = [...apps].sort((a, b) => (b.installs ?? 0) - (a.installs ?? 0)).slice(0, 6)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-[1200px] gap-14 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pb-28 lg:pt-10">
          <div>
            <RiseLines
              lines={["Turning", "ideas into", "installs."]}
              className="display display-xl"
            />
            <p className="mt-8 max-w-md text-lg leading-[1.33] text-slate">
              Clean, powerful Android apps built for real users. We design, build, and
              publish on Google Play, then keep shipping updates. Everything we make is
              live on this page.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/apps"
                className="rounded-lg bg-ink px-6 py-4 font-medium text-paper transition-transform duration-300 ease-heavy active:scale-[0.98]"
              >
                Explore our apps
              </Link>
              <Link
                href="/studio"
                className="rounded-[4px] border-[1.5px] border-slate px-5 py-[0.875rem] font-medium text-slate transition-colors hover:border-ink hover:text-ink"
              >
                About the studio
              </Link>
            </div>
          </div>

          {apps.length > 0 && (
            <div className="mx-auto w-full max-w-[30rem] lg:max-w-none">
              <IconWall apps={apps} />
            </div>
          )}
        </section>

        {/* Selected apps: black top-arc block rising from below the hero */}
        <ArcSection>
          <div className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-16 sm:px-6 lg:pb-24 lg:pt-24">
            <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="display display-lg">Most downloaded.</h2>
                <p className="mt-5 max-w-md leading-[1.25] text-smoke">
                  Our most installed apps, ranked by downloads and pulled live from
                  Google Play. Tap through to install.
                </p>
              </div>
              <Link
                href="/apps"
                className="shrink-0 font-medium underline-offset-4 hover:underline"
              >
                View all {summary.appCount > 0 ? summary.appCount : ""} apps
              </Link>
            </FadeIn>

            <div className="mt-12">
              {featured.length === 0 ? (
                <EmptyApps />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {featured.map((app, i) => (
                    <FadeIn key={app.appId} delay={(i % 3) * 0.08} className="h-full">
                      <AppCard app={app} className="h-full text-ink" />
                    </FadeIn>
                  ))}
                </div>
              )}
            </div>

            {apps.length > 0 && (
              <dl className="mt-20 grid grid-cols-1 gap-10 border-t border-graphite pt-10 sm:grid-cols-3">
                {[
                  { value: String(summary.appCount), label: "Apps shipped" },
                  { value: summary.totalInstalls, label: "Downloads on Google Play" },
                  { value: `${summary.yearsActive}+`, label: "Years publishing" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-3">
                    <dt className="mono-label text-smoke">{stat.label}</dt>
                    <dd className="display display-lg">
                      <CountUp value={stat.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </ArcSection>

        <ContactCta body="We are a small team and we read everything. Tell us what you are building or using, and we will get back fast." />
      </main>
      <Footer />
    </div>
  )
}
