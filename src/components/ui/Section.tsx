import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string
  title?: string
  description?: string
  children: React.ReactNode
}

export function Section({ 
  eyebrow, 
  title, 
  description, 
  children, 
  className, 
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn('container py-16 space-y-8', className)} 
      {...props}
    >
      {(eyebrow || title || description) && (
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-brand" />
              <span className="uppercase tracking-wider font-medium">{eyebrow}</span>
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
