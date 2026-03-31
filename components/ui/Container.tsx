import { cn } from "@/lib/cn";
import { type HTMLAttributes } from "react";

type ContainerWidth = "narrow" | "default" | "wide" | "full";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
}

const widthStyles: Record<ContainerWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-full",
};

function Container({
  width = "wide",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 md:px-8 lg:px-12",
        widthStyles[width],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
