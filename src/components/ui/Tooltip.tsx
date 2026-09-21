'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'start' | 'end';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    start: 'right-full mr-2 top-1/2 -translate-y-1/2 rtl:right-auto rtl:left-full rtl:ml-2',
    end: 'left-full ml-2 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-full rtl:mr-2',
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 px-2.5 py-1 rounded-md text-caption font-medium whitespace-nowrap pointer-events-none',
            'bg-[var(--color-text)] text-[var(--color-surface)] shadow-md',
            'animate-in fade-in duration-100',
            positionStyles[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
