'use client';

import React from 'react';
import {
  PortfolioShell,
  PageContainer,
  PageSection,
} from '@/components';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';

export default function AboutPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const name = getLocalizedText(INSTRUCTOR_PROFILE.name, language);

  return (
    <PortfolioShell>
      <PageContainer>
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm flex flex-col md:flex-row items-center gap-6 text-start mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/myphoto.jfif"
            alt={name}
            width={120}
            height={120}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top ring-2 ring-[var(--color-border)] shadow-md shrink-0"
          />
          <div className="space-y-1.5 flex-1">
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {getLocalizedText(INSTRUCTOR_PROFILE.roleTitle, language)}
            </span>
            <h1 className="text-h2 font-extrabold text-[var(--color-text)]">
              {isRtl ? `عن ${name}` : `About ${name}`}
            </h1>
            <p className="text-body text-[var(--color-text-muted)] leading-relaxed">
              {getLocalizedText(INSTRUCTOR_PROFILE.briefIntro, language)}
            </p>
          </div>
        </div>

        {/* Narrative & Story */}
        <PageSection
          title={getLocalizedText(INSTRUCTOR_PROFILE.story.title, language)}
        >
          <div className="max-w-4xl space-y-4 text-body font-normal text-[var(--color-text-muted)] leading-relaxed">
            {INSTRUCTOR_PROFILE.story.paragraphs.map((p, idx) => (
              <p key={idx}>{getLocalizedText(p, language)}</p>
            ))}
          </div>
        </PageSection>

        {/* Technical Focus Areas */}
        <PageSection
          title={getLocalizedText(INSTRUCTOR_PROFILE.whatIBuild.title, language)}
          subtitle={getLocalizedText(INSTRUCTOR_PROFILE.whatIBuild.description, language)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSTRUCTOR_PROFILE.whatIBuild.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-2 text-start"
              >
                <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase">
                  FOCUS / 0{idx + 1}
                </span>
                <p className="text-body font-semibold text-[var(--color-text)]">
                  {getLocalizedText(area, language)}
                </p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Skills Spectrum */}
        <PageSection
          title={isRtl ? 'المهارات والتقنيات الأساسية' : 'Engineering Skills & Toolset'}
        >
          <div className="space-y-6">
            {INSTRUCTOR_PROFILE.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3 text-start"
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

        {/* CV & Professional Profile Section (Rule 15) */}
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
