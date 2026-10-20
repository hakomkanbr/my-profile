import type { Metadata } from 'next';
import LinksHub from './LinksHub';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulhakimkanbr.com';
const summary = 'روابط عبد الحكيم قنبر المهنية ومشاريعه ومحتواه التدريبي. | Abdulhakim Kanbr’s professional profiles, products, and learning resources.';

export const metadata: Metadata = {
  title: 'روابط عبد الحكيم قنبر | Abdulhakim Kanbr Links',
  description: summary,
  alternates: { canonical: `${siteUrl}/links` },
  openGraph: {
    title: 'عبد الحكيم قنبر — روابط',
    description: summary,
    url: `${siteUrl}/links`,
    siteName: 'Abdulhakim Kanbr',
    type: 'profile',
    images: [{ url: `${siteUrl}/myphoto.jpg`, alt: 'عبد الحكيم قنبر — Abdulhakim Kanbr' }],
  },
  twitter: {
    card: 'summary',
    title: 'عبد الحكيم قنبر — روابط',
    description: summary,
    images: [`${siteUrl}/myphoto.jpg`],
  },
};

export default function LinksPage() {
  return <LinksHub />;
}
