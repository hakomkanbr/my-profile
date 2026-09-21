'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePreferencesStore, useProgressStore, useTrainerStore } from '@/store';
import { IconButton } from '../ui/IconButton';
import { Dropdown } from '../ui/Dropdown';
import { Menu, Sun, Moon, Monitor, Globe, Presentation, GraduationCap, CheckCircle2 } from './IconMapper';
import { getTotalStats } from '@/content';

export interface HeaderProps {
  onOpenMobileNav: () => void;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav, title }) => {
  const { language, theme, mode, setLanguage, setTheme, setMode } = usePreferencesStore();
  const { progress } = useProgressStore();
  const { togglePresenter } = useTrainerStore();

  const totalStats = getTotalStats();
  const completedCount = progress.completedLessons.length;
  const progressPercent =
    totalStats.totalLessons > 0
      ? Math.round((completedCount / totalStats.totalLessons) * 100)
      : 0;

  const themeOptions = [
    {
      id: 'theme-light',
      label: language === 'ar' ? 'نهاري (Light)' : 'Light',
      icon: <Sun className="w-4 h-4" />,
      onClick: () => setTheme('light'),
    },
    {
      id: 'theme-dark',
      label: language === 'ar' ? 'داكن (Dark)' : 'Dark',
      icon: <Moon className="w-4 h-4" />,
      onClick: () => setTheme('dark'),
    },
    {
      id: 'theme-system',
      label: language === 'ar' ? 'تلقائي (System)' : 'System',
      icon: <Monitor className="w-4 h-4" />,
      onClick: () => setTheme('system'),
    },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)] px-4 sm:px-6 py-3 transition-colors">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        {/* Left Side: Mobile Menu + Brand / Context */}
        <div className="flex items-center gap-3">
          <IconButton
            variant="ghost"
            size="sm"
            aria-label="فتح القائمة الرئيسية"
            onClick={onOpenMobileNav}
            className="lg:hidden text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)]"
          >
            <Menu className="w-5 h-5" />
          </IconButton>

          {/* Mobile Brand Logo */}
          <Link href="/" className="lg:hidden flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs tracking-tighter shadow-xs">
              WC
            </div>
            <span className="font-extrabold text-sm tracking-tight text-[var(--color-text)]">
              WEB CREATOR <span className="text-[var(--color-secondary)]">AI</span>
            </span>
          </Link>

          {/* Desktop Page Title Context */}
          {title && (
            <div className="hidden lg:flex items-center gap-2 ps-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] inline-block" />
              <h1 className="text-body-sm font-semibold text-[var(--color-text)]">{title}</h1>
            </div>
          )}
        </div>

        {/* Right Side: Progress Shortcut + Mode + Lang + Theme */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Progress Shortcut Pill */}
          <Link
            href="/journey"
            className={cn(
              'hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0',
              'bg-[var(--color-surface-sunken)] border border-[var(--color-border)]',
              'hover:border-[var(--color-secondary)] transition-all cursor-pointer text-xs font-semibold'
            )}
            title="انقر للانتقال إلى رحلة التعلم"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-[var(--color-text-muted)]">
              {language === 'ar' ? 'التقدم:' : 'Progress:'}
            </span>
            <span className="font-mono text-[var(--color-primary)] font-bold">
              {progressPercent}%
            </span>
          </Link>

          {/* Trainee / Trainer Mode Switcher */}
          <button
            type="button"
            onClick={() => {
              const newMode = mode === 'trainee' ? 'trainer' : 'trainee';
              setMode(newMode);
              if (newMode === 'trainer') togglePresenter();
            }}
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-caption font-semibold whitespace-nowrap shrink-0 transition-all border cursor-pointer',
              mode === 'trainer'
                ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-xs'
                : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text)]'
            )}
            title={
              language === 'ar'
                ? mode === 'trainer'
                  ? 'وضع المدرب نشط (انقر للتبديل لوضع المتدرب)'
                  : 'وضع المتدرب نشط (انقر للتبديل لوضع المدرب)'
                : mode === 'trainer'
                ? 'Trainer Mode Active'
                : 'Trainee Mode Active'
            }
          >
            {mode === 'trainer' ? (
              <>
                <Presentation className="w-3.5 h-3.5" />
                <span className="hidden md:inline">وضع المدرب</span>
              </>
            ) : (
              <>
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="hidden md:inline">وضع المتدرب</span>
              </>
            )}
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-caption font-bold whitespace-nowrap shrink-0 transition-colors border',
              'bg-[var(--color-surface-sunken)] border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border-subtle)]'
            )}
            aria-label="تبديل لغة الواجهة"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
            <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
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
  );
};
