'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { Button } from '@/components/ui';
import { ArrowLeft, ArrowRight, Cpu, Compass } from 'lucide-react';

export const FlagshipProductSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <section className="py-14 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[var(--color-primary-subtle)] text-[var(--color-primary)] text-xs font-bold font-mono">
            <span>WEB CREATOR AI</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span>{isRtl ? 'الحقيبة التدريبية المتكاملة' : 'Interactive Kit'}</span>
          </div>

          <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl ? (
              <>
                منصة تعليمية تنقلك من الفكرة <br className="hidden sm:inline" />
                إلى منتج ويب حقيقي في السوق.
              </>
            ) : (
              <>
                An engineering platform bridging concept <br className="hidden sm:inline" />
                to live production in the market.
              </>
            )}
          </h2>

          <p className="text-body text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {isRtl
              ? 'صُممت لتكون أداة تدريب للمدرب، وبيئة تعلم عملية للمتدرب، تركز على التطبيق الفعلي وبناء المشاريع.'
              : 'Engineered for live instructor delivery and hands-on trainee mastery, centered on shipping real apps.'}
          </p>
        </div>

        {/* Product Architecture Columns - Balanced height and clear copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)]/50 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {isRtl ? 'رحلة المراحل السبع (01-07)' : 'The 7-Stage Journey'}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'خارطة طريق متسلسلة تبدأ بالتفكير المعماري، ثم تصميم الواجهات وكتابة الكود الحديث، وصولاً للنشر الحي والتسويق.'
                  : 'A sequential roadmap spanning architecture, modern UI, production code, cloud deployment, and market growth.'}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--color-border-subtle)]">
              <Link
                href="/web-creator-ai/journey"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
              >
                <span>{isRtl ? 'استعراض مراحل الرحلة' : 'Explore the 7 Stages'}</span>
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)]/50 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {isRtl ? 'معامل الكود والذكاء الاصطناعي' : 'AI & Engineering Labs'}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'أدوات وموجهات ذكاء اصطناعي تفاعلية لتسريع كتابة الأكواد ومراجعتها، مع خطط تهيئة محركات البحث (SEO) واستراتيجيات العمل الحر.'
                  : 'Applied AI prompts to accelerate component building and debugging, plus SEO frameworks and freelance client tactics.'}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--color-border-subtle)]">
              <Link
                href="/web-creator-ai/ai-lab"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
              >
                <span>{isRtl ? 'دخول مختبر الذكاء الاصطناعي' : 'Open AI Lab'}</span>
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal Direct Action Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h4 className="text-h4 font-bold text-[var(--color-text)]">
              {isRtl ? 'استكشف المنصة التدريبية الآن' : 'Experience the Training Kit'}
            </h4>
            <p className="text-body-sm text-[var(--color-text-muted)]">
              {isRtl
                ? 'استعرض المنهج، تتبّع الدروس، وطبّق عملياً على مشاريع برمجية حقيقية.'
                : 'Access 10 full modules and build live projects step by step.'}
            </p>
          </div>

          <Link href="/web-creator-ai" className="shrink-0 w-full sm:w-auto">
            <Button
              size="md"
              variant="primary"
              className="w-full sm:w-auto font-bold"
              rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            >
              {isRtl ? 'دخول الحقيبة التدريبية' : 'Enter Training Kit'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

