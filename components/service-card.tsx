import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  href?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  href = "/contact",
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 md:p-8 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground mb-4">
        {description}
      </p>

      {/* Features list */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors group/link"
      >
        Learn More
        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
