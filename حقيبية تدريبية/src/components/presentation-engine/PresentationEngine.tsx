'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { PresentationSession, PresentationEngineSlide } from '@/types';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { PresentationHUD } from './PresentationHUD';
import { TrainerNotesDrawer } from './TrainerNotesDrawer';
import { SessionStartModal } from './SessionStartModal';
import { SessionEndModal } from './SessionEndModal';
import {
  TitleSlide,
  ContextSlide,
  QuestionSlide,
  ThinkSlide,
  RevealSlide,
  ConceptSlide,
  VisualSlide,
  CodeSlide,
  DemoSlide,
  ComparisonSlide,
  AIPromptSlide,
  ChallengeSlide,
  ProjectSlide,
  TakeawaySlide,
  NextSlide,
} from './slides';

interface PresentationEngineProps {
  session: PresentationSession;
  initialSlideIndex?: number;
  exitHref?: string;
  nextSessionUrl?: string;
}

export const PresentationEngine: React.FC<PresentationEngineProps> = ({
  session,
  initialSlideIndex = 0,
  exitHref = '/trainer/presentation',
  nextSessionUrl,
}) => {
  const { language } = usePreferencesStore();
  const {
    activeSlideIndex,
    setActiveSlideIndex,
    nextSlide,
    prevSlide,
    revealedStepIndex,
    incrementRevealedStep,
    viewMode,
    presentationTheme,
    showTrainerNotes,
    toggleTrainerNotes,
    isTimerRunning,
    startTimer,
    pauseTimer,
    tickTimer,
  } = useTrainerStore();

  const isRtl = language === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);

  const [hasStarted, setHasStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hudVisible, setHudVisible] = useState(true);
  const hudTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = useMemo(() => session.slides || [], [session.slides]);
  const totalSlides = slides.length;
  const currentSlide: PresentationEngineSlide = slides[activeSlideIndex] || slides[0];
  const nextSlideData: PresentationEngineSlide | undefined = slides[activeSlideIndex + 1];

  // Set initial slide index on mount
  useEffect(() => {
    if (initialSlideIndex >= 0 && initialSlideIndex < slides.length) {
      setActiveSlideIndex(initialSlideIndex);
    }
  }, [initialSlideIndex, setActiveSlideIndex, slides.length]);

  // Global Presentation Timer tick
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        tickTimer();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, tickTimer]);

  // Auto-hide HUD on idle mouse movement
  const resetHudTimer = useCallback(() => {
    setHudVisible(true);
    if (hudTimeoutRef.current) clearTimeout(hudTimeoutRef.current);
    hudTimeoutRef.current = setTimeout(() => {
      setHudVisible(false);
    }, 3500);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', resetHudTimer);
    return () => {
      window.removeEventListener('mousemove', resetHudTimer);
      if (hudTimeoutRef.current) clearTimeout(hudTimeoutRef.current);
    };
  }, [resetHudTimer]);

  // Fullscreen toggle handler
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Step or Advance logic for Space bar
  const handleAdvance = useCallback(() => {
    if (!hasStarted) {
      setHasStarted(true);
      return;
    }

    // If on a reveal slide and steps remain to reveal
    if (currentSlide?.type === 'reveal' && 'data' in currentSlide.payload) {
      const data = currentSlide.payload.data as { steps?: unknown[] };
      const revealSteps = data.steps || [];
      if (revealedStepIndex < revealSteps.length) {
        incrementRevealedStep();
        return;
      }
    }

    // If at the very last slide, show completion modal
    if (activeSlideIndex >= totalSlides - 1) {
      setIsCompleted(true);
      return;
    }

    nextSlide();
  }, [
    hasStarted,
    currentSlide,
    revealedStepIndex,
    incrementRevealedStep,
    activeSlideIndex,
    totalSlides,
    nextSlide,
  ]);

  const handlePrevious = useCallback(() => {
    if (activeSlideIndex > 0) {
      prevSlide();
    }
  }, [activeSlideIndex, prevSlide]);

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept form controls
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      if (e.key === ' ' || e.key === 'Spacebar') {
        if ((e.target as HTMLElement)?.tagName?.toLowerCase() === 'button') return;
        e.preventDefault();
        handleAdvance();
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        if (isRtl) {
          handlePrevious();
        } else {
          handleAdvance();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (isRtl) {
          handleAdvance();
        } else {
          handlePrevious();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        if (isTimerRunning) pauseTimer();
        else startTimer();
      } else if (e.key === 'n' || e.key === 'N') {
        if (viewMode === 'trainer') {
          e.preventDefault();
          toggleTrainerNotes();
        }
      } else if (e.key === 'd' || e.key === 'D') {
        // Jump to first demo slide
        const demoIdx = slides.findIndex((s) => s.type === 'demo');
        if (demoIdx >= 0) setActiveSlideIndex(demoIdx);
      } else if (e.key === 'c' || e.key === 'C') {
        // Jump to first challenge slide
        const chalIdx = slides.findIndex((s) => s.type === 'challenge');
        if (chalIdx >= 0) setActiveSlideIndex(chalIdx);
      } else if (e.key === 'Escape') {
        if (showTrainerNotes) {
          toggleTrainerNotes();
        } else if (isFullscreen) {
          document.exitFullscreen?.().catch(() => {});
        } else {
          window.location.href = exitHref;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isRtl,
    handleAdvance,
    handlePrevious,
    handleToggleFullscreen,
    isTimerRunning,
    startTimer,
    pauseTimer,
    viewMode,
    toggleTrainerNotes,
    slides,
    setActiveSlideIndex,
    showTrainerNotes,
    isFullscreen,
    exitHref,
  ]);

  // Render specific slide by type
  const renderSlideContent = () => {
    if (!currentSlide) return null;

    const { type, title, subtitle, payload } = currentSlide;

    switch (type) {
      case 'title':
        return payload.type === 'title' ? <TitleSlide payload={payload.data} /> : null;
      case 'context':
        return payload.type === 'context' ? (
          <ContextSlide title={title} subtitle={subtitle} payload={payload.data} />
        ) : null;
      case 'question':
        return payload.type === 'question' ? (
          <QuestionSlide title={title} payload={payload.data} />
        ) : null;
      case 'think':
        return payload.type === 'think' ? (
          <ThinkSlide title={title} payload={payload.data} />
        ) : null;
      case 'reveal':
        return payload.type === 'reveal' ? (
          <RevealSlide title={title} payload={payload.data} />
        ) : null;
      case 'concept':
        return payload.type === 'concept' ? (
          <ConceptSlide title={title} payload={payload.data} />
        ) : null;
      case 'visual':
        return payload.type === 'visual' ? (
          <VisualSlide title={title} subtitle={subtitle} payload={payload.data} />
        ) : null;
      case 'code':
        return payload.type === 'code' ? (
          <CodeSlide title={title} payload={payload.data} />
        ) : null;
      case 'demo':
        return payload.type === 'demo' ? (
          <DemoSlide title={title} payload={payload.data} />
        ) : null;
      case 'comparison':
        return payload.type === 'comparison' ? (
          <ComparisonSlide title={title} subtitle={subtitle} payload={payload.data} />
        ) : null;
      case 'ai':
        return payload.type === 'ai' ? (
          <AIPromptSlide title={title} subtitle={subtitle} payload={payload.data} />
        ) : null;
      case 'challenge':
        return payload.type === 'challenge' ? (
          <ChallengeSlide title={title} payload={payload.data} />
        ) : null;
      case 'project':
        return payload.type === 'project' ? (
          <ProjectSlide title={title} payload={payload.data} />
        ) : null;
      case 'takeaway':
        return payload.type === 'takeaway' ? (
          <TakeawaySlide title={title} payload={payload.data} />
        ) : null;
      case 'next':
        return payload.type === 'next' ? (
          <NextSlide title={title} payload={payload.data} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      data-pres-theme={presentationTheme}
      className="fixed inset-0 z-50 bg-[var(--pres-bg)] text-[var(--pres-text)] flex flex-col select-none overflow-hidden transition-colors duration-300 font-sans"
    >
      {/* 1. Pre-Session Start Briefing Modal */}
      {!hasStarted && (
        <SessionStartModal session={session} onStart={() => setHasStarted(true)} />
      )}

      {/* 2. Minimal, Auto-Hiding Presentation HUD */}
      <PresentationHUD
        sessionNumber={session.number}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        activeSlideIndex={activeSlideIndex}
        exitHref={exitHref}
        visible={hudVisible}
        onNext={handleAdvance}
        onPrev={handlePrevious}
        onToggleFullscreen={handleToggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* 3. Main Slide Canvas */}
      <main className="flex-1 w-full h-full overflow-hidden flex items-center justify-center relative">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center">
          {renderSlideContent()}
        </div>
      </main>

      {/* 4. Trainer Speaker Notes Drawer (Only active when triggered in Trainer Mode) */}
      {viewMode === 'trainer' && (
        <TrainerNotesDrawer
          currentSlide={currentSlide}
          nextSlide={nextSlideData}
          onClose={toggleTrainerNotes}
        />
      )}

      {/* 5. Session Complete End Modal */}
      {isCompleted && (
        <SessionEndModal
          session={session}
          onRestart={() => {
            setIsCompleted(false);
            setActiveSlideIndex(0);
          }}
          nextSessionUrl={nextSessionUrl}
        />
      )}
    </div>
  );
};
