"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { Menu, X, FileText } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { RESUME_HREF } from "@/lib/resume"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-2xl border border-border bg-background/60 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl md:px-6"
      >
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Ruthvik Varma, home">
          <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-secondary/40 transition-colors duration-300 group-hover:border-foreground/30">
            <svg
              viewBox="0 0 24 24"
              className="size-4 text-foreground"
              fill="none"
              aria-hidden="true"
            >
              {/* Minimal RV monogram */}
              <path
                d="M3 21V4h6.2a4 4 0 0 1 0 8H3m6 0 5 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 4l3.5 10L21 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.55"
              />
            </svg>
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground sm:block">
            Ruthvik Varma
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-foreground/50 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href={RESUME_HREF}
            download
            className={buttonVariants({
              size: "sm",
              className:
                "group hidden rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10 sm:inline-flex",
            })}
          >
            <FileText className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            Resume
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-4xl rounded-2xl border border-border bg-background/90 p-3 shadow-xl backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={RESUME_HREF}
            download
            onClick={() => setOpen(false)}
            className={buttonVariants({
              size: "sm",
              className: "mt-2 w-full rounded-xl font-medium",
            })}
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}
