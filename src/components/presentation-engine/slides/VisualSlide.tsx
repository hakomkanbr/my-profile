'use client';

import React from 'react';
import { VisualSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface VisualSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: VisualSlidePayload;
}

export const VisualSlide: React.FC<VisualSlideProps> = ({
  title,
  subtitle,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Header */}
      <div className="space-y-1.5 border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)] block">
          {isRtl ? 'مخطط توضيحي' : 'Diagram'}
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--pres-text)] tracking-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-[var(--pres-text-muted)]">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* Clean Minimal Flowchart / Infographic */}
      <div className="my-auto py-8 space-y-6 max-w-6xl">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            payload.nodes.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          } gap-5 items-stretch`}
        >
          {payload.nodes.map((node, idx) => (
            <div
              key={node.id}
              className="relative flex flex-col justify-between p-6 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-2.5">
                  <span className="font-mono text-sm font-bold text-[var(--pres-primary)]">
                    {node.stepNumber || `0${idx + 1}`}
                  </span>
                  {node.badge && (
                    <span className="text-xs font-mono text-[var(--pres-text-muted)]">
                      {node.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--pres-text)] leading-snug">
                  {getLocalizedText(node.title, language)}
                </h3>

                {node.description && (
                  <p className="text-sm sm:text-base text-[var(--pres-text-muted)] leading-relaxed">
                    {getLocalizedText(node.description, language)}
                  </p>
                )}
              </div>

              {idx < payload.nodes.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -end-3.5 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[var(--pres-bg)] border border-[var(--pres-border)] items-center justify-center text-[var(--pres-text-muted)]">
                  <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="border-s-4 border-[var(--pres-primary)] ps-4 py-1">
          <p className="text-sm sm:text-base font-medium text-[var(--pres-text)]">
            {getLocalizedText(payload.caption, language)}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs sm:text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{getLocalizedText(title, language)}</span>
        <span>{isRtl ? 'التالي ←' : 'Next →'}</span>
      </div>
    </div>
  );
};
