/**
 * WEB CREATOR AI — Progress & Analytics Types
 * Local-First structure, ready for future cloud sync.
 */

export interface QuizAttempt {
  quizId: string;
  lessonId: string;
  scorePercentage: number;
  totalQuestions: number;
  correctAnswers: number;
  completedAt: string;
}

export interface NoteEntry {
  id: string;
  targetId: string; // lessonId, projectId, or promptId
  targetType: 'lesson' | 'project' | 'prompt';
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface TraineeProgress {
  version: number;
  completedLessons: string[];     // array of lesson IDs
  completedChallenges: string[];  // array of challenge IDs
  completedProjects: string[];    // array of project IDs
  quizAttempts: Record<string, QuizAttempt>; // quizId -> attempt
  bookmarkedItems: string[];      // array of item IDs (lessons, tools, resources)
  notes: Record<string, NoteEntry>; // targetId -> note
  lastVisitedRoute?: string;
  lastVisitedLessonId?: string;
  startedAt: string;
  lastActiveAt: string;
  isDemoMode?: boolean;
}

export interface ProgressSummary {
  totalLessons: number;
  completedLessonsCount: number;
  lessonCompletionPercentage: number;
  totalProjects: number;
  completedProjectsCount: number;
  totalChallenges: number;
  completedChallengesCount: number;
  averageQuizScore: number;
  currentStageNumber: string;
  currentStageTitle: string;
}
