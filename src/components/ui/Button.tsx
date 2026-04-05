import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-orange-cta)] text-[var(--color-navy)] hover:opacity-90',
        primary:
          'bg-[var(--color-orange-cta)] text-[var(--color-navy)] hover:opacity-90',
        outline:
          'border border-[var(--color-navy)] bg-transparent text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white',
        secondary:
          'bg-[var(--color-navy)] text-white hover:opacity-90',
        ghost:
          'bg-transparent text-[var(--color-navy)] hover:bg-[var(--color-surface-frame)]',
        dark:
          'bg-[var(--color-orange-cta)] text-[var(--color-navy)] hover:opacity-90',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-5 py-2',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
    if (href) {
      return (
        <a
          className={cn(buttonVariants({ variant, size, className }))}
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
