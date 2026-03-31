import { cn } from "@/lib/cn";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-card rounded-md p-8",
        hover &&
          "transition-transform duration-[var(--duration-fast)] ease-[var(--ease-sovereign)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
