import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { RiseLines } from "@/components/rise-lines"
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

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-6 sm:px-6 lg:pt-10">
          <RiseLines
            lines={["Tell us what", "you are building."]}
            className="display display-xl"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
            <div className="space-y-8">
              <p className="max-w-sm text-lg leading-[1.33] text-slate">
                Feedback on an app, a partnership idea, or a support question. This
                reaches a real person, and we read everything.
              </p>

              <dl className="space-y-6">
                <div>
                  <dt className="mono-label text-slate">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={SITE.emailHref}
                      className="heading bg-voltage px-1 text-[28px] normal-case"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mono-label text-slate">Phone</dt>
                  <dd className="mt-1">
                    <a href={SITE.phoneHref} className="heading text-[28px] hover:underline">
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mono-label text-slate">Studio</dt>
                  <dd className="mt-1 leading-[1.25]">
                    Shop No 21, New Ghalla Mandi
                    <br />
                    Bhakkar 30000, Pakistan
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[32px] bg-paper p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
