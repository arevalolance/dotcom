"use client";

import Link from "next/link";

export default function InterestSection() {
	return (
		<div className="flex w-full flex-col gap-6 lg:sticky lg:top-4">
			<div className="flex flex-col gap-3">
				<h2 className="text-sm text-muted-foreground">[Interests]</h2>

				<p className="text-sm">
					I enjoy sim racing,{" "}
					<Link
						id="travel-link"
						href="/hobbies?filter=travel"
						className="underline bg-neon-green/40  text-black"
					>
						traveling
					</Link>
					,{" "}
					<Link
						id="movie-link"
						href="/hobbies?filter=movie"
						className="underline bg-neon-green/40 text-black"
					>
						watching movies
					</Link>
					,{" "}
					<Link
						id="book-link"
						href="/hobbies?filter=book"
						className="underline bg-neon-green/40 text-black"
					>
						reading books
					</Link>
					, and playing video games.
				</p>
			</div>
		</div>
	);
}
