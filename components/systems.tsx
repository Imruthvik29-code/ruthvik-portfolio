"use client"

import Link from "next/link"
import { motion, type Variants } from "motion/react"
import { ArrowUpRight } from "lucide-react"

type System = {
	name: string
	domain: string
	href: string
}

const SYSTEMS: System[] = [
	{
		name: "Attention Monitoring System",
		domain: "Computer Vision",
		href: "/systems/attention-monitoring",
	},
	{
		name: "Strabismus Detection",
		domain: "Medical AI",
		href: "/systems/strabismus-detection",
	},
	{
		name: "Microhabit Deviation System",
		domain: "Intelligent Systems",
		href: "/systems/microhabit-deviation",
	},
	{
		name: "Image Colorization",
		domain: "Deep Learning",
		href: "/systems/image-colorization",
	},
	{
		name: "Intelligent Search Engine",
		domain: "NLP",
		href: "/systems/intelligent-search-engine",
	},
	{
		name: "AI Interview Assistant",
		domain: "Generative AI",
		href: "/systems/ai-interview-assistant",
	},
]

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

export function Systems() {
	return (
		<section
			id="projects"
			className="relative mx-auto max-w-6xl px-6 py-10 lg:py-14"
		>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-100px" }}
			>
				<motion.span
					variants={item}
					className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
				>
					<span className="size-1.5 rounded-full bg-accent" />
					Selected Work
				</motion.span>

				<motion.h2
					variants={item}
					className="mt-3 text-4xl font-semibold tracking-tight lg:text-[2.75rem]"
				>
					Projects
				</motion.h2>

				<motion.p
					variants={item}
					className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground"
				>
					Selected AI systems across computer vision, machine learning,
					and generative AI.
				</motion.p>
			</motion.div>

			<motion.ul
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-80px" }}
				className="mt-10 grid gap-6 lg:grid-cols-2"
			>
				{SYSTEMS.map((system) => (
					<motion.li
						key={system.href}
						variants={item}
					>
						<Link
							href={system.href}
							className="
								group
								flex
								h-[148px]
								flex-col
								justify-between
								rounded-2xl
								border
								border-border/70
								bg-secondary/20
								p-6
								transition-all
								duration-300
								ease-out
								hover:-translate-y-1
								hover:border-accent/40
								hover:bg-secondary/35
								hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]
							"
						>
							<h3
								className="
									text-[1.55rem]
									font-semibold
									leading-[1.2]
									tracking-tight
									text-foreground
								"
							>
								{system.name}
							</h3>

							<div className="flex items-center justify-between">
								<span
									className="
										inline-flex
										items-center
										rounded-full
										border
										border-border/70
										bg-background/50
										px-3
										py-1
										text-[11px]
										font-medium
										text-muted-foreground
									"
								>
									{system.domain}
								</span>

								<div
									className="
										flex
										items-center
										gap-2
										text-sm
										font-medium
										text-muted-foreground
										transition-colors
										group-hover:text-foreground
									"
								>
									<span>Explore</span>

									<ArrowUpRight
										className="
											size-4
											transition-transform
											duration-300
											group-hover:translate-x-0.5
											group-hover:-translate-y-0.5
										"
									/>
								</div>
							</div>
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</section>
	)
}