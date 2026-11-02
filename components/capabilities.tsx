"use client"

import { motion, useReducedMotion, type Variants } from "motion/react"

type Capability = {
  title: string
  description: string
  tools: string[]
}

const CAPABILITIES: Capability[] = [
  {
    title: "Machine Learning",
    description: "I work with feature engineering, model training, and evaluation as part of broader data and AI workflows.",
    tools: ["Scikit-learn", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Deep Learning",
    description: "I work with CNNs and transfer learning for image-based tasks.",
    tools: ["TensorFlow", "PyTorch", "CNNs", "Transfer Learning"],
  },
  {
    title: "Computer Vision",
    description: "My vision work covers image processing, detection, and facial landmarks.",
    tools: ["OpenCV", "Image Processing", "Object Detection", "Facial Landmarks"],
  },
  {
    title: "Data & Software",
    description: "I use Python and backend tools to work with data and connect technical solutions to applications.",
    tools: ["Python", "Django", "REST APIs", "SQL"],
  },
]

const reveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function Capabilities() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="capabilities"
      className="section-anchor relative mx-auto max-w-6xl px-6"
    >
      <motion.div
        variants={reveal}
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Capabilities
        </span>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground lg:text-[2.75rem]">
          Areas I work across
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          A practical mix of methods and tools across AI, data, and software development.
        </p>
      </motion.div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-secondary/15">
        {CAPABILITIES.map((capability, index) => (
          <div
            key={capability.title}
            className={`grid gap-3 p-5 sm:p-6 lg:grid-cols-[220px_1fr] lg:gap-8 ${
              index > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="pt-1 font-mono text-xs text-accent">0{index + 1}</span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {capability.title}
              </h3>
            </div>
            <div>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                {capability.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${capability.title} tools and methods`}>
                {capability.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
