import { LocalizedString } from './content';

export interface NavigationItem {
  id: string;
  label: LocalizedString;
  href: string;
  icon: string; // Lucide icon name
  badge?: LocalizedString;
  description?: LocalizedString;
  isExternal?: boolean;
  requiredMode?: 'trainee' | 'trainer' | 'all';
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  id: string;
  label: LocalizedString | string;
  href?: string;
  isCurrent?: boolean;
}
