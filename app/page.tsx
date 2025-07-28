import BottomProfile from "@/components/bottom-profile"
import WorkSection from "@/components/work-section"

export default async function Home() {
  return (
    <div className="flex min-h-full w-full flex-col justify-between gap-6">
      <WorkSection />
      <BottomProfile />
    </div>
  )
}
