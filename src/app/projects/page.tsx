'use client';

import React, { useState, useMemo } from 'react';
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
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_CATEGORIES,
} from '@/content/portfolio-projects';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { ProjectCategoryKey } from '@/types';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  buildClientInquiryMessage,
  getCurrentPageUrl,
  openWhatsAppChat,
} from '@/lib/whatsapp';

export default function PortfolioProjectsPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [preparedWhatsAppMsg, setPreparedWhatsAppMsg] = useState<string | null>(
    null
  );

  // Only show categories that have at least 1 published project (or 'all')
  const availableCategories = useMemo(() => {
    return PORTFOLIO_CATEGORIES.filter((cat) => {
      if (cat.key === 'all') return true;
      return PORTFOLIO_PROJECTS.some((p) => p.categoryKey === cat.key);
    });
  }, []);

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((project) => {
      if (
        selectedCategory !== 'all' &&
        project.categoryKey !== selectedCategory
      ) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleAr = project.title.ar.toLowerCase();
        const titleEn = project.title.en.toLowerCase();
        const taglineAr = project.tagline.ar.toLowerCase();
        const taglineEn = project.tagline.en.toLowerCase();
        const techMatch = project.techStack.some((t) =>
          t.toLowerCase().includes(q)
        );
        if (
          !titleAr.includes(q) &&
          !titleEn.includes(q) &&
          !taglineAr.includes(q) &&
          !taglineEn.includes(q) &&
          !techMatch
        ) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleInquireWhatsApp = (projectTitleAr?: string) => {
    const msg = buildClientInquiryMessage({
      projectType: projectTitleAr
        ? `طلب مشروع مشابه لـ (${projectTitleAr})`
        : 'بناء موقع أو نظام مخصص',
      details: projectTitleAr
        ? `اطلعت على مشروع (${projectTitleAr}) في معرض أعمالك، وأرغب في مناقشة مشروع مشابه.`
        : 'اطلعت على معرض أعمالك وأرغب في مناقشة فكرة مشروع جديد.',
      pageUrl: getCurrentPageUrl('/projects'),
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
              ? 'أعمالي ومنتجاتي الرقمية'
              : 'My Work & Digital Products'
          }
          subtitle={
            isRtl
              ? 'منصات SaaS ومشاريع ويب طوّرتها لخدمة أهداف تجارية وتشغيلية واضحة، مع شرح تفصيلي لما يقدمه كل مشروع.'
              : 'SaaS platforms and web projects I built to solve real operational and business needs, with detailed case studies.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            {
              id: '2',
              label: isRtl ? 'أعمالي ومنتجاتي' : 'Work & Products',
              isCurrent: true,
            },
          ]}
        />

        <div className="space-y-10 pb-16 text-start">
          {/* 1. Filters & Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {availableCategories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    selectedCategory === cat.key
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-2xs'
                      : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[var(--color-secondary)]/50'
                  }`}
                >
                  {getLocalizedText(cat.label, language)}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-subtle)]" />
              <input
                type="text"
                placeholder={
                  isRtl
                    ? 'ابحث باسم المشروع أو التقنية...'
                    : 'Search by project or technology...'
                }
                aria-label={
                  isRtl
                    ? 'ابحث باسم المشروع أو التقنية'
                    : 'Search by project or technology'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-10 pe-4 py-2 text-xs sm:text-sm rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-hidden focus:border-[var(--color-secondary)] transition-colors"
              />
            </div>
          </div>

          {/* 2. Projects Grid */}
          {filteredProjects.length === 0 ? (
            <Card className="p-12 text-center space-y-4">
              <Layers className="w-10 h-10 mx-auto text-[var(--color-text-subtle)]" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'لم يتم العثور على مشاريع مطابقة'
                    : 'No matching projects found'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {isRtl
                    ? 'جرب اختيار تصنيف آخر أو مسح كلمة البحث.'
                    : 'Try selecting another category or clearing your search query.'}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                {isRtl ? 'عرض جميع المشاريع' : 'Show All Projects'}
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project) => {
                const title = getLocalizedText(project.title, language);
                const tagline = getLocalizedText(project.tagline, language);
                const category = getLocalizedText(project.category, language);
                const role = getLocalizedText(project.role, language);
                const status = getLocalizedText(project.status, language);

                return (
                  <Card
                    key={project.id}
                    className="p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[var(--color-secondary)]/50 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Top Meta Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="primary" size="sm">
                            {category}
                          </Badge>
                          {project.featured && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                              <Sparkles className="w-3 h-3" />
                              <span>{isRtl ? 'منتج رئيسي' : 'Flagship'}</span>
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                          {project.year ? `${project.year} • ` : ''}
                          {status}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-2">
                        <h2 className="text-h2 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal leading-snug">
                          {project.hasCaseStudy ? (
                            <Link
                              href={`/projects/${project.slug}`}
                              className="hover:text-[var(--color-secondary)] transition-colors"
                            >
                              {title}
                            </Link>
                          ) : (
                            title
                          )}
                        </h2>
                        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                          {tagline}
                        </p>
                      </div>

                      {/* Role */}
                      <div className="p-3.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs">
                        <span className="font-bold text-[var(--color-text-subtle)] block mb-0.5">
                          {isRtl ? 'دوري في المشروع:' : 'My Role:'}
                        </span>
                        <span className="font-semibold text-[var(--color-text)]">
                          {role}
                        </span>
                      </div>

                      {/* Key Features Preview */}
                      {project.keyFeatures.length > 0 && (
                        <div className="space-y-2 pt-1">
                          {project.keyFeatures
                            .slice(0, 3)
                            .map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                                <span>
                                  {getLocalizedText(feature, language)}
                                </span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        {project.hasCaseStudy && (
                          <Link href={`/projects/${project.slug}`}>
                            <Button
                              variant="primary"
                              size="sm"
                              className="font-bold"
                              rightIcon={
                                isRtl ? (
                                  <ArrowLeft className="w-3.5 h-3.5" />
                                ) : (
                                  <ArrowRight className="w-3.5 h-3.5" />
                                )
                              }
                            >
                              {isRtl ? 'تفاصيل المشروع' : 'Project Details'}
                            </Button>
                          </Link>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            handleInquireWhatsApp(
                              getLocalizedText(project.title, 'ar')
                            )
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>
                            {isRtl
                              ? 'اطلب مشروعًا مشابهًا'
                              : 'Request Similar'}
                          </span>
                        </button>
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target={
                            project.liveUrl.startsWith('http')
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            project.liveUrl.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
                        >
                          <span>
                            {isRtl ? 'زيارة الموقع الحي' : 'Visit Live Site'}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {/* 3. Confidentiality & WhatsApp Consultation Banner */}
          <Card className="p-6 sm:p-8 bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-secondary)] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-h4 font-bold text-[var(--color-text)]">
                    {isRtl
                      ? 'سياسة الخصوصية ومشاريع العملاء الخاصة'
                      : 'Privacy Policy & Confidential Client Projects'}
                  </h3>
                  <p className="text-xs sm:text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {isRtl
                      ? 'ألتزم بحماية سرية أعمال العملاء وبياناتهم التشغيلية؛ لذلك أعرض في هذه الصفحة فقط المنتجات والمشاريع المعتمدة للنشر العام. إذا كنت تبحث عن بناء متجر إلكتروني، بوابة تعليمية، أو نظام محاسبة وفوترة مخصص، تواصل معي مباشرة عبر واتساب.'
                      : 'I strictly protect client confidentiality and operational data; only publicly approved products and projects are listed here. If you need a custom store, portal, or billing system, message me directly on WhatsApp.'}
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => handleInquireWhatsApp()}
                className="shrink-0 font-bold bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white"
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                {isRtl
                  ? 'ناقش مشروعك عبر واتساب'
                  : 'Discuss Your Project on WhatsApp'}
              </Button>
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
}
