/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
export const runtime = 'edge'

export async function GET(req) {
  const { searchParams } = new URL(req.url)

  const title = (searchParams.get('title') ?? 'OG Studio').slice(0, 120)
  const subtitle = (searchParams.get('subtitle') ?? 'Beautiful social cards, instantly.').slice(0, 160)
  const theme = searchParams.get('theme') === 'light' ? 'light' : 'dark'
  const brand = searchParams.get('brand') ?? (theme === 'dark' ? '#2EA3FF' : '#0EA5E9')
  const bg = searchParams.get('bg') ?? '' // 'radial' or hex like #ffffff
  const radius = Math.min(64, Math.max(0, Number(searchParams.get('radius') ?? '28')))
  const logo = searchParams.get('logo') || ''

  const bgStyle =
    bg === 'radial'
      ? `radial-gradient(1000px 600px at 20% 20%, ${brand}22, transparent),
         radial-gradient(800px 500px at 80% 80%, ${brand}33, transparent)`
      : bg?.startsWith('#') ? bg : (theme === 'dark' ? '#0b1220' : '#ffffff')

  const text   = theme === 'dark' ? '#e5e7eb' : '#111827'
  const sub    = theme === 'dark' ? '#9ca3af' : '#4b5563'
  const chip   = theme === 'dark' ? '#ffffff22' : '#1118270a'
  const border = theme === 'dark' ? '#ffffff22' : '#00000010'

  return new ImageResponse(
    (
      <div style={{
        width: 1200, height: 630, display: 'flex', background: bgStyle, color: text,
        borderRadius: `${radius}px`, border: `1px solid ${border}`, position: 'relative', overflow: 'hidden',
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(600px 400px at 10% 90%, ${brand}33, transparent),
                       radial-gradient(500px 300px at 90% 10%, ${brand}1f, transparent)`
        }} />
        <div style={{ display: 'flex', flexDirection: 'row', padding: 64, gap: 40, width: '100%' }}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px',
              background: chip, borderRadius: 999, fontSize: 28,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: brand, boxShadow: `0 0 12px ${brand}` }}/>
              <span style={{ letterSpacing: 0.4 }}>OG Studio</span>
            </div>
            <h1 style={{ fontSize: 84, lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em' }}>{title}</h1>
            <p style={{ fontSize: 36, color: sub, marginTop: 8 }}>{subtitle}</p>
          </div>
          <div style={{
            width: 300, height: 300, borderRadius: 32, border: `1px solid ${border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: theme === 'dark' ? '#0f172a' : '#f8fafc', overflow: 'hidden',
          }}>
            {logo
              ? <img src={logo} width={260} height={260} alt="logo" />
              : <div style={{ width: 120, height: 120, borderRadius: 999, background: brand, boxShadow: `0 10px 60px ${brand}` }}/>
            }
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    }
  )
}
