"use client"

import { useRouter } from "next/navigation"

export default function DownloadResume() {
  const router = useRouter()

  return (
    <button
      disabled
      onClick={() => router.push("/static/resume/arevalolance-resume.pdf")}
      className="border-gray-300/7 shadow-inner-[1px] rounded-md border-[1px] bg-gray-100 p-2  font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in"
    >
      Coming Soon
    </button>
  )
}
