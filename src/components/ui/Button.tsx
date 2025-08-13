import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          // Variant styles
          {
            'bg-brand text-white hover:bg-brand/90 active:scale-[0.98] shadow-lg hover:shadow-brand/25': variant === 'primary',
            'border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 active:scale-[0.98]': variant === 'outline',
          },
          // Size styles
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-sm': size === 'md',
            'h-12 px-6 text-base': size === 'lg',
          },
          // Disabled styles
          {
            'opacity-50 cursor-not-allowed hover:bg-brand hover:border-white/20 hover:shadow-none active:scale-100': disabled,
          },
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
