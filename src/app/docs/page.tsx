import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

const examples = [
  {
    title: 'Basic Usage',
    description: 'Simple OG image with title and subtitle',
    url: '/api/og?title=Hello%20World&subtitle=My%20awesome%20project',
    code: `<meta property="og:image" content="https://yoursite.com/api/og?title=Hello%20World&subtitle=My%20awesome%20project" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://yoursite.com/api/og?title=Hello%20World&subtitle=My%20awesome%20project" />
<meta name="twitter:card" content="summary_large_image" />`,
  },
  {
    title: 'Custom Theme',
    description: 'Light theme with custom brand color',
    url: '/api/og?title=Product%20Launch&subtitle=New%20feature%20available&theme=light&brand=%2306B6D4',
    code: `<meta property="og:image" content="https://yoursite.com/api/og?title=Product%20Launch&subtitle=New%20feature%20available&theme=light&brand=%2306B6D4" />`,
  },
  {
    title: 'With Background',
    description: 'Radial gradient background effect',
    url: '/api/og?title=Amazing%20Blog%20Post&subtitle=Learn%20something%20new&bg=radial&radius=32',
    code: `<meta property="og:image" content="https://yoursite.com/api/og?title=Amazing%20Blog%20Post&subtitle=Learn%20something%20new&bg=radial&radius=32" />`,
  },
]

const parameters = [
  {
    name: 'title',
    type: 'string',
    required: false,
    default: 'OG Studio',
    description: 'Main title text (max 120 characters)',
  },
  {
    name: 'subtitle',
    type: 'string',
    required: false,
    default: 'Beautiful social cards, instantly.',
    description: 'Subtitle text (max 160 characters)',
  },
  {
    name: 'theme',
    type: "'dark' | 'light'",
    required: false,
    default: 'dark',
    description: 'Color theme for the image',
  },
  {
    name: 'brand',
    type: 'string',
    required: false,
    default: '#2EA3FF',
    description: 'Brand color in hex format',
  },
  {
    name: 'bg',
    type: "'radial' | '' | string",
    required: false,
    default: "''",
    description: "Background style. Use 'radial' for gradient or hex color",
  },
  {
    name: 'radius',
    type: 'number',
    required: false,
    default: '28',
    description: 'Border radius in pixels (0-64)',
  },
  {
    name: 'logo',
    type: 'string',
    required: false,
    default: "''",
    description: 'URL to logo image',
  },
]

export default function DocsPage() {
  return (
    <>
      <Section 
        eyebrow="Documentation" 
        title="OG Image API"
        description="Generate beautiful social preview images with a simple URL-based API"
      >
        {/* Quick Start */}
        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-bold">Quick Start</h2>
          <div className="space-y-4">
            <p className="text-foreground/70">
              Generate OG images by calling our API endpoint with query parameters. 
              The images are generated on-demand and cached for optimal performance.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Basic Example</h3>
              <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-foreground/90">
                  https://yoursite.com/api/og?title=Hello%20World&subtitle=My%20awesome%20project
                </code>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">HTML Meta Tags</h3>
              <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-foreground/90">
{`<meta property="og:image" content="https://yoursite.com/api/og?title=Hello%20World&subtitle=My%20awesome%20project" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://yoursite.com/api/og?title=Hello%20World&subtitle=My%20awesome%20project" />
<meta name="twitter:card" content="summary_large_image" />`}
                </pre>
              </div>
            </div>
          </div>
        </Card>

        {/* Parameters */}
        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-bold">API Parameters</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-semibold">Parameter</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param) => (
                  <tr key={param.name} className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <code className="bg-brand/10 text-brand px-2 py-1 rounded text-sm">
                        {param.name}
                      </code>
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground/70">
                      <code>{param.type}</code>
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground/70">
                      <code>{param.default}</code>
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground/70">
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Examples */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Examples</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {examples.map((example, index) => (
              <Card key={index} className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">{example.title}</h3>
                  <p className="text-sm text-foreground/70">{example.description}</p>
                </div>
                
                <div className="aspect-[1.91/1] rounded-lg overflow-hidden bg-black/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={example.url}
                    alt={`${example.title} example`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">HTML Code</h4>
                  <div className="bg-black/20 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-xs text-foreground/90">
                      {example.code}
                    </pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Framework Integration */}
        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-bold">Framework Integration</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Next.js</h3>
              <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-foreground/90">
{`// app/layout.tsx or pages/_app.tsx
export const metadata = {
  openGraph: {
    images: [
      {
        url: '/api/og?title=My%20Site&subtitle=Description',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: ['/api/og?title=My%20Site&subtitle=Description'],
  },
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">React</h3>
              <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-foreground/90">
{`// Using react-helmet
import { Helmet } from 'react-helmet';

function MyPage() {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/api/og?title=Page%20Title" />
        <meta name="twitter:image" content="/api/og?title=Page%20Title" />
      </Helmet>
      {/* Your content */}
    </>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </Card>

        {/* Performance */}
        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-bold">Performance & Caching</h2>
          <div className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold text-green-400">✓ Optimized</h3>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Images are cached for 24 hours</li>
                  <li>• Edge runtime for fast generation</li>
                  <li>• Stale-while-revalidate strategy</li>
                  <li>• Optimized image format (PNG)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">ℹ Best Practices</h3>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• URL encode special characters</li>
                  <li>• Keep titles under 120 characters</li>
                  <li>• Use HTTPS for logo URLs</li>
                  <li>• Test images before deploying</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Support */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Need Help?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Check out our GitHub repository for more examples, report issues, or contribute to the project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sudo-init-do/og-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm rounded-xl font-medium bg-brand text-white hover:bg-brand/90 active:scale-[0.98] transition-all duration-200 ease-out"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View on GitHub
            </a>
            <a
              href="https://github.com/sudo-init-do/og-studio/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm rounded-xl font-medium border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 active:scale-[0.98] transition-all duration-200 ease-out"
            >
              Report an Issue
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
