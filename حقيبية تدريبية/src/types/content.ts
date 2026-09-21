/**
 * WEB CREATOR AI — Content Types & Schemas
 * Decoupled & strictly-typed content models.
 */

export interface LocalizedString {
  ar: string;
  en: string;
}

export type JourneyStageId =
  | '01-think'
  | '02-design'
  | '03-build'
  | '04-develop'
  | '05-enhance'
  | '06-launch'
  | '07-grow';

export interface JourneyStage {
  id: JourneyStageId;
  order: number;
  number: string; // e.g. "01"
  code: string;   // e.g. "THINK"
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  philosophyStep: 'LEARN' | 'BUILD' | 'PRACTICE' | 'USE AI' | 'LAUNCH' | 'MARKET';
  icon: string; // Lucide icon identifier
  color: {
    primary: string;
    secondary: string;
    border: string;
    bgGlow: string;
  };
  associatedModuleIds: string[];
}

export type LessonType = 'interactive' | 'theory' | 'code-lab' | 'ai-prompt' | 'project-walkthrough';

export interface QuizQuestion {
  id: string;
  question: LocalizedString;
  options: LocalizedString[];
  correctAnswerIndex: number;
  explanation: LocalizedString;
}

export interface PracticalChallenge {
  id: string;
  title: LocalizedString;
  objective: LocalizedString;
  instructions: LocalizedString[];
  starterSnippet?: string;
  solutionSnippet?: string;
  aiPromptHelper?: LocalizedString; // Pro prompt to give AI for guidance
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Lesson {
  id: string;
  moduleId: string;
  stageId: JourneyStageId;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  summary: LocalizedString;
  estimatedMinutes: number;
  type: LessonType;
  learningObjectives: LocalizedString[];
  contentMarkdown: LocalizedString;
  codeSnippets?: {
    id: string;
    title: LocalizedString;
    language: string;
    code: string;
    explanation?: LocalizedString;
  }[];
  challenge?: PracticalChallenge;
  quiz?: QuizQuestion[];
  keyTakeaways: LocalizedString[];
  aiAssistedTips?: LocalizedString[];
  trainerNotes?: LocalizedString; // Special notes visible only in Trainer Mode
}

export interface Module {
  id: string;
  number: string; // e.g. "01"
  stageId: JourneyStageId;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  badge: LocalizedString;
  icon: string;
  color: string;
  estimatedHours: number;
  targetOutcome: LocalizedString;
  prerequisites?: LocalizedString[];
  lessons: Lesson[];
}

export interface ProjectMilestone {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  tasks: {
    id: string;
    title: LocalizedString;
    isKeyDeliverable: boolean;
  }[];
}

export interface Project {
  id: string;
  code: string; // e.g. "PRJ-01"
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  stageId: JourneyStageId;
  moduleId: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Capstone';
  targetOutput: LocalizedString;
  techStack: string[];
  repoTemplateUrl?: string;
  liveDemoUrl?: string;
  aiToolsRecommended: string[];
  milestones: ProjectMilestone[];
  tipsForSuccess: LocalizedString[];
  aiMasterPrompt?: LocalizedString;
  starterCodeSnippet?: string;
  starterCodeLang?: string;
  fileStructureTree?: string;
  estimatedHours?: number;
}

export interface AIPromptItem {
  id: string;
  category: 'ui-ux' | 'code-generation' | 'debugging' | 'refactoring' | 'seo-marketing' | 'learning-companion';
  title: LocalizedString;
  description: LocalizedString;
  targetModel: 'Claude' | 'ChatGPT' | 'Gemini' | 'Any LLM';
  promptTemplate: LocalizedString;
  sampleInput?: string;
  sampleOutput?: string;
  tags: string[];
}

export interface ResourceItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  category: 'documentation' | 'tool' | 'cheat-sheet' | 'asset' | 'template';
  url: string;
  isExternal: boolean;
  badge?: string;
}
