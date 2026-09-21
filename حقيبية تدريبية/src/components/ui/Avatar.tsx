import React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base font-semibold",
  xl: "w-20 h-20 text-xl font-bold",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  name,
  size = "md",
  className,
  ...props
}) => {
  const isInstructor = Boolean(
    name &&
    (name.includes("عبد الحكيم") ||
      name.includes("Abdulhakim") ||
      name.includes("AQ")),
  );
  const effectiveSrc = src || (isInstructor ? "/myphoto.jfif" : undefined);

  const getInitials = (str?: string) => {
    if (!str) return "AQ";
    const parts = str.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden select-none",
        "border-2 border-[var(--color-border)] bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold",
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {effectiveSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={effectiveSrc}
          alt={alt || name || "Abdulhakim Kanbr"}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
};
