import type { CSSProperties } from "react"

/**
 * Headline whose lines rise out of a mask on load. The page's one entrance
 * moment. Pure CSS so the text is visible without waiting for JS.
 */
export function RiseLines({
  lines,
  className,
  as: Tag = "h1",
}: {
  lines: string[]
  className?: string
  as?: "h1" | "h2"
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="-my-[0.1em] block overflow-hidden py-[0.1em]">
          <span className="rise block" style={{ "--i": i } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
