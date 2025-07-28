"use client"

import { useEffect } from "react"
import Link from "next/link"
import { getCalApi } from "@calcom/embed-react"

import { Button } from "./ui/button"
import { MainLogo } from "./ui/logo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const workExperience = [
  {
    id: "item-1",
    position: "Software Engineer",
    company: "Cobi",
    period: "Today",
    description: "Crafting code for the web, bringing ideas to life through innovative software solutions and modern web technologies.",
    technologies: ["Nextjs", "AI SDK", "Express", "TailwindCSS"]
  },
  {
    id: "item-2",
    position: "Software Engineer",
    company: "HP Spring Studios",
    period: "2024 - 2025",
    description: "Crafting code for the web, bringing ideas to life through innovative software solutions and modern web technologies.",
    technologies: ["Nextjs", "AI SDK", "Express", "TailwindCSS"]
  },
  {
    id: "item-3",
    position: "Frontend Engineer",
    company: "Focus Global Inc",
    period: "2023 - 2024",
    description: "Crafting code for the web, bringing ideas to life through innovative software solutions and modern web technologies.",
    technologies: ["Nextjs", "AI SDK", "Express", "TailwindCSS"]
  }
]

export default function SideProfile() {
  useEffect(() => {
    ; (async function() {
      const cal = await getCalApi({ namespace: "15min" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  return (
    <div className="flex w-full flex-col gap-6 lg:sticky lg:top-4">
      <div className="flex flex-col gap-3">
        <h2>Work</h2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {workExperience.map((work) => (
            <AccordionItem key={work.id} value={work.id}>
              <AccordionTrigger className="py-1 hover:bg-neon-green/40 hover:no-underline rounded-none px-2 data-[state=open]:bg-neon-green">
                <div className="flex gap-2 items-center justify-between w-full !text-sm">
                  <div className="flex gap-4 items-center">
                    <span>{work.position}</span>
                    <span>{work.company}</span>
                  </div>
                  <span className="text-xs group-data-[state=open]:text-white text-muted-foreground">{work.period}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance px-1 py-2">
                {work.description && (
                  <p>
                    {work.description}
                  </p>
                )}
                {work.technologies.length > 0 && (
                  <div className="flex flex-row gap-2 text-balance text-xs text-muted-foreground">
                    {work.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
