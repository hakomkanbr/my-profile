'use client';

import React from 'react';
import {
  PortfolioShell,
  PageContainer,
  PageSection,
} from '@/components';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { PROFESSIONAL_EXPERIENCES } from '@/content/experience';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';

export default function AboutPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const name = getLocalizedText(INSTRUCTOR_PROFILE.name, language);

  const narrativeQuestions = isRtl
    ? [
        {
          label: 'الخلفية المهنية',
          text: INSTRUCTOR_PROFILE.story.paragraphs[0]?.ar,
        },
        {
          label: 'نوع البرمجيات والمشكلات التي أهتم بها',
          text: INSTRUCTOR_PROFILE.story.paragraphs[1]?.ar,
        },
        {
          label: 'القرارات الهندسية وجودة الكود',
          text: INSTRUCTOR_PROFILE.story.paragraphs[2]?.ar,
        },
        {
          label: 'ماذا يجد الزائر في هذا الموقع؟',
          text: INSTRUCTOR_PROFILE.story.paragraphs[3]?.ar,
        },
      ]
    : [
        {
          label: 'Professional Background',
          text: INSTRUCTOR_PROFILE.story.paragraphs[0]?.en,
        },
        {
          label: 'Software Focus & Problem Spaces',
          text: INSTRUCTOR_PROFILE.story.paragraphs[1]?.en,
        },
        {
          label: 'Engineering Decisions & Code Quality',
          text: INSTRUCTOR_PROFILE.story.paragraphs[2]?.en,
        },
        {
          label: 'What You Will Find on This Site',
          text: INSTRUCTOR_PROFILE.story.paragraphs[3]?.en,
        },
      ];

  return (
    <PortfolioShell>
      <PageContainer>
        {/* Profile Intro Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs flex flex-col md:flex-row items-center gap-6 text-start mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/myphoto.jfif"
            alt={name}
            width={120}
            height={120}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top ring-2 ring-[var(--color-border)] shadow-sm shrink-0"
          />
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                {getLocalizedText(INSTRUCTOR_PROFILE.roleTitle, language)}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-subtle)]">
                Senior Software Architect & Full Stack Engineer
              </span>
            </div>
            <h1 className="text-h2 font-extrabold text-[var(--color-text)] tracking-tight">
              {isRtl ? 'عن عبد الحكيم' : 'About Abdulhakim'}
            </h1>
            <p className="text-body text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
              {getLocalizedText(INSTRUCTOR_PROFILE.briefIntro, language)}
            </p>
          </div>
        </div>

        {/* Narrative & Story — Answering the 4 core questions directly */}
        <PageSection
          title={isRtl ? 'طريقة التفكير والعمل' : 'Philosophy & Engineering Practice'}
          subtitle={
            isRtl
              ? 'إجابات واضحة ومباشرة عن الخلفية، مجالات التركيز، وأسلوب التعامل مع المشكلات الهندسية.'
              : 'Direct perspectives on background, focus areas, and engineering methodology.'
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {narrativeQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-3 text-start"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase">
                    0{idx + 1}
                  </span>
                  <h3 className="text-h4 font-bold text-[var(--color-text)]">
                    {q.label}
                  </h3>
                </div>
                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                  {q.text}
                </p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Professional Milestones & Experience Timeline */}
        <PageSection
          title={isRtl ? 'المسار المهني وسجل الخبرة' : 'Professional Experience & Milestones'}
          subtitle={
            isRtl
              ? 'أكثر من 8 سنوات من العمل الفعلي في تطوير الأنظمة وتطبيقات الويب وإدارة الخوادم.'
              : 'Over 8 years of hands-on practice across application architecture, backend systems, and infrastructure.'
          }
        >
          <div className="space-y-6">
            {PROFESSIONAL_EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id || idx}
                className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-4 text-start transition-all hover:border-[var(--color-border-strong)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-4">
                  <div>
                    <h3 className="text-h4 font-bold text-[var(--color-text)]">
                      {getLocalizedText(exp.role, language)}
                    </h3>
                    {exp.organization && (
                      <p className="text-body-xs font-mono text-[var(--color-text-subtle)] mt-0.5">
                        {getLocalizedText(exp.organization, language)}
                      </p>
                    )}
                  </div>
                  {exp.period && (
                    <span className="font-mono text-xs text-[var(--color-secondary)] self-start sm:self-auto font-semibold">
                      {getLocalizedText(exp.period, language)}
                    </span>
                  )}
                </div>

                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                  {getLocalizedText(exp.scope, language)}
                </p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-body-xs text-[var(--color-text-muted)] flex items-start gap-2.5"
                      >
                        <span className="text-[var(--color-secondary)] font-bold mt-0.5 shrink-0">
                          •
                        </span>
                        <span>{getLocalizedText(h, language)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </PageSection>

        {/* Skills Spectrum */}
        <PageSection
          title={isRtl ? 'المهارات والتقنيات الأساسية' : 'Engineering Skills & Toolset'}
        >
          <div className="space-y-5">
            {INSTRUCTOR_PROFILE.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3 text-start"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-h4 font-bold text-[var(--color-text)]">
                    {getLocalizedText(skillGroup.category, language)}
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-text-subtle)]">
                    {skillGroup.skills.length} TECHNOLOGIES
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {skillGroup.skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-3 py-1.5 rounded-sm text-xs font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text)]"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageSection>

        {/* CV & Professional Profile Section */}
        <PageSection
          title={isRtl ? 'السيرة الذاتية والملف المهني' : 'Curriculum Vitae & Profile'}
        >
          <div id="cv" className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-6 text-start">
            <div className="space-y-2">
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {name} — {getLocalizedText(INSTRUCTOR_PROFILE.roleTitle, language)}
              </h3>
              <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                {isRtl
                  ? 'ملف السيرة الذاتية المهني يضم ملخص المهارات الهندسية، المشاريع البرمجية، والمجالات التخصصية.'
                  : 'Professional resume overview highlighting software engineering competencies, architecture decisions, and core web competencies.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 border-y border-[var(--color-border-subtle)]">
              <div>
                <span className="text-xs font-mono text-[var(--color-text-subtle)] uppercase block mb-1">
                  {isRtl ? 'المجال التخصصي' : 'Specialization'}
                </span>
                <span className="text-body-sm font-semibold text-[var(--color-text)]">
                  {isRtl ? 'هندسة البرمجيات، تصميم النظم وإدارة الخوادم' : 'Software Engineering, System Design & Infrastructure'}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-[var(--color-text-subtle)] uppercase block mb-1">
                  {isRtl ? 'سنوات الخبرة' : 'Experience'}
                </span>
                <span className="text-body-sm font-semibold text-[var(--color-text)]">
                  {isRtl ? 'أكثر من 8 سنوات من العمل الفعلي' : 'More than 8 years of engineering practice'}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-[var(--color-text-subtle)] uppercase block mb-1">
                  {isRtl ? 'حالة التفرغ' : 'Availability'}
                </span>
                <span className="text-body-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {isRtl ? 'متاح للمشاريع والتعاقدات والتدريب' : 'Available for projects & engagements'}
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:abdulhekimkanbr@gmail.com?subject=Resume%20Inquiry%20-%20Abdulhakim%20Kanbr"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-2xs"
              >
                <span>{isRtl ? 'طلب السيرة الذاتية المفصلة' : 'Request Full Resume'}</span>
              </a>
              <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                {isRtl ? 'ملف PDF متاح عند الطلب المباشر عبر البريد' : 'Direct PDF available upon request via email'}
              </span>
            </div>
          </div>
        </PageSection>
      </PageContainer>
    </PortfolioShell>
  );
}
