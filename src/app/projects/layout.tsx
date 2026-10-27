import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Projects',
  description: 'Explore software products and engineering case studies by Abdulhakim Kanbr, with project roles and technical context.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsLayout({ children }: LayoutProps<'/projects'>) {
  return children;
}
