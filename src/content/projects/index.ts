/**
 * WEB CREATOR AI — Projects Registry
 * Hands-on real-world projects matching the philosophy:
 * LEARN → BUILD → PRACTICE → USE AI → LAUNCH → MARKET
 */

import { Project } from '@/types';

export const ALL_PROJECTS: Project[] = [
  {
    id: 'PRJ-01',
    code: 'PRJ-01',
    stageId: '03-build',
    moduleId: 'module-04',
    level: 'Beginner',
    title: {
      ar: 'صفحة هبوط تسويقية متجاوبة فائقة السرعة (High-Converting Landing Page)',
      en: 'High-Converting Responsive Landing Page',
    },
    tagline: {
      ar: 'بناء صفحة هبوط متجاوبة بالكامل باستخدام HTML5 و Tailwind CSS مع هوية بصرية متميزة.',
      en: 'Building a fully responsive, pixel-perfect landing page using HTML5 and Tailwind CSS.',
    },
    description: {
      ar: 'المشروع التطبيقي الأول: ستقوم بتحويل فكرة منتج حقيقي إلى صفحة هبوط متكاملة تشمل قسم Hero، شبكة الميزات (Feature Grid)، شهادات العملاء (Testimonials)، وجدول الأسعار (Pricing Table)، وقسم اتخاذ القرار (CTA).',
      en: 'First hands-on milestone: Transform a product concept into an end-to-end landing page with Hero, Feature Grid, Testimonials, Pricing, and CTA.',
    },
    targetOutput: {
      ar: 'صفحة هبوط منشورة على رابط مباشر متوافقة 100% مع الهواتف والحواسيب ومُنسقة بأحدث تقنيات Tailwind.',
      en: 'A live landing page deployed to the web, 100% responsive, styled with modern Tailwind CSS.',
    },
    techStack: ['HTML5 Semantic', 'Tailwind CSS', 'Mobile-First Design', 'Vercel'],
    aiToolsRecommended: ['v0.dev for rapid prototyping', 'ChatGPT / Claude for copywriting'],
    milestones: [
      {
        id: 'ms-01',
        title: {
          ar: 'تحديد الهيكلية الدلالية ومخطط الصفحة',
          en: 'Semantic Wireframing & Page Structure',
        },
        description: {
          ar: 'كتابة هيكل الـ HTML5 الدلالي النظيف وتحديد أماكن الصور والنصوص.',
          en: 'Drafting semantic HTML5 elements and layout hierarchy.',
        },
        tasks: [
          {
            id: 't-01',
            title: { ar: 'بناء قسم الترويسة وشريط التنقل المتجاوب (Navbar)', en: 'Build accessible header & navigation' },
            isKeyDeliverable: true,
          },
          {
            id: 't-02',
            title: { ar: 'بناء قسم الـ Hero مع زر الإجراء الرئيسي والعنوان الجذاب', en: 'Design high-impact Hero banner with CTA' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-02',
        title: {
          ar: 'التنسيق والجماليات والتجاوب بـ Tailwind CSS',
          en: 'Styling, Aesthetics & Responsiveness',
        },
        description: {
          ar: 'تطبيق نظام الألوان وتدرجات الظلال وضمان السلاسة على شاشات الهواتف.',
          en: 'Applying brand tokens, subtle shadows, and ensuring mobile responsiveness.',
        },
        tasks: [
          {
            id: 't-03',
            title: { ar: 'تنسيق شبكة الميزات بـ CSS Grid / Flexbox', en: 'Style responsive feature grid' },
            isKeyDeliverable: true,
          },
          {
            id: 't-04',
            title: { ar: 'اختبار العرض على شاشات الموبايل والشاشات العريضة', en: 'Test mobile breakpoints and typography' },
            isKeyDeliverable: true,
          },
        ],
      },
    ],
    tipsForSuccess: [
      {
        ar: 'ابدأ بتصميم شاشة الموبايل أولاً (Mobile-First) ثم وسع التنسيقات للشاشات الأكبر.',
        en: 'Design mobile-first before scaling up to tablet and desktop viewports.',
      },
      {
        ar: 'حافظ على التباين اللوني العالي لتسهيل قراءة النصوص للمستخدم.',
        en: 'Maintain high contrast ratios to ensure effortless readability.',
      },
    ],
  },
  {
    id: 'PRJ-02',
    code: 'PRJ-02',
    stageId: '04-develop',
    moduleId: 'module-07',
    level: 'Intermediate',
    title: {
      ar: 'تطبيق ويب تفاعلي متكامل بـ React و Next.js (Interactive Web App)',
      en: 'Dynamic Interactive Web Application (Next.js & React)',
    },
    tagline: {
      ar: 'بناء تطبيق ويب تفاعلي مع إدارة الحالة واستدعاء البيانات وحفظ تفضيلات المستخدم.',
      en: 'Building a dynamic app with client/server components, state management, and API integration.',
    },
    description: {
      ar: 'المشروع التطبيقي الثاني: الانتقال إلى عالم الويب الديناميكي ببناء تطبيق ويب يتيح للمستخدمين البحث، الفلترة، إدارة البيانات التفاعلية، وحفظ التفضيلات في التخزين المحلي.',
      en: 'Second milestone: Transition to dynamic web development building an app with search, filtering, and local persistence.',
    },
    targetOutput: {
      ar: 'تطبيق ويب متكامل سريع الاستجابة مبني بـ Next.js مع معمارية مكونات قابلة لإعادة الاستخدام.',
      en: 'A high-performance interactive Next.js application with modular, reusable components.',
    },
    techStack: ['Next.js App Router', 'React Hooks', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    aiToolsRecommended: ['Cursor / Copilot for state logic', 'Claude for refactoring'],
    milestones: [],
    tipsForSuccess: [],
  },
  {
    id: 'PRJ-CAPSTONE',
    code: 'CAPSTONE',
    stageId: '07-grow',
    moduleId: 'module-10',
    level: 'Capstone',
    title: {
      ar: 'المشروع النهائي المتكامل: الموقع الإنتاجي الحقيقي (The Live Capstone Web Platform)',
      en: 'The Live Capstone: From Concept to Production & Market',
    },
    tagline: {
      ar: 'من الفكرة إلى موقع ويب حقيقي جاهز للإطلاق والتسويق مع تدقيق SEO وتجهيز معرض الأعمال.',
      en: 'From idea to a live, marketed web application with custom domain, SEO audit, and portfolio pitch.',
    },
    description: {
      ar: 'تتويج الرحلة التعليمية بأكملها: بناء مشروعك الحقيقي الخاص (سواء كان معرض أعمال احترافي، موقع لخدمة تجارية، أو منصة تفاعلية) ونشره على الإنترنت وتجهيز خطة تسويقه وجلب العملاء.',
      en: 'The culmination of your journey: Building your own signature project, launching it on a custom domain, and crafting its client acquisition funnel.',
    },
    targetOutput: {
      ar: 'موقع ويب حقيقي مباشر على الإنترنت حاصل على أعلى درجات الأداء في Lighthouse وجاهز للعرض على العملاء.',
      en: 'A live production website with optimal Lighthouse performance, ready to pitch to clients.',
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Features', 'SEO Meta', 'Vercel Deployment'],
    aiToolsRecommended: ['ChatGPT for SEO copywriting', 'v0 for UI variations', 'Cursor for code polish'],
    milestones: [],
    tipsForSuccess: [],
  },
];
