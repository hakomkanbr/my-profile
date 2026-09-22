export type WritingCategory =
  | 'architecture'
  | 'web-engineering'
  | 'devops-cloud'
  | 'ai-workflows';

export interface WritingSection {
  heading: { ar: string; en: string };
  paragraphs: { ar: string; en: string }[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: { ar: string; en: string };
  };
}

export interface EngineeringWriting {
  slug: string;
  title: { ar: string; en: string };
  summary: { ar: string; en: string };
  category: WritingCategory;
  categoryLabel: { ar: string; en: string };
  publishedAt: string;
  readTimeMinutes: number;
  featured: boolean;
  tags: string[];
  keyTakeaways: { ar: string; en: string }[];
  sections: WritingSection[];
}
