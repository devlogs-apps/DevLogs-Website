import type { Metadata } from "next"
import { Gauge, Hammer, RefreshCw, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RiseLines } from "@/components/rise-lines"
import { ContactCta } from "@/components/contact-cta"
import { FadeIn } from "@/components/motion"
import { getPlayStoreApps, summarizeApps } from "@/lib/play-store"

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
        <section className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:pt-10">
          <RiseLines lines={["Build.", "Ship.", "Repeat."]} className="display display-xl" />
          <div className="max-w-lg space-y-5 text-lg leading-[1.33] text-slate">
            <p>
              DevLogs is an independent Android studio. We design, build, and publish
              apps on Google Play, then keep improving them long after launch.
            </p>
            <p>
              We work in small, fast cycles. Build something useful. Ship it. Learn from
              real users. Do it again. Most of our apps have been live for{" "}
              {summary.yearsActive}+ years and still get updates.
            </p>
            {apps.length > 0 && (
              <p>
                No bloat. No filler. Just apps that open fast, run clean, and respect
                your phone. {summary.appCount} apps, {summary.totalInstalls} downloads,
                and counting.
              </p>
            )}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <FadeIn className="rounded-[40px] bg-ink p-6 text-paper sm:p-10 lg:rounded-[64px] lg:p-16">
            <p className="mono-label text-smoke">Our mission</p>
            <p className="display display-md mt-6 max-w-5xl">
              Build useful Android apps, ship them fast, and make them better with every
              release.
            </p>
          </FadeIn>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 lg:py-24">
          <FadeIn>
            <h2 className="display display-lg max-w-2xl">What makes them different</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeIn key={item.title} delay={(i % 2) * 0.08} className="rounded-[32px] bg-paper p-6 sm:p-8">
                  <Icon className="h-7 w-7" strokeWidth={1.25} aria-hidden />
                  <h3 className="heading mt-10 text-[28px]">{item.title}</h3>
                  <p className="mt-3 max-w-sm leading-[1.25] text-slate">{item.body}</p>
                </FadeIn>
              )
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <FadeIn className="grid gap-8 border-t border-ash pt-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 className="heading text-[40px]">A small team, led by developers who ship.</h2>
            <div className="max-w-xl space-y-5 text-lg leading-[1.33] text-slate">
              <p>
                Design, code, release, and support all happen in house. No agencies, no
                handoffs, no roadmap theater. We pick problems worth solving, build the
                smallest thing that helps, and put it in front of real people.
              </p>
              <p>
                We are based in Bhakkar, Pakistan, building for users everywhere on
                Google Play under DEVLOGS (SMC-PRIVATE) LIMITED.
              </p>
            </div>
          </FadeIn>
        </section>

        <ContactCta body="Feedback, a partnership, or something you want built. Tell us what you are working on. We read everything and reply fast." />
      </main>
      <Footer />
    </div>
  )
}
