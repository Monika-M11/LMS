import React, { useState } from "react";
import theme from "./theme";// adjust path as needed

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
          style={{ color: theme.textPrimary }}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: theme.textMuted }}
          >
            {leftIcon}
          </span>
        )}

        <input
          type={resolvedType}
          className="w-full transition-all duration-200 outline-none"
          style={{
            padding: leftIcon 
              ? "12px 44px 12px 44px" 
              : "12px 16px",
            borderRadius: theme.radius.lg,
            border: error
              ? `1.5px solid ${theme.colors.error}`
              : `1.5px solid ${theme.borderDefault}`,
            background: theme.bgSurface,           // White / clean bg like in the image
            color: theme.textPrimary,
            fontFamily: theme.fonts.body,
            fontSize: "0.9375rem",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.borderFocus;     // Navy light on focus
            e.currentTarget.style.boxShadow = 
              `0 0 0 3px rgba(48, 54, 79, 0.10)`; // Soft navy glow
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error
              ? theme.colors.error
              : theme.borderDefault;
            e.currentTarget.style.boxShadow = "none";
          }}
          {...props}
        />

        {/* Password toggle */}
        {isPassword && (
          <button
            type="button"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: theme.textMuted }}
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            {/* ... existing eye icon code ... */}
          </button>
        )}
      </div>

      {/* Error / hint */}
      {error ? (
        <p className="text-xs" style={{ color: theme.colors.error }}>
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs" style={{ color: theme.textMuted }}>
          {hint}
        </p>
      ) : null}
    </div>
  );
};

export default Input;