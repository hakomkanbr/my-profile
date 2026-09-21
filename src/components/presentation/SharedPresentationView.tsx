'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { PresentationSlide } from '@/types';
import { Button } from '@/components/ui';
import {
  SlideQuizWidget,
  SlideRevealWidget,
  SlideCodeWidget,
  SlideChecklistWidget,
} from './SlideInteractions';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Lightbulb,
  CheckCircle2,
  FileText,
  Clock,
  Play,
  Pause,
  RotateCcw,
} from 'lucide-react';

export interface SharedPresentationViewProps {
  slides: PresentationSlide[];
  initialSlideIndex?: number;
  mode: 'trainer' | 'learner';
  exitHref?: string;
}

export const SharedPresentationView: React.FC<SharedPresentationViewProps> = ({
  slides,
  initialSlideIndex = 0,
  mode,
  exitHref = mode === 'trainer' ? '/trainer' : '/web-creator-ai/journey',
}) => {
  const { language, theme, setTheme } = usePreferencesStore();
  const {
    activeSlideIndex,
    setActiveSlideIndex,
    nextSlide,
    prevSlide,
    showTrainerNotes,
    toggleTrainerNotes,
    timerMinutes,
    timerSeconds,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    tickTimer,
  } = useTrainerStore();

  const isRtl = language === 'ar';
  const totalSlides = slides.length;

  // Sync initial slide index if provided
  useEffect(() => {
    if (initialSlideIndex >= 0 && initialSlideIndex < slides.length) {
      setActiveSlideIndex(initialSlideIndex);
    }
  }, [initialSlideIndex, setActiveSlideIndex, slides.length]);

  // Timer interval for presentation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        tickTimer();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, tickTimer]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with form controls
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (e.key === ' ' && (e.target as HTMLElement)?.tagName?.toLowerCase() === 'button') {
          return; // Allow button clicks with space
        }
        e.preventDefault();
        if (isRtl) {
          prevSlide();
        } else {
          if (activeSlideIndex < totalSlides - 1) nextSlide();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (isRtl) {
          if (activeSlideIndex < totalSlides - 1) nextSlide();
        } else {
          prevSlide();
        }
      } else if (e.key === 'Escape') {
        window.location.href = exitHref;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRtl, activeSlideIndex, totalSlides, nextSlide, prevSlide, exitHref]);

  const currentSlide = slides[activeSlideIndex] || slides[0];

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-background)] text-[var(--color-text)] flex flex-col select-none overflow-hidden transition-colors">
      {/* 1. Header Bar: Minimal, High-Contrast Presentation Header */}
      <header className="h-14 px-4 sm:px-6 border-b border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between z-20 shrink-0">
        {/* Left: Exit Link & Stage Indicator */}
        <div className="flex items-center gap-3">
          <Link
            href={exitHref}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-mono font-bold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>{isRtl ? 'خروج (Esc)' : 'Exit (Esc)'}</span>
          </Link>

          <span className="px-2 py-0.5 rounded-sm bg-[var(--color-primary)] text-white text-xs font-mono font-bold uppercase tracking-wider">
            {currentSlide.stageNumber} / {currentSlide.stageCode}
          </span>

          <span className="hidden md:inline-block text-xs font-mono text-[var(--color-text-subtle)] truncate max-w-xs">
            {getLocalizedText(currentSlide.title, language)}
          </span>
        </div>

        {/* Center: Slide Counter & Direct Prev/Next */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            disabled={activeSlideIndex <= 0}
            className="p-1 rounded hover:bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-30 cursor-pointer"
            aria-label={isRtl ? 'الشريحة السابقة' : 'Previous Slide'}
          >
            {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)]">
            {activeSlideIndex + 1} / {totalSlides}
          </span>

          <button
            type="button"
            onClick={nextSlide}
            disabled={activeSlideIndex >= totalSlides - 1}
            className="p-1 rounded hover:bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-30 cursor-pointer"
            aria-label={isRtl ? 'الشريحة التالية' : 'Next Slide'}
          >
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Right Controls: Trainer Tools (Timer & Speaker Notes) + Theme Toggle */}
        <div className="flex items-center gap-2">
          {mode === 'trainer' && (
            <>
              {/* Zoom Timer */}
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-text)]">
                <Clock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                <span>
                  {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={isTimerRunning ? pauseTimer : startTimer}
                  className="p-0.5 hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                  aria-label={isTimerRunning ? 'إيقاف مؤقت' : 'بدء المؤقت'}
                >
                  {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                <button
                  type="button"
                  onClick={() => resetTimer(15)}
                  className="p-0.5 hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                  aria-label="إعادة تعيين المؤقت"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>

              {/* Speaker Notes Toggle */}
              <button
                type="button"
                onClick={toggleTrainerNotes}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-mono font-bold transition-all border cursor-pointer ${
                  showTrainerNotes
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                    : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text)]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isRtl ? 'ملاحظات المدرب' : 'Speaker Notes'}</span>
              </button>
            </>
          )}

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-8 h-8 rounded-sm flex items-center justify-center bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border-subtle)] transition-colors cursor-pointer"
            aria-label="تبديل المظهر"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[var(--color-primary)]" /> : <Moon className="w-3.5 h-3.5 text-[var(--color-secondary)]" />}
          </button>
        </div>
      </header>

      {/* 2. Main Slide Workspace: Split Layout if Presenter Notes are open */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Presentation Canvas */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div className="max-w-4xl mx-auto w-full space-y-8 my-auto text-start">
            {/* Slide Title & Subtitle */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                  STAGE {currentSlide.stageNumber} • {currentSlide.stageCode}
                </span>
                <span className="text-[var(--color-border-strong)]">•</span>
                <span className="font-mono text-xs text-[var(--color-text-subtle)]">
                  {mode === 'trainer' ? 'PRESENTER MODE' : 'INTERACTIVE LEARNING'}
                </span>
              </div>

              <h1 className="text-display sm:text-h1 font-extrabold text-[var(--color-text)] tracking-tight">
                {getLocalizedText(currentSlide.title, language)}
              </h1>

              <p className="text-h4 text-[var(--color-secondary)] font-medium leading-relaxed">
                {getLocalizedText(currentSlide.subtitle, language)}
              </p>
            </div>

            {/* Core Architectural Principle Box */}
            <div className="p-6 sm:p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-primary)] uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>{isRtl ? 'المفهوم المعماري الجوهري' : 'Core Architectural Principle'}</span>
              </div>
              <p className="text-body sm:text-h4 text-[var(--color-text)] font-normal leading-relaxed">
                {getLocalizedText(currentSlide.keyConcept, language)}
              </p>
            </div>

            {/* Interactive Widget Area (Shared for Learner & Trainer) */}
            {currentSlide.interaction && (
              <div className="pt-2">
                {currentSlide.interaction.type === 'quiz' && (
                  <SlideQuizWidget interaction={currentSlide.interaction} />
                )}
                {currentSlide.interaction.type === 'reveal' && (
                  <SlideRevealWidget interaction={currentSlide.interaction} />
                )}
                {currentSlide.interaction.type === 'code' && (
                  <SlideCodeWidget interaction={currentSlide.interaction} />
                )}
                {currentSlide.interaction.type === 'checklist' && (
                  <SlideChecklistWidget interaction={currentSlide.interaction} />
                )}
              </div>
            )}

            {/* Key Engineering Takeaways */}
            <div className="p-6 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                {isRtl ? 'خلاصة الدرس المعمارية' : 'Engineering Takeaways'}
              </span>
              <ul className="space-y-2 text-body-sm text-[var(--color-text-muted)]">
                {currentSlide.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0" />
                    <span>{getLocalizedText(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Floating Navigation Indicator */}
          <div className="max-w-4xl mx-auto w-full pt-8 flex items-center justify-between border-t border-[var(--color-border)] mt-8 text-xs font-mono text-[var(--color-text-subtle)]">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={activeSlideIndex <= 0}
                onClick={prevSlide}
                leftIcon={isRtl ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
              >
                {isRtl ? 'السابق' : 'Previous'}
              </Button>
              <span className="hidden sm:inline">({isRtl ? 'سهم يسار' : 'Arrow Left'})</span>
            </div>

            <span className="text-center font-bold text-[var(--color-text)]">
              {activeSlideIndex + 1} / {totalSlides}
            </span>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">({isRtl ? 'سهم يمين أو Space' : 'Arrow Right or Space'})</span>
              <Button
                variant="primary"
                size="sm"
                disabled={activeSlideIndex >= totalSlides - 1}
                onClick={nextSlide}
                rightIcon={isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              >
                {isRtl ? 'التالي' : 'Next'}
              </Button>
            </div>
          </div>
        </main>

        {/* 3. Speaker Notes Drawer (Only visible in Trainer Mode when toggled) */}
        {mode === 'trainer' && showTrainerNotes && (
          <aside className="w-80 lg:w-96 border-s border-[var(--color-border)] bg-[var(--color-surface)] p-6 overflow-y-auto space-y-6 shrink-0 text-start animate-in slide-in-from-end duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[var(--color-primary)]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                  {isRtl ? 'ملاحظات وتوجيهات الشرح' : 'Presenter Notes (Zoom)'}
                </h3>
              </div>
              <button
                type="button"
                onClick={toggleTrainerNotes}
                className="p-1 text-[var(--color-text-subtle)] hover:text-[var(--color-text)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-2">
                <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase">
                  {isRtl ? 'إرشادات الإلقاء والتفاعل' : 'Teaching Delivery Guidelines'}
                </span>
                <p className="text-body-sm text-[var(--color-text)] leading-relaxed">
                  {getLocalizedText(currentSlide.trainerNotes, language)}
                </p>
              </div>

              <div className="space-y-2 text-caption text-[var(--color-text-muted)]">
                <span className="font-mono font-bold uppercase block text-[var(--color-text-subtle)]">
                  {isRtl ? 'اختصارات لوحة المفاتيح' : 'Keyboard Shortcuts'}
                </span>
                <p>• {isRtl ? 'الأسهم (يمين/يسار) أو Space: للتنقل' : 'Arrow Left / Right or Space: Navigate'}</p>
                <p>• {isRtl ? 'Esc: لإنهاء وضع العرض' : 'Esc: Exit Presentation'}</p>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};
