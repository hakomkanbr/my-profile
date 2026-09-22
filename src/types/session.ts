import { LocalizedString } from './content';

export type SessionStatus = 'draft' | 'scheduled' | 'active' | 'completed' | 'archived';

export type ActivityType =
  | 'concept'
  | 'demo'
  | 'task'
  | 'challenge'
  | 'discussion'
  | 'review'
  | 'code';

export interface StudentActivityContent {
  headline: LocalizedString;
  whatAmIDoing: LocalizedString;
  whyAmIDoingIt: LocalizedString;
  howDoIDoIt: LocalizedString[];
  expectedResult: LocalizedString;
  hints: LocalizedString[];
  starterSnippet?: string;
  exampleSnippet?: string;
}

export interface TrainerActivityGuide {
  teachingGoal: LocalizedString;
  whatToExplain: LocalizedString[];
  suggestedQuestions: LocalizedString[];
  example: LocalizedString;
  commonMistakes: LocalizedString[];
  hints: LocalizedString[];
  challenge: LocalizedString;
  ifStudentIsStuck: LocalizedString;
  extension: LocalizedString;
  teachingNotes: LocalizedString;
  discussionIdeas: LocalizedString[];
}

export interface SessionActivity {
  id: string;
  order: number;
  type: ActivityType;
  title: LocalizedString;
  durationMinutes: number;
  studentContent: StudentActivityContent;
  trainerGuide: TrainerActivityGuide;
}

export interface SessionStudent {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  status: 'enrolled' | 'active' | 'completed' | 'needs-help' | 'needs_help';
  progressPercent: number;
  completedActivities: string[];
  notes?: string;
  lastActiveAt?: string;
}

export interface EducationalSession {
  id: string;
  number: number;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  status: SessionStatus;
  scheduledDate?: string;
  durationMinutes: number;
  trainer: {
    id: string;
    name: LocalizedString;
    role: LocalizedString;
  };
  targetStageNumber: string;
  targetModuleName: LocalizedString;
  objectives: LocalizedString[];
  activities: SessionActivity[];
  students: SessionStudent[];
  createdAt?: string;
  updatedAt?: string;
}
