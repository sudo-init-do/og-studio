import Link from 'next/link'

const templates = [
  {
    id: 'launch',
    name: 'Launch',
    description: 'Perfect for product launches and announcements',
    params: 'template=launch&title=Launching%20SaaS%20Platform&subtitle=Next-gen%20productivity%20tools&theme=dark&brand=%236366f1&bg=radial&size=og&radius=16&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1559526324-4b87b5e36e44%3Fw%3D400%26q%3D80'
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'Clean layout for blog posts and articles',
    params: 'template=blog&title=Advanced%20React%20Patterns&subtitle=Hooks%2C%20Context%2C%20and%20Performance&theme=light&brand=%230891b2&bg=&size=og&radius=12&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1461749280684-dccba630e2f6%3Fw%3D400%26q%3D80'
  },
  {
    id: 'speaker',
    name: 'Speaker',
    description: 'Professional speaker and profile cards',
    params: 'template=speaker&title=Sarah%20Chen&subtitle=Principal%20Engineer%20at%20TechCorp&theme=dark&brand=%23dc2626&bg=&size=og&radius=60&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494790108755-2616b612b786%3Fw%3D400%26q%3D80'
  },
  {
    id: 'product',
    name: 'Product',
    description: 'Showcase products with emphasis and glow',
    params: 'template=product&title=AirPods%20Pro%20Max&subtitle=Studio-quality%20sound&theme=dark&brand=%237c3aed&bg=radial&size=og&radius=24&logo=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606220945770-b5b6c2c55bf1%3Fw%3D400%26q%3D80'
  }
]

export default function TemplatesPage() {
  return (
    <div className="container py-10 md:py-14 space-y-8 md:space-y-10">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-brand shadow-lg shadow-brand/50" />
          <span className="uppercase tracking-wider font-medium">Templates</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Start with a template
        </h1>
        <p className="text-xl text-foreground/70">
          Choose from our collection of professionally designed templates. Each one is optimized for social media platforms.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {templates.map((template) => (
          <div
            key={template.id}
            className="group rounded-xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur p-6 space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:translate-y-[-2px] hover:ring-1 hover:ring-brand/30 hover:shadow-lg hover:shadow-brand/10 transition-all duration-200"
          >
            {/* Preview Image */}
            <div className="aspect-[1.91/1] rounded-lg overflow-hidden bg-black/20 border border-white/10">
              <img 
                src={`/api/og?${template.params}`}
                alt={`${template.name} template preview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Template Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-foreground/70">{template.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href={`/studio?${template.params}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out h-10 px-4 text-sm bg-brand text-white hover:bg-brand/90 active:scale-[0.98] shadow-lg hover:shadow-brand/25"
                >
                  Use in Studio
                </Link>
                <Link 
                  href={`/api/og?${template.params}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out h-10 px-4 text-sm border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 active:scale-[0.98] w-full sm:w-auto"
                >
                  View Full Size
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6 pt-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Need a custom template?</h2>
          <p className="text-foreground/70">
            Use our Studio to create your own template from scratch
          </p>
        </div>
        <Link 
          href="/studio"
          className="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out h-12 px-6 text-base bg-brand text-white hover:bg-brand/90 active:scale-[0.98] shadow-lg hover:shadow-brand/25"
        >
          Open Studio
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}