import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aigyani.in'),
  title: {
    default: 'AI Gyani — Apni Bhasha Mein AI Seekho',
    template: '%s | AI Gyani',
  },
  description: 'AI Gyani par seekho Artificial Intelligence, Machine Learning, aur Deep Learning — bilkul Hinglish mein, beginners ke liye. Free tutorials by Tarun.',
  keywords: ['AI tutorials Hindi', 'Machine Learning Hinglish', 'Artificial Intelligence seekho', 'AI Gyani', 'Python for AI Hindi', 'Deep Learning tutorial'],
  authors: [{ name: 'Tarun', url: 'https://www.aigyani.in' }],
  creator: 'Tarun',
  publisher: 'AI Gyani',
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://www.aigyani.in',
    siteName: 'AI Gyani',
    title: 'AI Gyani — Apni Bhasha Mein AI Seekho',
    description: 'AI Gyani par seekho Artificial Intelligence, Machine Learning, Deep Learning — bilkul Hinglish mein, beginners ke liye.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'AI Gyani — AI Tutorials in Hinglish' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Gyani — Apni Bhasha Mein AI Seekho',
    description: 'AI Gyani par seekho Artificial Intelligence, Machine Learning — bilkul Hinglish mein.',
    images: ['/og-default.png'],
    creator: '@aigyani',
  },
  robots: { 
    index: true, 
    follow: true, 
    googleBot: { 
      index: true, 
      follow: true, 
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    } 
  },
  alternates: {},
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi-IN">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H3F4QH0Y2C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H3F4QH0Y2C');
          `}
        </Script>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
