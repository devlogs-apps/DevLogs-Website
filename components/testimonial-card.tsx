import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating?: number
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 md:p-8 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
      {/* Quote mark background */}
      <div className="absolute -right-8 -top-8 text-primary/5 text-9xl font-bold">"</div>

      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-base md:text-lg text-foreground font-medium mb-6 leading-relaxed">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="relative z-10">
        <p className="text-sm font-semibold text-foreground">
          {author}
        </p>
        <p className="text-xs text-muted-foreground">
          {role} at {company}
        </p>
      </div>
    </div>
  )
}
