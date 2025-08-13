import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface FieldProps {
  label: string
  htmlFor?: string
  helperText?: string
  error?: string
  children: React.ReactNode
  className?: string
}

const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ label, htmlFor, helperText, error, children, className }, ref) => {
    return (
      <div className={cn('grid gap-2', className)} ref={ref}>
        <label 
          htmlFor={htmlFor}
          className="text-sm font-medium text-foreground/90"
        >
          {label}
        </label>
        {children}
        {(helperText || error) && (
          <p className={cn(
            'text-xs',
            error ? 'text-red-400' : 'text-foreground/60'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Field.displayName = 'Field'

// Input component
type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex h-10 w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm transition-colors',
          'placeholder:text-foreground/40',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

// Select component
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          'flex h-10 w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)

Select.displayName = 'Select'

// Textarea component
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-20 w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm transition-colors',
          'placeholder:text-foreground/40',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Field, Input, Select, Textarea }
