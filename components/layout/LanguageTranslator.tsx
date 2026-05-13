'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function LanguageTranslator() {
  useEffect(() => {
    // 1. Check user location
    const checkLocationAndTranslate = async () => {
      try {
        // Check if we already set the preference to avoid redundant calls
        const hasTransCookie = document.cookie.includes('googtrans');
        
        if (!hasTransCookie) {
          const res = await fetch('https://ipapi.co/json/');
          const data = await res.json();
          const country = data.country_code;
          
          if (country && country !== 'IN') {
            // Mapping countries to their primary languages
            const languageMap: Record<string, string> = {
              // English speaking
              'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'SG': 'en',
              // Major world languages
              'FR': 'fr', 'BE': 'fr', 'CH': 'fr', // French
              'DE': 'de', 'AT': 'de', // German
              'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', // Spanish
              'IT': 'it', // Italian
              'PT': 'pt', 'BR': 'pt', // Portuguese
              'JP': 'ja', // Japanese
              'KR': 'ko', // Korean
              'CN': 'zh-CN', 'TW': 'zh-TW', // Chinese
              'RU': 'ru', // Russian
              'AE': 'ar', 'SA': 'ar', 'EG': 'ar', // Arabic
              'TR': 'tr', // Turkish
              'NL': 'nl', // Dutch
            };

            const targetLang = languageMap[country] || 'en'; // Default to English if not in map

            // Set cookie for the detected language
            document.cookie = `googtrans=/auto/${targetLang}; path=/`;
            document.cookie = `googtrans=/auto/${targetLang}; path=/; domain=` + window.location.hostname;
            
            window.location.reload();
          }
        }
      } catch (error) {
        console.error('Location check failed:', error);
      }
    };

    checkLocationAndTranslate();

    // 2. Setup MutationObserver to hide Google Translate UI elements
    const observer = new MutationObserver(() => {
      const banner = document.querySelector('.goog-te-banner-frame');
      const skiptranslate = document.querySelector('.skiptranslate');
      
      if (banner) {
        (banner as HTMLElement).style.display = 'none';
      }
      if (skiptranslate) {
        (skiptranslate as HTMLElement).style.display = 'none';
      }
      
      document.body.style.top = '0';
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
      >
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'hi',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}
      </Script>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      {/* Hidden element for Google Translate initialization if needed */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </>
  );
}
