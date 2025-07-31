import BottomProfile from "@/components/bottom-profile"
import PageHeader from "@/components/page-header"
import WorkSection from "@/components/work-section"

export default async function Home() {
  return (
    <div className="flex flex-1 w-full flex-col justify-between gap-8">
      <div className="flex w-full flex-col gap-8">
        <PageHeader
          title="Friendly neighborhood builder"
          description="Crafting code for the web, bringing ideas to life through innovative software solutions and modern web technologies."
        />
        <WorkSection />
      </div>
      <BottomProfile />
    </div>
  )
}
