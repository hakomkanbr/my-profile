'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, getLocalizedText } from '@/lib/utils';
import { MAIN_NAVIGATION_ITEMS } from '@/content/navigation';
import { INSTRUCTOR_PROFILE, getTotalStats } from '@/content';
import { usePreferencesStore, useProgressStore } from '@/store';
import { IconMapper, X } from './IconMapper';
import { IconButton } from '../ui/IconButton';
import { Progress } from '../ui/Progress';
import { Avatar } from '../ui/Avatar';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="قائمة التصفح على الهاتف"
      className="fixed inset-0 z-50 lg:hidden flex"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Body */}
      <div
        className={cn(
          'relative w-80 max-w-[85vw] h-full bg-[var(--color-surface)] border-e border-[var(--color-border)] shadow-2xl flex flex-col z-10 text-start',
          'animate-in duration-200',
          isRtl ? 'slide-in-from-right' : 'slide-in-from-left'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border-subtle)]">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
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
            aria-label="إغلاق القائمة"
            onClick={onClose}
            className="text-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
          >
            <X className="w-5 h-5" />
          </IconButton>
        </div>

        {/* Navigation List */}
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
                onClick={onClose}
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

        {/* Progress Box */}
        <div className="p-3 mx-3 mb-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)]">
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
              onClick={onClose}
              className="text-[var(--color-secondary)] hover:underline font-semibold"
            >
              {language === 'ar' ? 'عرض' : 'View'}
            </Link>
          </div>
        </div>

        {/* Instructor Footer */}
        <div className="p-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
          <Link
            href="/instructor"
            onClick={onClose}
            className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-[var(--color-surface-sunken)] transition-colors"
          >
            <Avatar
              name={getLocalizedText(INSTRUCTOR_PROFILE.name, language)}
              size="sm"
            />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-caption font-bold text-[var(--color-text)] truncate">
                {getLocalizedText(INSTRUCTOR_PROFILE.name, language)}
              </span>
              <span className="text-[10px] text-[var(--color-text-subtle)] truncate">
                {language === 'ar' ? 'كبير مطوري البرمجيات والمدرب' : 'Senior Developer & Instructor'}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
