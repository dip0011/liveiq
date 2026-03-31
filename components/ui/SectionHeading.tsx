import { cn } from "@/lib/cn";
import { TerminalLabel } from "./TerminalLabel";

interface SectionHeadingProps {
  terminalLabel?: string;
  headline: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

function SectionHeading({
  terminalLabel,
  headline,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {terminalLabel && (
        <TerminalLabel className="mb-4 block">{terminalLabel}</TerminalLabel>
      )}
      <h2
        className={cn(
          "font-display font-bold text-on-surface",
          "text-3xl md:text-4xl lg:text-[length:var(--font-size-display-sm)]",
          "tracking-[var(--tracking-tight)] leading-[var(--leading-headline)]"
        )}
      >
        {headline}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-on-surface-muted font-body",
            "text-[length:var(--font-size-body-lg)] leading-[var(--leading-body)]",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
