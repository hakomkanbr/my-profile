import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortfolioShell } from '@/components';
import { ALL_WRITINGS, getWritingBySlug } from '@/content/writings';
import { WritingDetailClient } from './WritingDetailClient';

interface WritingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_WRITINGS.map((writing) => ({
    slug: writing.slug,
  }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing) {
    return {
      title: 'Article Not Found | Abdulhakim Kanbr',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulhakimkanbr.com';
  const pageUrl = `${siteUrl}/writings/${writing.slug}`;

  return {
    title: `${writing.title.ar} | عبدالحكيم قنبر`,
    description: writing.summary.ar,
    keywords: writing.tags,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: writing.title.ar,
      description: writing.summary.ar,
      url: pageUrl,
      type: 'article',
      publishedTime: writing.publishedAt,
      authors: ['https://abdulhakimkanbr.com'],
      images: [
        {
          url: `${siteUrl}/banner.png`,
          width: 1200,
          height: 630,
          alt: writing.title.ar,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: writing.title.ar,
      description: writing.summary.ar,
      images: [`${siteUrl}/banner.png`],
      creator: '@hakomkanbr',
    },
  };
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulhakimkanbr.com';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: writing.title.ar,
    description: writing.summary.ar,
    datePublished: writing.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Abdulhakim Kanbr',
      alternateName: 'عبدالحكيم قنبر',
      jobTitle: 'Software Engineer & Web Developer',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Abdulhakim Kanbr',
      url: siteUrl,
    },
    url: `${siteUrl}/writings/${writing.slug}`,
    keywords: writing.tags.join(', '),
  };

  return (
    <PortfolioShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <WritingDetailClient writing={writing} />
    </PortfolioShell>
  );
}
