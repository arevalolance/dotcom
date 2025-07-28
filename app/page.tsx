import BottomProfile from "@/components/bottom-profile"
import PageHeader from "@/components/page-header"
import WorkSection from "@/components/work-section"

export default async function Home() {
  return (
    <div className="flex min-h-full w-full flex-col justify-between gap-6">
      <PageHeader
        title="Friendly neighborhood builder"
        description="Crafting code for the web, bringing ideas to life through innovative software solutions and modern web technologies."
      />
      <WorkSection />
      <BottomProfile />
    </div>
  )
}
