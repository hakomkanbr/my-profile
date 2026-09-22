import { PresentationSession } from '@/types';

export const SESSION_09: PresentationSession = {
  id: 'session-09',
  number: 9,
  slug: 'session-09',
  title: {
    ar: 'Next.js + SEO: مواقع فائقة السرعة وجاهزة للإنتاج',
    en: 'Next.js + SEO: Building Production-Ready, Search-Optimized Platforms',
  },
  subtitle: {
    ar: 'كيف تحول مكونات React إلى منصة إنتاجية حقيقية تتصدر نتائج بحث Google وتفتح في أجزاء من الثانية؟',
    en: 'Elevating React components into production web applications dominating search engines with sub-second speeds',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من استخدام ميزات Next.js المتقدمة (App Router, Server Layouts, Metadata) وضبط إعدادات الـ SEO والأداء، وإجراء تدقيق شامل بالذكاء الاصطناعي.',
    en: 'Master Next.js App Router architectures, dynamic metadata for Google indexing, performance budgets, and comprehensive AI SEO audits.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 08 وامتلاك شجرة مكونات React المنظمة', en: 'Completion of Session 08 with modular React components' },
  ],
  objectives: [
    { ar: 'فهم معمارية Next.js App Router والفرق بين Server Components و Client Components', en: 'Understand App Router architecture and Server vs Client Component boundaries' },
    { ar: 'إعداد حزمة البيانات الوصفية (Metadata & Open Graph) لظهور الموقع باحترافية في محركات البحث وشبكات التواصل', en: 'Configure production Metadata and Open Graph social sharing previews' },
    { ar: 'تحسين أداء الصور وسرعة التحميل (Core Web Vitals) لتسجيل أعلى درجات في فحص Google Lighthouse', en: 'Optimize images and Core Web Vitals to score top marks on Lighthouse audits' },
    { ar: 'استخدام الذكاء الاصطناعي لإجراء تدقيق شامل (Full Production Audit) لـ SEO والوصولية والأداء', en: 'Conduct a comprehensive AI audit scanning SEO, accessibility, performance, and semantics' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: لماذا يعتبر Next.js المعيار الذهبي لمواقع الإنتاج؟', en: 'Why Next.js is the gold standard for production' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'معمارية App Router والـ Metadata: كيف يرى Google موقعك؟', en: 'App Router & Metadata: How Google crawls sites' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: إعداد الـ Metadata وتحسين الصور وتدقيق Lighthouse', en: 'Live Demo: Setting Metadata & Image Optimization' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'تدقيق الذكاء الاصطناعي الشامل لـ SEO والأداء ومحتوى الصفحة', en: 'Comprehensive AI SEO & Performance Audit' }, type: 'ai' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: ضبط بيانات SEO مشروعهم وتجهيز بطاقة المشاركة', en: 'Student Challenge: Configure Project Metadata' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'فحص نتائج الـ Metadata لروابط الطلاب', en: 'Inspect student Open Graph and SEO tags' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز لجلسة مسار عمل AI المتقدم (Session 10)', en: 'Takeaways & Prep for Advanced AI Workflow' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'ضبط كافة إعدادات الـ SEO و Open Graph وبطاقات المشاركة الاجتماعية وتجهيز مشروع التخرج للإطلاق التجريبي.',
    en: 'Configure complete production SEO, Open Graph social cards, and performance optimizations for the capstone site.',
  },
  aiRole: {
    ar: 'مدقق ومفتش إنتاجي (Production Auditor) يفحص جاهزية محركات البحث وسرعة التحميل وثغرات الأداء.',
    en: 'Production audit scanner evaluating search intent, semantic hierarchy, metadata, and core web vitals.',
  },
  marketConnection: {
    ar: 'المواقع المحسنة لمحركات البحث (SEO) تمنح العميل عائداً استثمارياً مستمراً وتبرر للمطور أسعار خدمات تبدأ من آلاف الدولارات.',
    en: 'Production-grade SEO delivers continuous organic revenue for clients, justifying premium freelance pricing.',
  },
  startScreen: {
    badge: 'SESSION 09 / 12 • PRODUCTION & SEO',
    headline: {
      ar: 'Next.js + SEO: كيف تجعل موقعك يفتح في رمشة عين ويتصدر نتائج Google؟',
      en: 'Next.js + SEO: Engineering Sub-Second Loading Speeds and Top Search Rankings',
    },
    description: {
      ar: 'تعلم أسرار الإنتاجية العالية: تحسين محركات البحث، بطاقات المشاركة، والتحكم في ميزانية الأداء الرقمي عبر Next.js 16.',
      en: 'Master enterprise production delivery: metadata optimization, social sharing cards, and core web vitals in Next.js 16.',
    },
    sessionGoal: {
      ar: 'إعداد حزمة الـ SEO والـ Metadata الكاملة لمشروع تخرجك واجتياز فحص التدقيق الشامل بالذكاء الاصطناعي.',
      en: 'Configure complete production SEO and metadata for your capstone project and pass the AI production audit.',
    },
  },
  endScreen: {
    headline: {
      ar: 'رائع! مشروعك الآن جاهز لمنافسة كبرى المواقع في السرعة ومحركات البحث',
      en: 'Magnificent! Your Project is Now Primed for Search Dominance & Speed',
    },
    keyRecap: [
      {
        ar: 'الـ Metadata هي بطاقة هوية موقعك أمام محرك بحث Google ومستخدمي شبكات التواصل الاجتماعي.',
        en: 'Metadata is your site digital passport for Google crawlers and social media sharing platforms.',
      },
      {
        ar: 'السرعة هي عامل تصنيف رسمي (Ranking Factor)؛ كل 100 مللي ثانية توفرها تزيد من مبيعات العميل.',
        en: 'Speed is an official Google ranking factor; every 100ms shaved boosts client revenue and retention.',
      },
      {
        ar: 'استخدم الذكاء الاصطناعي كفاحص دقيق للأداء والكلمات المفتاحية وليس فقط لكتابة الأكواد.',
        en: 'Deploy AI as a relentless auditor of keywords, accessibility, and performance budgets.',
      },
    ],
    nextSessionNumber: '10',
    nextSessionTitle: {
      ar: 'الذكاء الاصطناعي كمسار عمل مهني متكامل (Full SDLC Workflow)',
      en: 'AI as a Professional Development Workflow: Architecture to Ship',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's09-slide-01',
      sessionNumber: 9,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: 'Next.js + SEO: مواقع جاهزة للإنتاج', en: 'Next.js + SEO: Production Web' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وإعلان دخول مرحلة الجاهزية للإنتاج والتسويق الرقمي.', en: 'Open session: crossing into enterprise production-readiness and search discovery.' },
      speakerNotes: { ar: 'رحب بالطلاب: "اليوم لا نتعلم فقط كيف نجعل الموقع يعمل على جهازك؛ اليوم نتعلم كيف نجعل العالم يكتشفه ويزوره عبر Google!".', en: 'Welcome learners: "Today we ensure your site is not just running on localhost, but ready for the entire world on Google!"' },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '09',
          kicker: { ar: 'الجاهزية للإنتاج والانتشار', en: 'Production Readiness & SEO' },
          headline: { ar: 'NEXT.JS & PRODUCTION SEO', en: 'NEXT.JS & PRODUCTION SEO' },
          subheadline: { ar: 'معمارية App Router، تحسين السرعة، وضبط محركات البحث للريادة', en: 'App Router architecture, speed budgets, and dominating Google search rankings' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Next.js 16', 'App Router', 'Production SEO', 'Metadata & Open Graph', 'Core Web Vitals'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's09-slide-02',
      sessionNumber: 9,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: 'ما فائدة بناء موقع رائع إذا لم يجده أحد على Google؟', en: 'What Good is a Site Nobody Can Find?' },
      subtitle: { ar: 'الفرق بين المطور الذي يسلم كوداً وبين صانع الويب الذي يسلم أداة جذب زبائن', en: 'The gap between a coder shipping files and a Web Creator shipping a customer engine' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'ربط مهارات الـ Next.js والـ SEO بالقيمة التجارية التي يدفع العميل لأجلها.', en: 'Connect technical Next.js capabilities directly to client business acquisition value.' },
      speakerNotes: { ar: 'أكد: "العميل مستعد لدفع ضعف السعر إذا كان موقعك مهيأ للظهور في نتائج البحث الأولى في مدينته. هذه هي القيمة الحقيقية لصانع الويب".', en: 'Clients gladly pay double for sites engineered to rank on page 1 of local search.' },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'أكثر من 68% من تجارب تصفح الويب تبدأ ببحث على Google؛ الموقع غير المحسن لمحركات البحث يعتبر غير موجود عملياً.',
            en: 'Over 68% of web experiences originate with a search query; unoptimized sites are invisible.',
          },
          realWorldProblem: {
            ar: 'مواقع React التقليدية (Client-Side Rendering) ترسل للمتصفح صفحة HTML فارغة، مما يصعب على روبوتات البحث قراءتها وأرشفتها.',
            en: 'Legacy client-rendered React sends blank HTML shells, hobbling search bots from indexing content.',
          },
          whyItMatters: {
            ar: 'محرك Next.js يحل هذه المشكلة جذرياً: ينشئ الـ HTML على الخادم (Server Rendering) ليكون جاهزاً فوراً للزوار وروبوتات Google في أقل من ثانية.',
            en: 'Next.js pre-renders semantic HTML on the server, serving instantaneous indexed pages to bots and humans alike.',
          },
        },
      },
    },

    // Slide 3: Concept (The SEO Triangle)
    {
      id: 's09-slide-03',
      sessionNumber: 9,
      slideNumber: 3,
      totalSlides: 16,
      type: 'concept',
      title: { ar: 'مثلث الـ SEO المعماري: التقنية، المحتوى، وسرعة الأداء', en: 'The Architectural SEO Triangle' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'شرح ركائز الـ SEO الثلاث التي يتحكم فيها مهندس الويب بالكامل.', en: 'Present the 3 technical pillars of modern SEO commanded by web creators.' },
      speakerNotes: { ar: 'استعرض الأركان الثلاثة: 1. المعمارية الدلالية، 2. نية البحث والكلمات المفتاحية، 3. سرعة التحميل و Core Web Vitals.', en: 'Review the 3 pillars: Semantic Architecture, Search Intent & Metadata, and Core Web Vitals performance.' },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'الـ SEO الاحترافي ليس حِيلاً تسويقية، بل هو معمارية هندسية نظيفة تخدم الزائر وروبوت البحث معاً.',
            en: 'Professional SEO is not marketing gimmicks; it is clean engineering serving users and crawlers.',
          },
          tagline: { ar: 'ENGINEERED SEARCH SUPREMACY', en: 'ENGINEERED SEARCH SUPREMACY' },
          explanation: {
            ar: 'خوارزميات بحث Google تقيس موقعك عبر ثلاثة محاور متكاملة: صحة البيانات الوصفية (Metadata)، وضوح التسلسل الدلالي للعناوين، وسرعة استجابة الشاشة على الهواتف.',
            en: 'Search crawlers evaluate platforms across three technical vectors: rich metadata fidelity, logical semantic heading hierarchy, and mobile viewport performance.',
          },
          bulletPoints: [
            { ar: 'نية البحث (Search Intent): كتابة عناوين ووصف يطابق بدقة ما يكتبه الزبون في شريط البحث', en: 'Search Intent: Crafting title and description matching exact client user queries' },
            { ar: 'البيانات الوصفية (Metadata): ضبط title, description, keywords, و canonical URLs', en: 'Metadata schemas: Authoring title, description, keywords, and canonical links' },
            { ar: 'بطاقات المشاركة الاجتماعية (Open Graph): صورة وعنوان يظهران بأناقة عند مشاركة الرابط على واتساب ولينكدإن', en: 'Open Graph cards: Rich visual previews when links are shared on WhatsApp or LinkedIn' },
            { ar: 'مؤشرات الأداء الحيوية (Core Web Vitals): منع اهتزاز العناصر (Zero CLS) وسرعة ظهور أول نص (LCP < 1.5s)', en: 'Core Web Vitals: Zero visual layout shift and Largest Contentful Paint under 1.5s' },
          ],
          architecturalRule: {
            ar: 'قاعدة معمارية: يجب أن يحتوي كل مسار في موقعك على كائن metadata مخصص ومفرغ من العبارات المكررة.',
            en: 'Architectural Rule: Every route in your Next.js project must export dedicated, unique metadata.' },
        },
      },
    },

    // Slide 4: Code (Next.js 16 Metadata API)
    {
      id: 's09-slide-04',
      sessionNumber: 9,
      slideNumber: 4,
      totalSlides: 16,
      type: 'code',
      title: { ar: 'الكود كأثر بصري: كائن الـ Metadata الاحترافي في Next.js', en: 'Code Artifact: Production Metadata in Next.js' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'تعليم الطلاب كيفية كتابة كائن metadata شامل يغطي محركات البحث وشبكات التواصل.', en: 'Teach authoring comprehensive typed Next.js metadata covering SEO and Open Graph.' },
      speakerNotes: { ar: 'اشرح حقول title, description, openGraph, و twitter. هذا الكود يوضع مباشرة في ملف layout.tsx أو page.tsx.', en: 'Walk through title, description, openGraph, and twitter cards. This lives right in layout.tsx or page.tsx.' },
      payload: {
        type: 'code',
        data: {
          language: 'tsx',
          codeSnippet: `// src/app/layout.tsx — Enterprise SEO Metadata Spec
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Trattoria Roma — Artisan Italian Dining & Reservations',
    template: '%s | Trattoria Roma',
  },
  description: 'Experience authentic Roman pasta and heritage dining handcrafted fresh daily. Book your reservation online.',
  keywords: ['Italian restaurant', 'artisan pasta', 'Rome dining', 'dinner reservations'],
  authors: [{ name: 'Trattoria Roma Culinary Team' }],
  openGraph: {
    title: 'Trattoria Roma — Handcrafted Italian Dining',
    description: 'Reserve your table today for authentic Roman flavors and timeless culinary heritage.',
    url: 'https://trattoria-roma.example.com',
    siteName: 'Trattoria Roma',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Trattoria Roma Dining Room' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trattoria Roma — Artisan Italian Dining',
    description: 'Authentic Roman pasta and reservations in the heart of the city.',
    images: ['/og-image.jpg'],
  },
};`,
          what: { ar: 'كائن Metadata قياسي ومُنمذج بـ TypeScript يحدد هوية الصفحة لمحركات البحث ومنصات التواصل الاجتماعي.', en: 'Production TypeScript Metadata object establishing page identity for search crawlers and social shares.' },
          why: { ar: 'بدون هذا الكائن، سيظهر رابط موقعك كشريط رمادي فارغ عند مشاركته على واتساب ولن يفهم Google محتواه بدقة.', en: 'Without Open Graph metadata, shared links display as naked grey links on WhatsApp and iMessage.' },
          when: { ar: 'إلزامي في ملف layout.tsx الرئيسي وفي كل صفحة فرعية داخل مجلد src/app.', en: 'Mandatory in root layout.tsx and every standalone route in modern Next.js projects.' },
        },
      },
    },

    // Slide 5: AI (The Comprehensive Production Audit Prompt)
    {
      id: 's09-slide-05',
      sessionNumber: 9,
      slideNumber: 5,
      totalSlides: 16,
      type: 'ai',
      title: { ar: 'تدقيق الذكاء الاصطناعي الشامل لـ SEO والأداء', en: 'The Comprehensive AI Production Audit Prompt' },
      subtitle: { ar: 'الأمر المعتمد لفحص 6 محاور إنتاجية حاسمة قبل إطلاق أي موقع للعميل', en: 'The battle-tested audit prompt scanning 6 critical production vectors before client handoff' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'تدريب الطلاب على استخدام هذا البرومبت لفحص صفحاتهم واكتشاف أي قصور في معايير الـ SEO.', en: 'Equip students with this rigorous audit prompt to inspect their pages before deployment.' },
      speakerNotes: { ar: 'اقرأ المحاور الستة: SEO, Accessibility, Performance, Semantic HTML, Content Structure, Metadata. هذا الفحص يضمن جودة المنتج 100%.', en: 'Review the 6 audit dimensions: SEO, Accessibility, Performance, Semantics, Content Structure, Metadata.' },
      payload: {
        type: 'ai',
        data: {
          role: 'Principal Web Performance Auditor and Senior Technical SEO Consultant.',
          context: 'Auditing our Next.js 16 landing page codebase ahead of production release.',
          task: `Perform an exhaustive, multi-vector production audit across:
1. SEO & Search Intent (Keyword density, Title, Description, Heading hierarchy h1-h3)
2. Accessibility Compliance (WCAG 2.1 AA contrast, button labels, image alts)
3. Performance & Core Web Vitals (Image dimensions, layout shifts, bundle weight)
4. Semantic HTML Architecture (Proper W3C elements over divs)
5. Content & Copywriting Structure (Value proposition clarity, CTA visibility)
6. Metadata & Open Graph Social Previews`,
          constraints: 'Be rigorous and brutally objective. List exact filename and line references for every identified issue. Provide drop-in remediation code.',
          output: `Return:
- Executive Readiness Score (0-100%)
- Critical Findings by Vector
- Immediate Remediation Code Patches`,
          acceptanceCriteria: [
            'Every missing meta tag identified',
            'Zero heading hierarchy skips (e.g. h1 directly to h3 flagged)',
            'Actionable copy-paste remediation diff provided',
          ],
          iterationTip: {
            ar: 'شغل هذا الفحص مرتين: مرة قبل إنهاء الكود، ومرة ثانية بعد تطبيق التعديلات للتحقق من النتيجة.',
            en: 'Execute this audit twice: once before polishing, and once after to verify 100% resolution.',
          },
        },
      },
    },

    // Slide 6: Demo (Live Metadata & Audit Run)
    {
      id: 's09-slide-06',
      sessionNumber: 9,
      slideNumber: 6,
      totalSlides: 16,
      type: 'demo',
      title: { ar: 'تطبيق حي: تشغيل فحص الـ SEO واختبار بطاقة المشاركة', en: 'Live Demo: Running SEO Audit & Testing Social Preview' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'مشاهدة تطبيق الـ Metadata عملياً واختبار ظهور بطاقة المشاركة في المتصفح.', en: 'Demonstrate live metadata injection and social card rendering in browser tools.' },
      speakerNotes: { ar: 'افتح ملف layout.tsx وأضف الـ Metadata. اعرض بطاقة المشاركة باستخدام أداة فحص الـ Open Graph في المتصفح.', en: 'Open layout.tsx, add metadata block, and demonstrate social card simulation live.' },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تضمين كائن Metadata المعتمد وتشغيل فحص التدقيق بالذكاء الاصطناعي لتقييم جاهزية المشروع.',
            en: 'Inject production metadata and execute comprehensive AI audit assessing readiness.',
          },
          promptToUse: `Analyze this Next.js page for:
SEO
Accessibility
Performance
Semantic HTML
Content structure
Metadata

Flag any missing attributes and generate corrected layout metadata.`,
          instructorSteps: [
            { ar: 'إضافة كائن Metadata إلى ملف layout.tsx في المشروع', en: 'Inject Metadata object into project layout.tsx' },
            { ar: 'تشغيل المتصفح وفحص وسم <head> للتأكد من توليد وسوم og:image و og:title', en: 'Inspect document <head> in DevTools to verify og:image tags' },
            { ar: 'إرسال كود الصفحة لبرومبت التدقيق الشامل بالذكاء الاصطناعي', en: 'Submit page code to comprehensive AI audit prompt' },
            { ar: 'تطبيق التعديلات المقترحة للوصول بنتيجة الجاهزية إلى 95%+', en: 'Apply recommendations to achieve 95%+ production readiness' },
          ],
          expectedOutput: {
            ar: 'صفحة متكاملة المعالم ببيانات وصفية دقيقة واجتياز تام لجميع معايير الـ SEO.',
            en: 'Fully compliant page with rich metadata passing all search and accessibility benchmarks.',
          },
        },
      },
    },

    // Slide 7: Challenge (Student Metadata Lab)
    {
      id: 's09-slide-07',
      sessionNumber: 9,
      slideNumber: 16,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: 'تحدي الطلاب: إعداد حزمة الـ SEO لمشروعك', en: 'Student Challenge: Author Project Metadata Package' },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'قيام كل طالب بكتابة كائن Metadata مخصص لمشروعه وتجربة فحص الـ AI عليه.', en: 'Every student configures bespoke production metadata for their capstone domain.' },
      speakerNotes: { ar: 'أطلق مؤقت الـ 5 دقائق. اطلب منهم كتابة title مخصص جذاب ووصف description دقيق لمشروعهم ووضعه في layout.tsx.', en: 'Start 5-minute timer. Instruct students to craft compelling title and description in layout.tsx.' },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'كتابة وتضمين كائن الـ Metadata الكامل (Title, Description, OpenGraph) في ملف layout.tsx لمشروعك.',
            en: 'Author and inject complete production Metadata (Title, Description, OpenGraph) in your project layout.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'تأهيل مشروعك البرمجي للظهور في محركات البحث ومشاركته كبطاقة احترافية على منصات التواصل.',
            en: 'Equip your capstone repository with rich search metadata and polished social sharing cards.',
          },
          instructions: [
            { ar: 'افتح ملف src/app/layout.tsx في مشروعك', en: 'Open src/app/layout.tsx in your workspace' },
            { ar: 'اكتب title جذاب يحتوي اسم مشروعك والكلمة المفتاحية (مثال: Trattoria Roma — Artisan Italian Dining)', en: 'Craft compelling title including brand name and primary search keyword' },
            { ar: 'اكتب description من 140-160 حرفاً يصف بدقة القيمة التي يقدمها مشروعك للعميل', en: 'Author a 140-160 character description summarizing unique customer value' },
            { ar: 'أضف بيانات الـ Open Graph بما فيها رابط صورة المعاينة og:image', en: 'Configure Open Graph block with title, description, and preview image URL' },
          ],
          starterPromptOrCode: "export const metadata: Metadata = { title: '...', description: '...', openGraph: { ... } };",
          deliverable: {
            ar: 'ملف layout.tsx مجهز ببيانات SEO وإنتاجية متكاملة لمشروع تخرجك.',
            en: 'Production-ready layout.tsx equipped with complete search and social metadata.',
          },
        },
      },
    },

    // Slide 8: Project (Milestone 09)
    {
      id: 's09-slide-08',
      sessionNumber: 9,
      slideNumber: 16,
      totalSlides: 16,
      type: 'project',
      title: { ar: 'محطة المشروع: الجاهزية للإنتاج ومحركات البحث', en: 'Project Milestone: Production & Search Ready' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت اكتمال الجانب المعماري والـ SEO لمشروع التخرج بالكامل.', en: 'Confirm capstone project is now an SEO-optimized, production-ready web platform.' },
      speakerNotes: { ar: 'هنئ الطلاب: "مشروعك الآن ليس مجرد موقع تجريبي؛ مشروعك الآن يملك المعايير التقنية التي تؤهله للمنافسة في محرك بحث Google فور إطلاقه!".', en: 'Congratulate learners: "Your repo now carries enterprise SEO engineering ready for Google competition!"' },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 09: الجاهزية للإنتاج والـ SEO الاحترافي', en: 'Phase 09: Production Readiness & Enterprise SEO' },
          stepNumber: '09',
          whatWeBuildNow: {
            ar: 'اكتمال دمج معايير الـ SEO، بيانات الـ Metadata، وتحسينات الأداء في مشروع التخرج.',
            en: 'Finalize SEO integration, metadata schemas, and performance budgets for your capstone project.',
          },
          deliverables: [
            { ar: 'كائن Metadata متكامل يغطي محركات البحث وشبكات التواصل', en: 'Comprehensive Metadata object with Open Graph and Twitter cards' },
            { ar: 'هيكل عناوين دلالي منضبط (h1 واحد فقط، h2 للأقسام، h3 للبطاقات)', en: 'Strict sequential heading hierarchy across all page sections' },
            { ar: 'اجتياز فحص التدقيق الشامل بالذكاء الاصطناعي بنسبة تفوق 90%', en: 'Passing comprehensive AI production audit with 90%+ readiness' },
          ],
          connectionToFinalProject: {
            ar: 'في الجلسة 10 سننتقل إلى المرحلة المتقدمة: توظيف الذكاء الاصطناعي في كامل مسار تطوير البرمجيات المهني (SDLC).',
            en: 'In Session 10 we elevate AI to full-lifecycle professional engineering: research, planning, testing, and review.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's09-slide-09',
      sessionNumber: 9,
      slideNumber: 16,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: 'الخلاصة الهندسية للجلسة التاسعة', en: 'Session 09 Engineering Takeaways' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت مبادئ الـ SEO الهندسي وسرعة الأداء الرقمي كمعيار مهني.', en: 'Cement technical SEO and sub-second performance budgets as non-negotiable standards.' },
      speakerNotes: { ar: 'اقرأ النقاط الثلاث. أكد: "الـ SEO الحقيقي هو كود نظيف وسريع يلبي نية بحث المستخدم بدقة".', en: 'Review takeaways: Genuine SEO is fast, clean code answering user intent with precision.' },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'الـ SEO هندسة وليس كلمات عشوائية', en: 'SEO is Architecture, Not Keywords' },
              description: {
                ar: 'بناء الهيكل الدلالي، العناوين المتسلسلة، وبيانات الـ Metadata الصريحة هو الأساس الأول لتصدر محركات البحث.',
                en: 'Clean semantic structure, sequential headings, and rigid metadata form the bedrock of search ranking.',
              },
            },
            {
              number: '02',
              title: { ar: 'السرعة ومؤشرات الـ Web Vitals تحسم المنافسة', en: 'Core Web Vitals Crown the Victor' },
              description: {
                ar: 'الصور المحسنة والتحميل اللحظي يمنحان موقعك أفضلية مطلقة على المواقع البطيئة في خوارزميات Google.',
                en: 'Optimized media assets and sub-second rendering grant absolute search preference over bloated competitors.',
              },
            },
            {
              number: '03',
              title: { ar: 'فحص الـ AI الشامل قبل كل إطلاق', en: 'Mandatory AI Audit Before Every Launch' },
              description: {
                ar: 'لا تطلق موقعاً للعميل قبل تشغيل فحص الـ 6 محاور بالذكاء الاصطناعي لاكتشاف أي ثغرات خفية وتصحيحها.',
                en: 'Never deploy to production without executing the 6-vector AI audit scanning for silent regressions.',
              },
            },
          ],
          coreMotto: {
            ar: 'الموقع الناجح هو الذي يجمع بين روعة التصميم، نظافة الكود، وسهولة اكتشافه في العالم الرقمي.',
            en: 'A triumphant web product unites striking aesthetics, clean architecture, and instant discoverability.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's09-slide-10',
      sessionNumber: 9,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: 'المحطة القادمة: AI كمسار عمل مهني متكامل', en: 'Next Waypoint: AI as a Professional SDLC Workflow' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تشويق الطلاب للجلسة 10 حيث سنتعلم دور الذكاء الاصطناعي في كامل دورة حياة المشروع.', en: 'Build anticipation for Session 10: deploying AI across the full software development lifecycle.' },
      speakerNotes: { ar: 'اختم الجلسة: "في الجلسة 10 سنكشف كيف يوظف كبار المطورين AI في الاختبارات والتوثيق والمراجعة، وكيف تتجنب فخاخ الهلوسة والمخاطر الأمنية!".', en: 'Closing: "In Session 10 we reveal how senior architects deploy AI for testing, refactoring, and avoiding hallucination traps!"' },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '10',
          nextSessionTitle: {
            ar: 'الذكاء الاصطناعي كمسار عمل مهني متكامل (Full SDLC Workflow)',
            en: 'AI as a Professional Development Workflow: Architecture to Ship',
          },
          teaser: {
            ar: 'الذكاء الاصطناعي ليس مجرد توليد كود؛ سنتعلم كيف نوظفه في التخطيط، الاختبار، التوثيق، مراجعة الأكواد، وفهم حدوده ومخاطره الأمنية: "AI generates. Human validates".',
            en: 'AI is not just code generation; master AI across planning, testing, refactoring, code review, and risk mitigation: "AI generates. Human validates".',
          },
          preparationHint: {
            ar: 'تأكد من أن ملفات مشروعك وحزمة الـ Metadata تعمل بسلاسة وخالية من أي أخطاء build.',
            en: 'Verify your project builds cleanly with zero errors ahead of Session 10.',
          },
        },
      },
    },
  ],
};
