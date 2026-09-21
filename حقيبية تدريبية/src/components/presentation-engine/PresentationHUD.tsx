'use client';

import React from 'react';
import Link from 'next/link';
import { PresentationEngineSlide } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { PresentationTimer } from './PresentationTimer';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Sun,
  Moon,
  Eye,
} from 'lucide-react';

interface PresentationHUDProps {
  sessionNumber: number;
  totalSessions?: number;
  currentSlide: PresentationEngineSlide;
  totalSlides: number;
  activeSlideIndex: number;
  exitHref?: string;
  visible: boolean;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

export const PresentationHUD: React.FC<PresentationHUDProps> = ({
  sessionNumber,
  totalSessions = 12,
  currentSlide,
  totalSlides,
  activeSlideIndex,
  exitHref = '/trainer/presentation',
  visible,
  onNext,
  onPrev,
  onToggleFullscreen,
  isFullscreen,
}) => {
  const { language } = usePreferencesStore();
  const {
    viewMode,
    toggleViewMode,
    presentationTheme,
    togglePresentationTheme,
    showTrainerNotes,
    toggleTrainerNotes,
  } = useTrainerStore();

  const isRtl = language === 'ar';

  return (
    <>
      {/* Top Floating Header HUD */}
      <header
        className={`fixed top-0 inset-x-0 z-30 h-14 px-4 sm:px-6 bg-[var(--pres-surface)]/95 backdrop-blur-md border-b border-[var(--pres-border)] flex items-center justify-between transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Left: Exit Link & Session Number */}
        <div className="flex items-center gap-3">
          <Link
            href={exitHref}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>{isRtl ? 'خروج (Esc)' : 'Exit (Esc)'}</span>
          </Link>

          <span className="px-2.5 py-0.5 rounded-md bg-[var(--pres-primary)] text-white text-xs font-mono font-bold tracking-wider">
            SESSION {String(sessionNumber).padStart(2, '0')} / {totalSessions}
          </span>

          <span className="hidden md:inline-block text-xs font-mono text-[var(--pres-text-subtle)] truncate max-w-xs">
            {getLocalizedText(currentSlide.title, language)}
          </span>
        </div>

        {/* Center: Slide Index Navigator */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={activeSlideIndex <= 0}
            className="p-1.5 rounded-md hover:bg-[var(--pres-surface-sunken)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] disabled:opacity-30 cursor-pointer"
            aria-label={isRtl ? 'الشريحة السابقة' : 'Previous Slide'}
          >
            {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text)] tabular-nums">
            {activeSlideIndex + 1} / {totalSlides}
          </span>

          <button
            type="button"
            onClick={onNext}
            disabled={activeSlideIndex >= totalSlides - 1}
            className="p-1.5 rounded-md hover:bg-[var(--pres-surface-sunken)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] disabled:opacity-30 cursor-pointer"
            aria-label={isRtl ? 'الشريحة التالية' : 'Next Slide'}
          >
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Right Controls: Timer + View Mode + Notes + Theme + Fullscreen */}
        <div className="flex items-center gap-2">
          {/* Zoom Timer */}
          <PresentationTimer compact />

          {/* View Mode Toggle (Trainer vs Student) */}
          <button
            type="button"
            onClick={toggleViewMode}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold transition-all border cursor-pointer ${
              viewMode === 'trainer'
                ? 'bg-[var(--pres-primary)] text-white border-[var(--pres-primary)]'
                : 'bg-[var(--pres-surface-sunken)] text-[var(--pres-text-muted)] border-[var(--pres-border)] hover:text-[var(--pres-text)]'
            }`}
            title="Toggle Trainer / Student Mode"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {viewMode === 'trainer' ? (isRtl ? 'المدرب' : 'Trainer') : (isRtl ? 'الطالب' : 'Student')}
            </span>
          </button>

          {/* Speaker Notes Toggle (only in Trainer Mode) */}
          {viewMode === 'trainer' && (
            <button
              type="button"
              onClick={toggleTrainerNotes}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold transition-all border cursor-pointer ${
                showTrainerNotes
                  ? 'bg-[var(--pres-primary)] text-white border-[var(--pres-primary)]'
                  : 'bg-[var(--pres-surface-sunken)] text-[var(--pres-text-muted)] border-[var(--pres-border)] hover:text-[var(--pres-text)]'
              }`}
              title="Speaker Notes (N)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isRtl ? 'الملاحظات (N)' : 'Notes (N)'}</span>
            </button>
          )}

          {/* Theme Toggle (Cream vs Espresso) */}
          <button
            type="button"
            onClick={togglePresentationTheme}
            className="p-1.5 rounded-md bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors cursor-pointer"
            title="Toggle Light/Dark Theme"
            aria-label="Toggle Theme"
          >
            {presentationTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--pres-primary)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--pres-secondary)]" />
            )}
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-md bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
            aria-label="Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Bottom Subtle Navigation Bar HUD */}
      <footer
        className={`fixed bottom-0 inset-x-0 z-30 h-12 px-6 bg-[var(--pres-surface)]/90 backdrop-blur-md border-t border-[var(--pres-border)] flex items-center justify-between text-xs font-mono text-[var(--pres-text-subtle)] transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={activeSlideIndex <= 0}
            className="inline-flex items-center gap-1 text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] disabled:opacity-30 cursor-pointer"
          >
            {isRtl ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
            <span>{isRtl ? 'السابق' : 'Previous'}</span>
          </button>
          <span className="hidden sm:inline">({isRtl ? 'سهم يسار' : 'Arrow Left'})</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[var(--pres-accent)] font-bold">Space: {isRtl ? 'كشف / التالي' : 'Reveal / Next'}</span>
          <span>•</span>
          <span>{activeSlideIndex + 1} / {totalSlides}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">({isRtl ? 'سهم يمين' : 'Arrow Right'})</span>
          <button
            type="button"
            onClick={onNext}
            disabled={activeSlideIndex >= totalSlides - 1}
            className="inline-flex items-center gap-1 text-[var(--pres-primary)] font-bold hover:opacity-90 disabled:opacity-30 cursor-pointer"
          >
            <span>{isRtl ? 'التالي' : 'Next'}</span>
            {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
        </div>
      </footer>
    </>
  );
};
