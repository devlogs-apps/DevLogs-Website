interface StatsProps {
  stats: Array<{
    value: string
    label: string
    suffix?: string
  }>
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 md:p-8 text-center hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />

          {/* Value */}
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            {stat.value}
            {stat.suffix && <span className="text-2xl md:text-3xl">{stat.suffix}</span>}
          </div>

          {/* Label */}
          <p className="text-sm md:text-base text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
