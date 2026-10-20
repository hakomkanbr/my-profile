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
    id: "port-projects",
    label: { ar: "المشاريع", en: "Projects" },
    href: "/projects",
    icon: "FolderGit2",
  },
  {
    id: "port-writings",
    label: { ar: "المقالات", en: "Articles" },
    href: "/writings",
    icon: "BookOpen",
  },
  {
    id: "port-resources",
    label: { ar: "الموارد", en: "Resources" },
    href: "/resources",
    icon: "Bookmark",
  },
  {
    id: "port-about",
    label: { ar: "عنّي", en: "About" },
    href: "/about",
    icon: "User",
  },
  {
    id: "port-contact",
    label: { ar: "تواصل", en: "Contact" },
    href: "/contact",
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
    label: { ar: "الرئيسية", en: "Home" },
    href: "/web-creator-ai",
    icon: "Sparkles",
  },
  {
    id: "learn-sessions",
    label: { ar: "الجلسات", en: "Sessions" },
    href: "/web-creator-ai/sessions",
    icon: "Monitor",
    badge: { ar: "12", en: "12" },
    description: {
      ar: "الجلسة النشطة وفهرس الجلسات الـ 12 المباشرة",
      en: "Live active session & 12 curriculum sessions",
    },
  },
  {
    id: "learn-journey",
    label: { ar: "المراحل", en: "Roadmap" },
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
    label: { ar: "الوحدات", en: "Modules" },
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
    label: { ar: "المشاريع", en: "Projects" },
    href: "/web-creator-ai/projects",
    icon: "Briefcase",
    description: {
      ar: "ورش عمل بناء مشاريع ومواقع ويب حقيقية",
      en: "Hands-on workshops building real web apps",
    },
  },
  {
    id: "learn-ai-lab",
    label: { ar: "مختبر AI", en: "AI Lab" },
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
    label: { ar: "التسويق", en: "Marketing" },
    href: "/web-creator-ai/marketing-lab",
    icon: "TrendingUp",
    description: {
      ar: "أدوات تهيئة محركات البحث وجلب الزوار والعملاء",
      en: "Technical SEO & client acquisition strategies",
    },
  },
  {
    id: "learn-resources",
    label: { ar: "المراجع", en: "Resources" },
    href: "/web-creator-ai/resources",
    icon: "Bookmark",
    description: {
      ar: "ملفات وأوراق مساعدة وروابط المطورين",
      en: "Curated developer cheat sheets and toolsets",
    },
  },
  {
    id: "learn-progress",
    label: { ar: "التقدم", en: "Progress" },
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
    label: { ar: "الرئيسية", en: "Cockpit" },
    href: "/trainer",
    icon: "Presentation",
  },
  {
    id: "trainer-curriculum",
    label: { ar: "المنهج", en: "Curriculum" },
    href: "/trainer/curriculum",
    icon: "Layers",
  },
  {
    id: "trainer-learners",
    label: { ar: "المتدربون", en: "Learners" },
    href: "/trainer/learners",
    icon: "UserCheck",
  },
  {
    id: "trainer-presentation",
    label: { ar: "العرض الحي", en: "Live Deck" },
    href: "/trainer/presentation",
    icon: "Monitor",
    badge: { ar: "LIVE", en: "LIVE" },
  },
];

/**
 * Backward compatibility alias
 */
export const MAIN_NAVIGATION_ITEMS = LEARNER_NAVIGATION_ITEMS;
