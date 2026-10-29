import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { EngineerBehind } from "@/components/engineer-behind"
import { EngineeringJourney } from "@/components/engineering-journey"
import { Capabilities } from "@/components/capabilities"
import { Systems } from "@/components/systems"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      {/* Soft top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-2xl -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl"
      />

      <Navbar />
      <Hero />
      <EngineerBehind />
      <EngineeringJourney />
      <Systems />
      <Capabilities />
      <Contact />
    </main>
  )
}
