"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
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
  const [active, setActive] = useState("#home")
  const reduceMotion = useReducedMotion()
  const headerRef = useRef<HTMLElement>(null)
  const homeLinkRef = useRef<HTMLAnchorElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const mobileNavigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (section): section is HTMLElement => section instanceof HTMLElement,
    )
    const header = headerRef.current
    if (!header) return

    const root = document.documentElement
    let clearance = 96
    let scrollFrame = 0

    const updateActive = () => {
      let current = "#home"
      for (const section of sections.slice(1)) {
        const contentTop =
          section.getBoundingClientRect().top + parseFloat(getComputedStyle(section).paddingTop)
        if (contentTop <= clearance + 1) current = `#${section.id}`
      }
      setActive(current)
    }

    const updateClearance = () => {
      // Height excludes the header's entry translation; top is its fixed inset.
      clearance = header.offsetHeight + parseFloat(getComputedStyle(header).top) + 16
      root.style.setProperty("--navbar-clearance", `${clearance}px`)
      updateActive()
    }

    const onScroll = () => {
      if (scrollFrame) return
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0
        updateActive()
      })
    }

    updateClearance()
    const observer = new ResizeObserver(updateClearance)
    observer.observe(header)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    window.addEventListener("hashchange", onScroll)

    // Reconcile an initial deep link after measuring the responsive navbar.
    // Later clicks and history navigation use the browser's native hash scrolling.
    const initialFrame = requestAnimationFrame(() => {
      const target = sections.find((section) => `#${section.id}` === window.location.hash)
      target?.scrollIntoView({ block: "start", behavior: "instant" })
      updateActive()
    })

    return () => {
      observer.disconnect()
      cancelAnimationFrame(initialFrame)
      cancelAnimationFrame(scrollFrame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("hashchange", onScroll)
      root.style.removeProperty("--navbar-clearance")
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const desktopMedia = window.matchMedia("(min-width: 48rem)")
    const closeOnDesktop = () => {
      if (!desktopMedia.matches) return

      const focused = document.activeElement
      const restoreFocus =
        focused === document.body ||
        focused === menuToggleRef.current ||
        mobileNavigationRef.current?.contains(focused)

      setOpen(false)
      if (restoreFocus) homeLinkRef.current?.focus({ preventScroll: true })
    }

    if (desktopMedia.matches) {
      closeOnDesktop()
      return
    }

    const firstFocusable = mobileNavigationRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    firstFocusable?.focus()

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        menuToggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", closeOnEscape)
    desktopMedia.addEventListener("change", closeOnDesktop)
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      desktopMedia.removeEventListener("change", closeOnDesktop)
    }
  }, [open])

  return (
    <motion.header
      ref={headerRef}
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-2xl border border-border bg-background/60 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl md:px-6"
      >
        {/* Logo */}
        <a ref={homeLinkRef} href="#home" className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="Ruthvik Varma Dendukuri, home">
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
            Ruthvik Varma Dendukuri
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                aria-current={active === link.href ? "location" : undefined}
                className={`group relative rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
                <span className={`absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100 ${active === link.href ? "scale-x-100" : "scale-x-0"}`} />
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
                "group hidden rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10 focus-visible:ring-2 focus-visible:ring-accent sm:inline-flex",
            })}
          >
            <FileText className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            Resume
          </Link>
          <button
            id="mobile-menu-toggle"
            ref={menuToggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          id="mobile-navigation"
          ref={mobileNavigationRef}
          aria-label="Mobile"
          onKeyDown={(event) => {
            if (event.key !== "Tab") return

            const focusable = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])',
              ),
            )
            const first = focusable[0]
            const last = focusable[focusable.length - 1]

            if (!first || !last) return
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault()
              last.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault()
              first.focus()
            }
          }}
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-4xl rounded-2xl border border-border bg-background/90 p-3 shadow-xl backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault()
                    setOpen(false)
                    setActive(link.href)
                    window.location.hash = link.href
                    requestAnimationFrame(() => menuToggleRef.current?.focus())
                  }}
                  aria-current={active === link.href ? "location" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${active === link.href ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={RESUME_HREF}
            download
            onClick={() => {
              setOpen(false)
              menuToggleRef.current?.focus()
            }}
            className={buttonVariants({
              size: "sm",
              className: "mt-2 w-full rounded-xl font-medium",
            })}
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </Link>
        </motion.nav>
      )}
    </motion.header>
  )
}
