"use client"

import Image from "next/image"
import { motion, type Variants } from "motion/react"

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
			"Data Science & AI",
			"ICFAI Foundation for Higher Education",
		],
	},
	{
		label: "Focus Areas",
		items: [
			"Computer Vision",
			"Machine Learning",
			"Deep Learning",
			"Generative AI",
		],
	},
	{
		label: "Currently",
		items: [
			"Final Year Student",
			"Building AI Systems",
			"Open to Full-Time Opportunities",
		],
	},
]

export function EngineerBehind() {
	return (
		<section
			id="engineer-behind"
			className="relative mx-auto max-w-6xl px-6 py-10 lg:py-12"
		>
			<div className="grid grid-cols-2 gap-8">
				{/* Left */}
				<motion.div
					variants={container}
					initial="hidden"
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
									alt="Ruthvik Varma"
									fill
									className="object-cover"
									priority
								/>
							</div>

							<div className="mt-4">
								<h3 className="text-[1.9rem] font-semibold tracking-tight text-foreground">
									Ruthvik Varma
								</h3>

								<p className="mt-1 text-base text-muted-foreground">
									Final-Year B.Tech Student
								</p>

								<p className="text-sm text-muted-foreground">
									Data Science & AI
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Right */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="flex flex-col justify-center"
				>
					<motion.span
						variants={item}
						className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
					>
						<span className="size-1.5 rounded-full bg-accent" />
						Engineer Profile
					</motion.span>

					<motion.h2
						variants={item}
						className="mt-2 text-4xl font-semibold tracking-tight text-foreground lg:text-[2.75rem]"
					>
						Engineer Behind the Systems
					</motion.h2>

					<motion.p
						variants={item}
						className="mt-2 max-w-xl text-base leading-7 text-muted-foreground"
					>
						I enjoy solving real-world problems where AI creates measurable
						impact by turning ideas into reliable, maintainable systems.
					</motion.p>

					<motion.p
						variants={item}
						className="mt-2 max-w-xl text-base leading-7 text-muted-foreground"
					>
						My interests center around computer vision, machine learning,
						and intelligent systems with a strong focus on practical
						engineering.
					</motion.p>

					<motion.dl
						variants={container}
						className="mt-4 grid grid-cols-3 gap-5"
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