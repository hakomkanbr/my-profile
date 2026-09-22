import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { PwaRegister } from '@/components/pwa-register';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulhakimkanbr.com';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0f19' },
    { media: '(prefers-color-scheme: light)', color: '#0b0f19' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Abdulhakim Kanbr | Senior Software Architect & Full Stack Engineer',
    template: '%s | Abdulhakim Kanbr',
  },
  description:
    'Abdulhakim Kanbr (عبدالحكيم قنبر) is a Senior Software Architect and Full Stack Engineer with 8+ years of expertise in high-performance distributed systems, cloud architecture, and modern web platforms.',
  keywords: [
    'Abdulhakim Kanbr',
    'عبدالحكيم قنبر',
    'عبد الحكيم قنبر',
    'Senior Software Architect',
    'Full Stack Engineer',
    'Software Architecture',
    'System Design',
    'Distributed Systems',
    'Cloud Architecture',
    'Microservices',
    'Technical Mentor',
    'ASP.NET Core',
    '.NET 9',
    'Next.js',
    'React',
    'TypeScript',
    'Docker',
    'DevOps',
    'Linux System Administration',
    'Web Performance Optimization',
    'Progressive Web Apps',
  ],
  authors: [{ name: 'Abdulhakim Kanbr', url: 'https://github.com/hakomkanbr' }],
  creator: 'Abdulhakim Kanbr',
  publisher: 'Abdulhakim Kanbr',
  applicationName: 'Abdulhakim Kanbr Portfolio',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
    languages: {
      'ar-SA': siteUrl,
      'en-US': siteUrl,
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Abdulhakim Kanbr',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Abdulhakim Kanbr | Senior Software Architect & Full Stack Engineer',
    description:
      'Abdulhakim Kanbr (عبدالحكيم قنبر) is a Senior Software Architect and Full Stack Engineer with 8+ years of expertise in high-performance distributed systems, cloud architecture, and modern web platforms.',
    url: siteUrl,
    siteName: 'Abdulhakim Kanbr Portfolio',
    locale: 'ar_AR',
    alternateLocale: ['en_US'],
    type: 'profile',
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 1200,
        height: 630,
        alt: 'Abdulhakim Kanbr — Senior Software Architect & Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdulhakim Kanbr | Senior Software Architect & Full Stack Engineer',
    description:
      'Abdulhakim Kanbr (عبدالحكيم قنبر) is a Senior Software Architect and Full Stack Engineer with 8+ years of expertise in high-performance distributed systems, cloud architecture, and modern web platforms.',
    images: [`${siteUrl}/banner.png`],
    creator: '@hakomkanbr',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Abdulhakim Kanbr',
  alternateName: ['عبدالحكيم قنبر', 'عبد الحكيم قنبر'],
  jobTitle: 'Senior Software Architect & Full Stack Engineer',
  description:
    'Senior Software Architect & Full Stack Engineer with 8+ years of experience across distributed system design, backend engineering, cloud infrastructure, and modern web development.',
  url: siteUrl,
  image: `${siteUrl}/myphoto.jpg`,
  email: 'abdulhekimkanbr@gmail.com',
  telephone: '+905382015072',
  sameAs: [
    'https://github.com/hakomkanbr',
    'https://gitlab.com/abdulhekimkanbr',
    'https://tr.linkedin.com/in/abdulhekim-kanbr-872175195',
    'https://instagram.com/ht_r6k',
    'https://x.com/hakomkanbr',
  ],
  knowsAbout: [
    'Software Architecture',
    'Distributed Systems',
    'System Design',
    'Cloud Architecture & DevOps',
    'Full Stack Web Development',
    'ASP.NET Core',
    '.NET 9',
    'Next.js',
    'React',
    'TypeScript',
    'Linux System Administration',
    'Docker & Container Orchestration',
    'Technical Mentoring',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Senior Software Architect & Full Stack Engineer',
    occupationalCategory: '15-1252.00',
    skills: 'Software Architecture, Cloud Systems, Full Stack Engineering, System Design, DevOps',
  },
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#webpage`,
  mainEntity: {
    '@id': `${siteUrl}/#person`,
  },
  name: 'Abdulhakim Kanbr — Senior Software Architect & Full Stack Engineer Profile',
  url: siteUrl,
  inLanguage: ['ar', 'en'],
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Abdulhakim Kanbr',
  alternateName: 'عبدالحكيم قنبر',
  url: siteUrl,
  description:
    'Official portfolio, architecture case studies, and engineering insights of Abdulhakim Kanbr, Senior Software Architect & Full Stack Engineer.',
  publisher: {
    '@id': `${siteUrl}/#person`,
  },
  inLanguage: ['ar', 'en'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`h-full ${cairo.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Abdulhakim Kanbr" />
        <meta name="theme-color" content="#0b0f19" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5TGYJRY5R2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5TGYJRY5R2');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`min-h-full flex flex-col antialiased font-sans ${cairo.className}`}>
        <PwaRegister />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
