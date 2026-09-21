'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { getLocalizedText } from '@/lib/utils';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { Reveal } from '@/components/motion';

export const PortfolioAboutSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const name = getLocalizedText(INSTRUCTOR_PROFILE.name, language);

  return (
    <section id="about" className="py-10 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <Reveal direction="up" distance={16}>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? 'نبذة مهنية' : 'Profile'}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)]">
              {isRtl ? `عن ${name}` : `About ${name}`}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Secondary small portrait */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <Reveal direction="up" delayMs={100} distance={18}>
              <div className="relative rounded-2xl p-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm max-w-[240px] w-full hover:border-[var(--color-secondary)]/40 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/myphoto.jfif"
                  alt={name}
                  className="w-full aspect-4/5 object-cover object-top rounded-xl"
                  loading="lazy"
                />
                <div className="p-3 text-center">
                  <span className="text-xs font-bold text-[var(--color-text)] block">
                    {name}
                  </span>
                  <span className="text-[11px] text-[var(--color-text-subtle)] font-mono">
                    Software Engineer
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Narrative copy */}
          <div className="md:col-span-8 space-y-5 text-body text-[var(--color-text-muted)] leading-relaxed font-normal">
            <Reveal direction="up" delayMs={150} distance={18}>
              <p className="text-h4 font-semibold text-[var(--color-text)]">
                {isRtl
                  ? 'مهندس برمجيات وموجه تقني مع أكثر من 8 سنوات من الخبرة العملية في تطوير البرمجيات، إدارة الخوادم، وتصميم الأنظمة.'
                  : 'Software engineer and technical mentor with more than 8 years of experience working across software development, server management, and system design.'}
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={220} distance={18}>
              <p>
                {isRtl
                  ? 'يركز عملي على بناء تطبيقات الويب العملية، الواجهات البرمجية (APIs)، الأنظمة الخلفية، والبنية التحتية الموثوقة. أهتم بفهم كيف تعمل المنظومة ككل متكامل — بدءاً من المعمارية البرمجية وقواعد البيانات، وحتى الخوادم، النشر، وتجربة المطور.'
                  : 'My work focuses on building practical web applications, APIs, backend systems, and reliable infrastructure. I enjoy understanding how systems operate as an integrated whole — from application architecture and databases to deployment, servers, and the developer experience.'}
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={290} distance={18}>
              <p>
                {isRtl
                  ? 'إلى جانب بناء البرمجيات، أمتلك خبرة واسعة في تدريب وتوجيه المطورين، ومساعدة الفرق على بناء فهم عميق لهندسة النظم الخلفية، معمارية واجهات البرمجة، وسير العمل التطبيقي المنتج.'
                  : 'Alongside engineering software, I have hands-on experience mentoring developers and helping teams build a strong foundation in backend engineering, APIs, architecture, and pragmatic development workflows.'}
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={360} distance={18}>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <span>{isRtl ? 'المزيد عني وعن مسيرتي' : 'Read full background'}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>

                <Link
                  href="/about#cv"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[var(--color-secondary)]" />
                  <span>{isRtl ? 'السيرة الذاتية (CV)' : 'Curriculum Vitae'}</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
