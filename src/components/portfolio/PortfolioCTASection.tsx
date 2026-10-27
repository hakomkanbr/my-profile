'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { Button, WhatsAppActionFeedback } from '@/components/ui';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/motion';
import {
  WHATSAPP_CONFIG,
  buildClientInquiryMessage,
  openWhatsAppChat,
} from '@/lib/whatsapp';

export const PortfolioCTASection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);

  const handleStartWhatsApp = () => {
    const msg = buildClientInquiryMessage({
      projectType: 'مشروع جديد أو استشارة تقنية',
      details: 'أرغب في التحدث معك بخصوص فكرة مشروع أو تطوير موقع/نظام.',
      pageUrl: 'https://abdulhakimkanbr.com/#contact',
    });
    setPreparedMessage(msg);
    openWhatsAppChat(msg);
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-24 text-start bg-[var(--color-surface-sunken)]"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={60}>
          <div className="p-7 sm:p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm text-center space-y-6">
            <div className="space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <MessageCircle className="w-3.5 h-3.5" />
                <span dir="ltr">{WHATSAPP_CONFIG.phoneDisplay}</span>
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal leading-tight">
                {isRtl
                  ? 'عندك فكرة أو مشروع؟ لنتحدث'
                  : 'Have an idea or project? Let’s talk'}
              </h2>

              <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                {isRtl
                  ? 'سواء كنت تريد بناء موقع لشركتك، متجر إلكتروني، نظام مخصص لإدارة عملك، أو لديك استفسار حول التدريب، يسعدني التواصل معك مباشرة عبر واتساب.'
                  : 'Whether you want to build a company website, an online store, a custom management system, or have a training inquiry, you can message me directly on WhatsApp.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
              <Button
                size="lg"
                variant="primary"
                onClick={handleStartWhatsApp}
                className="w-full sm:w-auto font-bold shadow-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white"
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                {isRtl
                  ? 'ابدأ المحادثة عبر واتساب'
                  : 'Start Chat on WhatsApp'}
              </Button>

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-bold bg-[var(--color-surface)]"
                  rightIcon={
                    isRtl ? (
                      <ArrowLeft className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )
                  }
                >
                  {isRtl
                    ? 'إرسال تفاصيل المشروع عبر نموذج التواصل'
                    : 'Send Project Details via Form'}
                </Button>
              </Link>
            </div>

            {preparedMessage && (
              <div className="pt-3 max-w-2xl mx-auto">
                <WhatsAppActionFeedback
                  message={preparedMessage}
                  isRtl={isRtl}
                  onClose={() => setPreparedMessage(null)}
                />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
