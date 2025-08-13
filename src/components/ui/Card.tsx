import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 ease-out hover:translate-y-[-2px] hover:ring-1 hover:ring-brand/30 hover:shadow-lg hover:shadow-brand/10',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
