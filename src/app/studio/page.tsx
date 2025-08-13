'use client'

import { useMemo, useState, useDeferredValue, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Field, Input, Select } from '@/components/ui/Field'
import { Section } from '@/components/ui/Section'
import { useToast } from '@/components/ui/Toast'

type State = {
  title: string
  subtitle: string
  theme: 'dark' | 'light'
  brand: string
  bg: '' | 'radial' | string
  radius: number
  logo: string
  template: string
}

const templates = {
  launch: {
    title: 'Product Launch',
    subtitle: 'Announcing our new feature',
    theme: 'dark' as const,
    brand: '#2EA3FF',
    bg: 'radial',
    radius: 28,
    logo: '',
  },
  blog: {
    title: 'How to Build Fast APIs',
    subtitle: 'Performance tips and best practices',
    theme: 'light' as const,
    brand: '#2EA3FF',
    bg: '',
    radius: 20,
    logo: '',
  },
  speaker: {
    title: 'John Doe',
    subtitle: 'Senior Developer at Tech Corp',
    theme: 'dark' as const,
    brand: '#E11D48',
    bg: 'radial',
    radius: 32,
    logo: '',
  },
  product: {
    title: 'OG Studio Pro',
    subtitle: 'Advanced features for teams',
    theme: 'light' as const,
    brand: '#06B6D4',
    bg: '',
    radius: 24,
    logo: '',
  },
}

export default function StudioPage() {
  const [s, setS] = useState<State>({
    title: 'Shipping fast with Next.js',
    subtitle: 'Beautiful social cards, instantly.',
    theme: 'dark',
    brand: '#2EA3FF',
    bg: 'radial',
    radius: 28,
    logo: '',
    template: 'custom',
  })

  const { toast } = useToast()
  const deferred = useDeferredValue(s)

  // Load state from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlState: Partial<State> = {}
    
    if (params.get('title')) urlState.title = params.get('title')!
    if (params.get('subtitle')) urlState.subtitle = params.get('subtitle')!
    if (params.get('theme')) urlState.theme = params.get('theme') as 'dark' | 'light'
    if (params.get('brand')) urlState.brand = params.get('brand')!
    if (params.get('bg')) urlState.bg = params.get('bg')!
    if (params.get('radius')) urlState.radius = Number(params.get('radius'))
    if (params.get('logo')) urlState.logo = params.get('logo')!
    
    if (Object.keys(urlState).length > 0) {
      setS(prev => ({ ...prev, ...urlState }))
    }
  }, [])

  // Persist state to URL
  useEffect(() => {
    const q = new URLSearchParams()
    q.set('title', s.title)
    q.set('subtitle', s.subtitle)
    q.set('theme', s.theme)
    q.set('brand', s.brand)
    if (s.bg) q.set('bg', s.bg)
    q.set('radius', String(s.radius))
    if (s.logo) q.set('logo', s.logo)
    
    const newUrl = `${window.location.pathname}?${q.toString()}`
    window.history.replaceState({}, '', newUrl)
  }, [s])

  const qs = useMemo(() => {
    const q = new URLSearchParams()
    q.set('title', deferred.title)
    q.set('subtitle', deferred.subtitle)
    q.set('theme', deferred.theme)
    q.set('brand', deferred.brand)
    if (deferred.bg) q.set('bg', deferred.bg)
    q.set('radius', String(deferred.radius))
    if (deferred.logo) q.set('logo', deferred.logo)
    return q.toString()
  }, [deferred])

  const url = `/api/og?${qs}`

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(window.location.origin + url)
      toast.success('Image URL copied to clipboard!')
    } catch {
      toast.error('Failed to copy URL')
    }
  }

  async function copyMetaTags() {
    const metaTags = `<meta property="og:image" content="${window.location.origin}${url}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="${window.location.origin}${url}" />
<meta name="twitter:card" content="summary_large_image" />`
    
    try {
      await navigator.clipboard.writeText(metaTags)
      toast.success('Meta tags copied to clipboard!')
    } catch {
      toast.error('Failed to copy meta tags')
    }
  }

  async function downloadPng() {
    try {
      const res = await fetch(url)
      const blob = await res.blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = 'og-image.png'
      a.click()
      URL.revokeObjectURL(a.href)
      toast.success('Image downloaded!')
    } catch {
      toast.error('Failed to download image')
    }
  }

  function handleTemplateChange(templateKey: string) {
    if (templateKey === 'custom') {
      setS(prev => ({ ...prev, template: templateKey }))
      return
    }
    
    const template = templates[templateKey as keyof typeof templates]
    if (template) {
      setS(prev => ({ ...prev, ...template, template: templateKey }))
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        setS(prev => ({ ...prev, logo: dataUrl }))
        toast.success('Logo uploaded for preview!')
      }
      reader.readAsDataURL(file)
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  return (
    <Section title="OG Studio" description="Design beautiful social preview images">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Controls */}
        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Customize</h2>
            <div className="flex gap-2">
              <Button onClick={copyUrl} variant="outline" size="sm">
                Copy URL
              </Button>
              <Button onClick={copyMetaTags} variant="outline" size="sm">
                Copy Meta Tags
              </Button>
              <Button onClick={downloadPng} size="sm">
                Download PNG
              </Button>
            </div>
          </div>

          <Field label="Template">
            <Select 
              value={s.template} 
              onChange={(e) => handleTemplateChange(e.target.value)}
            >
              <option value="custom">Custom</option>
              <option value="launch">Launch</option>
              <option value="blog">Blog</option>
              <option value="speaker">Speaker</option>
              <option value="product">Product</option>
            </Select>
          </Field>

          <Field label="Title" htmlFor="title">
            <Input
              id="title"
              value={s.title}
              onChange={(e) => setS({ ...s, title: e.target.value })}
              maxLength={120}
              placeholder="Enter your title..."
            />
          </Field>

          <Field label="Subtitle" htmlFor="subtitle">
            <Input
              id="subtitle"
              value={s.subtitle}
              onChange={(e) => setS({ ...s, subtitle: e.target.value })}
              maxLength={160}
              placeholder="Enter your subtitle..."
            />
          </Field>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Theme" htmlFor="theme">
              <Select
                id="theme"
                value={s.theme}
                onChange={(e) => setS({ ...s, theme: e.target.value as State['theme'] })}
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </Select>
            </Field>

            <Field label="Brand Color" htmlFor="brand">
              <div className="flex gap-2">
                <input
                  id="brand"
                  type="color"
                  className="h-10 w-16 rounded-lg border border-white/20 bg-transparent cursor-pointer"
                  value={s.brand}
                  onChange={(e) => setS({ ...s, brand: e.target.value })}
                />
                <Input
                  value={s.brand}
                  onChange={(e) => setS({ ...s, brand: e.target.value })}
                  placeholder="#2EA3FF"
                  className="flex-1"
                />
              </div>
            </Field>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Background" htmlFor="background">
              <Select
                id="background"
                value={s.bg}
                onChange={(e) => setS({ ...s, bg: e.target.value })}
              >
                <option value="radial">Radial glow</option>
                <option value="">Solid</option>
              </Select>
            </Field>

            <Field label={`Corner Radius: ${s.radius}px`} htmlFor="radius">
              <input
                id="radius"
                type="range"
                min={0}
                max={64}
                value={s.radius}
                onChange={(e) => setS({ ...s, radius: Number(e.target.value) })}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
            </Field>
          </div>

          <Field 
            label="Logo URL" 
            htmlFor="logo"
            helperText="Optional. You can also drag and drop an image file below."
          >
            <div
              className="space-y-2"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <Input
                id="logo"
                value={s.logo}
                onChange={(e) => setS({ ...s, logo: e.target.value })}
                placeholder="https://example.com/logo.png"
              />
              <div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center text-sm text-foreground/60 hover:border-white/30 transition-colors">
                Drag and drop an image here for local preview
              </div>
            </div>
          </Field>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-foreground/60 break-all">
              <strong>API Endpoint:</strong> <code className="bg-white/5 px-1 py-0.5 rounded">{url}</code>
            </p>
          </div>
        </Card>

        {/* Preview */}
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Preview</h2>
            <div className="flex justify-center rounded-xl bg-black/5 p-6 dark:bg-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt="OG image preview"
                width={600}
                height={315}
                className="rounded-lg border border-white/10 shadow-lg"
              />
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm text-foreground/70">
                Preview size: 600×315 (actual size: 1200×630)
              </p>
              <p className="text-xs text-foreground/60">
                Changes are reflected in real-time
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
