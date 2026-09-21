/**
 * Abdulhakim Kanbr — Portfolio Projects Registry
 * Grounded strictly in demonstrated engineering work.
 * Structured by Case Study Depth:
 * - Level 1: Major / Flagship Project (Full Case Study)
 * - Level 2: Significant Project (Medium Case Study)
 * - Level 3: Smaller Project (Short Project Page)
 */

import { PortfolioProject, ProjectCategoryKey } from '@/types';

export const PORTFOLIO_CATEGORIES: { key: ProjectCategoryKey | 'all'; label: { ar: string; en: string }; description: { ar: string; en: string } }[] = [
  {
    key: 'all',
    label: { ar: 'كل المشاريع', en: 'All Projects' },
    description: {
      ar: 'مجموعة متكاملة من المنصات وتطبيقات الويب والأنظمة البرمجية التي قمت بهندستها وتطويرها.',
      en: 'A comprehensive collection of platforms, web applications, and systems I have engineered.',
    },
  },
  {
    key: 'saas',
    label: { ar: 'المنصات والخدمات (SaaS & Platforms)', en: 'SaaS & Platforms' },
    description: {
      ar: 'منصات رقمية متكاملة ونظم خدمات ويب تفاعلية تجمع بين المعمارية المستقلة وسهولة الاستخدام.',
      en: 'Integrated digital platforms and web systems combining modular architecture and ergonomic UX.',
    },
  },
  {
    key: 'web-app',
    label: { ar: 'تطبيقات الويب (Web Applications)', en: 'Web Applications' },
    description: {
      ar: 'تطبيقات ويب عالية الأداء ومعمارية واجهات متجاوبة مبنية وفق أفضل ممارسات الويب الحديثة.',
      en: 'High-performance web applications and responsive UI architectures built to modern standards.',
    },
  },
  {
    key: 'education',
    label: { ar: 'التدريب والتعليم التقني (Training & Education)', en: 'Training & Education' },
    description: {
      ar: 'أنظمة ومناهج تعليمية تفاعلية مصممة لتبسيط المفاهيم المعمارية وتمكين المطورين عملياً.',
      en: 'Interactive learning systems and curricula engineered to bridge architectural theory with real-world practice.',
    },
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'web-creator-ai-platform',
    level: 1,
    featured: true,
    title: {
      ar: 'منصة WEB CREATOR AI للتدريب الهندسي',
      en: 'WEB CREATOR AI Platform',
    },
    tagline: {
      ar: 'نظام ويب تفاعلي متكامل يضم مسارات تدريبية، معامل كود وذكاء اصطناعي، ونظام حفظ تقدم محلي.',
      en: 'Full-featured interactive web platform combining structured engineering roadmaps, AI workflow labs, and offline-first state persistence.',
    },
    category: {
      ar: 'منصات سحابية ونظم تفاعلية',
      en: 'SaaS & Platforms',
    },
    categoryKey: 'saas',
    role: {
      ar: 'المعمارية البرمجية وهندسة المنظومة بالكامل',
      en: 'System Architecture & Full-Stack Web Engineering',
    },
    year: '2025',
    status: {
      ar: 'نظام نشط ومكتمل',
      en: 'Active & In Production',
    },
    techStack: ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Turbopack'],
    liveUrl: '/web-creator-ai',
    overview: {
      ar: 'منصة WEB CREATOR AI هي بيئة تدريبية وهندسية تفاعلية متكاملة، صُممت لتوجيه المتعلمين والمطورين عبر مسار منهجي يتألف من 7 مراحل من التفكير والتصميم المعماري وحتى النشر والتسويق. تضم المنصة 10 وحدات هندسية، مختبر ذكاء اصطناعي تفاعلي، مختبر تسويق وSEO، ونظام متابعة تقدم محلي.',
      en: 'WEB CREATOR AI is an interactive engineering learning platform designed to guide developers through a structured 7-stage journey from concept and architecture to production deployment and client acquisition. The platform features 10 core engineering modules, an interactive AI prompt lab, a marketing/SEO lab, and offline-first state persistence.',
    },
    problem: {
      ar: 'كانت الحاجة لبناء بيئة تدريبية شاملة تجمع بين عرض المنهج النظري، التطبيق العملي التفاعلي، أدوات الذكاء الاصطناعي، وحفظ تقدم المتعلم بدون فرض تسجيل دخول إجباري أو الاعتماد على خادم قاعدة بيانات معقد يبطئ تجربة التصفح.',
      en: 'The project required an educational platform combining theoretical curriculum delivery, interactive labs, applied AI guidance, and learner progress tracking without mandating user login or relying on heavy backend database queries that degrade UX velocity.',
    },
    solution: {
      ar: 'قمت بتصميم معمارية تعتمد على Server Components للعرض الأولي السريع للمحتوى، مع عزل المكونات التفاعلية كـ Client Components مدعومة بنظام Zustand لإدارة الحالة وحفظ التقدم في التخزين المحلي (LocalStorage)، وتوفير دعم ثنائي اللغة (RTL/LTR) ونظام سمات متقدم.',
      en: 'Designed an architecture leveraging Next.js Server Components for instant initial page delivery, isolating stateful interactive widgets with Zustand to persist learner milestones in LocalStorage, paired with complete bilingual RTL/LTR ergonomics and an extensible design token system.',
    },
    architecture: {
      ar: 'معمارية معيارية مبنية على Next.js App Router مع فصل كامل بين طبقة البيانات الثابتة المحمية بالأنماط (TypeScript Models) وطبقة واجهات العرض (UI Shells)، مما يتيح إضافة وحدات أو شرائح عرض جديدة دون تعديل المكونات الحالية.',
      en: 'Modular Next.js App Router architecture strictly decoupling typed content registries from rendering layouts, enabling direct addition of modules, labs, and interactive slides without touching core UI primitives.',
    },
    technicalImplementation: [
      {
        title: {
          ar: 'معمارية الحالة واستمرارية البيانات',
          en: 'State Management & Offline Persistence',
        },
        details: [
          {
            ar: 'توظيف Zustand مع الـ Middleware للتخزين المحلي (LocalStorage) لحفظ تقدم الدروس والخيارات المحددة تلقائياً.',
            en: 'Configured Zustand with LocalStorage middleware to silently persist lesson checkpoints and user preferences.',
          },
          {
            ar: 'دعم المعالجة غير المتزامنة وتفادي أخطاء Hydration عبر تهيئة الحالة بعد التحميل الأولي في المتصفح.',
            en: 'Eliminated React hydration mismatches through disciplined post-mount client hydration state synchronization.',
          },
        ],
      },
      {
        title: {
          ar: 'نظام السمات وتعدد اللغات',
          en: 'Design System & Internationalization',
        },
        details: [
          {
            ar: 'بناء نظام متغيرات CSS موحد يدعم الوضع الداكن والفاتح مع دعم كامل للاتجاهين العربي والإنجليزي.',
            en: 'Engineered a CSS Variable design token system reliably accommodating dark/light modes and native RTL/LTR flows.',
          },
          {
            ar: 'استخدام خطوط ويب محسنة ومفهرسة مع ضبط دقيق للمسافات وتباين الألوان وفق المعايير القياسية.',
            en: 'Loaded optimized fonts with strictly calibrated contrast ratios fulfilling WCAG accessibility guidelines.',
          },
        ],
      },
    ],
    infrastructure: {
      ar: 'تم بناء التطبيق ليعمل كحزمة مستقلة محسنة للأداء، قابلة للنشر الفوري على منصات الاستضافة السحابية مع تحسين كامل للأصول الثابتة والصور ومؤشرات Core Web Vitals.',
      en: 'Packaged as an optimized static-site/hybrid build, deploying to modern cloud edge infrastructure with optimized image assets and stellar Core Web Vitals.',
    },
    engineeringChallenges: [
      {
        challenge: {
          ar: 'المحافظة على سرعة الاستجابة اللحظية مع وجود كمية كبيرة من المحتوى والدروس التفاعلية.',
          en: 'Maintaining sub-second response times across rich lesson content and interactive test modules.',
        },
        solution: {
          ar: 'الاعتماد على التقسيم المعماري الدقيق (Code Splitting) وتحميل المكونات الثقيلة عند الحاجة فقط، مع تصيير الصفحات مسبقاً في مرحلة البناء.',
          en: 'Utilized route-based code splitting and pre-rendered static content while loading interactive widgets on demand.',
        },
      },
      {
        challenge: {
          ar: 'توفير تجربة مستخدم متناسقة عبر جميع أحجام الشاشات مع الحفاظ على وضوح الخطوط والرموز.',
          en: 'Ensuring consistent UX across mobile, tablet, and widescreen layouts without layout shift.',
        },
        solution: {
          ar: 'تصميم كل مكون وفق منهجية Mobile-First مع استخدام شبكة مرنة (CSS Grid / Flexbox) واختبار دقيق لكافة القياسات.',
          en: 'Built every component mobile-first with defensive CSS Grid/Flexbox boundaries and strict breakpoint QA.',
        },
      },
    ],
    keyFeatures: [
      {
        ar: 'خارطة طريق تفاعلية مقسمة إلى 7 مراحل هندسية (Think, Design, Build, Develop, Enhance, Launch, Grow).',
        en: 'Interactive 7-stage roadmap spanning Think, Design, Build, Develop, Enhance, Launch, and Grow.',
      },
      {
        ar: 'فهرس متكامل يضم 10 وحدات تدريبية مع تمارين وتحديات برمجية عملية.',
        en: 'Comprehensive directory of 10 engineering modules packed with practical code challenges.',
      },
      {
        ar: 'مختبر ذكاء اصطناعي يضم موجهات هندسية وأدوات مساعدة للمطورين.',
        en: 'Applied AI lab featuring developer prompts and workflow acceleration patterns.',
      },
      {
        ar: 'نظام حفظ التقدم وتتبع الإنجازات دون الحاجة إلى تسجيل دخول.',
        en: 'Zero-friction progress tracking and achievement system without mandatory account registration.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'فصل طبقة البيانات عن المكونات الرسومية يمنح المشروع مرونة استثنائية للتوسع المستقبلي.',
        en: 'Strict separation of data registries from UI components provides unparalleled scalability.',
      },
      {
        ar: 'الاهتمام بتجربة المستخدم على الهواتف منذ البداية يوفر وقتاً هائلاً في مرحلة ضبط التجاوب.',
        en: 'Adopting a disciplined mobile-first mindset from day one drastically reduces responsive debugging cycles.',
      },
    ],
  },
  {
    slug: 'developer-engineering-portfolio',
    level: 1,
    featured: true,
    title: {
      ar: 'معرض أعمال المطور والملف المهني الرقمي',
      en: 'Developer Engineering Portfolio & Showcase',
    },
    tagline: {
      ar: 'موقع شخصي عصري متعدد اللغات يعكس الهوية الهندسية ويوفر تجربة تصفح سريعة وفائقة التجاوب.',
      en: 'Bilingual engineering portfolio delivering instant load times, dark mode ergonomics, and comprehensive case study architecture.',
    },
    category: {
      ar: 'تطبيقات الويب والواجهات الحديثة',
      en: 'Web Applications',
    },
    categoryKey: 'web-app',
    role: {
      ar: 'التطوير الكامل وهندسة الواجهات وتجربة المستخدم',
      en: 'Full-Stack Web Engineering & UI Architecture',
    },
    year: '2025',
    status: {
      ar: 'نشط ويعمل كمنصة إنتاجية',
      en: 'Active & Production Ready',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Semantic HTML5', 'SEO Meta'],
    liveUrl: '/',
    overview: {
      ar: 'منصة الملف المهني ومعرض الأعمال المخصصة للمهندس عبد الحكيم قنبر. صُممت لتقديم الخبرات الهندسية، المشاريع الواقعية، ومجالات التركيز بأسلوب رصين يعكس النضج البرمجي والتفكير الشامل للأنظمة بدلاً من الاستعراض الشكلي.',
      en: 'Personal engineering portfolio and project showcase for Abdulhakim Kanbr. Designed to present technical capabilities, real-world projects, and architectural focus with grounded professionalism, emphasizing practical problem-solving over superficial visual noise.',
    },
    problem: {
      ar: 'الحاجة إلى تقديم خبرة هندسية تمتد لأكثر من 8 سنوات عبر موقع شخصي متكامل يجمع بين الهوية البصرية الأنيقة، الأداء الفائق، دعم اللغتين العربية والإنجليزية، وهيكلية دراسات الحالة المتعمقة.',
      en: 'The challenge was to communicate 8+ years of engineering breadth through a portfolio marrying clean visual identity, optimal performance, native bilingual support, and deep engineering case study structures.',
    },
    solution: {
      ar: 'بناء موقع يعتمد على لوحة ألوان رصينة (Dark Navy #252734)، مع استخدام مكونات ويب قياسية ومعمارية دلالية (Semantic HTML5) تضمن سرعة التحميل والتوافق التام مع محركات البحث ومعايير الوصول.',
      en: 'Architected a streamlined web application with a dignified dark navy color palette (#252734), clean semantic HTML5 markup, structured JSON-LD schemas, and reusable page shells ensuring top-tier accessibility and performance.',
    },
    architecture: {
      ar: 'معمارية تعتمد على نظام Shells متحدة مع مكونات عرض متخصصة (PortfolioHero, EngineeringFocus, ExperienceTimeline) مع الاستفادة من ميزات Next.js App Router لإنتاج الصفحات مسبقاً وتوفير بيانات ميتا متخصصة لكل صفحة.',
      en: 'Shell-based architecture combining specialized section components with Next.js App Router conventions, supporting dynamic metadata generation, structured JSON-LD schemas, and static generation.',
    },
    technicalImplementation: [
      {
        title: {
          ar: 'هندسة التجاوب ودعم الاتجاهين (RTL/LTR)',
          en: 'Responsive Layout & Native RTL/LTR',
        },
        details: [
          {
            ar: 'استخدام CSS Logical Properties وقيم التباعد المتكيفة مع اللغة لضمان اتساق الواجهة عند التبديل الفوري بين العربية والإنجليزية.',
            en: 'Employed CSS logical properties and directional utilities ensuring clean zero-refresh language switching between Arabic and English.',
          },
          {
            ar: 'ضبط تباين الخطوط وأوزانها لدعم الخطوط اللاتينية والعربية بوضوح تام على كافة الأجهزة.',
            en: 'Fine-tuned typographic scales and font weights to deliver crisp legibility across both scripts.',
          },
        ],
      },
      {
        title: {
          ar: 'التهيئة لمحركات البحث والأداء',
          en: 'Technical SEO & Performance Discipline',
        },
        details: [
          {
            ar: 'تضمين بيانات Schema.org المنظمة (Person, WebSite, Breadcrumbs) لتعريف محركات البحث بالهوية والمهارات بدقة.',
            en: 'Injected structured Schema.org JSON-LD (Person, WebSite, BreadcrumbList) for comprehensive search indexing.',
          },
          {
            ar: 'توليد ملفات sitemap.xml و robots.txt برمجياً وفق معايير Next.js الحديثة.',
            en: 'Programmatically generated sitemap.xml and robots.txt in full compliance with Next.js conventions.',
          },
        ],
      },
    ],
    infrastructure: {
      ar: 'مستضاف عبر بنية سحابية حديثة مع شبكة توزيع محتوى عالمية (CDN)، وتطبيق التخزين المؤقت الذكي للأصول الرقمية والخطوط.',
      en: 'Deployed on edge cloud infrastructure with global CDN delivery, automated asset caching, and zero unneeded client JavaScript.',
    },
    engineeringChallenges: [
      {
        challenge: {
          ar: 'الحفاظ على هوية بصرية متميزة بدون التضحية بأداء التحميل أو إرباك التصفح بتأثيرات بصرية غير ضرورية.',
          en: 'Preserving a distinguished visual identity without compromising load speed or cluttering UX with trendy distractions.',
        },
        solution: {
          ar: 'الاعتماد على التدرجات اللونية الهادئة والمكونات الخفيفة والظلال الدقيقة بدلاً من المكتبات الرسومية الثقيلة.',
          en: 'Leveraged subtle CSS tokens, lightweight SVGs, and calibrated drop shadows instead of heavyweight animation libraries.',
        },
      },
    ],
    keyFeatures: [
      {
        ar: 'واجهة رئيسية متكاملة تقدم الهوية والخبرة والتركيز الهندسي في ثوانٍ معدودة.',
        en: 'Refined hero section communicating professional positioning, experience, and core value in seconds.',
      },
      {
        ar: 'معرض دراسات حالة منظم يبرز القرارات الهندسية والتحديات البرمجية.',
        en: 'Structured case study directory highlighting architectural decisions, challenges, and solutions.',
      },
      {
        ar: 'سجل خبرات تفصيلي بنمط السيرة الذاتية المهنية (CV).',
        en: 'Detailed CV-style professional experience timeline organized by engineering competencies.',
      },
      {
        ar: 'قنوات تواصل مباشرة بروابط حقيقية ومفعلة للبريد الإلكتروني والهاتف والشبكات المهنية.',
        en: 'Direct communication channels with validated mailto, tel, and professional social links.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'التصميم الرصين والواضح يمنح الزائر انطباعاً أقوى بالموثوقية من التصاميم المزدحمة بالتأثيرات.',
        en: 'A calm, confident design conveys deeper credibility than visual noise and excessive animations.',
      },
    ],
  },
  {
    slug: 'web-creator-ai-presentation-engine',
    level: 2,
    featured: true,
    title: {
      ar: 'نظام العرض التقديمي التقني التفاعلي',
      en: 'Interactive Technical Presentation Engine',
    },
    tagline: {
      ar: 'محرك عروض تفاعلي مدمج يدعم التحكم بلوحة المفاتيح والأسئلة التدريبية وملاحظات المدرب المباشرة.',
      en: 'Embedded presentation engine featuring keyboard navigation, interactive slide quizzes, and instructor live speaking notes.',
    },
    category: {
      ar: 'التدريب والتعليم التقني',
      en: 'Training & Education',
    },
    categoryKey: 'education',
    role: {
      ar: 'هندسة النظام التفاعلي وتصميم تجربة العرض',
      en: 'Interactive Systems Engineering & UX Architecture',
    },
    year: '2025',
    status: {
      ar: 'نظام متكامل ومستخدم فعلياً',
      en: 'Active Presentation System',
    },
    techStack: ['Next.js App Router', 'React Hooks', 'TypeScript', 'Tailwind CSS', 'Keyboard Controls'],
    liveUrl: '/trainer/presentation',
    overview: {
      ar: 'نظام عرض تقديمي تفاعلي متكامل مدمج داخل منصة التدريب، مصمم ليخدم المدرب والمتعلم على حد سواء. يتيح النظام استعراض محاور المراحل السبع من خلال شرائح غنية بالمفاهيم المعمارية، أسئلة تفاعلية فورية (Quizzes)، وملاحظات مخصصة للمدرب أثناء الشرح المباشر.',
      en: 'An embedded, interactive slide engine engineered for both instructors and learners. The system presents the 7-stage web engineering curriculum with conceptual deep-dives, instant diagnostic quiz interactions, and real-time speaker notes for live training workshops.',
    },
    architecture: {
      ar: 'محرك شرائح تفاعلي يعتمد على مصفوفة بيانات موحدة ومفهرسة (Presentation Slides Catalog) مع مكون قشرة (PresentationShell) يدير التنقل والتحكم بملء الشاشة واختصارات لوحة المفاتيح.',
      en: 'Built on an indexed, strongly-typed slide catalog paired with a PresentationShell component handling full-screen toggling, keyboard hotkeys, and dynamic slide progression.',
    },
    keyFeatures: [
      {
        ar: 'تنقل سلس بلوحة المفاتيح (الأسهم، المسافة، مفتاح ESC للخروج).',
        en: 'Intuitive keyboard controls (Arrow keys, Spacebar, ESC to exit).',
      },
      {
        ar: 'تفاعل فوري مع الأسئلة المعمارية وعرض التعليق التوضيحي للإجابة.',
        en: 'Interactive quiz blocks with instant feedback and architectural explanations.',
      },
      {
        ar: 'وضع ملاحظات المدرب المخصص (Speaker Notes) لتسهيل الشرح المباشر.',
        en: 'Dedicated speaker notes panel to support live lecture delivery.',
      },
      {
        ar: 'شريط تقدم بصري ومؤشر أرقام الشرائح مع دعم كامل للاتجاهين.',
        en: 'Dynamic visual progress bar, slide counter, and bidirectional slide orientation.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'بناء محرك عروض مخصص داخل التطبيق يوفر انسجاماً تاماً مع نظام التصميم ويغني عن الاعتماد على أدوات خارجية.',
        en: 'Engineering a native slide engine ensures 100% design system harmony without external dependencies.',
      },
    ],
  },
  {
    slug: 'high-converting-landing-page',
    level: 2,
    featured: false,
    title: {
      ar: 'نظام صفحة الهبوط المتجاوبة عالية التحويل',
      en: 'High-Converting Responsive Landing Page System',
    },
    tagline: {
      ar: 'بناء صفحة هبوط متجاوبة بالكامل تركز على البنية الدلالية، سرعة التحميل، وتجربة المستخدم السلسة.',
      en: 'Pixel-perfect, fully responsive landing page system focused on semantic hierarchy, speed, and conversion ergonomics.',
    },
    category: {
      ar: 'تطبيقات الويب والواجهات الحديثة',
      en: 'Web Applications',
    },
    categoryKey: 'web-app',
    role: {
      ar: 'هندسة الواجهة وتطبيق معايير الويب',
      en: 'Frontend Engineering & Web Standards',
    },
    year: '2025',
    status: {
      ar: 'مشروع تطبيقي مكتمل',
      en: 'Completed Milestone System',
    },
    techStack: ['HTML5 Semantic Architecture', 'Tailwind CSS', 'Mobile-First', 'Performance Optimization'],
    overview: {
      ar: 'مشروع تطبيقي يركز على تحويل الفكرة والمنتج إلى صفحة هبوط متكاملة تشمل Hero Banner جذاب، شبكة ميزات (Feature Grid)، شهادات، وجداول تسعير وقسم اتخاذ القرار (CTA) مع تحقيق أعلى معايير التجاوب على الهواتف.',
      en: 'Hands-on frontend engineering project transforming a product concept into a complete landing page featuring an engaging hero, responsive feature grids, testimonials, pricing tables, and call-to-action sections.',
    },
    architecture: {
      ar: 'هيكلية دلالية نقية تفصل بين العناصر الهيكلية وأنماط التنسيق مع الاستفادة من فئات Tailwind CSS لتقليل حجم حزمة الـ CSS إلى أدنى حد ممكن.',
      en: 'Clean semantic structure decoupling semantic markup from styling tokens, leveraging Tailwind utility optimization to minimize the final CSS bundle size.',
    },
    keyFeatures: [
      {
        ar: 'تصميم متوافق 100% مع الهواتف والشاشات الصغيرة (Mobile-First).',
        en: '100% responsive layout following disciplined mobile-first design rules.',
      },
      {
        ar: 'معايير وصول عالية وتباين لوني مريح للعين لتسهيل القراءة.',
        en: 'High contrast ratios and accessible markup ensuring effortless readability.',
      },
      {
        ar: 'زمن تحميل فوري مع تحسين أحجام الصور وعناصر الواجهة.',
        en: 'Instant render times with optimized asset delivery and minimal blocking resources.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'البدء بتصميم شاشة الموبايل أولاً يضمن أن تكون كل خطوة تالية مبنية على أساس متين ومريح.',
        en: 'Designing mobile-first guarantees that every desktop expansion builds upon a solid ergonomic base.',
      },
    ],
  },
  {
    slug: 'dynamic-interactive-web-app',
    level: 2,
    featured: false,
    title: {
      ar: 'تطبيق الويب التفاعلي متكامل الحالة',
      en: 'Dynamic Interactive Web Application',
    },
    tagline: {
      ar: 'تطبيق ويب تفاعلي مع إدارة متقدمة للحالة واستدعاء البيانات وحفظ تفضيلات المستخدم.',
      en: 'Dynamic Next.js web application featuring client state management, instant filtering, and local data persistence.',
    },
    category: {
      ar: 'تطبيقات الويب والواجهات الحديثة',
      en: 'Web Applications',
    },
    categoryKey: 'web-app',
    role: {
      ar: 'تطوير تطبيق الويب وإدارة الحالة',
      en: 'Web Application Development & State Management',
    },
    year: '2025',
    status: {
      ar: 'مشروع تطبيقي مكتمل',
      en: 'Completed Milestone System',
    },
    techStack: ['Next.js App Router', 'React Hooks', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    overview: {
      ar: 'مشروع تطبيقي للانتقال إلى عالم تطبيقات الويب الديناميكية، يتيح للمستخدمين البحث، الفلترة الفورية، وإدارة البيانات التفاعلية مع حفظ التفضيلات محلياً لضمان تجربة مستخدم سريعة ودون تأخير.',
      en: 'Interactive web application engineered with modular components, providing instant search, dynamic multi-attribute filtering, and robust local data persistence for a responsive user experience.',
    },
    architecture: {
      ar: 'معمارية مكونات معيارية قابلة لإعادة الاستخدام مع عزل دقيق لمنطق إدارة الحالة في مخازن Zustand المستقلة.',
      en: 'Modular, reusable component hierarchy isolating state logic into dedicated Zustand stores with clean hook interfaces.',
    },
    keyFeatures: [
      {
        ar: 'بحث وتصفية لحظية بدون إعادة تحميل الصفحة.',
        en: 'Instant client-side search and filtering without page reload.',
      },
      {
        ar: 'حفظ خيارات المستخدم وتفضيلاته محلياً عبر LocalStorage.',
        en: 'Automatic local persistence of user selections across browser sessions.',
      },
      {
        ar: 'إدارة أخطاء وحالات التحميل الفارغة بأسلوب واضح ومريح.',
        en: 'Robust empty state and error boundary handling.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'عزل مكونات الواجهة عن منطق الحالة يجعل صيانة وتطوير التطبيق أكثر سلاسة وأماناً.',
        en: 'Decoupling presentation from state stores ensures safe, testable evolution of features.',
      },
    ],
  },
  {
    slug: 'production-web-capstone',
    level: 2,
    featured: false,
    title: {
      ar: 'منصة مشروع التخرج والإنتاج الحي',
      en: 'Production Web Capstone Platform',
    },
    tagline: {
      ar: 'من الفكرة إلى موقع ويب إنتاجي حقيقي مع تدقيق أداء Lighthouse وتهيئة SEO كاملة.',
      en: 'From concept to a live, production-grade web application with custom domain setup, Lighthouse audit, and complete SEO meta architecture.',
    },
    category: {
      ar: 'تطبيقات الويب والواجهات الحديثة',
      en: 'Web Applications',
    },
    categoryKey: 'web-app',
    role: {
      ar: 'الهندسة المتكاملة والتهيئة للإنتاج',
      en: 'Full-Lifecycle Engineering & Production Readiness',
    },
    year: '2025',
    status: {
      ar: 'مشروع إنتاجي معتمد',
      en: 'Production Deployed',
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Technical SEO', 'Cloud Edge Deployment'],
    overview: {
      ar: 'مشروع التخرج والتتويج العملي: بناء موقع ويب إنتاجي متكامل ونشره على الإنترنت على نطاق مخصص، مع اجتياز تدقيق أداء Lighthouse، وإعداد خرائط المواقع والميتاداتا الخاصة بمحركات البحث وشبكات التواصل الاجتماعي.',
      en: 'Signature capstone project representing the end-to-end realization of web engineering: taking a concept to a live production domain with optimal Lighthouse audits, comprehensive SEO metadata, and social cards.',
    },
    architecture: {
      ar: 'معمارية إنتاجية محسنة تعتمد على الدمج بين المكونات الثابتة والديناميكية، مع تطبيق آليات التخزين المؤقت وضبط عناوين الأمان والرؤوس القياسية.',
      en: 'Production-ready architecture balancing static pre-rendering with dynamic capabilities, caching headers, and strict web standard adherence.',
    },
    keyFeatures: [
      {
        ar: 'درجات أداء عليا في تدقيق Google Lighthouse (الأداء، الوصول، أفضل الممارسات، SEO).',
        en: 'High scores across Google Lighthouse performance, accessibility, best practices, and SEO.',
      },
      {
        ar: 'تهيئة كاملة لوسوم Open Graph وبطاقات Twitter لضمان مظهر احترافي عند المشاركة.',
        en: 'Comprehensive Open Graph and Twitter Card tags ensuring polished social previews.',
      },
      {
        ar: 'بنية معيارية جاهزة للتوسع واستيعاب ميزات تجارية جديدة.',
        en: 'Extensible codebase ready to accommodate future commercial capabilities.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'المشروع البرمجي لا يكتمل بمجرد كتابة الكود على جهاز التطوير، بل عند اختباره ونشره في بيئة حية حقيقية.',
        en: 'A software project is only truly complete once validated and deployed in a live production environment.',
      },
    ],
  },
];

export function getAllPortfolioProjects(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS;
}

export function getPortfolioProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedPortfolioProjects(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.featured);
}

export function getProjectsByCategory(categoryKey: ProjectCategoryKey | 'all'): PortfolioProject[] {
  if (categoryKey === 'all') return PORTFOLIO_PROJECTS;
  return PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === categoryKey);
}
