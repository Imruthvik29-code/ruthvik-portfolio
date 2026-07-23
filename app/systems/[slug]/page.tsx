import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const SYSTEMS: Record<string, { name: string; domain: string }> = {
  "attention-monitoring": { name: "Attention Monitoring System", domain: "Computer Vision" },
  "strabismus-detection": { name: "Strabismus Detection", domain: "Medical AI" },
  "microhabit-deviation": { name: "Microhabit Deviation System", domain: "Intelligent Systems" },
  "image-colorization": { name: "Image Colorization", domain: "Deep Learning" },
  "intelligent-search-engine": { name: "Intelligent Search Engine", domain: "NLP" },
  "ai-interview-assistant": { name: "AI Interview Assistant", domain: "Generative AI" },
}

export function generateStaticParams() {
  return Object.keys(SYSTEMS).map((slug) => ({ slug }))
}

export default async function SystemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const system = SYSTEMS[slug]

  if (!system) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-2xl -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl"
      />

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-28">
        <Link
          href="/#systems"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to Systems
        </Link>

        <span className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {system.domain}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {system.name}
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          The complete engineering case study for this system is coming soon — including the
          problem framing, design constraints, architecture, and outcomes.
        </p>
      </section>
    </main>
  )
}
