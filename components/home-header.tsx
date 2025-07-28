"use client";

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function HomeHeader() {
  const pathname = usePathname()

  return (
    <div className={cn("flex flex-col gap-3", { "hidden": pathname !== "/" })}>
      <h1 className="text-balance text-2xl font-semibold">
        Friendly neighborhood builder
      </h1>
      <p className="text-sm">
        Crafting code for the web, bringing ideas to life through innovative
        software solutions and modern web technologies.
      </p>
    </div>
  )
}
