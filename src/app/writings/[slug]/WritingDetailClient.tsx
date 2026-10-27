'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PageContainer, WhatsAppActionFeedback } from '@/components';
import { EngineeringWriting } from '@/types';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { Clock, Tag, ArrowRight, ArrowLeft, BookOpen, CheckCircle2, UserCheck, MessageCircle } from 'lucide-react';
import { buildClientInquiryMessage, openWhatsAppChat } from '@/lib/whatsapp';

interface WritingDetailClientProps {
  writing: EngineeringWriting;
}

export function WritingDetailClient({ writing }: WritingDetailClientProps) {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [whatsAppMessage, setWhatsAppMessage] = useState<string | null>(null);

  const title = getLocalizedText(writing.title, language);
  const summary = getLocalizedText(writing.summary, language);
  const categoryLabel = getLocalizedText(writing.categoryLabel, language);

  const handleDiscussOnWhatsApp = () => {
    const message = buildClientInquiryMessage({
      inquiryType: isRtl ? 'مناقشة مقال أو استشارة تقنية' : 'Article Discussion / Technical Consultation',
      projectOrService: title,
      message: isRtl
        ? `مرحبًا عبد الحكيم، قرأت مقالك «${title}» وأود التحدث معك حول تطبيق هذه الأفكار أو استشارة تقنية ذات صلة.`
        : `Hello Abdulhakim, I read your article "${title}" and would like to discuss applying these concepts or a related consultation.`,
      language,
    });
    setWhatsAppMessage(message);
    openWhatsAppChat(message);
  };

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
            <span>{isRtl ? 'العودة إلى جميع المقالات' : 'Back to All Articles'}</span>
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
              <span>{isRtl ? 'أهم النقاط التي يغطيها المقال' : 'Key Takeaways Covered in This Article'}</span>
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
                      <span>{getLocalizedText(section.codeSnippet.caption, language) || 'Code Example'}</span>
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

        {/* Author Bio & WhatsApp Discussion Card */}
        <footer className="pt-10 border-t border-[var(--color-border)] space-y-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/myphoto.jfif"
              alt="Abdulhakim Kanbr"
              className="w-20 h-20 rounded-2xl object-cover object-top ring-2 ring-[var(--color-border)] shrink-0"
            />
            <div className="space-y-3 text-center sm:text-start flex-1">
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
                  ? 'مهندس برمجيات ومطور ويب بخبرة تتجاوز 8 سنوات في بناء المواقع والأنظمة المخصصة ومنتجات SaaS. أشارك هنا خلاصة ما أتعلمه من العمل والمشاريع الواقعية.'
                  : 'Software engineer and web developer with over 8 years of experience building websites, custom systems, and SaaS products.'}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  type="button"
                  onClick={handleDiscussOnWhatsApp}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isRtl ? 'ناقش هذا المقال عبر واتساب' : 'Discuss on WhatsApp'}</span>
                </button>
                <Link
                  href="/about"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1 px-3 py-2"
                >
                  <span>{isRtl ? 'تعرف على عبد الحكيم وطريقة العمل' : 'About Abdulhakim & How I Work'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            </div>
          </div>

          {whatsAppMessage && (
            <WhatsAppActionFeedback
              message={whatsAppMessage}
              language={language}
              onClose={() => setWhatsAppMessage(null)}
            />
          )}
        </footer>
      </article>
    </PageContainer>
  );
}
