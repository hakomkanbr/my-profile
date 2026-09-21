import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulhakimkanbr.dev';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0f19' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Abdulhakim Kanbr | Software Engineer, System Designer & Technical Mentor',
    template: '%s | Abdulhakim Kanbr',
  },
  description:
    'Abdulhakim Kanbr is a software engineer and technical mentor with 8+ years of experience in software development, server management, and system design.',
  keywords: [
    'Abdulhakim Kanbr',
    'عبد الحكيم قنبر',
    'Software Engineer',
    'Technical Mentor',
    'System Design',
    'Server Administration',
    'Backend Developer',
    'ASP.NET Core Developer',
    '.NET Developer',
    'Next.js Developer',
    'Full Stack Engineer',
    'Infrastructure & DevOps',
    'Linux System Administration',
    'Docker',
    'Web Architecture',
  ],
  authors: [{ name: 'Abdulhakim Kanbr', url: 'https://github.com/hakomkanbr' }],
  creator: 'Abdulhakim Kanbr',
  publisher: 'Abdulhakim Kanbr',
  applicationName: 'Abdulhakim Kanbr Portfolio',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'en-US': '/',
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
    title: 'Abdulhakim Kanbr | Software Engineer, System Designer & Technical Mentor',
    description:
      'Abdulhakim Kanbr is a software engineer and technical mentor with 8+ years of experience in software development, server management, and system design.',
    url: '/',
    siteName: 'Abdulhakim Kanbr Portfolio',
    locale: 'ar_AR',
    alternateLocale: ['en_US'],
    type: 'profile',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Abdulhakim Kanbr — Software Engineer & System Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdulhakim Kanbr | Software Engineer, System Designer & Technical Mentor',
    description:
      'Abdulhakim Kanbr is a software engineer and technical mentor with 8+ years of experience in software development, server management, and system design.',
    images: ['/banner.png'],
    creator: '@hakomkanbr',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Abdulhakim Kanbr',
  alternateName: 'عبد الحكيم قنبر',
  jobTitle: 'Software Engineer & Technical Mentor',
  email: 'abdulhekimkanbr@gmail.com',
  telephone: '+905382015072',
  image: `${siteUrl}/myphoto.jpg`,
  description:
    'Software engineer and technical mentor with 8+ years of experience across software development, server management, and system design.',
  url: siteUrl,
  sameAs: [
    'https://github.com/hakomkanbr',
    'https://gitlab.com/abdulhekimkanbr',
    'https://tr.linkedin.com/in/abdulhekim-kanbr-872175195',
    'https://instagram.com/ht_r6k',
  ],
  knowsAbout: [
    'Software Engineering',
    'Backend Architecture',
    'API Development',
    'System Design',
    'Server Administration',
    'Linux',
    'Docker',
    'Next.js',
    'TypeScript',
    'ASP.NET Core',
    'Technical Mentoring',
  ],
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@id': `${siteUrl}/#person`,
  },
  name: 'Abdulhakim Kanbr — Profile & Portfolio',
  url: siteUrl,
  inLanguage: ['ar', 'en'],
  isPartOf: {
    '@type': 'WebSite',
    name: 'Abdulhakim Kanbr',
    url: siteUrl,
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Abdulhakim Kanbr',
  url: siteUrl,
  description:
    'Professional portfolio and engineering case studies of Abdulhakim Kanbr, Software Engineer & System Designer.',
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
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Abdulhakim Kanbr" />
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
