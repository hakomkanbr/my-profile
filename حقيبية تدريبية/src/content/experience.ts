import { LocalizedString } from '@/types';

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  organization?: LocalizedString;
  period?: LocalizedString;
  scope: LocalizedString;
  highlights: LocalizedString[];
  technologies: string[];
}

/**
 * Professional milestones grounded strictly in the developer's demonstrated work.
 * Structured to be updated as formal role history is added.
 */
export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-software-web',
    role: {
      ar: 'هندسة البرمجيات وتطوير تطبيقات الويب',
      en: 'Software Engineering & Web Application Development',
    },
    organization: {
      ar: 'نظم وتطبيقات الويب التفاعلية',
      en: 'Web Applications & Interactive Platforms',
    },
    scope: {
      ar: 'تصميم وبناء وصيانة تطبيقات ويب متكاملة تركز على المعمارية النظيفة، قابلية الصيانة، وتجربة الاستخدام السلسة.',
      en: 'Designed, developed, and maintained full-lifecycle web applications focusing on modular architecture, maintainability, and reliable user experience.',
    },
    highlights: [
      {
        ar: 'بناء وتطوير معمارية برمجية معيارية قابلة لإعادة الاستخدام باستخدام React و Next.js و TypeScript.',
        en: 'Architected and built modular, reusable frontend architectures using React, Next.js, and TypeScript.',
      },
      {
        ar: 'تطوير واجهات متجاوبة وعالية التباين تدعم الاتجاهين العربي والإنجليزي (RTL/LTR) مع مراعاة معايير الوصول (a11y).',
        en: 'Developed responsive, accessible interfaces supporting both RTL and LTR with strict attention to accessibility standards.',
      },
      {
        ar: 'تحسين سرعة التحميل ومؤشرات أداء الويب الأساسية (Core Web Vitals) وتطبيق أسس التهيئة لمحركات البحث (SEO).',
        en: 'Optimized load times, Core Web Vitals metrics, and technical SEO structure for high search visibility.',
      },
    ],
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Zustand', 'Core Web Vitals'],
  },
  {
    id: 'exp-backend-api',
    role: {
      ar: 'تطوير الأنظمة الخلفية والواجهات البرمجية',
      en: 'Backend Architecture & API Development',
    },
    organization: {
      ar: 'معمارية الخدمات وواجهات البيانات',
      en: 'Service Architecture & Data APIs',
    },
    scope: {
      ar: 'بناء واجهات برمجية مهيكلة (RESTful APIs)، خدمات معالجة البيانات، والمنطق البرمجي مع الاهتمام بسلامة وأمان البيانات.',
      en: 'Engineered structured RESTful APIs, data processing services, and core business logic with emphasis on data integrity and security.',
    },
    highlights: [
      {
        ar: 'تطوير خدمات خلفية وواجهات برمجية باستخدام تقنيات حديثة لإدارة تدفق البيانات وتكامل التطبيقات.',
        en: 'Built structured backend services and APIs to handle business rules, data flows, and client integration.',
      },
      {
        ar: 'تصميم وبناء نماذج قواعد البيانات العلائقية (PostgreSQL / SQL) وتنظيم الاستعلامات وإدارة المخططات.',
        en: 'Designed relational database schemas (PostgreSQL / SQL), managed migrations, and structured clean query patterns.',
      },
      {
        ar: 'تطبيق آليات المصادقة وتفويض الصلاحيات وضمان حماية نقاط الاتصال البرمجية (Endpoints).',
        en: 'Implemented authentication, authorization controls, and secure endpoint communication.',
      },
    ],
    technologies: ['ASP.NET Core', 'REST APIs', 'PostgreSQL', 'SQL', 'Data Modeling', 'Security'],
  },
  {
    id: 'exp-server-infrastructure',
    role: {
      ar: 'إدارة الخوادم والبنية التحتية والنشر',
      en: 'Server Administration & Infrastructure',
    },
    organization: {
      ar: 'بيئات لينكس والاستضافة الإنتاجية',
      en: 'Linux Server Environments & Deployments',
    },
    scope: {
      ar: 'إدارة خوادم لينكس في البيئات الإنتاجية، ضبط الحاويات، وإعداد مسارات النشر الآمن والمستقر للأنظمة البرمجية.',
      en: 'Managed Linux production servers, containerized environments, domain setups, and reliable deployment workflows.',
    },
    highlights: [
      {
        ar: 'تهيئة وإدارة خوادم لينكس (Ubuntu / Debian) وضبط جدران الحماية والصلاحيات الأمنية.',
        en: 'Configured and administered Linux production servers with security baselines and firewall policies.',
      },
      {
        ar: 'استخدام Docker لإنشاء بيئات تشغيل معزولة وموحدة تسهل النشر والاختبار المستقر.',
        en: 'Implemented Docker containerization for isolated, reproducible service environments and deployments.',
      },
      {
        ar: 'إدارة النطاقات، شهادات الأمان SSL/TLS، وخوادم التوجيه العكسي (Reverse Proxies) ومراقبة استقرار الخوادم.',
        en: 'Handled domain records, SSL/TLS certificates, reverse proxy routing (Nginx), and service uptime stability.',
      },
    ],
    technologies: ['Linux (Ubuntu/Debian)', 'Docker', 'Nginx', 'SSL/TLS', 'DNS', 'Production Deployments'],
  },
  {
    id: 'exp-system-design',
    role: {
      ar: 'تصميم الأنظمة وهيكلة التطبيقات',
      en: 'System Design & Software Architecture',
    },
    organization: {
      ar: 'أسس المعمارية البرمجية المستدامة',
      en: 'Scalable Software Foundations',
    },
    scope: {
      ar: 'تحليل المتطلبات التقنية وتحويلها إلى معمارية واضحة ومستدامة تفصل بين طبقات النظام لتسهيل التطوير والصيانة.',
      en: 'Analyzed technical requirements and structured clean architectural boundaries separating data, presentation, and logic.',
    },
    highlights: [
      {
        ar: 'تصميم معمارية الأنظمة بفصل الاهتمامات (Separation of Concerns) لتفادي التعقيد غير المبرر.',
        en: 'Designed system architectures emphasizing separation of concerns to avoid unnecessary architectural overhead.',
      },
      {
        ar: 'تحديد حدود الخدمات ونقاط التكامل بين الواجهات الأمامية وقواعد البيانات والخوادم.',
        en: 'Defined clear service boundaries and integration contracts between frontend clients, APIs, and databases.',
      },
      {
        ar: 'مراعاة متطلبات الأداء العالي والتعافي من الأخطاء كعناصر أساسية في التصميم قبل كتابة الكود.',
        en: 'Incorporated performance, error handling, and reliability requirements into foundational system designs.',
      },
    ],
    technologies: ['System Architecture', 'Separation of Concerns', 'API Contracts', 'Reliability'],
  },
  {
    id: 'exp-technical-mentoring',
    role: {
      ar: 'التدريب التقني وإعداد المناهج البرمجية',
      en: 'Technical Mentoring & Developer Training',
    },
    organization: {
      ar: 'مبادرات تدريب المطورين ونقل المعرفة',
      en: 'Developer Education & Mentorship',
    },
    scope: {
      ar: 'توجيه المطورين وتبسيط المفاهيم البرمجية المعقدة من خلال مناهج عملية قائمة على بناء مشاريع حقيقية وتوظيف التقنيات الحديثة.',
      en: 'Mentored developers and deconstructed complex paradigms into practical, project-based engineering roadmaps.',
    },
    highlights: [
      {
        ar: 'تأليف مسار تدريبي تطبيقي متكامل (WEB CREATOR AI) يغطي دورة حياة إنتاج الويب من التفكير الهندسي إلى النشر والتسويق.',
        en: 'Authored an end-to-end practical curriculum (WEB CREATOR AI) covering the full web lifecycle from concept to production.',
      },
      {
        ar: 'مساعدة المطورين على فهم التفكير الهندسي العملي وأفضل ممارسات الكود النظيف وتجنب الأخطاء الشائعة.',
        en: 'Guided developers to cultivate an engineering mindset, adopt clean code principles, and avoid architectural pitfalls.',
      },
      {
        ar: 'دمج أدوات الذكاء الاصطناعي في سير عمل المطور كمضاعف للإنتاجية مع الحفاظ على التحكم الهندسي الكامل.',
        en: 'Integrated applied AI workflows into developer tooling to accelerate development velocity under firm architectural control.',
      },
    ],
    technologies: ['Curriculum Engineering', 'Hands-on Labs', 'Code Mentorship', 'Applied AI Workflows'],
  },
];
