'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PortfolioShell, PageContainer } from '@/components';
import { ALL_WRITINGS } from '@/content/writings';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { BookOpen, Clock, Tag, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { WritingCategory } from '@/types';

export default function WritingsPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { ar: 'كل الكتابات', en: 'All Writings' } },
    { id: 'architecture', label: { ar: 'معمارية الأنظمة', en: 'System Architecture' } },
    { id: 'web-engineering', label: { ar: 'هندسة الويب', en: 'Web Engineering' } },
    { id: 'devops-cloud', label: { ar: 'السحابة و DevOps', en: 'Cloud & DevOps' } },
  ];

  const filteredWritings =
    selectedCategory === 'all'
      ? ALL_WRITINGS
      : ALL_WRITINGS.filter((w) => w.category === (selectedCategory as WritingCategory));

  return (
    <PortfolioShell>
      <PageContainer>
        <div className="space-y-12 sm:space-y-16 text-start">
          {/* Header Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isRtl ? 'الكتابات والتدوينات الهندسية' : 'Engineering Writings'}</span>
            </div>

            <h1 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight">
              {isRtl
                ? 'مقالات في معمارية النظم وهندسة الويب'
                : 'Architectural Essays & Engineering Notes'}
            </h1>

            <p className="text-body sm:text-lg text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
              {isRtl
                ? 'رؤى هندسية تطبيقية، أنماط معمارية متقدمة في النظم الموزعة والميكروسيرفس، واستراتيجيات تحسين الأداء والموثوقية من واقع الخبرة الإنتاجية.'
                : 'Applied architectural perspectives, distributed patterns, clean code discipline, and practical performance strategies for mission-critical software systems.'}
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border-subtle)]'
                    }`}
                  >
                    {getLocalizedText(cat.label, language)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Writings List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredWritings.map((writing, idx) => (
              <Reveal key={writing.slug} direction="up" delayMs={idx * 60} distance={16}>
                <article className="h-full flex flex-col justify-between rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)]/50 p-7 sm:p-8 shadow-sm transition-all duration-300 group hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-subtle)]">
                      <span className="px-2.5 py-1 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-secondary)] font-semibold">
                        {getLocalizedText(writing.categoryLabel, language)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {writing.readTimeMinutes} {isRtl ? 'دقائق' : 'min read'}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors leading-snug">
                      <Link href={`/writings/${writing.slug}`}>
                        {getLocalizedText(writing.title, language)}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                      {getLocalizedText(writing.summary, language)}
                    </p>

                    {/* Key Takeaway snippet */}
                    {writing.keyTakeaways[0] && (
                      <div className="p-3.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)] flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          <strong>{isRtl ? 'نقطة معمارية: ' : 'Key Takeaway: '}</strong>
                          {getLocalizedText(writing.keyTakeaways[0], language)}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {writing.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)] border border-[var(--color-border-subtle)]"
                        >
                          <Tag className="w-2.5 h-2.5 opacity-60" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)]">
                    <Link
                      href={`/writings/${writing.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors"
                    >
                      <span>{isRtl ? 'قراءة المقال والتحليل المعماري' : 'Read Full Architecture Essay'}</span>
                      {isRtl ? (
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      ) : (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
