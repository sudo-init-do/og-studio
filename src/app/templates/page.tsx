import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

const templates = [
  {
    id: 'launch',
    name: 'Product Launch',
    description: 'Perfect for announcing new products, features, or releases. Uses vibrant colors and modern design.',
    category: 'Business',
    preview: {
      title: 'Product Launch',
      subtitle: 'Announcing our new feature',
      theme: 'dark',
      brand: '#2EA3FF',
      bg: 'radial',
      radius: 28,
    },
    params: 'title=Product%20Launch&subtitle=Announcing%20our%20new%20feature&theme=dark&bg=radial&radius=28',
  },
  {
    id: 'blog',
    name: 'Blog Post',
    description: 'Clean and readable design for blog posts and articles. Optimized for readability and engagement.',
    category: 'Content',
    preview: {
      title: 'How to Build Fast APIs',
      subtitle: 'Performance tips and best practices',
      theme: 'light',
      brand: '#2EA3FF',
      bg: '',
      radius: 20,
    },
    params: 'title=How%20to%20Build%20Fast%20APIs&subtitle=Performance%20tips%20and%20best%20practices&theme=light&bg=&radius=20',
  },
  {
    id: 'speaker',
    name: 'Speaker Profile',
    description: 'Showcase speakers, team members, or personal profiles. Professional and approachable design.',
    category: 'Personal',
    preview: {
      title: 'John Doe',
      subtitle: 'Senior Developer at Tech Corp',
      theme: 'dark',
      brand: '#E11D48',
      bg: 'radial',
      radius: 32,
    },
    params: 'title=John%20Doe&subtitle=Senior%20Developer%20at%20Tech%20Corp&theme=dark&brand=%23E11D48&bg=radial&radius=32',
  },
  {
    id: 'product',
    name: 'Product Showcase',
    description: 'Highlight products, services, or offerings. Professional layout with emphasis on value proposition.',
    category: 'Business',
    preview: {
      title: 'OG Studio Pro',
      subtitle: 'Advanced features for teams',
      theme: 'light',
      brand: '#06B6D4',
      bg: '',
      radius: 24,
    },
    params: 'title=OG%20Studio%20Pro&subtitle=Advanced%20features%20for%20teams&theme=light&brand=%2306B6D4&bg=&radius=24',
  },
  {
    id: 'event',
    name: 'Event Announcement',
    description: 'Promote events, webinars, and conferences. Eye-catching design to drive attendance.',
    category: 'Events',
    preview: {
      title: 'React Conference 2024',
      subtitle: 'Join us for the biggest React event',
      theme: 'dark',
      brand: '#8B5CF6',
      bg: 'radial',
      radius: 16,
    },
    params: 'title=React%20Conference%202024&subtitle=Join%20us%20for%20the%20biggest%20React%20event&theme=dark&brand=%238B5CF6&bg=radial&radius=16',
  },
  {
    id: 'testimonial',
    name: 'Customer Testimonial',
    description: 'Share customer feedback and success stories. Builds trust and credibility.',
    category: 'Social Proof',
    preview: {
      title: '"Game-changing platform"',
      subtitle: 'Sarah Chen, CEO at StartupCo',
      theme: 'light',
      brand: '#F59E0B',
      bg: '',
      radius: 28,
    },
    params: 'title=%22Game-changing%20platform%22&subtitle=Sarah%20Chen%2C%20CEO%20at%20StartupCo&theme=light&brand=%23F59E0B&bg=&radius=28',
  },
  {
    id: 'update',
    name: 'Update Announcement',
    description: 'Share news, updates, and important announcements. Clear and informative design.',
    category: 'Updates',
    preview: {
      title: 'Platform Update v2.0',
      subtitle: 'New features and improvements',
      theme: 'dark',
      brand: '#10B981',
      bg: 'radial',
      radius: 20,
    },
    params: 'title=Platform%20Update%20v2.0&subtitle=New%20features%20and%20improvements&theme=dark&brand=%2310B981&bg=radial&radius=20',
  },
  {
    id: 'course',
    name: 'Online Course',
    description: 'Promote educational content, courses, and tutorials. Professional and educational design.',
    category: 'Education',
    preview: {
      title: 'Master React in 30 Days',
      subtitle: 'Complete guide from beginner to expert',
      theme: 'light',
      brand: '#3B82F6',
      bg: '',
      radius: 24,
    },
    params: 'title=Master%20React%20in%2030%20Days&subtitle=Complete%20guide%20from%20beginner%20to%20expert&theme=light&brand=%233B82F6&bg=&radius=24',
  },
]

const categories = ['All', 'Business', 'Content', 'Personal', 'Events', 'Social Proof', 'Updates', 'Education']

export default function TemplatesPage() {
  return (
    <Section 
      eyebrow="Templates" 
      title="Choose from our collection"
      description="Professional OG image templates ready to use. Simply click to customize in the studio."
    >
      {/* Categories filter - for future enhancement */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === 'All'
                ? 'bg-brand/10 text-brand border border-brand/20'
                : 'bg-white/5 text-foreground/70 border border-white/10 hover:bg-white/10 hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {templates.map((template) => (
          <Card key={template.id} className="group p-4 space-y-4 hover:scale-[1.02]">
            {/* Preview image */}
            <div className="aspect-[1.91/1] rounded-lg overflow-hidden bg-black/20 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={`/api/og?${template.params}`}
                alt={`${template.name} template preview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
            </div>

            {/* Template info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{template.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand border border-brand/20">
                  {template.category}
                </span>
              </div>
              
              <p className="text-sm text-foreground/70 line-clamp-2">
                {template.description}
              </p>

              {/* Preview details */}
              <div className="space-y-1 text-xs text-foreground/60">
                <div>Theme: {template.preview.theme}</div>
                <div>Background: {template.preview.bg || 'Solid'}</div>
                <div>Radius: {template.preview.radius}px</div>
              </div>

              {/* Use button */}
              <Link 
                href={`/studio?${template.params}`}
                className="inline-flex items-center justify-center w-full gap-2 h-9 px-4 text-sm rounded-lg font-medium bg-brand text-white hover:bg-brand/90 active:scale-[0.98] transition-all duration-200 ease-out"
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

      {/* Call to action */}
      <div className="text-center space-y-4 pt-8">
        <h3 className="text-xl font-semibold">Need a custom template?</h3>
        <p className="text-foreground/70 max-w-md mx-auto">
          Start with a blank canvas in the studio and create your own unique design.
        </p>
        <Link 
          href="/studio"
          className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm rounded-xl font-medium border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 active:scale-[0.98] transition-all duration-200 ease-out"
        >
          Start from Scratch
        </Link>
      </div>
    </Section>
  )
}
