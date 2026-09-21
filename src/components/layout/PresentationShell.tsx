'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { X, ChevronLeft, ChevronRight, Moon, Sun } from './IconMapper';


export interface PresentationShellProps {
  children: React.ReactNode;
  title?: string;
  stageCode?: string;
  currentSlide?: number;
  totalSlides?: number;
  onNextSlide?: () => void;
  onPrevSlide?: () => void;
  onExit?: () => void;
}

export const PresentationShell: React.FC<PresentationShellProps> = ({
  children,
  title = 'عرض الشرح التقديمي',
  stageCode,
  currentSlide = 1,
  totalSlides = 1,
  onNextSlide,
  onPrevSlide,
  onExit,
}) => {
  const { language, theme, setTheme } = usePreferencesStore();
  const { toggleTrainerNotes } = useTrainerStore();
  const isRtl = language === 'ar';



  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onExit) {
        onExit();
      } else if ((e.key === 'ArrowRight' || e.key === 'PageDown') && onNextSlide) {
        if (isRtl) onPrevSlide?.();
        else onNextSlide();
      } else if ((e.key === 'ArrowLeft' || e.key === 'PageUp') && onPrevSlide) {
        if (isRtl) onNextSlide?.();
        else onPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRtl, onNextSlide, onPrevSlide, onExit]);

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-surface-sunken)] text-[var(--color-text)] flex flex-col select-none overflow-hidden">
      {/* Top Floating Minimal Presentation Bar */}
      <header className="h-14 px-6 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/trainer"
            onClick={onExit}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>{isRtl ? 'إنهاء العرض (Esc)' : 'Exit (Esc)'}</span>
          </Link>

          {stageCode && (
            <span className="px-2 py-0.5 rounded-md bg-[var(--color-primary)] text-white text-[11px] font-mono font-bold">
              {stageCode}
            </span>
          )}

          <h2 className="text-sm font-bold text-[var(--color-text)] truncate max-w-md">
            {title}
          </h2>
        </div>

        {/* Center: Slide Progress Index */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevSlide}
            className="p-1 rounded hover:bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-40"
            disabled={currentSlide <= 1}
            aria-label="الشريحة السابقة"
          >
            {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)]">
            {currentSlide} / {totalSlides}
          </span>

          <button
            type="button"
            onClick={onNextSlide}
            className="p-1 rounded hover:bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-40"
            disabled={currentSlide >= totalSlides}
            aria-label="الشريحة التالية"
          >
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Right Controls: Timer & Speaker Notes Toggle */}
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={toggleTrainerNotes}
            className="px-2.5 py-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-semibold"
          >
            {isRtl ? 'ملاحظات المدرب' : 'Speaker Notes'}
          </button>


          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-sunken)]"
            aria-label="تبديل المظهر"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="flex-1 overflow-auto flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-5xl h-full flex flex-col justify-center">
          {children}
        </div>
      </main>
    </div>
  );
};
