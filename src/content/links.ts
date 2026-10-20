import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { getPortfolioProjectBySlug } from '@/content/portfolio-projects';
import type { InstructorSocialLink, LocalizedString } from '@/types';

export type LinkCategory = 'social' | 'product' | 'learning';
export type LinkIcon = 'github' | 'gitlab' | 'linkedin' | 'instagram' | 'masar' | 'cashpro' | 'learning';

export interface PersonalLink {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  url: string;
  icon: LinkIcon;
  category: LinkCategory;
  order: number;
  published: boolean;
  external: boolean;
  handle?: string;
}

type LinkSource =
  | { kind: 'social'; platform: InstructorSocialLink['platform'] }
  | { kind: 'project'; slug: string }
  | { kind: 'route'; url: string };

interface LinkDefinition extends Omit<PersonalLink, 'url' | 'handle'> {
  source: LinkSource;
}

/**
 * Edit this registry to change labels, ordering, visibility, or presentation.
 * Social and product URLs are resolved from the existing profile/project data.
 */
const LINK_DEFINITIONS: LinkDefinition[] = [
  {
    id: 'github',
    title: { ar: 'GitHub', en: 'GitHub' },
    source: { kind: 'social', platform: 'github' },
    icon: 'github',
    category: 'social',
    order: 1,
    published: true,
    external: true,
  },
  {
    id: 'linkedin',
    title: { ar: 'LinkedIn', en: 'LinkedIn' },
    source: { kind: 'social', platform: 'linkedin' },
    icon: 'linkedin',
    category: 'social',
    order: 2,
    published: true,
    external: true,
  },
  {
    id: 'gitlab',
    title: { ar: 'GitLab', en: 'GitLab' },
    source: { kind: 'social', platform: 'gitlab' },
    icon: 'gitlab',
    category: 'social',
    order: 3,
    published: true,
    external: true,
  },
  {
    id: 'instagram',
    title: { ar: 'Instagram', en: 'Instagram' },
    source: { kind: 'social', platform: 'instagram' },
    icon: 'instagram',
    category: 'social',
    order: 4,
    published: true,
    external: true,
  },
  {
    id: 'masar',
    title: { ar: 'Masar', en: 'Masar' },
    description: { ar: 'إدارة الأعمال والعمليات المالية', en: 'Business and financial operations management' },
    source: { kind: 'project', slug: 'masar' },
    icon: 'masar',
    category: 'product',
    order: 1,
    published: true,
    external: true,
  },
  {
    id: 'cashpro',
    title: { ar: 'CashPro', en: 'CashPro' },
    description: { ar: 'عمليات مالية وتحويلات سريعة', en: 'Fast financial operations and transfers' },
    source: { kind: 'project', slug: 'cashpro' },
    icon: 'cashpro',
    category: 'product',
    order: 2,
    published: true,
    external: true,
  },
  {
    id: 'web-creator-ai',
    title: { ar: 'WEB CREATOR AI', en: 'WEB CREATOR AI' },
    description: { ar: 'مسار عملي لتعلّم بناء مواقع الويب', en: 'A practical path to learning web creation' },
    source: { kind: 'route', url: '/web-creator-ai' },
    icon: 'learning',
    category: 'learning',
    order: 1,
    published: true,
    external: false,
  },
];

function resolveLink(definition: LinkDefinition): PersonalLink | undefined {
  const { source, ...displayData } = definition;
  if (source.kind === 'route') return { ...displayData, url: source.url };

  if (source.kind === 'social') {
    const social = INSTRUCTOR_PROFILE.socialLinks.find((item) => item.platform === source.platform);
    if (!social?.url) return undefined;
    return {
      ...displayData,
      url: social.url,
      handle: new URL(social.url).pathname.replace(/^\//, '').replace(/\/$/, ''),
    };
  }

  const project = getPortfolioProjectBySlug(source.slug);
  if (!project?.liveUrl || !project.verifiedUrl) return undefined;
  return { ...displayData, url: project.liveUrl };
}

export const PERSONAL_LINKS: PersonalLink[] = LINK_DEFINITIONS
  .flatMap((definition) => {
    const link = resolveLink(definition);
    return link ? [link] : [];
  })
  .sort((a, b) => a.order - b.order);
