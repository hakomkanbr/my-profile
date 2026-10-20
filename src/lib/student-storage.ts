/**
 * WEB CREATOR AI — Student Local Storage Persistence
 * Ensures student tasks, code submissions, and completed activities
 * NEVER disappear on page refresh, and can be reviewed anytime.
 */

export interface StudentSubmission {
  sessionId: string;
  activityId: string;
  studentAnswer: string;
  completedAt: string;
  isCompleted: boolean;
}

const STORAGE_KEY = 'web_creator_ai_student_submissions_v1';
const DRAFTS_STORAGE_KEY = 'web_creator_ai_student_drafts_v1';

function getAllDrafts(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(DRAFTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) as Record<string, string> : {};
  } catch (err) {
    console.error('Failed to parse student drafts from localStorage:', err);
    return {};
  }
}

export function getStudentDraft(activityId: string): string {
  return getAllDrafts()[activityId] || '';
}

export function saveStudentDraft(activityId: string, answer: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const drafts = getAllDrafts();
    if (answer) drafts[activityId] = answer;
    else delete drafts[activityId];
    window.localStorage.setItem(DRAFTS_STORAGE_KEY, JSON.stringify(drafts));
    return true;
  } catch (err) {
    console.error('Failed to save student draft to localStorage:', err);
    return false;
  }
}

/**
 * Safely read all submissions from localStorage
 */
export function getAllSubmissions(): Record<string, StudentSubmission> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, StudentSubmission>;
  } catch (err) {
    console.error('Failed to parse student submissions from localStorage:', err);
    return {};
  }
}

/**
 * Save or update a student's activity submission
 */
export function saveStudentSubmission(
  sessionId: string,
  activityId: string,
  studentAnswer: string
): StudentSubmission {
  const current = getAllSubmissions();
  const submission: StudentSubmission = {
    sessionId,
    activityId,
    studentAnswer: studentAnswer.trim(),
    completedAt: new Date().toISOString(),
    isCompleted: true,
  };

  current[activityId] = submission;

  // A submitted answer supersedes its draft; submissions remain in their original store.
  saveStudentDraft(activityId, '');

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (err) {
      console.error('Failed to save student submission to localStorage:', err);
    }
  }

  return submission;
}

/**
 * Get all completed submissions for a specific session
 */
export function getSessionSubmissions(sessionId: string): StudentSubmission[] {
  const all = getAllSubmissions();
  return Object.values(all).filter((sub) => sub.sessionId === sessionId && sub.isCompleted);
}

/**
 * Check if a specific activity is completed
 */
export function isActivityCompleted(activityId: string): boolean {
  const all = getAllSubmissions();
  return !!all[activityId]?.isCompleted;
}

/**
 * Get a specific activity's submission
 */
export function getStudentSubmissionForActivity(activityId: string): StudentSubmission | null {
  const all = getAllSubmissions();
  return all[activityId] || null;
}

/**
 * Get list of completed activity IDs for a session
 */
export function getCompletedActivityIds(sessionId: string): string[] {
  return getSessionSubmissions(sessionId).map((s) => s.activityId);
}

/**
 * Calculate completion percentage and stats for a session
 */
export function getSessionCompletionStats(sessionId: string, totalActivities: number) {
  const completedList = getCompletedActivityIds(sessionId);
  const total = Math.max(1, totalActivities);
  const completedCount = completedList.length;
  const percent = Math.min(100, Math.round((completedCount / total) * 100));

  return {
    completedCount,
    totalCount: totalActivities,
    percent,
    isAllCompleted: totalActivities > 0 && completedCount >= totalActivities,
  };
}
