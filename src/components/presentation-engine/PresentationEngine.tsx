'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { PresentationSession } from '@/types';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { PresentationHUD } from './PresentationHUD';
import { TrainerNotesDrawer } from './TrainerNotesDrawer';
import { SessionStartModal } from './SessionStartModal';
import { SessionEndModal } from './SessionEndModal';
import { TitleSlide } from './slides/TitleSlide';
import { ContextSlide } from './slides/ContextSlide';
import { QuestionSlide } from './slides/QuestionSlide';
import { ThinkSlide } from './slides/ThinkSlide';
import { RevealSlide } from './slides/RevealSlide';
import { ConceptSlide } from './slides/ConceptSlide';
import { VisualSlide } from './slides/VisualSlide';
import { CodeSlide } from './slides/CodeSlide';
import { DemoSlide } from './slides/DemoSlide';
import { ComparisonSlide } from './slides/ComparisonSlide';
import { AIPromptSlide } from './slides/AIPromptSlide';
import { ChallengeSlide } from './slides/ChallengeSlide';
import { ProjectSlide } from './slides/ProjectSlide';
import { TakeawaySlide } from './slides/TakeawaySlide';
import { NextSlide } from './slides/NextSlide';

export interface PresentationEngineProps {
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
  const { language, theme } = usePreferencesStore();
  const {
    activeSlideIndex,
    setActiveSlideIndex,
    revealedStepIndex,
    setRevealedStepIndex,
    viewMode,
    showTrainerNotes,
    toggleTrainerNotes,
    isFullscreen,
    toggleFullscreen,
    isTimerRunning,
    startTimer,
    pauseTimer,
    tickTimer,
  } = useTrainerStore();

  const isRtl = language === 'ar';
  const slides = session.slides;
  const totalSlides = slides.length;

  const [showStartModal, setShowStartModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  useEffect(() => {
    const validIdx =
      initialSlideIndex >= 0 && initialSlideIndex < slides.length
        ? initialSlideIndex
        : 0;
    setActiveSlideIndex(validIdx);
    setRevealedStepIndex(0);
  }, [
    session.id,
    initialSlideIndex,
    slides.length,
    setActiveSlideIndex,
    setRevealedStepIndex,
  ]);

  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => {
      tickTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, tickTimer]);

  useEffect(() => {
    const handleFsChange = () => {
      const fsActive = Boolean(document.fullscreenElement);
      if (fsActive !== isFullscreen) {
        toggleFullscreen();
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, [isFullscreen, toggleFullscreen]);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  const currentSlide = slides[activeSlideIndex] || slides[0];

  const handleAdvance = useCallback(() => {
    if (showStartModal) {
      setShowStartModal(false);
      return;
    }
    if (showEndModal) return;

    if (activeSlideIndex < totalSlides - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    } else {
      setShowEndModal(true);
    }
  }, [
    showStartModal,
    showEndModal,
    activeSlideIndex,
    totalSlides,
    setActiveSlideIndex,
  ]);

  const handlePrevious = useCallback(() => {
    if (showEndModal) {
      setShowEndModal(false);
      return;
    }
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  }, [showEndModal, activeSlideIndex, setActiveSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (['input', 'textarea', 'select'].includes(targetTag)) return;

      if (e.key === ' ') {
        if (targetTag === 'button') return;
        e.preventDefault();
        handleAdvance();
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        if (isRtl) handlePrevious();
        else handleAdvance();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (isRtl) handleAdvance();
        else handlePrevious();
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
        const demoIdx = slides.findIndex((s) => s.type === 'demo');
        if (demoIdx >= 0) setActiveSlideIndex(demoIdx);
      } else if (e.key === 'c' || e.key === 'C') {
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

  const renderSlideContent = () => {
    if (!currentSlide) return null;

    const { type, title, subtitle, payload, realWorldExample } = currentSlide;

    switch (type) {
      case 'title':
        return payload.type === 'title' ? (
          <TitleSlide
            payload={payload.data}
            realWorldExample={realWorldExample}
          />
        ) : null;
      case 'context':
        return payload.type === 'context' ? (
          <ContextSlide
            title={title}
            subtitle={subtitle}
            payload={payload.data}
            realWorldExample={realWorldExample}
          />
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
          <ConceptSlide
            title={title}
            payload={payload.data}
            realWorldExample={realWorldExample}
          />
        ) : null;
      case 'visual':
        return payload.type === 'visual' ? (
          <VisualSlide
            title={title}
            subtitle={subtitle}
            payload={payload.data}
          />
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
          <ComparisonSlide
            title={title}
            subtitle={subtitle}
            payload={payload.data}
          />
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
      data-pres-theme={theme}
      className="fixed inset-0 z-50 bg-[var(--pres-bg)] text-[var(--pres-text)] flex flex-col overflow-hidden transition-colors duration-200"
    >
      <PresentationHUD
        sessionNumber={session.number}
        totalSessions={12}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        activeSlideIndex={activeSlideIndex}
        exitHref={exitHref}
        visible={true}
        onNext={handleAdvance}
        onPrev={handlePrevious}
        onToggleFullscreen={handleToggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Main Slide Canvas */}
      <main
        key={`${session.id}-${activeSlideIndex}-${revealedStepIndex}`}
        className="flex-1 w-full h-full pt-14 pb-12 overflow-hidden flex items-center justify-center relative"
      >
        <div className="w-full h-full max-w-[1440px] mx-auto flex flex-col justify-center">
          {renderSlideContent()}
        </div>
      </main>

      <TrainerNotesDrawer
        currentSlide={currentSlide}
        nextSlide={slides[activeSlideIndex + 1]}
        onClose={toggleTrainerNotes}
      />

      {showStartModal && (
        <SessionStartModal
          session={session}
          onStart={() => {
            setShowStartModal(false);
            if (!isTimerRunning) startTimer();
          }}
        />
      )}

      {showEndModal && (
        <SessionEndModal
          session={session}
          nextSessionUrl={nextSessionUrl}
          onRestart={() => {
            setShowEndModal(false);
            setActiveSlideIndex(0);
            setRevealedStepIndex(0);
          }}
        />
      )}
    </div>
  );
};
