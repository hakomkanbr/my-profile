import { NavigationItem } from "@/types";

/**
 * EXPERIENCE A — PERSONAL PORTFOLIO NAVIGATION
 * Header-first navigation for Abdulhakim Kanbr's personal hub.
 */
export const PORTFOLIO_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "port-home",
    label: { ar: "الرئيسية", en: "Home" },
    href: "/",
    icon: "Home",
  },
  {
    id: "port-about",
    label: { ar: "عنّي", en: "About" },
    href: "/#about",
    icon: "User",
  },
  {
    id: "port-experience",
    label: { ar: "الخبرات", en: "Experience" },
    href: "/#experience",
    icon: "Briefcase",
  },
  {
    id: "port-projects",
    label: { ar: "المشاريع", en: "Projects" },
    href: "/#projects",
    icon: "FolderGit2",
  },
  {
    id: "port-training",
    label: { ar: "التدريب", en: "Training" },
    href: "/#training",
    icon: "GraduationCap",
  },
  {
    id: "port-contact",
    label: { ar: "تواصل", en: "Contact" },
    href: "/#contact",
    icon: "Mail",
  },
];

/**
 * EXPERIENCE B — LEARNER NAVIGATION (WEB CREATOR AI)
 * Contextual learning journey navigation for trainees.
 */
export const LEARNER_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "learn-overview",
    label: { ar: "نظرة عامة", en: "Overview" },
    href: "/web-creator-ai",
    icon: "Sparkles",
  },
  {
    id: "learn-journey",
    label: { ar: "رحلة التعلم (01-07)", en: "Learning Journey" },
    href: "/web-creator-ai/journey",
    icon: "Compass",
    badge: { ar: "01-07", en: "01-07" },
    description: {
      ar: "مسار المراحل السبع من الفكرة إلى الإطلاق",
      en: "The 7-stage roadmap from idea to market",
    },
  },
  {
    id: "learn-modules",
    label: { ar: "الوحدات التدريبية", en: "Modules" },
    href: "/web-creator-ai/modules",
    icon: "Layers",
    badge: { ar: "10", en: "10" },
    description: {
      ar: "فهرس الوحدات العشر الكاملة والدروس",
      en: "The 10 core engineering modules and lessons",
    },
  },
  {
    id: "learn-projects",
    label: { ar: "المشاريع التطبيقية", en: "Projects" },
    href: "/web-creator-ai/projects",
    icon: "Briefcase",
    description: {
      ar: "ورش عمل بناء مشاريع ومواقع ويب حقيقية",
      en: "Hands-on workshops building real web apps",
    },
  },
  {
    id: "learn-ai-lab",
    label: { ar: "مختبر الذكاء الاصطناعي", en: "AI Lab" },
    href: "/web-creator-ai/ai-lab",
    icon: "Sparkles",
    badge: { ar: "PRO", en: "PRO" },
    description: {
      ar: "موجهات وأدوات تطوير الويب بالذكاء الاصطناعي",
      en: "AI prompts & workflows for modern engineers",
    },
  },
  {
    id: "learn-marketing-lab",
    label: { ar: "مختبر التسويق والـ SEO", en: "Marketing Lab" },
    href: "/web-creator-ai/marketing-lab",
    icon: "TrendingUp",
    description: {
      ar: "أدوات تهيئة محركات البحث وجلب الزوار والعملاء",
      en: "Technical SEO & client acquisition strategies",
    },
  },
  {
    id: "learn-resources",
    label: { ar: "الموارد والمراجع", en: "Resources" },
    href: "/web-creator-ai/resources",
    icon: "Bookmark",
    description: {
      ar: "ملفات وأوراق مساعدة وروابط المطورين",
      en: "Curated developer cheat sheets and toolsets",
    },
  },
  {
    id: "learn-progress",
    label: { ar: "متابعة التقدم", en: "Progress" },
    href: "/web-creator-ai/progress",
    icon: "Award",
    description: {
      ar: "إنجازاتك وسجل الدروس المكتملة",
      en: "Track completed milestones and challenges",
    },
  },
];

/**
 * EXPERIENCE C — TRAINER COCKPIT NAVIGATION
 * Dedicated navigation items for the instructor.
 */
export const TRAINER_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "trainer-cockpit",
    label: { ar: "لوحة تحكم المدرب", en: "Trainer Cockpit" },
    href: "/trainer",
    icon: "Presentation",
  },
  {
    id: "trainer-curriculum",
    label: { ar: "إدارة المنهج والدروس", en: "Curriculum" },
    href: "/trainer/curriculum",
    icon: "Layers",
  },
  {
    id: "trainer-learners",
    label: { ar: "متابعة المتدربين", en: "Learners" },
    href: "/trainer/learners",
    icon: "UserCheck",
  },
  {
    id: "trainer-presentation",
    label: { ar: "وضع العرض المباشر", en: "Presentation Mode" },
    href: "/trainer/presentation",
    icon: "Monitor",
    badge: { ar: "LIVE", en: "LIVE" },
  },
];

/**
 * Backward compatibility alias
 */
export const MAIN_NAVIGATION_ITEMS = LEARNER_NAVIGATION_ITEMS;
