import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WEB CREATOR AI',
  description: 'A practical learning platform for building web products, with a structured curriculum, exercises, and reference material.',
};

export default function WebCreatorAiLayout({ children }: LayoutProps<'/web-creator-ai'>) {
  return children;
}
