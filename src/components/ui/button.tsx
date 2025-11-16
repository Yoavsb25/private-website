import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md active:scale-95': variant === 'default',
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-sm active:scale-95': variant === 'outline',
        'hover:bg-accent hover:text-accent-foreground active:scale-95': variant === 'ghost',
        'h-10 px-4 py-2': size === 'default',
        'h-9 px-3': size === 'sm',
        'h-11 px-8': size === 'lg',
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
      <button
        className={baseClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }

