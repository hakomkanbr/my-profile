'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { PORTFOLIO_PROJECTS } from '@/content';
import { getLocalizedText } from '@/lib/utils';
import { Button } from '@/components/ui';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import { Reveal } from '@/components/motion';

export const FeaturedProjectsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  // 3 verified live SaaS products (Share2Sells, Masar, CashPro)
  const saasProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.categoryKey === 'saas' && p.featured
  ).slice(0, 3);

  // Approved client projects (if any are approved for public listing)
  const clientProjects = PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === 'client');

  return (
    <section
      id="projects"
      className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Main Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? 'منتجات برمجية وحلول أعمال' : 'Software Products & Client Systems'}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl
                  ? 'مشاريع مختارة ومنتجات SaaS نشطة'
                  : 'Selected Projects & Live SaaS Products'}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] max-w-2xl font-normal leading-relaxed">
                {isRtl
                  ? 'عرض انتقائي لمنتجات SaaS السحابية التي طورتها، وحلول الأنظمة البرمجية المخصصة للشركات والعملاء مع الالتزام التام بضوابط الخصوصية.'
                  : 'A selective showcase of cloud SaaS products I have built, alongside custom software engineering solutions engineered for enterprise clients.'}
              </p>
            </div>

            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto group hover:border-[var(--color-secondary)]/60 justify-center"
                rightIcon={
                  isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  )
                }
              >
                {isRtl ? 'استكشف كافة المشاريع' : 'All Projects & Products'}
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* ================================================================= */}
        {/* 1. SaaS Products Spotlight (Verified Live Platforms)               */}
        {/* ================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)]">
                {isRtl ? 'منتجات SaaS المستقلة (روابط حية موثقة)' : 'Featured SaaS Platforms (Live & Verified)'}
              </h3>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono text-[var(--color-secondary)] hover:underline inline-flex items-center gap-1"
            >
              <span>{isRtl ? 'عرض المزيد من منتجات SaaS' : 'View more SaaS'}</span>
              {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {saasProjects.map((project, idx) => (
              <Reveal key={project.slug} direction="up" delay={100 + idx * 80}>
                <div className="h-full group p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-5 hover:border-[var(--color-secondary)]/60 hover:-translate-y-0.75 transition-all duration-300 text-start">
                  <div className="space-y-3.5">
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">
                          0{idx + 1}
                        </span>
                        {project.verifiedUrl && project.liveUrl && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            {isRtl ? 'رابط نشط' : 'Live'}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                        {getLocalizedText(project.category, language)}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-h4 font-extrabold text-[var(--color-text)] tracking-tight">
                      {project.hasCaseStudy ? (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:text-[var(--color-secondary)] transition-colors"
                        >
                          {getLocalizedText(project.title, language)}
                        </Link>
                      ) : (
                        <span>{getLocalizedText(project.title, language)}</span>
                      )}
                    </h4>

                    {/* Tagline */}
                    <p className="text-body-sm text-[var(--color-text-muted)] font-normal leading-relaxed line-clamp-3">
                      {getLocalizedText(project.tagline, language)}
                    </p>

                    {/* Role & Tech */}
                    <div className="pt-1 space-y-1.5">
                      <span className="text-xs font-mono text-[var(--color-text-subtle)] block">
                        <strong className="text-[var(--color-text)]">{isRtl ? 'الدور:' : 'Role:'}</strong>{' '}
                        {getLocalizedText(project.role, language)}
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-3 text-xs font-semibold">
                    {project.liveUrl && project.verifiedUrl ? (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                        rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
                      >
                        <span>{isRtl ? 'زيارة المنصة' : 'Visit Site'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span></span>
                    )}

                    {project.hasCaseStudy && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        <span>{isRtl ? 'دراسة الحالة' : 'Case Study'}</span>
                        {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. Client Projects & Enterprise Systems (Clear Visual Separation) */}
        {/* ================================================================= */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)]">
                {isRtl ? 'مشاريع العملاء والأنظمة المؤسسية' : 'Custom Client Systems & Enterprise Engineering'}
              </h3>
            </div>
            <Link
              href="/contact"
              className="text-xs font-mono text-[var(--color-secondary)] hover:underline inline-flex items-center gap-1"
            >
              <span>{isRtl ? 'طلب مشروع جديد' : 'Inquire for New Project'}</span>
              {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
            </Link>
          </div>

          {clientProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clientProjects.map((project) => (
                <div
                  key={project.slug}
                  className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-4 text-start"
                >
                  <h4 className="text-h4 font-bold text-[var(--color-text)]">
                    {getLocalizedText(project.title, language)}
                  </h4>
                  <p className="text-body-sm text-[var(--color-text-muted)]">
                    {getLocalizedText(project.tagline, language)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            /* Dignified, trust-building client services & NDA privacy banner */
            <Reveal direction="up" delay={200}>
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-sunken)] border border-[var(--color-border)] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-start">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'التزام تام باتفاقيات السرية (NDA)' : 'Strict Non-Disclosure & Privacy Standard'}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-text)]">
                    {isRtl
                      ? 'أنظمة تجارة إلكترونية، فوترة مالية، وبوابات مؤسسية مخصصة'
                      : 'Custom E-Commerce, Invoicing Engines & Institutional Web Portals'}
                  </h4>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {isRtl
                      ? 'قمت بتطوير أنظمة رقمية متخصصة تشمل منصات تجارة إلكترونية، أنظمة إدارة الفواتير والمحاسبة، وبوابات لجهات خيرية ومؤسسية. حرصاً على سرية الأعمال والبيانات المالية وحماية خصوصية المستفيدين، تخضع هذه المشاريع لسياسة مراجعة إذن النشر الصريحة ولا تُدرج علناً دون اعتماد رسمي مكتوب.'
                      : 'I have engineered specialized systems spanning retail e-commerce, financial invoicing engines, and non-profit sponsorship workflows. To safeguard financial records and client confidentiality, client project details are withheld under strict NDA governance until explicit authorization is granted.'}
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
                      {isRtl ? 'طلب استشارة أو تطوير نظام' : 'Start Project Inquiry'}
                    </Button>
                  </Link>
                  <Link href="/projects" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-center text-xs"
                    >
                      {isRtl ? 'مراجعة سياسة النشر' : 'Review Publication Policy'}
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
