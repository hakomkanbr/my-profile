/**
 * Abdulhakim Kanbr — Portfolio Projects Registry & Governance
 * 
 * Strict Grounding & Privacy Rules:
 * 1. Single Source of Truth: All projects (SaaS and Client) are maintained here.
 * 2. Granular Permission Review: Every client project has independent permission flags.
 * 3. Default Hidden: Absence of confirmed authorization defaults to reviewStatus='pending' & visibility='hidden'.
 * 4. Zero Data Leakage: Hidden projects are stripped before reaching client bundles, sitemap, meta, or static routes.
 * 5. Verified Links: Only verified (HTTP 200) and authorized URLs are exposed as navigation targets.
 */

import {
  PortfolioProject,
  ProjectCategoryKey,
} from '@/types';

// =============================================================================
// 1. MASTER PROJECTS REGISTRY (Internal Grounded Catalog)
// =============================================================================

export const MASTER_PROJECTS_REGISTRY: PortfolioProject[] = [
  // ---------------------------------------------------------------------------
  // SaaS Products (Verified, Active, Public)
  // ---------------------------------------------------------------------------
  {
    id: 'saas-share2sells',
    slug: 'share2sells',
    level: 1,
    featured: true,
    title: {
      ar: 'منصة Share2Sells للمتاجر الرقمية والقوائم السريعة',
      en: 'Share2Sells — Digital Storefront & Menu Platform',
    },
    tagline: {
      ar: 'منصة SaaS تمكّن الأنشطة التجارية والمتاجر من إطلاق متجر رقمي متكامل وقوائم تفاعلية برمز QR وإدارة الطلبات والمدفوعات خلال دقائق.',
      en: 'A modern SaaS platform empowering merchants and businesses to launch online storefronts and interactive QR digital menus in minutes.',
    },
    category: {
      ar: 'منتجات SaaS والمنصات السحابية',
      en: 'SaaS Products & Cloud Platforms',
    },
    categoryKey: 'saas',
    role: {
      ar: 'المعمارية البرمجية، هندسة الواجهات، وبناء المنظومة السحابية',
      en: 'System Architecture, Frontend Engineering & Cloud Systems',
    },
    year: '2025',
    status: {
      ar: 'منصة نشطة وتعمل في الإنتاج',
      en: 'Active & In Production',
    },
    techStack: ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'QR Engine', 'Cloud Edge'],
    liveUrl: 'https://share2sells.com',
    verifiedUrl: true,
    hasCaseStudy: true,
    reviewStatus: 'approved',
    visibility: 'public',
    permissions: {
      clientName: true,
      clientLogo: true,
      projectUrl: true,
      screenshots: true,
      caseStudy: true,
      testimonial: false,
      metrics: false,
    },
    productAudience: {
      ar: 'أصحاب المتاجر والمطاعم والأنشطة التجارية الراغبين في البيع الرقمي الفوري وقوائم QR السريعة دون تعقيد تقني.',
      en: 'Retail merchants, restaurants, and digital sellers seeking instant online selling and QR menus with zero tech friction.',
    },
    overview: {
      ar: 'منصة Share2Sells هي حل سحابي متكامل يوفّر للبائعين وأصحاب الأنشطة التجارية كل ما يلزم للانطلاق والبيع الرقمي في دقائق معدودة. يشمل النظام إنشاء كتالوج المنتجات، توليد رموز QR تفاعلية، إدارة الطلبات والمخزون، وتلقي تنبيهات الشراء المباشرة عبر واتساب ولوحة التحكم المدمجة.',
      en: 'Share2Sells is an end-to-end SaaS commerce engine engineered to help merchants launch digital storefronts rapidly. The platform packages product catalog management, dynamic QR menu generation, order dispatch via WhatsApp and web dashboards, and frictionless buyer checkout.',
    },
    problem: {
      ar: 'يواجه أصحاب المتاجر التقليدية والمشاريع الناشئة صعوبة وتكلفة عالية في بناء متاجر إلكترونية تقليدية معقدة، فضلًا عن بطء التحديث وصعوبة ربط الطلبات بقنوات التواصل المفضلة للمستهلك مثل واتساب.',
      en: 'Traditional merchants face high setup costs and complex workflows when attempting to sell online, alongside friction in routing orders to everyday communication channels like WhatsApp.',
    },
    solution: {
      ar: 'بناء منصة خفيفة الوزن وسريعة التحميل تتيح للتاجر إنشاء متجره الرقمي وقائمته الذكية فوراً، مع لوحة تحكم تفاعلية لإدارة البضائع، وتوليد روابط ورموز QR مخصصة للطباعة والمشاركة المباشرة.',
      en: 'Engineered a lightweight, high-performance platform enabling merchants to publish catalogs and printable QR codes instantly, complete with an administrative dashboard and direct WhatsApp order dispatch.',
    },
    architecture: {
      ar: 'معمارية سحابية هجينة تعتمد على Next.js App Router مع فصل كامل بين واجهات المتاجر العامة (Storefronts) ولوحة التحكم الإدارية، وتوليد ديناميكي لبيانات الميتا وصور المعاينة الاجتماعية.',
      en: 'Hybrid Next.js App Router architecture strictly decoupling consumer-facing storefronts from administrative portals, featuring dynamic metadata generation and edge caching.',
    },
    technicalImplementation: [
      {
        title: {
          ar: 'نظام القوائم الذكية ورموز QR المتكيفة',
          en: 'Dynamic QR Engine & Responsive Catalog',
        },
        details: [
          {
            ar: 'توليد رموز QR متجهية عالية الدقة مخصصة للطباعة على الطاولات والملصقات التجارية.',
            en: 'Vector-based high-resolution QR generation calibrated for physical print and tabletop placement.',
          },
          {
            ar: 'واجهات مستخدم سريعة التحميل متوافقة بالكامل مع مختلف شاشات الهواتف ومتصفحات الجوال.',
            en: 'Mobile-first responsive storefronts optimized for sub-second first contentful paint on mobile networks.',
          },
        ],
      },
      {
        title: {
          ar: 'أتمتة توجيه الطلبات والمزامنة',
          en: 'Order Routing & WhatsApp Dispatch',
        },
        details: [
          {
            ar: 'تجهيز سلة الشراء وصياغة ملخص الطلب تلقائياً وتوجيهه إلى رقم واتساب الخاص بالتاجر بنقرة واحدة.',
            en: 'Automated cart consolidation formatting structured order manifests dispatched directly to merchant WhatsApp endpoints.',
          },
          {
            ar: 'مزامنة الحالة اللحظية للطلبات عبر لوحة التحكم مع تصنيف المنتجات والأسعار.',
            en: 'Real-time order state updates within the admin dashboard paired with tiered product categories.',
          },
        ],
      },
    ],
    infrastructure: {
      ar: 'منشورة عبر بيئة سحابية موزعة عالمياً لضمان زمن استجابة متدنٍ للزوار في مختلف المناطق الجغرافية.',
      en: 'Deployed on globally distributed edge infrastructure ensuring minimal latency for international and local shoppers.',
    },
    keyFeatures: [
      {
        ar: 'إنشاء متجر رقمي وقائمة أسعار ذكية مع رمز QR في دقائق دون خبرة برمجية.',
        en: 'Instant storefront creation and dynamic QR digital menus without technical dependencies.',
      },
      {
        ar: 'استقبال الطلبات ومزامنتها مباشرة وتوجيهها للمبيعات عبر واتساب.',
        en: 'Streamlined WhatsApp order routing allowing seamless customer checkout conversations.',
      },
      {
        ar: 'لوحة تحكم لإدارة المنتجات، الصور، الأسعار، وحالات توفر الأصناف.',
        en: 'Centralized dashboard for managing products, imagery, pricing, and stock status.',
      },
      {
        ar: 'دعم كامل للغتين العربية والإنجليزية مع اتجاهي العرض RTL وLTR.',
        en: 'Full bilingual Arabic and English support with native RTL and LTR ergonomics.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'تقليل خطوات مسار الشراء للعميل وربطه بالتطبيقات المألوفة يومياً يرفع معدلات التحويل بصورة ملحوظة.',
        en: 'Streamlining checkout flows into familiar daily tools like WhatsApp significantly reduces abandonment.',
      },
    ],
  },

  {
    id: 'saas-masar',
    slug: 'masar',
    level: 1,
    featured: true,
    title: {
      ar: 'منظومة مسار (Masar) لإدارة الأعمال والمالية',
      en: 'Masar — Business Operations & Financial Management Suite',
    },
    tagline: {
      ar: 'منظومة SaaS عربية شاملة لإدارة العملاء (CRM)، المشاريع، تسجيل الوقت بالساعة، والتدفقات المالية والمصاريف ودعم تعدد الشركات والعملات.',
      en: 'Comprehensive bilingual SaaS suite for client CRM, project profitability, hourly billing, expense tracking, and multi-tenant financial governance.',
    },
    category: {
      ar: 'منتجات SaaS والمنصات السحابية',
      en: 'SaaS Products & Cloud Platforms',
    },
    categoryKey: 'saas',
    role: {
      ar: 'التصميم المعماري، هندسة الواجهات والأنظمة، وهندسة تجربة المستخدم',
      en: 'Architecture Design, Frontend & Systems Engineering, UX Architecture',
    },
    year: '2025',
    status: {
      ar: 'نظام نشط ومكتمل',
      en: 'Active & In Production',
    },
    techStack: ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'Multi-Tenant Architecture', 'Financial Reporting'],
    liveUrl: 'https://masar.abdulhakimkanbr.com',
    verifiedUrl: true,
    hasCaseStudy: true,
    reviewStatus: 'approved',
    visibility: 'public',
    permissions: {
      clientName: true,
      clientLogo: true,
      projectUrl: true,
      screenshots: true,
      caseStudy: true,
      testimonial: false,
      metrics: false,
    },
    productAudience: {
      ar: 'رواد الأعمال، أصحاب الشركات الصغيرة والمتوسطة، الفرق الاحترافية، والمستقلون الراغبون في السيطرة على مالية أعمالهم ومشاريعهم.',
      en: 'Entrepreneurs, SMB owners, consulting teams, and freelancers needing consolidated control over client billing and cash flow.',
    },
    overview: {
      ar: 'تمثل منظومة مسار منصة إدارة أعمال متكاملة صُممت لرواد الأعمال والشركات الصغيرة والمتوسطة والفرق المهنية. تجمع المنصة إدارة العملاء والموردين، ربط المشاريع بالميزانيات ومتابعة أرباحها، توثيق ساعات العمل وتحويلها إلى فواتير، وتتبع المصاريف والاشتراكات المتكررة مع دعم كامل لتعدد العملات بأسعار صرف حية.',
      en: 'Masar is an all-in-one business operations suite engineered for entrepreneurs, SMBs, and professional agencies. It unifies CRM, project milestone accounting, hourly time-tracking, recurring expense monitoring, and multi-currency invoicing with live exchange rates in a fast bilingual interface.',
    },
    problem: {
      ar: 'تشتت العمليات اليومية بين ملفات Excel المتفرقة، تطبيقات تتبع الوقت المنفصلة، وبرامج الفواتير المعقدة، مما يؤدي إلى ضياع ساعات العمل غير المفوترة وعدم وضوح صافي أرباح كل مشروع.',
      en: 'Business owners struggle with fragmented tools: disparate spreadsheets, standalone time trackers, and clumsy accounting apps, causing unbilled hours and opaque project margins.',
    },
    solution: {
      ar: 'تصميم منظومة مركزية واحدة تربط العميل بالمشروع وساعات العمل والفاتورة والمصروفات، مع تقديم مؤشرات مالية لحظية عن الإيرادات، التكاليف التشغيلية، وصافي الأرباح.',
      en: 'Delivered a unified platform connecting clients to projects, hourly worklogs, invoices, and operational expenses, backed by instant financial health telemetry.',
    },
    architecture: {
      ar: 'معمارية تدعم تعدد المنظمات (Multi-Tenant) وتعدد العملات، مع نموذج تدقيق محاسبي دقيق يسجل كل عملية تعديل لحماية شفافية البيانات المالية ومطابقة معايير الحوكمة.',
      en: 'Multi-tenant, multi-currency architecture incorporating immutable audit trails on financial ledger adjustments to safeguard integrity and governance.',
    },
    technicalImplementation: [
      {
        title: {
          ar: 'إدارة الكيانات والفوترة متعددة الأنماط',
          en: 'Entity Lifecycle & Flexible Billing Models',
        },
        details: [
          {
            ar: 'دعم 5 طرق مخصصة للمحاسبة: بالساعة، بالمشروع، عقد دوري، راتب شهري، أو مبلغ مقطوع.',
            en: 'Engineered 5 discrete billing models: hourly, milestone, recurring retainer, monthly payroll, and fixed fee.',
          },
          {
            ar: 'سجل تاريخي مالي شامل يربط كل دفعة وفاتورة بالكيان والمشروع ذي الصلة.',
            en: 'Comprehensive chronological financial ledger binding receipts and invoices to target accounts.',
          },
        ],
      },
      {
        title: {
          ar: 'حوكمة الصلاحيات وسجل التدقيق الأمني',
          en: 'Role-Based Access Control & Audit Log',
        },
        details: [
          {
            ar: 'نظام أذونات مؤسسي يشمل 6 مستويات وصول مع عزل كامل للبيانات الحساسة.',
            en: 'Role-based authorization hierarchy spanning 6 permission tiers isolating sensitive ledgers.',
          },
          {
            ar: 'تسجيل غير قابل للتلاعب لكافة المعاملات مع توثيق هوية المستخدم والوقت.',
            en: 'Immutable operational audit logging tracking user identity, timestamps, and mutated fields.',
          },
        ],
      },
    ],
    infrastructure: {
      ar: 'منظومة ويب متجاوبة بالكامل مع إمكانية التصدير الفوري لكافة التقارير بصيغة Excel، وتطبيق أندرويد مرافق.',
      en: 'Responsive web application featuring instant structured Excel report export and a companion Android client.',
    },
    keyFeatures: [
      {
        ar: 'إدارة شاملة للعملاء (CRM) مع تصنيف الكيانات وتحديد طرق الفوترة الدقيقة.',
        en: 'Comprehensive CRM for clients and vendors with granular billing parameter definitions.',
      },
      {
        ar: 'متابعة المشاريع، حساب ساعات العمل، وقياس هامش الربح الفعلي لكل مشروع.',
        en: 'Project milestone tracking with hourly time logging and true net-margin calculation.',
      },
      {
        ar: 'إصدار الفواتير، تتبع الدفعات المتأخرة، وإدارة الاشتراكات والمصاريف التشغيلية.',
        en: 'Professional invoicing, overdue payment notifications, and recurring expense monitoring.',
      },
      {
        ar: 'دعم كامل لتعدد العملات، أسعار الصرف الحية، وتعدد الشركات من حساب موحد.',
        en: 'Multi-currency support with live conversions and multi-organization switching.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'تصميم تدفقات الأعمال المالية بما يطابق الواقع اليومي للمؤسسات يقلل مقاومة تبني الأنظمة الجديدة.',
        en: 'Aligning financial workflows with daily real-world operations drastically boosts system adoption.',
      },
    ],
  },

  {
    id: 'saas-cashpro',
    slug: 'cashpro',
    level: 1,
    featured: false,
    title: {
      ar: 'نظام CashPro للعمليات المالية والتحويلات السريعة',
      en: 'CashPro — High-Speed Financial Operations & Liquidity System',
    },
    tagline: {
      ar: 'نظام رقمي سريع ومتخصص لإدارة عمليات الصرافة، تسوية التحويلات النقدية، وإدارة السيولة وجلسات العمل المباشرة.',
      en: 'Specialized high-speed operational system for exchange management, rapid cash remittance settlement, and real-time teller session control.',
    },
    category: {
      ar: 'منتجات SaaS والمنصات السحابية',
      en: 'SaaS Products & Cloud Platforms',
    },
    categoryKey: 'saas',
    role: {
      ar: 'هندسة المنظومة التشغيلية، إدارة الحالة اللحظية، وتصميم الواجهة السريعة',
      en: 'Operational Architecture, Real-Time State Management & Fast POS UI',
    },
    year: '2025',
    status: {
      ar: 'نظام نشط ومستخدم في العمليات الحية',
      en: 'Active & In Production',
    },
    techStack: ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'Realtime Sync', 'Financial Controls'],
    liveUrl: 'https://cashpro.abdulhakimkanbr.com',
    verifiedUrl: true,
    hasCaseStudy: true,
    reviewStatus: 'approved',
    visibility: 'public',
    permissions: {
      clientName: true,
      clientLogo: true,
      projectUrl: true,
      screenshots: false, // Screenshots withheld to protect operational views
      caseStudy: true,
      testimonial: false,
      metrics: false,
    },
    productAudience: {
      ar: 'مكاتب الصرافة، مقدمو خدمات التحويلات النقدية، ونقاط التسوية المالية السريعة التي تحتاج استجابة لحظية ودقة محاسبية مطلقة.',
      en: 'Money transfer agencies, exchange counters, and cash points requiring sub-second response times and zero accounting discrepancies.',
    },
    overview: {
      ar: 'صُمم نظام CashPro لتلبية متطلبات بيئات العمل المالية والصرافة التي تحتاج إلى سرعة استجابة فائقة وتسجيل دقيق للعمليات النقدية والتحويلات. يركز النظام على إدارة جلسات الكاونتر (Teller Sessions)، مطابقة الأرصدة، وعزل البيانات المالية مع واجهة استخدام مخصصة لتقليل الأخطاء البشرية وسرعة إدخال المعاملات عبر اختصارات لوحة المفاتيح.',
      en: 'CashPro is engineered for financial counters and exchange operations requiring sub-second execution, rigorous cash handling, and real-time transaction reconciliation. The platform centers on teller session tracking, liquidity balance audits, and high-efficiency keyboard-friendly inputs.',
    },
    problem: {
      ar: 'في بيئات الصرافة والمعاملات النقدية السريعة، تؤدي الواجهات الثقيلة والبطيئة إلى طوابير انتظار وأخطاء في إدخال المبالغ وفروقات نقدية عند إغلاق الجلسة.',
      en: 'In fast-paced cash exchange environments, sluggish software introduces teller delays, data entry errors, and painful end-of-day cash reconciliation variances.',
    },
    solution: {
      ar: 'بناء واجهة كاونتر فائقة الخفة تعتمد على إدارة الحالة محلياً والمزامنة الموثوقة، مع اختصارات تشغيلية لسرعة الإدخال، وحساب آلي للمطابقات وفروق الأرصدة لحظة بلحظة.',
      en: 'Built an ultra-lean teller interface utilizing real-time state synchronization, keyboard shortcuts, and automated instant variance calculation upon session closure.',
    },
    architecture: {
      ar: 'معمارية متينة تركز على معالجة البيانات دون تأخير (Low-Latency Execution)، مع عزل جلسات الصرافين لضمان عدم تداخل العهد النقدية.',
      en: 'Low-latency architecture isolating teller sessions to maintain unambiguous custody boundaries across active cash drawers.',
    },
    technicalImplementation: [
      {
        title: {
          ar: 'إدارة جلسات العمل ومطابقة العهدة النقدية',
          en: 'Teller Sessions & Real-Time Reconciliation',
        },
        details: [
          {
            ar: 'توثيق فتح وإغلاق جلسة الكاونتر مع عدّ نقدي دقيق لكافة الفئات والعملات.',
            en: 'Rigorous open/close session checkpoints requiring precise denomination and currency auditing.',
          },
          {
            ar: 'كشف لحظي للفروقات بين الرصيد المحاسبي المتوقع والنقد الفعلي الموجود.',
            en: 'Real-time discrepancy detection calculating differences between book balance and physical cash drawer counts.',
          },
        ],
      },
      {
        title: {
          ar: 'واجهة استخدام مخصصة للسرعة والتركيز',
          en: 'Ergonomic Speed & Keyboard Optimization',
        },
        details: [
          {
            ar: 'دعم كامل للتحكم بلوحة المفاتيح لتسجيل العمليات دون الحاجة للمس الفأرة.',
            en: 'Full keyboard navigation allowing high-frequency transactions without mouse intervention.',
          },
          {
            ar: 'معالجة فورية للبيانات وتحديث الأرصدة دون إعادة تحميل الصفحة.',
            en: 'Sub-second in-memory state updates reflecting balance changes without full-page refreshes.',
          },
        ],
      },
    ],
    infrastructure: {
      ar: 'نظام محمي بروابط عمل مشفرة وتحقق دوري من جلسات العمل لضمان استمرارية التشغيل.',
      en: 'Protected session handshakes and encrypted data payloads guaranteeing uninterrupted counter uptime.',
    },
    keyFeatures: [
      {
        ar: 'إدارة دقيقة لجلسات الصرافين وربط كل عملية مالية بالصراف المسؤول.',
        en: 'Strict teller custody attribution binding every exchange operation to the active operator.',
      },
      {
        ar: 'تسجيل سريع للحركات النقدية والتحويلات مع التحقق الفوري من صحة المدخلات.',
        en: 'Rapid transaction recording with continuous real-time validation to eliminate entry mistakes.',
      },
      {
        ar: 'مطابقة آلية للرصيد عند نهاية اليوم وإصدار تقرير جرد مفصل.',
        en: 'Automated end-of-day balance reconciliations with comprehensive cash-audit summaries.',
      },
      {
        ar: 'واجهة عربية واضحة مصممة لتقليل إجهاد العين أثناء العمل الطويل.',
        en: 'High-contrast bilingual interface designed to minimize operator eye fatigue during high-volume shifts.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'السرعة والوضوح في الأنظمة المالية الحساسة أكثر أهمية للمستخدمين من أي مؤثرات جمالية ثانوية.',
        en: 'In high-stakes financial operations, raw speed and clarity vastly outweigh aesthetic embellishments.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Educational & Engineering Platform (Active, Public)
  // ---------------------------------------------------------------------------
  {
    id: 'platform-web-creator-ai',
    slug: 'web-creator-ai-platform',
    level: 1,
    featured: false,
    title: {
      ar: 'منصة WEB CREATOR AI للتدريب الهندسي',
      en: 'WEB CREATOR AI Platform',
    },
    tagline: {
      ar: 'نظام ويب تفاعلي متكامل يضم مسارات تدريبية، معامل كود وذكاء اصطناعي، ونظام حفظ تقدم محلي.',
      en: 'Full-featured interactive web platform combining structured engineering roadmaps, AI workflow labs, and offline-first state persistence.',
    },
    category: {
      ar: 'منتجات SaaS والمنصات السحابية',
      en: 'SaaS Products & Cloud Platforms',
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
    verifiedUrl: true,
    hasCaseStudy: true,
    reviewStatus: 'approved',
    visibility: 'public',
    permissions: {
      clientName: true,
      clientLogo: true,
      projectUrl: true,
      screenshots: true,
      caseStudy: true,
      testimonial: false,
      metrics: false,
    },
    overview: {
      ar: 'منصة WEB CREATOR AI هي بيئة تدريبية وهندسية تفاعلية متكاملة، صُممت لتوجيه المتعلمين والمطورين عبر مسار منهجي يتألف من 7 مراحل من التفكير والتصميم المعماري وحتى النشر والتسويق.',
      en: 'WEB CREATOR AI is an interactive engineering learning platform designed to guide developers through a structured 7-stage journey from concept and architecture to production deployment.',
    },
    problem: {
      ar: 'الحاجة لبناء بيئة تدريبية شاملة تجمع بين عرض المنهج النظري، التطبيق العملي التفاعلي، أدوات الذكاء الاصطناعي، وحفظ تقدم المتعلم دون فرض تسجيل دخول إجباري.',
      en: 'The project required an educational platform combining theoretical curriculum delivery, interactive labs, applied AI guidance, and learner progress tracking without mandatory login.',
    },
    solution: {
      ar: 'تصميم معمارية تعتمد على Server Components للعرض الأولي السريع، مع عزل المكونات التفاعلية كـ Client Components مدعومة بنظام Zustand وتخزين محلي متين.',
      en: 'Designed an architecture leveraging Next.js Server Components for instant delivery, isolating stateful widgets with Zustand LocalStorage persistence and bilingual RTL/LTR support.',
    },
    architecture: {
      ar: 'معمارية معيارية مبنية على Next.js App Router مع فصل كامل بين طبقة البيانات الثابتة المحمية بالأنماط وطبقة واجهات العرض.',
      en: 'Modular Next.js App Router architecture strictly decoupling typed content registries from rendering layouts.',
    },
    keyFeatures: [
      {
        ar: 'خارطة طريق تفاعلية مقسمة إلى 7 مراحل هندسية متكاملة.',
        en: 'Interactive 7-stage roadmap spanning Think, Design, Build, Develop, Enhance, Launch, and Grow.',
      },
      {
        ar: 'فهرس متكامل يضم 10 وحدات تدريبية مع تمارين وتحديات برمجية عملية.',
        en: 'Comprehensive directory of 10 engineering modules packed with practical code challenges.',
      },
      {
        ar: 'مختبر ذكاء اصطناعي تفاعلي يضم موجهات هندسية مساعدة للمطورين.',
        en: 'Applied AI lab featuring developer prompts and workflow acceleration patterns.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'فصل طبقة البيانات عن المكونات الرسومية يمنح المشروع مرونة استثنائية للتوسع المستقبلي.',
        en: 'Strict separation of data registries from UI components provides unparalleled scalability.',
      },
    ],
  },

  {
    id: 'platform-portfolio-showcase',
    slug: 'developer-engineering-portfolio',
    level: 1,
    featured: false,
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
    verifiedUrl: true,
    hasCaseStudy: true,
    reviewStatus: 'approved',
    visibility: 'public',
    permissions: {
      clientName: true,
      clientLogo: true,
      projectUrl: true,
      screenshots: true,
      caseStudy: true,
      testimonial: false,
      metrics: false,
    },
    overview: {
      ar: 'منصة الملف المهني ومعرض الأعمال المخصصة للمهندس عبد الحكيم قنبر. صُممت لتقديم الخبرات الهندسية، المشاريع الواقعية، ومجالات التركيز بأسلوب رصين يعكس النضج البرمجي والتفكير الشامل للأنظمة.',
      en: 'Personal engineering portfolio and project showcase for Abdulhakim Kanbr. Designed to present technical capabilities, real-world projects, and architectural focus with grounded professionalism.',
    },
    problem: {
      ar: 'الحاجة إلى تقديم خبرة هندسية تمتد لأكثر من 8 سنوات عبر موقع شخصي متكامل يجمع بين الهوية البصرية الأنيقة، الأداء الفائق، ودعم اللغتين العربية والإنجليزية.',
      en: 'The challenge was to communicate 8+ years of engineering breadth through a portfolio marrying clean visual identity, optimal performance, and native bilingual support.',
    },
    solution: {
      ar: 'بناء موقع يعتمد على لوحة ألوان رصينة ومعمارية دلالية تضمن سرعة التحميل والتوافق التام مع محركات البحث ومعايير الوصول.',
      en: 'Architected a streamlined web application with semantic markup, structured JSON-LD schemas, and reusable page shells ensuring accessibility and performance.',
    },
    keyFeatures: [
      {
        ar: 'واجهة رئيسية متكاملة تقدم الهوية والخبرة والتركيز الهندسي في ثوانٍ معدودة.',
        en: 'Refined hero section communicating professional positioning, experience, and core value.',
      },
      {
        ar: 'معرض دراسات حالة منظم يبرز القرارات الهندسية والتحديات البرمجية.',
        en: 'Structured case study directory highlighting architectural decisions, challenges, and solutions.',
      },
    ],
  },

  {
    id: 'platform-presentation-engine',
    slug: 'web-creator-ai-presentation-engine',
    level: 2,
    featured: false,
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
    verifiedUrl: true,
    hasCaseStudy: true,
    reviewStatus: 'approved',
    visibility: 'public',
    permissions: {
      clientName: true,
      clientLogo: true,
      projectUrl: true,
      screenshots: true,
      caseStudy: true,
      testimonial: false,
      metrics: false,
    },
    overview: {
      ar: 'نظام عرض تقديمي تفاعلي متكامل مدمج داخل منصة التدريب، مصمم ليخدم المدرب والمتعلم على حد سواء من خلال شرائح غنية بالمفاهيم وأسئلة تفاعلية وملاحظات المدرب.',
      en: 'An embedded, interactive slide engine engineered for both instructors and learners, presenting curriculum concepts with quizzes and live speaker notes.',
    },
    keyFeatures: [
      {
        ar: 'تنقل سلس بلوحة المفاتيح (الأسهم، المسافة، مفتاح ESC للخروج).',
        en: 'Intuitive keyboard controls (Arrow keys, Spacebar, ESC to exit).',
      },
      {
        ar: 'وضع ملاحظات المدرب المخصص (Speaker Notes) لتسهيل الشرح المباشر.',
        en: 'Dedicated speaker notes panel to support live lecture delivery.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Client Projects (Sanitized & Governed under Case 2: Anonymized Publication)
  // ---------------------------------------------------------------------------
  {
    id: 'client-hayrukum',
    slug: 'community-services-portal',
    level: 2,
    featured: false,
    title: {
      ar: 'بوابة رقمية لخدمات المستفيدين والتعليم المجتمعي',
      en: 'Institutional Community Services & Identity Portal',
    },
    tagline: {
      ar: 'منصة إلكترونية تعليمية ومجتمعية لخدمة المستفيدين وتوثيق برامج التعلّم والمبادرات.',
      en: 'Digital web platform for community educational programs, student management, and authenticated access.',
    },
    category: {
      ar: 'مشاريع وأنظمة العملاء',
      en: 'Client Projects & Systems',
    },
    categoryKey: 'client',
    role: {
      ar: 'تطوير المنصة والحلول البرمجية للويب',
      en: 'Web Platform Development & Software Engineering',
    },
    year: '2024',
    status: {
      ar: 'منصة نشطة وتعمل في الإنتاج',
      en: 'Active & In Production',
    },
    techStack: ['Next.js', 'Ant Design', 'TypeScript', 'Responsive Design', 'Database Systems'],
    liveUrl: 'https://hayrukum.com',
    verifiedUrl: true,
    hasCaseStudy: false,
    reviewStatus: 'pending',
    visibility: 'hidden',
    permissions: {
      clientName: false,
      clientLogo: false,
      projectUrl: false,
      screenshots: false,
      caseStudy: false,
      testimonial: false,
      metrics: false,
    },
    internalName: 'منصة خيركم الإلكترونية (hayrukum.com)',
    internalNotes: 'الموقع متاح على الإنترنت وتم التحقق من النطاق. يُعرض كدراسة حالة مجهّلة لحين اعتماد إذن النشر الصريح.',
    missingInformationForPublication: [
      'موافقة كتابية من العميل تسمح بذكر اسم المنصة في معرض الأعمال',
      'تحديد ما إذا كان يُسمح بوضع رابط النطاق الخارجي أو الشعار',
      'توثيق الدور الفعلي وتاريخ التنفيذ بدقة قبل صياغة دراسة الحالة الكاملة',
    ],
    overview: {
      ar: 'بوابة رقمية لجهة خيرية ومجتمعية تهدف إلى تنظيم وتسهيل خدمات المستفيدين وبرامج التعليم مع توفير تسجيل وتحقق آمن للبيانات.',
      en: 'Community-facing institutional portal designed to coordinate beneficiary services and educational programs with secure authentication.',
    },
    keyFeatures: [],
  },

  {
    id: 'client-umutnesli',
    slug: 'academic-institute-portal',
    level: 2,
    featured: false,
    title: {
      ar: 'بوابة ويب مؤسسية لإدارة الأنشطة والبرامج التعليمية',
      en: 'Institutional Educational Portal & Program Management',
    },
    tagline: {
      ar: 'بوابة تعليمية وثقافية للمعهد التعليمي مع نظام إدارة المحتوى والتعريف بالأنشطة.',
      en: 'Educational and institutional web portal for curriculum presentation, academic programs, and student engagement.',
    },
    category: {
      ar: 'مشاريع وأنظمة العملاء',
      en: 'Client Projects & Systems',
    },
    categoryKey: 'client',
    role: {
      ar: 'تطوير موقع المنصة وإدارة المحتوى والواجهات',
      en: 'Web Portal Development & UI Architecture',
    },
    year: '2024',
    status: {
      ar: 'منصة نشطة وتعمل في الإنتاج',
      en: 'Active & In Production',
    },
    techStack: ['Next.js', 'Ant Design', 'TypeScript', 'Responsive UI', 'Content Systems'],
    liveUrl: 'https://umutnesli.com',
    verifiedUrl: true,
    hasCaseStudy: false,
    reviewStatus: 'pending',
    visibility: 'hidden',
    permissions: {
      clientName: false,
      clientLogo: false,
      projectUrl: false,
      screenshots: false,
      caseStudy: false,
      testimonial: false,
      metrics: false,
    },
    internalName: 'معهد جيل الأمل (Umut Nesli)',
    internalNotes: 'الموقع نشط. يُعرض مجهّلاً لحين الحصول على موافقة إدارة المعهد قبل الإدراج بالاسم التجاري.',
    missingInformationForPublication: [
      'إذن رسمي من إدارة المعهد لنشر العمل بالاسم التجاري',
      'تحديد صلاحيات إظهار الشعار أو الرابط المباشر',
      'اعتماد التفاصيل التقنية والدور المنفذ بدقة',
    ],
    overview: {
      ar: 'بوابة ويب متكاملة لمعهد تعليمي وتدريبي مؤسسي، تعرض المسارات الدراسية والمناهج والأنشطة الثقافية بطريقة تفاعلية ومنسقة.',
      en: 'Comprehensive institutional web portal presenting educational curricula, academic pathways, and community cultural initiatives.',
    },
    keyFeatures: [],
  },

  {
    id: 'client-safanur-ecommerce',
    slug: 'retail-ecommerce-platform',
    level: 2,
    featured: false,
    title: {
      ar: 'متجر تجارة إلكترونية وسلة شراء سريعة لقطاع التجزئة',
      en: 'Retail E-Commerce Platform & High-Speed Checkout',
    },
    tagline: {
      ar: 'منصة متجر تجارة إلكترونية متكامل لعرض المنتجات، إدارة سلة الشراء، ومعالجة الطلبات.',
      en: 'E-commerce platform for product cataloging, cart management, and streamlined customer checkout flows.',
    },
    category: {
      ar: 'مشاريع وأنظمة العملاء',
      en: 'Client Projects & Systems',
    },
    categoryKey: 'client',
    role: {
      ar: 'تطوير متجر الويب وتكامل مسار الشراء',
      en: 'E-Commerce Engineering & Checkout Integration',
    },
    status: {
      ar: 'مشروع عميل مكتمل',
      en: 'Completed Client Project',
    },
    techStack: ['E-Commerce Architecture', 'Cart & Checkout', 'Payment Integrations', 'Next.js'],
    hasCaseStudy: false,
    reviewStatus: 'pending',
    visibility: 'hidden',
    permissions: {
      clientName: false,
      clientLogo: false,
      projectUrl: false,
      screenshots: false,
      caseStudy: false,
      testimonial: false,
      metrics: false,
    },
    internalName: 'Safanur E-commerce',
    internalNotes: 'مشروع تجاري لعميل — محفوظ كدراسة حالة مجهّلة لحين اعتماد إذن النشر.',
    missingInformationForPublication: [
      'التحقق من إذن الإفصاح عن الاسم التجاري Safanur',
      'التحقق من الرابط العام النشط للمتجر',
      'تحديد ما إذا كان سيُنشر باسم العميل أو كدراسة حالة مجهّلة لمتجر تجزئة',
    ],
    overview: {
      ar: 'متجر تجارة إلكترونية لقطاع التجزئة يتميز بسرعة تحميل فائقة، فهرسة ديناميكية للأصناف، وسلة شراء محسنة لتقليل خطوات إتمام الطلب.',
      en: 'Retail e-commerce solution focused on sub-second page loads, categorized product inventories, and a friction-free checkout journey.',
    },
    keyFeatures: [],
  },

  {
    id: 'client-safanur-invoices',
    slug: 'commercial-invoicing-engine',
    level: 2,
    featured: false,
    title: {
      ar: 'نظام إدارة فواتير ومستحقات تجارية داخلية',
      en: 'Internal Commercial Billing & Invoicing Engine',
    },
    tagline: {
      ar: 'نظام داخلي لإصدار الفواتير ومتابعة الحسابات ومستحقات المبيعات والمدفوعات التشغيلية.',
      en: 'Internal invoicing and accounts receivable system for commercial operations and sales reconciliation.',
    },
    category: {
      ar: 'مشاريع وأنظمة العملاء',
      en: 'Client Projects & Systems',
    },
    categoryKey: 'client',
    role: {
      ar: 'تطوير نظام الفوترة والتقارير المالية الداخلية',
      en: 'Invoicing System Development & Financial Logic',
    },
    status: {
      ar: 'نظام داخلي قيد التشغيل',
      en: 'Internal System in Operation',
    },
    techStack: ['Invoicing Engine', 'Accounting Workflows', 'PDF Generation', 'Database Management'],
    hasCaseStudy: false,
    reviewStatus: 'pending',
    visibility: 'hidden',
    permissions: {
      clientName: false,
      clientLogo: false,
      projectUrl: false,
      screenshots: false,
      caseStudy: false,
      testimonial: false,
      metrics: false,
    },
    internalName: 'Safanur Invoices',
    internalNotes: 'نظام مالي وداخلي — يُعامل بحذر إضافي. يجب ألا تنشر أي أرقام فواتير أو بيانات مالية حقيقية.',
    missingInformationForPublication: [
      'موافقة مستقلة تماماً عن موافقة متجر التجزئة',
      'حجب كافة البيانات المالية الحقيقية والأسماء من أي شاشات أو نماذج',
      'تجهيز دراسة حالة مجهّلة (Anonymized) تركز على الحل البرمجي للفوترة بدلاً من هوية العميل',
    ],
    overview: {
      ar: 'نظام فواتير داخلي مخصص للعمليات التجارية، يتولى إدارة ومتابعة الفواتير الصادرة للمبيعات، وتتبع التحصيلات المستحقة، وتوليد تقارير مالية دورية.',
      en: 'Internal financial tool engineered for commercial operations, tracking outbound customer invoices, payment collections, and period-end balance reporting.',
    },
    keyFeatures: [],
  },

  {
    id: 'client-insan-orphans',
    slug: 'social-welfare-system',
    level: 2,
    featured: false,
    title: {
      ar: 'منظومة كفالة ومساعدات اجتماعية لمنظمة غير ربحية كبرى',
      en: 'Social Welfare & Sponsorship Management System',
    },
    tagline: {
      ar: 'منظومة سحابية متخصصة لإدارة سجلات الكفالة، مطابقة الكفلاء، ومتابعة الصرف الدوري بحماية مشددة لخصوصية المستفيدين.',
      en: 'Specialized welfare management system governing sponsorship records, donor matching, and periodic disbursements with strict beneficiary privacy safeguards.',
    },
    category: {
      ar: 'مشاريع وأنظمة العملاء',
      en: 'Client Projects & Systems',
    },
    categoryKey: 'client',
    role: {
      ar: 'المعمارية البرمجية وهندسة قواعد البيانات وحماية الخصوصية',
      en: 'System Architecture, Database Engineering & Privacy Controls',
    },
    status: {
      ar: 'نظام مؤسسي قيد الاستخدام',
      en: 'Enterprise Non-Profit System in Production',
    },
    techStack: ['Enterprise Security', 'Relational Database', 'Role-Based Access Control', 'Financial Audit Trail'],
    hasCaseStudy: false,
    reviewStatus: 'pending',
    visibility: 'hidden',
    permissions: {
      clientName: false,
      clientLogo: false,
      projectUrl: false,
      screenshots: false,
      caseStudy: false,
      testimonial: false,
      metrics: false,
    },
    internalName: 'نظام كفالة الأيتام لمنظمة إنسان الخيرية',
    internalNotes: 'نظام إنساني واجتماعي حساس جداً. يُمنع منعاً باتاً نشر أي بيانات شخصية أو حقيقية للمستفيدين أو الكفلاء تحت أي ظرف.',
    missingInformationForPublication: [
      'حظر تام لأي بيانات شخصية أو سجلات حقيقية للمستفيدين أو العائلات',
      'إذن خطي رسمي من إدارة الجمعية بشأن ذكر الاسم أو تحويله إلى دراسة حالة مجهّلة معتمدة',
      'اعتماد بيانات تجريبية وهمية 100% في حال تصميم مخططات معمارية توضيحية',
    ],
    overview: {
      ar: 'منظومة رعاية وكفالة متخصصة لمنظمة غير ربحية كبرى، صُممت لتسهيل إدارة سجلات الأيتام والأسر المستفيدة، وتنظيم التبرعات ومطابقة الكفلاء مع الحفاظ التام على خصوصية المستفيدين وعزل البيانات الحساسة.',
      en: 'Specialized welfare and sponsorship platform engineered for a major non-profit, structuring beneficiary records, donor matching, and disbursement tracking with strict confidentiality safeguards.',
    },
    keyFeatures: [],
  },

  {
    id: 'client-sba-invoices',
    slug: 'sba-invoicing-system',
    level: 1,
    featured: false,
    title: {
      ar: 'نظام فوترة وإدارة مطالبات مالية لمؤسسة إعلامية',
      en: 'Enterprise Invoicing & Billing Audit System',
    },
    tagline: {
      ar: 'نظام مؤسسي متقدم لأتمتة إصدار الفواتير، تدقيق العقود الإعلانية، ومطابقة التحصيلات المالية المجدولة.',
      en: 'Enterprise platform automating complex billing cycles, contract verification, and scheduled reconciliation workflows.',
    },
    category: {
      ar: 'مشاريع وأنظمة العملاء',
      en: 'Client Projects & Systems',
    },
    categoryKey: 'client',
    role: {
      ar: 'هندسة نظام الفوترة والربط المحاسبي وتصميم نماذج التدقيق',
      en: 'Billing Engine Architecture, Reconciliation Logic & Enterprise UX',
    },
    year: '2024',
    status: {
      ar: 'نظام مؤسسي نشط',
      en: 'Enterprise System in Production',
    },
    techStack: ['Next.js', 'TypeScript', 'Invoicing Engine', 'Audit Trail', 'PostgreSQL', 'Data Integrity'],
    hasCaseStudy: false,
    reviewStatus: 'pending',
    visibility: 'hidden',
    permissions: {
      clientName: false,
      clientLogo: false,
      projectUrl: false,
      screenshots: false,
      caseStudy: false,
      testimonial: false,
      metrics: false,
    },
    internalName: 'نظام فواتير هيئة الإذاعة والتلفزيون في السعودية',
    internalNotes: 'جهة حكومية رسمية ونظام مالي داخلي — تم حجب الهوية الرسمية بالكامل وتطبيق دراسة حالة مجهّلة هندسياً.',
    missingInformationForPublication: [
      'الحصول على موافقة رسمية مكتوبة أو تفويض معتمد لنشر اسم الهيئة أو شعارها',
      'صياغة دراسة حالة مجهّلة (Anonymized Case Study) كبديل يركز على التحدي الهندسي لنظام الفوترة المؤسسي',
      'عدم نشر أي أرقام تعاقدات أو مبالغ مالية أو بيانات شركاء تجاريين',
    ],
    overview: {
      ar: 'دراسة حالة هندسية معمارية مجهّلة لنظام فوترة ومطالبات مالية صُمم لمؤسسة إعلامية كبرى، يتناول معالجة دورات الفوترة المعقدة، والتحقق التلقائي من بنود العقود الإعلانية، وأتمتة المطابقة المالية مع تقليل الأخطاء البشرية.',
      en: 'Anonymized architectural case study of an enterprise billing and invoicing platform engineered for a major media institution, addressing high-volume cycles, automated advertising contract verification, and reconciliation governance.',
    },
    problem: {
      ar: 'تكرار الأخطاء اليدوية في إعداد الفواتير الضخمة المرتبطة بحملات إعلامية مجدولة، وبطء إجراءات مطابقة الدفعات والتحصيل بين الإدارات المالية والتجارية.',
      en: 'Manual errors in consolidating multi-tier media campaigns into compliant invoices, combined with sluggish cross-departmental reconciliation between commercial sales and accounting ledgers.',
    },
    solution: {
      ar: 'بناء محرك فوترة مؤسسي مؤتمت يطابق بنود التعاقد وجداول البث تلقائياً مع جداول التسليم، ويولد مطالبات مالية دقيقة وفق قواعد محاسبية صارمة مع سجل تدقيق غير قابل للتعديل.',
      en: 'Engineered an automated enterprise billing engine that cross-references commercial contract milestones against broadcast fulfillment records, generating compliant financial claims backed by immutable audit trails.',
    },
    architecture: {
      ar: 'معمارية معيارية تركز على سلامة العمليات المحاسبية (ACID Transactions)، مع عزل كامل بين طبقة تدقيق العقود وطبقة توليد الفواتير وضمان عدم حدوث فوترة مزدوجة.',
      en: 'Modular enterprise architecture prioritizing transaction idempotency, complete ledger isolation between contract auditing and invoice dispatch, and zero duplicate billing.',
    },
    technicalImplementation: [
      {
        title: {
          ar: 'محرك مطابقة العقود والفوترة الآلية',
          en: 'Contract Reconciliation & Automated Invoicing Engine',
        },
        details: [
          {
            ar: 'قواعد تدقيق حسابية تتحقق من شروط الدفع والخصومات والضرائب بدقة تامة.',
            en: 'Automated validation engines enforcing payment terms, tiered discounts, and tax liabilities.',
          },
          {
            ar: 'توليد مستندات فوترة رسمية بصيغة قياسية موحدة قابلة للتصدير والأرشفة الرقمية.',
            en: 'Standardized invoice document generation with automated archival and retrieval indices.',
          },
        ],
      },
      {
        title: {
          ar: 'سجل التدقيق المؤسسي وتتبع الصلاحيات',
          en: 'Audit Logging & Enterprise Governance',
        },
        details: [
          {
            ar: 'توثيق كامل لكل عملية إنشاء أو تعديل أو اعتماد للفاتورة مع تسجيل المعرف الزمني.',
            en: 'Comprehensive chronological audit trail recording creator identity, supervisor approvals, and timestamps.',
          },
          {
            ar: 'فصل صلاحيات الإدخال والمراجعة والاعتماد المالي لمنع تعارض المصالح.',
            en: 'Role-based separation of concerns between data entry clerks, billing auditors, and financial officers.',
          },
        ],
      },
    ],
    infrastructure: {
      ar: 'بيئة تشغيل خاصة متوافقة مع متطلبات الأمان الداخلي وعزل البيانات المالية الحساسة.',
      en: 'On-premise enterprise deployment complying with strict internal security standards and financial data isolation.',
    },
    keyFeatures: [
      {
        ar: 'أتمتة دورات الفوترة الدورية وتوليد المطالبات المالية المجدولة.',
        en: 'Automated recurring billing cycles and scheduled enterprise claim generation.',
      },
      {
        ar: 'سجل تدقيق رقابي كامل لتتبع التعديلات والاعتمادات المحاسبية.',
        en: 'Comprehensive regulatory audit trail tracking all financial updates and sign-offs.',
      },
      {
        ar: 'واجهة استخدام مؤسسية سريعة صُممت لتقليل وقت إدخال ومراجعة البيانات.',
        en: 'High-efficiency enterprise interface designed to minimize operator review time and entry errors.',
      },
    ],
    lessonsLearned: [
      {
        ar: 'في الأنظمة المؤسسية الكبرى، الاستثمار في تصميم سجل تدقيق محكم وصلاحيات دقيقة يوفّر مئات ساعات التحقيق والمطابقة لاحقاً.',
        en: 'In large-scale enterprise systems, robust audit trails and strict authorization boundaries save hundreds of hours in future reconciliation audits.',
      },
    ],
  },

  {
    id: 'client-camel-club',
    slug: 'cultural-events-portal',
    level: 2,
    featured: false,
    title: {
      ar: 'بوابة رقمية ومنصة فعاليات ومسابقات تراثية كبرى',
      en: 'Digital Event Portal & Registration Platform',
    },
    tagline: {
      ar: 'حلول رقمية لدعم الفعاليات والمسابقات والمشاركين والتغطية الإعلامية للمهرجانات الكبرى.',
      en: 'Digital solutions supporting event operations, participant registries, and media coverage for large-scale heritage festivals.',
    },
    category: {
      ar: 'مشاريع وأنظمة العملاء',
      en: 'Client Projects & Systems',
    },
    categoryKey: 'client',
    role: {
      ar: 'تطوير المنصة وحلول البوابة الرقمية',
      en: 'Digital Portal Engineering & Responsive Development',
    },
    status: {
      ar: 'مشروع فعاليات مكتمل',
      en: 'Completed Event Platform Project',
    },
    techStack: ['Portal Engineering', 'High-Traffic Scaling', 'Responsive Web', 'Registration Systems'],
    hasCaseStudy: false,
    reviewStatus: 'pending',
    visibility: 'hidden',
    permissions: {
      clientName: false,
      clientLogo: false,
      projectUrl: false,
      screenshots: false,
      caseStudy: false,
      testimonial: false,
      metrics: false,
    },
    internalName: 'نادي الإبل في السعودية',
    internalNotes: 'مشروع لبوابة وفعاليات رسمية، محفوظ كدراسة حالة مجهّلة لحين توفر تفويض معتمد لنشر الاسم.',
    missingInformationForPublication: [
      'مراجعة وتأكيد إذن النشر المؤسسي من إدارة الفعالية أو النادي',
      'تحديد النطاق المسموح به للنشر (اسم، شعار، صور معتمدة)',
      'التحقق من الروابط العامة المصرح بها وتوثيق الدور المنفذ بدقة',
    ],
    overview: {
      ar: 'بوابة رقمية تفاعلية صُممت لخدمة الفعاليات التراثية الكبرى وإدارة تسجيل المتسابقين وتسهيل التغطية الإعلامية مع قدرة عالية على استيعاب حركة الزوار الكثيفة.',
      en: 'Interactive web platform designed for major cultural and heritage festivals, managing participant registration workflows and media dissemination under peak traffic loads.',
    },
    keyFeatures: [],
  },
];

// =============================================================================
// 2. PRIVACY & SANITIZATION ENGINE
// =============================================================================

/**
 * Returns an anonymized title if clientName permission is not granted.
 */
function getAnonymizedTitle(project: PortfolioProject): { ar: string; en: string } {
  if (project.id === 'client-sba-invoices') {
    return {
      ar: 'نظام فوترة وإدارة مطالبات مالية لمؤسسة إعلامية وطنية',
      en: 'Enterprise Invoicing & Claims Management System for National Media Corporation',
    };
  }
  if (project.id === 'client-insan-orphans') {
    return {
      ar: 'منظومة كفالة ومساعدات اجتماعية لمنظمة غير ربحية كبرى',
      en: 'Social Welfare & Sponsorship Management System for Large Non-Profit',
    };
  }
  if (project.id === 'client-safanur-ecommerce') {
    return {
      ar: 'متجر تجارة إلكترونية وسلة شراء سريعة لقطاع التجزئة',
      en: 'Retail E-Commerce Platform & High-Speed Checkout',
    };
  }
  if (project.id === 'client-safanur-invoices') {
    return {
      ar: 'نظام إدارة فواتير ومستحقات تجارية داخلية',
      en: 'Internal Commercial Billing & Invoicing Engine',
    };
  }
  if (project.id === 'client-camel-club') {
    return {
      ar: 'بوابة رقمية ومنصة فعاليات ومسابقات تراثية كبرى',
      en: 'Digital Event Portal & Registration Platform for Cultural Organization',
    };
  }
  if (project.id === 'client-hayrukum') {
    return {
      ar: 'بوابة رقمية لخدمات المستفيدين والتعليم المجتمعي',
      en: 'Institutional Community Services & Identity Portal',
    };
  }
  if (project.id === 'client-umutnesli') {
    return {
      ar: 'بوابة ويب مؤسسية لإدارة الأنشطة والبرامج التعليمية',
      en: 'Institutional Educational Portal & Program Management',
    };
  }
  return project.title;
}

/**
 * Strips confidential, unpermitted, and internal governance fields before
 * projects are sent to client components or public renderers.
 */
export function sanitizeProjectForPublicDisplay(project: PortfolioProject): PortfolioProject {
  const isAnonymized = project.visibility === 'anonymized';

  return {
    ...project,
    // Strictly strip internal tracking fields
    internalName: undefined,
    internalNotes: undefined,
    needsReviewInfo: undefined,
    missingInformationForPublication: undefined,

    // Permissions enforcement:
    liveUrl: project.permissions.projectUrl && project.verifiedUrl ? project.liveUrl : undefined,
    coverImage: project.permissions.screenshots ? project.coverImage : undefined,
    additionalImages: project.permissions.screenshots ? project.additionalImages : undefined,

    // Title masking for anonymized projects
    title: !project.permissions.clientName || isAnonymized ? getAnonymizedTitle(project) : project.title,
  };
}

// =============================================================================
// 3. PUBLIC ACCESSORS (Zero Leakage Guarantee)
// =============================================================================

/**
 * Returns strictly the published, approved, non-hidden projects.
 * Hidden projects are excluded here and will NEVER be bundled into client JS.
 */
export function getPublishedProjects(): PortfolioProject[] {
  return MASTER_PROJECTS_REGISTRY.filter(
    (project) => project.reviewStatus === 'approved' && project.visibility !== 'hidden'
  ).map(sanitizeProjectForPublicDisplay);
}

/**
 * Main export for portfolio projects. Contains ONLY approved published projects.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = getPublishedProjects();

export function getAllPortfolioProjects(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS;
}

/**
 * Returns projects that are approved, published, AND have a documented case study.
 * Used for generateStaticParams and sitemap to avoid dead links or empty case study pages.
 */
export function getPublishedProjectsWithCaseStudy(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.hasCaseStudy === true);
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

/**
 * Internal accessor for verification and audit scripts.
 */
export function getMasterProjectsRegistry(): PortfolioProject[] {
  return MASTER_PROJECTS_REGISTRY;
}

// =============================================================================
// 4. PORTFOLIO CATEGORIES DEFINITION
// =============================================================================

export const PORTFOLIO_CATEGORIES: {
  key: ProjectCategoryKey;
  label: { ar: string; en: string };
  description: { ar: string; en: string };
}[] = [
  {
    key: 'all',
    label: { ar: 'جميع المشاريع المنشورة', en: 'All Published Projects' },
    description: {
      ar: 'فهرس شامل لكافة المشاريع والمنتجات المعتمدة للنشر العام وفق ضوابط الخصوصية واتفاقيات عدم الإفصاح.',
      en: 'Curated index of software products and verified client engineering milestones cleared for public view.',
    },
  },
  {
    key: 'saas',
    label: { ar: 'منتجات SaaS', en: 'SaaS Products' },
    description: {
      ar: 'منتجات برمجية سحابية مستقلة طُوّرت لتمكين الأنشطة التجارية والمالية من العمل بكفاءة عالية.',
      en: 'Independent SaaS platforms engineered for digital merchants, business workflows, and high-speed financial operations.',
    },
  },
  {
    key: 'client',
    label: { ar: 'مشاريع العملاء', en: 'Client Systems' },
    description: {
      ar: 'أنظمة ويب وتجارة إلكترونية وحلول مالية ومؤسسية طُوّرت للعملاء وتخضع لمراجعة أذونات النشر لحماية السرية.',
      en: 'Custom e-commerce, invoicing, and institutional platforms engineered for clients under strict confidentiality governance.',
    },
  },
  {
    key: 'anonymized-case-study',
    label: { ar: 'دراسات حالة مجهّلة ومعتمدة', en: 'Anonymized Case Studies' },
    description: {
      ar: 'دراسات حالة هندسية ومعمارية مجهّلة الهوية، تركز على التحديات التقنية والتصميم البرمجي مع الحفاظ على سرية العملاء.',
      en: 'Architecture and engineering deep-dives with redacted client identities, focusing purely on technical challenges and solutions.',
    },
  },
];
