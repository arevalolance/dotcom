"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface GuestbookEntry {
  message: string
  color: string
  name: string
}

const colorOptions = [
  { name: "Green", value: "#22c55e" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Pink", value: "#ec4899" },
  { name: "Orange", value: "#f97316" },
  { name: "Red", value: "#ef4444" },
  { name: "Yellow", value: "#eab308" },
  { name: "Teal", value: "#14b8a6" },
]

export default function GuestbookGrid() {
  const [entries, setEntries] = React.useState<(GuestbookEntry | null)[]>(
    Array(140).fill(null)
  )
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    message: "",
    color: colorOptions[0].value,
    name: "",
  })

  const handleSquareClick = (index: number) => {
    setSelectedIndex(index)
    const existingEntry = entries[index]
    if (existingEntry) {
      setFormData({
        message: existingEntry.message,
        color: existingEntry.color,
        name: existingEntry.name,
      })
    } else {
      setFormData({
        message: "",
        color: colorOptions[0].value,
        name: "",
      })
    }
    setIsOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedIndex !== null && formData.message.trim()) {
      const newEntries = [...entries]
      newEntries[selectedIndex] = {
        message: formData.message,
        color: formData.color,
        name: formData.name || "Anonymous",
      }
      setEntries(newEntries)
      setIsOpen(false)
      setFormData({ message: "", color: colorOptions[0].value, name: "" })
    }
  }

  const handleClear = () => {
    if (selectedIndex !== null) {
      const newEntries = [...entries]
      newEntries[selectedIndex] = null
      setEntries(newEntries)
      setIsOpen(false)
      setFormData({ message: "", color: colorOptions[0].value, name: "" })
    }
  }

  return (
    <div className="hidden lg:block w-full mb-4">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-sm font-medium">Guestbook</h3>
        <span className="text-xs text-muted-foreground">
          Click any square to leave a message
        </span>
      </div>
      
      <div className="grid gap-1 w-full" style={{ gridTemplateColumns: 'repeat(14, 1fr)' }}>
        {entries.map((entry, index) => (
          <button
            key={index}
            onClick={() => handleSquareClick(index)}
            className="w-4 h-4 rounded-sm border transition-all hover:scale-110 hover:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
            style={{
              backgroundColor: entry ? entry.color : "transparent",
              borderColor: entry ? entry.color : "hsl(var(--border))",
              opacity: entry ? 0.8 : 0.3,
            }}
            title={entry ? `${entry.name}: ${entry.message}` : "Click to add message"}
          />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Leave a Message</DialogTitle>
            <DialogDescription>
              Add your message to the guestbook grid
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none"
                placeholder="Your message here..."
                required
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="color" className="text-sm font-medium">
                Color
              </label>
              <div className="grid grid-cols-4 gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, color: color.value })
                    }
                    className="h-8 w-full rounded-md border-2 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring/50"
                    style={{
                      backgroundColor: color.value,
                      borderColor:
                        formData.color === color.value
                          ? "hsl(var(--ring))"
                          : "transparent",
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name (optional)
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none"
                placeholder="Anonymous"
              />
            </div>
            
            <DialogFooter>
              <div className="flex gap-2 w-full sm:w-auto">
                {entries[selectedIndex || 0] && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClear}
                    className="flex-1 sm:flex-initial"
                  >
                    Clear
                  </Button>
                )}
                <Button type="submit" className="flex-1 sm:flex-initial">
                  Save Message
                </Button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}