import "./globals.css"
import { Metadata } from "next"
import { GeistSans, GeistMono } from 'geist/font'
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={cn("antialiased")}>
        <SiteHeader />
        <div className="flex-1">
          {children}
          <Analytics />
        </div>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  )
}
