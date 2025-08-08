import "./globals.css"

import { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import SideNavbar from "@/components/side-navbar"
import { MainLogo } from "@/components/ui/logo"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Lance Arevalo - Your friendly neighborhood developer.",
    template: "%s | Lance Arevalo",
  },
  description:
    "Learn more about my journey as a developer. I write about various topics, including technology, business, and self-development. I'm based in the Philippines, and specialize in React and Typescript development.", openGraph: {
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
        {/* Fixed navbar positioned close to main content */}
        <aside className="fixed left-1/2 top-23 z-10 hidden md:block -translate-x-94">
          <SideNavbar />
        </aside>

        {/* Mobile navbar */}
        <aside className="flex w-full justify-center p-4 md:hidden">
          <SideNavbar />
        </aside>

        {/* Main content centered on screen */}
        <div className="flex flex-1 items-center justify-center overflow-auto">
          <div className="flex min-h-screen w-full max-w-[550px] flex-col gap-4 p-4">
            <div className="flex flex-1 h-full w-full flex-col gap-6">
              <MainLogo />
              {children}
            </div>

            <span className="text-xs text-muted-foreground text-center">© Lance Arevalo - 2025</span>
          </div>
        </div>

        <Analytics />
        <SpeedInsights />
        <TailwindIndicator />
      </body>
    </html>
  )
}
