"use client"

import useDeviceType from "@/lib/hook/useDeviceType"
import { cn } from "@/lib/utils"

export default function PressConnectLabel() {
  const isMobile = useDeviceType()

  return (
    <div
      className={cn(
        "mx-auto mt-6 flex w-fit lg:mx-0",
        !isMobile ? "block" : "hidden"
      )}
    >
      <span className="mx-auto font-bold lg:mx-0">
        Press{" "}
        <span className="rounded-sm bg-gradient-to-b from-black to-stone-700 p-[5px] text-white">
          C
        </span>{" "}
        to connect with me
      </span>
    </div>
  )
}
