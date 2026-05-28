import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyCardProps {
  title: string
  description: string
  challenge: string
  result: string
  industry: string
  technologies: string[]
  href?: string
}

export function CaseStudyCard({
  title,
  description,
  challenge,
  result,
  industry,
  technologies,
  href = "/contact",
}: CaseStudyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 md:p-8 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Industry Tag */}
      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
        {industry}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground mb-6">
        {description}
      </p>

      {/* Challenge & Result */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Challenge
          </p>
          <p className="text-sm text-foreground">
            {challenge}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Result
          </p>
          <p className="text-sm text-foreground font-medium text-primary">
            {result}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6 pb-6 border-b border-border/50">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Technologies Used
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs bg-surface/50/50 text-muted-foreground border border-border/30/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors group/link"
      >
        View Case Study
        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
