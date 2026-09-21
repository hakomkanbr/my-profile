/**
 * WEB CREATOR AI — Presentation System Types
 * Unified model for Trainer Mode and Learner Mode.
 */

import { LocalizedString, JourneyStageId } from './content';

export type InteractionType = 'quiz' | 'reveal' | 'code' | 'checklist';

export interface SlideQuizInteraction {
  type: 'quiz';
  question: LocalizedString;
  options: LocalizedString[];
  correctAnswerIndex: number;
  explanation: LocalizedString;
}

export interface SlideRevealInteraction {
  type: 'reveal';
  beforeLabel: LocalizedString;
  beforeContent: LocalizedString;
  afterLabel: LocalizedString;
  afterContent: LocalizedString;
  note?: LocalizedString;
}

export interface SlideCodeInteraction {
  type: 'code';
  title: LocalizedString;
  language: string;
  code: string;
  highlightedLines?: number[];
  explanation: LocalizedString;
}

export interface SlideChecklistInteraction {
  type: 'checklist';
  title: LocalizedString;
  items: LocalizedString[];
}

export type SlideInteraction =
  | SlideQuizInteraction
  | SlideRevealInteraction
  | SlideCodeInteraction
  | SlideChecklistInteraction;

export interface PresentationSlide {
  id: string;
  stageId: JourneyStageId;
  stageCode: string; // e.g. "THINK", "DESIGN"
  stageNumber: string; // e.g. "01", "02"
  slideNumber: number;
  totalSlidesInStage?: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  keyConcept: LocalizedString;
  takeaways: LocalizedString[];
  interaction?: SlideInteraction;
  trainerNotes: LocalizedString; // Explicit speaking tips for live Zoom sessions
}
