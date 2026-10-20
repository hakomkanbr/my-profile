'use client';

import React, { useState } from 'react';
import { PresentationEngineSlide } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { PresentationTimer } from './PresentationTimer';
import {
  X,
  Target,
  FileText,
  MessageSquare,
  Sparkles,
  Terminal,
  Clock,
  ChevronRight,
  Copy,
  Check,
} from 'lucide-react';

interface TrainerNotesDrawerProps {
  currentSlide: PresentationEngineSlide;
  nextSlide?: PresentationEngineSlide;
  onClose: () => void;
}

export const TrainerNotesDrawer: React.FC<TrainerNotesDrawerProps> = ({
  currentSlide,
  nextSlide,
  onClose,
}) => {
  const { language } = usePreferencesStore();
  const { showTrainerNotes } = useTrainerStore();
  const isRtl = language === 'ar';
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  if (!showTrainerNotes) return null;

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const rawPrompt =
    currentSlide.type === 'ai' && 'data' in currentSlide.payload
      ? (() => {
          const d = currentSlide.payload.data as {
            role?: string;
            context?: string;
            task?: string;
            constraints?: string;
            input?: string;
            output?: string;
            acceptanceCriteria?: string[];
          };
          return [
            `Role: ${d.role || ''}`,
            `Context: ${d.context || ''}`,
            `Task: ${d.task || ''}`,
            `Constraints: ${d.constraints || ''}`,
            ...(d.input ? [`Input: ${d.input}`] : []),
            `Output: ${d.output || ''}`,
            ...(d.acceptanceCriteria?.length
              ? [`Acceptance criteria:\n${d.acceptanceCriteria.map((criterion, index) => `${index + 1}. ${criterion}`).join('\n')}`]
              : []),
          ].join('\n');
        })()
      : currentSlide.aiPromptHelper
        ? getLocalizedText(currentSlide.aiPromptHelper, language)
        : '';
  const speakerNotes = getLocalizedText(currentSlide.speakerNotes, language);
  const structuredNotes = speakerNotes.match(
    /^(?:نفّذ:|Cue:)\s*([\s\S]*?)\n(?:اسأل:|Ask:)\s*([\s\S]*?)\n(?:تحقق:|Check:)\s*([\s\S]*)$/
  );
  const cue = structuredNotes?.[1] || speakerNotes;
  const shortCue = cue.split(/(?<=[.!؟])\s+/u, 1)[0];

  return (
    <aside
      className={`fixed top-0 bottom-0 z-40 w-96 max-w-full bg-[var(--pres-surface)] border-[var(--pres-border)] shadow-2xl flex flex-col transition-all overflow-hidden ${
        isRtl
          ? 'left-0 border-r animate-in slide-in-from-left duration-200'
          : 'right-0 border-l animate-in slide-in-from-right duration-200'
      }`}
      aria-label={isRtl ? 'ملاحظات المدرب' : 'Trainer notes'}
    >
      {/* Drawer Header */}
      <div className="h-14 px-5 border-b border-[var(--pres-border)] bg-[var(--pres-surface-sunken)] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[var(--pres-primary)]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-text)]">
            {isRtl ? 'ملاحظات المدرب' : 'Trainer notes'}
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-md text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] hover:bg-[var(--pres-border)] transition-colors cursor-pointer"
          aria-label={isRtl ? 'إغلاق الملاحظات' : 'Close notes'}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Drawer Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-start">
        {/* Estimated Time Badge */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)] text-xs font-mono">
          <div className="flex items-center gap-1.5 text-[var(--pres-text-muted)]">
            <Clock className="w-3.5 h-3.5 text-[var(--pres-accent)]" />
            <span>{isRtl ? 'الوقت المخصص للشريحة:' : 'Target Slide Time:'}</span>
          </div>
          <span className="font-bold text-[var(--pres-primary)]">
            ~{currentSlide.estimatedMinutes} {isRtl ? 'دقيقة' : 'min'}
          </span>
        </div>

        {/* Embedded Interactive Timer */}
        <PresentationTimer />

        {/* 1. Teaching Goal */}
        <section className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--pres-primary)]">
            <Target className="w-3.5 h-3.5" />
            <span>{isRtl ? 'الهدف' : 'Aim'}</span>
          </div>
          <p className="text-sm font-medium leading-relaxed p-3 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)] text-[var(--pres-text)]">
            {getLocalizedText(currentSlide.teachingGoal, language)}
          </p>
        </section>

        {/* 2. Speaker Delivery Notes */}
        <section className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--pres-accent)]">
            <FileText className="w-3.5 h-3.5" />
            <span>{isRtl ? 'قل / نفّذ' : 'Say / do'}</span>
          </div>
          <div className="space-y-3 p-3.5 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)] text-[var(--pres-text-muted)]">
            <p className="text-sm leading-relaxed">{shortCue}</p>
            {structuredNotes && (
              <>
                <div className="border-s-2 border-[var(--pres-primary)] ps-3">
                  <span className="block text-xs font-bold text-[var(--pres-primary)]">{isRtl ? 'اسأل' : 'Ask'}</span>
                  <p className="text-sm leading-relaxed">{structuredNotes[2]}</p>
                </div>
                <div className="border-s-2 border-[var(--pres-accent)] ps-3">
                  <span className="block text-xs font-bold text-[var(--pres-accent)]">{isRtl ? 'تحقق من' : 'Check for'}</span>
                  <p className="text-sm leading-relaxed">{structuredNotes[3]}</p>
                </div>
                {cue !== shortCue && (
                  <details className="text-xs">
                    <summary className="cursor-pointer font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pres-primary)]">
                      {isRtl ? 'تفاصيل توجيه المدرب' : 'Full trainer cue'}
                    </summary>
                    <p className="mt-2 whitespace-pre-line leading-relaxed">{cue}</p>
                  </details>
                )}
              </>
            )}
          </div>
        </section>

        {/* 3. Expected Student Response (if any) */}
        {currentSlide.expectedResponse && (
          <section className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--pres-primary)]">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{isRtl ? 'تحقق من فهم الطلاب' : 'Listen for'}</span>
            </div>
            <p className="text-xs leading-relaxed p-3 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)] text-[var(--pres-text-muted)]">
              {getLocalizedText(currentSlide.expectedResponse, language)}
            </p>
          </section>
        )}

        {/* 4. Live Demo Instructions (if any) */}
        {currentSlide.demoInstructions && (
          <section className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--pres-accent)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>{isRtl ? 'خطوات التطبيق الحي' : 'Live Demo Protocol'}</span>
            </div>
            <p className="text-xs leading-relaxed p-3 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)] text-[var(--pres-text-muted)]">
              {getLocalizedText(currentSlide.demoInstructions, language)}
            </p>
          </section>
        )}

        {/* 5. AI Prompt to Copy */}
        {rawPrompt && (
          <section className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold uppercase text-[var(--pres-primary)]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isRtl ? 'أمر الذكاء الاصطناعي الجاهز' : 'Ready AI Prompt'}</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopyPrompt(rawPrompt)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-[var(--pres-surface-sunken)] hover:bg-[var(--pres-border)] text-[var(--pres-text)] cursor-pointer"
              >
                {copiedPrompt ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPrompt ? (isRtl ? 'تم النسخ' : 'Copied') : (isRtl ? 'نسخ' : 'Copy')}</span>
              </button>
            </div>
            <pre className="p-3 rounded-lg bg-[var(--pres-code-bg)] text-[var(--pres-text)] text-xs font-mono whitespace-pre-wrap border border-[var(--pres-code-border)] max-h-48 overflow-y-auto">
              {rawPrompt}
            </pre>
          </section>
        )}

        {/* 6. Next Slide Preview */}
        {nextSlide && (
          <section className="space-y-2 pt-2 border-t border-[var(--pres-border)]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--pres-text-subtle)] block">
                  {isRtl ? 'الشريحة التالية:' : 'Next Slide Preview:'}
            </span>
            <div className="p-3 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)] flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="text-[10px] font-mono text-[var(--pres-accent)] uppercase block">
                  {isRtl ? `الشريحة ${nextSlide.slideNumber}` : `Slide ${nextSlide.slideNumber}`} • {nextSlide.type}
                </span>
                <p className="text-xs font-bold text-[var(--pres-text)] truncate">
                  {getLocalizedText(nextSlide.title, language)}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--pres-text-subtle)] shrink-0" />
            </div>
          </section>
        )}
      </div>
    </aside>
  );
};
