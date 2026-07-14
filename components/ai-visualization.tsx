"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  baseR: number
}

/**
 * Interactive AI network visualization.
 * Renders a lightweight node graph on canvas: nodes drift smoothly, connect
 * with thin lines whose opacity fades with distance, and gently react to the
 * cursor. Meant to evoke information flow, not decoration.
 */
export function AiVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const NODE_COUNT = 20
    const CONNECT_DIST = 0.34 // fraction of size
    const nodes: Node[] = []

    // Pointer in normalized (0..1) space; -1 means "not present"
    const pointer = { x: -1, y: -1 }

    const resolveColor = (name: string) => {
      const raw = getComputedStyle(canvas).getPropertyValue(name).trim()
      return raw || "#8aa"
    }
    let accent = resolveColor("--color-accent") || resolveColor("--accent")
    let fg = resolveColor("--color-muted-foreground") || resolveColor("--muted-foreground")

    const seed = () => {
      nodes.length = 0
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random(),
          y: Math.random(),
          vx: (Math.random() - 0.5) * 0.00035,
          vy: (Math.random() - 0.5) * 0.00035,
          baseR: 1.2 + Math.random() * 1.6,
        })
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      accent = resolveColor("--color-accent") || resolveColor("--accent")
      fg = resolveColor("--color-muted-foreground") || resolveColor("--muted-foreground")
    }

    seed()
    resize()

    const size = () => Math.min(width, height)

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      const s = size()
      const connect = CONNECT_DIST

      // update positions
      for (const n of nodes) {
        if (!prefersReduced) {
          n.x += n.vx
          n.y += n.vy
        }
        // gentle bounce off edges
        if (n.x < 0.02 || n.x > 0.98) n.vx *= -1
        if (n.y < 0.02 || n.y > 0.98) n.vy *= -1
        n.x = Math.max(0.02, Math.min(0.98, n.x))
        n.y = Math.max(0.02, Math.min(0.98, n.y))

        // cursor influence: nudge nearby nodes slightly toward pointer
        if (pointer.x >= 0) {
          const dx = pointer.x - n.x
          const dy = pointer.y - n.y
          const d = Math.hypot(dx, dy)
          if (d < 0.22 && d > 0.001) {
            const f = (0.22 - d) * 0.0016
            n.x += dx * f
            n.y += dy * f
          }
        }
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < connect) {
            const base = 1 - d / connect
            // subtle shimmer on opacity
            const shimmer = prefersReduced ? 1 : 0.75 + 0.25 * Math.sin(performance.now() / 900 + (i + j))
            const alpha = base * 0.5 * shimmer
            ctx.strokeStyle = fg
            ctx.globalAlpha = alpha
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x * width, a.y * height)
            ctx.lineTo(b.x * width, b.y * height)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      // draw nodes
      for (const n of nodes) {
        const px = n.x * width
        const py = n.y * height
        let r = (n.baseR / 100) * s

        // enlarge near cursor
        let near = 0
        if (pointer.x >= 0) {
          const d = Math.hypot(pointer.x - n.x, pointer.y - n.y)
          near = Math.max(0, 1 - d / 0.18)
        }
        r += near * 0.02 * s

        // soft halo
        ctx.beginPath()
        ctx.fillStyle = accent
        ctx.globalAlpha = 0.14 + near * 0.2
        ctx.arc(px, py, r * 2.6, 0, Math.PI * 2)
        ctx.fill()

        // core
        ctx.beginPath()
        ctx.fillStyle = accent
        ctx.globalAlpha = 0.7 + near * 0.3
        ctx.arc(px, py, r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = (e.clientX - rect.left) / rect.width
      pointer.y = (e.clientY - rect.top) / rect.height
    }
    const onLeave = () => {
      pointer.x = -1
      pointer.y = -1
    }

    canvas.addEventListener("pointermove", onMove)
    canvas.addEventListener("pointerleave", onLeave)
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerleave", onLeave)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-card/40 shadow-2xl shadow-black/30 backdrop-blur-sm">
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 35%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 80%)",
        }}
      />

      {/* Interactive node graph */}
      <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden="true" />

      {/* Caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Information flow
        </span>
        <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="size-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          Live
        </span>
      </div>
    </div>
  )
}
