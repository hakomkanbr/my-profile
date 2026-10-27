'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PortfolioShell,
  PageContainer,
  PageHeader,
  Card,
  Badge,
  Button,
  WhatsAppActionFeedback,
} from '@/components';
import { PortfolioProject } from '@/types';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Layers,
  Lightbulb,
  MessageCircle,
  Server,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react';
import {
  buildClientInquiryMessage,
  getCurrentPageUrl,
  openWhatsAppChat,
} from '@/lib/whatsapp';

interface Props {
  project: PortfolioProject;
  otherProjects?: PortfolioProject[];
}

export const ProjectCaseStudyClient: React.FC<Props> = ({ project }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [preparedWhatsAppMsg, setPreparedWhatsAppMsg] = useState<string | null>(
    null
  );

  const title = getLocalizedText(project.title, language);
  const tagline = getLocalizedText(project.tagline, language);
  const category = getLocalizedText(project.category, language);
  const role = getLocalizedText(project.role, language);
  const status = getLocalizedText(project.status, language);
  const overview = getLocalizedText(project.overview, language);

  const handleWhatsAppInquiry = () => {
    const msg = buildClientInquiryMessage({
      projectType: `استفسار حول مشروع (${getLocalizedText(project.title, 'ar')})`,
      details: `قرأت تفاصيل مشروع (${getLocalizedText(project.title, 'ar')}) وأود التحدث معك بخصوص مشروع أو نظام مشابه.`,
      pageUrl: getCurrentPageUrl(`/projects/${project.slug}`),
    });
    setPreparedWhatsAppMsg(msg);
    openWhatsAppChat(msg);
  };

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={title}
          subtitle={tagline}
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            {
              id: '2',
              label: isRtl ? 'أعمالي ومنتجاتي' : 'Work & Products',
              href: '/projects',
            },
            { id: '3', label: title, isCurrent: true },
          ]}
          actions={
            <div className="flex flex-wrap items-center gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target={
                    project.liveUrl.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    project.liveUrl.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <Button
                    variant="primary"
                    size="md"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                  >
                    {isRtl ? 'زيارة الموقع الحي' : 'Visit Live Site'}
                  </Button>
                </a>
              )}

              <Button
                variant="outline"
                size="md"
                onClick={handleWhatsAppInquiry}
                leftIcon={
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                }
              >
                {isRtl
                  ? 'اطلب مشروعًا مشابهًا عبر واتساب'
                  : 'Request Similar on WhatsApp'}
              </Button>
            </div>
          }
        />

        <div className="space-y-10 pb-16 text-start">
          {/* 1. Executive Metadata Strip */}
          <Card className="p-6 sm:p-8 bg-[var(--color-surface)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'التصنيف' : 'Category'}
                </span>
                <div>
                  <Badge variant="primary" size="sm">
                    {category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'دوري في المشروع' : 'My Role'}
                </span>
                <p className="text-sm font-bold text-[var(--color-text)]">
                  {role}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'حالة المشروع' : 'Status'}
                </span>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {status}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'سنة الإطلاق' : 'Release Year'}
                </span>
                <p className="text-sm font-mono font-bold text-[var(--color-text)]">
                  {project.year || '2025'}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--color-border-subtle)] space-y-2.5">
              <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase block">
                {isRtl
                  ? 'التقنيات المستخدمة في بناء النظام'
                  : 'Technologies Used'}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* 2. Overview & Target Audience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card
              className={`${project.productAudience ? 'lg:col-span-8' : 'lg:col-span-12'} p-6 sm:p-8 space-y-4`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                <Layers className="w-4 h-4" />
                <span>
                  {isRtl ? 'نظرة عامة على المشروع' : 'Project Overview'}
                </span>
              </div>
              <h2 className="text-h2 font-extrabold text-[var(--color-text)]">
                {isRtl
                  ? 'ماذا يقدّم هذا النظام وكيف يعمل؟'
                  : 'What This System Does & How It Works'}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] leading-relaxed">
                {overview}
              </p>
            </Card>

            {project.productAudience && (
              <Card className="lg:col-span-4 p-6 sm:p-8 bg-[var(--color-surface-sunken)] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-h3 font-bold text-[var(--color-text)]">
                    {isRtl ? 'لمن صُمم هذا المنتج؟' : 'Who Is It Built For?'}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {getLocalizedText(project.productAudience, language)}
                  </p>
                </div>
              </Card>
            )}
          </div>

          {/* 3. Problem vs Solution */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem && (
                <Card className="p-6 sm:p-8 space-y-4 border-s-4 border-s-amber-500">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">
                    <ShieldAlert className="w-4 h-4" />
                    <span>
                      {isRtl
                        ? 'المشكلة أو التحدي'
                        : 'The Problem & Challenge'}
                    </span>
                  </div>
                  <h3 className="text-h3 font-bold text-[var(--color-text)]">
                    {isRtl
                      ? 'ما الصعوبة التي كان يواجهها المستخدم؟'
                      : 'What Problem Needed Solving?'}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {getLocalizedText(project.problem, language)}
                  </p>
                </Card>
              )}

              {project.solution && (
                <Card className="p-6 sm:p-8 space-y-4 border-s-4 border-s-emerald-500">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {isRtl ? 'الحل الذي تم بناؤه' : 'The Solution Built'}
                    </span>
                  </div>
                  <h3 className="text-h3 font-bold text-[var(--color-text)]">
                    {isRtl
                      ? 'كيف عالج النظام هذه المشكلة؟'
                      : 'How the System Solved It'}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {getLocalizedText(project.solution, language)}
                  </p>
                </Card>
              )}
            </div>
          )}

          {/* 4. Architecture & Technical Implementation */}
          {(project.architecture ||
            (project.technicalImplementation &&
              project.technicalImplementation.length > 0)) && (
            <Card className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>
                    {isRtl
                      ? 'التفاصيل التقنية وبنية النظام'
                      : 'Technical Details & Architecture'}
                  </span>
                </div>
                <h2 className="text-h2 font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? 'كيف بُني النظام من الداخل؟'
                    : 'How the System Is Architected'}
                </h2>
                {project.architecture && (
                  <p className="text-body text-[var(--color-text-muted)] leading-relaxed pt-1">
                    {getLocalizedText(project.architecture, language)}
                  </p>
                )}
              </div>

              {project.technicalImplementation &&
                project.technicalImplementation.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.technicalImplementation.map((section, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-3"
                      >
                        <h3 className="text-h4 font-bold text-[var(--color-text)]">
                          {getLocalizedText(section.title, language)}
                        </h3>
                        <ul className="space-y-2">
                          {section.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2 text-xs sm:text-body-sm text-[var(--color-text-muted)] leading-relaxed"
                            >
                              <span className="text-[var(--color-secondary)] font-bold">
                                •
                              </span>
                              <span>{getLocalizedText(detail, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

              {project.infrastructure && (
                <div className="p-4 rounded-xl bg-[var(--color-primary-subtle)] border border-[var(--color-secondary)]/20 flex items-start gap-3">
                  <Server className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase block">
                      {isRtl
                        ? 'الاستضافة وبيئة التشغيل'
                        : 'Hosting & Infrastructure'}
                    </span>
                    <p className="text-xs sm:text-body-sm text-[var(--color-text)] font-medium">
                      {getLocalizedText(project.infrastructure, language)}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          )}

          {/* 5. Key Features & Lessons Learned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {project.keyFeatures.length > 0 && (
              <Card
                className={`${project.lessonsLearned && project.lessonsLearned.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'} p-6 sm:p-8 space-y-4`}
              >
                <h3 className="text-h3 font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'أبرز المزايا التي يقدمها النظام'
                    : 'Key Capabilities & Features'}
                </h3>
                <div className="space-y-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                      <span className="text-body-sm text-[var(--color-text)] font-medium">
                        {getLocalizedText(feat, language)}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {project.lessonsLearned && project.lessonsLearned.length > 0 && (
              <Card className="lg:col-span-5 p-6 sm:p-8 bg-[var(--color-surface-sunken)] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-h3 font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'خلاصة التجربة والدروس المستفادة'
                    : 'Key Takeaways'}
                </h3>
                <div className="space-y-3">
                  {project.lessonsLearned.map((lesson, idx) => (
                    <p
                      key={idx}
                      className="text-body-sm text-[var(--color-text-muted)] leading-relaxed"
                    >
                      {getLocalizedText(lesson, language)}
                    </p>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* 6. Bottom Navigation & WhatsApp CTA */}
          <Card className="p-6 sm:p-8 bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-h4 font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'هل ترغب في بناء مشروع أو نظام مشابه؟'
                    : 'Looking to build a similar project or system?'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {isRtl
                    ? 'تواصل معي مباشرة عبر واتساب لمناقشة متطلبات مشروعك.'
                    : 'Message me directly on WhatsApp to discuss your project requirements.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={
                      isRtl ? (
                        <ArrowRight className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowLeft className="w-3.5 h-3.5" />
                      )
                    }
                  >
                    {isRtl ? 'العودة لجميع الأعمال' : 'Back to Projects'}
                  </Button>
                </Link>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleWhatsAppInquiry}
                  className="font-bold bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white"
                  leftIcon={<MessageCircle className="w-3.5 h-3.5" />}
                >
                  {isRtl
                    ? 'ناقش مشروعك عبر واتساب'
                    : 'Chat on WhatsApp'}
                </Button>
              </div>
            </div>

            {preparedWhatsAppMsg && (
              <WhatsAppActionFeedback
                message={preparedWhatsAppMsg}
                isRtl={isRtl}
                onClose={() => setPreparedWhatsAppMsg(null)}
              />
            )}
          </Card>
        </div>
      </PageContainer>
    </PortfolioShell>
  );
};
