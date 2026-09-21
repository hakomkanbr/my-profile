'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delayMs?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
  distance?: number;
  durationMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delayMs,
  delay,
  direction = 'up',
  distance = 20,
  durationMs = 500,
  ...props
}) => {
  const actualDelay = delay ?? delayMs ?? 0;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'none';
    if (direction === 'up') return `translate3d(0, ${distance}px, 0)`;
    if (direction === 'down') return `translate3d(0, -${distance}px, 0)`;
    return 'none';
  };

  return (
    <div
      ref={ref}
      className={cn('transition-all', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${actualDelay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // ease-emphasized
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  index: number;
  baseDelayMs?: number;
  staggerIntervalMs?: number;
  className?: string;
}> = ({
  children,
  index,
  baseDelayMs = 0,
  staggerIntervalMs = 80,
  className,
}) => {
  return (
    <Reveal
      delayMs={baseDelayMs + index * staggerIntervalMs}
      direction="up"
      distance={16}
      durationMs={450}
      className={className}
    >
      {children}
    </Reveal>
  );
};
