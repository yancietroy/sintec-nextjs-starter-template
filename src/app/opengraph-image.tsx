import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Sponge Pro Cleaning Services - Professional Cleaning in Winnipeg'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Open Graph image component
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          padding: '80px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>Sponge Pro</div>
        <div style={{ fontSize: 48, marginBottom: 40 }}>Cleaning Services</div>
        <div style={{ fontSize: 32, fontWeight: 'normal', opacity: 0.9 }}>
          Professional Cleaning in Winnipeg
        </div>
        <div style={{ fontSize: 28, fontWeight: 'normal', opacity: 0.8, marginTop: 20 }}>
          We don&apos;t cut corners, we clean them!
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
