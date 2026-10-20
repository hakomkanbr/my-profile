'use client';

import React from 'react';
import Link from 'next/link';
import {
  PageContainer,
  PageHeader,
  PageSection,
  Button,
} from '@/components';
import { PortfolioProject } from '@/types';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Layers,
  Server,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface ProjectCaseStudyClientProps {
  project: PortfolioProject;
  otherProjects: PortfolioProject[];
}

export function ProjectCaseStudyClient({ project, otherProjects }: ProjectCaseStudyClientProps) {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const title = getLocalizedText(project.title, language);
  const tagline = getLocalizedText(project.tagline, language);

  return (
    <PageContainer>
      {/* Header Breadcrumbs & Overview */}
      <PageHeader
        title={title}
        subtitle={tagline}
        breadcrumbs={[
          { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
          { id: '2', label: isRtl ? 'المشاريع' : 'Projects', href: '/projects' },
          { id: '3', label: title, isCurrent: true },
        ]}
      />

      {/* Project Meta Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs mb-8 text-start space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
              {project.level === 1
                ? isRtl ? 'دراسة حالة متكاملة' : 'FULL CASE STUDY'
                : isRtl ? 'مشروع هندسي تطبيقي' : 'ENGINEERING MILESTONE'}
            </span>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
              {getLocalizedText(project.category, language)}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-text-subtle)]">
            {project.status && (
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {getLocalizedText(project.status, language)}
              </span>
            )}
            {project.year && <span>· {project.year}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="font-mono text-[var(--color-text-subtle)] uppercase block mb-1">
              {isRtl ? 'الدور والمسؤولية' : 'Role & Responsibility'}
            </span>
            <span className="font-semibold text-[var(--color-text)]">
              {getLocalizedText(project.role, language)}
            </span>
          </div>
          <div className="sm:col-span-2">
            <span className="font-mono text-[var(--color-text-subtle)] uppercase block mb-1">
              {isRtl ? 'التقنيات وحزمة البناء' : 'Technologies & Stack'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-[var(--color-border-subtle)]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-xs"
              >
                <span>{isRtl ? 'فتح المعاينة الحية / المنصة' : 'Open Platform / Live Preview'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-secondary)] transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{isRtl ? 'مستودع الكود' : 'View Repository'}</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* 01. Project Overview */}
      <PageSection title={isRtl ? 'نظرة عامة على المشروع' : 'Project Overview'}>
        <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-4">
          <p className="text-body text-[var(--color-text)] leading-relaxed font-normal">
            {getLocalizedText(project.overview, language)}
          </p>
          {project.role && (
            <div className="pt-3 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)] font-mono">
              <strong className="text-[var(--color-text)]">
                {isRtl ? 'المشاركة الهندسية:' : 'Engineering Engagement:'}
              </strong>{' '}
              {getLocalizedText(project.role, language)}
            </div>
          )}
        </div>
      </PageSection>

      {/* 02. Problem & Context */}
      {project.problem && (
        <PageSection title={isRtl ? 'المشكلة وسياق التحدي' : 'The Problem & Context'}>
          <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>{isRtl ? 'تحديد المشكلة' : 'Problem Statement'}</span>
            </div>
            <p className="text-body text-[var(--color-text-muted)] leading-relaxed font-normal">
              {getLocalizedText(project.problem, language)}
            </p>
          </div>
        </PageSection>
      )}

      {/* 03. Architecture & Solution */}
      {(project.solution || project.architecture) && (
        <PageSection title={isRtl ? 'المعمارية والحل الهندسي' : 'System Architecture & Approach'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
            {project.solution && (
              <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isRtl ? 'الحل البرمجي' : 'Engineered Solution'}</span>
                </div>
                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                  {getLocalizedText(project.solution, language)}
                </p>
              </div>
            )}
            {project.architecture && (
              <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase">
                  <Layers className="w-4 h-4" />
                  <span>{isRtl ? 'الاستراتيجية المعمارية' : 'Architectural Strategy'}</span>
                </div>
                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                  {getLocalizedText(project.architecture, language)}
                </p>
              </div>
            )}
          </div>
        </PageSection>
      )}

      {/* 04. Technical Implementation Pillars */}
      {project.technicalImplementation && project.technicalImplementation.length > 0 && (
        <PageSection title={isRtl ? 'محاور التنفيذ التقني' : 'Technical Implementation'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
            {project.technicalImplementation.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[var(--color-secondary)]" />
                  <h4 className="text-h4 font-bold text-[var(--color-text)]">
                    {getLocalizedText(pillar.title, language)}
                  </h4>
                </div>
                <div className="space-y-2 pt-1">
                  {pillar.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 text-xs text-[var(--color-text-muted)] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 mt-1.5" />
                      <span>{getLocalizedText(detail, language)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageSection>
      )}

      {/* 05. Infrastructure & Deployment */}
      {project.infrastructure && (
        <PageSection title={isRtl ? 'البنية التحتية والنشر' : 'Infrastructure & Deployment'}>
          <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
              <Server className="w-4 h-4" />
              <span>{isRtl ? 'بيئة التشغيل الإنتاجية' : 'Production Environment'}</span>
            </div>
            <p className="text-body text-[var(--color-text-muted)] leading-relaxed font-normal">
              {getLocalizedText(project.infrastructure, language)}
            </p>
          </div>
        </PageSection>
      )}

      {/* 06. Engineering Challenges */}
      {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
        <PageSection
          title={isRtl ? 'أبرز التحديات الهندسية وكيفية معالجتها' : 'Key Engineering Challenges & Resolutions'}
        >
          <div className="space-y-4 text-start">
            {project.engineeringChallenges.map((item, cIdx) => (
              <div
                key={cIdx}
                className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 uppercase shrink-0 mt-0.5">
                    {isRtl ? 'التحدي' : 'Challenge'}
                  </span>
                  <p className="text-body-sm font-semibold text-[var(--color-text)]">
                    {getLocalizedText(item.challenge, language)}
                  </p>
                </div>
                <div className="flex items-start gap-3 pt-2 border-t border-[var(--color-border-subtle)]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 uppercase shrink-0 mt-0.5">
                    {isRtl ? 'الحل الهندسي' : 'Resolution'}
                  </span>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed font-normal">
                    {getLocalizedText(item.solution, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageSection>
      )}

      {/* 07. Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <PageSection title={isRtl ? 'أبرز الميزات والخصائص' : 'Key System Features'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
            {project.keyFeatures.map((feature, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-start gap-3"
              >
                <ShieldCheck className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-1" />
                <span className="text-body-sm text-[var(--color-text)] font-medium">
                  {getLocalizedText(feature, language)}
                </span>
              </div>
            ))}
          </div>
        </PageSection>
      )}

      {/* 08. Lessons Learned */}
      {project.lessonsLearned && project.lessonsLearned.length > 0 && (
        <PageSection title={isRtl ? 'الدروس والتجارب المستفادة' : 'Pragmatic Lessons & Takeaways'}>
          <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-3">
            {project.lessonsLearned.map((lesson, lIdx) => (
              <div
                key={lIdx}
                className="flex items-start gap-3 text-body-sm text-[var(--color-text-muted)] font-normal"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 mt-2" />
                <span>{getLocalizedText(lesson, language)}</span>
              </div>
            ))}
          </div>
        </PageSection>
      )}

      {/* Contextual Collaboration & Custom Engineering CTA */}
      <div className="my-10 p-7 sm:p-9 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-start">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
            {isRtl ? 'هندسة الأنظمة وتطوير الحلول' : 'Custom Software Engineering'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)]">
            {isRtl
              ? 'هل تخطط لبناء نظام مخصص أو منصة سحابية مشابهة؟'
              : 'Planning a custom platform or similar software solution?'}
          </h3>
          <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
            {isRtl
              ? 'أساعد الشركات ورواد الأعمال في التصميم المعماري، وتطوير المنصات السحابية والأنظمة الإدارية والمالية مع ضمان الأمان وحماية خصوصية الأعمال.'
              : 'I help companies and founders with architectural design, cloud SaaS engineering, and enterprise financial portals with strict confidentiality.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="sm"
              className="w-full justify-center"
              rightIcon={isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            >
              {isRtl ? 'تواصل لمناقشة مشروعك' : 'Discuss Your Project'}
            </Button>
          </Link>
          <Link href="/projects" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-center text-xs"
            >
              {isRtl ? 'عرض بقية المشاريع' : 'Browse Other Projects'}
            </Button>
          </Link>
        </div>
      </div>

      {/* Related Projects & Return Navigation */}
      <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <Link href="/projects">
          <Button
            variant="outline"
            size="md"
            leftIcon={isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          >
            {isRtl ? 'العودة إلى جميع المشاريع' : 'Back to All Projects'}
          </Button>
        </Link>

        {otherProjects.length > 0 && (
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[var(--color-text-subtle)]">
              {isRtl ? 'دراسة الحالة التالية:' : 'Next Case Study:'}
            </span>
            <Link
              href={`/projects/${otherProjects[0].slug}`}
              className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{getLocalizedText(otherProjects[0].title, language)}</span>
              {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </Link>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
