"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Brain, BrainCircuit, BrainCog, Menu } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/types/site-config"
import { cn } from "@/lib/utils"

import ContactModal from "./contact"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { MainLogo } from "./ui/logo"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import React from "react"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const router = useRouter()

  let pathname = usePathname() || "/"
  if (pathname.includes("/blog/")) {
    pathname = "/blog"
  }

  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-8 2xl:px-0">
      <div className="flex flex-row items-center gap-4">
        <Link href="/">
          <MainLogo />
        </Link>
      </div>

      <ContactModal />

      <div className="absolute left-1/2 z-50 hidden -translate-x-1/2 space-x-4 md:block">
        <NavigationMenu className="z-50">
          <NavigationMenuList>
            {siteConfig.mainNav.map((item) => (
              <NavigationMenuItem>
                {!('content' in item) ?
                  (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  ) :
                  (
                    <>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-50">
                        <ul className="z-50 grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <BrainCircuit className="h-8 w-8" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Explore my mind
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  See my thoughts and reviews on things I like and dislike.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          {item.content?.map((item) => (
                            <ListItem href={item.href} title={item.title}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </ NavigationMenuContent>

                    </>
                  )
                }
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="border-gray-300/7 shadow-inner-[1px] block rounded-md border-[1px] bg-gray-100 p-2 text-sm drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:hidden">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Hi, there!</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {siteConfig.mainNav.map((item) => (
              <DropdownMenuItem
                key={item.title}
                onClick={() => router.push(item.href)}
              >
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"