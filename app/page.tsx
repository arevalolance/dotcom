import AboutSection from "@/components/about-section";
import BottomProfile from "@/components/bottom-profile";
import InterestSection from "@/components/interest-section";
import PageHeader from "@/components/page-header";
import WorkSection from "@/components/work-section";

export default async function Home() {
	return (
		<div className="flex flex-1 w-full flex-col justify-between gap-8">
			<div className="flex w-full flex-col gap-8">
				<PageHeader
					title="Friendly neighborhood builder"
					description="Crafting code for the web, bringing ideas to life through innovative software solutions and modern web technologies."
				/>
				<AboutSection />
				<WorkSection />
				<InterestSection />
			</div>
			<BottomProfile />
		</div>
	);
}
