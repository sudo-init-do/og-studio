import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

const features = [
  {
    title: 'Edit',
    description: 'Customize your OG image with our intuitive visual editor. Adjust colors, text, layout, and more.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m18.5 2.5 3 3L12 15l-4 1 1-4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Preview',
    description: 'See your changes instantly with real-time preview. What you see is exactly what you get.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: 'Copy URL',
    description: 'Get your API endpoint URL instantly. Integrate with any platform or framework in seconds.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

const templates = [
  {
    name: 'Launch',
    title: 'SaaS Platform Launch',
    subtitle: 'Next-gen productivity tools',
    params: 'template=launch&title=SaaS%20Platform%20Launch&subtitle=Next-gen%20productivity%20tools&theme=dark&brand=%236366f1&bg=radial&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1559526324-4b87b5e36e44%3Fw%3D400%26q%3D80'
  },
  {
    name: 'Blog',
    title: 'Advanced React Patterns',
    subtitle: 'Hooks, Context, and Performance',
    params: 'template=blog&title=Advanced%20React%20Patterns&subtitle=Hooks%2C%20Context%2C%20and%20Performance&theme=light&brand=%230891b2&bg=&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1461749280684-dccba630e2f6%3Fw%3D400%26q%3D80'
  },
  {
    name: 'Speaker',
    title: 'Sarah Chen',
    subtitle: 'Principal Engineer at TechCorp',
    params: 'template=speaker&title=Sarah%20Chen&subtitle=Principal%20Engineer%20at%20TechCorp&theme=dark&brand=%23dc2626&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494790108755-2616b612b786%3Fw%3D400%26q%3D80'
  },
  {
    name: 'Product',
    title: 'AirPods Pro Max',
    subtitle: 'Studio-quality sound',
    params: 'template=product&title=AirPods%20Pro%20Max&subtitle=Studio-quality%20sound&theme=dark&brand=%237c3aed&bg=radial&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606220945770-b5b6c2c55bf1%3Fw%3D400%26q%3D80'
  }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Enhanced background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-brand/20 rounded-full blur-[80px] animate-pulse delay-1000" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container py-32 md:py-40 text-center space-y-12">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm backdrop-blur-sm shadow-lg">
              <span className="inline-block h-2 w-2 rounded-full bg-brand shadow-lg shadow-brand/50 animate-pulse" />
              <span className="eyebrow font-medium">Production Ready</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                OG Studio
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-2xl md:text-3xl text-foreground/70 leading-relaxed font-light">
              Create stunning social preview images with our <span className="text-brand font-medium">visual editor</span> and 
              <span className="text-brand font-medium"> lightning-fast API</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Zero dependencies</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Edge Runtime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/studio"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 text-lg rounded-xl font-semibold bg-brand text-white hover:bg-brand/90 active:scale-[0.98] shadow-xl hover:shadow-brand/25 transition-all duration-200 ease-out"
            >
              Open Studio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link 
              href="/templates"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg rounded-xl font-semibold border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all duration-200 ease-out backdrop-blur-sm"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section 
        eyebrow="How it works" 
        title="From idea to image in seconds"
        description="Professional social previews without the hassle. No design skills required."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="relative p-8 text-center space-y-6 group hover:scale-[1.02] transition-transform">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                  {feature.icon}
                </div>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand/20 text-brand text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-foreground/70 mt-3 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Templates Preview */}
      <Section 
        eyebrow="Templates" 
        title="Ready-to-use templates"
        description="Start with our professionally designed templates and customize them to match your brand"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <Card key={template.name} className="group p-5 space-y-4 hover:scale-[1.02] transition-all duration-200">
              <div className="aspect-[1.91/1] rounded-lg overflow-hidden bg-black/20 border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/api/og?${template.params}`}
                  alt={`${template.name} template preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{template.name}</h3>
                  <p className="text-sm text-foreground/70 line-clamp-2">
                    {template.title}
                  </p>
                </div>
                <Link 
                  href={`/studio?${template.params}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand/80 transition-colors group"
                >
                  Use template
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center pt-4">
          <Link 
            href="/templates"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base rounded-xl font-medium border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all duration-200 ease-out backdrop-blur-sm"
          >
            View All Templates
          </Link>
        </div>
      </Section>

      {/* API Features */}
      <Section 
        eyebrow="Developer Experience" 
        title="Built for developers"
        description="Integrate with any framework or platform using our simple REST API"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold">Edge Runtime</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Generate images at the edge for ultra-fast response times worldwide
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="font-semibold">URL Parameters</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Simple URL-based API. No authentication or complex setup required
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="font-semibold">Smart Caching</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Intelligent caching ensures fast load times and reduced bandwidth
            </p>
          </Card>
        </div>
      </Section>

      {/* Trusted by */}
      <Section>
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-foreground/60 eyebrow">Open Source</p>
            <h2 className="text-2xl font-semibold">Free forever, built in public</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              OG Studio is completely open source and free to use. Star us on GitHub to support the project
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://github.com/sudo-init-do/og-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Star on GitHub</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <div className="flex items-center gap-3 text-sm text-foreground/60">
              <span>MIT License</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Next.js 15</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
