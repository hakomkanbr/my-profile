import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Resources',
  description: 'Reference material and practical resources for learners following the WEB CREATOR AI curriculum.',
  alternates: { canonical: '/web-creator-ai/resources' },
};

export default function LearningResourcesLayout({ children }: LayoutProps<'/web-creator-ai/resources'>) {
  return children;
}
