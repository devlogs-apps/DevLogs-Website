import Link from "next/link"
import { SITE } from "@/lib/site"

export function ContactCta({ body }: { body: string }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 lg:py-24">
      <div className="grid gap-10 rounded-[48px] bg-paper p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:rounded-[64px] lg:p-16">
        <h2 className="display display-lg">
          Got an idea?
          <br />
          We ship fast.
        </h2>
        <div>
          <p className="max-w-md text-lg leading-[1.33] text-slate">{body}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="rounded-lg bg-ink px-6 py-4 font-medium text-paper transition-transform duration-300 ease-heavy active:scale-[0.98]"
            >
              Get in touch
            </Link>
            <a href={SITE.emailHref} className="bg-voltage px-1 font-medium">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
