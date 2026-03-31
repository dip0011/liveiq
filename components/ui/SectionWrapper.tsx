import { cn } from "@/lib/cn";
import { type HTMLAttributes } from "react";

type SurfaceLevel = 0 | 1 | 2;

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  surfaceLevel?: SurfaceLevel;
}

const surfaceStyles: Record<SurfaceLevel, string> = {
  0: "bg-surface",
  1: "bg-surface-low",
  2: "bg-surface-card",
};

function SectionWrapper({
  surfaceLevel = 0,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-28",
        surfaceStyles[surfaceLevel],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export { SectionWrapper };
