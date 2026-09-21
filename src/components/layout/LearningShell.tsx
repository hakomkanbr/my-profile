'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, getLocalizedText } from '@/lib/utils';
import { LEARNER_NAVIGATION_ITEMS } from '@/content/navigation';
import { getTotalStats } from '@/content';
import { usePreferencesStore, useProgressStore, useTrainerStore } from '@/store';
import { IconMapper, Menu, X, Sun, Moon, Monitor, Globe, Presentation, GraduationCap, CheckCircle2 } from './IconMapper';
import { IconButton } from '../ui/IconButton';
import { Dropdown } from '../ui/Dropdown';
import { Progress } from '../ui/Progress';
import { Footer } from './Footer';

export interface LearningShellProps {
  children: React.ReactNode;
  headerTitle?: string;
  showFooter?: boolean;
}

export const LearningShell: React.FC<LearningShellProps> = ({
  children,
  headerTitle,
  showFooter = true,
}) => {
  const pathname = usePathname();
  const { language, theme, mode, setLanguage, setTheme, setMode } = usePreferencesStore();
  const { progress } = useProgressStore();
  const { togglePresenter } = useTrainerStore();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isRtl = language === 'ar';

  const totalStats = getTotalStats();
  const completedCount = progress.completedLessons.length;
  const progressPercent =
    totalStats.totalLessons > 0
      ? Math.round((completedCount / totalStats.totalLessons) * 100)
      : 0;

  const themeOptions = [
    {
      id: 'theme-light',
      label: isRtl ? 'نهاري (Light)' : 'Light',
      icon: <Sun className="w-4 h-4" />,
      onClick: () => setTheme('light'),
    },
    {
      id: 'theme-dark',
      label: isRtl ? 'داكن (Dark)' : 'Dark',
      icon: <Moon className="w-4 h-4" />,
      onClick: () => setTheme('dark'),
    },
    {
      id: 'theme-system',
      label: isRtl ? 'تلقائي (System)' : 'System',
      icon: <Monitor className="w-4 h-4" />,
      onClick: () => setTheme('system'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)] antialiased transition-colors">
      {/* Learning Shell Top Header */}
      <header className="sticky top-0 z-40 w-full bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] px-4 sm:px-6 py-3 transition-colors">
        <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
          {/* Left: Brand + Course Context */}
          <div className="flex items-center gap-3">
            {/* Mobile menu trigger */}
            <IconButton
              variant="ghost"
              size="sm"
              aria-label="القائمة الجانبية"
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)]"
            >
              <Menu className="w-5 h-5" />
            </IconButton>

            {/* Brand Logo with Return to Portfolio link */}
            <Link href="/web-creator-ai" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-extrabold text-xs shadow-xs">
                WC
              </div>
              <div className="flex flex-col text-start">
                <span className="font-extrabold text-sm tracking-tight text-[var(--color-text)] leading-none">
                  WEB CREATOR <span className="text-[var(--color-secondary)]">AI</span>
                </span>
                <span className="text-[10px] text-[var(--color-text-subtle)] font-medium mt-0.5">
                  {isRtl ? 'الحقيبة التدريبية التفاعلية' : 'Interactive Training Kit'}
                </span>
              </div>
            </Link>

            {/* Back to Portfolio link */}
            <Link
              href="/"
              className="hidden xl:inline-flex items-center gap-1.5 ms-2 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-secondary)] transition-all"
            >
              <span>{isRtl ? '← موقع عبد الحكيم قنبر' : '← Abdulhakim Portfolio'}</span>
            </Link>

            {headerTitle && (
              <div className="hidden md:flex items-center gap-2 ps-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] inline-block" />
                <h1 className="text-body-sm font-semibold text-[var(--color-text)]">{headerTitle}</h1>
              </div>
            )}
          </div>

          {/* Center: Desktop Quick Context Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {LEARNER_NAVIGATION_ITEMS.slice(0, 5).map((item) => {
              const isActive =
                item.href === '/web-creator-ai'
                  ? pathname === '/web-creator-ai'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const label = getLocalizedText(item.label, language);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors',
                    isActive
                      ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)]'
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Progress + Mode + Lang + Theme */}
          <div className="flex items-center gap-2">
            {/* Progress Pill */}
            <Link
              href="/web-creator-ai/journey"
              className={cn(
                'hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full',
                'bg-[var(--color-surface-sunken)] border border-[var(--color-border)]',
                'hover:border-[var(--color-secondary)] transition-all cursor-pointer text-xs font-semibold'
              )}
              title={isRtl ? 'رحلة التعلم' : 'Learning Journey'}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[var(--color-text-muted)] font-mono text-xs">
                {progressPercent}%
              </span>
            </Link>

            {/* Mode Switcher */}
            <button
              type="button"
              onClick={() => {
                const newMode = mode === 'trainee' ? 'trainer' : 'trainee';
                setMode(newMode);
                if (newMode === 'trainer') togglePresenter();
              }}
              className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border cursor-pointer',
                mode === 'trainer'
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text)]'
              )}
              title={
                isRtl
                  ? mode === 'trainer'
                    ? 'وضع المدرب نشط'
                    : 'وضع المتدرب نشط'
                  : mode === 'trainer'
                  ? 'Trainer Mode'
                  : 'Trainee Mode'
              }
            >
              {mode === 'trainer' ? (
                <>
                  <Presentation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isRtl ? 'المدرب' : 'Trainer'}</span>
                </>
              ) : (
                <>
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isRtl ? 'المتدرب' : 'Trainee'}</span>
                </>
              )}
            </button>

            {/* Language */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border bg-[var(--color-surface-sunken)] border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border-subtle)] cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
              <span>{isRtl ? 'EN' : 'عربي'}</span>
            </button>

            {/* Theme Dropdown */}
            <Dropdown
              align="end"
              items={themeOptions}
              trigger={
                <button
                  type="button"
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border-subtle)] transition-colors cursor-pointer"
                  aria-label="تغيير المظهر"
                >
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4 text-[var(--color-secondary)]" />
                  ) : theme === 'light' ? (
                    <Sun className="w-4 h-4 text-[var(--color-primary)]" />
                  ) : (
                    <Monitor className="w-4 h-4" />
                  )}
                </button>
              }
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>

      {/* Mobile Drawer */}
      {isMobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileNavOpen(false)}
            aria-hidden="true"
          />
          <div
            className={cn(
              'relative w-80 max-w-[85vw] h-full bg-[var(--color-surface)] border-e border-[var(--color-border)] shadow-2xl flex flex-col z-10 text-start',
              isRtl ? 'slide-in-from-right' : 'slide-in-from-left'
            )}
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border-subtle)]">
              <Link
                href="/web-creator-ai"
                onClick={() => setIsMobileNavOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  WC
                </div>
                <span className="font-extrabold text-sm tracking-tight text-[var(--color-text)]">
                  WEB CREATOR <span className="text-[var(--color-secondary)]">AI</span>
                </span>
              </Link>
              <IconButton
                variant="ghost"
                size="sm"
                aria-label="إغلاق"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <X className="w-5 h-5" />
              </IconButton>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 no-scrollbar">
              <Link
                href="/"
                onClick={() => setIsMobileNavOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-surface-sunken)] border border-[var(--color-border)] mb-3"
              >
                <span>{isRtl ? '← العودة لموقع عبد الحكيم قنبر' : '← Back to Portfolio'}</span>
              </Link>

              {LEARNER_NAVIGATION_ITEMS.map((item) => {
                const isActive =
                  item.href === '/web-creator-ai'
                    ? pathname === '/web-creator-ai'
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                const label = getLocalizedText(item.label, language);
                const badge = item.badge ? getLocalizedText(item.badge, language) : undefined;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3.5 py-3 rounded-xl text-body-sm font-medium transition-colors',
                      isActive
                        ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold border-s-4 border-s-[var(--color-primary)]'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)]'
                    )}
                  >
                    <span
                      className={cn(
                        'shrink-0',
                        isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-subtle)]'
                      )}
                    >
                      <IconMapper name={item.icon} className="w-5 h-5" />
                    </span>
                    <span className="flex-1">{label}</span>
                    {badge && (
                      <span
                        className={cn(
                          'text-[10px] font-bold px-2 py-0.5 rounded-md leading-none',
                          isActive
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'bg-[var(--color-border)] text-[var(--color-text-subtle)]'
                        )}
                      >
                        {badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Trainee Progress Mini-Box */}
            <div className="p-3 mx-3 mb-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)]">
              <div className="flex items-center justify-between text-caption font-bold text-[var(--color-text)] mb-1.5">
                <span>{isRtl ? 'إنجاز المنهج' : 'Course Progress'}</span>
                <span className="font-mono text-[var(--color-primary)]">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} size="sm" showLabel={false} />
            </div>
          </div>
        </div>
      )}

      {showFooter && <Footer />}
    </div>
  );
};
