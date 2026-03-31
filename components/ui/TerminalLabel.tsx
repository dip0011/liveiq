import { cn } from "@/lib/cn";

interface TerminalLabelProps {
  children: string;
  className?: string;
}

function TerminalLabel({ children, className }: TerminalLabelProps) {
  return (
    <span
      className={cn(
        "text-technical-sm text-on-surface-faint inline-block",
        className
      )}
    >
      {children}
    </span>
  );
}

export { TerminalLabel };
