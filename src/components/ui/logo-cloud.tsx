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
    <div className={`relative mx-auto max-w-5xl py-6 ${className ?? ''}`}>
      <InfiniteSlider gap={48} duration={60} durationOnHover={20}>
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center">
            <img
              alt={logo.alt}
              className="pointer-events-none h-6 select-none grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              src={logo.src}
              width={logo.width ?? 'auto'}
              height={logo.height ?? 'auto'}
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
  )
}
