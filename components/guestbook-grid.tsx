"use client"

import * as React from "react"
import Image from "next/image"
import { Caveat } from "next/font/google"
import { format } from "date-fns"
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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import DrawingReplay from "./drawing-replay"
import { 
  getGuestbookEntries, 
  createGuestbookEntry, 
  updateGuestbookEntry, 
  deleteGuestbookEntry 
} from "@/lib/db/actions"
import { uploadDrawing, deleteDrawing } from "@/lib/blob-storage"
import type { GuestbookEntry } from "@/lib/db/schema"

interface DrawingCommand {
  type: 'move' | 'line' | 'stroke-start' | 'stroke-end'
  x: number
  y: number
  timestamp: number
  color: string
  size: number
}

interface GuestbookEntryDisplay {
  id?: string
  message: string
  color: string
  name: string
  drawing?: string
  drawingCommands?: DrawingCommand[]
  createdAt?: string | Date
}

const caveat = Caveat({ subsets: ["latin"] })

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

interface DrawingCanvasProps {
  value: string
  commands: DrawingCommand[]
  onChange: (drawing: string) => void
  onCommandsChange: (commands: DrawingCommand[]) => void
}

function DrawingCanvas({ value, commands, onChange, onCommandsChange }: DrawingCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = React.useState(false)
  const [currentColor, setCurrentColor] = React.useState("#000000")
  const [brushSize, setBrushSize] = React.useState(2)
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [recordingCommands, setRecordingCommands] = React.useState<DrawingCommand[]>([])
  const [totalActiveTime, setTotalActiveTime] = React.useState(0)
  const [lastStrokeStartTime, setLastStrokeStartTime] = React.useState<number | null>(null)
  const [isEraser, setIsEraser] = React.useState(false)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    if (value) {
      const img = new globalThis.Image()
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
      }
      img.src = value
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [value])

  React.useEffect(() => {
    setRecordingCommands(commands)
  }, [commands])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const x = (e.clientX - rect.left) * scaleX
    const y = (e.clientY - rect.top) * scaleY

    const now = Date.now()
    setLastStrokeStartTime(now)
    setIsDrawing(true)
    
    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(x, y)
    }

    // Record stroke start and initial move
    const newCommands = [
      ...recordingCommands,
      {
        type: 'stroke-start' as const,
        x,
        y,
        timestamp: totalActiveTime,
        color: currentColor,
        size: brushSize,
      },
      {
        type: 'move' as const,
        x,
        y,
        timestamp: totalActiveTime,
        color: currentColor,
        size: brushSize,
      }
    ]
    setRecordingCommands(newCommands)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const x = (e.clientX - rect.left) * scaleX
    const y = (e.clientY - rect.top) * scaleY

    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.lineTo(x, y)
      ctx.strokeStyle = currentColor
      ctx.lineWidth = brushSize
      ctx.lineCap = "round"
      ctx.stroke()
    }

    // Record line command
    const now = Date.now()
    const strokeElapsed = lastStrokeStartTime ? now - lastStrokeStartTime : 0
    const currentTimestamp = totalActiveTime + strokeElapsed
    
    const newCommands = [
      ...recordingCommands,
      {
        type: 'line' as const,
        x,
        y,
        timestamp: currentTimestamp,
        color: currentColor,
        size: brushSize,
      }
    ]
    setRecordingCommands(newCommands)
  }

  const stopDrawing = () => {
    if (!isDrawing) return
    
    setIsDrawing(false)
    const canvas = canvasRef.current
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png")
      onChange(dataURL)
    }

    // Calculate total stroke time and update active time
    const now = Date.now()
    const strokeElapsed = lastStrokeStartTime ? now - lastStrokeStartTime : 0
    const newTotalActiveTime = totalActiveTime + strokeElapsed
    setTotalActiveTime(newTotalActiveTime)
    setLastStrokeStartTime(null)

    // Record stroke end
    const finalCommands = [
      ...recordingCommands,
      {
        type: 'stroke-end' as const,
        x: 0,
        y: 0,
        timestamp: newTotalActiveTime,
        color: currentColor,
        size: brushSize,
      }
    ]
    setRecordingCommands(finalCommands)
    onCommandsChange(finalCommands)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    onChange("")
    
    // Clear recorded commands and reset timing
    setRecordingCommands([])
    setTotalActiveTime(0)
    setLastStrokeStartTime(null)
    onCommandsChange([])
  }

  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium">Optional drawing</label>
      <div className="border rounded-md p-3 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium">Ink:</label>
            <input
              type="color"
              value={currentColor}
              onChange={(e) => {
                setCurrentColor(e.target.value)
                setIsEraser(false)
              }}
              className="w-6 h-6 rounded border cursor-pointer"
              title="Pick ink color"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium">Brush:</label>
            <div className="flex items-center gap-1">
              <Button type="button" size="sm" variant={brushSize === 2 ? "default" : "outline"} onClick={() => setBrushSize(2)}>Fine</Button>
              <Button type="button" size="sm" variant={brushSize === 5 ? "default" : "outline"} onClick={() => setBrushSize(5)}>Marker</Button>
              <Button type="button" size="sm" variant={brushSize === 8 ? "default" : "outline"} onClick={() => setBrushSize(8)}>Bold</Button>
            </div>
          </div>
          <Button
            type="button"
            variant={isEraser ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setIsEraser((prev) => {
                const next = !prev
                if (next) setCurrentColor("#ffffff")
                return next
              })
            }}
            title="Erase by drawing white"
          >
            {isEraser ? "Eraser on" : "Eraser"}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={clearCanvas}
          >
            Clear drawing
          </Button>
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={250}
          className="border rounded cursor-crosshair bg-white w-full"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  )
}

export default function GuestbookGrid() {
  const [entries, setEntries] = React.useState<(GuestbookEntryDisplay | null)[]>(
    Array(190).fill(null)
  )
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSaving, setIsSaving] = React.useState(false)
  const [formData, setFormData] = React.useState({
    message: "",
    color: colorOptions[0].value,
    name: "",
    drawing: "",
    drawingCommands: [] as DrawingCommand[],
  })
  const MAX_CHARS = 280

  // Load entries from database on mount
  React.useEffect(() => {
    const loadEntries = async () => {
      try {
        const dbEntries = await getGuestbookEntries()
        const entriesArray: (GuestbookEntryDisplay | null)[] = Array(190).fill(null)
        
        dbEntries.forEach((entry) => {
          entriesArray[entry.gridIndex] = {
            id: entry.id,
            message: entry.message,
            color: entry.color,
            name: entry.name,
            drawing: entry.drawingUrl || undefined,
            drawingCommands: (entry.drawingCommands as DrawingCommand[]) || undefined,
            createdAt: (entry as any).createdAt,
          }
        })
        
        setEntries(entriesArray)
      } catch (error) {
        console.error('Failed to load guestbook entries:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadEntries()
  }, [])

  const handleSquareClick = (index: number) => {
    const existingEntry = entries[index]
    
    // Block editing if there's already an entry (read-only mode)
    if (existingEntry?.id) {
      return // Don't open dialog for existing entries
    }
    
    setSelectedIndex(index)
    setFormData({
      message: "",
      color: colorOptions[0].value,
      name: "",
      drawing: "",
      drawingCommands: [],
    })
    setIsOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedIndex !== null && formData.message.trim()) {
      setIsSaving(true)
      try {
        let drawingUrl: string | undefined
        
        // Upload drawing if present
        if (formData.drawing) {
          const filename = `guestbook-drawing-${selectedIndex}-${Date.now()}.png`
          drawingUrl = await uploadDrawing(formData.drawing, filename)
        }

        const entryData = {
          gridIndex: selectedIndex,
          message: formData.message,
          color: formData.color,
          name: formData.name || "Anonymous",
          drawingUrl,
          drawingCommands: formData.drawingCommands.length > 0 ? formData.drawingCommands : null,
        }

        let savedEntry: GuestbookEntry
        const existingEntry = entries[selectedIndex]
        
        if (existingEntry?.id) {
          // Update existing entry
          if (existingEntry.drawing && drawingUrl) {
            // Delete old drawing
            await deleteDrawing(existingEntry.drawing)
          }
          savedEntry = await updateGuestbookEntry(selectedIndex, entryData)
        } else {
          // Create new entry
          savedEntry = await createGuestbookEntry(entryData)
        }

        // Update local state
        const newEntries = [...entries]
        newEntries[selectedIndex] = {
          id: savedEntry.id,
          message: savedEntry.message,
          color: savedEntry.color,
          name: savedEntry.name,
          drawing: savedEntry.drawingUrl || undefined,
          drawingCommands: savedEntry.drawingCommands as DrawingCommand[] || undefined,
        }
        setEntries(newEntries)
        setIsOpen(false)
        setFormData({ message: "", color: colorOptions[0].value, name: "", drawing: "", drawingCommands: [] })
      } catch (error) {
        console.error('Failed to save guestbook entry:', error)
        alert('Failed to save entry. Please try again.')
      } finally {
        setIsSaving(false)
      }
    }
  }

  const handleClear = async () => {
    if (selectedIndex !== null) {
      setIsSaving(true)
      try {
        const existingEntry = entries[selectedIndex]
        
        if (existingEntry?.id) {
          // Delete from database
          await deleteGuestbookEntry(selectedIndex)
          
          // Delete associated drawing from blob storage
          if (existingEntry.drawing) {
            await deleteDrawing(existingEntry.drawing)
          }
        }

        // Update local state
        const newEntries = [...entries]
        newEntries[selectedIndex] = null
        setEntries(newEntries)
        setIsOpen(false)
        setFormData({ message: "", color: colorOptions[0].value, name: "", drawing: "", drawingCommands: [] })
      } catch (error) {
        console.error('Failed to clear guestbook entry:', error)
        alert('Failed to clear entry. Please try again.')
      } finally {
        setIsSaving(false)
      }
    }
  }

  return (
    <div className="hidden md:block w-full mb-4">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-sm font-medium">Guestbook</h3>
        <span className="text-xs text-muted-foreground">
          {isLoading ? 'Loading...' : 'Click a blank square to sign'}
        </span>
      </div>
      
      <div className="grid gap-1 w-full" style={{ gridTemplateColumns: 'repeat(19, 1fr)' }}>
        {entries.map((entry, index) => (
          entry ? (
            <HoverCard key={index} openDelay={120} closeDelay={80}>
              <HoverCardTrigger asChild>
                <button
                  aria-label={`View signature ${index + 1}`}
                  className="w-4 h-4 rounded-sm border cursor-pointer transition-transform hover:scale-110"
                  style={{
                    backgroundColor: entry.color,
                    borderColor: entry.color,
                    opacity: 0.9,
                  }}
                />
              </HoverCardTrigger>
              <HoverCardContent sideOffset={8} className="w-80 p-0 border-none bg-transparent shadow-none">
                <div
                  className="rounded-lg border bg-popover text-popover-foreground shadow-md p-3 relative"
                  style={{
                    transform: `rotate(${((index * 31) % 5) - 2}deg)`,
                  }}
                >
                  <div className="absolute inset-0 rounded-lg pointer-events-none bg-[linear-gradient(#0000000a_1px,transparent_1px)] [background-size:100%_28px]" />
                  <div className="relative space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`text-base ${caveat.className} truncate`}>{entry.name}</span>
                        <span
                          className="inline-block w-3 h-3 rounded-full border"
                          style={{ backgroundColor: entry.color, borderColor: entry.color }}
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground shrink-0">
                        {entry.createdAt ? format(new Date(entry.createdAt), 'MMM d, yyyy') : ''}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                      {entry.message}
                    </p>
                    {entry.drawingCommands && entry.drawingCommands.length > 0 ? (
                      <DrawingReplay
                        commands={entry.drawingCommands}
                        width={220}
                        height={160}
                        className="max-w-[220px] max-h-[160px] rounded border bg-white"
                      />
                    ) : entry.drawing ? (
                      <Image
                        src={entry.drawing}
                        alt="Drawing"
                        width={220}
                        height={160}
                        className="max-w-[220px] max-h-[160px] rounded border object-contain bg-white"
                      />
                    ) : null}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ) : (
            <button
              key={index}
              onClick={() => handleSquareClick(index)}
              className="w-4 h-4 rounded-sm border transition-all hover:scale-110 hover:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
              style={{
                backgroundColor: "transparent",
                borderColor: "hsl(var(--border))",
                opacity: 0.3,
              }}
            />
          )
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign the guestbook</DialogTitle>
            <DialogDescription>
              Leave a short note and, if you like, a small doodle.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message (max {MAX_CHARS})
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none"
                placeholder="Where are you visiting from? What brought you here?"
                maxLength={MAX_CHARS}
                required
              />
              <div className="flex items-center justify-end text-xs">
                <span className={formData.message.length > MAX_CHARS - 20 ? "text-destructive" : "text-muted-foreground"}>
                  {formData.message.length}/{MAX_CHARS}
                </span>
              </div>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="color" className="text-sm font-medium">
                Ink color
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
                placeholder="Anonymous or your signature"
              />
            </div>
            
            <DrawingCanvas
              value={formData.drawing}
              commands={formData.drawingCommands}
              onChange={(drawing) =>
                setFormData({ ...formData, drawing })
              }
              onCommandsChange={(commands) =>
                setFormData({ ...formData, drawingCommands: commands })
              }
            />
            
            <DialogFooter>
              <div className="flex gap-2 w-full sm:w-auto">
                {selectedIndex !== null && entries[selectedIndex]?.id && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClear}
                    className="flex-1 sm:flex-initial"
                    disabled={isSaving}
                  >
                    {isSaving ? 'Clearing...' : 'Clear'}
                  </Button>
                )}
                <Button type="submit" className="flex-1 sm:flex-initial" disabled={isSaving}>
                  {isSaving ? 'Signing...' : 'Sign the guestbook'}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
