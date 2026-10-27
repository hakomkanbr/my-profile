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
    default: 'عبد الحكيم قنبر | تطوير المواقع والأنظمة والمنتجات الرقمية — Abdulhakim Kanbr',
    template: '%s | عبد الحكيم قنبر — Abdulhakim Kanbr',
  },
  description:
    'عبد الحكيم قنبر (Abdulhakim Kanbr) — مهندس برمجيات ومطور ويب بخبرة تتجاوز 8 سنوات في بناء المواقع والمتاجر الإلكترونية، والأنظمة المخصصة لإدارة الأعمال، ومنتجات SaaS، والتدريب العملي عبر منصة WEB CREATOR AI.',
  keywords: [
    'Abdulhakim Kanbr',
    'عبدالحكيم قنبر',
    'عبد الحكيم قنبر',
    'تطوير مواقع',
    'تطوير أنظمة مخصصة',
    'منتجات رقمية',
    'SaaS',
    'WEB CREATOR AI',
    'Share2Sells',
    'Masar',
    'CashPro',
    'Software Engineer',
    'Full Stack Developer',
    'ASP.NET Core',
    'Next.js',
    'React',
    'TypeScript',
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
    title: 'عبد الحكيم قنبر | أحوّل الأفكار إلى مواقع ومنتجات رقمية — Abdulhakim Kanbr',
    description:
      'أطوّر مواقع وأنظمة تساعد الشركات وأصحاب الأفكار على بناء حضورهم الرقمي وتنظيم أعمالهم، وأشارك أعمالي ومنتجاتي الرقمية وتدريبي العملي في WEB CREATOR AI.',
    url: siteUrl,
    siteName: 'Abdulhakim Kanbr — عبد الحكيم قنبر',
    locale: 'ar_AR',
    alternateLocale: ['en_US'],
    type: 'profile',
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 1200,
        height: 630,
        alt: 'عبد الحكيم قنبر — Abdulhakim Kanbr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عبد الحكيم قنبر | أحوّل الأفكار إلى مواقع ومنتجات رقمية — Abdulhakim Kanbr',
    description:
      'أطوّر مواقع وأنظمة تساعد الشركات وأصحاب الأفكار على بناء حضورهم الرقمي وتنظيم أعمالهم.',
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
  jobTitle: 'Software Engineer & Web Developer',
  description:
    'Software Engineer & Web Developer with 8+ years of experience building websites, custom business systems, and SaaS products.',
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
    'Web Development',
    'Custom Business Systems',
    'SaaS Product Development',
    'ASP.NET Core',
    '.NET 9',
    'Next.js',
    'React',
    'TypeScript',
    'Cloud Infrastructure & Docker',
    'Technical Training',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Software Engineer & Web Developer',
    occupationalCategory: '15-1252.00',
    skills: 'Web Development, Custom Business Systems, SaaS Products, ASP.NET Core, Next.js',
  },
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#webpage`,
  mainEntity: {
    '@id': `${siteUrl}/#person`,
  },
  name: 'عبد الحكيم قنبر — Abdulhakim Kanbr Portfolio',
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
  alternateName: 'عبد الحكيم قنبر',
  url: siteUrl,
  description:
    'الموقع الرسمي للمهندس عبد الحكيم قنبر: معرض الأعمال، المنتجات الرقمية، المقالات التقنية، ومنصة التدريب العملي WEB CREATOR AI.',
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
