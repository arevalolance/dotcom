"use client"

import * as React from "react"
import Image from "next/image"
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import DrawingReplay from "./drawing-replay"

interface DrawingCommand {
  type: 'move' | 'line' | 'stroke-start' | 'stroke-end'
  x: number
  y: number
  timestamp: number
  color: string
  size: number
}

interface GuestbookEntry {
  message: string
  color: string
  name: string
  drawing?: string
  drawingCommands?: DrawingCommand[]
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
  const [sessionStartTime, setSessionStartTime] = React.useState<number | null>(null)

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
    if (sessionStartTime === null) {
      setSessionStartTime(now)
    }

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
        timestamp: now - (sessionStartTime || now),
        color: currentColor,
        size: brushSize,
      },
      {
        type: 'move' as const,
        x,
        y,
        timestamp: now - (sessionStartTime || now),
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
    const newCommands = [
      ...recordingCommands,
      {
        type: 'line' as const,
        x,
        y,
        timestamp: now - (sessionStartTime || now),
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

    // Record stroke end
    const now = Date.now()
    const finalCommands = [
      ...recordingCommands,
      {
        type: 'stroke-end' as const,
        x: 0,
        y: 0,
        timestamp: now - (sessionStartTime || now),
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
    
    // Clear recorded commands
    setRecordingCommands([])
    setSessionStartTime(null)
    onCommandsChange([])
  }

  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium">Drawing (optional)</label>
      <div className="border rounded-md p-3 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium">Color:</label>
            <input
              type="color"
              value={currentColor}
              onChange={(e) => setCurrentColor(e.target.value)}
              className="w-6 h-6 rounded border cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium">Size:</label>
            <input
              type="range"
              min="1"
              max="10"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
              className="w-16"
            />
            <span className="text-xs">{brushSize}px</span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={clearCanvas}
          >
            Clear
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
  const [entries, setEntries] = React.useState<(GuestbookEntry | null)[]>(
    Array(190).fill(null)
  )
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    message: "",
    color: colorOptions[0].value,
    name: "",
    drawing: "",
    drawingCommands: [] as DrawingCommand[],
  })

  const handleSquareClick = (index: number) => {
    setSelectedIndex(index)
    const existingEntry = entries[index]
    if (existingEntry) {
      setFormData({
        message: existingEntry.message,
        color: existingEntry.color,
        name: existingEntry.name,
        drawing: existingEntry.drawing || "",
        drawingCommands: existingEntry.drawingCommands || [],
      })
    } else {
      setFormData({
        message: "",
        color: colorOptions[0].value,
        name: "",
        drawing: "",
        drawingCommands: [],
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
        drawing: formData.drawing,
        drawingCommands: formData.drawingCommands,
      }
      setEntries(newEntries)
      setIsOpen(false)
      setFormData({ message: "", color: colorOptions[0].value, name: "", drawing: "", drawingCommands: [] })
    }
  }

  const handleClear = () => {
    if (selectedIndex !== null) {
      const newEntries = [...entries]
      newEntries[selectedIndex] = null
      setEntries(newEntries)
      setIsOpen(false)
      setFormData({ message: "", color: colorOptions[0].value, name: "", drawing: "", drawingCommands: [] })
    }
  }

  return (
    <div className="hidden md:block w-full mb-4">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-sm font-medium">Guestbook</h3>
        <span className="text-xs text-muted-foreground">
          Click any square to leave a message
        </span>
      </div>
      
      <div className="grid gap-1 w-full" style={{ gridTemplateColumns: 'repeat(19, 1fr)' }}>
        {entries.map((entry, index) => (
          entry ? (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleSquareClick(index)}
                  className="w-4 h-4 rounded-sm border transition-all hover:scale-110 hover:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
                  style={{
                    backgroundColor: entry.color,
                    borderColor: entry.color,
                    opacity: 0.8,
                  }}
                />
              </TooltipTrigger>
              <TooltipContent className="bg-popover text-popover-foreground border">
                <div className="space-y-2">
                  <p>{entry.name}: {entry.message}</p>
                  {entry.drawingCommands && entry.drawingCommands.length > 0 ? (
                    <DrawingReplay 
                      commands={entry.drawingCommands}
                      width={200}
                      height={150}
                      className="max-w-[200px] max-h-[150px]"
                    />
                  ) : entry.drawing ? (
                    <Image 
                      src={entry.drawing} 
                      alt="Drawing"
                      width={200}
                      height={150}
                      className="max-w-[200px] max-h-[150px] rounded border object-contain"
                    />
                  ) : null}
                </div>
              </TooltipContent>
            </Tooltip>
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
