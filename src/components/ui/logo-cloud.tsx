import { cn } from '@/lib/utils'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

type LogoCloudProps = {
  logos: Logo[]
  className?: string
}

export function LogoCloud({ logos, className }: LogoCloudProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Full-width top border line */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-screen border-t border-border-light"
        aria-hidden="true"
      />
      {/* Full-width bottom border line */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-screen border-b border-border-light"
        aria-hidden="true"
      />

      {/* Slider container with gradient fade edges — efferd/logo-cloud-4 style */}
      <div className="relative mx-auto max-w-3xl bg-gradient-to-r from-bg via-transparent to-bg py-6 md:border-x md:border-border-light">
        <InfiniteSlider gap={48} duration={60} durationOnHover={20}>
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center">
              <img
                alt={logo.alt}
                className="pointer-events-none h-6 select-none grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                src={logo.src}
                width={logo.width}
                height={logo.height}
                loading="lazy"
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          blurIntensity={1}
          className="pointer-events-none absolute top-0 left-0 h-full w-[100px]"
          direction="left"
        />
        <ProgressiveBlur
          blurIntensity={1}
          className="pointer-events-none absolute top-0 right-0 h-full w-[100px]"
          direction="right"
        />
      </div>
    </div>
  )
}
