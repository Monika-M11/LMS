import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

const Input = ({ label, hint, error, leftIcon, type, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword && showPassword ? "text" : type;

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          className="block text-sm font-medium"
          style={{ color: "var(--color-navy)" }}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "var(--color-steel-dark)" }}
          >
            {leftIcon}
          </span>
        )}

        <input
          type={resolvedType}
          className="w-full transition-all duration-200 outline-none"
          style={{
            padding: leftIcon ? "12px 44px 12px 44px" : "12px 44px 12px 16px",
            borderRadius: "var(--radius-lg)",
            border: error
              ? "1.5px solid var(--color-error)"
              : "1.5px solid var(--color-border-default)",
            background: "var(--bg-surface)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--color-navy)";
            e.currentTarget.style.boxShadow =
              "0 0 0 3px rgba(48, 54, 79, 0.10)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error
              ? "var(--color-error)"
              : "var(--color-border-default)";
            e.currentTarget.style.boxShadow = "none";
          }}
          {...props}
        />

        {/* Password toggle */}
        {isPassword && (
          <button
            type="button"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: "var(--color-steel-dark)" }}
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            {showPassword ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Error / hint */}
      {error ? (
        <p className="text-xs" style={{ color: "var(--color-error)" }}>{error}</p>
      ) : hint ? (
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{hint}</p>
      ) : null}
    </div>
  );
};

export default Input;