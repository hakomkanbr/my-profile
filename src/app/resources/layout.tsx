import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Practical checklists, project templates, and learning material for building and organizing web projects.',
  alternates: { canonical: '/resources' },
};

export default function ResourcesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
