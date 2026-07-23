"use client"

import { motion, type Variants } from "motion/react"

type Entry = {
	title: string
	organization: string
	date: string
	description?: string
}

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

const EXPERIENCE: Entry[] = [
	{
		title: "AI/ML Intern",
		organization: "NextEra Unitech Pvt. Ltd.",
		date: "Jan 2026 – Present",
		description:
			"Developing computer vision and AI workflows for preprocessing, model development, evaluation, and automation.",
	},
	{
		title: "SEO Analyst",
		organization: "Medintu Health Solutions",
		date: "Jun 2024 – Aug 2024",
		description:
			"Improved search visibility through keyword research, technical optimization, and data-driven SEO.",
	},
]

const EDUCATION: Entry[] = [
	{
		title: "B.Tech in Data Science & AI",
		organization: "ICFAI Foundation for Higher Education",
		date: "2022 – 2026",
	},
	{
		title: "Intermediate (MPC)",
		organization: "Narayana IIT Academy",
		date: "2020 – 2022",
	},
	{
		title: "CBSE",
		organization: "Silver Oaks International School",
		date: "2019 – 2020",
	},
]

function EntryRow({ entry }: { entry: Entry }) {
	return (
		<div className="grid gap-3 border-b border-border py-4 sm:grid-cols-[1fr_auto] sm:gap-5">
			<div>
				<div className="flex flex-col gap-1">
					<h3 className="text-[1.7rem] font-semibold leading-tight tracking-tight text-foreground">
						{entry.title}
					</h3>

					<p className="text-sm text-muted-foreground">
						{entry.organization}
					</p>
				</div>

				{entry.description && (
					<p className="mt-2 max-w-md text-base leading-7 text-muted-foreground">
						{entry.description}
					</p>
				)}
			</div>

			<p className="pt-1 text-sm font-medium text-muted-foreground sm:text-right">
				{entry.date}
			</p>
		</div>
	)
}

function JourneyGroup({
	title,
	entries,
}: {
	title: string
	entries: Entry[]
}) {
	return (
		<motion.div variants={item}>
			<h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
				{title}
			</h3>

			<div className="mt-2 border-t border-border">
				{entries.map((entry) => (
					<EntryRow
						key={`${entry.title}-${entry.organization}`}
						entry={entry}
					/>
				))}
			</div>
		</motion.div>
	)
}

export function EngineeringJourney() {
	return (
		<section
			id="experience"
			className="relative mx-auto max-w-6xl px-6 py-10 lg:py-12"
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
					Journey
				</motion.span>

				<motion.h2
					variants={item}
					className="mt-2 text-4xl font-semibold tracking-tight text-foreground lg:text-[2.75rem]"
				>
					Engineering Journey
				</motion.h2>

				<motion.p
					variants={item}
					className="mt-2 max-w-xl text-base leading-7 text-muted-foreground"
				>
					A concise view of education and experience shaped into a practical engineering path.
				</motion.p>

				<motion.div
					variants={container}
					className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-10"
				>
					<JourneyGroup
						title="Experience"
						entries={EXPERIENCE}
					/>

					<JourneyGroup
						title="Education"
						entries={EDUCATION}
					/>
				</motion.div>
			</motion.div>
		</section>
	)
}