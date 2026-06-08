import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'AZYQ — Балабақшаларға азық-түлік жеткізу | Алматы',
  description:
    'AZYQ — Алматы балабақшаларына апта сайын уақытында, толық құжаттармен азық-түлік, көкөніс-жеміс және тұрмыстық химия жеткізеді. Бір WhatsApp хабарламасы — барлық мәселені шешеді.',
  keywords: [
    'азық-түлік жеткізу балабақша Алматы',
    'доставка продуктов детский сад Алматы',
    'AZYQ',
    'азық-түлік жеткізу',
    'балабақша',
  ],
  openGraph: {
    title: 'AZYQ — Балабақшаларға азық-түлік жеткізу',
    description: 'Бір WhatsApp хабарламасы — барлық мәселені шешеді.',
    type: 'website',
    locale: 'kk_KZ',
    siteName: 'AZYQ',
  },
  metadataBase: new URL('https://azyq.kz'),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-brand-dark antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
