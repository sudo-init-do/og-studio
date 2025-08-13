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
    title: 'Product Launch',
    subtitle: 'Announcing our new feature',
    params: 'title=Product%20Launch&subtitle=Announcing%20our%20new%20feature&theme=dark&bg=radial'
  },
  {
    name: 'Blog',
    title: 'How to Build Fast APIs',
    subtitle: 'Performance tips and best practices',
    params: 'title=How%20to%20Build%20Fast%20APIs&subtitle=Performance%20tips%20and%20best%20practices&theme=light&bg='
  },
  {
    name: 'Speaker',
    title: 'John Doe',
    subtitle: 'Senior Developer at Tech Corp',
    params: 'title=John%20Doe&subtitle=Senior%20Developer%20at%20Tech%20Corp&theme=dark&brand=%23E11D48'
  },
  {
    name: 'Product',
    title: 'OG Studio Pro',
    subtitle: 'Advanced features for teams',
    params: 'title=OG%20Studio%20Pro&subtitle=Advanced%20features%20for%20teams&theme=light&brand=%2306B6D4'
  }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container py-24 md:py-32 text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-brand shadow-lg shadow-brand/50" />
              <span className="eyebrow">New</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text">
              OG Studio
            </h1>
            
            <p className="mx-auto max-w-2xl text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Design beautiful social preview images and generate them on the fly with a simple API.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/studio"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base rounded-xl font-medium bg-brand text-white hover:bg-brand/90 active:scale-[0.98] shadow-lg hover:shadow-brand/25 transition-all duration-200 ease-out"
            >
              Open Studio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link 
              href="/templates"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base rounded-xl font-medium border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 active:scale-[0.98] transition-all duration-200 ease-out"
            >
              View Templates
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section 
        eyebrow="How it works" 
        title="Three simple steps to perfect OG images"
        description="Create professional social preview images without any design experience"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand">
                {feature.icon}
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand/20 text-brand text-sm font-medium">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-foreground/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Templates Preview */}
      <Section 
        eyebrow="Templates" 
        title="Start with a template"
        description="Choose from our collection of professionally designed templates"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <Card key={template.name} className="group p-4 space-y-4 hover:scale-[1.02]">
              <div className="aspect-[1.91/1] rounded-lg overflow-hidden bg-black/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/api/og?${template.params}`}
                  alt={`${template.name} template preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{template.name}</h3>
                <p className="text-sm text-foreground/70 line-clamp-2">
                  {template.title} — {template.subtitle}
                </p>
                <Link 
                  href={`/studio?${template.params}`}
                  className="inline-flex items-center gap-1 text-sm text-brand hover:text-brand/80 transition-colors"
                >
                  Use in Studio
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link 
            href="/templates"
            className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm rounded-xl font-medium border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 active:scale-[0.98] transition-all duration-200 ease-out"
          >
            View All Templates
          </Link>
        </div>
      </Section>

      {/* Trusted by */}
      <Section>
        <div className="text-center space-y-6">
          <p className="text-sm text-foreground/60 eyebrow">Trusted by developers</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/sudo-init-do/og-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Star on GitHub
            </a>
            <span className="text-foreground/40">•</span>
            <span className="text-foreground/60">Open source and free forever</span>
          </div>
        </div>
      </Section>
    </>
  )
}
