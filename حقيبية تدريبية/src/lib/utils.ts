import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LocalizedString, AppLanguage } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalizedText(
  item: LocalizedString | undefined,
  lang: AppLanguage = 'ar',
  fallback: string = ''
): string {
  if (!item) return fallback;
  return item[lang] || item.ar || item.en || fallback;
}

export function triggerJsonDownload(data: unknown, filename: string): void {
  if (typeof window === 'undefined') return;
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
