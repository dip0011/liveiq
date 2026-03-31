import { cn } from "@/lib/cn";

interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success";
  className?: string;
}

const variantStyles = {
  default: "bg-surface-high text-on-surface-muted",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
};

function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-technical-sm",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export { Chip };
