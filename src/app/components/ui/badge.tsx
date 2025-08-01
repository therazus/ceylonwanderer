import { cn } from "../../lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
  size?: "small" | "medium" | "large";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  size = "medium",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full",
        "transition-colors duration-300",
        {
          // Variants
          "bg-primary/10 text-primary": variant === "primary",
          "bg-secondary/10 text-secondary": variant === "secondary",
          "bg-primary/20 text-primary": variant === "success",
          "bg-red-100 text-red-800": variant === "danger",
          "bg-yellow-100 text-yellow-800": variant === "warning",

          // Sizes
          "px-2 py-0.5 text-xs": size === "small",
          "px-3 py-1 text-sm": size === "medium",
          "px-4 py-1.5 text-base": size === "large",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
