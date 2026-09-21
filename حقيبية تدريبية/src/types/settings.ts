/**
 * WEB CREATOR AI — Settings & Preferences Types
 */

export type AppLanguage = 'ar' | 'en';
export type AppTheme = 'light' | 'dark' | 'system';
export type AppMode = 'trainee' | 'trainer';

export interface UserPreferences {
  language: AppLanguage;
  theme: AppTheme;
  mode: AppMode;
  codeEditorFontSize: number;
  autoSaveNotes: boolean;
}

export interface TrainerSessionState {
  isPresenterActive: boolean;
  isFullscreen: boolean;
  activeSlideIndex: number;
  showTrainerNotes: boolean;
  timerMinutes: number;
  timerSeconds: number;
  isTimerRunning: boolean;
  currentLessonId?: string;
}
