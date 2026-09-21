'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeStyles = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  className,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-desc' : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Body */}
      <div
        className={cn(
          'relative w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xl z-10 text-start',
          'animate-in fade-in zoom-in-95 duration-150',
          sizeStyles[size],
          className
        )}
      >
        <div className="flex items-start justify-between pb-4 border-b border-[var(--color-border-subtle)] mb-4">
          <div>
            {title && (
              <h3 id="modal-title" className="text-h3 font-semibold text-[var(--color-text)]">
                {title}
              </h3>
            )}
            {description && (
              <p id="modal-desc" className="text-body-sm text-[var(--color-text-muted)] mt-1">
                {description}
              </p>
            )}
          </div>
          <IconButton
            variant="ghost"
            size="sm"
            aria-label="إغلاق النافذة"
            onClick={onClose}
            className="text-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
          >
            <X className="w-4 h-4" />
          </IconButton>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};
