import { SITE } from "@/lib/site"

export function EmptyApps({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-lg rounded-[32px] bg-paper p-10 text-ink ${className}`}>
      <h3 className="heading text-[28px]">Google Play isn&apos;t responding</h3>
      <p className="mt-3 leading-[1.25] text-slate">
        The catalogue couldn&apos;t load just now. Every app we&apos;ve shipped is also
        listed on our Play Store page.
      </p>
      <a
        href={SITE.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex rounded-lg bg-ink px-6 py-3 text-[15px] font-medium text-paper"
      >
        Open Play Store
      </a>
    </div>
  )
}
