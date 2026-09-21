'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { Card, Button } from '@/components';
import { ArrowLeft, ArrowRight, Rocket, CheckCircle2 } from 'lucide-react';

export const FinalOutcomeCTASection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const outcomes = [
    isRtl ? 'إتقان هندسة وتطوير الويب الحديث (Next.js & React)' : 'Modern Web Engineering Mastery (Next.js & React)',
    isRtl ? 'بناء مواقع متجاوبة فائقة السرعة مع أفضل معايير UI/UX' : 'Responsive High-Performance UI/UX Implementation',
    isRtl ? 'سير عمل مضاعف الإنتاجية باستخدام أدوات الذكاء الاصطناعي' : 'Supercharged Productivity with AI Workflows',
    isRtl ? 'موقع شخصي ومعرض أعمال مباشر على الإنترنت مع نطاقك الخاص' : 'Live Production Portfolio on Custom Domain',
    isRtl ? 'جاهزية كاملة لتقديم خدماتك واقتناص عقود العمل الحر' : 'Readiness to Pitch & Monetize Freelance Services',
  ];

  return (
    <section className="py-12 sm:py-16 text-start">
      <Card
        variant="default"
        className="p-8 sm:p-12 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-sunken)] border border-[var(--color-border)] shadow-md"
      >
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] text-caption font-bold">
            <Rocket className="w-3.5 h-3.5" />
            <span>{isRtl ? 'النتيجة الختامية للرحلة' : 'Your Tangible Outcome'}</span>
          </div>

          <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl
              ? 'جاهز للتحول من مستهلك للأكواد إلى صانع ويب متكامل؟'
              : 'Ready to Transition from Tutorial Consumer to End-to-End Web Creator?'}
          </h2>

          <p className="text-body text-[var(--color-text-muted)] leading-relaxed">
            {isRtl
              ? 'لا تنتظر اللحظة المثالية. الرحلة صممت لتبدأ معك من الصفر وتصعد بك حتى إطلاق موقعك الحقيقي وتسويقه.'
              : 'Do not wait for a mythical perfect moment. The curriculum starts at fundamentals and elevates you to live launch.'}
          </p>

          <div className="space-y-2.5 pt-2">
            {outcomes.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-body-sm font-medium text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
            <Link href="/journey">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
                rightIcon={
                  isRtl ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )
                }
              >
                {isRtl ? 'ابدأ رحلتك التعليمية الآن' : 'Start Your Journey Now'}
              </Button>
            </Link>

            <Link href="/modules">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {isRtl ? 'استعراض الوحدات العشر' : 'Browse All Modules'}
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};
