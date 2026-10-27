'use client';

import React, { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  MessageCircle,
  X,
} from 'lucide-react';
import { AppLanguage } from '@/types';
import {
  WHATSAPP_CONFIG,
  buildWhatsAppUrl,
  downloadTextFile,
} from '@/lib/whatsapp';

export interface WhatsAppActionFeedbackProps {
  message: string;
  isRtl?: boolean;
  language?: AppLanguage;
  onClose?: () => void;
  title?: string;
  description?: string;
  isLongAnswer?: boolean;
  fullTextToDownload?: string;
  fullAnswerText?: string;
  downloadFileName?: string;
  downloadedFileName?: string;
  savedLocallyNote?: string;
}

export const WhatsAppActionFeedback: React.FC<WhatsAppActionFeedbackProps> = ({
  message,
  isRtl,
  language,
  onClose,
  title,
  description,
  isLongAnswer = false,
  fullTextToDownload,
  fullAnswerText,
  downloadFileName,
  downloadedFileName,
  savedLocallyNote,
}) => {
  const [copied, setCopied] = useState(false);
  const resolvedRtl = isRtl ?? (language ? language === 'ar' : true);
  const resolvedDownloadText = fullTextToDownload || fullAnswerText;
  const resolvedFileName =
    downloadFileName || downloadedFileName || 'web-creator-ai-result.txt';
  const whatsappUrl = buildWhatsAppUrl(message);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    downloadTextFile(resolvedFileName, resolvedDownloadText || message);
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/30 space-y-3.5 text-start animate-in fade-in duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[var(--color-text)]">
              {title ||
                (resolvedRtl
                  ? 'تم تجهيز رسالتك وفتح محادثة واتساب'
                  : 'Your message is ready in WhatsApp')}
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              {description ||
                (resolvedRtl
                  ? `راجع نص الرسالة في نافذة واتساب ثم اضغط زر الإرسال ليصل إلى الرقم (${WHATSAPP_CONFIG.phoneDisplay}). إذا لم تفتح النافذة تلقائيًا، يمكنك فتحها من الزر أدناه أو نسخ النص.`
                  : `Review the pre-filled message in WhatsApp and press Send to (${WHATSAPP_CONFIG.phoneDisplay}). If the window did not open automatically, use the buttons below.`)}
            </p>
            {savedLocallyNote && (
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 pt-0.5">
                {savedLocallyNote}
              </p>
            )}
          </div>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label={resolvedRtl ? 'إغلاق التنبيه' : 'Dismiss'}
            className="p-1.5 rounded-lg text-[var(--color-text-subtle)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isLongAnswer && (
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
          {resolvedRtl
            ? 'لأن إجابتك أو الكود طويل، أدرجنا ملخصًا في رسالة واتساب حتى لا ينقطع الرابط. يرجى تنزيل النتيجة الكاملة كملف نصي (.txt) وإرفاقه داخل محادثة واتساب، أو نسخ الإجابة كاملة.'
            : 'Because your answer or code is long, a preview was placed in the WhatsApp link. Please download the full .txt file and attach it in WhatsApp, or copy the full text.'}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>
            {resolvedRtl ? 'فتح واتساب لإرسال الرسالة' : 'Open WhatsApp to Send'}
          </span>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] text-xs font-semibold text-[var(--color-text)] transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">
                {resolvedRtl ? 'تم نسخ نص الرسالة' : 'Message Copied'}
              </span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
              <span>{resolvedRtl ? 'نسخ نص الرسالة' : 'Copy Message Text'}</span>
            </>
          )}
        </button>

        {(isLongAnswer || resolvedDownloadText) && (
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] text-xs font-semibold text-[var(--color-text)] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
            <span>
              {resolvedRtl
                ? 'تنزيل النتيجة كملف نصي (.txt)'
                : 'Download Full Result (.txt)'}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
