'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: string
  type: ToastType
  message: string
}

interface ToastContextType {
  toast: {
    success: (message: string) => void
    error: (message: string) => void
    info: (message: string) => void
  }
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts(prev => [...prev, { id, type, message }])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeToast(id)
    }, 5000)
  }, [removeToast])

  const toast = {
    success: (message: string) => addToast('success', message),
    error: (message: string) => addToast('error', message),
    info: (message: string) => addToast('info', message),
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onRemove={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

interface ToastItemProps {
  toast: Toast
  onRemove: () => void
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 rounded-xl border p-4 shadow-lg backdrop-blur-sm transition-all duration-200 ease-out animate-in slide-in-from-right-full',
        {
          'bg-green-500/10 border-green-500/20 text-green-400': toast.type === 'success',
          'bg-red-500/10 border-red-500/20 text-red-400': toast.type === 'error',
          'bg-blue-500/10 border-blue-500/20 text-blue-400': toast.type === 'info',
        }
      )}
    >
      <div className="flex items-center gap-2">
        <div className={cn(
          'w-2 h-2 rounded-full',
          {
            'bg-green-400': toast.type === 'success',
            'bg-red-400': toast.type === 'error',
            'bg-blue-400': toast.type === 'info',
          }
        )} />
        <p className="text-sm font-medium">{toast.message}</p>
      </div>
      <button
        onClick={onRemove}
        className="text-current/60 hover:text-current transition-colors p-1 rounded-lg hover:bg-current/10"
        aria-label="Close"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
