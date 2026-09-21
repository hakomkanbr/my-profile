'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, getLocalizedText } from '@/lib/utils';
import { MAIN_NAVIGATION_ITEMS } from '@/content/navigation';
import { INSTRUCTOR_PROFILE, getTotalStats } from '@/content';
import { usePreferencesStore, useProgressStore } from '@/store';
import { IconMapper, ChevronLeft, ChevronRight } from './IconMapper';
import { Progress } from '../ui/Progress';
import { Avatar } from '../ui/Avatar';

export interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const pathname = usePathname();
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();

  const isRtl = language === 'ar';
  const totalStats = getTotalStats();
  const completedLessons = progress.completedLessons.length;
  const progressPercent =
    totalStats.totalLessons > 0
      ? Math.round((completedLessons / totalStats.totalLessons) * 100)
      : 0;

  return (
    <aside
      aria-label="القائمة الجانبية الرئيسية"
      className={cn(
        'hidden lg:flex flex-col shrink-0 h-screen sticky top-0 border-e border-[var(--color-border)]',
        'bg-[var(--color-surface)] text-[var(--color-text)] transition-all duration-200 z-40',
        isCollapsed ? 'w-20' : 'w-64 xl:w-72'
      )}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--color-border-subtle)] h-16">
        <Link href="/" className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-extrabold text-sm tracking-tight shrink-0 shadow-xs">
            WC
          </div>
          {!isCollapsed && (
            <div className="flex flex-col text-start">
              <span className="font-extrabold text-sm tracking-tight text-[var(--color-text)] leading-none">
                WEB CREATOR <span className="text-[var(--color-secondary)]">AI</span>
              </span>
              <span className="text-[10px] text-[var(--color-text-subtle)] font-medium mt-0.5">
                {language === 'ar' ? 'منصة التدريب التفاعلية' : 'Interactive Training Kit'}
              </span>
            </div>
          )}
        </Link>

        {/* Collapse Toggle Button */}
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'توسيع القائمة' : 'تصغير القائمة'}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--color-text-subtle)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)] transition-colors cursor-pointer"
        >
          {isCollapsed ? (
            isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
          ) : (
            isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 no-scrollbar">
        {MAIN_NAVIGATION_ITEMS.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          const label = getLocalizedText(item.label, language);
          const badge = item.badge ? getLocalizedText(item.badge, language) : undefined;

          return (
            <Link
              key={item.id}
              href={item.href}
              title={isCollapsed ? label : undefined}
              className={cn(
                'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-body-sm font-medium transition-all duration-150',
                isActive
                  ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold shadow-xs border-s-4 border-s-[var(--color-primary)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)]',
                isCollapsed && 'justify-center px-2'
              )}
            >
              <span
                className={cn(
                  'shrink-0 transition-colors',
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-subtle)] group-hover:text-[var(--color-text)]'
                )}
              >
                <IconMapper name={item.icon} className="w-5 h-5" />
              </span>

              {!isCollapsed && (
                <>
                  <span className="flex-1 truncate text-start">{label}</span>
                  {badge && (
                    <span
                      className={cn(
                        'text-[10px] font-bold px-1.5 py-0.5 rounded-md leading-none',
                        isActive
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--color-border)] text-[var(--color-text-subtle)]'
                      )}
                    >
                      {badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Trainee Progress Mini-Card */}
      {!isCollapsed && (
        <div className="p-3 mx-3 mb-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-start">
          <div className="flex items-center justify-between text-caption font-bold text-[var(--color-text)] mb-1.5">
            <span>{language === 'ar' ? 'إنجاز المنهج' : 'Course Progress'}</span>
            <span className="font-mono text-[var(--color-primary)]">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} size="sm" showLabel={false} />
          <div className="flex items-center justify-between text-[11px] text-[var(--color-text-subtle)] mt-2 font-medium">
            <span>
              {completedLessons} / {totalStats.totalLessons} {language === 'ar' ? 'درس' : 'lessons'}
            </span>
            <Link
              href="/journey"
              className="text-[var(--color-secondary)] hover:underline font-semibold"
            >
              {language === 'ar' ? 'عرض الرحلة' : 'View'}
            </Link>
          </div>
        </div>
      )}

      {/* Instructor Footer Attribution */}
      <div className="p-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
        <Link
          href="/instructor"
          title={getLocalizedText(INSTRUCTOR_PROFILE.name, language)}
          className={cn(
            'flex items-center gap-3 p-1.5 rounded-xl hover:bg-[var(--color-surface-sunken)] transition-colors group text-start',
            isCollapsed && 'justify-center p-0'
          )}
        >
          <Avatar
            name={getLocalizedText(INSTRUCTOR_PROFILE.name, language)}
            size="sm"
            className="ring-2 ring-[var(--color-border-strong)]"
          />
          {!isCollapsed && (
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-caption font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                {getLocalizedText(INSTRUCTOR_PROFILE.name, language)}
              </span>
              <span className="text-[10px] text-[var(--color-text-subtle)] truncate">
                {language === 'ar' ? 'كبير مطوري البرمجيات والمدرب' : 'Senior Developer & Instructor'}
              </span>
            </div>
          )}
        </Link>
      </div>
    </aside>
  );
};
