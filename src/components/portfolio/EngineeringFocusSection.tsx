'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { CheckCircle2, Globe, LayoutDashboard, MessageCircle, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { buildClientInquiryMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceGroup {
  id: string;
  icon: React.ReactNode;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  benefits: { ar: string; en: string }[];
  inquiryTypeAr: string;
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'websites-ecommerce',
    icon: <Globe className="w-6 h-6" />,
    title: {
      ar: 'المواقع والمتاجر الإلكترونية',
      en: 'Websites & Online Stores',
    },
    description: {
      ar: 'أصمّم وأطوّر مواقع تعريفية للشركات ومتاجر إلكترونية سريعة ومريحة على الهاتف، تعرض خدماتك ومنتجاتك بوضوح وتساعد الزائر على الطلب أو التواصل معك دون تعقيد.',
      en: 'I design and build fast, mobile-friendly company websites and online stores that present your services and products clearly and make it easy for visitors to order or contact you.',
    },
    benefits: [
      {
        ar: 'عرض واضح لخدماتك أو منتجاتك يفهمه العميل من أول زيارة.',
        en: 'Clear presentation of your services or products from the first visit.',
      },
      {
        ar: 'سرعة تصفح عالية وتوافق كامل مع الهواتف ومحركات البحث.',
        en: 'Fast loading speed and full mobile and search engine readiness.',
      },
      {
        ar: 'ربط مباشر بطلبات التواصل عبر واتساب أو نماذج الطلب.',
        en: 'Direct connection to WhatsApp inquiries or order workflows.',
      },
    ],
    inquiryTypeAr: 'بناء موقع إلكتروني أو متجر إلكتروني',
  },
  {
    id: 'custom-systems',
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: {
      ar: 'الأنظمة المخصصة لإدارة الأعمال',
      en: 'Custom Business Management Systems',
    },
    description: {
      ar: 'أبني أنظمة ولوحات تحكم مصممة خصيصًا لطبيعة عملك، تساعدك على متابعة المبيعات، الفواتير، المخزون، وصلاحيات الموظفين من مكان واحد بدل الجداول المتفرقة.',
      en: 'I build custom dashboards and internal systems tailored to your workflow, helping you track sales, invoices, inventory, and team permissions in one organized place.',
    },
    benefits: [
      {
        ar: 'تنظيم العمليات اليومية وتقليل الأخطاء اليدوية في الحسابات والمخزون.',
        en: 'Organize daily operations and reduce manual errors in accounting and stock.',
      },
      {
        ar: 'تقارير واضحة تساعدك على معرفة أداء عملك واتخاذ القرار بسرعة.',
        en: 'Clear reports that show your business performance at a glance.',
      },
      {
        ar: 'صلاحيات مخصصة لكل عضو في فريق العمل مع حفظ آمن للبيانات.',
        en: 'Role-based permissions for your team with secure data storage.',
      },
    ],
    inquiryTypeAr: 'تطوير نظام مخصص لإدارة الأعمال',
  },
  {
    id: 'digital-products',
    icon: <Sparkles className="w-6 h-6" />,
    title: {
      ar: 'تطوير المنتجات الرقمية (SaaS)',
      en: 'Digital Product & SaaS Development',
    },
    description: {
      ar: 'أحوّل الأفكار الريادية إلى منصات ومنتجات رقمية جاهزة للإطلاق والاشتراك، بدءًا من تخطيط المنتج وتجربة المستخدم وحتى بناء النظام الكامل وتشغيله على السحابة.',
      en: 'I turn product ideas into launch-ready web platforms and SaaS applications, from product planning and user experience to full backend engineering and cloud deployment.',
    },
    benefits: [
      {
        ar: 'بناء النسخة الأولى من المنتج (MVP) أو تطوير منصة كاملة جاهزة للمستخدمين.',
        en: 'Build a focused MVP or a complete platform ready for real users.',
      },
      {
        ar: 'دعم تعدد الحسابات والاشتراكات ولوحات التحكم المستقلة.',
        en: 'Support for multi-user accounts, subscriptions, and dedicated dashboards.',
      },
      {
        ar: 'بنية برمجية منظمة يسهل إضافة ميزات جديدة إليها مع نمو المشروع.',
        en: 'Clean software foundation that is easy to expand as your product grows.',
      },
    ],
    inquiryTypeAr: 'تطوير منتج رقمي أو منصة SaaS',
  },
];

export const EngineeringFocusSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <section
      id="services"
      className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start bg-[var(--color-background)]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" distance={16}>
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? 'الخدمات والحلول' : 'Services & Solutions'}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
              {isRtl ? 'كيف أساعد العملاء؟' : 'How I Help Clients'}
            </h2>
            <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
              {isRtl
                ? 'أقدّم خدمات عملية تركّز على النتيجة التي يحتاجها عملك، سواء كنت تبدأ حضورك الرقمي أو تطوّر نظامًا متكاملًا.'
                : 'Practical development services focused on the real outcomes your business needs, whether you are launching a website or building a full system.'}
            </p>
          </div>
        </Reveal>

        {/* 3 Service Group Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICE_GROUPS.map((service, idx) => {
            const waUrl = buildWhatsAppUrl(
              buildClientInquiryMessage({
                projectType: service.inquiryTypeAr,
                details: `أود الاستفسار عن خدمة: ${service.title.ar}`,
                pageUrl: 'https://abdulhakimkanbr.com/#services',
              })
            );

            return (
              <Reveal key={service.id} direction="up" delayMs={idx * 90} distance={18}>
                <div className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-6 hover:border-[var(--color-secondary)]/50 transition-all duration-300 h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <h3 className="text-h3 font-bold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                      {isRtl ? service.title.ar : service.title.en}
                    </h3>

                    <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                      {isRtl ? service.description.ar : service.description.en}
                    </p>

                    <ul className="space-y-2.5 pt-2 border-t border-[var(--color-border-subtle)]">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            {isRtl ? benefit.ar : benefit.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-secondary)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>
                        {isRtl
                          ? 'اطلب هذه الخدمة عبر واتساب'
                          : 'Inquire via WhatsApp'}
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
