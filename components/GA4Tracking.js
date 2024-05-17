'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GA4Tracking() {
  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-VKT88JCLYD');
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VKT88JCLYD"
        strategy="afterInteractive"
      />
    </>
  );
}
