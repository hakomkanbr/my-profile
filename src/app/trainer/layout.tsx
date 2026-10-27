import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trainer Workspace',
  robots: { index: false, follow: false },
};

export default function TrainerLayout({ children }: LayoutProps<'/trainer'>) {
  return children;
}
