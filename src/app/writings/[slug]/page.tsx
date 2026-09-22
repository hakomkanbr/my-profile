import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortfolioShell, PageContainer } from '@/components';
import { ALL_WRITINGS, getWritingBySlug } from '@/content/writings';
import { Clock, Tag, ArrowRight, BookOpen, CheckCircle2, UserCheck } from 'lucide-react';

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
      jobTitle: 'Senior Software Architect & Full Stack Engineer',
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
      <PageContainer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <article className="max-w-4xl mx-auto space-y-10 sm:space-y-12 text-start">
          {/* Breadcrumb / Back Link */}
          <div>
            <Link
              href="/writings"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <ArrowRight className="w-4 h-4 rtl:rotate-0 rotate-180" />
              <span>العودة إلى فهرس الكتابات الهندسية</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-5 pb-8 border-b border-[var(--color-border)]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--color-text-subtle)]">
              <span className="px-3 py-1 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-secondary)] font-bold">
                {writing.categoryLabel.ar}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {writing.readTimeMinutes} دقائق قراءة
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {new Date(writing.publishedAt).toLocaleDateString('ar-SA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight">
              {writing.title.ar}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed">
              {writing.summary.ar}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {writing.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)] border border-[var(--color-border-subtle)]"
                >
                  <Tag className="w-3 h-3 opacity-60" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Key Takeaways Box */}
          {writing.keyTakeaways.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-blue-950/20 border border-blue-800/30 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-blue-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>الركائز المعمارية الأساسية في هذا المقال</span>
              </h3>
              <ul className="space-y-2.5">
                {writing.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2.5" />
                    <span>{takeaway.ar}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-10 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
            {writing.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                  {section.heading.ar}
                </h2>

                <div className="space-y-4 font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p.ar}
                    </p>
                  ))}
                </div>

                {section.codeSnippet && (
                  <div className="pt-2">
                    <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 font-mono text-xs sm:text-sm">
                      <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 text-xs flex justify-between items-center">
                        <span>{section.codeSnippet.caption?.ar || 'Architecture Snippet'}</span>
                        <span className="uppercase text-[10px] text-blue-400 font-bold">{section.codeSnippet.language}</span>
                      </div>
                      <pre className="p-4 sm:p-5 overflow-x-auto text-emerald-300 leading-relaxed text-start" dir="ltr">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Author Bio Card */}
          <footer className="pt-10 border-t border-[var(--color-border)]">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/myphoto.jfif"
                alt="Abdulhakim Kanbr"
                className="w-20 h-20 rounded-2xl object-cover object-top ring-2 ring-[var(--color-border)] shrink-0"
              />
              <div className="space-y-2 text-center sm:text-start flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <UserCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">
                    Senior Software Architect & Full Stack Engineer
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-text)]">
                  عبدالحكيم قنبر (Abdulhakim Kanbr)
                </h4>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  مهندس معماري أول للبرمجيات ومطور شامل بخبرة تتجاوز 8 سنوات في تصميم النظم الموزعة، إدارة السحابة، وتطوير تطبيقات الويب عالية الاعتمادية.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    عرض الملف المهني الكامل وتفاصيل الخبرات ←
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </PageContainer>
    </PortfolioShell>
  );
}
