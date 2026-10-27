/**
 * Training Courses Registry
 */

import { LocalizedString } from '@/types';

export interface CourseEntry {
  id: string;
  code: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  level: LocalizedString;
  topics: string[];
  href?: string;
  status: 'available' | 'coming-soon';
}

export const ALL_COURSES: CourseEntry[] = [
  {
    id: 'course-web-creator-ai',
    code: 'WCA-101',
    title: {
      ar: 'WEB CREATOR AI',
      en: 'WEB CREATOR AI',
    },
    tagline: {
      ar: 'من الفكرة إلى موقع منشور على الإنترنت بمساعدة الذكاء الاصطناعي',
      en: 'From Idea to a Published Website Powered by AI',
    },
    description: {
      ar: 'مسار تدريبي عملي مكوّن من 12 جلسة، تتعلم فيه خطوة بخطوة كيف تخطط لموقعك، تصمم واجهاته، تكتب الكود الأساسي، وتستخدم الذكاء الاصطناعي لتسريع العمل حتى نشر مشروعك واستقبال الملاحظات عبر واتساب.',
      en: 'A practical 12-session training track where you learn step by step how to plan your website, design clean interfaces, write core code, use AI effectively, and publish your project with direct WhatsApp feedback.',
    },
    level: {
      ar: 'من المبتدئ إلى الإطلاق الفعلي',
      en: 'Beginner to Live Launch',
    },
    topics: ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'AI Prompting', 'Live Deployment'],
    href: '/web-creator-ai',
    status: 'available',
  },
  {
    id: 'course-dotnet-clean-arch',
    code: 'ARC-201',
    title: {
      ar: 'تطوير الأنظمة الخلفية وواجهات البرمجة (.NET Core)',
      en: 'Backend Systems & API Development (.NET Core)',
    },
    tagline: {
      ar: 'بناء أنظمة خلفية منظمة وقواعد بيانات جاهزة للمشاريع الحقيقية',
      en: 'Building Organized Backend Systems & Databases for Real Projects',
    },
    description: {
      ar: 'مسار مخصص للمطورين الراغبين في تعلم كيفية تنظيم الأنظمة الخلفية (Back-End)، بناء واجهات برمجة آمنة، وإدارة قواعد البيانات باستخدام .NET Core وPostgreSQL.',
      en: 'A focused track for developers looking to structure backend applications, build secure REST APIs, and manage PostgreSQL databases using .NET Core.',
    },
    level: {
      ar: 'متوسط إلى متقدم',
      en: 'Intermediate to Advanced',
    },
    topics: ['.NET Core', 'Clean Architecture', 'PostgreSQL', 'REST APIs', 'Docker'],
    status: 'coming-soon',
  },
];
