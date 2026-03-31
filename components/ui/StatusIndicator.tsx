import { cn } from "@/lib/cn";

interface StatusIndicatorProps {
  label: string;
  status?: "active" | "inactive";
  className?: string;
}

function StatusIndicator({
  label,
  status = "active",
  className,
}: StatusIndicatorProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "inline-block w-1.5 h-1.5 rounded-full",
          status === "active" ? "bg-primary" : "bg-on-surface-faint"
        )}
      />
      <span className="text-technical-sm text-on-surface-muted">{label}</span>
    </span>
  );
}

export { StatusIndicator };
