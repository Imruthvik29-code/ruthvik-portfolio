const LAYERS = [
  { number: "01", label: "Foundation", areas: ["Python", "Data"] },
  { number: "02", label: "Methods", areas: ["Machine Learning", "Deep Learning"] },
  { number: "03", label: "Applications", areas: ["Computer Vision", "Applied AI"] },
]

export function AiVisualization() {
  return (
    <figure className="relative min-[360px]:aspect-[3/4] w-full overflow-hidden rounded-3xl border border-border bg-card/40 shadow-2xl shadow-black/20 sm:aspect-square">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 85%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between gap-4 p-5 sm:gap-5 sm:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            Working areas / 01—03
          </p>
          <p className="mt-3 max-w-xs text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl">
            From code to applied AI.
          </p>
        </div>

        <ol className="relative space-y-4 border-l border-accent/25 pl-5 sm:space-y-5 sm:pl-6">
          {LAYERS.map((layer) => (
            <li key={layer.number} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.52rem] top-1.5 size-2 rounded-full border border-accent bg-background sm:-left-[1.77rem]"
              />
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-muted-foreground">{layer.number}</span>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {layer.label}
                </p>
              </div>
              <p className="mt-1.5 text-sm font-medium leading-5 text-foreground sm:text-base">
                {layer.areas.join("  ·  ")}
              </p>
            </li>
          ))}
        </ol>

        <figcaption className="border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          The tools, methods, and areas I work across
        </figcaption>
      </div>
    </figure>
  )
}
