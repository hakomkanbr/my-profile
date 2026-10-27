/**
 * Abdulhakim Kanbr — Instructor & Developer Profile Registry
 * Strictly typed against InstructorProfile in src/types/instructor.ts
 */

import { InstructorProfile } from '@/types';
import { WHATSAPP_CONFIG } from '@/lib/whatsapp';

export const INSTRUCTOR_PROFILE: InstructorProfile = {
  name: {
    ar: 'عبد الحكيم قنبر',
    en: 'Abdulhakim Kanbr',
  },
  roleTitle: {
    ar: 'مطور مواقع ومنتجات رقمية • مهندس برمجيات ومدرب تقني',
    en: 'Web & Digital Product Developer • Software Engineer & Instructor',
  },
  coreMessage: {
    ar: 'أحوّل الأفكار إلى مواقع ومنتجات رقمية، وأشارك خبرتي العملية مع المطورين والمتدربين.',
    en: 'I turn ideas into websites and digital products, and share practical experience with developers and trainees.',
  },
  briefIntro: {
    ar: 'أطوّر مواقع وأنظمة تساعد الشركات وأصحاب الأفكار على بناء حضورهم الرقمي وتنظيم أعمالهم. هنا أشارك أعمالي، والمنتجات التي أبنيها، والمعرفة التي أكتسبها خلال رحلتي.',
    en: 'I build websites and systems that help businesses and founders establish their digital presence and organize their operations. Here I share my work, the products I build, and the knowledge I gain along the way.',
  },
  story: {
    title: {
      ar: 'قصتي ومسيرتي المهنية',
      en: 'My Background & Journey',
    },
    paragraphs: [
      {
        ar: 'على مدار أكثر من 8 سنوات في تطوير البرمجيات، عملت على تحويل احتياجات الشركات وأصحاب المشاريع إلى مواقع ومنصات رقمية واضحة، سريعة، وسهلة الاستخدام.',
        en: 'Over more than 8 years in software development, I have helped businesses and founders turn their needs into clear, fast, and reliable websites and digital platforms.',
      },
      {
        ar: 'يركز عملي اليوم على ثلاثة مسارات رئيسية: تطوير المواقع والمتاجر الإلكترونية، وبناء الأنظمة المخصصة لإدارة الأعمال والعمليات اليومية، وتطوير المنتجات الرقمية السحابية (SaaS) مثل Share2Sells وMasar وCashPro.',
        en: 'My work today focuses on three core areas: building websites and online stores, developing custom systems to manage daily business operations, and creating SaaS digital products such as Share2Sells, Masar, and CashPro.',
      },
      {
        ar: 'إلى جانب العمل مع العملاء وبناء المنتجات، أقدم برنامج WEB CREATOR AI التدريبي لمساعدة المتدربين على تعلم تطوير المواقع الحديثة والاستفادة الصحيحة من أدوات الذكاء الاصطناعي لبناء مشاريع حقيقية خطوة بخطوة.',
        en: 'Alongside client projects and product building, I lead the WEB CREATOR AI training program to help learners build modern websites and use AI tools effectively through practical, step-by-step projects.',
      },
    ],
  },
  whatIBuild: {
    title: {
      ar: 'ماذا أبني وأطور؟',
      en: 'What I Build',
    },
    description: {
      ar: 'أطوّر حلولًا رقمية مصممة لخدمة أهداف العمل الفعلية وتسهيل تجربة المستخدم النهائي:',
      en: 'I build digital solutions designed to serve real business goals and make the end-user experience effortless:',
    },
    focusAreas: [
      {
        ar: 'المواقع التعريفية والمتاجر الإلكترونية السريعة والمتجاوبة مع الهواتف.',
        en: 'Fast, mobile-friendly company websites and online stores.',
      },
      {
        ar: 'الأنظمة المخصصة ولوحات التحكم لإدارة المبيعات، المخزون، والمحاسبة.',
        en: 'Custom business systems and dashboards for sales, inventory, and accounting.',
      },
      {
        ar: 'المنتجات الرقمية السحابية (SaaS) متعددة المستخدمين مثل Share2Sells وMasar وCashPro.',
        en: 'Multi-tenant SaaS digital products such as Share2Sells, Masar, and CashPro.',
      },
      {
        ar: 'واجهات البرمجة (APIs) وقواعد البيانات المستقرة والقابلة للتوسع.',
        en: 'Reliable backend APIs and scalable databases.',
      },
    ],
  },
  whatITeach: {
    title: {
      ar: 'ماذا أعلّم في البرامج التدريبية؟',
      en: 'What I Teach',
    },
    description: {
      ar: 'أركز في التدريب على المهارات العملية التي تمكّن المتدرب من بناء موقع حقيقي ونشره:',
      en: 'My training focuses on practical skills that enable trainees to build and launch real websites:',
    },
    coreTracks: [
      {
        ar: 'تخطيط الموقع وتحديد هدفه وجمهوره قبل كتابة الكود.',
        en: 'Planning the website structure, goal, and audience before writing code.',
      },
      {
        ar: 'بناء واجهات حديثة ومتجاوبة باستخدام HTML5 وCSS3 وTailwind CSS.',
        en: 'Building modern, responsive interfaces with HTML5, CSS3, and Tailwind CSS.',
      },
      {
        ar: 'إضافة التفاعل البرمجي وبناء تطبيقات الويب باستخدام JavaScript وReact وNext.js.',
        en: 'Adding interactivity and building web apps using JavaScript, React, and Next.js.',
      },
      {
        ar: 'استخدام أدوات الذكاء الاصطناعي بذكاء لتسريع التطوير ومراجعة الأخطاء.',
        en: 'Using AI tools effectively to speed up development and debug code.',
      },
      {
        ar: 'نشر المشاريع على الإنترنت وتجهيزها للعرض على العملاء.',
        en: 'Deploying projects live to the web and preparing them for clients.',
      },
    ],
  },
  developerPlusInstructor: {
    title: {
      ar: 'مطور يبني في السوق، ومدرب ينقل التجربة',
      en: 'A Developer Building in the Market & Sharing Practical Experience',
    },
    developerSide: {
      headline: {
        ar: 'في تطوير المشاريع والمنتجات',
        en: 'As a Product & Systems Developer',
      },
      points: [
        {
          ar: 'أكثر من 8 سنوات خبرة عملية في بناء المواقع والأنظمة الخلفية وقواعد البيانات.',
          en: '8+ years of hands-on experience building websites, backend systems, and databases.',
        },
        {
          ar: 'تطوير منتجات رقمية تعمل في السوق مثل Share2Sells وMasar وCashPro.',
          en: 'Building live SaaS products in the market including Share2Sells, Masar, and CashPro.',
        },
        {
          ar: 'اهتمام مباشر بسرعة الموقع، أمان البيانات، وسهولة الاستخدام على الهواتف.',
          en: 'Direct focus on site speed, data security, and smooth mobile usability.',
        },
      ],
    },
    instructorSide: {
      headline: {
        ar: 'في التدريب ونقل المعرفة',
        en: 'As a Technical Instructor',
      },
      points: [
        {
          ar: 'تبسيط المفاهيم البرمجية بلغة واضحة ومباشرة دون تعقيد غير ضروري.',
          en: 'Explaining programming concepts in clear, everyday language without unnecessary jargon.',
        },
        {
          ar: 'منهج عملي يعتمد على أنشطة قصيرة ومشاريع متدرجة تنتهي بموقع منشور.',
          en: 'Hands-on curriculum built around focused activities and progressive projects ending in a live site.',
        },
        {
          ar: 'متابعة مباشرة لإجابات المتدربين ومشاريعهم عبر واتساب لتقديم ملاحظات عملية.',
          en: 'Direct review of trainee activity submissions and projects via WhatsApp with actionable feedback.',
        },
      ],
    },
    synergyStatement: {
      ar: 'أقدّم للعملاء حلولًا مبنية على خبرة عملية، وأنقل للمتدربين ما يعمل فعلًا في المشاريع الحقيقية.',
      en: 'I deliver practical solutions for clients and teach trainees what actually works in real projects.',
    },
  },
  teachingPhilosophy: {
    title: {
      ar: 'ركائز منهجيتي في التدريب',
      en: 'Core Pillars of My Teaching Approach',
    },
    items: [
      {
        number: '01',
        title: {
          ar: 'الفهم والتخطيط قبل كتابة الكود',
          en: 'Understand & Plan Before Coding',
        },
        description: {
          ar: 'لا نبدأ بتوليد الكود عشوائيًا؛ نتعلم أولًا كيف نحدد هدف الصفحة وأقسامها الأساسية.',
          en: 'We never start by generating random code; first we define the page goal and core structure.',
        },
        icon: 'Compass',
      },
      {
        number: '02',
        title: {
          ar: 'خطوات صغيرة قابلة للتنفيذ والتسليم',
          en: 'Small, Actionable Steps',
        },
        description: {
          ar: 'كل جلسة مقسمة إلى أنشطة قصيرة وواضحة؛ تنفذ النشاط، تحفظ إجابتك، وترسلها عبر واتساب لتلقي الملاحظات.',
          en: 'Every session is divided into focused activities; complete the task, save your work, and send it via WhatsApp for feedback.',
        },
        icon: 'Layers',
      },
      {
        number: '03',
        title: {
          ar: 'الذكاء الاصطناعي مساعد لك لا بديل عن فهمك',
          en: 'AI as an Assistant, Not a Replacement for Understanding',
        },
        description: {
          ar: 'نبني الأساس البرمجي أولًا، ثم نستخدم الذكاء الاصطناعي لتسريع العمل وتحسين النصوص ومراجعة الأخطاء.',
          en: 'We build the foundation first, then use AI to speed up work, refine copy, and review bugs.',
        },
        icon: 'Sparkles',
      },
      {
        number: '04',
        title: {
          ar: 'التخرج بمشروع منشور على الإنترنت',
          en: 'Graduate with a Published Live Project',
        },
        description: {
          ar: 'الهدف النهائي ليس إتمام القراءة فقط، بل إطلاق موقع حقيقي على رابط مباشر يمكنك مشاركته بثقة.',
          en: 'The goal is not just reading lessons, but launching a real website on a live link you can share with confidence.',
        },
        icon: 'Rocket',
      },
    ],
  },
  skills: [
    {
      category: {
        ar: 'تطوير الواجهات والمواقع (Frontend)',
        en: 'Frontend & Web Development',
      },
      skills: [
        { name: 'Next.js (App Router)', level: 'core', badge: 'Primary' },
        { name: 'React & TypeScript', level: 'core', badge: 'Core' },
        { name: 'Tailwind CSS', level: 'core', badge: 'UI' },
        { name: 'HTML5 / CSS3 / SEO', level: 'core' },
      ],
    },
    {
      category: {
        ar: 'الأنظمة الخلفية وقواعد البيانات (Backend)',
        en: 'Backend Systems & Databases',
      },
      skills: [
        { name: 'C# & .NET Core', level: 'core', badge: 'Enterprise' },
        { name: 'PostgreSQL & SQL Server', level: 'core', badge: 'DB' },
        { name: 'RESTful APIs', level: 'core' },
        { name: 'Clean Architecture', level: 'advanced' },
      ],
    },
    {
      category: {
        ar: 'الاستضافة السحابية وأدوات التطوير (DevOps & AI)',
        en: 'Cloud Deployment, DevOps & AI Workflows',
      },
      skills: [
        { name: 'Docker & Linux Servers', level: 'core' },
        { name: 'CI/CD (GitHub & GitLab)', level: 'advanced' },
        { name: 'AI-Assisted Engineering', level: 'core' },
      ],
    },
  ],
  showcaseProjects: [
    {
      id: 'showcase-share2sells',
      title: {
        ar: 'منصة Share2Sells للمتاجر الرقمية وقوائم QR السريعة',
        en: 'Share2Sells — Digital Storefront & QR Menu Platform',
      },
      category: {
        ar: 'منتج رقمي (SaaS)',
        en: 'SaaS Product',
      },
      description: {
        ar: 'منصة تمكّن المتاجر والمطاعم والأنشطة التجارية من إطلاق متجر رقمي متكامل وقوائم تفاعلية برمز QR واستقبال الطلبات عبر واتساب ولوحة التحكم في دقائق.',
        en: 'A platform empowering merchants and restaurants to launch online storefronts, interactive QR digital menus, and WhatsApp order routing in minutes.',
      },
      role: {
        ar: 'تصميم وبناء المنظومة السحابية',
        en: 'System Architecture & Full-Stack Engineering',
      },
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'QR Engine'],
      demoUrl: 'https://share2sells.com',
      keyHighlight: {
        ar: 'إطلاق متجر رقمي وقائمة QR في دقائق مع توجيه الطلبات مباشرة إلى واتساب التاجر.',
        en: 'Launch a digital storefront and QR menu in minutes with direct WhatsApp order routing.',
      },
    },
    {
      id: 'showcase-masar',
      title: {
        ar: 'منظومة مسار (Masar) لإدارة الأعمال والمالية',
        en: 'Masar — Business Operations & Financial Management Suite',
      },
      category: {
        ar: 'منتج رقمي (SaaS)',
        en: 'SaaS Product',
      },
      description: {
        ar: 'منظومة لإدارة العملاء (CRM)، المشاريع، تسجيل ساعات العمل وتحويلها إلى فواتير، ومتابعة المصاريف والتدفقات المالية مع دعم تعدد الشركات والعملات.',
        en: 'A comprehensive suite for client CRM, project profitability, hourly billing, expense tracking, and multi-currency financial governance.',
      },
      role: {
        ar: 'تصميم وتطوير المنظومة وتجربة المستخدم',
        en: 'Architecture Design, Systems Engineering & UX',
      },
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Multi-Tenant'],
      demoUrl: 'https://masar.abdulhakimkanbr.com',
      keyHighlight: {
        ar: 'ربط العميل بالمشروع وساعات العمل والفاتورة والمصروفات في لوحة واحدة واضحة.',
        en: 'Connects clients, projects, hourly logs, invoices, and expenses in one clear dashboard.',
      },
    },
    {
      id: 'showcase-cashpro',
      title: {
        ar: 'نظام CashPro للعمليات المالية والتحويلات السريعة',
        en: 'CashPro — High-Speed Financial Operations & Liquidity System',
      },
      category: {
        ar: 'منتج رقمي (SaaS)',
        en: 'SaaS Product',
      },
      description: {
        ar: 'نظام رقمي سريع ومخصص لإدارة عمليات الصرافة، تسوية التحويلات النقدية، وإدارة السيولة وجلسات الكاونتر المباشرة.',
        en: 'Specialized high-speed operational system for exchange management, rapid cash remittance settlement, and real-time teller session control.',
      },
      role: {
        ar: 'تطوير المنظومة التشغيلية والواجهة السريعة',
        en: 'Operational Architecture & Fast POS UI',
      },
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Realtime Sync'],
      demoUrl: 'https://cashpro.abdulhakimkanbr.com',
      keyHighlight: {
        ar: 'إدارة دقيقة لجلسات الصرافين ومطابقة آلية للأرصدة النقدية عند نهاية اليوم.',
        en: 'Strict teller session attribution and automated end-of-day cash balance reconciliation.',
      },
    },
  ],
  messageToStudents: {
    title: {
      ar: 'رسالة إلى كل متدرب في WEB CREATOR AI',
      en: 'A Message to Every Trainee in WEB CREATOR AI',
    },
    content: [
      {
        ar: 'تعلّم بناء المواقع اليوم أصبح أسهل وأسرع بفضل الأدوات الحديثة والذكاء الاصطناعي، لكن السر الحقيقي للتميز هو أن تفهم ما تبنيه ولماذا تبنيه.',
        en: 'Learning to build websites today is faster thanks to modern tools and AI, but the real secret to standing out is understanding what you build and why.',
      },
      {
        ar: 'صممت لك هذا المسار ليكون واضحًا ومريحًا: ابدأ من الجلسة الحالية، نفّذ كل نشاط خطوة بخطوة، وأرسل نتيجتك عبر واتساب لأراجعها معك.',
        en: 'I designed this track to be clear and approachable: start with your current session, complete each activity step by step, and send your result via WhatsApp so we can review it together.',
      },
    ],
    closingQuote: {
      ar: 'أفضل طريقة لتعلّم بناء المواقع هي أن تبني موقعًا حقيقيًا وتطلقه للعالم.',
      en: 'The best way to learn web development is to build a real website and launch it to the world.',
    },
  },
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/abdulhakimkanbr',
      label: 'GitHub',
    },
    {
      platform: 'gitlab',
      url: 'https://gitlab.com/abdulhekimkanbr',
      label: 'GitLab',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/abdulhakim-kanbr-089119196',
      label: 'LinkedIn',
    },
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/abdulhakim.kanbr',
      label: 'Instagram',
    },
  ],
  email: 'abdulhekimkanbr@gmail.com',
  phone: WHATSAPP_CONFIG.phoneE164,
  phoneDisplay: WHATSAPP_CONFIG.phoneDisplay,
  yearsOfExperience: '8+',
};
