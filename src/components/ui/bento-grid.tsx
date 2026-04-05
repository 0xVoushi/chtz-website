import { cn } from '@/lib/utils'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

interface BentoCardProps {
  id?: string
  children: React.ReactNode
  className?: string
}

interface BentoTitleProps {
  children?: React.ReactNode
  className?: string
}

interface BentoDescriptionProps {
  children?: React.ReactNode
  className?: string
}

interface BentoContentProps {
  children: React.ReactNode
  className?: string
}

export interface BentoFeature {
  id: string
  title?: string
  description?: string
  content?: React.ReactNode
  className?: string
}

interface BentoGridWithFeaturesProps {
  features: BentoFeature[]
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-0 rounded-xl border border-border-light',
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoCard({ id, children, className }: BentoCardProps) {
  return (
    <div
      id={id}
      className={cn(
        'relative overflow-hidden p-6 sm:p-8 border-border-light',
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoTitle({ children, className }: BentoTitleProps) {
  if (!children) return null
  return (
    <h3
      className={cn(
        'text-left text-lg font-semibold tracking-tight text-near-black',
        className
      )}
    >
      {children}
    </h3>
  )
}

export function BentoDescription({ children, className }: BentoDescriptionProps) {
  if (!children) return null
  return (
    <p
      className={cn(
        'text-left text-sm font-normal text-muted mx-0 my-2',
        className
      )}
    >
      {children}
    </p>
  )
}

export function BentoContent({ children, className }: BentoContentProps) {
  return <div className={cn('h-full w-full', className)}>{children}</div>
}

export function BentoGridWithFeatures({ features, className }: BentoGridWithFeaturesProps) {
  return (
    <BentoGrid className={className}>
      {features.map((feature) => (
        <BentoCard key={feature.id} id={feature.id} className={feature.className}>
          <BentoTitle>{feature.title}</BentoTitle>
          <BentoDescription>{feature.description}</BentoDescription>
          {feature.content && <BentoContent>{feature.content}</BentoContent>}
        </BentoCard>
      ))}
    </BentoGrid>
  )
}
