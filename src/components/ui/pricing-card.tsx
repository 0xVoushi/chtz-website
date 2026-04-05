import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-white relative w-full rounded-xl p-1.5 shadow-sm border border-[var(--color-border-light)]',
        className
      )}
      {...props}
    />
  )
}

function Header({
  className,
  children,
  glassEffect = true,
  ...props
}: React.ComponentProps<'div'> & { glassEffect?: boolean }) {
  return (
    <div
      className={cn(
        'bg-[var(--color-surface-frame)] relative mb-4 rounded-xl border border-[var(--color-border-light)] p-4',
        className
      )}
      {...props}
    >
      {glassEffect && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 rounded-[inherit]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 40%, rgba(0,0,0,0) 100%)',
          }}
        />
      )}
      {children}
    </div>
  )
}

function Plan({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('mb-6 flex items-center justify-between', className)} {...props} />
  )
}

function PlanName({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-[var(--color-muted)] flex items-center gap-2 text-sm font-medium',
        className
      )}
      {...props}
    />
  )
}

function Badge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'border border-[var(--color-navy)]/20 text-[var(--color-navy)]/70 rounded-full px-2 py-0.5 text-xs',
        className
      )}
      {...props}
    />
  )
}

function Price({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mb-3 flex items-end gap-1', className)} {...props} />
}

function MainPrice({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-3xl font-extrabold tracking-tight text-[var(--color-near-black)]', className)}
      {...props}
    />
  )
}

function Period({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={cn('text-[var(--color-muted)] pb-1 text-sm', className)} {...props} />
  )
}

function Description({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-[var(--color-muted)] text-xs mb-3', className)} {...props} />
  )
}

function Body({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('space-y-4 p-3', className)} {...props} />
}

function List({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('space-y-2.5', className)} {...props} />
}

function ListItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('text-[var(--color-muted)] flex items-start gap-2.5 text-sm', className)}
      {...props}
    />
  )
}

export { Card, Header, Plan, PlanName, Badge, Price, MainPrice, Period, Description, Body, List, ListItem }
