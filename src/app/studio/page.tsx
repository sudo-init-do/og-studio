'use client'
import { useMemo, useState, useDeferredValue } from 'react'

type State = {
  title: string
  subtitle: string
  theme: 'dark' | 'light'
  brand: string
  bg: '' | 'radial' | string
  radius: number
  logo: string
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
  })

  const deferred = useDeferredValue(s)
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
    await navigator.clipboard.writeText(window.location.origin + url)
    alert('Copied image URL!')
  }
  async function downloadPng() {
    const res = await fetch(url)
    const blob = await res.blob()
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'og-image.png'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  return (
    <div className="container py-10 space-y-10">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">OG Studio</h1>
        <div className="flex gap-3">
          <button onClick={copyUrl} className="rounded-lg border px-4 py-2">Copy Image URL</button>
          <button onClick={downloadPng} className="rounded-lg bg-brand px-4 py-2 text-white">Download PNG</button>
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border p-5 space-y-4">
          <div className="grid gap-2">
            <label>Title</label>
            <input className="rounded-lg border bg-transparent px-3 py-2"
                   value={s.title} onChange={(e) => setS({ ...s, title: e.target.value })} maxLength={120}/>
          </div>
          <div className="grid gap-2">
            <label>Subtitle</label>
            <input className="rounded-lg border bg-transparent px-3 py-2"
                   value={s.subtitle} onChange={(e) => setS({ ...s, subtitle: e.target.value })} maxLength={160}/>
          </div>
          <div className="grid gap-2">
            <label>Theme</label>
            <select className="rounded-lg border bg-transparent px-3 py-2"
                    value={s.theme} onChange={(e) => setS({ ...s, theme: e.target.value as State['theme'] })}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label>Brand color</label>
            <input type="color" className="h-10 w-20 rounded-lg border bg-transparent"
                   value={s.brand} onChange={(e) => setS({ ...s, brand: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <label>Background</label>
            <select className="rounded-lg border bg-transparent px-3 py-2"
                    value={s.bg} onChange={(e) => setS({ ...s, bg: e.target.value })}>
              <option value="radial">Radial glow</option>
              <option value="">Solid</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label>Corner radius: {s.radius}px</label>
            <input type="range" min={0} max={64} value={s.radius}
                   onChange={(e) => setS({ ...s, radius: Number(e.target.value) })}/>
          </div>
          <div className="grid gap-2">
            <label>Logo URL (optional)</label>
            <input className="rounded-lg border bg-transparent px-3 py-2" placeholder="https://..."
                   value={s.logo} onChange={(e) => setS({ ...s, logo: e.target.value })}/>
          </div>
          <p className="text-sm text-gray-500 break-all">API: <code>{url}</code></p>
        </div>

        <div className="rounded-xl border p-5">
          <div className="flex justify-center rounded-lg bg-black/5 p-4 dark:bg-white/5">
            <img src={url} alt="preview" width={600} height={315} className="rounded-lg border"/>
          </div>
        </div>
      </section>
    </div>
  )
}
