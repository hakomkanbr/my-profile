import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdulhakim Kanbr | Software Engineer, System Designer & Technical Mentor',
  description:
    'Abdulhakim Kanbr is a software engineer and technical mentor with 8+ years of experience in software development, server management, and system design.',
  keywords: [
    'Abdulhakim Kanbr',
    'Software Engineer',
    'Technical Mentor',
    'System Design',
    'Server Administration',
    'Backend Developer',
    'ASP.NET Core Developer',
    '.NET Developer',
    'Next.js Developer',
    'Infrastructure & DevOps',
  ],
  authors: [{ name: 'Abdulhakim Kanbr', url: 'https://github.com/hakomkanbr' }],
  creator: 'Abdulhakim Kanbr',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulhakimkanbr.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Abdulhakim Kanbr | Software Engineer, System Designer & Technical Mentor',
    description:
      'Abdulhakim Kanbr is a software engineer and technical mentor with 8+ years of experience in software development, server management, and system design.',
    url: '/',
    siteName: 'Abdulhakim Kanbr Portfolio',
    type: 'website',
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
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdulhakim Kanbr',
  jobTitle: 'Software Engineer',
  email: 'abdulhekimkanbr@gmail.com',
  telephone: '+905382015072',
  description:
    'Software engineer and technical mentor with 8+ years of experience across software development, server management, and system design.',
  url: 'https://abdulhakimkanbr.dev',
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
    'Technical Mentoring',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Abdulhakim Kanbr',
  url: 'https://abdulhakimkanbr.dev',
  description:
    'Professional portfolio and engineering case studies of Abdulhakim Kanbr, Software Engineer & System Designer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
