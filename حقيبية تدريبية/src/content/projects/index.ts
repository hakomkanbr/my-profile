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
    estimatedHours: 6,
    title: {
      ar: 'صفحة هبوط تسويقية متجاوبة فائقة السرعة (High-Converting Landing Page)',
      en: 'High-Converting Responsive Landing Page',
    },
    tagline: {
      ar: 'بناء صفحة هبوط متجاوبة بالكامل باستخدام HTML5 و Tailwind CSS مع هوية بصرية متميزة.',
      en: 'Building a fully responsive, pixel-perfect landing page using HTML5 and Tailwind CSS.',
    },
    description: {
      ar: 'المشروع التطبيقي الأول: ستقوم بتحويل فكرة منتج حقيقي إلى صفحة هبوط متكاملة تشمل قسم Hero جذاب، شبكة الميزات (Feature Grid)، شهادات العملاء (Testimonials)، جدول الأسعار (Pricing Table)، وقسم اتخاذ القرار النهائي (CTA) مع نشر مباشر على Vercel.',
      en: 'First hands-on milestone: Transform a real product idea into an end-to-end landing page featuring Hero, Feature Grid, Testimonials, Pricing Table, and High-Converting CTA deployed to Vercel.',
    },
    targetOutput: {
      ar: 'صفحة هبوط منشورة على رابط مباشر متوافقة 100% مع الهواتف والحواسيب ومُنسقة بأحدث تقنيات Tailwind CSS ومحققة لأعلى سرعة تحميل.',
      en: 'A live landing page deployed to the web, 100% responsive, styled with modern Tailwind CSS with optimal page-speed metrics.',
    },
    techStack: ['HTML5 Semantic', 'Tailwind CSS', 'Mobile-First Design', 'Vercel Deployment'],
    aiToolsRecommended: [
      'v0.dev — لتوليد مسودات واجهة الـ Hero والميزات بسرعة البرق',
      'Claude / ChatGPT — لصياغة نصوص تسويقية مقنعة (Copywriting) وعناوين جذابة',
      'Cursor / VS Code — لإتقان تنسيقات Tailwind وضبط تباين الألوان',
    ],
    aiMasterPrompt: {
      ar: `تصرف كمهندس واجهات خبير ومصمم UI/UX رفيع المستوى. أريد منك بناء كود صفحة هبوط حديثة متكاملة لمنتج SaaS باستخدام HTML5 و Tailwind CSS.

المتطلبات:
1. قسم Hero جذاب مع شارة علوية، عنوان رئيسي تسويقي مقنع، نص فرعي، زري اتخاذ قرار (Primary & Secondary)، وصورة توضيحية.
2. شبكة ميزات (Features Grid) ثلاثية الأعمدة مع أيقونات جذابة ومربعات ناعمة التأثير.
3. قسم شهادات العملاء وقسم جدول الأسعار (3 خطط: Basic, Pro, Enterprise).
4. قسم اتخاذ قرار نهائي (CTA Banner) مع تذييل صفحة نظيف وروابط تواصل.
5. الالتزام الصارم بالتصميم المتجاوب (Mobile-First) ودعم الاتجاهين RTL/LTR.`,
      en: `Act as a senior frontend engineer and UI/UX expert. Build a high-converting modern SaaS landing page using HTML5 and Tailwind CSS.
Requirements:
1. High-impact Hero with badge, killer value proposition, subheadline, dual CTAs, and preview graphic.
2. Responsive 3-column Feature Grid with micro-interactions.
3. Social proof testimonials and 3-tier pricing table.
4. Final conversion CTA and clean footer.
5. Strictly mobile-first and fully accessible.`,
    },
    fileStructureTree: `landing-page/
├── index.html          # الهيكل الدلالي الدقيق للصفحة
├── styles/
│   └── globals.css     # استيراد Tailwind والمتغيرات اللونية
├── assets/
│   └── images/         # الصور والشعارات المحسنة
└── README.md           # توثيق المشروع ورابط النشر`,
    starterCodeLang: 'html',
    starterCodeSnippet: `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>منتجك الرائد — حلول الجيل القادم</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-900 antialiased">
  <!-- Navbar -->
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div class="text-xl font-bold text-blue-600">CREATOR<span class="text-slate-900">AI</span></div>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#features" class="hover:text-blue-600">المميزات</a>
        <a href="#pricing" class="hover:text-blue-600">الأسعار</a>
        <a href="#testimonials" class="hover:text-blue-600">آراء العملاء</a>
      </nav>
      <a href="#cta" class="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">ابدأ الآن مجاناً</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="py-20 px-4 text-center max-w-4xl mx-auto">
    <span class="px-3 py-1 text-xs font-mono font-bold text-blue-700 bg-blue-100 rounded-full">إطلاق رسمي 2025</span>
    <h1 class="mt-6 text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
      ابنِ مواقعك بسرعة البرق بالذكاء الاصطناعي
    </h1>
    <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
      حوّل أفكارك إلى منصات وتطبيقات ويب متكاملة جاهزة للإنتاج والتسويق في ساعات معدودة.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <a href="#cta" class="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/25">
        ابدأ تجربتك المجانية
      </a>
      <a href="#demo" class="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-100">
        مشاهدة العرض الحي
      </a>
    </div>
  </section>
</body>
</html>`,
    milestones: [
      {
        id: 'ms-01',
        title: {
          ar: 'تحديد الهيكلية الدلالية ومخطط الصفحة (Wireframing & HTML5)',
          en: 'Semantic Wireframing & Page Structure',
        },
        description: {
          ar: 'كتابة هيكل الـ HTML5 الدلالي النظيف وتحديد تتابع الأقسام بدون تنسيقات مسبقة.',
          en: 'Drafting semantic HTML5 elements and logical layout hierarchy.',
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
          {
            id: 't-03',
            title: { ar: 'تجهيز هيكل شبكة الميزات (Feature Grid) وجدول الأسعار', en: 'Draft markup for feature grid and pricing cards' },
            isKeyDeliverable: false,
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
          ar: 'تطبيق نظام الألوان وتدرجات الظلال وضمان السلاسة التامة على شاشات الهواتف والحواسيب.',
          en: 'Applying brand tokens, subtle shadows, and ensuring mobile responsiveness.',
        },
        tasks: [
          {
            id: 't-04',
            title: { ar: 'تنسيق شبكة الميزات بـ CSS Grid والبطاقات التفاعلية', en: 'Style responsive feature grid' },
            isKeyDeliverable: true,
          },
          {
            id: 't-05',
            title: { ar: 'بناء بطاقات جدول الأسعار مع إبراز الخطة الموصى بها (Popular Tier)', en: 'Style pricing cards highlighting the recommended plan' },
            isKeyDeliverable: true,
          },
          {
            id: 't-06',
            title: { ar: 'اختبار العرض على شاشات الموبايل والشاشات العريضة (Mobile-First)', en: 'Test mobile breakpoints and typography scale' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-03',
        title: {
          ar: 'تدقيق الأداء وسرعة التحميل والنشر على Vercel',
          en: 'Performance Optimization & Deployment',
        },
        description: {
          ar: 'ضغط الصور، فحص مؤشرات الأداء عبر Google Lighthouse، وربط المستودع بـ Vercel.',
          en: 'Compress assets, audit Lighthouse scores, and deploy to Vercel.',
        },
        tasks: [
          {
            id: 't-07',
            title: { ar: 'ضغط الصور وتحسين وسوم الميتا لمحركات البحث (SEO Meta & Favicon)', en: 'Optimize images and inject essential SEO meta tags' },
            isKeyDeliverable: true,
          },
          {
            id: 't-08',
            title: { ar: 'نشر المشروع على Vercel أو Netlify والحصول على رابط حي ومستودع GitHub', en: 'Deploy project to Vercel and secure live URL' },
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
        ar: 'حافظ على التباين اللوني العالي (Contrast Ratio 4.5:1 على الأقل) لتسهيل قراءة النصوص.',
        en: 'Maintain high contrast ratios to ensure effortless readability.',
      },
      {
        ar: 'اجعل زر الإجراء الرئيسي (CTA) واضحاً ومتكرراً بشكل ذكي في أعلى وأسفل الصفحة.',
        en: 'Keep your primary CTA prominent and repeated strategically at top and bottom.',
      },
    ],
  },
  {
    id: 'PRJ-02',
    code: 'PRJ-02',
    stageId: '04-develop',
    moduleId: 'module-07',
    level: 'Intermediate',
    estimatedHours: 8,
    title: {
      ar: 'تطبيق ويب تفاعلي لإدارة المهام وتدفق البيانات (Interactive Task & Project Flow App)',
      en: 'Interactive Task & Project Flow App (Next.js & Zustand)',
    },
    tagline: {
      ar: 'بناء تطبيق ويب ديناميكي مع إدارة الحالة واستدعاء البيانات وحفظ تفضيلات المستخدم محلياً.',
      en: 'Building a dynamic app with client/server components, state management, and LocalStorage persistence.',
    },
    description: {
      ar: 'المشروع التطبيقي الثاني: الانتقال إلى عالم الويب التفاعلي ببناء تطبيق إنتاجي كامل لإدارة المهام والمشاريع. يتيح للمستخدمين إضافة المهام، تصنيفها، وسم الأولويات، الفلترة الفورية، والبحث السريع، مع حفظ تلقائي محلي (Offline-First) لضمان عدم ضياع البيانات.',
      en: 'Second hands-on milestone: Transition to dynamic web engineering by creating a production-grade task flow application. Features task CRUD, live search, multi-filter tags, and offline-first LocalStorage persistence.',
    },
    targetOutput: {
      ar: 'تطبيق ويب متكامل سريع الاستجابة مبني بـ Next.js مع معمارية مكونات قابلة لإعادة الاستخدام وإدارة حالة موحدة بـ Zustand.',
      en: 'A high-performance interactive Next.js application with modular, reusable components and Zustand state.',
    },
    techStack: ['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'LocalStorage'],
    aiToolsRecommended: [
      'Cursor / GitHub Copilot — لتوليد دالات إدارة الحالة (State Mutators) وأنماط TypeScript',
      'Claude 3.5 Sonnet — لمراجعة بنية المكونات وتفكيكها إلى Modular Atomic Components',
      'v0.dev — لبناء شريط التصفح الجانبي (Sidebar) ونوافذ المودال (Modals)',
    ],
    aiMasterPrompt: {
      ar: `تصرف كمهندس React/Next.js محترف. أريد منك بناء تطبيق ويب تفاعلي لإدارة المهام والمشاريع باستخدام:
1. Next.js 15 (App Router) مع TypeScript.
2. Zustand لإدارة الحالة مع دمج LocalStorage تلقائياً.
3. واجهة عصرية بـ Tailwind CSS تدعم الوضع الليلي والنهاري ودعم كامل لـ RTL.
الميزات المطلوبة:
- إنشاء / تعديل / حذف المهام (CRUD).
- تصنيف المهام حسب الحالة (جديدة، قيد التنفيذ، مكتملة) والأولوية (عالية، متوسطة، منخفضة).
- شريط بحث فوري وفلترة حية حسب الوسم أو الحالة.
- عدادات إحصائية سريعة لنسبة الإنجاز.`,
      en: `Act as a senior React/Next.js engineer. Build an interactive Task & Flow web application using Next.js 15 App Router, TypeScript, Zustand, and Tailwind CSS with LocalStorage persistence. Implement full CRUD, status boards, real-time search, priority badges, and bilingual RTL support.`,
    },
    fileStructureTree: `task-flow-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # الغلاف الجذري ونظام الثيمات
│   │   └── page.tsx           # اللوحة الرئيسية للمهام
│   ├── components/
│   │   ├── TaskCard.tsx       # بطاقة المهمة التفاعلية
│   │   ├── TaskModal.tsx      # نافذة إنشاء وتعديل المهمة
│   │   └── TaskFilterBar.tsx  # شريط البحث والفلترة
│   ├── store/
│   │   └── task-store.ts      # مخزن الحالة بـ Zustand و LocalStorage
│   └── types/
│       └── task.ts            # تعريف الواجهات والأنماط بـ TypeScript`,
    starterCodeLang: 'typescript',
    starterCodeSnippet: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface TaskItem {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

interface TaskStore {
  tasks: TaskItem[];
  filterStatus: 'all' | 'todo' | 'in_progress' | 'completed';
  searchQuery: string;
  addTask: (task: Omit<TaskItem, 'id' | 'createdAt'>) => void;
  toggleTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
  setFilter: (status: TaskStore['filterStatus']) => void;
  setSearch: (query: string) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      filterStatus: 'all',
      searchQuery: '',
      addTask: (newTask) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { ...newTask, id: 'tsk-' + Date.now(), createdAt: new Date().toISOString() },
          ],
        })),
      toggleTaskStatus: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id
              ? { ...t, status: t.status === 'completed' ? 'todo' : 'completed' }
              : t
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
      setFilter: (filterStatus) => set({ filterStatus }),
      setSearch: (searchQuery) => set({ searchQuery }),
    }),
    { name: 'web-creator-tasks-v1' }
  )
);`,
    milestones: [
      {
        id: 'ms-01',
        title: {
          ar: 'تأسيس بنية المكونات والأنماط بـ TypeScript',
          en: 'TypeScript Schemas & Component Architecture',
        },
        description: {
          ar: 'تعريف واجهات البيانات الصارمة (TaskItem, FilterState) وتجهيز المكونات الأساسية.',
          en: 'Establish TypeScript interfaces and modular component primitives.',
        },
        tasks: [
          {
            id: 't-01',
            title: { ar: 'إنشاء ملف types/task.ts مع تعريف الحقول وحالات المهام', en: 'Create TypeScript interfaces for tasks and filter states' },
            isKeyDeliverable: true,
          },
          {
            id: 't-02',
            title: { ar: 'بناء بطاقة المهمة (TaskCard) مع وسوم الأولويات والأزرار', en: 'Build reusable TaskCard with priority badges' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-02',
        title: {
          ar: 'إدارة الحالة واستمرارية البيانات بـ Zustand',
          en: 'State Management & Offline Persistence',
        },
        description: {
          ar: 'ربط Zustand مع middleware الـ persist لضمان بقاء المهام محفوظة داخل LocalStorage.',
          en: 'Configure Zustand store with LocalStorage persistence.',
        },
        tasks: [
          {
            id: 't-03',
            title: { ar: 'تطبيق دوال الإضافة والحذف والتعديل (CRUD Actions)', en: 'Implement task CRUD mutations in Zustand store' },
            isKeyDeliverable: true,
          },
          {
            id: 't-04',
            title: { ar: 'تفعيل فلترة المهام والبحث الفوري بدون إعادة تحميل الصفحة', en: 'Implement instant search and multi-status filter' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-03',
        title: {
          ar: 'التحسينات الحركية والتسليم النهائي',
          en: 'UX Polish, Micro-interactions & Deployment',
        },
        description: {
          ar: 'إضافة تنبيهات نجاح الإجراءات، وتأثيرات حركية ناعمة، ونشر التطبيق على الإنترنت.',
          en: 'Add toast notifications, smooth modal transitions, and deploy to Vercel.',
        },
        tasks: [
          {
            id: 't-05',
            title: { ar: 'بناء نافذة Modal لإضافة مهمة جديدة مع التحقق من صحة الحقول', en: 'Build accessible modal form for task creation' },
            isKeyDeliverable: true,
          },
          {
            id: 't-06',
            title: { ar: 'نشر التطبيق على رابط مباشر وتوثيقه في ملف README', en: 'Deploy live demo to Vercel with clean repository docs' },
            isKeyDeliverable: true,
          },
        ],
      },
    ],
    tipsForSuccess: [
      {
        ar: 'استخدم Zustand مع الـ Middleware persist لتحقيق تجربة Offline-First سريعة بدون قاعدة بيانات معقدة.',
        en: 'Leverage Zustand persist middleware for lightning-fast offline-first persistence.',
      },
      {
        ar: 'احرص على عزل المكونات التي تتطلب تفاعلاً (Client Components) عن الصفحات العامة.',
        en: 'Strictly isolate interactive widgets as Client Components for maximum performance.',
      },
      {
        ar: 'اختبر حالة التطبيق الفارغة (Empty State) وقدم رسالة تشجيعية واضحة للمستخدم لإضافة أول مهمة.',
        en: 'Always design an inviting empty state to encourage trainees to add their first item.',
      },
    ],
  },
  {
    id: 'PRJ-03',
    code: 'PRJ-03',
    stageId: '05-enhance',
    moduleId: 'module-08',
    level: 'Advanced',
    estimatedHours: 10,
    title: {
      ar: 'استوديو ومولد محتوى الويب بالذكاء الاصطناعي (AI Web Studio & Prompt Engine)',
      en: 'AI Web Studio & Prompt Engine (Streaming & LLM)',
    },
    tagline: {
      ar: 'بناء منصة ذكية لتوليد محتوى وتصاميم الويب البرمجية لحظياً عبر واجهات الذكاء الاصطناعي التوليدي.',
      en: 'Building an interactive AI studio that generates live web copy, code snippets, and UI layouts.',
    },
    description: {
      ar: 'المشروع التطبيقي الثالث: دمج قدرات الذكاء الاصطناعي الحديثة في منتج ويب تجاري. ستقوم ببناء استوديو ذكي يستقبل طلبات المستخدم لتوليد نصوص صفحات الهبوط، استخراج أكواد Tailwind، واختبار الموجهات (Prompts) مع تدفق الردود لحظياً (Streaming Responses) وعارض كود ملون.',
      en: 'Third hands-on milestone: Harness generative AI inside a production-grade web product. Build an AI studio generating web copy, Tailwind UI blocks, and code snippets with realtime streaming and interactive sandboxing.',
    },
    targetOutput: {
      ar: 'منصة ويب متقدمة تتفاعل مع نماذج الذكاء الاصطناعي، توفر محرر موجهات ذكي، وتدفق نصي لحظي، وإمكانية نسخ وتصدير النتائج فوراً.',
      en: 'An advanced AI web platform with interactive prompt selector, realtime stream rendering, and one-click code export.',
    },
    techStack: ['Next.js App Router', 'OpenAI / Claude / Gemini API', 'Vercel AI SDK', 'Tailwind CSS', 'Syntax Highlighter'],
    aiToolsRecommended: [
      'Claude 3.5 Sonnet — لهندسة سلاسل الموجهات (Prompt Chaining) وضبط معايير الإخراج بدقة',
      'ChatGPT Plus / Codex — لتوليد مخطط الـ API Route وتدفق النصوص (Streaming Text)',
      'Cursor AI — لتسريع كتابة مكوّن عارض الكود وتنسيقات الـ Markdown',
    ],
    aiMasterPrompt: {
      ar: `أنت كبير مهندسي الذكاء الاصطناعي وتطبيقات الويب الحديثة. أريد منك بناء كود Next.js كامل لميزة مولد واجهات الويب (AI Component Generator):
المتطلبات:
1. API Route بـ Next.js App Router يستقبل وصف المكون من العميل ويعيد الرد بنمط Streaming.
2. واجهة مستخدم تضم:
   - صندوق إدخال الموجه مع اقتراحات سريعة (مثال: "صفحة هبوط لتطبيق توصيل"، "بطاقة تسعير زجاجية").
   - عارض كود ملون (Syntax Highlighter) مع زر نسخ فوري بنقرة واحدة.
   - نافذة تبديل بين عرض الكود (Code View) ومعاينة التصميم الحية (Live Sandbox Preview).
3. معالجة حالات الخطأ وانقطاع الاتصال ومؤشر تحميل نابض أنيق.`,
      en: `Act as a principal AI web engineer. Provide complete Next.js code for an AI Component Generator featuring a streaming API route, prompt suggestions, syntax-highlighted code viewer with instant copy, live preview toggle, and robust error boundaries.`,
    },
    fileStructureTree: `ai-studio-app/
├── src/
│   ├── app/
│   │   ├── api/generate/route.ts   # معالج استدعاء وتدفق الذكاء الاصطناعي
│   │   └── page.tsx                # واجهة الاستوديو التفاعلية
│   ├── components/
│   │   ├── PromptSelector.tsx      # بنك الموجهات الجاهزة للاختيار
│   │   ├── LivePreviewBox.tsx      # معاينة حية للمكون المولد
│   │   └── CodeDisplay.tsx         # عارض الكود مع زر النسخ والتصدير
│   └── lib/
│       └── ai-prompts.ts           # قوالب الموجهات البرمجية المعتمدة`,
    starterCodeLang: 'typescript',
    starterCodeSnippet: `// src/app/api/generate/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, framework } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Example response structure for AI code generator
    const generatedHtml = \`
      <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
        <h3 class="text-xl font-bold text-slate-900">\${prompt}</h3>
        <p class="mt-2 text-sm text-slate-600">تم توليد هذا المكون تلقائياً بأعلى معايير Tailwind CSS.</p>
        <button class="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
          تفاعل مع المكون
        </button>
      </div>
    \`.trim();

    return NextResponse.json({
      code: generatedHtml,
      tokensUsed: 142,
      model: 'web-creator-ai-v1',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}`,
    milestones: [
      {
        id: 'ms-01',
        title: {
          ar: 'تصميم واجهة الاستوديو وبنك الموجهات السريعة',
          en: 'Studio Interface & Prompt Library',
        },
        description: {
          ar: 'بناء نموذج الإدخال، أزرار النماذج المسبقة، وشريط اختيار التقنية المطلوبة.',
          en: 'Build the prompt input form, predefined suggestion pills, and tech target selector.',
        },
        tasks: [
          {
            id: 't-01',
            title: { ar: 'بناء حقل إدخال الموجه مع عداد الحروف وزر التوليد التفاعلي', en: 'Build responsive prompt input with submit trigger' },
            isKeyDeliverable: true,
          },
          {
            id: 't-02',
            title: { ar: 'توفير 4 قوالب موجهات جاهزة بنقرة واحدة (Hero, Cards, Footer, Pricing)', en: 'Add 4 instant starter prompt presets' },
            isKeyDeliverable: false,
          },
        ],
      },
      {
        id: 'ms-02',
        title: {
          ar: 'ربط واجهة البرمجة وتدفق الاستجابة لحظياً (Streaming API)',
          en: 'API Route & Realtime Streaming',
        },
        description: {
          ar: 'معالجة تدفق النصوص كلمة بكلمة لتقديم تجربة مستخدم فورية ومثيرة للإعجاب.',
          en: 'Implement server route handling text streaming to render outputs chunk by chunk.',
        },
        tasks: [
          {
            id: 't-03',
            title: { ar: 'إنشاء معالج الـ API ومعالجة مفاتيح البيئة بأمان (Environment Variables)', en: 'Secure API route with server-side environment secrets' },
            isKeyDeliverable: true,
          },
          {
            id: 't-04',
            title: { ar: 'عرض تدفق الكود مع مؤشر تحميل نابض (Typing Pulse Indicator)', en: 'Render live text stream with animated cursor' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-03',
        title: {
          ar: 'عارض الكود والمعاينة والتصدير المباشر',
          en: 'Code Viewer, Sandbox Preview & Export',
        },
        description: {
          ar: 'تلوين الشيفرة البرمجية، إتاحة التبديل لمعاينة الواجهة مباشرة، وزر النسخ السريع.',
          en: 'Syntax highlighting, sandbox live preview toggle, and quick copy/download features.',
        },
        tasks: [
          {
            id: 't-05',
            title: { ar: 'دمج مكتبة تلوين الأكواد وإضافة زر نسخ الكود بنقرة واحدة', en: 'Integrate syntax highlighter and one-click copy button' },
            isKeyDeliverable: true,
          },
          {
            id: 't-06',
            title: { ar: 'نشر الاستوديو وإتاحة تجربته الحية على Vercel', en: 'Deploy AI studio to production on Vercel' },
            isKeyDeliverable: true,
          },
        ],
      },
    ],
    tipsForSuccess: [
      {
        ar: 'لا تحفظ مفاتيح الـ API في كود العميل مطلقاً، اجعل جميع طلبات الذكاء الاصطناعي تمر عبر Server Routes.',
        en: 'Never expose API secrets on the client; route all LLM requests through secure server endpoints.',
      },
      {
        ar: 'قدم موجهات واضحة للنموذج تطلب إرجاع الكود النظيف فقط دون مقدمات أو ختاميات نصية تعيق المعاينة.',
        en: 'Instruct the LLM system prompt to return pure code snippets without chat fluff.',
      },
      {
        ar: 'وفر خيار تجربة بدون مفتاح (Mock Mode) لتمكين الزوار من اختبار الاستوديو فوراً.',
        en: 'Provide a graceful demo fallback mode so trainees can test immediately without billing setup.',
      },
    ],
  },
  {
    id: 'PRJ-04',
    code: 'PRJ-04',
    stageId: '06-launch',
    moduleId: 'module-09',
    level: 'Advanced',
    estimatedHours: 12,
    title: {
      ar: 'منصة متجر رقمي وسلة مشتريات عصرية (Modern SaaS / E-Commerce Storefront)',
      en: 'Modern SaaS / E-Commerce Storefront & Cart Flow',
    },
    tagline: {
      ar: 'بناء متجر إلكتروني فائق السرعة مع مسارات ديناميكية وسلة مشتريات منبثقة وصفحة إتمام الطلب.',
      en: 'Building a high-performance storefront with dynamic routing, sliding cart drawer, and checkout validation.',
    },
    description: {
      ar: 'المشروع التطبيقي الرابع: بناء منصة تجارة رقمية متكاملة تبيع منتجات أو خدمات. يتضمن المشروع كتالوج المنتجات الديناميكي، صفحات تفاصيل المنتجات المتوافقة مع الـ SEO، سلة مشتريات تفاعلية منبثقة، وتدقيق كامل لصفحة إنهاء الطلب ومحاكاة الدفع.',
      en: 'Fourth hands-on milestone: Build an end-to-end digital commerce platform. Covers dynamic catalog routing, SEO-optimized product detail pages, sliding cart drawer, and checkout flow simulation with strict validation.',
    },
    targetOutput: {
      ar: 'متجر ويب إلكتروني متكامل سريع للغاية مبني بـ Next.js مع معمارية Server Components، سلة مشتريات تفاعلية، وتجربة شراء سلسة.',
      en: 'A high-converting, lightning-fast digital storefront with Next.js Server Components, interactive cart state, and smooth checkout flow.',
    },
    techStack: ['Next.js App Router', 'Server Actions', 'Zod Validation', 'Tailwind CSS', 'Zustand Cart', 'Vercel Analytics'],
    aiToolsRecommended: [
      'v0.dev — لتوليد واجهات كتالوج المنتجات وصفحات الشراء عالية التحويل',
      'Cursor — لهندسة منطق سلة المشتريات والتحقق من صحة مدخلات الدفع بـ Zod',
      'ChatGPT — لكتابة أوصاف تسويقية احترافية للمنتجات وسياسات الاسترجاع',
    ],
    aiMasterPrompt: {
      ar: `أريد منك العمل كمهندس Full-Stack خبير في منصات التجارة الإلكترونية بـ Next.js.
قم بإنشاء كود لميزة سلة المشتريات وإتمام الطلب (E-Commerce Cart Drawer & Checkout):
1. Cart Store بـ Zustand لحساب إجمالي المشتريات، الضريبة، والخصومات تلقائياً مع الحفظ في LocalStorage.
2. سلة مشتريات منبثقة (Slide-over Drawer) مع إمكانية زيادة وإنقاص الكميات أو إزالة العناصر.
3. صفحة إتمام الطلب (Checkout) مع التحقق الصارم من الحقول (الاسم، البريد، العنوان، خيار الدفع) بـ Zod.
4. رسالة تأكيد الطلب ورقم تتبع رمزي عند إتمام الشراء بنجاح.`,
      en: `Act as a senior e-commerce full-stack engineer. Provide Next.js code for a shopping cart drawer and checkout flow. Include Zustand cart state with item quantities and tax calculations, accessible slide-over drawer, and Zod-validated checkout form with success confirmation.`,
    },
    fileStructureTree: `storefront-app/
├── src/
│   ├── app/
│   │   ├── products/
│   │   │   └── [slug]/page.tsx     # صفحة تفاصيل المنتج الديناميكية
│   │   ├── checkout/page.tsx       # صفحة إنهاء الطلب والتحقق
│   │   └── page.tsx                # كتالوج المتجر الرئيسي
│   ├── components/
│   │   ├── ProductGrid.tsx         # شبكة عرض المنتجات والفلترة
│   │   ├── CartDrawer.tsx          # سلة المشتريات المنبثقة
│   │   └── CheckoutForm.tsx        # استمارة الدفع والبيانات
│   └── store/
│       └── cart-store.ts           # إدارة سلة المشتريات وحساب الإجمالي`,
    starterCodeLang: 'typescript',
    starterCodeSnippet: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartProduct[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Omit<CartProduct, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (product) => {
        const current = get().items;
        const exists = current.find((i) => i.id === product.id);
        if (exists) {
          set({
            items: current.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            isOpen: true,
          });
        } else {
          set({ items: [...current, { ...product, quantity: 1 }], isOpen: true });
        }
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, qty) =>
        set({
          items: qty <= 0
            ? get().items.filter((i) => i.id !== id)
            : get().items.map((i) => (i.id === id ? { ...i, quantity: qty } : i)),
        }),
      clearCart: () => set({ items: [] }),
      getSubtotal: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    { name: 'storefront-cart-v1' }
  )
);`,
    milestones: [
      {
        id: 'ms-01',
        title: {
          ar: 'هندسة كتالوج المنتجات والمسارات الديناميكية',
          en: 'Product Catalog & Dynamic Routes',
        },
        description: {
          ar: 'بناء صفحة عرض المنتجات وتفعيل المسار الديناميكي [slug] مع وسوم OpenGraph.',
          en: 'Build responsive product grid and dynamic [slug] detail pages with OpenGraph metadata.',
        },
        tasks: [
          {
            id: 't-01',
            title: { ar: 'بناء شبكة المنتجات مع فلترة الفئات والأسعار', en: 'Build responsive product grid with category filters' },
            isKeyDeliverable: true,
          },
          {
            id: 't-02',
            title: { ar: 'تفعيل صفحة تفاصيل المنتج الفردي بمسار ديناميكي سريع', en: 'Implement dynamic [slug] detail page with SSR' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-02',
        title: {
          ar: 'سلة المشتريات التفاعلية المنبثقة (Cart Drawer)',
          en: 'Interactive Cart Slide-over Drawer',
        },
        description: {
          ar: 'بناء نافذة السلة مع إمكانية تعديل الكميات وحساب الإجمالي والضرائب فوراً.',
          en: 'Implement sliding cart drawer with live subtotal and quantity controls.',
        },
        tasks: [
          {
            id: 't-03',
            title: { ar: 'تطوير مخزن Zustand لحفظ عناصر السلة محلياً', en: 'Build Zustand cart store with LocalStorage persistence' },
            isKeyDeliverable: true,
          },
          {
            id: 't-04',
            title: { ar: 'بناء واجهة السلة المنبثقة مع زر الانتقال لإتمام الطلب', en: 'Style animated cart drawer with direct checkout CTA' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-03',
        title: {
          ar: 'استمارة إنهاء الطلب وتأكيد الشراء والنشر',
          en: 'Checkout Form, Validation & Production Launch',
        },
        description: {
          ar: 'التحقق من صحة بيانات المشتري وعرض صفحة نجاح الطلب ونشر المتجر على Vercel.',
          en: 'Validate checkout details with Zod and deploy production storefront to Vercel.',
        },
        tasks: [
          {
            id: 't-05',
            title: { ar: 'بناء استمارة الدفع مع التحقق الفوري من صحة المدخلات', en: 'Build accessible checkout form with field validation' },
            isKeyDeliverable: true,
          },
          {
            id: 't-06',
            title: { ar: 'إطلاق المتجر حياً على Vercel وتوثيق رحلة المستخدم الكاملة', en: 'Deploy live storefront to Vercel with verified order flow' },
            isKeyDeliverable: true,
          },
        ],
      },
    ],
    tipsForSuccess: [
      {
        ar: 'اجعل سلة المشتريات تفتح تلقائياً بنعومة عند إضافة أي منتج لمنح المتدرب إشعاراً مرئياً فورياً.',
        en: 'Auto-open the cart drawer gently upon adding an item for instant tactile visual feedback.',
      },
      {
        ar: 'احرص على تهيئة وسوم الميتا لكل منتج ديناميكياً لضمان ظهور صورته وعنوانه عند مشاركة الرابط على واتساب وتويتر.',
        en: 'Dynamically set OpenGraph image and title per product for compelling social share previews.',
      },
      {
        ar: 'استخدم صوراً خفيفة بصيغة WebP أو AVIF للحفاظ على سرعة تحميل ممتازة للمتجر.',
        en: 'Enforce optimized WebP/AVIF images to preserve 95+ Google Lighthouse speed scores.',
      },
    ],
  },
  {
    id: 'PRJ-CAPSTONE',
    code: 'CAPSTONE',
    stageId: '07-grow',
    moduleId: 'module-10',
    level: 'Capstone',
    estimatedHours: 20,
    title: {
      ar: 'المشروع النهائي المتكامل: الموقع الإنتاجي الحقيقي (The Live Capstone Web Platform)',
      en: 'The Live Capstone: From Concept to Production & Market',
    },
    tagline: {
      ar: 'من الفكرة إلى موقع ويب إنتاجي حقيقي منشور على دومين خاص مع تدقيق SEO وتجهيز خطة استقطاب العملاء.',
      en: 'From concept to a live, marketed production platform on a custom domain with SEO audit and client pitch funnel.',
    },
    description: {
      ar: 'تتويج الرحلة التعليمية بأكملها: بناء مشروعك الحقيقي الخاص (سواء كان معرض أعمال هندسي احترافي، منصة لخدمة تجارية، أو تطبيق ويب لحل مشكلة حقيقية)، ونشره على الإنترنت بدومين خاص مع تدقيق SEO كامل بنسبة 100%، وتجهيز العرض التقديمي لجلب أول عميل تجاري.',
      en: 'The grand finale of your journey: Engineering and deploying your signature production platform (portfolio, SaaS, or commercial client site) on a custom domain, 100/100 Lighthouse score, verified SEO schema, and a compelling client acquisition pitch.',
    },
    targetOutput: {
      ar: 'موقع إنتاجي حقيقي مباشر على الإنترنت حاصل على أعلى درجات الأداء في Lighthouse، متوافق مع محركات البحث، وجاهز للعرض على أصحاب الأعمال والعملاء.',
      en: 'A live production website with optimal Lighthouse performance, complete SEO architecture, and ready to pitch to commercial clients.',
    },
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'AI Features', 'SEO JSON-LD', 'Custom Domain', 'Vercel'],
    aiToolsRecommended: [
      'Claude 3.5 Sonnet — لمراجعة المعمارية الشاملة واقتراح تحسينات الكود والأداء',
      'ChatGPT Plus — لصياغة نصوص الـ SEO وعرض بيع القيمة (Value Proposition Pitch)',
      'Cursor — لتنسيق اللمسات النهائية وضمان معايير الـ Accessibility القياسية',
      'Google Lighthouse — لقياس السرعة والأداء والأمان قبل الإطلاق الرسمي',
    ],
    aiMasterPrompt: {
      ar: `تصرف ككبير مهندسي الويب ومستشار الأعمال الرقمية. أريد منك إجراء تدقيق هندسي وتسويقي شامل لمشروعي النهائي (Capstone Web Platform):
1. قم بإنشاء ملف metadata.ts و robots.ts و sitemap.ts متكامل لـ Next.js مع تضمين بيانات Schema.org بتنسيق JSON-LD.
2. اكتب خطة إطلاق رسمية تشمل:
   - قائمة فحص الأداء قبل الإطلاق (Checklist).
   - نص مقترح لمنشور الإطلاق على LinkedIn مع صياغة قصة النجاح.
   - نموذج مقترح لتقديم الخدمة لأول 3 عملاء تجاريين (Cold Outreach Proposal).`,
      en: `Act as a principal web architect and digital business advisor. Conduct a full architectural and go-to-market audit for my Next.js Capstone project. Deliver full Next.js SEO metadata (sitemap, robots, JSON-LD Schema), pre-launch checklist, LinkedIn launch announcement copy, and client outreach proposal template.`,
    },
    fileStructureTree: `capstone-production/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # الغلاف الرئيسي مع Schema JSON-LD و Meta
│   │   ├── sitemap.ts         # خريطة الموقع لمحركات البحث تلقائياً
│   │   ├── robots.ts          # تعليمات روبوتات الزحف لمحركات البحث
│   │   └── page.tsx           # المنصة الإنتاجية المتكاملة
│   ├── components/            # مكتبة المكونات المهندسة بعناية
│   └── content/               # نصوص وبيانات الموقع المحمية بالأنماط`,
    starterCodeLang: 'typescript',
    starterCodeSnippet: `// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'منصتي الهندسية الرائدة | حلول ويب ذكية',
    template: '%s | منصتي الهندسية',
  },
  description: 'منصة ويب متكاملة عالية الأداء مبنية بأحدث معايير Next.js والذكاء الاصطناعي.',
  keywords: ['Next.js', 'Web Development', 'AI Tools', 'Portfolio', 'Full-Stack'],
  openGraph: {
    title: 'منصتي الهندسية الرائدة',
    description: 'تطوير وتصميم مواقع وتطبيقات ويب فائقة السرعة.',
    url: 'https://yourdomain.com',
    siteName: 'My Signature Capstone',
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'منصتي الهندسية',
    url: 'https://yourdomain.com',
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}`,
    milestones: [
      {
        id: 'ms-01',
        title: {
          ar: 'تحديد فكرة المشروع والقيمة المقترحة والهوية البصرية',
          en: 'Concept, Value Proposition & Brand Identity',
        },
        description: {
          ar: 'اختيار فكرة المشروع الحقيقي، دراسة الجمهور المستهدف، وتجهيز الهوية البصرية ونظام الألوان.',
          en: 'Define product concept, validate value proposition, and establish design tokens.',
        },
        tasks: [
          {
            id: 't-01',
            title: { ar: 'كتابة وثيقة متطلبات المشروع (PRD) وتحديد الجمهور المستهدف بدقة', en: 'Write concise PRD and target audience profile' },
            isKeyDeliverable: true,
          },
          {
            id: 't-02',
            title: { ar: 'تجهيز الهوية البصرية واختيار خطوط الطباعة ونظام الألوان المتسق', en: 'Select typography hierarchy and brand palette' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-02',
        title: {
          ar: 'التطوير الهندسي الشامل للواجهات والمنطق البرمجي',
          en: 'End-to-End Architectural Engineering',
        },
        description: {
          ar: 'بناء النظام البرمجي بالكامل بأعلى معايير الكود النظيف والمكونات القابلة للصيانة.',
          en: 'Construct the complete application codebase with clean architecture and type safety.',
        },
        tasks: [
          {
            id: 't-03',
            title: { ar: 'برمجة كافة شاشات وأقسام المشروع وتجربة التصفح التفاعلية', en: 'Implement all functional screens and user flows' },
            isKeyDeliverable: true,
          },
          {
            id: 't-04',
            title: { ar: 'دمج أدوات الذكاء الاصطناعي كقوة مساندة وميزة ذكية داخل المنصة', en: 'Integrate applied AI assistance features' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-03',
        title: {
          ar: 'تدقيق الأداء وتهيئة الـ SEO الشاملة (100% Score)',
          en: 'Performance Optimization & Search Engine Architecture',
        },
        description: {
          ar: 'الحصول على أقصى تقييم في Lighthouse وتفعيل بيانات Schema.org و sitemap تلقائياً.',
          en: 'Achieve 95+ Lighthouse scores and deploy complete JSON-LD Structured Data.',
        },
        tasks: [
          {
            id: 't-05',
            title: { ar: 'إعداد ملفات sitemap.ts و robots.ts وبطاقات المعاينة الاجتماعية (OG Cards)', en: 'Configure sitemap, robots.txt and dynamic OpenGraph images' },
            isKeyDeliverable: true,
          },
          {
            id: 't-06',
            title: { ar: 'تدقيق الأداء عبر Lighthouse وضمان سرعة تحميل أقل من 1.2 ثانية', en: 'Run Lighthouse audit achieving top tier performance metrics' },
            isKeyDeliverable: true,
          },
        ],
      },
      {
        id: 'ms-04',
        title: {
          ar: 'النشر بدومين خاص وإطلاق حملة استقطاب العملاء',
          en: 'Custom Domain Launch & Client Acquisition Funnel',
        },
        description: {
          ar: 'ربط دومين مخصص، نشر المشروع على Vercel، وإعداد رسائل العرض لجلب أول عميل.',
          en: 'Attach custom domain, deploy to production, and launch client pitch campaign.',
        },
        tasks: [
          {
            id: 't-07',
            title: { ar: 'ربط نطاق خاص (Custom Domain) وتفعيل شهادة الحماية SSL', en: 'Connect custom domain with active SSL' },
            isKeyDeliverable: true,
          },
          {
            id: 't-08',
            title: { ar: 'كتابة منشور الإطلاق الرسمي وتجهيز عرض بيع الخدمات لأول عميل تجاري', en: 'Publish launch showcase and prepare client outreach pitch' },
            isKeyDeliverable: true,
          },
        ],
      },
    ],
    tipsForSuccess: [
      {
        ar: 'المشروع النهائي هو رأس مالك المهني وبوابتك لأول عقد عمل، ركز على حل مشكلة حقيقية وتجربة مستخدم مدهشة.',
        en: 'Your Capstone is your core career asset; focus on solving a tangible problem with impeccable UX.',
      },
      {
        ar: 'احرص على الحصول على تقييم أخضر كامل في مؤشرات الويب الحيوية (Core Web Vitals).',
        en: 'Strive for straight greens across all Core Web Vitals.',
      },
      {
        ar: 'سجل فيديو استعراضياً سريعاً (Loom مدته دقيقتان) تشرح فيه المنصة وأرفقه في معرض أعمالك.',
        en: 'Record a crisp 2-minute walkthrough demo video to showcase along with your live link.',
      },
    ],
  },
];
