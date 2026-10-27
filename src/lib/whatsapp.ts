/**
 * Centralized WhatsApp Click-to-Chat Configuration & Message Builders
 * Target Number: +905382015072
 */

import { AppLanguage } from '@/types';

export const WHATSAPP_CONFIG = {
  /** Digits-only format required by https://wa.me/ */
  phoneDigits: '905382015072',
  /** E.164 format */
  phoneE164: '+905382015072',
  /** Human-readable display format */
  phoneDisplay: '+90 538 201 50 72',
  /** Safe character threshold for inline answers inside wa.me URLs */
  maxInlineAnswerLength: 1500,
  /** Preview length when an answer exceeds maxInlineAnswerLength */
  longAnswerPreviewLength: 600,
} as const;

/**
 * Builds a valid WhatsApp Click-to-Chat URL using encodeURIComponent.
 */
export function buildWhatsAppUrl(
  message: string,
  phoneDigits: string = WHATSAPP_CONFIG.phoneDigits
): string {
  const cleanPhone = phoneDigits.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Opens WhatsApp Click-to-Chat in a new tab safely and returns the generated URL.
 */
export function openWhatsAppChat(
  message: string,
  phoneDigits: string = WHATSAPP_CONFIG.phoneDigits
): string {
  const url = buildWhatsAppUrl(message, phoneDigits);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return url;
}

/**
 * Checks whether a trainee's answer or code snippet is too long for reliable URL query encoding.
 */
export function isAnswerTooLongForWhatsApp(answer: string): boolean {
  return answer.trim().length > WHATSAPP_CONFIG.maxInlineAnswerLength;
}

/**
 * Downloads text content as a UTF-8 .txt file on the user's device.
 */
export function downloadTextFile(filename: string, content: string): void {
  if (typeof window === 'undefined') return;
  const safeName = filename.endsWith('.txt') ? filename : `${filename}.txt`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = safeName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Returns the current page URL safely on the client, or a fallback URL on the server.
 */
export function getCurrentPageUrl(fallbackPath = ''): string {
  if (typeof window !== 'undefined' && window.location?.href) {
    return window.location.href;
  }
  const base = 'https://abdulhakimkanbr.com';
  if (!fallbackPath) return base;
  return `${base}${fallbackPath.startsWith('/') ? fallbackPath : `/${fallbackPath}`}`;
}

export interface ActivitySubmissionMessageParams {
  sessionNumber: number;
  sessionTitle: string;
  activityOrder?: number;
  activityTitle: string;
  studentName?: string;
  answer: string;
  activityUrl?: string;
  attachedFileName?: string;
}

/**
 * Template 1: Trainee Activity Submission from WEB CREATOR AI
 */
export function buildActivitySubmissionMessage(
  params: ActivitySubmissionMessageParams
): string {
  const {
    sessionNumber,
    sessionTitle,
    activityOrder,
    activityTitle,
    studentName,
    answer,
    activityUrl,
    attachedFileName,
  } = params;

  const trimmedAnswer = answer.trim();
  const isLong = isAnswerTooLongForWhatsApp(trimmedAnswer);
  const sessionLabel = `الجلسة ${String(sessionNumber).padStart(2, '0')} — ${sessionTitle}`;
  const activityLabel = activityOrder
    ? `النشاط ${String(activityOrder).padStart(2, '0')}: ${activityTitle}`
    : activityTitle;

  const resultBlock = isLong
    ? `${trimmedAnswer.slice(0, WHATSAPP_CONFIG.longAnswerPreviewLength)}...\n\n[ملاحظة: الإجابة كاملة مكوّنة من ${trimmedAnswer.length} حرفًا، وقد قمت بتنزيلها في ملف نصي (${attachedFileName || 'activity-result.txt'}) لإرفاقه في هذه المحادثة.]`
    : trimmedAnswer;

  const lines = [
    'مرحبًا أستاذ عبد الحكيم،',
    '',
    'أود إرسال نتيجة نشاط من WEB CREATOR AI.',
    '',
    'الدورة: WEB CREATOR AI',
    `الجلسة: ${sessionLabel}`,
    `النشاط: ${activityLabel}`,
    ...(studentName?.trim() ? [`اسم المتدرب: ${studentName.trim()}`] : []),
    '',
    'النتيجة أو الإجابة:',
    resultBlock,
    '',
    'رابط النشاط:',
    activityUrl || getCurrentPageUrl('/web-creator-ai'),
    '',
    'أرجو مراجعة النتيجة وإفادتي بالملاحظات، وشكرًا لك.',
  ];

  return lines.join('\n');
}

export interface ProjectSubmissionMessageParams {
  projectCode?: string;
  projectTitle: string;
  deliverableTitle?: string;
  studentName?: string;
  liveUrl?: string;
  githubUrl?: string;
  notes?: string;
  isLongNotes?: boolean;
  completedTasksCount?: number;
  totalTasksCount?: number;
  pageUrl?: string;
  language?: AppLanguage;
}

/**
 * Template 1B: Trainee Project / Capstone Deliverable Submission
 */
export function buildProjectSubmissionMessage(
  params: ProjectSubmissionMessageParams
): string {
  const {
    projectCode,
    projectTitle,
    deliverableTitle,
    studentName,
    liveUrl,
    githubUrl,
    notes,
    completedTasksCount,
    totalTasksCount,
    pageUrl,
  } = params;

  const projectHeader = projectCode
    ? `${projectCode} — ${projectTitle}`
    : deliverableTitle
      ? `${projectTitle} (${deliverableTitle})`
      : projectTitle;

  const lines = [
    'مرحبًا أستاذ عبد الحكيم،',
    '',
    'أود تسليم مخرجات مشروع تطبيقي من WEB CREATOR AI.',
    '',
    'الدورة: WEB CREATOR AI',
    `المشروع: ${projectHeader}`,
    ...(studentName?.trim() ? [`اسم المتدرب: ${studentName.trim()}`] : []),
    ...(typeof completedTasksCount === 'number' && typeof totalTasksCount === 'number'
      ? [`المهام المنجزة: ${completedTasksCount} من ${totalTasksCount}`]
      : []),
    '',
    'النتيجة والروابط:',
    ...(liveUrl?.trim() ? [`رابط المشروع المنشور (Live URL): ${liveUrl.trim()}`] : []),
    ...(githubUrl?.trim() ? [`رابط الكود المصدري (GitHub): ${githubUrl.trim()}`] : []),
    ...(notes?.trim() ? ['', 'ملاحظات المتدرب وملخص ما تم بناؤه:', notes.trim()] : []),
    '',
    'رابط صفحة المشروع:',
    pageUrl || getCurrentPageUrl('/web-creator-ai/projects'),
    '',
    'أرجو مراجعة المشروع وإفادتي بالملاحظات، وشكرًا لك.',
  ];

  return lines.join('\n');
}

export interface ClientInquiryMessageParams {
  name?: string;
  email?: string;
  projectType?: string;
  inquiryType?: string;
  projectOrService?: string;
  details?: string;
  message?: string;
  pageUrl?: string;
  language?: AppLanguage;
}

/**
 * Template 2: Client Project or Consultation Request
 */
export function buildClientInquiryMessage(params: ClientInquiryMessageParams): string {
  const {
    name,
    email,
    projectType,
    inquiryType,
    projectOrService,
    details,
    message,
    pageUrl,
  } = params;

  const resolvedType =
    projectType?.trim() ||
    [inquiryType?.trim(), projectOrService?.trim()].filter(Boolean).join(' — ') ||
    'استفسار عام عن مشروع أو خدمة';

  const resolvedDetails =
    details?.trim() ||
    message?.trim() ||
    'أرغب في مناقشة تفاصيل المشروع المتاح لديكم.';

  const lines = [
    'مرحبًا أستاذ عبد الحكيم،',
    '',
    'لدي استفسار بخصوص مشروع أو خدمة.',
    '',
    `الاسم: ${name?.trim() || 'زائر الموقع'}`,
    ...(email?.trim() ? [`البريد الإلكتروني: ${email.trim()}`] : []),
    `نوع المشروع أو الطلب: ${resolvedType}`,
    'التفاصيل:',
    resolvedDetails,
    '',
    'الرابط:',
    pageUrl || getCurrentPageUrl('/contact'),
  ];

  return lines.join('\n');
}

export interface ResourceRequestMessageParams {
  nameOrEmail?: string;
  topic: string;
  pageUrl?: string;
}

/**
 * Template 3: Resource Request or Joining Updates List
 */
export function buildResourceRequestMessage(params: ResourceRequestMessageParams): string {
  const { nameOrEmail, topic, pageUrl } = params;

  const lines = [
    'مرحبًا أستاذ عبد الحكيم،',
    '',
    'أرغب في طلب المورد أو الانضمام إلى قائمة المهتمين بالتحديثات القادمة.',
    '',
    `الاسم أو البريد: ${nameOrEmail?.trim() || 'غير محدد'}`,
    `الموضوع: ${topic.trim()}`,
    `الرابط: ${pageUrl || getCurrentPageUrl('/resources')}`,
  ];

  return lines.join('\n');
}

/**
 * Template 4: Request Full Resume / CV
 */
export function buildResumeRequestMessage(pageUrl?: string): string {
  return [
    'مرحبًا أستاذ عبد الحكيم،',
    '',
    'اطلعت على ملفك الشخصي في الموقع، وأرغب في طلب نسخة من السيرة الذاتية المفصلة (CV).',
    '',
    `الرابط: ${pageUrl || getCurrentPageUrl('/about')}`,
  ].join('\n');
}
