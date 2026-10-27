import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Notes',
  description: 'Technical writing on software architecture, web engineering, and practical implementation decisions.',
  alternates: { canonical: '/writings' },
};

export default function WritingsLayout({ children }: LayoutProps<'/writings'>) {
  return children;
}
