"use client";

import Link from "next/link";

export default function AboutSection() {
	return (
		<div className="flex w-full flex-col gap-6 lg:sticky lg:top-4">
			<div className="flex flex-col gap-3">
				<h2 className="text-sm text-muted-foreground">[About]</h2>

				<p className="text-sm">
					Hi, I'm Lance Arevalo. I am a software engineer with a passion and
					curiosity for building cool web applications.
				</p>
				<p className="text-sm">
					Currently, I'm working as a software engineer at Cobi [4th
					hire], where I explore cool and innovative ideas to unlock
					insights from raw information and data.
				</p>
				<p className="text-sm">
					I do my best to{" "}
					<Link
						className="underline bg-neon-green/40  text-black"
						href={"https://www.youtube.com/watch?v=jG7dSXcfVqE"}
					>
						do what I can't
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
