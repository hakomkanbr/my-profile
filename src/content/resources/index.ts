/**
 * WEB CREATOR AI — Resources Registry
 * Curated developer cheatsheets, tools, and official references.
 */

import { ResourceItem } from '@/types';

export const ALL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-mdn-web-docs',
    title: {
      ar: 'مرجع MDN Web Docs الرسمي',
      en: 'MDN Web Docs Official Reference',
    },
    description: {
      ar: 'الموسوعة الأكثر موثوقية وشهرة لتوثيق كل وسوم HTML وميزات CSS ومعايير JavaScript.',
      en: 'The definitive encyclopedia for HTML elements, CSS properties, and Web APIs.',
    },
    category: 'documentation',
    url: 'https://developer.mozilla.org',
    isExternal: true,
    badge: 'Essential',
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
    id: 'res-tailwind-cheatsheet',
    title: {
      ar: 'ورقة مساعدة سريعة لأوامر Tailwind CSS',
      en: 'Tailwind CSS Quick Reference',
    },
    description: {
      ar: 'البحث السريع عن فئات الألوان والهوامش والـ Flexbox والـ Grid دون حفظ الأسماء.',
      en: 'Instant lookup for Tailwind utility classes, flex, grid, and breakpoints.',
    },
    category: 'cheat-sheet',
    url: 'https://tailwindcss.com/docs',
    isExternal: true,
    badge: 'Cheat Sheet',
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
