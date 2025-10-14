'use client'

import React, { useEffect } from 'react';

type Props = {
  url?: string;
  minHeight?: string;
}

const CalendlyEmbed = ({
  url = "https://calendly.com/admin-spongeprocleaningservices/30min",
  minHeight = "700px"
}: Props) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{
        minWidth: '320px',
        height: minHeight
      }}
    />
  );
};

export default CalendlyEmbed;
