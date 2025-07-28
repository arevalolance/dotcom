import BottomProfile from "@/components/bottom-profile"
import SideProfile from "@/components/side-profile"

export default async function Home() {
  return (
    <div className="flex min-h-full w-full flex-col justify-between gap-6">
      <SideProfile />
      <BottomProfile />
    </div>
  )
}
