'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';
import { IconButton } from '../ui/IconButton';

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = true,
  className,
  ...props
}) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div
      dir="ltr"
      className={cn(
        'w-full my-4 rounded-2xl overflow-hidden border border-[var(--color-code-border)]',
        'bg-[var(--color-code-bg)] text-[var(--color-code-text)] shadow-md',
        className
      )}
      {...props}
    >
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--color-code-surface)] border-b border-[var(--color-code-border)] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          {filename ? (
            <span className="ms-2 font-mono text-[var(--color-code-muted)] font-medium">
              {filename}
            </span>
          ) : (
            <span className="ms-2 font-mono uppercase tracking-wider text-[var(--color-code-muted)] font-semibold">
              {language}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <IconButton
            variant="ghost"
            size="sm"
            aria-label={hasCopied ? 'تم النسخ' : 'نسخ الكود'}
            onClick={handleCopy}
            className="text-[var(--color-code-muted)] hover:text-white hover:bg-white/10"
          >
            {hasCopied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </IconButton>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto text-start">
        <pre className="text-code m-0 p-0">
          <code className="grid">
            {lines.map((line, idx) => (
              <div key={idx} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell select-none pe-4 text-end text-[var(--color-code-muted)]/50 font-mono text-xs">
                    {idx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre">{line || ' '}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};
