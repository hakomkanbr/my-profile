'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  PortfolioShell,
  PageContainer,
  PageHeader,
  PageSection,
  Button,
} from '@/components';
import { getAllPortfolioProjects, PORTFOLIO_CATEGORIES } from '@/content';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Sparkles,
  ExternalLink,
  Users,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { ProjectCategoryKey } from '@/types';

export default function PortfolioProjectsPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Base list only includes approved, non-hidden projects (strictly excludes hidden projects)
  const visibleProjects = useMemo(() => getAllPortfolioProjects(), []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return visibleProjects.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.categoryKey === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = getLocalizedText(p.title, language).toLowerCase();
      const tagline = getLocalizedText(p.tagline, language).toLowerCase();
      const tech = p.techStack.join(' ').toLowerCase();

      return title.includes(q) || tagline.includes(q) || tech.includes(q);
    });
  }, [visibleProjects, selectedCategory, searchQuery, language]);

  const currentCategoryMeta = PORTFOLIO_CATEGORIES.find((c) => c.key === selectedCategory);

  const getCategoryBadge = (categoryKey: ProjectCategoryKey, visibility?: string) => {
    if (visibility === 'anonymized') {
      return {
        icon: <ShieldCheck className="w-3 h-3 text-blue-500" />,
        label: isRtl ? 'دراسة حالة مجهّلة (NDA)' : 'Anonymized Case Study',
        className: 'bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-400',
      };
    }
    switch (categoryKey) {
      case 'saas':
        return {
          icon: <Sparkles className="w-3 h-3 text-amber-500" />,
          label: isRtl ? 'منتج SaaS' : 'SaaS Product',
          className:
            'bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400',
        };
      case 'client':
        return {
          icon: <Briefcase className="w-3 h-3 text-purple-500" />,
          label: isRtl ? 'مشروع عميل' : 'Client System',
          className:
            'bg-purple-500/10 border-purple-500/20 text-purple-700 dark:text-purple-400',
        };
      case 'education':
      case 'personal-education':
      default:
        return {
          icon: <GraduationCap className="w-3 h-3 text-emerald-500" />,
          label: isRtl ? 'مشروع شخصي وتعليمي' : 'Personal & Education',
          className:
            'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400',
        };
    }
  };

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'معرض المشاريع والمنتجات البرمجية' : 'Engineering Projects & SaaS Showcase'}
          subtitle={
            isRtl
              ? 'معرض لمنتجات SaaS التي قمت بتطويرها، وأنظمة الويب والمنصات السحابية، مع الالتزام التام بضوابط الخصوصية واتفاقيات عدم الإفصاح.'
              : 'Showcase of live SaaS platforms, web systems, and custom engineering projects built with architectural rigor and strict privacy governance.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: isRtl ? 'المشاريع' : 'Projects', isCurrent: true },
          ]}
        />

        {/* Filter Bar & Search */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {PORTFOLIO_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const count =
                  cat.key === 'all'
                    ? visibleProjects.length
                    : visibleProjects.filter((p) => p.categoryKey === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[var(--color-primary)] text-white shadow-xs'
                        : 'bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-secondary)]/50 hover:text-[var(--color-text)]'
                    }`}
                  >
                    <span>{isRtl ? cat.label.ar : cat.label.en}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[var(--color-text-subtle)] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? 'ابحث بالاسم أو التقنية...' : 'Search by name or tech...'}
                className="w-full ps-9 pe-4 py-1.5 text-xs font-mono rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)] cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Current Category Context */}
          {currentCategoryMeta && (
            <p className="text-xs font-mono text-[var(--color-text-subtle)]">
              {isRtl ? currentCategoryMeta.description.ar : currentCategoryMeta.description.en}
            </p>
          )}
        </div>

        {/* Gallery Grid */}
        <PageSection
          title={
            selectedCategory === 'all'
              ? isRtl ? 'المشاريع المنشورة' : 'Published Projects'
              : isRtl ? currentCategoryMeta?.label.ar || 'المشاريع' : currentCategoryMeta?.label.en || 'Projects'
          }
          subtitle={
            isRtl
              ? `عرض ${filteredProjects.length} مشروع من إجمالي المشاريع المعتمدة للنشر العام.`
              : `Displaying ${filteredProjects.length} projects cleared for public display.`
          }
        >
          {filteredProjects.length === 0 ? (
            /* Respectful, Informative Privacy State when category has 0 published items */
            selectedCategory === 'client' ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center max-w-2xl mx-auto space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 mx-auto flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-h4 font-bold text-[var(--color-text)]">
                    {isRtl ? 'مشاريع العملاء قيد مراجعة إذن النشر' : 'Client Projects Under Privacy & NDA Review'}
                  </h4>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {isRtl
                      ? 'التزاماً باتفاقيات عدم الإفصاح (NDA) وحماية خصوصية الشركاء، تخضع كافة سجلات مشاريع العملاء (بما فيها المتاجر، أنظمة الفوترة، وأنظمة المؤسسات والجمعيات) لسياسة مراجعة مستقلة لكل مشروع على حدة. لا يُنشر أي مشروع إلا بعد الحصول على إذن رسمي مكتوب يحدد نطاق الإفصاح المسموح به.'
                      : 'In strict compliance with Non-Disclosure Agreements (NDAs) and client data protection, all client systems (including commerce portals, invoicing engines, and non-profit systems) undergo rigorous per-project authorization review before public listing.'}
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <Link href="/contact">
                    <Button variant="primary" size="sm">
                      {isRtl ? 'طلب استشارة أو تطوير مشروع' : 'Request Consultation'}
                    </Button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('saas')}
                    className="text-xs font-mono text-[var(--color-secondary)] hover:underline cursor-pointer"
                  >
                    {isRtl ? 'استعراض منتجات SaaS النشطة' : 'View Live SaaS Products'}
                  </button>
                </div>
              </div>
            ) : selectedCategory === 'anonymized-case-study' ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center max-w-2xl mx-auto space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-h4 font-bold text-[var(--color-text)]">
                    {isRtl ? 'دراسات الحالة المجهّلة قيد التجهيز والاعتماد' : 'Anonymized Case Studies in Preparation'}
                  </h4>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {isRtl
                      ? 'يجري إعداد دراسات حالة هندسية مجهّلة للأنظمة المالية والمؤسسية، يتم فيها حجب أسماء وشعارات وبيانات العملاء بالكامل للتركيز الحصري على التحديات المعمارية والحلول البرمجية.'
                      : 'Anonymized engineering case studies covering internal financial and enterprise platforms are being prepared, fully redacting client identities to focus solely on architecture and technical solutions.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className="text-xs font-mono text-[var(--color-secondary)] hover:underline cursor-pointer"
                >
                  {isRtl ? 'عرض كل المشاريع المنشورة' : 'View all published projects'}
                </button>
              </div>
            ) : (
              <div className="p-12 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-3">
                <p className="text-body font-semibold text-[var(--color-text)]">
                  {isRtl ? 'لا توجد مشاريع مطابقة لبحثك' : 'No projects match your query.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-xs font-mono text-[var(--color-secondary)] hover:underline cursor-pointer"
                >
                  {isRtl ? 'إعادة ضبط التصفية' : 'Reset filters'}
                </button>
              </div>
            )
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => {
                const badge = getCategoryBadge(project.categoryKey, project.visibility);

                return (
                  <div
                    key={project.slug}
                    className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between space-y-5 hover:border-[var(--color-secondary)]/60 hover:-translate-y-0.75 transition-all shadow-xs text-start group"
                  >
                    <div className="space-y-3.5">
                      {/* Card Header row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">
                            0{idx + 1}
                          </span>
                          {project.featured && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold">
                              {isRtl ? 'مميز' : 'Featured'}
                            </span>
                          )}
                          {project.verifiedUrl && project.liveUrl && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              {isRtl ? 'رابط نشط' : 'Live'}
                            </span>
                          )}
                        </div>

                        {/* Category Badge */}
                        <span
                          className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border inline-flex items-center gap-1.5 ${badge.className}`}
                        >
                          {badge.icon}
                          <span>{badge.label}</span>
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-h4 font-extrabold text-[var(--color-text)] tracking-tight">
                        {project.hasCaseStudy ? (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="group-hover:text-[var(--color-secondary)] transition-colors"
                          >
                            {getLocalizedText(project.title, language)}
                          </Link>
                        ) : project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                            rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group-hover:text-[var(--color-secondary)] transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>{getLocalizedText(project.title, language)}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-subtle)]" />
                          </a>
                        ) : (
                          <span>{getLocalizedText(project.title, language)}</span>
                        )}
                      </h3>

                      {/* Tagline / Brief Description */}
                      <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                        {getLocalizedText(project.tagline, language)}
                      </p>

                      {/* Target Audience (if available) */}
                      {project.productAudience && (
                        <div className="p-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-start gap-2 text-xs">
                          <Users className="w-3.5 h-3.5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                          <div className="text-[11px] text-[var(--color-text-muted)] leading-tight">
                            <span className="font-bold text-[var(--color-text)]">
                              {isRtl ? 'الجمهور المستهدف:' : 'Audience:'}
                            </span>{' '}
                            {getLocalizedText(project.productAudience, language)}
                          </div>
                        </div>
                      )}

                      {/* Role & Tech */}
                      <div className="pt-1 space-y-1.5">
                        <span className="text-xs font-mono text-[var(--color-text-subtle)] block">
                          <strong className="text-[var(--color-text)]">
                            {isRtl ? 'الدور الفعلي:' : 'Role:'}
                          </strong>{' '}
                          {getLocalizedText(project.role, language)}
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.techStack.slice(0, 4).map((tech) => (
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

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold">
                      <div className="flex items-center gap-2">
                        {project.status && (
                          <span
                            className="text-[var(--color-text-subtle)] font-mono text-[11px] max-w-[140px] truncate"
                            title={getLocalizedText(project.status, language)}
                          >
                            {getLocalizedText(project.status, language)}
                          </span>
                        )}
                        {project.liveUrl && project.verifiedUrl && (
                          <a
                            href={project.liveUrl}
                            target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                            rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors inline-flex items-center gap-1"
                            title={isRtl ? 'زيارة المنصة' : 'Visit platform'}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.liveUrl && project.verifiedUrl && (
                          <a
                            href={project.liveUrl}
                            target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                            rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-semibold inline-flex items-center gap-1"
                          >
                            <span>{isRtl ? 'معاينة' : 'Live'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {project.hasCaseStudy && (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-bold inline-flex items-center gap-1.5"
                          >
                            <span>{isRtl ? 'دراسة الحالة' : 'Case Study'}</span>
                            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </PageSection>

        {/* Client Systems Inquiries & Consultations */}
        <div className="mt-8 mb-12 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-start flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {isRtl ? 'تطوير الأنظمة وحلول الأعمال' : 'Custom Software & Systems Engineering'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)]">
              {isRtl
                ? 'هل تبحث عن بناء نظام مخصص أو منصة SaaS لأعمالك؟'
                : 'Need a custom platform, financial tool, or scalable SaaS?'}
            </h3>
            <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
              {isRtl
                ? 'أقدم خدمات هندسة البرمجيات المتكاملة: من التفكير والمعمارية وتصميم قواعد البيانات، وحتى بناء الواجهات السريعة والنشر السحابي الآمن مع الحفاظ الكامل على سرية بيانات مشروعك.'
                : 'I deliver end-to-end web engineering: from architectural blueprint and data modeling to high-speed interfaces and resilient cloud deployments under strict confidentiality.'}
            </p>
          </div>
          <Link href="/contact" className="shrink-0 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto justify-center"
              rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            >
              {isRtl ? 'تواصل لمناقشة مشروعك' : 'Discuss Your Project'}
            </Button>
          </Link>
        </div>

        {/* Practical Course Workshops Link */}
        <PageSection
          title={isRtl ? 'ورش عمل ومشاريع التدريب' : 'Curriculum Hands-on Workshops'}
          subtitle={
            isRtl
              ? 'مشاريع تطبيقية تبنى خطوة بخطوة ضمن مسار WEB CREATOR AI للتدريب الهندسي.'
              : 'Practical workshop projects built step-by-step within the WEB CREATOR AI curriculum.'
          }
        >
          <div className="p-7 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-start">
            <div className="space-y-1">
              <h4 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl ? 'استكشف ورش عمل ومشاريع المنهج' : 'Explore Curriculum Projects'}
              </h4>
              <p className="text-body-sm text-[var(--color-text-muted)]">
                {isRtl
                  ? 'من صفحة الهبوط السريعة وحتى المنصة الإنتاجية المتكاملة مع تدقيق Lighthouse.'
                  : 'From high-converting landing pages to live production capstones.'}
              </p>
            </div>
            <Link href="/web-creator-ai/projects">
              <Button
                variant="outline"
                size="md"
                rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isRtl ? 'عرض ورش العمل' : 'View Course Projects'}
              </Button>
            </Link>
          </div>
        </PageSection>
      </PageContainer>
    </PortfolioShell>
  );
}
