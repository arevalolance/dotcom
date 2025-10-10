"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactVCardPage() {
  const [dataUri, setDataUri] = useState<string>("")
  const [autoTriggered, setAutoTriggered] = useState(false)

  useEffect(() => {
    // vCard content
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lance Arevalo
N:Arevalo;Lance;;;
EMAIL;TYPE=INTERNET:hi@arevalolance.com
TEL;TYPE=CELL:+639695194429
URL;TYPE=WEBSITE:https://arevalolance.com
URL;TYPE=GITHUB:https://github.com/arevalolance
URL;TYPE=LINKEDIN:https://linkedin.com/in/arevalolance
TITLE:Software Engineer
NOTE:Friendly neighborhood builder - Crafting code for the web
END:VCARD`

    // Convert to base64 using browser's btoa
    const base64 = btoa(vcard)
    const uri = `data:text/vcard;base64,${base64}`
    setDataUri(uri)

    // Auto-trigger on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile && !autoTriggered) {
      setAutoTriggered(true)
      // Small delay to ensure page has loaded
      setTimeout(() => {
        window.location.href = uri
      }, 500)
    }
  }, [autoTriggered])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold">Add Contact</h1>
        <p className="text-muted-foreground max-w-md">
          Save Lance Arevalo's contact information to your device.
        </p>
      </div>

      {dataUri && (
        <Button
          size="lg"
          className="rounded-full"
          asChild
        >
          <a href={dataUri} download="lance-arevalo.vcf">
            Add to Contacts
          </a>
        </Button>
      )}

      <p className="text-sm text-muted-foreground mt-4">
        Tap the button above to save contact details
      </p>
    </div>
  )
}
