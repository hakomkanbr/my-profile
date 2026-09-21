'use client';

import React from 'react';
import { PortfolioHeader } from './PortfolioHeader';
import { PortfolioFooter } from './PortfolioFooter';

export interface PortfolioShellProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const PortfolioShell: React.FC<PortfolioShellProps> = ({
  children,
  showFooter = true,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)] antialiased transition-colors">
      <PortfolioHeader />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      {showFooter && <PortfolioFooter />}
    </div>
  );
};
