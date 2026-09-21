import { PresentationSession } from '@/types';
import { SESSION_01 } from './session-01';
import { SESSION_02 } from './session-02';
import { SESSION_03 } from './session-03';
import { SESSION_04 } from './session-04';
import { SESSION_05 } from './session-05';
import { SESSION_06 } from './session-06';
import { SESSION_07 } from './session-07';
import { SESSION_08 } from './session-08';
import { SESSION_09 } from './session-09';
import { SESSION_10 } from './session-10';
import { SESSION_11 } from './session-11';
import { SESSION_12 } from './session-12';

export * from './session-01';
export * from './session-02';
export * from './session-03';
export * from './session-04';
export * from './session-05';
export * from './session-06';
export * from './session-07';
export * from './session-08';
export * from './session-09';
export * from './session-10';
export * from './session-11';
export * from './session-12';

export const PRESENTATION_SESSIONS: PresentationSession[] = [
  SESSION_01,
  SESSION_02,
  SESSION_03,
  SESSION_04,
  SESSION_05,
  SESSION_06,
  SESSION_07,
  SESSION_08,
  SESSION_09,
  SESSION_10,
  SESSION_11,
  SESSION_12,
];

export function getAllPresentationSessions(): PresentationSession[] {
  return PRESENTATION_SESSIONS;
}

export function getPresentationSessionById(
  idOrSlug: string
): PresentationSession | undefined {
  const normalized = idOrSlug.toLowerCase().trim();
  
  // Try exact match by id or slug (e.g. "session-01")
  const directMatch = PRESENTATION_SESSIONS.find(
    (s) => s.id === normalized || s.slug === normalized
  );
  if (directMatch) return directMatch;

  // Try numeric match (e.g. "01", "1")
  const num = parseInt(normalized.replace(/^session-?/, ''), 10);
  if (!isNaN(num)) {
    return PRESENTATION_SESSIONS.find((s) => s.number === num);
  }

  return undefined;
}

export function getPresentationSessionByNumber(
  num: number
): PresentationSession | undefined {
  return PRESENTATION_SESSIONS.find((s) => s.number === num);
}
