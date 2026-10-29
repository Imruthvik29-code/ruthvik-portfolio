"use client"

import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "motion/react"

const container: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.05,
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

const INFO_GROUPS = [
	{
		label: "Education",
		items: [
			"B.Tech",
		"Data Science and AI",
			"ICFAI Foundation for Higher Education",
		"Graduated July 2026",
	],
	},
	{
		label: "Areas of experience",
		items: [
			"AI & Data Science",
			"Computer Vision",
			"Data Analytics",
			"Software Development",
		],
	},
	{
		label: "Interested in",
		items: [
			"Building useful systems",
			"Working across disciplines",
		],
	},
]

export function EngineerBehind() {
	const reduceMotion = useReducedMotion()

	return (
		<section
			id="engineer-behind"
			className="relative mx-auto max-w-6xl px-6 py-12 lg:py-14"
		>
			<div className="grid gap-8 lg:grid-cols-2">
				{/* Left */}
				<motion.div
					variants={container}
					initial={reduceMotion ? false : "hidden"}
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.div
						variants={item}
						className="overflow-hidden rounded-[28px] border border-border bg-secondary/20 p-2.5"
					>
						<div className="rounded-[22px] border border-border/60 bg-background/30 px-5 py-4 text-center">
							<div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-border/60">
								<Image
									src="/Portfolio pic.jpeg"
									alt="Portrait of Ruthvik Varma Dendukuri"
									fill
									className="object-cover"
								/>
							</div>

							<div className="mt-4">
								<p className="text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[1.9rem]">
								Ruthvik Varma Dendukuri
								</p>

								<p className="mt-1 text-base text-muted-foreground">
								B.Tech in Data Science and AI
								</p>

								<p className="text-sm text-muted-foreground">
								Graduated July 2026
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Right */}
				<motion.div
					variants={container}
					initial={reduceMotion ? false : "hidden"}
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="flex flex-col justify-center"
				>
					<motion.span
						variants={item}
						className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
					>
						<span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
						About
					</motion.span>

					<motion.h2
						variants={item}
						className="mt-2 text-4xl font-semibold tracking-tight text-foreground lg:text-[2.75rem]"
					>
						A bit about me
					</motion.h2>

					<motion.p
						variants={item}
						className="mt-2 max-w-xl text-base leading-7 text-muted-foreground"
					>
						I graduated with a B.Tech in Data Science and AI from ICFAI
						Foundation for Higher Education in July 2026. I enjoy the
						practical side of technical work: preparing data, testing an
						approach, and learning from what does not work.
					</motion.p>

					<motion.p
						variants={item}
						className="mt-2 max-w-xl text-base leading-7 text-muted-foreground"
					>
						My experience and interests span AI/ML, computer vision, data
						analytics, and software development. I want to keep building
						systems that can be used and improved outside a notebook.
					</motion.p>

					<motion.dl
						variants={container}
						className="mt-4 grid gap-5 sm:grid-cols-3"
					>
						{INFO_GROUPS.map((group) => (
							<motion.div
								key={group.label}
								variants={item}
							>
								<dt className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
									{group.label}
								</dt>

								<dd className="space-y-1 text-[15px] leading-7 text-foreground/90">
									{group.items.map((text) => (
										<div key={text}>{text}</div>
									))}
								</dd>
							</motion.div>
						))}
					</motion.dl>
				</motion.div>
			</div>
		</section>
	)
}
