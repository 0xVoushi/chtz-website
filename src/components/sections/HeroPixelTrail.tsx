'use client'

import { useEffect, useRef } from "react"
import { useScreenSize } from "@/hooks/use-screen-size"
import { PixelTrail, PixelTrailHandle } from "@/components/ui/pixel-trail"

export function HeroPixelTrail() {
  const screenSize = useScreenSize()
  const trailRef = useRef<PixelTrailHandle>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      trailRef.current?.handleMove(e.clientX, e.clientY)
    }
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-20 pointer-events-none"
    >
      <PixelTrail
        ref={trailRef}
        pixelSize={screenSize.lessThan("md") ? 24 : 32}
        fadeDuration={600}
        delay={0}
        pixelClassName="bg-purple-brand/60"
      />
    </div>
  )
}
