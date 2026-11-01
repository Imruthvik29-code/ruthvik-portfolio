const STEPS = [
  { number: "01", label: "Prepare", detail: "Start with the data" },
  { number: "02", label: "Evaluate", detail: "Test and refine the approach" },
  { number: "03", label: "Apply", detail: "Build something useful" },
]

export function AiVisualization() {
  return (
    <figure aria-labelledby="ai-workflow-title" className="relative w-full overflow-hidden rounded-3xl border border-border bg-card/40 shadow-2xl shadow-black/20">
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

      <div className="relative flex min-h-[320px] flex-col justify-between gap-8 p-5 sm:min-h-[360px] sm:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            Process / 01—03
          </p>
          <p id="ai-workflow-title" className="mt-3 text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl">
            From code to applied AI.
          </p>
        </div>

        <ol className="relative space-y-4 border-l border-accent/25 pl-5 sm:space-y-5 sm:pl-6">
          {STEPS.map((step) => (
            <li key={step.number} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.52rem] top-1.5 size-2 rounded-full border border-accent bg-background sm:-left-[1.77rem]"
              />
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-muted-foreground">{step.number}</span>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {step.label}
                </p>
              </div>
              <p className="mt-1.5 text-sm font-medium leading-5 text-foreground sm:text-base">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}
