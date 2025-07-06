"use client"

import * as React from "react"

interface DrawingCommand {
  type: 'move' | 'line' | 'stroke-start' | 'stroke-end'
  x: number
  y: number
  timestamp: number
  color: string
  size: number
}

interface DrawingReplayProps {
  commands: DrawingCommand[]
  width?: number
  height?: number
  className?: string
  playbackSpeed?: number
}

export default function DrawingReplay({ 
  commands, 
  width = 200, 
  height = 150, 
  className = "",
  playbackSpeed = 2
}: DrawingReplayProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const animationRef = React.useRef<number | null>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)

  const maxTime = React.useMemo(() => {
    if (commands.length === 0) return 0
    return Math.max(...commands.map(cmd => cmd.timestamp))
  }, [commands])

  const clearCanvas = React.useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const drawFrame = React.useCallback((time: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    // Clear canvas
    clearCanvas()
    
    // Get commands up to current time
    const commandsToRender = commands.filter(cmd => cmd.timestamp <= time)
    
    // Group commands by strokes
    const strokes: DrawingCommand[][] = []
    let currentStroke: DrawingCommand[] = []
    
    for (const cmd of commandsToRender) {
      if (cmd.type === 'stroke-start') {
        currentStroke = [cmd]
      } else if (cmd.type === 'stroke-end') {
        if (currentStroke.length > 0) {
          strokes.push([...currentStroke])
          currentStroke = []
        }
      } else if (cmd.type === 'move' || cmd.type === 'line') {
        currentStroke.push(cmd)
      }
    }
    
    // Add incomplete stroke if it exists
    if (currentStroke.length > 0) {
      strokes.push(currentStroke)
    }
    
    // Render each stroke
    for (const stroke of strokes) {
      if (stroke.length === 0) continue
      
      const firstCommand = stroke[0]
      ctx.strokeStyle = firstCommand.color
      ctx.lineWidth = firstCommand.size
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      
      ctx.beginPath()
      
      // Scale coordinates to fit canvas
      const scaleX = canvas.width / 400  // Original canvas width
      const scaleY = canvas.height / 250  // Original canvas height
      
      for (let i = 0; i < stroke.length; i++) {
        const cmd = stroke[i]
        const x = cmd.x * scaleX
        const y = cmd.y * scaleY
        
        if (i === 0 || cmd.type === 'move') {
          ctx.moveTo(x, y)
        } else if (cmd.type === 'line') {
          ctx.lineTo(x, y)
        }
      }
      
      ctx.stroke()
    }
  }, [commands, clearCanvas])

  const startPlayback = React.useCallback(() => {
    if (commands.length === 0) return
    
    setIsPlaying(true)
    setCurrentTime(0)
    
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const playbackTime = elapsed * playbackSpeed
      
      if (playbackTime >= maxTime) {
        // Animation complete
        setCurrentTime(maxTime)
        drawFrame(maxTime)
        setIsPlaying(false)
        return
      }
      
      setCurrentTime(playbackTime)
      drawFrame(playbackTime)
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [commands, maxTime, playbackSpeed, drawFrame])

  React.useEffect(() => {
    clearCanvas()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [clearCanvas])

  React.useEffect(() => {
    // Start playback with a slight delay for better UX
    const delay = setTimeout(() => {
      startPlayback()
    }, 100)
    
    return () => {
      clearTimeout(delay)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [startPlayback, commands])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`rounded border bg-white ${className}`}
    />
  )
}