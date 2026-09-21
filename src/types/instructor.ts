/**
 * WEB CREATOR AI — Instructor Profile Types
 * Fully decoupled and configurable without hardcoded claims.
 */

import { LocalizedString } from './content';

export interface InstructorSocialLink {
  platform: 'github' | 'gitlab' | 'linkedin' | 'instagram' | 'twitter' | 'website' | 'youtube' | 'email';
  url: string;
  label: string;
}

export interface TeachingPhilosophyItem {
  number: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface InstructorSkillGroup {
  category: LocalizedString;
  skills: {
    name: string;
    level: 'core' | 'advanced' | 'tool';
    badge?: string;
  }[];
}

export interface InstructorProjectShowcase {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  role: LocalizedString;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  keyHighlight: LocalizedString;
  problem?: LocalizedString;
  approach?: LocalizedString;
  architecture?: LocalizedString;
  decisions?: LocalizedString[];
}

export interface InstructorProfile {
  name: LocalizedString;
  roleTitle: LocalizedString;
  coreMessage: LocalizedString; // "I don't just build software. I teach others how to build it."
  briefIntro: LocalizedString;  // For "قبل أن نبدأ..." section on Home
  story: {
    title: LocalizedString;
    paragraphs: LocalizedString[];
  };
  whatIBuild: {
    title: LocalizedString;
    description: LocalizedString;
    focusAreas: LocalizedString[];
  };
  whatITeach: {
    title: LocalizedString;
    description: LocalizedString;
    coreTracks: LocalizedString[];
  };
  developerPlusInstructor: {
    title: LocalizedString;
    developerSide: {
      headline: LocalizedString;
      points: LocalizedString[];
    };
    instructorSide: {
      headline: LocalizedString;
      points: LocalizedString[];
    };
    synergyStatement: LocalizedString;
  };
  teachingPhilosophy: {
    title: LocalizedString;
    items: TeachingPhilosophyItem[];
  };
  skills: InstructorSkillGroup[];
  showcaseProjects: InstructorProjectShowcase[];
  messageToStudents: {
    title: LocalizedString;
    content: LocalizedString[];
    closingQuote: LocalizedString;
  };
  socialLinks: InstructorSocialLink[];
  email?: string;
  phone?: string;
  phoneDisplay?: string;
  yearsOfExperience?: string;
}
