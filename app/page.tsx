import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppCard } from "@/components/app-card"
import { AppsMarquee } from "@/components/apps-marquee"
import { AppOrbit } from "@/components/app-orbit"
import { StatusChip } from "@/components/status-chip"
import { SectionLabel } from "@/components/section-label"
import { EmptyApps } from "@/components/empty-apps"
import { Reveal } from "@/components/reveal"
import { getPlayStoreApps, summarizeApps } from "@/lib/play-store"

export const revalidate = 3600

export default async function HomePage() {
  const apps = await getPlayStoreApps()
  const summary = summarizeApps(apps)
  const featured = apps.slice(0, 6)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="bg-grain relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-44">
          <div className="aurora" aria-hidden />

          <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <Reveal immediate>
                <StatusChip />
              </Reveal>
              <Reveal immediate delay={0.08}>
                <h1 className="mt-7 font-serif text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[5rem] lg:leading-[0.95]">
                  Turning ideas into{" "}
                  <span className="text-brand italic">installs.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.16}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Clean, powerful Android apps built for real users. We design, build,
                  and publish on Google Play, then keep shipping updates. Everything we
                  make is live on this page.
                </p>
              </Reveal>
              <Reveal immediate delay={0.24}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/apps"
                    className="bg-brand group inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                  >
                    Explore our apps
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/studio"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    About the studio
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal immediate delay={0.3}>
              <div>
                <AppOrbit
                  apps={apps}
                  stat={{ value: summary.totalInstalls, label: "Installs and counting" }}
                />
                <div className="mt-2 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  Live from Google Play · Updates hourly
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Apps marquee ---------- */}
        {apps.length > 0 && (
          <section className="border-y border-border py-10">
            <div className="mx-auto mb-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionLabel>Now on Google Play</SectionLabel>
            </div>
            <AppsMarquee apps={apps} />
          </section>
        )}

        {/* ---------- Apps preview grid ---------- */}
        <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Selected apps</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                A few we are{" "}
                <span className="text-brand italic">proud of.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A small slice of the catalog, pulled live from Google Play. Tap
                through to install.
              </p>
            </div>
            <Link
              href="/apps"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              View all apps
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12">
            {featured.length === 0 ? (
              <EmptyApps />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((app, i) => (
                  <Reveal key={app.appId} delay={(i % 3) * 0.08}>
                    <AppCard app={app} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ---------- Trust strip ---------- */}
        {apps.length > 0 && (
          <section className="border-y border-border bg-card/30">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-border px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
              {[
                { value: String(summary.appCount), label: "Apps shipped" },
                { value: summary.totalInstalls, label: "Total installs" },
                { value: `${summary.yearsActive}+`, label: "Years on Google Play" },
              ].map((stat) => (
                <div key={stat.label} className="px-2 py-14 text-center sm:px-8">
                  <div className="text-brand font-serif text-5xl tracking-tight sm:text-6xl lg:text-7xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- CTA ---------- */}
        <section className="bg-grain relative overflow-hidden">
          <div className="aurora" aria-hidden />
          <div className="relative mx-auto w-full max-w-3xl px-4 py-28 text-center sm:px-6 lg:px-8">
            <Reveal>
              <SectionLabel className="justify-center">Say hello</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Got an idea? We{" "}
                <span className="text-brand italic">ship fast.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">
                We are a small team and we read everything. Tell us what you are
                building or using, and we will get back fast.
              </p>
              <Link
                href="/contact"
                className="bg-brand group mt-8 inline-flex items-center gap-1.5 rounded-full px-7 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
