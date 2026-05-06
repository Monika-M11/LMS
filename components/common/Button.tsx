import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: React.ReactNode;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const variants: Record<string, string> = {
    primary:
      "text-[var(--color-cream)] hover:bg-[var(--color-navy-light)] focus-visible:ring-[var(--color-navy)]",
    secondary:
      "border border-[var(--color-steel)] text-[var(--color-navy)] hover:bg-[var(--color-sand-pale)] focus-visible:ring-[var(--color-steel)]",
    ghost:
      "text-[var(--color-navy)] hover:bg-[var(--color-sand-pale)] focus-visible:ring-[var(--color-steel)]",
    danger:
      "bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[var(--color-error)] hover:bg-[var(--color-error)] hover:text-white focus-visible:ring-[var(--color-error)]",
  };

  const sizes: Record<string, string> = {
    sm: "text-sm px-4 py-2 rounded-[var(--radius-md)]",
    md: "text-base px-6 py-3 rounded-[var(--radius-lg)]",
    lg: "text-lg px-8 py-4 rounded-[var(--radius-xl)]",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], "w-full", className)}
      style={
        variant === "primary"
          ? { background: "var(--color-navy)" }
          : undefined
      }
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Loading…
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;