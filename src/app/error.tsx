'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="error-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h2 style={{ color: '#e74c3c', marginBottom: '20px' }}>Something went wrong!</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        We apologize for the inconvenience. Please try again.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => reset()}
        style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  )
}