"use client"

import { useEffect, useRef, type ReactNode } from "react"
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import { cn } from "@/lib/utils"

const EASE = [0.32, 0.72, 0, 1] as const

/** Fade-up as the element scrolls into view. Once only. */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Counts "130.8K" / "13" / "1+" up from zero when scrolled into view.
 * Server HTML holds the final value, so it reads correctly without JS.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()

  useEffect(() => {
    const match = value.match(/^([\d.]+)(.*)$/)
    const el = ref.current
    if (!match || !inView || reduce || !el) return

    const decimals = match[1].split(".")[1]?.length ?? 0
    const controls = animate(0, Number.parseFloat(match[1]), {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals) + match[2]
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {value}
    </span>
  )
}

/**
 * Black top-arc block whose background widens to full bleed as it scrolls in,
 * as if rising from below the hero. Only the background scales, never the text.
 */
export function ArcSection({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.3"] })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <section ref={ref} className={cn("relative text-paper", className)}>
      <motion.div
        aria-hidden
        style={reduce ? undefined : { scaleX }}
        className="absolute inset-0 rounded-t-[40px] bg-ink will-change-transform lg:rounded-t-[64px]"
      />
      <div className="relative">{children}</div>
    </section>
  )
}
