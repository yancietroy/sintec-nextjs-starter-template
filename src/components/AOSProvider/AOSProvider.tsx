'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Only run on client side
    setIsClient(true)

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        disable: false,
        startEvent: 'DOMContentLoaded',
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      if (typeof AOS !== 'undefined') {
        AOS.refreshHard()
      }
    }
  }, [])

  // Suppress hydration warnings for AOS elements
  useEffect(() => {
    if (isClient) {
      // Force a refresh after client-side hydration
      const refreshTimer = setTimeout(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refresh()
        }
      }, 500)

      return () => clearTimeout(refreshTimer)
    }
  }, [isClient])

  return <>{children}</>
}