import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover hover:-translate-y-0.5 shadow-ambient-sm",
  ghost:
    "bg-surface-card ghost-border text-on-surface hover:bg-surface-high hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[length:var(--font-size-body-sm)]",
  md: "px-6 py-2.5 text-[length:var(--font-size-body-sm)]",
  lg: "px-8 py-3 text-[length:var(--font-size-body-md)]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-body font-medium rounded-sm transition-all duration-[var(--duration-fast)] ease-[var(--ease-sovereign)] cursor-pointer whitespace-nowrap",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
