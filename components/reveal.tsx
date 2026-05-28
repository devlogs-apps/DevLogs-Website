"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Animate immediately on mount (hero) instead of on scroll into view. */
  immediate?: boolean
  as?: "div" | "section" | "li" | "span"
}

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const animateProps = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...animateProps}
    >
      {children}
    </MotionTag>
  )
}
