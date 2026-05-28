import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DevLogs. Feedback, ideas, partnerships, or support for any of our Android apps.",
  openGraph: {
    title: "Contact · DevLogs",
    description: "Drop the DevLogs studio a line.",
  },
}

const directs = [
  { icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-grain relative overflow-hidden pb-24 pt-32 sm:pt-40">
          <div className="aurora opacity-70" aria-hidden />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal immediate>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal immediate delay={0.08}>
              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[5rem] lg:leading-[0.95]">
                Tell us what you are{" "}
                <span className="text-brand italic">building.</span>
              </h1>
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
              {/* Direct contact */}
              <Reveal immediate delay={0.16} className="space-y-8">
                <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
                  Feedback on an app, a partnership idea, or a support question. This
                  reaches a real person, and we read everything.
                </p>

                <div className="space-y-3">
                  {directs.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group glass glass-hover flex items-center gap-4 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="block text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    )
                  })}
                  <div className="glass flex items-start gap-4 rounded-2xl px-5 py-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Studio
                      </span>
                      <span className="block text-sm leading-relaxed text-foreground">
                        Shop No 21, New Ghalla Mandi
                        <br />
                        Bhakkar 30000, Pakistan
                      </span>
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Form */}
              <Reveal immediate delay={0.24}>
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
