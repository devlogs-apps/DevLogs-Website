import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Gauge, Hammer, RefreshCw, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { getPlayStoreApps, summarizeApps } from "@/lib/play-store"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Studio",
  description:
    "DevLogs is an independent Android studio. We build clean, fast apps for real users and publish them on Google Play. Build. Ship. Repeat.",
  openGraph: {
    title: "Studio · DevLogs",
    description: "An independent Android studio. Build. Ship. Repeat.",
  },
}

const highlights = [
  {
    icon: Gauge,
    title: "Fast by default",
    body: "Lightweight builds that open instantly and stay smooth, not just on flagship phones.",
  },
  {
    icon: Sparkles,
    title: "Built for real use",
    body: "Every feature earns its place. We cut the noise and keep what people actually reach for.",
  },
  {
    icon: Hammer,
    title: "Tuned for performance",
    body: "Small footprint, low battery drain, clean memory use. Your phone barely notices.",
  },
  {
    icon: RefreshCw,
    title: "Shipped and maintained",
    body: "We release early, watch how people use it, and keep updating. Apps that stay alive.",
  },
]

export default async function StudioPage() {
  const apps = await getPlayStoreApps()
  const summary = summarizeApps(apps)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Intro / About */}
        <section className="bg-grain relative overflow-hidden pb-16 pt-32 sm:pt-40">
          <div className="aurora opacity-70" aria-hidden />
          <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal immediate>
              <SectionLabel>Studio</SectionLabel>
            </Reveal>
            <Reveal immediate delay={0.08}>
              <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[5rem] lg:leading-[0.95]">
                Build. Ship.{" "}
                <span className="text-brand italic">Repeat.</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.16}>
              <div className="mt-7 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  DevLogs is an independent Android studio. We design, build, and
                  publish apps on Google Play, then keep improving them long after
                  launch.
                </p>
                <p>
                  We work in small, fast cycles. Build something useful. Ship it. Learn
                  from real users. Do it again. Most of our apps have been live for{" "}
                  {summary.yearsActive}+ years and still get updates.
                </p>
                <p>
                  No bloat. No filler. Just apps that open fast, run clean, and respect
                  your phone. {summary.appCount} apps, {summary.totalInstalls} installs,
                  and counting.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission */}
        <section className="border-y border-border bg-card/30">
          <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionLabel className="mb-6">Mission</SectionLabel>
            <p className="font-serif text-3xl leading-snug tracking-tight text-foreground sm:text-4xl">
              Build useful Android apps, ship them fast, and make them better with{" "}
              <span className="text-brand italic">every release.</span>
            </p>
          </div>
        </section>

        {/* Feature highlights */}
        <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionLabel className="mb-10">What makes them different</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal
                  key={item.title}
                  delay={i * 0.06}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* Developer bio */}
        <section className="border-t border-border">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
            <SectionLabel>The team</SectionLabel>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p className="font-serif text-3xl leading-snug tracking-tight text-foreground sm:text-4xl">
                A small team, led by developers who{" "}
                <span className="text-brand italic">ship.</span>
              </p>
              <p>
                Design, code, release, and support all happen in house. No agencies, no
                handoffs, no roadmap theater. We pick problems worth solving, build the
                smallest thing that helps, and put it in front of real people.
              </p>
              <p>
                We are based in Bhakkar, Pakistan, building for users everywhere on
                Google Play under {`DEVLOGS (SMC-PRIVATE) LIMITED`}.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-grain relative overflow-hidden border-t border-border">
          <div className="aurora" aria-hidden />
          <div className="relative mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-serif text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl">
                Got an idea? We{" "}
                <span className="text-brand italic">ship fast.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                Feedback, a partnership, or something you want built. Tell us what you
                are working on. We read everything and reply fast.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/apps"
                  className="bg-brand group inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                >
                  Explore our apps
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
