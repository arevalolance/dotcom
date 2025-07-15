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
      <MainLogo />

      <div className="flex flex-col gap-3">
        <h1 className="text-balance text-2xl font-semibold">
          Friendly neighborhood builder
        </h1>
        <p className="text-sm">
          Crafting code for the web, bringing ideas to life through innovative
          software solutions and modern web technologies.
        </p>
      </div>

      <div className="flex flex-row gap-2">
        <Button
          className="rounded-full"
          size="sm"
          data-cal-namespace="15min"
          data-cal-link="arevalolance/15min"
          data-cal-config='{"layout":"month_view"}'
        >
          Book a call
        </Button>
        <Button variant="secondary" size="sm" className="rounded-full" asChild>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+639695194429"
          >
            <svg
              viewBox="0 0 256 259"
              width="26"
              height="26"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z"
                fill="#00E676"
              />
              <path
                d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z"
                fill="#FFF"
              />
            </svg>
            Chat
          </Link>
        </Button>
      </div>

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
