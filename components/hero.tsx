"use client"

import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "motion/react"
import { ArrowUpRight, Download } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { AiVisualization } from "@/components/ai-visualization"
import { RESUME_HREF } from "@/lib/resume"

const FOCUS_AREAS = [
  "AI & Machine Learning",
  "Data Science",
  "Computer Vision",
  "Software Development",
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl scroll-mt-24 flex-col items-center gap-9 px-6 pt-28 pb-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:pt-24 lg:pb-12"
    >
      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        className="w-full"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Open to opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-5 max-w-2xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]"
        >
          Hi, I&apos;m Ruthvik.
          <span className="block">
            I work in{" "}
            <span className="text-accent">
              <span className="whitespace-nowrap">AI, data</span>{" "}
              <span className="whitespace-nowrap">&amp; software.</span>
            </span>
          </span>
        </motion.h1>

        <motion.ul variants={item} className="mt-5 flex flex-wrap gap-2">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>
              <span className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                {area}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I&apos;m a recent graduate with internship experience, drawn to practical
          problems and work that connects ideas to real needs.
        </motion.p>

        <motion.div variants={item} className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#projects"
            className={buttonVariants({
              size: "lg",
              className:
                "group rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10 focus-visible:ring-2 focus-visible:ring-accent",
            })}
          >
            View projects
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href={RESUME_HREF}
            download
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "group rounded-xl border-border bg-transparent font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-accent",
            })}
          >
            <Download className="size-4" />
            Download resume
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md lg:max-w-none"
      >
        <AiVisualization />
      </motion.div>
    </section>
  )
}
