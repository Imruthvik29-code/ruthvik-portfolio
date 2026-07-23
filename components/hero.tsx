"use client"

import Link from "next/link"
import { motion, type Variants } from "motion/react"
import { ArrowUpRight, Download } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { AiVisualization } from "@/components/ai-visualization"
import { RESUME_HREF } from "@/lib/resume"

const FOCUS_AREAS = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Generative AI",
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center gap-7 px-6 pt-20 pb-4 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-9 lg:pt-20 lg:pb-6"
    >
      {/* Left: Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span
            className="size-1.5 rounded-full bg-accent"
            aria-hidden="true"
          />
          Available for opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-3 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Building Intelligent Systems
        </motion.h1>

        <motion.ul
          variants={item}
          className="mt-3 flex flex-wrap gap-2"
        >
          {FOCUS_AREAS.map((area) => (
            <li key={area}>
              <span className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-accent/40 hover:text-foreground">
                {area}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Hi, I&apos;m Ruthvik Varma — a Data Science &amp; AI undergraduate
          passionate about transforming machine learning, deep learning, and
          generative AI into practical intelligent systems that solve real-world
          problems.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#projects"
            className={buttonVariants({
              size: "lg",
              className:
                "group rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10",
            })}
          >
            Explore Projects
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href={RESUME_HREF}
            download
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "group rounded-xl border-border bg-transparent font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary",
            })}
          >
            <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            Resume
          </Link>
        </motion.div>
      </motion.div>

      {/* Right: Visualization */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full max-w-md lg:max-w-none"
      >
        <AiVisualization />
      </motion.div>
    </section>
  )
}