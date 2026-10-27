import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teaching',
  description: 'An overview of Abdulhakim Kanbr’s practical software development and web engineering teaching.',
  alternates: { canonical: '/teaching' },
};

export default function TeachingLayout({ children }: LayoutProps<'/teaching'>) {
  return children;
}
