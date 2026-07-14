"use client"

import Link from "next/link"
import { motion, type Variants } from "motion/react"
import { ArrowUpRight } from "lucide-react"

type System = {
  name: string
  domain: string
  href: string
}

const SYSTEMS: System[] = [
  {
    name: "Attention Monitoring System",
    domain: "Computer Vision",
    href: "/systems/attention-monitoring",
  },
  {
    name: "Strabismus Detection",
    domain: "Medical AI",
    href: "/systems/strabismus-detection",
  },
  {
    name: "Microhabit Deviation System",
    domain: "Intelligent Systems",
    href: "/systems/microhabit-deviation",
  },
  {
    name: "Image Colorization",
    domain: "Deep Learning",
    href: "/systems/image-colorization",
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Systems() {
  return (
    <section id="systems" className="relative mx-auto max-w-6xl px-6 py-28 lg:py-36">
      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Selected Work
        </motion.span>

        <motion.h2
          variants={item}
          className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Systems
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A curated collection of intelligent systems exploring computer vision, machine
          learning, deep learning, and AI-driven applications.
        </motion.p>
      </motion.div>

      {/* Editorial list */}
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 border-t border-border"
      >
        {SYSTEMS.map((system) => (
          <motion.li key={system.href} variants={item} className="border-b border-border">
            <Link
              href={system.href}
              className="group flex items-center justify-between gap-6 rounded-lg px-3 py-8 transition-colors duration-300 hover:bg-secondary/40 sm:px-5 sm:py-10"
            >
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-medium tracking-tight text-foreground/90 transition-colors duration-300 group-hover:text-foreground sm:text-3xl lg:text-4xl">
                  {system.name}
                </span>
                <span className="text-sm text-muted-foreground">{system.domain}</span>
              </div>

              <ArrowUpRight
                className="size-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground sm:size-7"
                aria-hidden="true"
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
