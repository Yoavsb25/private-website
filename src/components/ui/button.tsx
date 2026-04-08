import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-premium active:scale-[0.97]':
          variant === 'default',
        'border border-border bg-card hover:bg-accent/5 hover:border-accent/30 hover:text-accent hover:shadow-premium-sm active:scale-[0.97]':
          variant === 'outline',
        'hover:bg-accent/5 hover:text-accent active:scale-[0.97]': variant === 'ghost',
        'h-10 px-5 py-2': size === 'default',
        'h-9 px-4 text-[0.8125rem]': size === 'sm',
        'h-12 px-8 text-base': size === 'lg',
      },
      className
    )

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(baseClasses, (children as React.ReactElement).props.className),
        ref,
        ...props,
      })
    }

    return (
      <button className={baseClasses} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
