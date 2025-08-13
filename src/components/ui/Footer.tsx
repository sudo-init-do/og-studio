import Link from 'next/link'

const footerLinks = {
  Product: [
    { name: 'Templates', href: '/templates' },
    { name: 'Studio', href: '/studio' },
    { name: 'API Docs', href: '/docs' },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'GitHub', href: 'https://github.com/sudo-init-do/og-studio' },
    { name: 'Issues', href: 'https://github.com/sudo-init-do/og-studio/issues' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/2">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              OG Studio
            </div>
            <p className="text-sm text-foreground/70 max-w-xs">
              Design beautiful social preview images and generate them on the fly with a simple API.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/sudo-init-do/og-studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/og-studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Twitter/X"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} OG Studio. Open source and free to use.
          </p>
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
