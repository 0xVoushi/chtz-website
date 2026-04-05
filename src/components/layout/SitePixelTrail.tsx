'use client'

import { useEffect, useRef } from "react"
import { useScreenSize } from "@/hooks/use-screen-size"
import { PixelTrail, PixelTrailHandle } from "@/components/ui/pixel-trail"

export function SitePixelTrail() {
  const screenSize = useScreenSize()
  const trailRef = useRef<PixelTrailHandle>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if ((e.target as Element)?.closest('[data-no-trail]')) return
      trailRef.current?.handleMove(e.clientX, e.clientY)
    }
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] pointer-events-none"
    >
      <PixelTrail
        ref={trailRef}
        pixelSize={screenSize.lessThan("md") ? 24 : 32}
        fadeDuration={600}
        delay={0}
        pixelClassName="bg-purple-brand/50"
      />
    </div>
  )
}
