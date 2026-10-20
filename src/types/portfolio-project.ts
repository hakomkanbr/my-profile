import { LocalizedString } from './content';

export type ProjectCaseStudyLevel = 1 | 2 | 3;

/**
 * Project categories matching portfolio requirements:
 * - 'all': جميع المشاريع المنشورة
 * - 'saas': منتجات SaaS
 * - 'client': مشاريع العملاء
 * - 'anonymized-case-study': دراسات حالة مجهّلة ومعتمدة
 * - 'personal-education' | 'web-app' | 'education': مشاريع وتطبيقات تعليمية
 */
export type ProjectCategoryKey =
  | 'all'
  | 'saas'
  | 'client'
  | 'anonymized-case-study'
  | 'personal-education'
  | 'web-app'
  | 'education';

export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export type ProjectVisibility = 'public' | 'anonymized' | 'hidden';

/**
 * Granular publication permissions per project field.
 * Principle: Absence of information !== permission.
 * Permitting client name does not imply permitting logo or screenshots.
 */
export interface ProjectPublicationPermissions {
  clientName: boolean;
  clientLogo: boolean;
  projectUrl: boolean;
  screenshots: boolean;
  caseStudy: boolean;
  testimonial: boolean;
  metrics: boolean;
}

/**
 * Backward compatibility alias for client consent
 */
export interface ProjectClientConsent {
  nameAllowed: boolean;
  logoAllowed: boolean;
  detailsAllowed: boolean;
  urlAllowed: boolean;
}

export interface ProjectTechnicalPillar {
  title: LocalizedString;
  details: LocalizedString[];
}

export interface ProjectChallengeItem {
  challenge: LocalizedString;
  solution: LocalizedString;
}

export interface PortfolioProject {
  id?: string;
  slug: string;
  level: ProjectCaseStudyLevel;
  featured: boolean;

  // Presentation Titles & Tagline
  title: LocalizedString;
  tagline: LocalizedString;
  category: LocalizedString;
  categoryKey: ProjectCategoryKey;

  // Role, Status & Timing
  role: LocalizedString;
  year?: string;
  status?: LocalizedString;

  // Tech Stack & Links
  techStack: string[];
  liveUrl?: string;
  verifiedUrl?: boolean;
  repoUrl?: string;
  coverImage?: string;
  additionalImages?: string[];
  hasCaseStudy?: boolean;

  // SaaS Specific Context
  productAudience?: LocalizedString;

  // Case Study Sections
  overview: LocalizedString;
  problem?: LocalizedString;
  solution?: LocalizedString;
  results?: LocalizedString;
  architecture?: LocalizedString;
  technicalImplementation?: ProjectTechnicalPillar[];
  infrastructure?: LocalizedString;
  engineeringChallenges?: ProjectChallengeItem[];
  keyFeatures: LocalizedString[];
  lessonsLearned?: LocalizedString[];
  measuredResults?: LocalizedString[];

  // Privacy & Publication Governance (Strictly internal, sanitized for public consumption)
  reviewStatus: ReviewStatus;
  visibility: ProjectVisibility;
  permissions: ProjectPublicationPermissions;
  clientConsent?: ProjectClientConsent; // For backwards compatibility
  internalName?: string; // Private internal identifier (e.g., actual client name)
  internalNotes?: string; // Private developer notes
  needsReviewInfo?: string[]; // Legacy alias
  missingInformationForPublication?: string[]; // Checklist needed before publication
}

