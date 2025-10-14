'use client'

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js' as any);
  }, []);

  return null;
}
