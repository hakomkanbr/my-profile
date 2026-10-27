'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { Card, Button, WhatsAppActionFeedback } from '@/components/ui';
import { ArrowLeft, ArrowRight, Compass, MessageCircle } from 'lucide-react';
import { buildClientInquiryMessage, openWhatsAppChat } from '@/lib/whatsapp';

export const InstructorCTA: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [whatsAppMessage, setWhatsAppMessage] = useState<string | null>(null);

  const handleContactInstructor = () => {
    const message = buildClientInquiryMessage({
      inquiryType: isRtl ? 'سؤال للمدرب حول برنامج WEB CREATOR AI' : 'Instructor Question — WEB CREATOR AI',
      projectOrService: 'WEB CREATOR AI',
      message: isRtl
        ? 'مرحبًا عبد الحكيم، أود التواصل معك بخصوص برنامج WEB CREATOR AI ومسار التدريب العملي.'
        : 'Hello Abdulhakim, I would like to ask about the WEB CREATOR AI training program.',
      language,
    });
    setWhatsAppMessage(message);
    openWhatsAppChat(message);
  };

  return (
    <section className="py-10 sm:py-14 text-start space-y-4">
      <Card
        variant="featured"
        className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-5 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface-sunken)] border-2 border-[var(--color-primary)]"
      >
        <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center">
          <Compass className="w-6 h-6" />
        </div>

        <h2 className="text-h2 font-extrabold text-[var(--color-text)]">
          {isRtl ? 'ابدأ رحلتك العملية الآن' : 'Start Your Practical Journey Now'}
        </h2>

        <p className="text-body-sm text-[var(--color-text-muted)] max-w-xl leading-relaxed">
          {isRtl
            ? 'المعرفة النظرية وحدها لا تكفي؛ انتقل الآن إلى منصة التدريب وابدأ بتطبيق الجلسة الأولى، أو تواصل معي مباشرة عبر واتساب إذا كان لديك أي سؤال.'
            : 'Theory alone is not enough—jump into the training platform and start Session 1, or message me directly on WhatsApp if you have any questions.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/web-creator-ai">
            <Button
              size="lg"
              variant="primary"
              rightIcon={
                isRtl ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )
              }
            >
              {isRtl ? 'انتقل إلى لوحة التدريب (WEB CREATOR AI)' : 'Open Training Dashboard'}
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            onClick={handleContactInstructor}
            leftIcon={<MessageCircle className="w-4 h-4 text-emerald-500" />}
          >
            {isRtl ? 'تواصل مع المدرب عبر واتساب' : 'Message Instructor on WhatsApp'}
          </Button>
        </div>
      </Card>

      {whatsAppMessage && (
        <WhatsAppActionFeedback
          message={whatsAppMessage}
          language={language}
          onClose={() => setWhatsAppMessage(null)}
        />
      )}
    </section>
  );
};
