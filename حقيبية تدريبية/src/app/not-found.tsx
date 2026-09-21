'use client';

import React from 'react';
import Link from 'next/link';
import { PortfolioShell, PageContainer, Button } from '@/components';
import { ArrowLeft, ArrowRight, Home, FolderGit2 } from 'lucide-react';
import { usePreferencesStore } from '@/store';

export default function NotFound() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <PortfolioShell>
      <PageContainer>
        <div className="py-16 sm:py-24 text-center max-w-xl mx-auto space-y-6">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-secondary)] uppercase">
            404 · Page Not Found
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h1>

          <p className="text-body text-[var(--color-text-muted)] leading-relaxed">
            {isRtl
              ? 'عذراً، الرابط الذي تحاول الوصول إليه غير موجود أو تم نقله إلى مسار آخر.'
              : 'The page or project you are looking for does not exist or has been moved.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <Button
                variant="primary"
                size="md"
                leftIcon={<Home className="w-4 h-4" />}
              >
                {isRtl ? 'العودة للرئيسية' : 'Return Home'}
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                variant="outline"
                size="md"
                leftIcon={<FolderGit2 className="w-4 h-4" />}
                rightIcon={isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              >
                {isRtl ? 'تصفح المشاريع' : 'Browse Projects'}
              </Button>
            </Link>
          </div>
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
