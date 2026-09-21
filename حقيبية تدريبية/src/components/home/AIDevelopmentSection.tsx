'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { Button, Card, Badge } from '@/components';
import {
  Sparkles,
  Search,
  Layers,
  Wrench,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

export const AIDevelopmentSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const aiWorkflowAreas = [
    {
      title: isRtl ? 'البحث والتخطيط المعماري' : 'Research & Architecture',
      description: isRtl
        ? 'تحليل متطلبات التطبيق، مقارنة المعماريات، وتوليد مخططات البيانات.'
        : 'Analyze technical requirements, evaluate trade-offs, and draft schema designs.',
      icon: <Search className="w-4 h-4 text-[var(--color-primary)]" />,
    },
    {
      title: isRtl ? 'التوليد السريع للمكونات' : 'Component Synthesis',
      description: isRtl
        ? 'توليد مكونات React متوافقة مع Tailwind ومعايير الوصول في ثوانٍ.'
        : 'Synthesize accessible React + Tailwind components with typed interfaces.',
      icon: <Layers className="w-4 h-4 text-[var(--color-secondary)]" />,
    },
    {
      title: isRtl ? 'تشخيص الأخطاء الجذرية' : 'Deep Root-Cause Debugging',
      description: isRtl
        ? 'تفكيك رسائل الخطأ المعقدة وفهم السبب الجذري بدلاً من الحلول الترقيعية.'
        : 'Deconstruct obscure runtime bugs and solve root causes cleanly.',
      icon: <Wrench className="w-4 h-4 text-[var(--color-primary)]" />,
    },
    {
      title: isRtl ? 'إعادة الهيكلة ومراجعة الكود' : 'Refactoring & Code Review',
      description: isRtl
        ? 'فحص الأكواد لاكتشاف مشاكل الأداء ومعايير الأمان وتحسين القراءة.'
        : 'Audit code quality, eliminate dead code, and ensure clean architecture.',
      icon: <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)]" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Manifesto Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge variant="accent" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
              {isRtl ? 'الذكاء الاصطناعي كشريك برمجي' : 'AI-Assisted Engineering'}
            </Badge>
          </div>

          <h2 className="text-h2 font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl ? (
              <>
                الذكاء الاصطناعي شريكك المعماري، <br />
                <span className="text-[var(--color-primary)]">وليس بديلاً عن فهمك.</span>
              </>
            ) : (
              <>
                AI is your development partner. <br />
                <span className="text-[var(--color-primary)]">Not your replacement.</span>
              </>
            )}
          </h2>

          <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
            {isRtl
              ? 'الفرق بين المطور التقليدي والمطور الفائق (10x Developer) اليوم ليس في من يكتب الكود أسرع بيده، بل في من يعرف كيف يوجه الذكاء الاصطناعي كمهندس معماري يدقق في كل سطر ويضمن متانته.'
              : 'The modern 10x engineer is not someone who types faster, but an architect who commands AI copilots with precise domain knowledge, verifying quality at every step.'}
          </p>

          <Link href="/ai-lab">
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
              {isRtl ? 'دخول مختبر موجهات الذكاء الاصطناعي' : 'Explore AI Lab Prompts'}
            </Button>
          </Link>
        </div>

        {/* Right Workflow Cards Column */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aiWorkflowAreas.map((area, idx) => (
            <Card
              key={idx}
              variant="default"
              className="p-5 bg-[var(--color-surface)] hover:border-[var(--color-secondary)] transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-sunken)] flex items-center justify-center mb-3">
                {area.icon}
              </div>
              <h3 className="text-body font-bold text-[var(--color-text)] mb-1.5">
                {area.title}
              </h3>
              <p className="text-caption text-[var(--color-text-muted)] leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
