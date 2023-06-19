"use client"

import { Icon } from "@iconify/react"
import { ExternalLink, Link, MoreVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import ImageCarousel from "./image-carousel"

interface ProjectCardProps {
  name: string
  description: string
  tools: {
    name: string
    icon: string
  }[]
  links: {
    name: string
    link: string
  }[]
  images: string[]
}

function DropdownLinks({ links }: { links: { name: string; link: string }[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-background text-sm font-medium transition-all hover:bg-muted focus:outline-none"
        )}
      >
        <Link className="hidden h-3 w-3 md:block" />
        <MoreVertical className="h-3 w-3 md:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>Visit the repo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((repo) => (
          <DropdownMenuItem
            className="gap-x-2 hover:cursor-pointer"
            key={repo.name}
            onClick={() => {
              window.open(repo.link, "_blank")
            }}
          >
            <ExternalLink className="hidden h-3 w-3" />
            <span>{repo.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function ProjectCard({ item }: { item: ProjectCardProps }) {
  return (
    <div
      key={item.name}
      className="flex flex-col justify-between rounded-lg border-[1px] border-stone-100 bg-stone-50/50 shadow-sm focus-within:bg-stone-100/60 hover:bg-stone-100/60 md:flex-row md:justify-between"
    >
      <div className="flex justify-end p-2 md:hidden">
        <DropdownLinks links={item.links} />
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-between">
        <div className="group p-4">
          <div className="flex flex-row items-center justify-center gap-2 md:items-start md:justify-start">
            <h4 className="scroll-m-20 text-center text-lg font-semibold tracking-tight md:text-left">
              {item.name}
            </h4>

            <div className="hidden md:block">
              <DropdownLinks links={item.links} />
            </div>
          </div>

          <p className="font-display bg-clip-text text-center text-sm tracking-[-0.02em] text-gray-500 md:text-left">
            {item.description}
          </p>
          <div className="mt-4 flex flex-row items-center gap-4">
            <span>Tools:</span>
            <div className="flex flex-wrap gap-3">
              {item.tools.map((tool) => (
                <TooltipProvider key={tool.name} delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Icon
                        icon={tool.icon}
                        className="h-7 w-7 rounded-md border-[1px] border-gray-200 bg-gray-100 p-1 duration-150 ease-in hover:border-gray-300 hover:bg-gray-200"
                      />
                    </TooltipTrigger>
                    <TooltipContent>{tool.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
        {item.images.length > 0 && (
          <div className="min-h-[149px] min-w-[232px] max-w-[232px] overflow-hidden p-4">
            <ImageCarousel
              title={item.name}
              description={item.description}
              images={item.images}
            />
          </div>
        )}
      </div>
    </div>
  )
}
