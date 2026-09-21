'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { ALL_PROJECTS } from '@/content';
import { ProjectCard, Button } from '@/components';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { useRouter } from 'next/navigation';

export const WhatYouWillBuildSection: React.FC = () => {
  const router = useRouter();
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2 max-w-3xl">
          <span className="text-label text-[var(--color-primary)]">
            {isRtl ? 'المخرجات الحقيقية' : 'Hands-On Output'}
          </span>
          <h2 className="text-h2 font-bold text-[var(--color-text)]">
            {isRtl
              ? 'مشاريع حقيقية تخرج بها لمعرض أعمالك'
              : 'Real Projects You Will Build and Showcase'}
          </h2>
          <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
            {isRtl
              ? 'قيمة تعلمك لا تقاس بعدد الساعات التي شاهدتها، بل بما بنيته بيديك ونشرته حياً على الإنترنت يلمسه عملاؤك.'
              : 'Your skill is proven not by course watch-time, but by production applications deployed to the web.'}
          </p>
        </div>

        <Link href="/web-creator-ai/projects" className="shrink-0">
          <Button
            variant="primary"
            size="md"
            rightIcon={
              isRtl ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )
            }
          >
            {isRtl ? 'استعراض ورش المشاريع' : 'View All Projects'}
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALL_PROJECTS.map((prj) => (
          <ProjectCard
            key={prj.id}
            code={prj.code}
            title={isRtl ? prj.title.ar : prj.title.en}
            tagline={isRtl ? prj.tagline.ar : prj.tagline.en}
            level={prj.level}
            targetOutput={isRtl ? prj.targetOutput.ar : prj.targetOutput.en}
            techStack={prj.techStack}
            onOpenWorkshop={() => router.push(`/web-creator-ai/projects?project=${prj.id}`)}
          />
        ))}
      </div>
    </section>
  );
};
