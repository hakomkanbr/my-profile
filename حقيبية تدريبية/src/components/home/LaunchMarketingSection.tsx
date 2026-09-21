'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { Card, Button } from '@/components';
import { Rocket, TrendingUp, Search, Briefcase, ArrowLeft, ArrowRight } from 'lucide-react';

export const LaunchMarketingSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const pillars = [
    {
      title: isRtl ? 'الإطلاق الحي والأداء الفائق' : 'Production Launch & Performance',
      description: isRtl
        ? 'ربط النطاق المخصص، النشر السحابي المستمر (CI/CD)، وتحقيق سرعات خارقة في Core Web Vitals.'
        : 'Custom domain setup, continuous cloud pipelines, and optimal Core Web Vitals latency.',
      stage: '06 LAUNCH',
      icon: <Rocket className="w-5 h-5 text-[var(--color-primary)]" />,
    },
    {
      title: isRtl ? 'التهيئة للظهور في Google (SEO)' : 'Technical SEO & Metadata',
      description: isRtl
        ? 'بناء البيانات المنظمة (JSON-LD)، وسوم OpenGraph للمشاركة، وفهرسة الصفحات آلياً.'
        : 'Structured schema markup, OpenGraph social previews, and automated search indexing.',
      stage: '06 LAUNCH',
      icon: <Search className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      title: isRtl ? 'البراند الشخصي ومعرض الأعمال' : 'Personal Branding & Portfolio',
      description: isRtl
        ? 'تصميم موقعك الشخصي كمعرض أعمال يبرز قدراتك ويبني الثقة الفورية لدى مسؤولي التوظيف والعملاء.'
        : 'Curating an authoritative portfolio showcasing tangible client value and high craftsmanship.',
      stage: '07 GROW',
      icon: <TrendingUp className="w-5 h-5 text-[var(--color-primary)]" />,
    },
    {
      title: isRtl ? 'اقتناص عقود العمل الحر' : 'Freelancing & Client Contracts',
      description: isRtl
        ? 'تسعير المشاريع البرمجية، إعداد عروض الأسعار المقنعة، والتفاوض الذكي على المشاريع.'
        : 'Accurate pricing models, convincing freelance proposals, and effective client negotiation.',
      stage: '07 GROW',
      icon: <Briefcase className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2 max-w-3xl">
          <span className="text-label text-[var(--color-secondary)]">
            {isRtl ? 'ما بعد البرمجة' : 'Beyond Coding'}
          </span>
          <h2 className="text-h2 font-bold text-[var(--color-text)]">
            {isRtl
              ? 'موقعك لا يكتمل بمجرد كتابة الكود.. بل بإطلاقه وتسويقه'
              : 'Web Development Doesn’t End at Code; It Ends at Launch & Growth'}
          </h2>
          <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
            {isRtl
              ? 'معظم الدورات تتوقف عند كتابة الأكواد على جهازك المحلي. نحن نأخذك للمراحل الإنتاجية الحقيقية: النشر السحابي، والظهور في البحث، وجلب الزوار والعملاء.'
              : 'Most bootcamps abandon you at localhost. We guide you through production deployment, search rankings, and client monetization.'}
          </p>
        </div>

        <Link href="/marketing-lab" className="shrink-0">
          <Button
            variant="outline"
            size="md"
            rightIcon={
              isRtl ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )
            }
          >
            {isRtl ? 'استكشف مختبر التسويق' : 'Explore Marketing Lab'}
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((item, idx) => (
          <Card key={idx} variant="default" className="flex flex-col justify-between p-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--color-surface-sunken)] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                  {item.stage}
                </span>
              </div>
              <h3 className="text-body font-bold text-[var(--color-text)] mb-2">
                {item.title}
              </h3>
              <p className="text-caption text-[var(--color-text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
