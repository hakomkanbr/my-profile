'use client';

import React from 'react';
import Link from 'next/link';
import { PageContainer } from '@/components';
import { EngineeringWriting } from '@/types';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { Clock, Tag, ArrowRight, ArrowLeft, BookOpen, CheckCircle2, UserCheck } from 'lucide-react';

interface WritingDetailClientProps {
  writing: EngineeringWriting;
}

export function WritingDetailClient({ writing }: WritingDetailClientProps) {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const title = getLocalizedText(writing.title, language);
  const summary = getLocalizedText(writing.summary, language);
  const categoryLabel = getLocalizedText(writing.categoryLabel, language);

  return (
    <PageContainer>
      <article className="max-w-4xl mx-auto space-y-10 sm:space-y-12 text-start">
        {/* Breadcrumb / Back Link */}
        <div>
          <Link
            href="/writings"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{isRtl ? 'العودة إلى فهرس المقالات والكتابات' : 'Back to All Writings'}</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-5 pb-8 border-b border-[var(--color-border)]">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--color-text-subtle)]">
            <span className="px-3 py-1 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-secondary)] font-bold">
              {categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {writing.readTimeMinutes} {isRtl ? 'دقائق قراءة' : 'min read'}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              {new Date(writing.publishedAt).toLocaleDateString(isRtl ? 'ar-SA' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed">
            {summary}
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
        {writing.keyTakeaways && writing.keyTakeaways.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{isRtl ? 'الركائز المعمارية الأساسية في هذا المقال' : 'Key Architectural Takeaways'}</span>
            </h3>
            <ul className="space-y-2.5">
              {writing.keyTakeaways.map((takeaway, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 mt-2.5" />
                  <span>{getLocalizedText(takeaway, language)}</span>
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
                {getLocalizedText(section.heading, language)}
              </h2>

              <div className="space-y-4 font-normal">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {getLocalizedText(p, language)}
                  </p>
                ))}
              </div>

              {section.codeSnippet && (
                <div className="pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 font-mono text-xs sm:text-sm">
                    <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 text-xs flex justify-between items-center">
                      <span>{getLocalizedText(section.codeSnippet.caption, language) || 'Architecture Snippet'}</span>
                      <span className="uppercase text-[10px] text-blue-400 font-bold">
                        {section.codeSnippet.language}
                      </span>
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
                <UserCheck className="w-4 h-4 text-[var(--color-secondary)]" />
                <span className="text-xs font-mono font-bold uppercase text-[var(--color-secondary)] tracking-wider">
                  {isRtl ? 'مهندس برمجيات ومطور ويب' : 'Software Engineer & Web Developer'}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[var(--color-text)]">
                {isRtl ? 'عبد الحكيم قنبر' : 'Abdulhakim Kanbr'}
              </h4>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'مهندس برمجيات ومطور ويب بخبرة تتجاوز 8 سنوات في تطوير البرمجيات وتصميم الأنظمة. أشارك هنا ما أتعلمه من العمل الهندسي والمشاريع الواقعية.'
                  : 'Software engineer and web developer with over 8 years of practical experience in software development and system design, sharing real-world engineering learnings.'}
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
                >
                  <span>{isRtl ? 'عن عبد الحكيم وطريقة العمل' : 'About Abdulhakim & Engineering Practice'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </PageContainer>
  );
}
