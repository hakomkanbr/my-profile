import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Abdulhakim Kanbr about software projects, engineering collaboration, or technical consultation.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: LayoutProps<'/contact'>) {
  return children;
}
