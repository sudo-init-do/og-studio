'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

interface StudioState {
  template: 'launch' | 'blog' | 'speaker' | 'product'
  title: string
  subtitle: string
  theme: 'dark' | 'light' | 'gradient' | 'minimal'
  brand: string
  bg: 'radial' | 'solid' | 'gradient' | 'mesh'
  size: 'og' | 'twitter' | 'instagram' | 'linkedin'
  radius: number
  logo: string
  accent: string
  pattern: 'none' | 'dots' | 'grid' | 'waves'
}

const TEMPLATES = [
  { value: 'launch', label: 'Product Launch', emoji: '🚀' },
  { value: 'blog', label: 'Blog Post', emoji: '📝' },
  { value: 'speaker', label: 'Speaker Card', emoji: '🎤' },
  { value: 'product', label: 'Product Showcase', emoji: '📱' }
] as const

const THEMES = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'gradient', label: 'Gradient' },
  { value: 'minimal', label: 'Minimal' }
] as const

export default function StudioPage() {
  const [state, setState] = useState<StudioState>({
    template: 'launch',
    title: 'OG Studio Pro',
    subtitle: 'Professional social media cards',
    theme: 'gradient',
    brand: '#6366f1',
    bg: 'radial',
    size: 'og',
    radius: 16,
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&q=80',
    accent: '#8b5cf6',
    pattern: 'dots'
  })

  const [previewKey, setPreviewKey] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Generate image URL
  const imageUrl = useCallback(() => {
    const params = new URLSearchParams({
      template: state.template,
      title: state.title || 'OG Studio Pro',
      subtitle: state.subtitle || 'Professional social media cards',
      theme: state.theme,
      brand: state.brand,
      bg: state.bg,
      radius: state.radius.toString(),
      size: state.size,
      logo: state.logo,
      accent: state.accent,
      pattern: state.pattern
    })
    return `/api/og?${params.toString()}`
  }, [state])

  // Update state helper
  const updateState = (updates: Partial<StudioState>) => {
    setState(prev => ({ ...prev, ...updates }))
    setPreviewKey(prev => prev + 1)
  }

  // Download image
  const downloadImage = async () => {
    try {
      const response = await fetch(imageUrl())
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `og-image-${state.template}-${Date.now()}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to download image:', error)
    }
  }

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'dark-theme bg-black' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
    }`}>
      {/* Background decoration */}
      <div className={`absolute inset-0 -z-10 ${
        isDarkMode 
          ? 'bg-grid-slate-800 [mask-image:linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.4))]' 
          : 'bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]'
      }`} />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
        <div className={`w-96 h-96 rounded-full ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-600 to-blue-800' 
            : 'bg-gradient-to-br from-blue-400 to-purple-600'
        }`} />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
        <div className={`w-80 h-80 rounded-full ${
          isDarkMode 
            ? 'bg-gradient-to-tr from-blue-700 to-purple-900' 
            : 'bg-gradient-to-tr from-cyan-400 to-blue-600'
        }`} />
      </div>
      
      <div className="max-w-7xl mx-auto p-6 lg:p-8 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1" />
            <div className="inline-flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  OG Studio Pro
                </h1>
              </div>
            </div>
            {/* Theme Toggle */}
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`group relative p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50' 
                    : 'bg-white/70 hover:bg-white/90 border border-white/20'
                } backdrop-blur-xl shadow-lg`}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <div className="relative w-6 h-6">
                  <svg 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isDarkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                    } ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <svg 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                    } ${isDarkMode ? 'text-yellow-400' : 'text-slate-700'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Create stunning social media cards with our advanced design studio. 
            Professional templates, real-time preview, and instant downloads.
          </p>
          <div className={`flex items-center justify-center gap-6 mt-6 text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Real-time preview</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>HD Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Professional templates</span>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
          {/* Preview Panel */}
          <div className="xl:col-span-2 order-2 lg:order-1">
            <div className={`rounded-3xl shadow-2xl border overflow-hidden transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/70 backdrop-blur-xl border-slate-700/50' 
                : 'bg-white/70 backdrop-blur-xl border-white/20'
            }`}>
              <div className={`px-8 py-6 border-b transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700/50' 
                  : 'bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${
                      isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'
                    }`}>
                      <svg className={`w-5 h-5 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={`text-xl font-bold ${
                        isDarkMode ? 'text-slate-100' : 'text-slate-900'
                      }`}>Live Preview</h2>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>Real-time {state.size.toUpperCase()} preview</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                      isDarkMode ? 'bg-slate-700/50 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Live
                    </div>
                    <button
                      onClick={downloadImage}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download HD
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="relative group">
                  <div 
                    className={`relative rounded-2xl overflow-hidden shadow-inner border-2 transition-all duration-300 group-hover:shadow-2xl ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600/50' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-200/50'
                    }`}
                    style={{
                      aspectRatio: state.size === 'instagram' ? '1' : state.size === 'twitter' ? '16/9' : '1200/630'
                    }}
                  >
                    <Image
                      key={`${previewKey}-${imageUrl()}`}
                      src={imageUrl()}
                      alt="OG Image Preview"
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-[1.02]"
                      unoptimized
                    />
                    <div className={`absolute inset-0 ring-1 ring-inset rounded-2xl ${
                      isDarkMode ? 'ring-slate-700/50' : 'ring-slate-900/10'
                    }`} />
                  </div>
                  
                  {/* Preview info */}
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span className="font-medium">
                          {state.size === 'og' && '1200 × 630px'}
                          {state.size === 'twitter' && '1600 × 900px'}
                          {state.size === 'instagram' && '1080 × 1080px'}
                          {state.size === 'linkedin' && '1200 × 627px'}
                        </span>
                      </div>
                      <div className={`flex items-center gap-2 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                        </svg>
                        <span className="font-medium capitalize">{state.template}</span>
                      </div>
                    </div>
                    <div className={`${
                      isDarkMode ? 'text-slate-500' : 'text-slate-500'
                    }`}>Template: {state.theme}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Template Selection */}
            <div className={`rounded-3xl shadow-xl border p-6 hover:shadow-2xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/70 backdrop-blur-xl border-slate-700/50' 
                : 'bg-white/70 backdrop-blur-xl border-white/20'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
                    : 'bg-gradient-to-br from-purple-100 to-pink-100'
                }`}>
                  <svg className={`w-5 h-5 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-1h6a1 1 0 011 1v2M7 7h10" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-slate-100' : 'text-slate-900'
                }`}>Template</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {TEMPLATES.map((template) => (
                  <button
                    key={template.value}
                    onClick={() => updateState({ template: template.value })}
                    className={`group relative p-4 text-center border-2 rounded-2xl transition-all duration-200 hover:scale-[1.02] ${
                      state.template === template.value
                        ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 text-blue-700 shadow-lg dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300"
                        : isDarkMode 
                          ? "border-slate-600 hover:border-slate-500 hover:bg-slate-700/50 bg-slate-800/50 text-slate-300" 
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white/50"
                    }`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{template.emoji}</div>
                    <div className="text-sm font-semibold">{template.label}</div>
                    {state.template === template.value && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className={`rounded-3xl shadow-xl border p-6 hover:shadow-2xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/70 backdrop-blur-xl border-slate-700/50' 
                : 'bg-white/70 backdrop-blur-xl border-white/20'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-green-900/50 to-emerald-900/50' 
                    : 'bg-gradient-to-br from-green-100 to-emerald-100'
                }`}>
                  <svg className={`w-5 h-5 ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-slate-100' : 'text-slate-900'
                }`}>Content</h3>
              </div>
              <div className="space-y-5">
                <div className="group">
                  <label className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <svg className={`w-4 h-4 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Title
                  </label>
                  <input
                    type="text"
                    value={state.title}
                    onChange={(e) => updateState({ title: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 backdrop-blur-sm ${ isDarkMode ? "border-slate-600 bg-slate-700/80 hover:border-slate-500 text-slate-100 placeholder:text-slate-400" : "border-slate-200 bg-white/80 hover:border-slate-300" }`}
                    placeholder="Enter your compelling title"
                  />
                </div>
                <div className="group">
                  <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={state.subtitle}
                    onChange={(e) => updateState({ subtitle: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 backdrop-blur-sm ${ isDarkMode ? "border-slate-600 bg-slate-700/80 hover:border-slate-500 text-slate-100 placeholder:text-slate-400" : "border-slate-200 bg-white/80 hover:border-slate-300" }`}
                    placeholder="Add a supporting subtitle"
                  />
                </div>
                <div className="group">
                  <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Logo URL
                  </label>
                  <input
                    type="url"
                    value={state.logo}
                    onChange={(e) => updateState({ logo: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 backdrop-blur-sm ${ isDarkMode ? "border-slate-600 bg-slate-700/80 hover:border-slate-500 text-slate-100 placeholder:text-slate-400" : "border-slate-200 bg-white/80 hover:border-slate-300" }`}
                    placeholder="https://example.com/logo.png"
                  />
                </div>
              </div>
            </div>

            {/* Design Controls */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 3v18M17 3v18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Design</h3>
              </div>
              <div className="space-y-6">
                {/* Theme Selection */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Theme
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {THEMES.map((theme) => (
                      <button
                        key={theme.value}
                        onClick={() => updateState({ theme: theme.value })}
                        className={`group relative p-4 text-center rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] ${
                          state.theme === theme.value
                            ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 text-blue-700 shadow-lg"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white/50"
                        }`}
                      >
                        <div className="text-sm font-semibold">{theme.label}</div>
                        {state.theme === theme.value && (
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 3v18" />
                      </svg>
                      Primary
                    </label>
                    <div className="relative">
                      <input
                        type="color"
                        value={state.brand}
                        onChange={(e) => updateState({ brand: e.target.value })}
                        className="w-full h-12 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors"
                      />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 pointer-events-none" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Accent
                    </label>
                    <div className="relative">
                      <input
                        type="color"
                        value={state.accent}
                        onChange={(e) => updateState({ accent: e.target.value })}
                        className="w-full h-12 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors"
                      />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Background */}
                <div className="group">
                  <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Background Style
                  </label>
                  <select
                    value={state.bg}
                    onChange={(e) => updateState({ bg: e.target.value as StudioState['bg'] })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 backdrop-blur-sm ${ isDarkMode ? "border-slate-600 bg-slate-700/80 hover:border-slate-500 text-slate-100 placeholder:text-slate-400" : "border-slate-200 bg-white/80 hover:border-slate-300" }`}
                  >
                    <option value="solid">🎨 Solid Color</option>
                    <option value="radial">⚪ Radial Gradient</option>
                    <option value="gradient">🌈 Linear Gradient</option>
                    <option value="mesh">🕸️ Mesh Gradient</option>
                  </select>
                </div>

                {/* Pattern */}
                <div className="group">
                  <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-1h6a1 1 0 011 1v2M7 7h10" />
                    </svg>
                    Pattern Overlay
                  </label>
                  <select
                    value={state.pattern}
                    onChange={(e) => updateState({ pattern: e.target.value as StudioState['pattern'] })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 backdrop-blur-sm ${ isDarkMode ? "border-slate-600 bg-slate-700/80 hover:border-slate-500 text-slate-100 placeholder:text-slate-400" : "border-slate-200 bg-white/80 hover:border-slate-300" }`}
                  >
                    <option value="none">⬜ None</option>
                    <option value="dots">⚪ Dots</option>
                    <option value="grid">⬛ Grid</option>
                    <option value="waves">🌊 Waves</option>
                  </select>
                </div>

                {/* Size */}
                <div className="group">
                  <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    Platform Size
                  </label>
                  <select
                    value={state.size}
                    onChange={(e) => updateState({ size: e.target.value as StudioState['size'] })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 backdrop-blur-sm ${ isDarkMode ? "border-slate-600 bg-slate-700/80 hover:border-slate-500 text-slate-100 placeholder:text-slate-400" : "border-slate-200 bg-white/80 hover:border-slate-300" }`}
                  >
                    <option value="og">📈 Open Graph (1200×630)</option>
                    <option value="twitter">🐦 Twitter Card (1600×900)</option>
                    <option value="instagram">📷 Instagram (1080×1080)</option>
                    <option value="linkedin">💼 LinkedIn (1200×627)</option>
                  </select>
                </div>

                {/* Radius */}
                <div className="group">
                  <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Border Radius ({state.radius}px)
                  </label>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={state.radius}
                      onChange={(e) => updateState({ radius: parseInt(e.target.value) })}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Sharp (0px)</span>
                      <span>Rounded (25px)</span>
                      <span>Soft (50px)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
