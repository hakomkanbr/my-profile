/**
 * Professional Experience & Practice Areas
 */

import { LocalizedString } from '@/types';

export interface ExperienceEntry {
  id: string;
  role: LocalizedString;
  organization?: LocalizedString;
  scope: LocalizedString;
  highlights: LocalizedString[];
  technologies: string[];
}

export const PROFESSIONAL_EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'exp-saas-architect',
    role: {
      ar: 'تطوير المواقع والأنظمة المخصصة والمنتجات الرقمية',
      en: 'Websites, Custom Business Systems & Digital Products',
    },
    organization: {
      ar: 'مشاريع مستقلة ومنتجات رقمية (SaaS)',
      en: 'Independent Projects & SaaS Products',
    },
    scope: {
      ar: 'تخطيط وتطوير مواقع الشركات، المتاجر الإلكترونية، والأنظمة السحابية المخصصة لإدارة المبيعات والمحاسبة والعمليات اليومية.',
      en: 'Planning and developing business websites, online stores, and custom cloud systems for managing sales, accounting, and daily operations.',
    },
    highlights: [
      {
        ar: 'تطوير وإطلاق منتجات سحابية متكاملة مثل Share2Sells وMasar وCashPro من الفكرة حتى التشغيل الحي.',
        en: 'Built and launched complete SaaS platforms including Share2Sells, Masar, and CashPro from concept to live production.',
      },
      {
        ar: 'بناء واجهات مستخدم سريعة ومتجاوبة مع الهواتف باللغتين العربية والإنجليزية مع تهيئة محركات البحث (SEO).',
        en: 'Crafted fast, mobile-first bilingual (Arabic/English) interfaces with strong technical SEO.',
      },
      {
        ar: 'تصميم أنظمة خلفية وقواعد بيانات مستقرة تحافظ على أمان البيانات وسهولة التوسع المستقبلي.',
        en: 'Designed reliable backend APIs and databases focused on data security and smooth scalability.',
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', '.NET Core', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'exp-technical-trainer',
    role: {
      ar: 'التدريب التقني وتطوير المناهج التطبيقية',
      en: 'Technical Training & Hands-On Curriculum Design',
    },
    organization: {
      ar: 'برنامج WEB CREATOR AI ومسارات تدريب المطورين',
      en: 'WEB CREATOR AI & Developer Mentorship',
    },
    scope: {
      ar: 'تصميم وتقديم برامج تدريبية عملية تساعد المتدربين والمطورين على بناء مواقع وتطبيقات ويب حقيقية خطوة بخطوة.',
      en: 'Designing and delivering practical training programs that help learners and developers build real websites and web applications step by step.',
    },
    highlights: [
      {
        ar: 'تطوير منصة ومنهج WEB CREATOR AI المكون من 12 جلسة عملية تجمع بين أساسيات الويب وأدوات الذكاء الاصطناعي.',
        en: 'Created the 12-session WEB CREATOR AI curriculum combining web fundamentals with practical AI workflows.',
      },
      {
        ar: 'الإشراف المباشر على أنشطة المتدربين ومراجعة مشاريعهم خطوة بخطوة حتى نشرها على الإنترنت.',
        en: 'Guided trainees through hands-on activities and project reviews all the way to live deployment.',
      },
      {
        ar: 'تدريب المطورين على تنظيم الكود، بناء واجهات البرمجة (APIs)، وربط الأنظمة بقواعد البيانات.',
        en: 'Mentored developers on clean code organization, API design, and database integration.',
      },
    ],
    technologies: ['HTML5 & CSS3', 'Tailwind CSS', 'JavaScript', 'React', 'AI Workflows', 'Git'],
  },
];
