import { LocalizedString } from '@/types';

export interface Course {
  id: string;
  code: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  status: 'available' | 'coming-soon';
  href?: string;
  topics: string[];
  level: LocalizedString;
}

export const ALL_COURSES: Course[] = [
  {
    id: 'course-web-creator-ai',
    code: 'WCA-01',
    title: {
      ar: 'WEB CREATOR AI',
      en: 'WEB CREATOR AI',
    },
    tagline: {
      ar: 'مسار عملي لتطوير تطبيقات الويب والاستفادة من أدوات الذكاء الاصطناعي.',
      en: 'Hands-on track for modern web development and AI workflow integration.',
    },
    description: {
      ar: 'منهج تطبيقي يغطي دورة بناء الويب الكاملة: من التحليل وتصميم الواجهات، إلى كتابة كود Next.js وTypeScript، وتوظيف أدوات الذكاء الاصطناعي، وصولاً إلى الإطلاق الحي.',
      en: 'Comprehensive engineering curriculum covering the end-to-end lifecycle: analysis, UI/UX, Next.js, TypeScript, AI tooling, and live deployment.',
    },
    status: 'available',
    href: '/web-creator-ai',
    topics: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AI Tooling', 'SEO & Deployment'],
    level: {
      ar: 'تطبيقي متكامل',
      en: 'Comprehensive Practical',
    },
  },
];
