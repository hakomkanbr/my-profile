'use client';

import React, { useState } from 'react';
import { usePreferencesStore, useProgressStore } from '@/store';
import { Button } from '@/components/ui';
import { Download, Upload, RotateCcw, Sparkles, Check, AlertCircle } from 'lucide-react';

export const ProgressControlsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const {
    resetProgress,
    exportProgressJson,
    importProgressJson,
    enableDemoMode,
  } = useProgressStore();


  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const isRtl = language === 'ar';

  const handleExport = async () => {
    try {
      const json = await exportProgressJson();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `web-creator-ai-progress-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setMessage({
        type: 'success',
        text: isRtl ? 'تم تصدير ملف التقدم بنجاح.' : 'Progress exported successfully.',
      });
    } catch {
      setMessage({
        type: 'error',
        text: isRtl ? 'حدث خطأ أثناء التصدير.' : 'Failed to export progress.',
      });
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target?.result as string;
      const success = await importProgressJson(content);
      if (success) {
        setMessage({
          type: 'success',
          text: isRtl ? 'تم استيراد بيانات التقدم بنجاح!' : 'Progress imported successfully!',
        });
      } else {
        setMessage({
          type: 'error',
          text: isRtl ? 'ملف غير صالح، يرجى التأكد من الصيغة.' : 'Invalid JSON file format.',
        });
      }
    };
    reader.readAsText(file);
  };

  const handleReset = async () => {
    if (confirm(isRtl ? 'هل تريد حقاً إعادة ضبط التقدم والبدء من الصفر؟' : 'Are you sure you want to reset all progress?')) {
      await resetProgress();
      setMessage({
        type: 'success',
        text: isRtl ? 'تمت إعادة ضبط التقدم.' : 'Progress has been reset.',
      });
    }
  };

  const handleDemo = async () => {
    await enableDemoMode();
    setMessage({
      type: 'success',
      text: isRtl ? 'تم تفعيل وضع البيانات التجريبية (Demo Mode).' : 'Demo progress loaded.',
    });
  };

  return (
    <section className="py-12 sm:py-16 text-start">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-6">
          <div className="space-y-1">
            <h3 className="text-h3 font-bold text-[var(--color-text)]">
              {isRtl ? 'إدارة وحفظ سجل التعلم' : 'Data & Offline Backup'}
            </h3>
            <p className="text-body-sm text-[var(--color-text-muted)]">
              {isRtl
                ? 'بياناتك محفوظة محلياً في متصفحك. يمكنك تصدير نسختك الاحتياطية أو استعادتها في أي وقت.'
                : 'Your journey is stored offline-first. Export your progress as JSON or restore on another device.'}
            </p>
          </div>

          {message && (
            <div
              className={`p-3 rounded-xl flex items-center gap-2 text-xs font-semibold ${
                message.type === 'success'
                  ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)]'
                  : 'bg-red-500/10 text-red-600'
              }`}
            >
              {message.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{message.text}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              leftIcon={<Download className="w-4 h-4" />}
            >
              {isRtl ? 'تصدير التقدم (Backup JSON)' : 'Export Progress'}
            </Button>

            <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border border-[var(--color-border)] bg-[var(--color-surface-sunken)] hover:bg-[var(--color-border-subtle)] text-[var(--color-text)] cursor-pointer transition-colors">
              <Upload className="w-4 h-4 text-[var(--color-secondary)]" />
              <span>{isRtl ? 'استيراد تقدم محفوظ' : 'Import Progress'}</span>
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleDemo}
              leftIcon={<Sparkles className="w-4 h-4 text-[var(--color-secondary)]" />}
            >
              {isRtl ? 'تجربة وضع العرض (Demo Data)' : 'Load Demo Data'}
            </Button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[var(--color-text-subtle)] hover:text-red-500 transition-colors cursor-pointer ms-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isRtl ? 'إعادة الضبط من الصفر' : 'Reset from Scratch'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
