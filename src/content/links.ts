import { LocalizedString } from '@/types';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export type LinkCategory = 'contact' | 'product' | 'learning' | 'social';

export type LinkIcon =
  | 'whatsapp'
  | 'portfolio'
  | 'share2sells'
  | 'masar'
  | 'cashpro'
  | 'learning'
  | 'github'
  | 'linkedin'
  | 'gitlab'
  | 'instagram';

export interface PersonalLinkItem {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  handle?: string;
  url: string;
  category: LinkCategory;
  icon: LinkIcon;
  external: boolean;
  published: boolean;
  order: number;
}

export const PERSONAL_LINKS: PersonalLinkItem[] = [
  {
    id: 'whatsapp-direct',
    title: {
      ar: 'تواصل معي مباشرة عبر واتساب',
      en: 'Chat Directly on WhatsApp',
    },
    description: {
      ar: 'لمناقشة فكرة مشروع، طلب موقع أو نظام مخصص، أو الاستفسار عن التدريب',
      en: 'Discuss a project idea, request a website or custom system, or ask about training',
    },
    url: buildWhatsAppUrl(
      'مرحبًا أستاذ عبد الحكيم، وصلت إليك عبر صفحة الروابط وأود التحدث معك بخصوص مشروع أو استفسار.'
    ),
    category: 'contact',
    icon: 'whatsapp',
    external: true,
    published: true,
    order: 1,
  },
  {
    id: 'official-portfolio',
    title: {
      ar: 'الموقع الرسمي ومعرض الأعمال',
      en: 'Official Website & Portfolio',
    },
    description: {
      ar: 'تعرّف على خدماتي، مشاريعي المعتمدة، والمقالات والموارد العملية',
      en: 'Explore my services, approved projects, articles, and practical resources',
    },
    url: '/',
    category: 'contact',
    icon: 'portfolio',
    external: false,
    published: true,
    order: 2,
  },
  {
    id: 'share2sells',
    title: {
      ar: 'Share2Sells — للمتاجر الرقمية وقوائم QR السريعة',
      en: 'Share2Sells — Digital Storefront & QR Menu Platform',
    },
    description: {
      ar: 'منصة تمكّن المتاجر والمطاعم من إطلاق متجر رقمي وقائمة تفاعلية برمز QR واستقبال الطلبات عبر واتساب',
      en: 'Platform helping merchants and restaurants launch online storefronts, QR menus, and WhatsApp order routing',
    },
    url: 'https://share2sells.com',
    category: 'product',
    icon: 'share2sells',
    external: true,
    published: true,
    order: 1,
  },
  {
    id: 'masar',
    title: {
      ar: 'Masar (مسار) — لإدارة الأعمال والمشاريع والمالية',
      en: 'Masar — Business Operations & Financial Suite',
    },
    description: {
      ar: 'منظومة للشركات والفرق لإدارة العملاء (CRM)، المشاريع، ساعات العمل، الفواتير، والمصاريف بتعدد العملات',
      en: 'Suite for SMBs and teams to manage CRM, projects, hourly billing, invoices, and multi-currency expenses',
    },
    url: 'https://masar.abdulhakimkanbr.com',
    category: 'product',
    icon: 'masar',
    external: true,
    published: true,
    order: 2,
  },
  {
    id: 'cashpro',
    title: {
      ar: 'CashPro — للعمليات المالية والتحويلات السريعة',
      en: 'CashPro — Financial Operations & Liquidity System',
    },
    description: {
      ar: 'نظام متخصص لإدارة عمليات الصرافة، تسوية التحويلات النقدية، ومطابقة أرصدة جلسات الكاونتر',
      en: 'Specialized system for exchange counters, rapid cash remittance settlement, and teller session reconciliation',
    },
    url: 'https://cashpro.abdulhakimkanbr.com',
    category: 'product',
    icon: 'cashpro',
    external: true,
    published: true,
    order: 3,
  },
  {
    id: 'web-creator-ai',
    title: {
      ar: 'WEB CREATOR AI — المسار التدريبي التفاعلي',
      en: 'WEB CREATOR AI — Interactive Learning Track',
    },
    description: {
      ar: 'تعلّم بناء المواقع الحديثة خطوة بخطوة في 12 جلسة عملية مع مراجعة الأنشطة عبر واتساب',
      en: 'Learn to build modern websites step by step in 12 hands-on sessions with WhatsApp feedback',
    },
    url: '/web-creator-ai',
    category: 'learning',
    icon: 'learning',
    external: false,
    published: true,
    order: 1,
  },
  {
    id: 'github',
    title: { ar: 'GitHub', en: 'GitHub' },
    handle: '@abdulhakimkanbr',
    description: {
      ar: 'المشاريع البرمجية المفتوحة ونماذج الكود (@abdulhakimkanbr)',
      en: 'Open-source repositories and code samples (@abdulhakimkanbr)',
    },
    url: 'https://github.com/abdulhakimkanbr',
    category: 'social',
    icon: 'github',
    external: true,
    published: true,
    order: 1,
  },
  {
    id: 'linkedin',
    title: { ar: 'LinkedIn', en: 'LinkedIn' },
    handle: 'Abdulhakim Kanbr',
    description: {
      ar: 'الملف المهني والتواصل مع الشركات',
      en: 'Professional profile & business networking',
    },
    url: 'https://www.linkedin.com/in/abdulhakim-kanbr-089119196',
    category: 'social',
    icon: 'linkedin',
    external: true,
    published: true,
    order: 2,
  },
  {
    id: 'gitlab',
    title: { ar: 'GitLab', en: 'GitLab' },
    handle: '@abdulhekimkanbr',
    description: {
      ar: 'مستودعات الأنظمة وأتمتة النشر (@abdulhekimkanbr)',
      en: 'System repositories & deployment pipelines (@abdulhekimkanbr)',
    },
    url: 'https://gitlab.com/abdulhekimkanbr',
    category: 'social',
    icon: 'gitlab',
    external: true,
    published: true,
    order: 3,
  },
  {
    id: 'instagram',
    title: { ar: 'Instagram', en: 'Instagram' },
    handle: '@abdulhakim.kanbr',
    description: {
      ar: 'محتوى تقني ونصائح من رحلة بناء المنتجات (@abdulhakim.kanbr)',
      en: 'Tech tips & product building updates (@abdulhakim.kanbr)',
    },
    url: 'https://www.instagram.com/abdulhakim.kanbr',
    category: 'social',
    icon: 'instagram',
    external: true,
    published: true,
    order: 4,
  },
];
