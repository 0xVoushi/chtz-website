import React, { useCallback, useImperativeHandle, useMemo, useRef } from "react"
import { v4 as uuidv4 } from "uuid"

import { cn } from "@/lib/utils"
import { useDimensions } from "@/components/hooks/use-debounced-dimensions"

interface PixelTrailProps {
  pixelSize: number // px
  fadeDuration?: number // ms
  delay?: number // ms
  className?: string
  pixelClassName?: string
}

export interface PixelTrailHandle {
  handleMove: (clientX: number, clientY: number) => void
}

const PixelTrail = React.forwardRef<PixelTrailHandle, PixelTrailProps>(
  (
    {
      pixelSize = 20,
      fadeDuration = 500,
      delay = 0,
      className,
      pixelClassName,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const dimensions = useDimensions(containerRef)
    const trailId = useRef(uuidv4())

    const handleMove = useCallback(
      (clientX: number, clientY: number) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.floor((clientX - rect.left) / pixelSize)
        const y = Math.floor((clientY - rect.top) / pixelSize)
        const pixelElement = document.getElementById(
          `${trailId.current}-pixel-${x}-${y}`
        )
        if (pixelElement) {
          const animatePixel = (pixelElement as any).__animatePixel
          if (animatePixel) animatePixel()
        }
      },
      [pixelSize]
    )

    useImperativeHandle(ref, () => ({ handleMove }), [handleMove])

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => handleMove(e.clientX, e.clientY),
      [handleMove]
    )

    const columns = useMemo(
      () => Math.ceil(dimensions.width / pixelSize),
      [dimensions.width, pixelSize]
    )
    const rows = useMemo(
      () => Math.ceil(dimensions.height / pixelSize),
      [dimensions.height, pixelSize]
    )

    return (
      <div
        ref={containerRef}
        className={cn(
          "absolute inset-0 w-full h-full pointer-events-none",
          className
        )}
        onMouseMove={handleMouseMove}
      >
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <PixelDot
                key={`${colIndex}-${rowIndex}`}
                id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
                size={pixelSize}
                fadeDuration={fadeDuration}
                delay={delay}
                className={pixelClassName}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
)

PixelTrail.displayName = "PixelTrail"

interface PixelDotProps {
  id: string
  size: number
  fadeDuration: number
  delay: number
  className?: string
}

const PixelDot: React.FC<PixelDotProps> = React.memo(
  ({ id, size, fadeDuration, delay, className }) => {
    const pixelRef = useRef<HTMLDivElement>(null)

    const animatePixel = useCallback(() => {
      const el = pixelRef.current
      if (!el) return
      el.style.transition = "none"
      el.style.opacity = "1"
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!pixelRef.current) return
          el.style.transition = `opacity ${fadeDuration}ms ease ${delay}ms`
          el.style.opacity = "0"
        })
      })
    }, [fadeDuration, delay])

    const ref = useCallback(
      (node: HTMLDivElement | null) => {
        (pixelRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        if (node) {
          ;(node as any).__animatePixel = animatePixel
        }
      },
      [animatePixel]
    )

    return (
      <div
        id={id}
        ref={ref}
        className={cn(className)}
        style={{ width: `${size}px`, height: `${size}px`, opacity: 0 }}
      />
    )
  }
)

PixelDot.displayName = "PixelDot"
export { PixelTrail }
