import "./globals.css"

import { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { cn } from "@/lib/utils"
import BottomProfile from "@/components/bottom-profile"
import SideProfile from "@/components/side-profile"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import SideNavbar from "@/components/side-navbar"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Lance Arevalo - Your friendly neighborhood developer.",
    template: "%s | Lance Arevalo",
  },
  description:
    "Learn more about my journey as a developer. I write about various topics, including technology, business, and self-development. I'm based in the Philippines, and specialize in React and Typescript development.",
  openGraph: {
    title: "Lance Arevalo",
    description:
      "Learn more about my journey as a developer. I write about various topics, including technology, business, and self-development. I'm based in the Philippines, and specialize in React and Typescript development.",
    url: "https://arevalolance.com",
    siteName: "Lance Arevalo",
    images: [
      {
        url: "https://arevalolance.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Lance Arevalo",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen w-full flex-col font-medium font-sans leading-snug tracking-tight antialiased",
          inter.className
        )}
      >
        <div className="min-h-screen flex lg:flex-row flex-col gap-20">
          <aside className="flex w-full max-w-[450px] shrink-0 flex-col gap-8 p-4 lg:justify-between">
            <SideProfile />
            <BottomProfile />
          </aside>
          <section className="flex w-full max-w-7xl flex-col gap-2 p-2">
            {children}
          </section>
          {/*<SideNavbar />*/}
          <Analytics />
          <SpeedInsights />
        </div>
        <TailwindIndicator />
      </body>
    </html>
  )
}
