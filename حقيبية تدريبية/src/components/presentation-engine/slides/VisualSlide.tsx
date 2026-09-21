'use client';

import React from 'react';
import { VisualSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { GitCommit, ArrowRight, ArrowLeft } from 'lucide-react';

interface VisualSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: VisualSlidePayload;
}

export const VisualSlide: React.FC<VisualSlideProps> = ({ title, subtitle, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="space-y-1 border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <GitCommit className="w-4 h-4" />
          <span>{isRtl ? 'المعمارية ومسار العمل' : 'Architecture & Pipeline Flow'}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[var(--pres-text)] tracking-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-[var(--pres-secondary)] font-medium">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* Main Diagram Area */}
      <div className="my-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 items-stretch">
          {payload.nodes.map((node, idx) => {
            const isLast = idx === payload.nodes.length - 1;
            return (
              <React.Fragment key={node.id || idx}>
                <div className="flex-1 p-4 rounded-2xl bg-[var(--pres-surface)] border-2 border-[var(--pres-border)] flex flex-col justify-between space-y-2 relative shadow-xs hover:border-[var(--pres-primary)] transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-[var(--pres-primary)]/10 text-[var(--pres-primary)] text-xs font-mono font-bold flex items-center justify-center">
                      {node.stepNumber || String(idx + 1).padStart(2, '0')}
                    </span>
                    {node.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--pres-surface-sunken)] text-[var(--pres-accent)] font-bold">
                        {node.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 py-2">
                    <h3 className="text-sm font-bold text-[var(--pres-text)] leading-snug">
                      {getLocalizedText(node.title, language)}
                    </h3>
                    {node.description && (
                      <p className="text-[11px] text-[var(--pres-text-muted)] leading-relaxed">
                        {getLocalizedText(node.description, language)}
                      </p>
                    )}
                  </div>

                  <div className="h-1 w-full bg-[var(--pres-border-subtle)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--pres-primary)]"
                      style={{ width: `${((idx + 1) / payload.nodes.length) * 100}%` }}
                    />
                  </div>
                </div>

                {!isLast && (
                  <div className="hidden lg:flex items-center justify-center text-[var(--pres-border)] shrink-0 self-center">
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Caption */}
        <p className="text-center text-xs font-mono text-[var(--pres-text-subtle)] pt-6">
          {getLocalizedText(payload.caption, language)}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'المعمارية الشفافة تقلل الأخطاء' : 'Transparent Architecture Reduces Bugs'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
