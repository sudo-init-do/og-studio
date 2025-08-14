import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const getBackgroundGradient = (bg, brand, accent, theme) => {
  const primaryColor = brand || '#6366f1'
  const accentColor = accent || '#8b5cf6'
  
  switch (bg) {
    case 'radial':
      return theme === 'light' 
        ? `radial-gradient(circle at 30% 20%, ${primaryColor}15, ${accentColor}10, transparent 70%)`
        : `radial-gradient(circle at 30% 20%, ${primaryColor}25, ${accentColor}20, transparent 70%)`
    case 'gradient':
      return `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
    case 'mesh':
      return theme === 'light'
        ? `linear-gradient(45deg, ${primaryColor}08 25%, transparent 25%), 
           linear-gradient(-45deg, ${accentColor}08 25%, transparent 25%), 
           linear-gradient(45deg, transparent 75%, ${primaryColor}08 75%), 
           linear-gradient(-45deg, transparent 75%, ${accentColor}08 75%)`
        : `linear-gradient(45deg, ${primaryColor}15 25%, transparent 25%), 
           linear-gradient(-45deg, ${accentColor}15 25%, transparent 25%), 
           linear-gradient(45deg, transparent 75%, ${primaryColor}15 75%), 
           linear-gradient(-45deg, transparent 75%, ${accentColor}15 75%)`
    default:
      return theme === 'dark' ? '#0f172a' : '#f8fafc'
  }
}

const getPatternOverlay = (pattern, theme) => {
  const opacity = theme === 'light' ? '0.05' : '0.1'
  
  switch (pattern) {
    case 'dots':
      return `radial-gradient(circle, ${theme === 'dark' ? '#ffffff' : '#000000'}${opacity} 1px, transparent 1px)`
    case 'grid':
      return `linear-gradient(${theme === 'dark' ? '#ffffff' : '#000000'}${opacity} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? '#ffffff' : '#000000'}${opacity} 1px, transparent 1px)`
    case 'waves':
      return `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        ${theme === 'dark' ? '#ffffff' : '#000000'}${opacity} 10px,
        ${theme === 'dark' ? '#ffffff' : '#000000'}${opacity} 20px
      )`
    default:
      return 'none'
  }
}

const getThemeColors = (theme, brand, accent) => {
  const primaryColor = brand || '#6366f1'
  const accentColor = accent || '#8b5cf6'
  
  switch (theme) {
    case 'light':
      return {
        background: '#ffffff',
        text: '#0f172a',
        textSecondary: '#64748b',
        border: '#e2e8f0'
      }
    case 'gradient':
      return {
        background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
        text: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.8)',
        border: 'rgba(255, 255, 255, 0.2)'
      }
    case 'minimal':
      return {
        background: '#fafafa',
        text: '#171717',
        textSecondary: '#737373',
        border: '#e5e5e5'
      }
    default: // dark
      return {
        background: '#0f172a',
        text: '#f8fafc',
        textSecondary: '#94a3b8',
        border: '#334155'
      }
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract parameters
    const title = searchParams.get('title') || 'OG Studio Pro'
    const subtitle = searchParams.get('subtitle') || 'Professional social media cards'
    const template = searchParams.get('template') || 'launch'
    const theme = searchParams.get('theme') || 'gradient'
    const brand = searchParams.get('brand') || '#6366f1'
    const bg = searchParams.get('bg') || 'radial'
    const radiusParam = searchParams.get('radius') || '16'
    const size = searchParams.get('size') || 'og'
    const logo = searchParams.get('logo') || 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&q=80'
    const accent = searchParams.get('accent') || '#8b5cf6'
    const pattern = searchParams.get('pattern') || 'dots'
    
    const radius = parseInt(radiusParam, 10) || 16

    // Size configurations
    const dimensions = {
      og: { width: 1200, height: 630 },
      twitter: { width: 1600, height: 900 },
      instagram: { width: 1080, height: 1080 },
      linkedin: { width: 1200, height: 627 }
    }[size] || { width: 1200, height: 630 }

    const colors = getThemeColors(theme, brand, accent)
    const backgroundStyle = getBackgroundGradient(bg, brand, accent, theme)
    const patternOverlay = getPatternOverlay(pattern, theme)

    const renderTemplate = () => {
      switch (template) {
        case 'launch':
          return (
            <div style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              background: backgroundStyle,
              backgroundImage: patternOverlay,
              backgroundSize: pattern === 'dots' ? '20px 20px' : pattern === 'grid' ? '20px 20px' : '40px 40px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '80px',
                width: '70%',
                height: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: `${radius}px`,
                    background: colors.text,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '24px',
                    fontSize: '40px'
                  }}>
                    🚀
                  </div>
                  <div style={{
                    fontSize: size === 'twitter' ? '20px' : '18px',
                    color: colors.textSecondary,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontFamily: 'Inter, ui-sans-serif, system-ui'
                  }}>
                    Product Launch
                  </div>
                </div>
                <div style={{
                  fontSize: size === 'twitter' ? '72px' : size === 'instagram' ? '64px' : '64px',
                  fontWeight: '800',
                  color: colors.text,
                  lineHeight: '1.1',
                  marginBottom: '24px',
                  fontFamily: 'Inter, ui-sans-serif, system-ui'
                }}>
                  {title}
                </div>
                <div style={{
                  fontSize: size === 'twitter' ? '32px' : '28px',
                  color: colors.textSecondary,
                  lineHeight: '1.3',
                  fontFamily: 'Inter, ui-sans-serif, system-ui'
                }}>
                  {subtitle}
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30%',
                height: '100%'
              }}>
                <img 
                  src={logo} 
                  width={size === 'twitter' ? '280' : '240'} 
                  height={size === 'twitter' ? '280' : '240'} 
                  alt="logo" 
                  style={{ borderRadius: `${radius}px` }}
                />
              </div>
            </div>
          )

        case 'blog':
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              background: backgroundStyle,
              backgroundImage: patternOverlay,
              backgroundSize: pattern === 'dots' ? '20px 20px' : pattern === 'grid' ? '20px 20px' : '40px 40px',
              padding: '80px',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px'
              }}>
                <div style={{
                  fontSize: size === 'twitter' ? '24px' : '20px',
                  color: colors.textSecondary,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontFamily: 'Inter, ui-sans-serif, system-ui'
                }}>
                  📝 Blog Post
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: '1',
                justifyContent: 'center'
              }}>
                <div style={{
                  fontSize: size === 'twitter' ? '72px' : size === 'instagram' ? '56px' : '60px',
                  fontWeight: '700',
                  color: colors.text,
                  lineHeight: '1.1',
                  marginBottom: '32px',
                  fontFamily: 'Inter, ui-sans-serif, system-ui'
                }}>
                  {title}
                </div>
                <div style={{
                  fontSize: size === 'twitter' ? '32px' : '24px',
                  color: colors.textSecondary,
                  lineHeight: '1.4',
                  maxWidth: '80%',
                  fontFamily: 'Inter, ui-sans-serif, system-ui'
                }}>
                  {subtitle}
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src={logo} 
                  width="80" 
                  height="80" 
                  alt="logo" 
                  style={{ borderRadius: `${radius}px` }}
                />
              </div>
            </div>
          )

        default:
          return (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              background: colors.background,
              overflow: 'hidden'
            }}>
              <img 
                src={logo} 
                width={size === 'twitter' ? '320' : '260'} 
                height={size === 'twitter' ? '320' : '260'} 
                alt="logo" 
                style={{ borderRadius: `${radius * 0.8}px` }}
              />
            </div>
          )
      }
    }

    return new ImageResponse(
      renderTemplate(),
      {
        ...dimensions,
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
        }
      }
    )
  } catch {
    // Never throw - always return a valid error image
    return new ImageResponse(
      (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#0f172a',
          color: '#f8fafc',
          fontSize: '32px',
          fontFamily: 'Inter, ui-sans-serif, system-ui'
        }}>
          Failed to generate image
        </div>
      ),
      { width: 1200, height: 630 }
    )
  }
}