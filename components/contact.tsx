"use client"

import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "motion/react"
import { ArrowUpRight, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RESUME_HREF } from "@/lib/resume"

const container: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.06,
		},
	},
}

const item: Variants = {
	hidden: { opacity: 0, y: 16 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.65,
			ease: [0.22, 1, 0.36, 1],
		},
	},
}

type ContactLink = {
	label: string
	value: string
	href: string
	icon: React.ReactNode
	external?: boolean
}

const CONTACT_LINKS: ContactLink[] = [
	{
		label: "Email",
		value: "ruthvikvarma24@gmail.com",
		href: "mailto:ruthvikvarma24@gmail.com",
		icon: <Mail className="size-4" />,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/ruthvik-varma-290405d1818/",
		href: "https://www.linkedin.com/in/ruthvik-varma-290405d1818/",
		icon: <FaLinkedin className="size-4" />,
		external: true,
	},
	{
		label: "GitHub",
		value: "github.com/Imruthvik29-code",
		href: "https://github.com/Imruthvik29-code",
		icon: <FaGithub className="size-4" />,
		external: true,
	},
	{
		label: "Resume",
		value: "Download PDF",
		href: RESUME_HREF,
		icon: <Download className="size-4" />,
	},
]

export function Contact() {
	const reduceMotion = useReducedMotion()

	return (
		<section
			id="contact"
			className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-12 lg:py-16"
		>
			<motion.div
				variants={container}
				initial={reduceMotion ? false : "hidden"}
				whileInView="show"
				viewport={{ once: true, margin: "-100px" }}
			>
				<motion.span
					variants={item}
					className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
				>
					<span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
					CONTACT
				</motion.span>

				<motion.h2
					variants={item}
					className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
				>
					Let&apos;s talk
				</motion.h2>

				<motion.p
					variants={item}
					className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
				>
					I&apos;m interested in roles and collaborations across AI/ML, data science, data analytics, computer vision, and software development. Let&apos;s talk if our interests align.
				</motion.p>

				<motion.div
					variants={container}
					className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.95fr]"
				>
					{/* Left */}
					<motion.div variants={item}>
						<p className="max-w-sm text-lg leading-7 text-muted-foreground">
							Email is the easiest way to reach me. You can also find me on GitHub and LinkedIn, or download my resume here.
						</p>
					</motion.div>

					{/* Right */}
					<motion.div
						variants={container}
						className="space-y-3"
					>
						{CONTACT_LINKS.map((link) => (
							<motion.div key={link.label} variants={item}>
								<Link
									href={link.href}
									target={link.external ? "_blank" : undefined}
									rel={
										link.external
											? "noopener noreferrer"
											: undefined
									}
									className="group flex items-center justify-between gap-3 rounded-xl border border-border px-5 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
								>
									<div className="flex min-w-0 items-center gap-3">
										<div className="shrink-0 text-muted-foreground">
											{link.icon}
										</div>

										<div className="min-w-0">
											<p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
												{link.label}
											</p>

											<p className="mt-0.5 break-words text-sm text-foreground">
												{link.value}
											</p>
										</div>
									</div>

									<ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Link>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				<motion.p
					variants={item}
					className="mt-6 text-center text-sm text-muted-foreground"
				>
					Ruthvik Varma Dendukuri · Data Science and AI
				</motion.p>
			</motion.div>
		</section>
	)
}
