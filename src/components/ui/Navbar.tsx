'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Templates', href: '/templates' },
  { name: 'Studio', href: '/studio' },
  { name: 'Docs', href: '/docs' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-brand text-white px-4 py-2 rounded-lg font-medium"
      >
        Skip to content
      </a>
      
      <nav className="sticky top-0 z-40 w-full glass border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              OG Studio
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    pathname === item.href
                      ? 'text-brand bg-brand/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/sudo-init-do/og-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="inline-flex items-center justify-center gap-2 h-8 px-3 text-sm rounded-xl font-medium border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 active:scale-[0.98] transition-all duration-200 ease-out"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              GitHub
            </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="outline" size="sm" aria-label="Menu">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
