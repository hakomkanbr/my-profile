'use client';

import React, { useState } from 'react';
import {
  PortfolioShell,
  PageContainer,
  PageHeader,
  Card,
  Button,
  Input,
  Textarea,
  WhatsAppActionFeedback,
} from '@/components';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  Mail,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Globe,
  LayoutDashboard,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import {
  WHATSAPP_CONFIG,
  buildClientInquiryMessage,
  buildWhatsAppUrl,
  getCurrentPageUrl,
  openWhatsAppChat,
} from '@/lib/whatsapp';

type InquiryTypeKey = 'website' | 'system' | 'saas' | 'training';

export default function ContactPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [selectedType, setSelectedType] = useState<InquiryTypeKey>('website');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [preparedWhatsAppMsg, setPreparedWhatsAppMsg] = useState<string | null>(
    null
  );

  const inquiryTypes = [
    {
      key: 'website' as const,
      icon: Globe,
      title: {
        ar: 'بناء موقع أو متجر إلكتروني',
        en: 'Website or Online Store',
      },
      desc: {
        ar: 'تطوير موقع شركة، صفحة هبوط، أو متجر إلكتروني سريع ومتجاوب مع الهواتف.',
        en: 'Building a company website, landing page, or fast mobile-friendly online store.',
      },
      typeLabelAr: 'بناء موقع أو متجر إلكتروني',
    },
    {
      key: 'system' as const,
      icon: LayoutDashboard,
      title: {
        ar: 'تطوير نظام مخصص لإدارة الأعمال',
        en: 'Custom Business System',
      },
      desc: {
        ar: 'بناء لوحة تحكم أو نظام داخلي لتنظيم المبيعات، الفواتير، المخزون، أو فريق العمل.',
        en: 'Developing a custom dashboard or internal system for sales, invoicing, or inventory.',
      },
      typeLabelAr: 'تطوير نظام مخصص لإدارة الأعمال',
    },
    {
      key: 'saas' as const,
      icon: Sparkles,
      title: {
        ar: 'تطوير منتج رقمي (SaaS) أو استشارة تقنية',
        en: 'Digital Product (SaaS) or Technical Consultation',
      },
      desc: {
        ar: 'تحويل فكرة ريادية إلى منتج سحابي متكامل، أو مراجعة مشروع قائم وتحسينه.',
        en: 'Turning a product idea into a SaaS platform, or reviewing and improving an existing system.',
      },
      typeLabelAr: 'تطوير منتج رقمي (SaaS) أو استشارة تقنية',
    },
    {
      key: 'training' as const,
      icon: GraduationCap,
      title: {
        ar: 'استفسار عن التدريب أو WEB CREATOR AI',
        en: 'Training or WEB CREATOR AI Inquiry',
      },
      desc: {
        ar: 'الاستفسار عن الجلسات التدريبية، مراجعة الأنشطة، أو تدريب فرق العمل.',
        en: 'Questions about training sessions, activity reviews, or team workshops.',
      },
      typeLabelAr: 'استفسار عن التدريب أو WEB CREATOR AI',
    },
  ];

  const activeInquiry =
    inquiryTypes.find((t) => t.key === selectedType) || inquiryTypes[0];

  const handleSubmitViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formatted = buildClientInquiryMessage({
      name,
      email,
      projectType: activeInquiry.typeLabelAr,
      details: message,
      pageUrl: getCurrentPageUrl('/contact'),
    });

    setPreparedWhatsAppMsg(formatted);
    openWhatsAppChat(formatted);
  };

  const directWhatsAppUrl = buildWhatsAppUrl(
    'مرحبًا أستاذ عبد الحكيم، أرغب في التواصل معك بخصوص مشروع أو استفسار.'
  );

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={
            isRtl
              ? 'عندك فكرة أو مشروع؟ لنتحدث'
              : 'Have an idea or project? Let’s talk'
          }
          subtitle={
            isRtl
              ? 'اختر نوع طلبك واكتب فكرتك باختصار، ثم اضغط إرسال لتفتح محادثة واتساب جاهزة معي مباشرة.'
              : 'Choose your inquiry type, write a brief summary of your idea, and click send to open a direct WhatsApp conversation with me.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            {
              id: '2',
              label: isRtl ? 'تواصل معي' : 'Contact',
              isCurrent: true,
            },
          ]}
        />

        <div className="space-y-12 pb-16 text-start">
          {/* 1. Inquiry Type Selector */}
          <div className="space-y-4">
            <h2 className="text-h3 font-bold text-[var(--color-text)]">
              {isRtl ? '1. اختر موضوع الرسالة' : '1. Select Inquiry Topic'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {inquiryTypes.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedType === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSelectedType(item.key)}
                    className={`p-5 rounded-2xl border text-start transition-all flex flex-col justify-between space-y-4 cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--color-primary-subtle)] border-[var(--color-secondary)] shadow-xs'
                        : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-secondary)]/50'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? 'bg-[var(--color-secondary)] text-white'
                              : 'bg-[var(--color-surface-sunken)] text-[var(--color-secondary)]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)]" />
                        )}
                      </div>

                      <h3 className="text-h4 font-bold text-[var(--color-text)]">
                        {getLocalizedText(item.title, language)}
                      </h3>

                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {getLocalizedText(item.desc, language)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Form & Direct Channels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* WhatsApp Inquiry Form */}
            <Card className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div className="space-y-1 border-b border-[var(--color-border-subtle)] pb-4">
                <h2 className="text-h3 font-bold text-[var(--color-text)]">
                  {isRtl
                    ? '2. أرسل تفاصيل طلبك عبر واتساب'
                    : '2. Send Your Inquiry via WhatsApp'}
                </h2>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {isRtl
                    ? `الموضوع المحدد: ${getLocalizedText(activeInquiry.title, language)} — ستفتح نافذة واتساب على الرقم (${WHATSAPP_CONFIG.phoneDisplay}) وبداخلها رسالتك جاهزة للإرسال.`
                    : `Selected Topic: ${getLocalizedText(activeInquiry.title, language)} — WhatsApp will open (${WHATSAPP_CONFIG.phoneDisplay}) with your pre-filled message ready to send.`}
                </p>
              </div>

              <form onSubmit={handleSubmitViaWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label={isRtl ? 'الاسم الكامل' : 'Full Name'}
                    placeholder={
                      isRtl ? 'مثال: محمد العبد الله' : 'e.g., John Doe'
                    }
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    label={
                      isRtl
                        ? 'البريد الإلكتروني (اختياري)'
                        : 'Email Address (Optional)'
                    }
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Textarea
                  label={
                    isRtl
                      ? 'تفاصيل الفكرة أو المشروع'
                      : 'Project or Inquiry Details'
                  }
                  placeholder={
                    isRtl
                      ? 'اشرح باختصار فكرة المشروع، الهدف منه، أو أي تفاصيل تود مناقشتها...'
                      : 'Briefly describe your project idea, goals, or any details you would like to discuss...'
                  }
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="font-bold bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white shadow-sm"
                    leftIcon={<MessageCircle className="w-4 h-4" />}
                  >
                    {isRtl
                      ? 'إرسال الطلب عبر واتساب'
                      : 'Send Inquiry via WhatsApp'}
                  </Button>

                  <span className="text-xs text-[var(--color-text-subtle)]">
                    {isRtl
                      ? '* لن تُمسح مدخلاتك بعد الضغط، ويمكنك نسخ الرسالة في أي وقت.'
                      : '* Your inputs stay saved on screen and can be copied anytime.'}
                  </span>
                </div>
              </form>

              {preparedWhatsAppMsg && (
                <WhatsAppActionFeedback
                  message={preparedWhatsAppMsg}
                  isRtl={isRtl}
                  onClose={() => setPreparedWhatsAppMsg(null)}
                />
              )}
            </Card>

            {/* Direct Contact Channels Column */}
            <div className="lg:col-span-5 space-y-4">
              {/* Direct WhatsApp Card */}
              <Card className="p-6 space-y-4 border-2 border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-h4 font-bold text-[var(--color-text)]">
                      {isRtl
                        ? 'محادثة سريعة عبر واتساب'
                        : 'Direct WhatsApp Chat'}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {isRtl
                        ? 'أسرع وسيلة للتواصل ومناقشة المشاريع والتدريب'
                        : 'Fastest way to discuss projects & training'}
                    </p>
                  </div>
                </div>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="block p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-sm text-center font-bold transition-colors shadow-xs"
                >
                  {WHATSAPP_CONFIG.phoneDisplay}
                </a>
              </Card>

              {/* Email Card (Secondary) */}
              {INSTRUCTOR_PROFILE.email && (
                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-h4 font-bold text-[var(--color-text)]">
                        {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                      </h3>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        {isRtl
                          ? 'للمراسلات الرسمية والملفات المرفقة'
                          : 'For formal correspondence and attachments'}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${INSTRUCTOR_PROFILE.email}`}
                    className="block p-3.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-mono text-xs sm:text-sm text-[var(--color-secondary)] hover:underline text-center font-bold break-all"
                  >
                    {INSTRUCTOR_PROFILE.email}
                  </a>
                </Card>
              )}

              {/* Social & Code Profiles */}
              <Card className="p-6 space-y-4">
                <h3 className="text-h4 font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'الحسابات الرسمية والمنصات البرمجية'
                    : 'Official Profiles'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {INSTRUCTOR_PROFILE.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)]/50 flex items-center justify-between text-xs font-mono font-bold text-[var(--color-text)] transition-all"
                    >
                      <span>{social.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-subtle)]" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
