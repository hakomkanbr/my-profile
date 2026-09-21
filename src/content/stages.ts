/**
 * WEB CREATOR AI — The 7 Learning Journey Stages
 * LEARN → BUILD → PRACTICE → USE AI → LAUNCH → MARKET
 */

import { JourneyStage } from '@/types';

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: '01-think',
    order: 1,
    number: '01',
    code: 'THINK',
    title: {
      ar: 'التفكير وتحليل الفكرة',
      en: 'Think & Analyze the Web',
    },
    tagline: {
      ar: 'فهم كيف يعمل الويب، وتحويل الفكرة إلى هيكل تقني قابل للتنفيذ.',
      en: 'Understand how the web works and turn abstract ideas into actionable web architecture.',
    },
    description: {
      ar: 'قبل كتابة سطر كود واحد، نتعلم كيف نفكر كمهندسي ويب، فهم نموذج العميل والخادم، وتحليل متطلبات المشروع.',
      en: 'Before writing a single line of code, learn how web engineers think, understand client-server dynamics, and analyze project requirements.',
    },
    philosophyStep: 'LEARN',
    icon: 'Lightbulb',
    color: {
      primary: '#0f2b48',
      secondary: '#2563eb',
      border: '#dbeafe',
      bgGlow: 'rgba(15, 43, 72, 0.08)',
    },
    associatedModuleIds: ['module-01'],
  },
  {
    id: '02-design',
    order: 2,
    number: '02',
    code: 'DESIGN',
    title: {
      ar: 'تصميم تجربة المستخدم (UI/UX)',
      en: 'UI/UX & Design Systems',
    },
    tagline: {
      ar: 'هندسة تجربة بصرية سهلة ومقنعة تبني ثقة الزائر من الثانية الأولى.',
      en: 'Crafting intuitive visual experiences that build user trust from the very first second.',
    },
    description: {
      ar: 'مبادئ التصميم الحديث، التسلسل البصري، نظرية الألوان، التيبوغرافي، وتجهيز Wireframes قابلة للتحويل إلى كود.',
      en: 'Modern design principles, visual hierarchy, color theory, typography, and wireframing ready for code transformation.',
    },
    philosophyStep: 'PRACTICE',
    icon: 'Palette',
    color: {
      primary: '#1e3a5f',
      secondary: '#3b82f6',
      border: '#cbd5e1',
      bgGlow: 'rgba(30, 58, 95, 0.08)',
    },
    associatedModuleIds: ['module-02'],
  },
  {
    id: '03-build',
    order: 3,
    number: '03',
    code: 'BUILD',
    title: {
      ar: 'بناء الأساس البرمجي (HTML5 & Modern CSS)',
      en: 'Solid Foundations (HTML & CSS)',
    },
    tagline: {
      ar: 'كتابة شيفرة نظيفة متوافقة مع محركات البحث وتصميم متجاوب مع كافة الشاشات.',
      en: 'Writing clean semantic HTML5 markup and modern responsive Tailwind CSS layouts.',
    },
    description: {
      ar: 'إتقان هيكلية HTML5 الدلالية، أحدث خصائص CSS و Flexbox و Grid، وبناء مكونات متجاوبة عالية الدقة.',
      en: 'Mastering semantic markup, modern CSS layouts, accessibility standards, and production design tokens.',
    },
    philosophyStep: 'BUILD',
    icon: 'Code2',
    color: {
      primary: '#0f2b48',
      secondary: '#2563eb',
      border: '#bfdbfe',
      bgGlow: 'rgba(15, 43, 72, 0.08)',
    },
    associatedModuleIds: ['module-03', 'module-04'],
  },
  {
    id: '04-develop',
    order: 4,
    number: '04',
    code: 'DEVELOP',
    title: {
      ar: 'التطوير التفاعلي المتقدم (JavaScript & Next.js)',
      en: 'Interactive Engineering (JS, React & Next.js)',
    },
    tagline: {
      ar: 'بث الحياة في الواجهات بمكونات ذكية وتطبيقات ويب سريعة وحديثة.',
      en: 'Breathing life into interfaces with modular components and performant web apps.',
    },
    description: {
      ar: 'منطق JavaScript المتقدم، معمارية مكونات React، و Next.js App Router مع ميزات الـ Server Components و التوجيه الديناميكي.',
      en: 'Modern JavaScript logic, React component architecture, and Next.js App Router with Server Components.',
    },
    philosophyStep: 'BUILD',
    icon: 'Layers',
    color: {
      primary: '#1d4ed8',
      secondary: '#60a5fa',
      border: '#dbeafe',
      bgGlow: 'rgba(29, 78, 216, 0.08)',
    },
    associatedModuleIds: ['module-05', 'module-06', 'module-07'],
  },
  {
    id: '05-enhance',
    order: 5,
    number: '05',
    code: 'ENHANCE',
    title: {
      ar: 'التطوير المدعوم بالذكاء الاصطناعي (AI-Assisted Dev)',
      en: 'AI-Assisted Development',
    },
    tagline: {
      ar: 'مضاعفة سرعة الإنتاج باستخدام الذكاء الاصطناعي كمساعد برمجي شريك.',
      en: 'Supercharge development speed using AI as a pair-programmer and copilot.',
    },
    description: {
      ar: 'صياغة الموجهات البرمجية الدقيقة (Prompt Engineering for Devs)، تصحيح الأخطاء، توليد المكونات، وبناء مميزات ذكية داخل الموقع.',
      en: 'Engineering precise code prompts, automated debugging, component synthesis, and embedding smart AI features.',
    },
    philosophyStep: 'USE AI',
    icon: 'Sparkles',
    color: {
      primary: '#0f2b48',
      secondary: '#d97706',
      border: '#fde68a',
      bgGlow: 'rgba(217, 119, 6, 0.08)',
    },
    associatedModuleIds: ['module-08'],
  },
  {
    id: '06-launch',
    order: 6,
    number: '06',
    code: 'LAUNCH',
    title: {
      ar: 'تحسين الأداء والإطلاق الحي (SEO & Deployment)',
      en: 'SEO, Performance & Live Deployment',
    },
    tagline: {
      ar: 'إيصال موقعك للعالم الحقيقي بأعلى سرعة وأفضل ظهور في محركات البحث.',
      en: 'Deploying real-world web applications with optimal Core Web Vitals and search rankings.',
    },
    description: {
      ar: 'تحسين محركات البحث التقني، البيانات المنظمة (Metadata & OpenGraph)، تدقيق الأداء بمقاييس Lighthouse، والنشر السحابي المستمر (CI/CD).',
      en: 'Technical SEO, OpenGraph metadata, Core Web Vitals audit, and continuous cloud deployment.',
    },
    philosophyStep: 'LAUNCH',
    icon: 'Rocket',
    color: {
      primary: '#0f2b48',
      secondary: '#2563eb',
      border: '#cbd5e1',
      bgGlow: 'rgba(15, 43, 72, 0.08)',
    },
    associatedModuleIds: ['module-09'],
  },
  {
    id: '07-grow',
    order: 7,
    number: '07',
    code: 'GROW',
    title: {
      ar: 'النمو والتسويق والعمل الحر (Market & Monetize)',
      en: 'Marketing, Personal Brand & Freelancing',
    },
    tagline: {
      ar: 'تحويل مهاراتك وموقعك إلى فرص عمل وعملاء حقيقيين وبراند شخصي قوي.',
      en: 'Transforming technical skill and web assets into client projects, career growth, and strong personal branding.',
    },
    description: {
      ar: 'بناء معرض أعمال احترافي (Portfolio)، استراتيجيات التسويق الرقمي لجذب الزوار، تسعير الخدمات البرمجية، واقتناص عقود العمل الحر.',
      en: 'Building an authoritative portfolio, digital marketing funnels, freelance pricing models, and client acquisition.',
    },
    philosophyStep: 'MARKET',
    icon: 'TrendingUp',
    color: {
      primary: '#b45309',
      secondary: '#f59e0b',
      border: '#fef3c7',
      bgGlow: 'rgba(180, 83, 9, 0.08)',
    },
    associatedModuleIds: ['module-10'],
  },
];
