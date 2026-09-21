/**
 * WEB CREATOR AI — Modules Registry
 * The 10 Core Modules.
 * Decoupled & strictly typed; any new module or lesson can be plugged in easily.
 */

import { Module } from '@/types';

export const ALL_MODULES: Module[] = [
  {
    id: 'module-01',
    number: '01',
    stageId: '01-think',
    title: {
      ar: 'أساسيات الويب ومعمارية الإنترنت',
      en: 'Web Fundamentals & Architecture',
    },
    subtitle: {
      ar: 'كيف يعمل الويب من خلف الكواليس؟',
      en: 'How the Web Works Behind the Scenes',
    },
    description: {
      ar: 'فهم بروتوكولات الويب (HTTP/HTTPS)، نموذج العميل والخادم (Client-Server)، كيف يعالج المتصفح الأكواد (DOM & Rendering Engine)، وتجهيز بيئة التطوير الحديثة.',
      en: 'Mastering HTTP/HTTPS, DNS, client-server models, browser rendering engines, and configuring a modern engineering environment.',
    },
    badge: {
      ar: 'الأساس المعماري',
      en: 'Architectural Foundation',
    },
    icon: 'Network',
    color: '#0f2b48',
    estimatedHours: 4,
    targetOutcome: {
      ar: 'فهم هندسي واضح لدورة حياة طلب الويب (Web Request Lifecycle) وتجهيز بيئة عمل متكاملة.',
      en: 'A clear engineering understanding of the web request lifecycle and a ready modern dev environment.',
    },
    lessons: [
      {
        id: 'lesson-01-01',
        moduleId: 'module-01',
        stageId: '01-think',
        order: 1,
        title: {
          ar: 'رحلة حزمة البيانات: ماذا يحدث عند كتابة رابط في المتصفح؟',
          en: 'The Request Lifecycle: What Happens When You Enter a URL?',
        },
        subtitle: {
          ar: 'من الـ DNS إلى الـ Server وعودة بالـ HTML/CSS/JS',
          en: 'From DNS Resolution to Server Response and Rendering',
        },
        summary: {
          ar: 'نظرة شمولية مبسطة ودقيقة تبين دور كل طرف في تشغيل صفحات الويب.',
          en: 'A comprehensive, clear deep-dive into how browsers, DNS, and servers interact.',
        },
        estimatedMinutes: 25,
        type: 'theory',
        learningObjectives: [
          {
            ar: 'فهم بروتوكول HTTP/HTTPS والفرق بينهما.',
            en: 'Understand HTTP vs HTTPS protocols.',
          },
          {
            ar: 'تتبع مسار طلب الويب من نقرة المستخدم إلى ظهور الصفحة.',
            en: 'Trace the request lifecycle from click to paint.',
          },
          {
            ar: 'استيعاب كيف يقوم المتصفح ببناء شجرة الـ DOM.',
            en: 'Understand how the browser constructs the DOM tree.',
          },
        ],
        contentMarkdown: {
          ar: `### ما الذي يحدث حقاً عندما تضغط Enter في المتصفح؟

الويب ليس سحراً، بل هو نظام محادثة قياسي منظم بين طرفين:
1. **العميل (Client):** متصفحك (Chrome, Safari, Firefox).
2. **الخادم (Server):** جهاز حاسوب فائق متصل بالإنترنت ومزود ببرمجيات تستقبل الطلبات وتعيد الملفات.

#### الخطوات الأربع الكبرى:
1. **DNS Lookup:** تحويل اسم النطاق (مثل \`google.com\`) إلى عنوان IP رقمي (مثل \`142.250.190.46\`).
2. **TCP/TLS Handshake:** إنشاء اتصال مشفر وآمن عبر منفذ HTTPS (443).
3. **HTTP Request & Response:** إرسال طلب \`GET /\` ورد الخادم بكود الحالة \`200 OK\` ومحتوى الـ HTML.
4. **Browser Rendering:** تحليل الـ HTML وبناء شجرة الـ DOM، ثم طلب ملفات CSS و JavaScript ورسم الصفحة على الشاشة.`,
          en: `### What actually happens when you press Enter?

The web is a standardized conversation between two entities:
1. **The Client:** Your browser.
2. **The Server:** A connected host listening for requests and returning assets.

#### The Core Steps:
1. **DNS Lookup:** Resolving domain names to IP addresses.
2. **TCP/TLS Handshake:** Establishing secure cryptographic connections.
3. **HTTP Request & Response:** Sending \`GET /\` and receiving \`200 OK\` with HTML.
4. **Browser Rendering:** Parsing HTML, constructing DOM/CSSOM, and painting pixels.`,
        },
        codeSnippets: [
          {
            id: 'snippet-01-http',
            title: {
              ar: 'مثال على ترويسة طلب HTTP حقيقية',
              en: 'Real-world HTTP Request Header Sample',
            },
            language: 'http',
            code: `GET /index.html HTTP/2
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
Accept-Language: ar,en-US;q=0.9`,
            explanation: {
              ar: 'هكذا يتحدث المتصفح مع السيرفر لطلب الصفحة بصيغة نصية واضحة.',
              en: 'This is how the browser requests the page in plain structured protocol text.',
            },
          },
        ],
        challenge: {
          id: 'challenge-01-01',
          title: {
            ar: 'تحدي: تتبع شبكة المتصفح عبر DevTools',
            en: 'Challenge: Inspecting Network Calls via DevTools',
          },
          objective: {
            ar: 'افتح أدوات المطور (F12) في متصفحك، انتقل لتبويب Network، وراقب أول طلب لموقع ويب وسجل كود الحالة والـ Content-Type.',
            en: 'Open Developer Tools (F12), head to the Network tab, inspect the first document request, and record its status code and Content-Type.',
          },
          instructions: [
            {
              ar: 'افتح أي موقع تريده، ثم اضغط Ctrl+Shift+I أو F12.',
              en: 'Open any site and hit Ctrl+Shift+I or F12.',
            },
            {
              ar: 'اختر تبويب Network وأعد تحميل الصفحة (F5).',
              en: 'Select the Network tab and reload the page.',
            },
            {
              ar: 'حدد الملف الأول (Doc) واقرأ Response Headers.',
              en: 'Click on the first entry and inspect Response Headers.',
            },
          ],
          aiPromptHelper: {
            ar: 'أنا متدرب في دورة ويب، شرحت لي أدوات DevTools. اشرح لي باختصار ما هو الفرق بين كود الحالة 200 و 304 و 404 وكيف يؤثر ذلك على كفاءة الموقع؟',
            en: 'I am a web engineering student learning DevTools. Explain the practical difference between status 200, 304, and 404 and their impact on performance.',
          },
          difficulty: 'beginner',
        },
        quiz: [
          {
            id: 'q-01-01',
            question: {
              ar: 'ما هي الوظيفة الأساسية لنظام أسماء النطاقات (DNS)؟',
              en: 'What is the primary role of the Domain Name System (DNS)?',
            },
            options: [
              { ar: 'تشفير كلمات المرور في المتصفح', en: 'Encrypting passwords in the browser' },
              { ar: 'تحويل اسم النطاق المقروء للبشر إلى عنوان IP رقمي تفهمه الآلات', en: 'Translating human-readable domains into machine-readable IP addresses' },
              { ar: 'تصميم واجهة المستخدم بملفات CSS', en: 'Styling user interfaces using CSS' },
              { ar: 'تخزين قواعد بيانات المستخدمين', en: 'Storing user databases' },
            ],
            correctAnswerIndex: 1,
            explanation: {
              ar: 'يعمل DNS بمثابة دفتر الهاتف للإنترنت؛ يترجم الأسماء مثل example.com إلى أرقام IP التي تستطيع أجهزة الشبكة الاتصال بها.',
              en: 'DNS acts like the phonebook of the internet, mapping human-friendly names to IP addresses.',
            },
          },
        ],
        keyTakeaways: [
          {
            ar: 'الويب مبني على معايير مفتوحة وبروتوكولات تواصل محددة.',
            en: 'The web is built upon open, standardized communication protocols.',
          },
          {
            ar: 'المتصفح هو مفسر للأكواد الرسومية والبرمجية وليس مجرد قارئ نصوص.',
            en: 'Browsers are graphic and code compilation engines, not mere text viewers.',
          },
        ],
        trainerNotes: {
          ar: 'تنبيه للمدرب: افتح DevTools على شاشة العرض مباشرة، وأظهر للطلاب تبويب Network بشكل حي مع تفعيل Disable Cache لتوضيح الفرق.',
          en: 'Trainer note: Open DevTools live on the projector, demonstrate the Network tab, and toggle Disable Cache to highlight latency differences.',
        },
      },
    ],
  },
  {
    id: 'module-02',
    number: '02',
    stageId: '02-design',
    title: {
      ar: 'تصميم تجربة وواجهة المستخدم (UI/UX)',
      en: 'UI/UX & Visual Design Systems',
    },
    subtitle: {
      ar: 'كيف تصنع موقعاً يحبه المستخدم ويثق به؟',
      en: 'Crafting Websites Users Love and Trust',
    },
    description: {
      ar: 'قواعد التوزيع البصري (Hierarchy)، نظرية الألوان، التباين والخطوط، بناء Wireframes ومكونات الواجهات، واستخدام أدوات الذكاء الاصطناعي لتوليد أفكار التصميم.',
      en: 'Visual hierarchy, typography, contrast ratios, wireframing, and utilizing AI for modern design ideation.',
    },
    badge: {
      ar: 'التجربة البصرية',
      en: 'Visual Experience',
    },
    icon: 'Palette',
    color: '#0f2b48',
    estimatedHours: 6,
    targetOutcome: {
      ar: 'القدرة على تخطيط Wireframe متكامل وتحديد نظام ألوان وخطوط احترافي قبل كتابة أي كود.',
      en: 'Ability to plan wireframes and define design system tokens before coding.',
    },
    lessons: [],
  },
  {
    id: 'module-03',
    number: '03',
    stageId: '03-build',
    title: {
      ar: 'هيكلة الويب الدلالية بـ HTML5',
      en: 'Semantic HTML5 Architecture',
    },
    subtitle: {
      ar: 'بناء العمود الفقري للموقع بمعايير عالمية',
      en: 'Building the Semantic Backbone of Modern Web',
    },
    description: {
      ar: 'الوسوم الدلالية (Semantic Tags)، تحسين الوصول لذوي الاحتياجات (Accessibility & ARIA)، النماذج التفاعلية، ودلالات تحسين محركات البحث في كود الـ HTML.',
      en: 'Semantic elements, accessibility (a11y), forms, input validation, and foundational SEO tags.',
    },
    badge: {
      ar: 'العمود الفقري',
      en: 'The Backbone',
    },
    icon: 'FileCode',
    color: '#0f2b48',
    estimatedHours: 5,
    targetOutcome: {
      ar: 'بناء صفحات ويب نظيفة، قابلة للقراءة آلياً وبشرياً، ومطابقة لأعلى معايير الوصول (WCAG).',
      en: 'Crafting clean, accessible, semantic web pages adhering to WCAG standards.',
    },
    lessons: [],
  },
  {
    id: 'module-04',
    number: '04',
    stageId: '03-build',
    title: {
      ar: 'التنسيق العصري والأنظمة المرنة بـ Modern CSS & Tailwind',
      en: 'Modern CSS & Tailwind Design Systems',
    },
    subtitle: {
      ar: 'التحكم الكامل في المظهر، التجاوب، والجمال البصري',
      en: 'Mastering Layouts, Responsiveness, and Visual Polish',
    },
    description: {
      ar: 'نموذج الصندوق (Box Model)، أنظمة التخطيط الفائقة (Flexbox & CSS Grid)، التصميم المتجاوب للهواتف (Mobile-First)، وإتقان Tailwind CSS للإنتاج السريع.',
      en: 'Box model, Flexbox, CSS Grid, mobile-first responsive workflows, and rapid UI development with Tailwind CSS.',
    },
    badge: {
      ar: 'الجمال والتجاوب',
      en: 'Aesthetics & Layout',
    },
    icon: 'Paintbrush',
    color: '#0f2b48',
    estimatedHours: 8,
    targetOutcome: {
      ar: 'تحويل أي تصميم من خيال أو صورة إلى واجهة متجاوبة فائقة الدقة والجمال على جميع المقاسات.',
      en: 'Transforming mockups into pixel-perfect, responsive layouts across all screen sizes.',
    },
    lessons: [],
  },
  {
    id: 'module-05',
    number: '05',
    stageId: '04-develop',
    title: {
      ar: 'منطق وبرمجة الويب التفاعلية بـ JavaScript (ESNext)',
      en: 'Modern JavaScript Logic & Interactivity',
    },
    subtitle: {
      ar: 'بث الروح والمنطق في صفحات الويب',
      en: 'Empowering Pages with Dynamic Logic & State',
    },
    description: {
      ar: 'المفاهيم الأساسية، التلاعب بشجرة الـ DOM، الأحداث (Events)، البرمجة غير المتزامنة (Async/Await & Fetch API)، وتخزين البيانات في المتصفح.',
      en: 'Core ESNext, DOM manipulation, event loops, async operations, API integration, and browser storage.',
    },
    badge: {
      ar: 'محرك المنطق',
      en: 'Logic Engine',
    },
    icon: 'Terminal',
    color: '#0f2b48',
    estimatedHours: 10,
    targetOutcome: {
      ar: 'بناء واجهات تتفاعل مع نقرات المستخدم وتستدعي البيانات من خوادم خارجية وتتحقق من صحة المدخلات.',
      en: 'Building interactive UIs that respond to user actions and fetch data from APIs dynamically.',
    },
    lessons: [],
  },
  {
    id: 'module-06',
    number: '06',
    stageId: '04-develop',
    title: {
      ar: 'بناء المكونات القابلة لإعادة الاستخدام بـ React',
      en: 'Component-Driven Development with React',
    },
    subtitle: {
      ar: 'التفكير بالمكونات وإدارة الحالة بذكاء',
      en: 'Thinking in Components & Declarative UI State',
    },
    description: {
      ar: 'معمارية المكونات، الـ Props، الـ State، الـ Hooks الأساسية (useState, useEffect)، وإدارة تدفق البيانات في التطبيقات الحديثة.',
      en: 'Component architectures, props, stateful reactive hooks, effect lifecycles, and clean unidirectional data flow.',
    },
    badge: {
      ar: 'معمارية المكونات',
      en: 'Component Architecture',
    },
    icon: 'Atom',
    color: '#0f2b48',
    estimatedHours: 10,
    targetOutcome: {
      ar: 'بناء واجهات مستخدم معيارية (Modular UI) سهلة التعديل والتطوير والإصلاح.',
      en: 'Constructing modular, reusable component libraries with clean state management.',
    },
    lessons: [],
  },
  {
    id: 'module-07',
    number: '07',
    stageId: '04-develop',
    title: {
      ar: 'تطبيقات الويب الإنتاجية بـ Next.js (App Router)',
      en: 'Production-Grade Next.js (App Router)',
    },
    subtitle: {
      ar: 'المنصة المتكاملة للمطور المحترف',
      en: 'The Modern Framework for Scalable Web Products',
    },
    description: {
      ar: 'مكونات الخادم والعميل (Server & Client Components)، التوجيه المتداخل (Nested Routing)، تحسين الصور والخطوط، والجاهزية الإنتاجية.',
      en: 'App router patterns, Server vs Client components, layout composition, image/font optimizations, and production readiness.',
    },
    badge: {
      ar: 'إطار العمل الاحترافي',
      en: 'Production Framework',
    },
    icon: 'Zap',
    color: '#0f2b48',
    estimatedHours: 10,
    targetOutcome: {
      ar: 'بناء تطبيق ويب حقيقي جاهز للإنتاج يجمع بين قوة أداء الخادم وسرعة استجابة واجهات العميل.',
      en: 'Engineering high-performance production web applications combining server rendering with client interactivity.',
    },
    lessons: [],
  },
  {
    id: 'module-08',
    number: '08',
    stageId: '05-enhance',
    title: {
      ar: 'التطوير المدعوم بالذكاء الاصطناعي (AI for Developers)',
      en: 'AI-Assisted Development & Workflows',
    },
    subtitle: {
      ar: 'كيف تصبح مطوراً خارق الإنتاجية (10x Developer) بالـ AI؟',
      en: 'Supercharging Engineering Productivity with AI Copilots',
    },
    description: {
      ar: 'هندسة موجهات الكود (Prompt Engineering)، استخدام أدوات الذكاء الاصطناعي في حل الأخطاء المعقدة، توليد مكونات UI، وكتابة الاختبارات آلياً.',
      en: 'Code prompt engineering, automated debugging, synthesizing component layouts, and building AI features into apps.',
    },
    badge: {
      ar: 'المضاعف الإنتاجي',
      en: 'Productivity Multiplier',
    },
    icon: 'Sparkles',
    color: '#0f2b48',
    estimatedHours: 6,
    targetOutcome: {
      ar: 'استخدام أدوات الذكاء الاصطناعي كمهندس معماري يتحكم بالجودة ويوجه الموديل بدقة واحترافية.',
      en: 'Commanding AI as an architectural director rather than a passive code copier.',
    },
    lessons: [],
  },
  {
    id: 'module-09',
    number: '09',
    stageId: '06-launch',
    title: {
      ar: 'تحسين محركات البحث والتسويق الرقمي (SEO & Growth)',
      en: 'Technical SEO & Digital Marketing Strategy',
    },
    subtitle: {
      ar: 'موقعك لا قيمة له إن لم يعثر عليه أحد!',
      en: 'Your Web App Has No Value If Nobody Can Find It',
    },
    description: {
      ar: 'الـ SEO التقني (Core Web Vitals, Structured Data, Sitemap)، كتابة المحتوى التسويقي الجذاب، قنوات التحويل (Conversion Funnels)، واستراتيجيات جلب الزوار.',
      en: 'Technical SEO, Core Web Vitals, structured schema data, conversion copywriting, and visitor acquisition funnels.',
    },
    badge: {
      ar: 'الظهور والنمو',
      en: 'Visibility & Growth',
    },
    icon: 'TrendingUp',
    color: '#0f2b48',
    estimatedHours: 6,
    targetOutcome: {
      ar: 'تهيئة الموقع لتصدر نتائج البحث وجذب الزوار والعملاء المهتمين بما تقدمه.',
      en: 'Optimizing web pages to rank high on search engines and convert casual visitors into clients.',
    },
    lessons: [],
  },
  {
    id: 'module-10',
    number: '10',
    stageId: '07-grow',
    title: {
      ar: 'الإطلاق، معرض الأعمال، واقتناص عقود العمل الحر',
      en: 'Launch, Portfolio & Freelancing Mastery',
    },
    subtitle: {
      ar: 'تحويل مهاراتك إلى مهنة مستدامة ودخل مستقل',
      en: 'Monetizing Your Skills into a Sustainable Career',
    },
    description: {
      ar: 'النشر السحابي وربط النطاق المخصص، بناء معرض أعمال لا يمكن تجاهله (Killer Portfolio)، تسعير الخدمات البرمجية، والتفاوض مع العملاء في العمل الحر.',
      en: 'Custom domain deployment, crafting high-converting portfolios, pricing web projects, and closing freelance client deals.',
    },
    badge: {
      ar: 'المهنة والحرية المالية',
      en: 'Career & Monetization',
    },
    icon: 'Briefcase',
    color: '#0f2b48',
    estimatedHours: 8,
    targetOutcome: {
      ar: 'موقعك الشخصي ومشاريعك منشورة على نطاق خاص، وجاهزية كاملة لتقديم عروض العمل الحر واقتناص المشاريع.',
      en: 'A live portfolio on a custom domain and complete readiness to pitch and close freelance client deals.',
    },
    lessons: [],
  },
];
