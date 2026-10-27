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
import { ExperienceTimelineSection } from '@/components/portfolio';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileText,
  GraduationCap,
  Layers,
  MessageCircle,
} from 'lucide-react';
import {
  buildClientInquiryMessage,
  buildResumeRequestMessage,
  getCurrentPageUrl,
  openWhatsAppChat,
} from '@/lib/whatsapp';

export default function AboutPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const name = getLocalizedText(INSTRUCTOR_PROFILE.name, language);
  const [preparedWhatsAppMsg, setPreparedWhatsAppMsg] = useState<string | null>(
    null
  );

  const handleRequestResume = () => {
    const msg = buildResumeRequestMessage(getCurrentPageUrl('/about#cv'));
    setPreparedWhatsAppMsg(msg);
    openWhatsAppChat(msg);
  };

  const handleContactWhatsApp = () => {
    const msg = buildClientInquiryMessage({
      projectType: 'مشروع جديد أو استشارة',
      details: 'اطلعت على صفحة (عنّي) في موقعك وأرغب في التواصل معك.',
      pageUrl: getCurrentPageUrl('/about'),
    });
    setPreparedWhatsAppMsg(msg);
    openWhatsAppChat(msg);
  };

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={
            isRtl
              ? `عن ${name} — السيرة المهنية وطريقة العمل`
              : `About ${name} — Background & Approach`
          }
          subtitle={getLocalizedText(INSTRUCTOR_PROFILE.roleTitle, language)}
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: isRtl ? 'عنّي' : 'About', isCurrent: true },
          ]}
        />

        <div className="space-y-12 pb-16 text-start">
          {/* 1. Executive Summary & Portrait */}
          <Card className="p-6 sm:p-10 bg-linear-to-b from-[var(--color-surface)] to-[var(--color-surface-sunken)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative rounded-2xl p-2 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm max-w-[260px] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/myphoto.jfif"
                    alt={name}
                    className="w-full aspect-4/5 object-cover object-top rounded-xl"
                  />
                  <div className="p-3 text-center space-y-1">
                    <span className="text-base font-extrabold text-[var(--color-text)] block">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-[var(--color-secondary)] block">
                      {isRtl
                        ? 'مطور مواقع ومنتجات رقمية ومدرب تقني'
                        : 'Web & Digital Product Developer'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <Badge variant="primary" size="md">
                  {isRtl
                    ? `${INSTRUCTOR_PROFILE.yearsOfExperience || '8+'} سنوات خبرة عملية`
                    : `${INSTRUCTOR_PROFILE.yearsOfExperience || '8+'} Years of Practical Experience`}
                </Badge>

                <h2 className="text-h2 font-extrabold text-[var(--color-text)] leading-snug">
                  {getLocalizedText(INSTRUCTOR_PROFILE.coreMessage, language)}
                </h2>

                <div className="space-y-4 text-body text-[var(--color-text-muted)] leading-relaxed">
                  {INSTRUCTOR_PROFILE.story.paragraphs.map((p, idx) => (
                    <p key={idx}>{getLocalizedText(p, language)}</p>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 2. What I Build & How I Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-7 space-y-5">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {getLocalizedText(
                  INSTRUCTOR_PROFILE.whatIBuild.title,
                  language
                )}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {getLocalizedText(
                  INSTRUCTOR_PROFILE.whatIBuild.description,
                  language
                )}
              </p>
              <div className="space-y-2.5 pt-2 border-t border-[var(--color-border-subtle)]">
                {INSTRUCTOR_PROFILE.whatIBuild.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-1" />
                    <span className="text-body-sm text-[var(--color-text)] font-medium">
                      {getLocalizedText(area, language)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-7 space-y-5">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {getLocalizedText(
                  INSTRUCTOR_PROFILE.whatITeach.title,
                  language
                )}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {getLocalizedText(
                  INSTRUCTOR_PROFILE.whatITeach.description,
                  language
                )}
              </p>
              <div className="space-y-2.5 pt-2 border-t border-[var(--color-border-subtle)]">
                {INSTRUCTOR_PROFILE.whatITeach.coreTracks.map((track, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-1" />
                    <span className="text-body-sm text-[var(--color-text)] font-medium">
                      {getLocalizedText(track, language)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* 3. Developer + Instructor Practice */}
          <Card className="p-7 sm:p-9 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? 'العمل الميداني والتدريب' : 'Practice & Mentorship'}
              </span>
              <h3 className="text-h2 font-extrabold text-[var(--color-text)]">
                {getLocalizedText(
                  INSTRUCTOR_PROFILE.developerPlusInstructor.title,
                  language
                )}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-3">
                <h4 className="text-h4 font-bold text-[var(--color-text)]">
                  {getLocalizedText(
                    INSTRUCTOR_PROFILE.developerPlusInstructor.developerSide
                      .headline,
                    language
                  )}
                </h4>
                <ul className="space-y-2">
                  {INSTRUCTOR_PROFILE.developerPlusInstructor.developerSide.points.map(
                    (pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-body-sm text-[var(--color-text-muted)]"
                      >
                        <span className="text-[var(--color-secondary)] font-bold">
                          •
                        </span>
                        <span>{getLocalizedText(pt, language)}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-3">
                <h4 className="text-h4 font-bold text-[var(--color-text)]">
                  {getLocalizedText(
                    INSTRUCTOR_PROFILE.developerPlusInstructor.instructorSide
                      .headline,
                    language
                  )}
                </h4>
                <ul className="space-y-2">
                  {INSTRUCTOR_PROFILE.developerPlusInstructor.instructorSide.points.map(
                    (pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-body-sm text-[var(--color-text-muted)]"
                      >
                        <span className="text-[var(--color-secondary)] font-bold">
                          •
                        </span>
                        <span>{getLocalizedText(pt, language)}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--color-primary-subtle)] border border-[var(--color-secondary)]/20 text-body-sm font-semibold text-[var(--color-text)]">
              {getLocalizedText(
                INSTRUCTOR_PROFILE.developerPlusInstructor.synergyStatement,
                language
              )}
            </div>
          </Card>

          {/* 4. Technical Stack Matrix */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? 'الأدوات والتقنيات' : 'Technical Stack'}
              </span>
              <h3 className="text-h2 font-extrabold text-[var(--color-text)]">
                {isRtl
                  ? 'التقنيات التي أستخدمها في بناء المواقع والأنظمة'
                  : 'Technologies I Use to Build Websites & Systems'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSTRUCTOR_PROFILE.skills.map((group, idx) => (
                <Card key={idx} className="p-6 space-y-4">
                  <div className="flex items-center gap-2.5 border-b border-[var(--color-border-subtle)] pb-3">
                    <Layers className="w-4 h-4 text-[var(--color-secondary)]" />
                    <h4 className="text-h4 font-bold text-[var(--color-text)]">
                      {getLocalizedText(group.category, language)}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)]"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 5. Experience Timeline */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <ExperienceTimelineSection />
          </div>

          {/* 6. CV & Direct Contact CTA via WhatsApp */}
          <div id="cv" className="pt-4 space-y-4">
            <Card className="p-7 sm:p-10 bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)]">
                  <FileText className="w-4 h-4" />
                  <span>
                    {isRtl
                      ? 'السيرة الذاتية والتواصل'
                      : 'Curriculum Vitae & Contact'}
                  </span>
                </div>
                <h3 className="text-h3 font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? 'هل ترغب في طلب السيرة الذاتية المفصلة أو مناقشة مشروع؟'
                    : 'Need my full CV or want to discuss a project?'}
                </h3>
                <p className="text-body-sm text-[var(--color-text-muted)]">
                  {isRtl
                    ? 'يمكنك طلب نسخة محدثة من السيرة الذاتية أو بدء محادثة مباشرة معي عبر واتساب.'
                    : 'Request an updated copy of my CV or start a direct conversation on WhatsApp.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleRequestResume}
                  className="font-bold bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white"
                  leftIcon={<MessageCircle className="w-4 h-4" />}
                >
                  {isRtl
                    ? 'طلب السيرة الذاتية عبر واتساب'
                    : 'Request Full Resume via WhatsApp'}
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={handleContactWhatsApp}
                  className="font-bold bg-[var(--color-surface)]"
                >
                  {isRtl ? 'مناقشة مشروع' : 'Discuss a Project'}
                </Button>

                <Link href="/projects">
                  <Button
                    variant="ghost"
                    size="md"
                    rightIcon={
                      isRtl ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )
                    }
                  >
                    {isRtl ? 'شاهد أعمالي' : 'View My Work'}
                  </Button>
                </Link>
              </div>
            </Card>

            {preparedWhatsAppMsg && (
              <WhatsAppActionFeedback
                message={preparedWhatsAppMsg}
                isRtl={isRtl}
                onClose={() => setPreparedWhatsAppMsg(null)}
              />
            )}
          </div>
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
