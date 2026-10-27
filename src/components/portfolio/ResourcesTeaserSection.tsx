'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { ALL_RESOURCES } from '@/content/resources';
import { getLocalizedText } from '@/lib/utils';
import { Button, WhatsAppActionFeedback } from '@/components/ui';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  MessageCircle,
} from 'lucide-react';
import { Reveal } from '@/components/motion';
import {
  buildResourceRequestMessage,
  openWhatsAppChat,
} from '@/lib/whatsapp';

export const ResourcesTeaserSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [nameOrEmail, setNameOrEmail] = useState('');
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);

  const featuredResources = ALL_RESOURCES.slice(0, 3);

  const handleWhatsAppResourceRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildResourceRequestMessage({
      nameOrEmail,
      topic: 'قوائم الفحص والقوالب العملية والموارد الجديدة',
      pageUrl: 'https://abdulhakimkanbr.com/#resources',
    });
    setPreparedMessage(message);
    openWhatsAppChat(message);
  };

  return (
    <section
      id="resources"
      className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start bg-[var(--color-surface-sunken)]/40"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? 'موارد وتدريب عملي' : 'Resources & Practical Training'}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl
                  ? 'قوالب جاهزة ومسار تدريبي لبناء المواقع'
                  : 'Ready Checklists & Web Creation Track'}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                {isRtl
                  ? 'أدوات وقوائم فحص مختصرة تساعدك عند إطلاق موقعك، بالإضافة إلى مساري التدريبي التفاعلي WEB CREATOR AI.'
                  : 'Practical checklists and templates to help you launch better websites, alongside my interactive training program WEB CREATOR AI.'}
              </p>
            </div>

            <Link href="/resources" className="shrink-0">
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
                {isRtl ? 'استعراض جميع الموارد' : 'Browse All Resources'}
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* 3 Practical Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredResources.map((res, idx) => {
            const title = getLocalizedText(res.title, language);
            const desc = getLocalizedText(res.description, language);

            const content = (
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-4 hover:border-[var(--color-secondary)]/50 transition-all duration-300 h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    {res.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                        {res.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-h4 font-bold text-[var(--color-text)] leading-snug">
                    {title}
                  </h3>

                  <p className="text-body-sm text-[var(--color-text-muted)] font-normal leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-bold text-[var(--color-secondary)]">
                  <span>{isRtl ? 'فتح المورد' : 'Open Resource'}</span>
                  {res.isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5" />
                  ) : isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>
            );

            return (
              <Reveal key={res.id} direction="up" delay={70 + idx * 70}>
                {res.isExternal ? (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={res.url} className="block h-full">
                    {content}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Two-Column Action Row: WEB CREATOR AI + WhatsApp Resource Request */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* WEB CREATOR AI Card */}
          <Reveal direction="up" delay={180} className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs flex flex-col justify-between space-y-5 h-full">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] text-xs font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>WEB CREATOR AI</span>
                </div>
                <h3 className="text-h3 font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? 'تعلّم بناء موقعك خطوة بخطوة مع مراجعة الأنشطة عبر واتساب'
                    : 'Learn to Build Your Website Step by Step with WhatsApp Feedback'}
                </h3>
                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'مسار تدريبي عملي مكوّن من 12 جلسة، يأخذك من تخطيط الفكرة وتصميم الواجهات إلى كتابة الكود واستخدام الذكاء الاصطناعي بذكاء حتى نشر موقعك على الإنترنت.'
                    : 'A practical 12-session training track taking you from planning and UI design to coding and smart AI usage until your website is live.'}
                </p>
              </div>

              <div className="pt-2">
                <Link href="/web-creator-ai">
                  <Button
                    variant="primary"
                    size="md"
                    className="font-bold"
                    rightIcon={
                      isRtl ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )
                    }
                  >
                    {isRtl
                      ? 'دخول مسار WEB CREATOR AI'
                      : 'Enter WEB CREATOR AI'}
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* WhatsApp Resource / Updates Request Card */}
          <Reveal direction="up" delay={240} className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-2">
                <h3 className="text-h4 font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'اطلب قالبًا أو انضم لقائمة التحديثات عبر واتساب'
                    : 'Request a Template or Join Updates via WhatsApp'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'أدخل اسمك أو بريدك (اختياري) ثم اضغط الزر لفتح رسالة واتساب جاهزة لطلب القوالب أو متابعة الدروس الجديدة.'
                    : 'Enter your name or email (optional) and click to open a ready WhatsApp message to request templates or updates.'}
                </p>
              </div>

              <form onSubmit={handleWhatsAppResourceRequest} className="space-y-3">
                <input
                  type="text"
                  value={nameOrEmail}
                  onChange={(e) => setNameOrEmail(e.target.value)}
                  placeholder={
                    isRtl
                      ? 'الاسم أو البريد الإلكتروني (اختياري)'
                      : 'Your name or email (optional)'
                  }
                  aria-label={
                    isRtl
                      ? 'الاسم أو البريد الإلكتروني'
                      : 'Your name or email'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-secondary)]"
                />
                <Button
                  type="submit"
                  variant="outline"
                  size="md"
                  className="w-full font-bold justify-center"
                  leftIcon={
                    <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  }
                >
                  {isRtl
                    ? 'طلب الموارد والتحديثات عبر واتساب'
                    : 'Request via WhatsApp'}
                </Button>
              </form>

              {preparedMessage && (
                <WhatsAppActionFeedback
                  message={preparedMessage}
                  isRtl={isRtl}
                  onClose={() => setPreparedMessage(null)}
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
