'use client';

import React from 'react';
import {
  PortfolioShell,
  PageContainer,
  PageHeader,
  PageSection,
} from '@/components';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { usePreferencesStore } from '@/store';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const email = INSTRUCTOR_PROFILE.email || 'abdulhekimkanbr@gmail.com';
  const phone = INSTRUCTOR_PROFILE.phone || '+905382015072';
  const phoneDisplay = INSTRUCTOR_PROFILE.phoneDisplay || '+90 538 201 50 72';

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'تواصل معي' : 'Get in Touch'}
          subtitle={
            isRtl
              ? 'لديك مشروع، فرصة عمل، أو ترغب في التواصل؟ لا تتردد في مراسلتي.'
              : 'Have a project, work inquiry, or simply want to connect? Feel free to reach out.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: isRtl ? 'تواصل معي' : 'Contact', isCurrent: true },
          ]}
        />

        <PageSection>
          <div className="max-w-3xl space-y-8 text-start">
            {/* Direct Communication Channels */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                  DIRECT CONTACT
                </span>
                <h3 className="text-h3 font-bold text-[var(--color-text)]">
                  {isRtl ? 'قنوات الاتصال المباشرة' : 'Direct Communication'}
                </h3>
                <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                  {isRtl
                    ? 'متاح للاستشارات البرمجية والمعمارية، تطوير مشاريع الويب، وفرص التدريب الهندسي.'
                    : 'Available for software architecture consultations, full-lifecycle web development, and engineering mentorship.'}
                </p>
              </div>

              {/* Email & Phone Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Email Card */}
                <div className="p-5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="block text-sm font-mono font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>

                {/* Phone Card */}
                <div className="p-5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                    <Phone className="w-4 h-4" />
                    <span>Phone</span>
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="block text-sm font-mono font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Send Email Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold hover:bg-[var(--color-primary-hover)] active:scale-[0.98] transition-all text-sm shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isRtl ? 'إرسال رسالة بريد إلكتروني' : 'Send an Email'}</span>
                </a>
              </div>
            </div>

            {/* Social / Professional Networks */}
            <div className="p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
              <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase">
                NETWORKS & CHANNELS
              </span>
              <h4 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl ? 'قنوات التواصل والشبكات المهنية' : 'Professional Channels'}
              </h4>
              <div className="flex flex-wrap gap-3 pt-1">
                {INSTRUCTOR_PROFILE.socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-xs font-mono font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                  >
                    <span>{s.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </PageSection>
      </PageContainer>
    </PortfolioShell>
  );
}
