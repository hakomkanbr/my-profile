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
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '@/content';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Search, Sparkles } from 'lucide-react';
import { ProjectCategoryKey } from '@/types';

export default function PortfolioProjectsPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.categoryKey === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = getLocalizedText(p.title, language).toLowerCase();
      const tagline = getLocalizedText(p.tagline, language).toLowerCase();
      const tech = p.techStack.join(' ').toLowerCase();

      return title.includes(q) || tagline.includes(q) || tech.includes(q);
    });
  }, [selectedCategory, searchQuery, language]);

  const featuredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => p.featured);
  }, []);

  const currentCategoryMeta = PORTFOLIO_CATEGORIES.find((c) => c.key === selectedCategory);

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'المشاريع والأنظمة البرمجية' : 'Projects & Engineering Systems'}
          subtitle={
            isRtl
              ? 'مجموعة من البرمجيات، المنصات، النظم، والمشاريع الهندسية التي قمت بهندستها وتطويرها.'
              : 'A collection of software, platforms, systems, and engineering projects I have worked on.'
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
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--color-primary)] text-white shadow-xs'
                        : 'bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-secondary)]/50 hover:text-[var(--color-text)]'
                    }`}
                  >
                    {isRtl ? cat.label.ar : cat.label.en}
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
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
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

        {/* Featured Showcase (when no search query and showing all) */}
        {selectedCategory === 'all' && !searchQuery && (
          <PageSection
            title={isRtl ? 'مشاريع وأنظمة رئيسية' : 'Featured Case Studies'}
            subtitle={
              isRtl
                ? 'أبرز المشاريع التي تعكس عمق المعمارية البرمجية وحل المشكلات الواقعية.'
                : 'Flagship engineering case studies highlighting architectural decisions and system design.'
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.slug}
                  className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between space-y-5 hover:border-[var(--color-secondary)]/60 hover:-translate-y-0.75 transition-all shadow-xs text-start group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">
                          FEATURED 0{idx + 1}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                        {getLocalizedText(project.category, language)}
                      </span>
                    </div>

                    <h3 className="text-h3 font-extrabold text-[var(--color-text)] tracking-tight">
                      <Link href={`/projects/${project.slug}`} className="group-hover:text-[var(--color-secondary)] transition-colors">
                        {getLocalizedText(project.title, language)}
                      </Link>
                    </h3>

                    <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                      {getLocalizedText(project.tagline, language)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold">
                    <span className="text-[var(--color-text-subtle)] font-mono text-[11px]">
                      {project.year || (project.status && getLocalizedText(project.status, language))}
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-bold inline-flex items-center gap-1.5"
                    >
                      <span>{isRtl ? 'عرض دراسة الحالة' : 'View Case Study'}</span>
                      {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </PageSection>
        )}

        {/* All / Filtered Projects Grid */}
        <PageSection
          title={
            selectedCategory === 'all'
              ? (isRtl ? 'جميع المشاريع' : 'All Engineering Projects')
              : (isRtl ? `مشاريع: ${currentCategoryMeta?.label.ar || ''}` : `Category: ${currentCategoryMeta?.label.en || ''}`)
          }
          subtitle={
            isRtl
              ? `تم العثور على ${filteredProjects.length} مشروع`
              : `Showing ${filteredProjects.length} projects`
          }
        >
          {filteredProjects.length === 0 ? (
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.slug}
                  className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between space-y-5 hover:border-[var(--color-secondary)]/50 transition-all shadow-xs text-start group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">
                        0{idx + 1} / {project.level === 1 ? 'CASE STUDY' : 'PROJECT'}
                      </span>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                        {getLocalizedText(project.category, language)}
                      </span>
                    </div>

                    <h3 className="text-h3 font-bold text-[var(--color-text)] tracking-tight">
                      <Link href={`/projects/${project.slug}`} className="group-hover:text-[var(--color-secondary)] transition-colors">
                        {getLocalizedText(project.title, language)}
                      </Link>
                    </h3>

                    <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                      {getLocalizedText(project.tagline, language)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold">
                    <span className="text-[var(--color-text-subtle)] font-mono text-[11px]">
                      {getLocalizedText(project.role, language)}
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-bold inline-flex items-center gap-1.5"
                    >
                      <span>{isRtl ? 'عرض التفاصيل' : 'View Case Study'}</span>
                      {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </PageSection>

        {/* Course Practical Projects Reference */}
        <PageSection
          title={isRtl ? 'مشاريع دورة WEB CREATOR AI التدريبية' : 'Curriculum Practical Projects'}
          subtitle={
            isRtl
              ? 'ورش عمل ومشاريع تطبيقية تبنى خطوة بخطوة ضمن مسار المراحل السبع.'
              : 'Hands-on practical workshops built by trainees during the 7-stage learning journey.'
          }
        >
          <div className="p-7 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-start">
            <div className="space-y-1">
              <h4 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl ? 'استكشف ورش عمل ومشاريع المنهج' : 'Explore Workshop Projects'}
              </h4>
              <p className="text-body-sm text-[var(--color-text-muted)]">
                {isRtl
                  ? 'من صفحة الهبوط السريعة وحتى المنصة الإنتاجية المتكاملة مع تدقيق Lighthouse.'
                  : 'From high-converting landing pages to live production capstones.'}
              </p>
            </div>
            <Link href="/web-creator-ai/projects">
              <Button
                variant="primary"
                size="md"
                rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isRtl ? 'عرض مشاريع المنهج' : 'View Course Projects'}
              </Button>
            </Link>
          </div>
        </PageSection>
      </PageContainer>
    </PortfolioShell>
  );
}
