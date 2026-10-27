'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  Card,
  Badge,
  Button,
  WhatsAppActionFeedback,
} from '@/components';
import { ALL_RESOURCES } from '@/content';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Briefcase,
  ExternalLink,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import {
  buildResourceRequestMessage,
  openWhatsAppChat,
} from '@/lib/whatsapp';

export default function WebCreatorResourcesPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: isRtl ? 'الكل' : 'All' },
    {
      key: 'cheat-sheet',
      label: isRtl ? 'قوائم فحص وأوراق سريعة' : 'Checklists & Cheat Sheets',
    },
    { key: 'template', label: isRtl ? 'قوالب جاهزة' : 'Templates' },
    { key: 'documentation', label: isRtl ? 'مراجع رسمية' : 'Official Docs' },
    { key: 'tool', label: isRtl ? 'أدوات الفحص' : 'Audit Tools' },
  ];

  const filtered =
    selectedCategory === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.category === selectedCategory);

  const handleRequestResourceWhatsApp = (resourceTitle: string) => {
    const msg = buildResourceRequestMessage({
      topic: resourceTitle,
      pageUrl: 'https://abdulhakimkanbr.com/web-creator-ai/resources',
    });
    setPreparedMessage(msg);
    openWhatsAppChat(msg);
  };

  return (
    <LearningShell
      headerTitle={isRtl ? 'الموارد والمختبرات' : 'Resources & Labs'}
    >
      <PageContainer>
        <PageHeader
          title={
            isRtl
              ? 'مركز الموارد والقوالب والمختبرات'
              : 'Resources, Templates & Labs Hub'
          }
          subtitle={
            isRtl
              ? 'مدخل واحد يجمع لك قوائم الفحص، القوالب الجاهزة، مختبر أوامر الذكاء الاصطناعي، وأدوات تهيئة الموقع للإطلاق.'
              : 'One unified place for checklists, starter templates, the AI prompt lab, and launch & SEO tools.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: 'WEB CREATOR AI', href: '/web-creator-ai' },
            {
              id: '3',
              label: isRtl ? 'الموارد والمختبرات' : 'Resources & Labs',
              isCurrent: true,
            },
          ]}
        />

        <div className="space-y-8 pb-16 text-start">
          {/* Quick Labs & Workshops Entry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-5 flex flex-col justify-between space-y-4 border border-[var(--color-border)]">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? 'مختبر الذكاء الاصطناعي (AI Lab)'
                    : 'AI Prompts Lab'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'أوامر وموجهات جاهزة للنسخ تساعدك في بناء واجهات الصفحات وتصحيح الأخطاء البرمجية.'
                    : 'Ready-to-copy prompts to help you build clean UI components and debug code.'}
                </p>
              </div>
              <Link
                href="/web-creator-ai/ai-lab"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
              >
                <span>{isRtl ? 'فتح مختبر AI' : 'Open AI Lab'}</span>
                {isRtl ? (
                  <ArrowLeft className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </Link>
            </Card>

            <Card className="p-5 flex flex-col justify-between space-y-4 border border-[var(--color-border)]">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? 'مختبر الإطلاق والتسويق'
                    : 'Launch & Marketing Lab'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'قواعد تهيئة موقعك لمحركات البحث (SEO) وخطوات عرض أعمالك للعملاء.'
                    : 'Practical SEO rules and steps to present your web projects to clients.'}
                </p>
              </div>
              <Link
                href="/web-creator-ai/marketing-lab"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
              >
                <span>
                  {isRtl ? 'فتح مختبر التسويق' : 'Open Marketing Lab'}
                </span>
                {isRtl ? (
                  <ArrowLeft className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </Link>
            </Card>

            <Card className="p-5 flex flex-col justify-between space-y-4 border border-[var(--color-border)]">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--color-text)]">
                  {isRtl ? 'ورش المشاريع التطبيقية' : 'Project Workshops'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'مشاريع عملية متدرجة مع قوائم مهام واضحة وتسليم النتيجة عبر واتساب.'
                    : 'Progressive hands-on projects with task checklists and WhatsApp submission.'}
                </p>
              </div>
              <Link
                href="/web-creator-ai/projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
              >
                <span>{isRtl ? 'استعراض المشاريع' : 'Browse Projects'}</span>
                {isRtl ? (
                  <ArrowLeft className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </Link>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                size="sm"
                variant={selectedCategory === cat.key ? 'primary' : 'outline'}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res) => {
              const title = getLocalizedText(res.title, language);
              return (
                <Card
                  key={res.id}
                  variant="interactive"
                  className="flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center">
                        <Bookmark className="w-4 h-4" />
                      </div>
                      {res.badge && (
                        <Badge variant="outline" size="sm">
                          {res.badge}
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-h4 font-bold text-[var(--color-text)] pt-1">
                      {title}
                    </h3>

                    <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                      {getLocalizedText(res.description, language)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-2">
                    {res.isExternal ? (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
                      >
                        <span>
                          {isRtl ? 'زيارة الرابط الرسمي' : 'Visit Official Link'}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={res.url}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
                      >
                        <span>{isRtl ? 'فتح المورد' : 'Open Resource'}</span>
                        {isRtl ? (
                          <ArrowLeft className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </Link>
                    )}

                    <button
                      type="button"
                      onClick={() => handleRequestResourceWhatsApp(title)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--color-text-muted)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>
                        {isRtl ? 'اطلب مساعدة' : 'Ask on WhatsApp'}
                      </span>
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>

          {preparedMessage && (
            <WhatsAppActionFeedback
              message={preparedMessage}
              isRtl={isRtl}
              onClose={() => setPreparedMessage(null)}
            />
          )}
        </div>
      </PageContainer>
    </LearningShell>
  );
}
