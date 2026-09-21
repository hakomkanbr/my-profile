'use client';

import React, { useState } from 'react';
import { CodeSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Code2, Copy, Check } from 'lucide-react';

interface CodeSlideProps {
  title: LocalizedString;
  payload: CodeSlidePayload;
}

export const CodeSlide: React.FC<CodeSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'main' | 'before' | 'after'>('main');

  const currentSnippet =
    activeTab === 'before'
      ? payload.beforeSnippet || payload.codeSnippet
      : activeTab === 'after'
        ? payload.afterSnippet || payload.codeSnippet
        : payload.codeSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <Code2 className="w-4 h-4" />
          <span>{isRtl ? 'الكود كأثر بصري وتركيب هندسي' : 'Code as Visual Artifact'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Grid: Code Left / WHAT-WHY-WHEN Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-6 items-stretch">
        {/* Code Visual Artifact (7 cols) */}
        <div className="lg:col-span-7 flex flex-col rounded-2xl bg-[var(--pres-code-bg)] border-2 border-[var(--pres-code-border)] shadow-xl overflow-hidden text-left" dir="ltr">
          {/* Code Window Header */}
          <div className="h-10 px-4 bg-black/30 border-b border-[var(--pres-code-border)] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-neutral-400 font-bold ml-2">
                {payload.language}
              </span>
            </div>

            {/* Before / After / Main Tab Switcher if present */}
            <div className="flex items-center gap-1">
              {payload.beforeSnippet && (
                <button
                  type="button"
                  onClick={() => setActiveTab('before')}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold cursor-pointer transition-colors ${
                    activeTab === 'before'
                      ? 'bg-[var(--pres-primary)] text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  BEFORE
                </button>
              )}
              {payload.afterSnippet && (
                <button
                  type="button"
                  onClick={() => setActiveTab('after')}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold cursor-pointer transition-colors ${
                    activeTab === 'after'
                      ? 'bg-emerald-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  AFTER
                </button>
              )}
              <button
                type="button"
                onClick={handleCopy}
                className="p-1 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer ml-1"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Code Snippet Box */}
          <pre className="p-6 font-mono text-sm sm:text-base text-neutral-200 overflow-x-auto leading-relaxed whitespace-pre font-normal flex-1">
            <code>{currentSnippet}</code>
          </pre>
        </div>

        {/* WHAT? WHY? WHEN? Triad (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 text-start">
          {/* WHAT */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--pres-surface)] border border-[var(--pres-border)] space-y-1.5 shadow-xs">
            <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[var(--pres-primary)] block">
              WHAT? • {isRtl ? 'ما الذي يفعله هذا الكود؟' : 'What is this doing?'}
            </span>
            <p className="text-xs sm:text-sm text-[var(--pres-text)] font-medium leading-relaxed">
              {getLocalizedText(payload.what, language)}
            </p>
          </div>

          {/* WHY */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--pres-surface)] border border-[var(--pres-border)] space-y-1.5 shadow-xs">
            <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[var(--pres-secondary)] block">
              WHY? • {isRtl ? 'لماذا كتبناه بهذه المعمارية؟' : 'Why this architecture?'}
            </span>
            <p className="text-xs sm:text-sm text-[var(--pres-text-muted)] font-normal leading-relaxed">
              {getLocalizedText(payload.why, language)}
            </p>
          </div>

          {/* WHEN */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] space-y-1.5 shadow-xs">
            <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[var(--pres-accent)] block">
              WHEN? • {isRtl ? 'متى نطبقه في المشروع الحقيقي؟' : 'When to use this in production?'}
            </span>
            <p className="text-xs sm:text-sm text-[var(--pres-text-muted)] font-normal leading-relaxed">
              {getLocalizedText(payload.when, language)}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'كود نظيف = صيانة سهلة وسريعة' : 'Clean Code = Predictable Maintenance'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
