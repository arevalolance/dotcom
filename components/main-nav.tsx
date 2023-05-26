"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/types/site-config"
import { cn } from "@/lib/utils"

import { MainLogo } from "./ui/logo"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  let pathname = usePathname() || "/"
  if (pathname.includes("/blog/")) {
    pathname = "/blog"
  }

  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-8 2xl:px-0">
      <div className="flex flex-row items-center gap-4">
        <Link href="/">
          <MainLogo />
          {/* <span>{siteConfig.name}</span> */}
        </Link>
      </div>

      <button className="border-gray-300/7 shadow-inner-[1px] hidden rounded-md border-[1px] bg-gray-100 p-2 text-sm font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:block">
        Contact me
      </button>

      <div className="absolute left-1/2 hidden -translate-x-1/2 space-x-4 md:block">
        {siteConfig.mainNav.map((item) => (
          <Link
            className={cn(
              "font-medium text-[#404040] ease-in hover:text-black hover:duration-150",
              item.href === pathname ? "font-bold text-black" : null
            )}
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <button className="border-gray-300/7 shadow-inner-[1px] block rounded-md border-[1px] bg-gray-100 p-2 text-sm drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:hidden">
        <Menu />
      </button>
    </div>
  )
}
