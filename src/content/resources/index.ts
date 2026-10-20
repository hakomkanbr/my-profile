/**
 * WEB CREATOR AI — Resources Registry
 * Curated developer cheatsheets, tools, and official references.
 */

import { ResourceItem } from '@/types';

export const ALL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-web-launch-checklist',
    title: {
      ar: 'قائمة فحص إطلاق موقع ويب للإنتاج',
      en: 'Production Web Launch Checklist',
    },
    description: {
      ar: 'قائمة فحص عملية تشمل التحقق من بيانات الميتاداتا، خرائط الموقع، وسوم Open Graph، استجابة الهواتف، وأكواد الحالة قبل النشر الحي.',
      en: 'Comprehensive checklist covering SEO metadata, sitemaps, Open Graph cards, mobile responsiveness, and HTTP status codes before going live.',
    },
    category: 'cheat-sheet',
    url: '/resources#launch-checklist',
    isExternal: false,
    badge: 'Checklist',
  },
  {
    id: 'res-web-vitals-checklist',
    title: {
      ar: 'قائمة فحص تحسين مؤشرات الأداء (Core Web Vitals)',
      en: 'Core Web Vitals Optimization Checklist',
    },
    description: {
      ar: 'خطوات عملية لتقليص زمن التحميل (LCP)، تقليل تحركات الصفحة (CLS)، وتحسين زمن التفاعل (INP) عبر Server Components والتحميل المؤجل.',
      en: 'Actionable steps to minimize LCP, eliminate CLS shifts, and optimize INP interactions via React Server Components and deferred scripts.',
    },
    category: 'cheat-sheet',
    url: '/resources#vitals-checklist',
    isExternal: false,
    badge: 'Performance',
  },
  {
    id: 'res-adr-template',
    title: {
      ar: 'قالب توثيق القرارات المعمارية (ADR Template)',
      en: 'Architecture Decision Record (ADR) Template',
    },
    description: {
      ar: 'نموذج جاهز ومبسط لتوثيق القرارات التقنية والمعمارية في الفريق: السياق، البدائل المطروحة، القرار المتخذ، والتبعات.',
      en: 'A pragmatic Markdown template for documenting team architectural decisions: context, options considered, chosen solution, and consequences.',
    },
    category: 'template',
    url: '/resources#adr-template',
    isExternal: false,
    badge: 'Template',
  },
  {
    id: 'res-api-security-checklist',
    title: {
      ar: 'قائمة فحص أمان واجهات البرمجة والواجهات الأمامية',
      en: 'Frontend & API Security Checklist',
    },
    description: {
      ar: 'إرشادات أساسية لحماية التطبيقات: آليات المصادقة، التوكنات، ترويسات الأمان (CORS، CSP)، والتحقق من المدخلات على طرف الخادم.',
      en: 'Essential checklist covering JWT lifecycle, secure HTTP cookies, CORS & CSP headers, and defensive server-side input validation.',
    },
    category: 'cheat-sheet',
    url: '/resources#security-checklist',
    isExternal: false,
    badge: 'Security',
  },
  {
    id: 'res-nextjs-docs',
    title: {
      ar: 'توثيق Next.js الرسمي (App Router)',
      en: 'Next.js App Router Documentation',
    },
    description: {
      ar: 'الدليل الكامل لفهم Server Components، التوجيه الديناميكي، وتحسين أداء التطبيقات.',
      en: 'Official guide to React Server Components, file-system routing, and caching.',
    },
    category: 'documentation',
    url: 'https://nextjs.org/docs',
    isExternal: true,
    badge: 'Framework',
  },
  {
    id: 'res-mdn-web-docs',
    title: {
      ar: 'مرجع MDN Web Docs الرسمي',
      en: 'MDN Web Docs Official Reference',
    },
    description: {
      ar: 'الموسوعة الأكثر موثوقية لتوثيق وسوم HTML وميزات CSS ومعايير JavaScript.',
      en: 'The definitive encyclopedia for HTML elements, CSS properties, and Web APIs.',
    },
    category: 'documentation',
    url: 'https://developer.mozilla.org',
    isExternal: true,
    badge: 'Reference',
  },
  {
    id: 'res-tailwind-cheatsheet',
    title: {
      ar: 'ورقة مساعدة سريعة لأوامر Tailwind CSS',
      en: 'Tailwind CSS Quick Reference',
    },
    description: {
      ar: 'البحث السريع عن فئات الألوان والهوامش والـ Flexbox والـ Grid دون حفظ الأسماء.',
      en: 'Instant lookup for Tailwind utility classes, flex, grid, and breakpoints.',
    },
    category: 'tool',
    url: 'https://tailwindcss.com/docs',
    isExternal: true,
    badge: 'Tool',
  },
  {
    id: 'res-web-vitals',
    title: {
      ar: 'أداة PageSpeed Insights وتدقيق الـ Core Web Vitals',
      en: 'Google PageSpeed Insights & Web Vitals',
    },
    description: {
      ar: 'فحص سرعة تحميل أي صفحة ويب وتحديد مشاكل الأداء وتقارير الـ SEO الرسمية من Google.',
      en: 'Audit Core Web Vitals, performance bottlenecks, and SEO compliance.',
    },
    category: 'tool',
    url: 'https://pagespeed.web.dev',
    isExternal: true,
    badge: 'Audit Tool',
  },
];
