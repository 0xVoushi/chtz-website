import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-white relative w-full rounded-[1.2rem] p-[0.8rem] shadow-sm border border-[--color-border-light]',
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
        'bg-[--color-surface-frame] relative mb-[1.6rem] rounded-[1.2rem] border border-[--color-border-light] p-[2.4rem]',
        className
      )}
      {...props}
    >
      {glassEffect && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[20rem] rounded-[inherit]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, transparent 100%)',
          }}
        />
      )}
      {children}
    </div>
  )
}

function Plan({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('mb-[2.4rem] flex items-center justify-between', className)} {...props} />
  )
}

function PlanName({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'text-[--color-muted] flex items-center gap-[0.8rem] text-[1.4rem] font-medium',
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
        'border border-[--color-navy]/20 text-[--color-navy]/70 rounded-full px-[0.8rem] py-[0.2rem] text-[1.2rem]',
        className
      )}
      {...props}
    />
  )
}

function Price({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mb-[1.2rem] flex items-end gap-[0.4rem]', className)} {...props} />
}

function MainPrice({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-[2.8rem] font-extrabold tracking-tight text-[--color-near-black]', className)}
      {...props}
    />
  )
}

function Period({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={cn('text-[--color-muted] pb-[0.4rem] text-[1.4rem]', className)} {...props} />
  )
}

function Description({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-[--color-muted] text-[1.2rem] mb-[1.2rem]', className)} {...props} />
  )
}

function Body({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('space-y-[1.6rem] p-[1.2rem]', className)} {...props} />
}

function List({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('space-y-[1rem]', className)} {...props} />
}

function ListItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('text-[--color-muted] flex items-start gap-[1rem] text-[1.4rem]', className)}
      {...props}
    />
  )
}

export { Card, Header, Plan, PlanName, Badge, Price, MainPrice, Period, Description, Body, List, ListItem }
