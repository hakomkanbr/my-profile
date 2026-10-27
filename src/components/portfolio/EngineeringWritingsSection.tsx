'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { getFeaturedWritings } from '@/content/writings';
import { getLocalizedText } from '@/lib/utils';
import { Button } from '@/components/ui';
import { ArrowLeft, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Reveal } from '@/components/motion';

export const EngineeringWritingsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const writings = getFeaturedWritings().slice(0, 3);

  return (
    <section
      id="writings"
      className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start bg-[var(--color-background)]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? 'المحتوى والمعرفة' : 'Content & Knowledge'}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl
                  ? 'مقالات وتجارب من واقع العمل'
                  : 'Articles & Practical Insights'}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                {isRtl
                  ? 'مقالات مختارة أشارك فيها خلاصة تجاربي في بناء المواقع، تنظيم الأنظمة البرمجية، وتحسين الأداء والأمان.'
                  : 'Selected articles sharing practical lessons on building websites, organizing software systems, and improving performance and security.'}
              </p>
            </div>

            <Link href="/writings" className="shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="font-bold group"
                rightIcon={
                  isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  )
                }
              >
                {isRtl ? 'تصفح جميع المقالات' : 'Read All Articles'}
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* 3 Curated Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {writings.map((article, idx) => {
            const title = getLocalizedText(article.title, language);
            const summary = getLocalizedText(article.summary, language);
            const category = getLocalizedText(article.categoryLabel, language);
            const readTime = `${article.readTimeMinutes} ${isRtl ? 'دقائق قراءة' : 'min read'}`;

            return (
              <Reveal key={article.slug} direction="up" delay={80 + idx * 80}>
                <Link
                  href={`/writings/${article.slug}`}
                  className="group p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-5 hover:border-[var(--color-secondary)]/60 transition-all duration-300 h-full"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2 text-xs text-[var(--color-text-subtle)]">
                      <span className="font-semibold text-[var(--color-secondary)] bg-[var(--color-primary-subtle)] px-2.5 py-0.5 rounded-md">
                        {category}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-h3 font-bold text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="text-body-sm text-[var(--color-text-muted)] font-normal leading-relaxed line-clamp-3">
                      {summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)]">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'قراءة المقال' : 'Read Article'}</span>
                    </span>
                    {isRtl ? (
                      <ArrowLeft className="w-3.5 h-3.5 text-[var(--color-secondary)] transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--color-secondary)] transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
