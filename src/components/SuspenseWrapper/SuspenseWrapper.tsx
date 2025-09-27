import { Suspense } from 'react'

interface SuspenseWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

function DefaultFallback() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px'
    }}>
      <div style={{
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #3498db',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        animation: 'spin 1s linear infinite'
      }}></div>
    </div>
  )
}

export default function SuspenseWrapper({ children, fallback }: SuspenseWrapperProps) {
  return (
    <Suspense fallback={fallback || <DefaultFallback />}>
      {children}
    </Suspense>
  )
}