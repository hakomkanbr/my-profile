/**
 * WEB CREATOR AI — 12-Session Interactive Course Presentation Engine Types
 * Unified schemas for Live Zoom Teaching, Progressive Reveals, Speaker Notes,
 * Timelines, and Student Focus Mode.
 */

import { LocalizedString } from './content';

export type PresentationSlideType =
  | 'title'
  | 'context'
  | 'question'
  | 'think'
  | 'reveal'
  | 'concept'
  | 'visual'
  | 'code'
  | 'demo'
  | 'comparison'
  | 'ai'
  | 'challenge'
  | 'project'
  | 'takeaway'
  | 'next';

export type SlideIllustrationType =
  | 'idea-to-website'
  | 'owner-user-website'
  | 'cluttered-vs-clean'
  | 'web-creator-workflow'
  | 'site-pages-map'
  | 'page-anatomy'
  | 'before-after-ui'
  | 'ai-loop'
  | 'prompt-anatomy'
  | 'analyze-plan-build'
  | 'html-css-building'
  | 'responsive-devices'
  | 'js-interaction'
  | 'components-lego'
  | 'nextjs-seo-preview'
  | 'pre-launch-checklist'
  | 'client-value-bridge'
  | 'capstone-roadmap';

export interface TimelineBlock {
  timeRange: string; // e.g. "00:00 – 00:10"
  durationMinutes: number;
  label: LocalizedString;
  type: 'context' | 'concept' | 'demo' | 'ai' | 'practice' | 'review' | 'takeaway' | 'comparison';
}

export interface TitleSlidePayload {
  sessionNumber: string; // "01", "02", ...
  kicker: LocalizedString;
  headline: LocalizedString;
  subheadline: LocalizedString;
  totalSessions: string; // "12"
  durationMinutes: number; // 90
  tags: string[];
}

export interface ContextSlidePayload {
  industryShift: LocalizedString;
  whyItMatters: LocalizedString;
  realWorldProblem: LocalizedString;
}

export interface QuestionSlidePayload {
  question: LocalizedString;
  contextHint?: LocalizedString;
  promptToClass: LocalizedString;
  expectedAnswers?: LocalizedString[];
}

export interface ThinkSlidePayload {
  prompt: LocalizedString;
  durationSeconds: number; // 30, 60, etc.
  guidancePoints: LocalizedString[];
}

export interface RevealSlidePayload {
  premise: LocalizedString;
  steps: {
    number: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
}

export interface ConceptSlidePayload {
  principle: LocalizedString;
  tagline: LocalizedString;
  explanation: LocalizedString;
  bulletPoints: LocalizedString[];
  architecturalRule?: LocalizedString;
}

export interface VisualSlidePayload {
  caption: LocalizedString;
  diagramType: 'pipeline' | 'flow' | 'layers' | 'grid';
  nodes: {
    id: string;
    stepNumber?: string;
    title: LocalizedString;
    description?: LocalizedString;
    badge?: string;
  }[];
}

export interface CodeSlidePayload {
  language: string;
  codeSnippet: string;
  what: LocalizedString;
  why: LocalizedString;
  when: LocalizedString;
  beforeSnippet?: string;
  afterSnippet?: string;
}

export interface DemoSlidePayload {
  objective: LocalizedString;
  promptToUse?: string;
  instructorSteps: LocalizedString[];
  expectedOutput: LocalizedString;
}

export interface ComparisonSlidePayload {
  leftHeader: LocalizedString;
  rightHeader: LocalizedString;
  dimensions: {
    dimension: LocalizedString;
    left: LocalizedString;
    right: LocalizedString;
  }[];
  balancedVerdict: LocalizedString;
}

export interface AIPromptSlidePayload {
  role: string;
  context: string;
  task: string;
  constraints: string;
  input?: string;
  output: string;
  acceptanceCriteria: string[];
  iterationTip?: LocalizedString;
}

export interface ChallengeSlidePayload {
  mission: LocalizedString;
  durationMinutes: number;
  objective: LocalizedString;
  instructions: LocalizedString[];
  starterPromptOrCode?: string;
  deliverable: LocalizedString;
}

export interface ProjectSlidePayload {
  phaseName: LocalizedString;
  stepNumber: string;
  whatWeBuildNow: LocalizedString;
  deliverables: LocalizedString[];
  connectionToFinalProject: LocalizedString;
}

export interface TakeawaySlidePayload {
  takeaways: {
    number: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
  coreMotto: LocalizedString;
}

export interface NextSlidePayload {
  nextSessionNumber: string;
  nextSessionTitle: LocalizedString;
  teaser: LocalizedString;
  preparationHint?: LocalizedString;
}

export interface PresentationEngineSlide {
  id: string;
  sessionNumber: number;
  slideNumber: number;
  totalSlides?: number;
  type: PresentationSlideType;
  title: LocalizedString;
  subtitle?: LocalizedString;
  visualType?: SlideIllustrationType;
  realWorldExample?: LocalizedString;
  estimatedMinutes: number;
  teachingGoal: LocalizedString;
  speakerNotes: LocalizedString;
  expectedResponse?: LocalizedString;
  demoInstructions?: LocalizedString;
  aiPromptHelper?: LocalizedString;

  // Slide type specific payload
  payload:
    | { type: 'title'; data: TitleSlidePayload }
    | { type: 'context'; data: ContextSlidePayload }
    | { type: 'question'; data: QuestionSlidePayload }
    | { type: 'think'; data: ThinkSlidePayload }
    | { type: 'reveal'; data: RevealSlidePayload }
    | { type: 'concept'; data: ConceptSlidePayload }
    | { type: 'visual'; data: VisualSlidePayload }
    | { type: 'code'; data: CodeSlidePayload }
    | { type: 'demo'; data: DemoSlidePayload }
    | { type: 'comparison'; data: ComparisonSlidePayload }
    | { type: 'ai'; data: AIPromptSlidePayload }
    | { type: 'challenge'; data: ChallengeSlidePayload }
    | { type: 'project'; data: ProjectSlidePayload }
    | { type: 'takeaway'; data: TakeawaySlidePayload }
    | { type: 'next'; data: NextSlidePayload };
}

export interface PresentationSession {
  id: string; // e.g. "session-01"
  number: number; // 1 to 12
  slug: string; // "session-01"
  title: LocalizedString;
  subtitle: LocalizedString;
  durationMinutes: number; // 90
  goal: LocalizedString;
  prerequisites: LocalizedString[];
  objectives: LocalizedString[];
  timeline: TimelineBlock[];
  projectMilestone: LocalizedString;
  aiRole: LocalizedString;
  marketConnection: LocalizedString;
  slides: PresentationEngineSlide[];
  startScreen: {
    badge: string;
    headline: LocalizedString;
    description: LocalizedString;
    sessionGoal: LocalizedString;
  };
  endScreen: {
    headline: LocalizedString;
    keyRecap: LocalizedString[];
    nextSessionTitle: LocalizedString;
    nextSessionNumber: string;
  };
}
