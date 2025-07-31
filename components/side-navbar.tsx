"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "about", href: "/" },
  // { name: "writing", href: "/writing" },
  { name: "hobbies", href: "/hobbies" },
  { name: "code ↗", href: "https://github.com/arevalolance" },
  { name: "linkedin ↗", href: "https://linkedin.com/in/arevalolance" },
]

export default function SideNavbar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn("text-sm text-muted-foreground hover:text-foreground text-right", {
            "text-foreground": pathname === link.href,
          })}
          target={link.href.startsWith("http") ? "_blank" : "_self"}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
