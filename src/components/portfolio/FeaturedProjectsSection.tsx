'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { getPublishedProjects } from '@/content/portfolio-projects';
import { getLocalizedText } from '@/lib/utils';
import { Button } from '@/components/ui';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { Reveal } from '@/components/motion';
import { buildClientInquiryMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

export const FeaturedProjectsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  // Approved published projects (strictly excludes hidden or pending-permission client projects)
  const publishedProjects = getPublishedProjects();

  const whatsappSimilarProjectUrl = buildWhatsAppUrl(
    buildClientInquiryMessage({
      projectType: 'مشروع موقع أو نظام مخصص',
      details: 'اطلعت على قسم الأعمال في موقعك، وأرغب في مناقشة مشروع مشابه لعملي.',
      pageUrl: 'https://abdulhakimkanbr.com/#projects',
    })
  );

  return (
    <section
      id="projects"
      className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? 'معرض الأعمال' : 'Selected Works'}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl ? 'أعمالي' : 'My Work'}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                {isRtl
                  ? 'مجموعة مختارة من المنصات والأنظمة والمشاريع التي طوّرتها وتمت الموافقة على نشرها، مع شرح واضح للمشكلة التي يعالجها كل مشروع وكيف يعمل.'
                  : 'A curated selection of approved platforms, systems, and web applications I built, showing the real problem solved and how each system works.'}
              </p>
            </div>

            <Link href="/projects" className="shrink-0">
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
                {isRtl ? 'عرض جميع الأعمال' : 'View All Projects'}
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* Concise Approved Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedProjects.map((project, idx) => {
            const title = getLocalizedText(project.title, language);
            const tagline = getLocalizedText(project.tagline, language);
            const category = getLocalizedText(project.category, language);

            return (
              <Reveal key={project.id} direction="up" delay={60 + idx * 70}>
                <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-5 hover:border-[var(--color-secondary)]/50 transition-all duration-300 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-secondary)]">
                        {category}
                      </span>
                      {project.year && (
                        <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-h3 font-bold text-[var(--color-text)] leading-snug">
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
                    </h3>

                    <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                      {tagline}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-3">
                    {project.hasCaseStudy && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline"
                      >
                        <span>
                          {isRtl ? 'تفاصيل المشروع' : 'Project Details'}
                        </span>
                        {isRtl ? (
                          <ArrowLeft className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </Link>
                    )}

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
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                      >
                        <span>
                          {isRtl ? 'معاينة حية' : 'Live Preview'}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Respectful Client Privacy & Custom Inquiry Banner */}
        <Reveal direction="up" delay={200}>
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-secondary)] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'مشاريع العملاء الخاصة واتفاقيات السرية'
                    : 'Private Client Projects & Confidentiality'}
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
                  {isRtl
                    ? 'حفاظًا على خصوصية العملاء، أعرض هنا فقط المشاريع والمنتجات المصرح بنشرها علنًا. إذا كنت تبحث عن بناء متجر، بوابة خدمية، أو نظام فواتير وإدارة مخصص، يسعدني مناقشة متطلباتك مباشرة.'
                    : 'To respect client confidentiality, only publicly approved projects and products are displayed here. If you need a custom store, portal, or billing system, feel free to message me directly.'}
                </p>
              </div>
            </div>

            <a
              href={whatsappSimilarProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-full md:w-auto"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full md:w-auto font-bold bg-[var(--color-surface)]"
                leftIcon={
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                }
              >
                {isRtl
                  ? 'اطلب مشروعًا مشابهًا عبر واتساب'
                  : 'Request a Similar Project on WhatsApp'}
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
