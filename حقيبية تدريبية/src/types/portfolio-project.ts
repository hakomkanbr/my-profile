import { LocalizedString } from './content';

export type ProjectCaseStudyLevel = 1 | 2 | 3;

export type ProjectCategoryKey = 'saas' | 'web-app' | 'education';

export interface ProjectTechnicalPillar {
  title: LocalizedString;
  details: LocalizedString[];
}

export interface ProjectChallengeItem {
  challenge: LocalizedString;
  solution: LocalizedString;
}

export interface PortfolioProject {
  slug: string;
  level: ProjectCaseStudyLevel;
  title: LocalizedString;
  tagline: LocalizedString;
  category: LocalizedString;
  categoryKey: ProjectCategoryKey;
  role: LocalizedString;
  year?: string;
  status?: LocalizedString;
  featured: boolean;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  overview: LocalizedString;
  problem?: LocalizedString;
  solution?: LocalizedString;
  architecture?: LocalizedString;
  technicalImplementation?: ProjectTechnicalPillar[];
  infrastructure?: LocalizedString;
  engineeringChallenges?: ProjectChallengeItem[];
  keyFeatures: LocalizedString[];
  lessonsLearned?: LocalizedString[];
}
