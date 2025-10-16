'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    bbb?: any[]
  }
}

export default function BBBSeal() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    // Initialize BBB configuration array
    window.bbb = window.bbb || []
    window.bbb.push(['bbbid', 'centralcanada'])
    window.bbb.push(['bid', '1000007944'])
    window.bbb.push(['chk', 'E420512458'])
    window.bbb.push(['pos', 'bottom-right'])

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Create and append the external script
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://seal-manitoba.bbb.org/badge/badge.min.js'

      document.body.appendChild(script)
    }, 100)

    // Cleanup function to prevent duplicates
    return () => {
      clearTimeout(timer)
      // Remove script tag if it exists
      const scripts = document.querySelectorAll('script[src*="badge.min.js"]')
      scripts.forEach(s => s.remove())
      // Clean up the BBB badge element if it exists
      const bbbElements = document.querySelectorAll('[id^="bbb"]')
      bbbElements.forEach(el => el.remove())
    }
  }, [])

  return null // This component doesn't render anything visible
}
