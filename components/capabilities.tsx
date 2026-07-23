"use client"

import { motion, type Variants } from "motion/react"

type Capability = {
	title: string
	description: string
	items: string[]
}

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

const CAPABILITIES: Capability[] = [
	{
		title: "Computer Vision",
		description:
			"Experience building attention monitoring, facial analysis, and image understanding systems.",
		items: [
			"OpenCV",
			"Object Detection",
			"Image Processing",
			"Facial Landmarks",
		],
	},
	{
		title: "Machine Learning",
		description:
			"Training predictive models through feature engineering, evaluation, and experimentation.",
		items: [
			"Scikit-learn",
			"Training",
			"Evaluation",
			"Feature Engineering",
		],
	},
	{
		title: "Deep Learning",
		description:
			"Applying CNNs and transfer learning for practical computer vision applications.",
		items: [
			"TensorFlow",
			"PyTorch",
			"CNNs",
			"Transfer Learning",
		],
	},
	{
		title: "Backend & Data",
		description:
			"Developing APIs and data infrastructure that support intelligent applications.",
		items: [
			"Python",
			"Django",
			"REST APIs",
			"SQL",
		],
	},
]

export function Capabilities() {
	return (
		<section
			id="capabilities"
			className="relative mx-auto max-w-6xl px-6 py-8 lg:py-10"
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
					Capabilities
				</motion.span>

				<motion.h2
					variants={item}
					className="mt-3 text-4xl font-semibold tracking-tight text-foreground lg:text-[2.5rem]"
				>
					Capabilities
				</motion.h2>

				<motion.p
					variants={item}
					className="mt-2 max-w-xl text-base leading-7 text-muted-foreground"
				>
					The engineering domains where I design, build, and deploy intelligent systems.
				</motion.p>

				<motion.div
    				variants={container}
					className="mt-6 max-w-5xl rounded-2xl border border-border bg-secondary/20"
				>
					{CAPABILITIES.map((capability, index) => (
						<motion.div
							key={capability.title}
							variants={item}
							className={`p-5 ${
								index !== CAPABILITIES.length - 1
									? "border-b border-border"
									: ""
							}`}
						>
							<div className="grid gap-3 lg:grid-cols-[180px_1fr]">
								<div>
									<h3 className="text-xl font-semibold text-foreground">
										{capability.title}
									</h3>
								</div>

								<div>
									<p className="text-sm leading-5 text-muted-foreground">
										{capability.description}
									</p>

									<div className="mt-2 flex flex-wrap gap-2">
										{capability.items.map((tech) => (
											<span
												key={tech}
												className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	)
}