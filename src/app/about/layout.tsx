import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'How Abdulhakim Kanbr approaches software design, system boundaries, and maintainable web products.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: LayoutProps<'/about'>) {
  return children;
}
