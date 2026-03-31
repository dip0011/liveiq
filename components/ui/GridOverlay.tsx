import { cn } from "@/lib/cn";

interface GridOverlayProps {
  className?: string;
}

function GridOverlay({ className }: GridOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 grid-overlay pointer-events-none",
        className
      )}
      aria-hidden="true"
    />
  );
}

export { GridOverlay };
