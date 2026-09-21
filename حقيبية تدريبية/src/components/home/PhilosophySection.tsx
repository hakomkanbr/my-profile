'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { BookOpen, Hammer, Terminal, Sparkles, Rocket, TrendingUp } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const steps = [
    {
      code: 'LEARN',
      title: isRtl ? 'تعلّم المفهوم' : 'Learn Principles',
      description: isRtl
        ? 'فهم الأسس الهندسية، كيف يعمل الويب، ولماذا نختار هذه التقنية بالذات.'
        : 'Understand architectural foundations and technical decision rationales.',
      icon: <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />,
    },
    {
      code: 'BUILD',
      title: isRtl ? 'ابنِ الأساس' : 'Build Foundations',
      description: isRtl
        ? 'كتابة الكود الدلالي النظيف وتصميم الهيكل المتجاوب بـ HTML5 و Tailwind.'
        : 'Craft clean semantic markup and responsive UI architecture.',
      icon: <Hammer className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      code: 'PRACTICE',
      title: isRtl ? 'طبّق وتدرّب' : 'Practice Interactivity',
      description: isRtl
        ? 'بث المنطق الديناميكي وإدارة الحالة البرمجية عبر JavaScript و React.'
        : 'Implement dynamic logic, component state, and async data flows.',
      icon: <Terminal className="w-5 h-5 text-[var(--color-primary)]" />,
    },
    {
      code: 'USE AI',
      title: isRtl ? 'سخّر الذكاء الاصطناعي' : 'Amplify with AI',
      description: isRtl
        ? 'استخدام موجهات الـ AI لتسريع البرمجة، تصحيح الأخطاء، وفحص جودة الكود.'
        : 'Leverage precise prompt engineering to accelerate building and debugging.',
      icon: <Sparkles className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      code: 'LAUNCH',
      title: isRtl ? 'أطلق للإنتاج' : 'Launch to Production',
      description: isRtl
        ? 'النشر السحابي، تهيئة محركات البحث (SEO)، وتحقيق أعلى مقاييس الأداء.'
        : 'Continuous deployment, Core Web Vitals optimization, and live domain setup.',
      icon: <Rocket className="w-5 h-5 text-[var(--color-primary)]" />,
    },
    {
      code: 'MARKET',
      title: isRtl ? 'سوّق واقتنص الفرص' : 'Market & Monetize',
      description: isRtl
        ? 'بناء البراند الشخصي، إبراز معرض الأعمال، وتسعير الخدمات في العمل الحر.'
        : 'Establish personal brand authority, portfolio showcase, and client acquisition.',
      icon: <TrendingUp className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-10 space-y-2">
        <span className="text-label text-[var(--color-primary)]">
          {isRtl ? 'فلسفة التعلم' : 'Learning Philosophy'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl
            ? 'لا نعلّمك حفظ الأكواد.. نعلّمك كيف تبني وتطلق'
            : 'We Don’t Teach Syntax Memorization; We Teach Building & Launching'}
        </h2>
        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
          {isRtl
            ? 'كل وحدة وكل درس في هذا المسار محكوم بمسار عمل واضح ينقلك من التأسيس النظري إلى العمل التطبيقي ثم الاستثمار الفعلي.'
            : 'Every module and lesson follows a battle-tested cycle from core comprehension to production release and monetization.'}
        </p>
      </div>

      {/* Visual Sequence Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((step, idx) => (
          <div
            key={step.code}
            className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs flex flex-col justify-between hover:border-[var(--color-secondary)] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-black tracking-wider text-[var(--color-primary)] px-2 py-0.5 rounded-md bg-[var(--color-primary-subtle)]">
                  {String(idx + 1).padStart(2, '0')} — {step.code}
                </span>
                <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-sunken)] flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-body font-bold text-[var(--color-text)] mb-1.5">
                {step.title}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
