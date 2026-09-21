'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNavigation } from './MobileNavigation';
import { Footer } from './Footer';

export interface AppShellProps {
  children: React.ReactNode;
  headerTitle?: string;
  showFooter?: boolean;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  headerTitle,
  showFooter = true,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex flex-row bg-[var(--color-background)] text-[var(--color-text)] antialiased transition-colors">
      {/* Desktop Persistent Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <Header
          onOpenMobileNav={() => setIsMobileNavOpen(true)}
          title={headerTitle}
        />

        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>

        {showFooter && <Footer />}
      </div>
    </div>
  );
};
