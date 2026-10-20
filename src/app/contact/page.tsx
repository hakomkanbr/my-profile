'use client';

import React, { useState } from 'react';
import {
  PortfolioShell,
  PageContainer,
  PageHeader,
  PageSection,
} from '@/components';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { usePreferencesStore } from '@/store';
import { Mail, Phone, ExternalLink, Send, CheckCircle2, Clock, ShieldCheck, Copy, Check } from 'lucide-react';

export default function ContactPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const email = INSTRUCTOR_PROFILE.email || 'abdulhekimkanbr@gmail.com';
  const phone = INSTRUCTOR_PROFILE.phone || '+905382015072';
  const phoneDisplay = INSTRUCTOR_PROFILE.phoneDisplay || '+90 538 201 50 72';

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'project',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto fallback or submit
    const subject = encodeURIComponent(
      `[Inquiry: ${formData.type}] from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'تواصل معي' : 'Get in Touch'}
          subtitle={
            isRtl
              ? 'متاح لمناقشة المشاريع البرمجية، الاستشارات المعمارية، وتطوير حلول الويب الموثوقة.'
              : 'Available for new software projects, architectural consultations, and reliable web engineering.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: isRtl ? 'تواصل معي' : 'Contact', isCurrent: true },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-start mb-16">
          {/* Option 1: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                  {isRtl ? 'الخيار الأول' : 'Option 1'}
                </span>
                <h2 className="text-h3 font-bold text-[var(--color-text)]">
                  {isRtl ? 'نموذج التواصل السريع' : 'Project Inquiry Form'}
                </h2>
                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'أرسل تفاصيل مشروعك أو فكرتك وسأراجع متطلباتك الهندسية بعناية.'
                    : 'Share a summary of your project or technical challenge, and I will review the requirements.'}
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-start space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{isRtl ? 'تم فتح تطبيق البريد بنجاح!' : 'Email client opened!'}</span>
                  </div>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {isRtl
                      ? 'إذا لم يفتح بريدك تلقائياً، يمكنك مراسلتي مباشرة عبر البريد الإلكتروني.'
                      : 'If your client did not launch automatically, feel free to email me directly.'}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-[var(--color-secondary)] hover:underline pt-2 cursor-pointer"
                  >
                    {isRtl ? 'إرسال استفسار آخر' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-[var(--color-text-muted)] mb-1.5">
                      {isRtl ? 'الاسم الكريم' : 'Your Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRtl ? 'أدخل اسمك...' : 'Enter your name...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[var(--color-text-muted)] mb-1.5">
                      {isRtl ? 'البريد الإلكتروني' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={isRtl ? 'name@example.com' : 'name@example.com'}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[var(--color-text-muted)] mb-1.5">
                      {isRtl ? 'نوع الاستفسار أو التعاقد' : 'Inquiry Type'}
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
                    >
                      <option value="project">
                        {isRtl ? 'تطوير مشروع ويب جديد' : 'New Web Application / Platform'}
                      </option>
                      <option value="consultation">
                        {isRtl ? 'استشارة معمارية أو تدقيق كود' : 'Architecture Consultation / Code Review'}
                      </option>
                      <option value="training">
                        {isRtl ? 'استفسار عن برنامج WEB CREATOR AI' : 'WEB CREATOR AI Inquiry'}
                      </option>
                      <option value="general">
                        {isRtl ? 'تواصل مهني عام' : 'General Connection'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[var(--color-text-muted)] mb-1.5">
                      {isRtl ? 'نبذة عن المشروع أو الرسالة' : 'Project Details / Message'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isRtl
                          ? 'صف بإيجاز فكرة المشروع، النطاق الزمني المتوقع، أو المشكلة التقنية...'
                          : 'Briefly describe your project scope, timeline expectations, or technical needs...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-primary)] resize-none"
                    />
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold hover:bg-[var(--color-primary-hover)] active:scale-[0.98] transition-all text-sm shadow-xs cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isRtl ? 'إرسال عبر تطبيق البريد' : 'Send via Email App'}</span>
                    </button>
                    <p className="text-[11px] font-mono text-[var(--color-text-subtle)]">
                      {isRtl
                        ? '* يفتح الزر رسالة جديدة جاهزة في تطبيق بريدك المعتمد (mailto). إذا كنت تستخدم بريد المتصفح، يمكنك نسخ البريد مباشرة أدناه.'
                        : '* Opens a pre-filled draft in your default email client. You can also copy the email directly from Option 2.'}
                    </p>
                  </div>
                </form>
              )}

              {/* Expectations Footnote */}
              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-start gap-2.5 text-xs text-[var(--color-text-muted)] font-mono">
                <Clock className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {isRtl
                    ? 'وقت الرد المعتاد: خلال 24 إلى 48 ساعة عمل. تفاصيل مشروعك وبياناتك تعامل باهتمام وسرية تامة.'
                    : 'Typical response time: Within 24–48 business hours. Your project details are handled with strict privacy.'}
                </p>
              </div>
            </div>
          </div>

          {/* Option 2: Direct Channels & Networks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                  {isRtl ? 'الخيار الثاني' : 'Option 2'}
                </span>
                <h3 className="text-h3 font-bold text-[var(--color-text)]">
                  {isRtl ? 'قنوات الاتصال المباشرة' : 'Direct Channels'}
                </h3>
                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'إذا كنت تفضل المراسلة المباشرة دون ملء النموذج:'
                    : 'If you prefer reaching out directly without form submissions:'}
                </p>
              </div>

              {/* Direct Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                      <Mail className="w-4 h-4" />
                      <span>{isRtl ? 'البريد الإلكتروني' : 'Email'}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(email);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2500);
                      }}
                      className="text-xs font-mono text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] inline-flex items-center gap-1 transition-colors cursor-pointer"
                      title={isRtl ? 'نسخ البريد الإلكتروني' : 'Copy email address'}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500 font-bold">{isRtl ? 'تم النسخ' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{isRtl ? 'نسخ' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="block text-sm font-mono font-bold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                    <Phone className="w-4 h-4" />
                    <span>{isRtl ? 'الهاتف / واتساب' : 'Phone / WhatsApp'}</span>
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="block text-sm font-mono font-bold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-3">
                <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase block">
                  {isRtl ? 'الشبكات والمنصات المهنية' : 'Professional Networks'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {INSTRUCTOR_PROFILE.socialLinks.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-xs font-mono font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                    >
                      <span>{s.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Confidentiality & Ethics Card */}
            <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold text-[var(--color-text)] uppercase">
                  {isRtl ? 'التزام السرية والشفافية' : 'Confidentiality Commitment'}
                </h4>
                <p className="text-body-xs text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? 'أقدم تقييماً هندسياً صادقاً لجدوى المشروع قبل البدء، مع احترام كامل لسرية الأفكار والبيانات التقنية.'
                    : 'I offer realistic technical feasibility assessments prior to engagement, with absolute respect for NDA and idea confidentiality.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
